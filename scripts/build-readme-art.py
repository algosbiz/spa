#!/usr/bin/env python
"""
Draw the artwork README.md shows -- banner, navigation pills, section
headers, feature icons, the brand card, the architecture diagram and the
footer -- as SVG files in docs/readme/.

GitHub strips every <style> and web font from a README, so the only way to
show the site's own type and colour there is to bake them into images:

  * Text is set in Literata and Mulish from public/webfonts. Each SVG embeds
    a static instance of just the weights it uses, cut down to just the
    letters it draws (base64 woff2, a few KB each), so nothing is fetched
    and the README looks the same on GitHub, in VS Code and offline.
  * Icons are outlines lifted from the Font Awesome subset the site ships
    (public/webfonts/fa-*.ttf), so the README can only use icons the site
    itself already has. See ICONS below.
  * The frangipani is the petal path from components/elements/Frangipani.js
    and the lotus is public/images/logo/SMBtitle.svg.

    python scripts/build-readme-art.py

Needs fontTools, brotli and Pillow (pip install fonttools brotli pillow).
To change a heading or label, edit the text in this file and re-run; the
output is deterministic, so an unchanged run leaves git clean.
"""
import base64
import io
import math
import os
import random
import re
from html import escape

from fontTools import subset
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONTS = os.path.join(ROOT, "public", "webfonts")
IMAGES = os.path.join(ROOT, "public", "images")
OUT = os.path.join(ROOT, "docs", "readme")

# Brand tokens -- public/sass/_abstracts/_variables.scss and Frangipani.js.
GOLD = "#a78627"
GOLD_DEEP = "#8a6f1c"
GOLD_SOFT = "#dcae3a"
INK = "#1c1a1d"
INK_SOFT = "#5f5a54"
TEXT = "#707070"
MUTED = "#c4c4c4"
CREAM = "#f2e6dd"
SAND = "#f5f2ec"
IVORY = "#f8f6f1"
WHITE = "#ffffff"
LINE = "#e9e2d4"

W = 1280  # every wide piece shares one width so they stack edge to edge


def num(v):
    """Short, stable number formatting for path data and attributes."""
    s = f"{v:.1f}".rstrip("0").rstrip(".")
    return "0" if s == "-0" else s


# --------------------------------------------------------------------- fonts

FAMILIES = {
    # latin subsets of the self-hosted Google Fonts (public/css/google-fonts.css)
    "lit": ("or3hQ6P12-iJxAIgLYTwJrUXnTPm.woff2", "Georgia, serif"),
    "mul": ("1Ptvg83HX_SGhgqk3wotYKNnBQ.woff2", "Arial, sans-serif"),
}
_variable = {}
_static = {}
_metrics = {}


def lit_opsz(size):
    """Literata has an optical-size axis; the site leaves it on auto, which
    tracks font size. Bucketed so the README needs a handful of instances."""
    for limit, opsz in ((60, 72), (40, 48), (28, 36), (20, 24), (15, 18)):
        if size >= limit:
            return opsz
    return 12


def face_key(fam, wght, size):
    return (fam, wght, lit_opsz(size) if fam == "lit" else None)


def face_name(key):
    fam, wght, opsz = key
    return f"sbm{fam}{wght}" + (f"o{opsz}" if opsz else "")


def static_font(key):
    """TTF bytes of the variable font pinned at one weight (and opsz)."""
    if key not in _static:
        fam, wght, opsz = key
        if fam not in _variable:
            _variable[fam] = TTFont(os.path.join(FONTS, FAMILIES[fam][0]), recalcTimestamp=False)
        loc = {"wght": wght}
        if opsz:
            loc["opsz"] = opsz
        font = instancer.instantiateVariableFont(_variable[fam], loc, inplace=False)
        font.flavor = None
        buf = io.BytesIO()
        font.save(buf)
        _static[key] = buf.getvalue()
    return _static[key]


def measure(text, fam, wght, size, spacing=0.0):
    key = face_key(fam, wght, size)
    if key not in _metrics:
        font = TTFont(io.BytesIO(static_font(key)))
        _metrics[key] = (font.getBestCmap(), font["hmtx"].metrics, font["head"].unitsPerEm)
    cmap, hmtx, upm = _metrics[key]
    units = sum(hmtx[cmap.get(ord(c), ".notdef")][0] for c in text)
    return units * size / upm + spacing * len(text)


def font_face_css(key, chars):
    font = TTFont(io.BytesIO(static_font(key)), recalcTimestamp=False)
    options = subset.Options()
    options.layout_features = ["kern", "liga", "calt", "ccmp", "locl", "mark", "mkmk"]
    options.notdef_outline = True
    subsetter = subset.Subsetter(options)
    subsetter.populate(text="".join(sorted(chars | {" "})))
    subsetter.subset(font)
    font.flavor = "woff2"
    buf = io.BytesIO()
    font.save(buf)
    data = base64.b64encode(buf.getvalue()).decode()
    return f'@font-face{{font-family:"{face_name(key)}";src:url(data:font/woff2;base64,{data}) format("woff2")}}'


# --------------------------------------------------------------------- icons

# Only codepoints present in the site's Font Awesome subset exist. Adding an
# icon here that the site does not use means re-subsetting the webfonts first.
ICONS = {
    "address-book": ("solid", 0xF2B9),
    "arrow-right-long": ("solid", 0xF178),
    "calendar-check": ("solid", 0xF274),
    "car-side": ("solid", 0xF5E4),
    "check": ("solid", 0xF00C),
    "circle-user": ("solid", 0xF2BD),
    "clipboard-list": ("solid", 0xF46D),
    "clock": ("solid", 0xF017),
    "envelope": ("solid", 0xF0E0),
    "file-contract": ("solid", 0xF56C),
    "folder": ("solid", 0xF07B),
    "hands-holding-heart": ("solid", 0xF4C3),
    "headset": ("solid", 0xF590),
    "heart": ("solid", 0xF004),
    "instagram": ("brands", 0xF16D),
    "location-dot": ("solid", 0xF3C5),
    "lock": ("solid", 0xF023),
    "magnifying-glass": ("solid", 0xF002),
    "paper-plane": ("solid", 0xF1D8),
    "phone-volume": ("solid", 0xF2A0),
    "play": ("solid", 0xF04B),
    "bullseye": ("solid", 0xF140),
    "share-nodes": ("solid", 0xF1E0),
    "shield": ("solid", 0xF3ED),
    "spa": ("solid", 0xF5BB),
    "star": ("solid", 0xF005),
    "user-check": ("solid", 0xF4FC),
    "user-shield": ("solid", 0xF505),
    "whatsapp": ("brands", 0xF232),
}
FA_FILES = {
    "solid": "fa-solid-900.ttf",
    "light": "fa-light-300.ttf",
    "brands": "fa-brands-400.ttf",
}
_fa = {}


def icon_path(name, cx, cy, size, weight="solid"):
    """Path data for one icon, its bounding box centred on (cx, cy).
    `size` is the em size, which for Font Awesome is roughly its height."""
    style, cp = ICONS[name]
    if style != "brands":
        style = weight
    if style not in _fa:
        _fa[style] = TTFont(os.path.join(FONTS, FA_FILES[style]))
    font = _fa[style]
    glyphs = font.getGlyphSet()
    glyph = glyphs[font.getBestCmap()[cp]]
    bounds = BoundsPen(glyphs)
    glyph.draw(bounds)
    x0, y0, x1, y1 = bounds.bounds
    s = size / font["head"].unitsPerEm
    tx = cx - (x0 + x1) / 2 * s
    ty = cy + (y0 + y1) / 2 * s
    pen = SVGPathPen(glyphs, ntos=num)
    glyph.draw(TransformPen(pen, (s, 0, 0, -s, tx, ty)))
    return pen.getCommands()


# -------------------------------------------------------------------- images

def data_uri(rel, max_width=None, quality=82):
    """Inline a /public image. WebP stays as-is unless it needs shrinking;
    anything else is re-encoded to WebP so the SVG stays light."""
    path = os.path.join(IMAGES, rel)
    if rel.endswith(".webp") and max_width is None:
        raw = open(path, "rb").read()
    else:
        im = Image.open(path)
        im = im.convert("RGBA") if im.mode in ("P", "LA", "RGBA") else im.convert("RGB")
        if max_width and im.width > max_width:
            im = im.resize((max_width, round(im.height * max_width / im.width)), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, "WEBP", quality=quality, method=6)
        raw = buf.getvalue()
    return "data:image/webp;base64," + base64.b64encode(raw).decode()


def logo_markup(color):
    """Inner markup of the gold lotus + wordmark logo (viewBox 0 0 444 80)."""
    src = open(os.path.join(IMAGES, "logo", "SMBtitle.svg"), encoding="utf-8").read()
    inner = src[src.index(">", src.index("<svg")) + 1 : src.rindex("</svg>")]
    inner = re.sub(r"<style.*?</style>", "", inner, flags=re.S)
    inner = inner.replace('class="st0"', f'fill="{color}"')
    return re.sub(r"\s+", " ", inner).strip()


# ----------------------------------------------------------------- svg canvas

PETAL = "M18 6C34 -12 52 -28 56 -54C60 -80 44 -103 16 -105C-12 -107 -32 -90 -31 -64C-30 -40 -16 -14 -12 6Z"


class Svg:
    def __init__(self, w, h, label):
        self.w, self.h, self.label = w, h, label
        self.defs, self.body = [], []
        self.chars = {}
        self.has = set()

    def add(self, markup):
        self.body.append(markup)

    def define(self, name, markup):
        if name not in self.has:
            self.has.add(name)
            self.defs.append(markup)

    def text(self, x, y, s, fam="mul", wght=400, size=16, fill=INK, anchor="start",
             spacing=0.0, opacity=None, upper=False):
        if upper:
            s = s.upper()
        key = face_key(fam, wght, size)
        self.chars.setdefault(key, set()).update(s)
        extra = f' letter-spacing="{num(spacing)}"' if spacing else ""
        extra += f' opacity="{opacity}"' if opacity is not None else ""
        extra += f' text-anchor="{anchor}"' if anchor != "start" else ""
        self.add(
            f'<text x="{num(x)}" y="{num(y)}" font-family="{face_name(key)}, {FAMILIES[fam][1]}" '
            f'font-size="{size}" fill="{fill}"{extra}>{escape(s)}</text>'
        )
        return measure(s, fam, wght, size, spacing)

    def icon(self, name, cx, cy, size, fill=GOLD, weight="solid", opacity=None):
        op = f' opacity="{opacity}"' if opacity is not None else ""
        self.add(f'<path d="{icon_path(name, cx, cy, size, weight)}" fill="{fill}"{op}/>')

    # Frangipani ------------------------------------------------------------
    def _bloom_defs(self):
        stops = "".join(
            f'<stop offset="{o}" stop-color="{c}"/>'
            for o, c in (("0%", "#D9A52C"), ("16%", "#F3D488"), ("42%", "#FCF2DE"), ("100%", "#FFFFFF"))
        )
        petals = "".join(
            f'<path transform="rotate({i * 72})" d="{PETAL}" fill="url(#petal)" '
            f'stroke="rgba(150,118,44,0.28)" stroke-width="1.2" stroke-linejoin="round"/>'
            for i in range(5)
        )
        self.define(
            "bloom",
            f'<linearGradient id="petal" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="-106">{stops}</linearGradient>'
            '<radialGradient id="throat"><stop offset="0%" stop-color="#C79422" stop-opacity="0.85"/>'
            '<stop offset="45%" stop-color="#DCAE3A" stop-opacity="0.45"/>'
            '<stop offset="100%" stop-color="#DCAE3A" stop-opacity="0"/></radialGradient>'
            f'<g id="bloom">{petals}<circle r="42" fill="url(#throat)"/></g>'
            f'<path id="leaf" d="{PETAL}" fill="url(#petal)" stroke="rgba(150,118,44,0.28)" stroke-width="1.2"/>'
            '<filter id="lift" x="-40%" y="-40%" width="180%" height="180%">'
            '<feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#a78627" flood-opacity="0.22"/></filter>',
        )

    def bloom(self, x, y, scale, rot=0, opacity=None, shadow=True):
        self._bloom_defs()
        op = f' opacity="{opacity}"' if opacity is not None else ""
        fl = ' filter="url(#lift)"' if shadow else ""
        self.add(f'<use href="#bloom" transform="translate({num(x)} {num(y)}) rotate({rot}) scale({scale})"{op}{fl}/>')

    def petal(self, x, y, scale, rot=0, opacity=None):
        self._bloom_defs()
        op = f' opacity="{opacity}"' if opacity is not None else ""
        self.add(f'<use href="#leaf" transform="translate({num(x)} {num(y)}) rotate({rot}) scale({scale})"{op} filter="url(#lift)"/>')

    def glow(self, cx, cy, rx, ry, color="#f3d488", opacity=0.55, gid="glow"):
        self.define(
            gid,
            f'<radialGradient id="{gid}"><stop offset="0%" stop-color="{color}" stop-opacity="{opacity}"/>'
            f'<stop offset="100%" stop-color="{color}" stop-opacity="0"/></radialGradient>',
        )
        self.add(f'<ellipse cx="{num(cx)}" cy="{num(cy)}" rx="{rx}" ry="{ry}" fill="url(#{gid})"/>')

    def ornament(self, cx, cy, half=110, badge=None, on_dark=False):
        """The hairline -- dot -- blossom -- dot -- hairline the site sets above
        its section titles. With `badge`, a numbered gold disc replaces the
        blossom."""
        self.define(
            "fadeL",
            f'<linearGradient id="fadeL"><stop offset="0%" stop-color="{GOLD}" stop-opacity="0"/>'
            f'<stop offset="100%" stop-color="{GOLD}" stop-opacity="0.9"/></linearGradient>'
            f'<linearGradient id="fadeR"><stop offset="0%" stop-color="{GOLD}" stop-opacity="0.9"/>'
            f'<stop offset="100%" stop-color="{GOLD}" stop-opacity="0"/></linearGradient>',
        )
        gap = 34 if badge else 30
        self.add(f'<rect x="{num(cx - half)}" y="{num(cy - 0.6)}" width="{num(half - gap - 8)}" height="1.2" fill="url(#fadeL)"/>')
        self.add(f'<rect x="{num(cx + gap + 8)}" y="{num(cy - 0.6)}" width="{num(half - gap - 8)}" height="1.2" fill="url(#fadeR)"/>')
        for dx in (-gap, gap):
            self.add(f'<circle cx="{num(cx + dx)}" cy="{num(cy)}" r="2.6" fill="{GOLD}"/>')
        if badge:
            self.add(f'<circle cx="{num(cx)}" cy="{num(cy)}" r="19" fill="{GOLD}"/>')
            self.add(f'<circle cx="{num(cx)}" cy="{num(cy)}" r="23" fill="none" stroke="{GOLD}" stroke-opacity="0.35"/>')
            self.text(cx, cy + 5.5, badge, "lit", 600, 16, WHITE, "middle")
        else:
            self.bloom(cx, cy, 0.13, 10, shadow=False)

    def render(self):
        css = "".join(font_face_css(k, c) for k, c in sorted(self.chars.items()))
        style = f"<style>{css}</style>" if css else ""
        return (
            f'<svg xmlns="http://www.w3.org/2000/svg" width="{self.w}" height="{self.h}" '
            f'viewBox="0 0 {self.w} {self.h}" role="img" aria-label="{escape(self.label)}">'
            f"<title>{escape(self.label)}</title><defs>{style}{''.join(self.defs)}</defs>"
            f"{''.join(self.body)}</svg>\n"
        )


def smooth_closed(points):
    """Catmull-Rom through `points`, as a closed cubic Bezier path."""
    n = len(points)
    d = f"M{num(points[0][0])} {num(points[0][1])}"
    for i in range(n):
        p0, p1, p2, p3 = points[i - 1], points[i], points[(i + 1) % n], points[(i + 2) % n]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d += f"C{num(c1[0])} {num(c1[1])} {num(c2[0])} {num(c2[1])} {num(p2[0])} {num(p2[1])}"
    return d + "Z"


def blob(cx, cy, r, seed):
    """The soft, hand-cut circle the site puts behind its step icons."""
    rnd = random.Random(seed)
    a, b, ph = rnd.uniform(0.05, 0.09), rnd.uniform(0.03, 0.06), rnd.uniform(0, math.tau)
    pts = []
    for i in range(10):
        t = i / 10 * math.tau
        rr = r * (1 + a * math.sin(2 * t + ph) + b * math.cos(3 * t - ph))
        pts.append((cx + rr * math.cos(t), cy + rr * math.sin(t)))
    return smooth_closed(pts)


def torn(x0, x1, y, seed, amp=7.0):
    """Points along a torn-paper edge, like the site's section dividers."""
    rnd = random.Random(seed)
    ph1, ph2 = rnd.uniform(0, math.tau), rnd.uniform(0, math.tau)
    pts, x = [], x0
    while x < x1:
        dy = 4.5 * math.sin(x / 97 + ph1) + 2.5 * math.sin(x / 31 + ph2) + rnd.uniform(-amp, amp) * 0.45
        pts.append((x, y + dy))
        x += rnd.uniform(5, 14)
    pts.append((x1, y + 3 * math.sin(x1 / 97 + ph1)))
    return pts


def pts_path(pts):
    return " ".join(f"L{num(x)} {num(y)}" for x, y in pts)


def write(name, svg):
    os.makedirs(OUT, exist_ok=True)
    markup = svg.render()
    with open(os.path.join(OUT, name), "w", encoding="utf-8", newline="\n") as f:
        f.write(markup)
    print(f"  {name:28} {len(markup.encode()) / 1024:6.1f} KB")


# ===================================================================== pieces

def chip(svg, x, y, label, h=34, fill=WHITE, stroke=GOLD, color=GOLD):
    w = measure(label.upper(), "mul", 800, 12, 2.0) + 34
    svg.add(f'<rect x="{num(x)}" y="{num(y)}" width="{num(w)}" height="{h}" rx="{h / 2}" fill="{fill}" stroke="{stroke}" stroke-width="1.2"/>')
    svg.text(x + w / 2 + 1, y + h / 2 + 4.3, label, "mul", 800, 12, color, "middle", 2.0, upper=True)
    return w


def hero():
    H = 660
    s = Svg(W, H, "Spa Bali Moon - website day spa di Seminyak, Bali")
    edge = torn(0, W, H - 26, seed=7)
    s.define("paper", f'<clipPath id="paper"><path d="M0 22Q0 0 22 0H{W - 22}Q{W} 0 {W} 22V{num(edge[-1][1])} '
                      f'{pts_path(reversed(edge))} Z"/></clipPath>')
    s.define("cream", f'<linearGradient id="cream" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="{IVORY}"/>'
                      f'<stop offset="100%" stop-color="{SAND}"/></linearGradient>')
    s.define("photo", '<filter id="photo" x="-10%" y="-10%" width="130%" height="130%">'
                      '<feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#2f2924" flood-opacity="0.18"/></filter>')
    s.add('<g clip-path="url(#paper)">')
    s.add(f'<rect width="{W}" height="{H}" fill="url(#cream)"/>')
    s.glow(1080, 210, 520, 420, "#f3d488", 0.5, "sun")
    s.glow(690, 330, 380, 190, "#ffffff", 0.85, "halo")

    # Header bar, as on the site: logo, nav, outlined booking button.
    s.add(f'<rect width="{W}" height="88" fill="{WHITE}"/><rect y="88" width="{W}" height="1" fill="{LINE}"/>')
    s.add(f'<svg x="40" y="24" width="222" height="40" viewBox="0 0 444 80">{logo_markup(GOLD)}</svg>')
    bw = measure("spabalimoon.com", "mul", 800, 15) + 74
    bx = W - 40 - bw
    nav = [n.upper() for n in ("Home", "Pricelist", "Treatments", "Outcall", "Reservation", "Blog", "Contact")]
    widths = [measure(n, "lit", 600, 13, 0.9) for n in nav]
    x, end = 304, bx - 30
    gap = min(32, (end - x - sum(widths)) / (len(nav) - 1))
    for item, w in zip(nav, widths):
        s.text(x, 50, item, "lit", 600, 13, INK, spacing=0.9)
        x += w + gap
    s.add(f'<rect x="{num(bx)}" y="22" width="{num(bw)}" height="44" rx="22" fill="none" stroke="{GOLD}" stroke-width="1.4"/>')
    s.text(bx + 26, 49.5, "spabalimoon.com", "mul", 800, 15, GOLD)
    s.icon("spa", bx + bw - 30, 44, 16)

    # Photo collage on the left, fern tucked underneath.
    s.add(f'<image href="{data_uri("shape/about-two-left.png", 200)}" x="-34" y="420" width="150" height="216" opacity="0.95"/>')
    s.define("clipA", '<clipPath id="clipA"><rect x="-20" y="146" width="160" height="240" rx="6"/></clipPath>')
    s.define("clipB", '<clipPath id="clipB"><rect x="50" y="232" width="236" height="336" rx="6"/></clipPath>')
    s.add(f'<g filter="url(#photo)"><image href="{data_uri("home/homepage-2.webp")}" x="-20" y="146" width="160" height="240" '
          'preserveAspectRatio="xMidYMid slice" clip-path="url(#clipA)"/></g>')
    s.add(f'<g filter="url(#photo)"><image href="{data_uri("home/homepage-1.webp")}" x="50" y="232" width="236" height="336" '
          'preserveAspectRatio="xMidYMid slice" clip-path="url(#clipB)"/></g>')

    # Blossoms drifting down the right side.
    s.bloom(1150, 236, 0.95, 8)
    s.bloom(1040, 128, 0.42, -18)
    s.bloom(1112, 470, 0.34, 30)
    s.petal(1212, 584, 0.34, 140)
    s.petal(978, 574, 0.24, -60)
    s.petal(1236, 120, 0.22, 200)

    cx = 690
    s.ornament(cx, 182, 120)
    s.text(cx, 228, "Seminyak · Bali · Since 2009", "mul", 800, 13, GOLD, "middle", 3.2, upper=True)
    s.text(cx, 326, "Spa Bali Moon", "lit", 700, 96, INK, "middle", -0.5)
    s.text(cx, 382, "Website resmi & panduan developer", "lit", 400, 28, INK_SOFT, "middle")
    s.text(cx, 428, "Menu treatment, pricelist, home service, booking WhatsApp dan blog -", "mul", 400, 19, TEXT, "middle")
    s.text(cx, 458, "semua dalam satu proyek Next.js. Mulai dari sini sebelum mengubah kode.", "mul", 400, 19, TEXT, "middle")
    labels = ("Next.js 14", "React 18", "Supabase", "Vercel", "Cloudflare", "SendGrid")
    widths = [measure(l.upper(), "mul", 800, 12, 2.0) + 34 for l in labels]
    x = cx - (sum(widths) + 12 * (len(widths) - 1)) / 2
    for label, w in zip(labels, widths):
        chip(s, x, 500, label)
        x += w + 12
    s.add("</g>")
    write("hero.svg", s)


def section(slug, number, eyebrow, title):
    H = 196
    s = Svg(W, H, f"{number}. {title}")
    s.define("card", f'<clipPath id="card"><rect width="{W}" height="{H}" rx="22"/></clipPath>')
    s.add('<g clip-path="url(#card)">')
    s.add(f'<rect width="{W}" height="{H}" fill="{SAND}"/>')
    s.glow(W - 120, 30, 360, 200, "#f3d488", 0.45, "sun")
    s.glow(110, H, 300, 140, "#f3d488", 0.25, "sun2")
    rnd = random.Random(slug)
    s.bloom(W - 70, 34, 0.62, rnd.randint(0, 71))
    s.bloom(W - 190, 150, 0.2, rnd.randint(0, 71))
    s.bloom(54, 170, 0.38, rnd.randint(0, 71))
    s.petal(170, 40, 0.2, rnd.randint(100, 240), opacity=0.9)
    s.add("</g>")
    s.ornament(W / 2, 44, 130, badge=number)
    s.text(W / 2, 104, eyebrow, "lit", 400, 20, INK_SOFT, "middle")
    s.text(W / 2, 158, title, "lit", 300, 46, INK, "middle")
    write(f"section-{slug}.svg", s)


def pill(slug, icon, label):
    h, pad = 48, 24
    tw = measure(label, "mul", 800, 16)
    w = pad + 18 + 12 + tw + pad
    s = Svg(round(w), h, label)
    s.add(f'<rect x="0.75" y="0.75" width="{num(w - 1.5)}" height="{h - 1.5}" rx="{(h - 1.5) / 2}" fill="{WHITE}" stroke="{GOLD}" stroke-width="1.5"/>')
    s.icon(icon, pad + 9, h / 2, 17)
    s.text(pad + 30, h / 2 + 5.6, label, "mul", 800, 16, GOLD)
    write(f"nav-{slug}.svg", s)


def feature_icon(slug, icon, filled, seed):
    s = Svg(132, 132, slug.replace("-", " "))
    if filled:
        s.add(f'<path d="{blob(66, 66, 54, seed)}" fill="{GOLD}"/>')
        s.icon(icon, 66, 66, 46, WHITE)
    else:
        s.add(f'<path d="{blob(66, 66, 54, seed)}" fill="{SAND}"/>')
        s.add(f'<path d="{blob(66, 66, 54, seed)}" fill="none" stroke="{GOLD}" stroke-opacity="0.25"/>')
        s.icon(icon, 66, 66, 46, GOLD)
    write(f"icon-{slug}.svg", s)


def brand():
    H = 760
    s = Svg(W, H, "Palet warna, font dan ikon Spa Bali Moon")
    s.add(f'<rect width="{W}" height="{H}" rx="22" fill="{IVORY}"/>')
    s.define("card", f'<clipPath id="card"><rect width="{W}" height="{H}" rx="22"/></clipPath>')
    s.add('<g clip-path="url(#card)">')
    s.glow(W - 80, 40, 420, 260, "#f3d488", 0.35, "sun")
    s.bloom(W - 36, 18, 0.5, 20)
    s.add("</g>")

    s.text(40, 62, "Warna", "mul", 800, 14, GOLD, spacing=3, upper=True)
    swatches = (
        ("Moon Gold", "#A78627", "--theme-color1", WHITE),
        ("Night Ink", "#1C1A1D", "--theme-color2", WHITE),
        ("Sand", "#F5F2EC", "--theme-color-gray", INK),
        ("Cream", "#F2E6DD", "--theme-color-cream", INK),
        ("Ivory", "#F8F6F1", "--theme-light-background", INK),
        ("Body Text", "#707070", "--text-color", WHITE),
    )
    cw, gap, y0 = 186, 16, 84
    for i, (name, hexv, var, on) in enumerate(swatches):
        x = 40 + i * (cw + gap)
        s.add(f'<rect x="{x}" y="{y0}" width="{cw}" height="214" rx="16" fill="{WHITE}" stroke="{LINE}"/>')
        s.add(f'<path d="M{x} {y0 + 16}Q{x} {y0} {x + 16} {y0}H{x + cw - 16}Q{x + cw} {y0} {x + cw} {y0 + 16}V{y0 + 118}H{x}Z" '
              f'fill="{hexv}"' + (f' stroke="{LINE}"' if on == INK else "") + "/>")
        s.text(x + 18, y0 + 106, hexv, "mul", 800, 14, on, spacing=1.5, opacity=0.85)
        s.text(x + 18, y0 + 156, name, "lit", 500, 24, INK)
        size = 14
        while measure(var, "mul", 400, size) > cw - 32:
            size -= 0.5
        s.text(x + 18, y0 + 186, var, "mul", 400, size, TEXT)

    s.text(40, 350, "Huruf", "mul", 800, 14, GOLD, spacing=3, upper=True)
    tw, y1 = 592, 372
    for i, (fam, wght, name, role, var) in enumerate((
        ("lit", 300, "Literata", "Judul & heading", "--title-font"),
        ("mul", 400, "Mulish", "Paragraf, menu & tombol", "--text-font"),
    )):
        x = 40 + i * (tw + 16)
        s.add(f'<rect x="{x}" y="{y1}" width="{tw}" height="196" rx="16" fill="{WHITE}" stroke="{LINE}"/>')
        s.text(x + 30, y1 + 132, "Aa", fam, wght, 112, INK)
        tx = x + 210
        s.text(tx, y1 + 52, name, fam, 700 if fam == "mul" else 600, 28, INK)
        s.text(tx, y1 + 82, f"{role}  ·  {var}", "mul", 400, 16, TEXT)
        if fam == "lit":
            s.text(tx, y1 + 140, "Our Seminyak Day Spa", "lit", 700, 30, INK)
            s.text(tx, y1 + 174, "How Do You Book Your Spa Experience?", "lit", 300, 20, INK_SOFT)
        else:
            s.text(tx, y1 + 120, "Since 2009, Spa Bali Moon has provided", "mul", 400, 16, TEXT)
            s.text(tx, y1 + 142, "professional Balinese massage in Seminyak.", "mul", 400, 16, TEXT)
            bw = measure("Book an Appointment", "mul", 700, 14) + 58
            s.add(f'<rect x="{tx}" y="{y1 + 154}" width="{num(bw)}" height="30" rx="15" fill="none" stroke="{GOLD}" stroke-width="1.2"/>')
            s.text(tx + 18, y1 + 174, "Book an Appointment", "mul", 700, 14, GOLD)
            s.icon("spa", tx + bw - 20, y1 + 169, 12)

    s.text(40, 620, "Ikon & ornamen", "mul", 800, 14, GOLD, spacing=3, upper=True)
    s.add(f'<rect x="40" y="642" width="{W - 80}" height="88" rx="16" fill="{WHITE}" stroke="{LINE}"/>')
    row = ("spa", "star", "whatsapp", "location-dot", "phone-volume", "calendar-check", "car-side",
           "hands-holding-heart", "clock", "envelope", "instagram", "user-shield", "headset")
    for i, name in enumerate(row):
        s.icon(name, 92 + i * 62, 686, 26)
    s.add(f'<rect x="{92 + len(row) * 62 - 22}" y="660" width="1" height="52" fill="{LINE}"/>')
    s.bloom(W - 170, 686, 0.3, 14, shadow=False)
    s.bloom(W - 96, 686, 0.18, 40, shadow=False)
    write("brand.svg", s)


def architecture():
    H = 850
    s = Svg(W, H, "Cara kerja website Spa Bali Moon")
    s.define("card", f'<clipPath id="card"><rect width="{W}" height="{H}" rx="22"/></clipPath>')
    s.add('<g clip-path="url(#card)">')
    s.add(f'<rect width="{W}" height="{H}" fill="{IVORY}"/>')
    s.glow(640, 250, 520, 260, "#f3d488", 0.22, "sun")
    s.bloom(W - 14, H - 8, 0.42, 30)
    s.bloom(W / 2 + 330, 22, 0.24, 12)
    s.add("</g>")
    s.define("arrow", f'<marker id="arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="8" markerHeight="8" orient="auto">'
                      f'<path d="M0 0L10 5L0 10Z" fill="{GOLD}"/></marker>')

    def fit(text, fam, wght, size, room):
        # GitHub shows this at ~70%, so type starts large and only shrinks
        # when a label would overrun its box.
        while size > 12 and measure(text, fam, wght, size) > room:
            size -= 0.5
        return size

    def node(x, y, w, h, icon, title, sub=None, icon_fill=GOLD, blob_fill=SAND):
        s.add(f'<rect x="{num(x)}" y="{y}" width="{num(w)}" height="{h}" rx="16" fill="{WHITE}" stroke="{LINE}"/>')
        cy = y + h / 2
        s.add(f'<path d="{blob(x + 42, cy, 24, title)}" fill="{blob_fill}"/>')
        s.icon(icon, x + 42, cy, 22, icon_fill)
        room = w - 78 - 12
        if sub:
            s.text(x + 78, cy - 5, title, "lit", 600, fit(title, "lit", 600, 20, room), INK)
            s.text(x + 78, cy + 19, sub, "mul", 400, fit(sub, "mul", 400, 15, room), TEXT)
        else:
            s.text(x + 78, cy + 7, title, "lit", 600, fit(title, "lit", 600, 20, room), INK)

    def arrow(x1, y1, x2, y2, dashed=False):
        dash = ' stroke-dasharray="5 6"' if dashed else ""
        s.add(f'<path d="M{num(x1)} {num(y1)}L{num(x2)} {num(y2)}" fill="none" stroke="{GOLD}" '
              f'stroke-width="1.8"{dash} marker-end="url(#arrow)"/>')

    def lane_label(x, y, label):
        s.text(x, y, label, "mul", 800, 14, GOLD, spacing=2.6, upper=True)

    # Lane 1: a visit --------------------------------------------------------
    lane_label(40, 54, "1 · Pengunjung membuka website")
    node(40, 84, 220, 80, "circle-user", "Pengunjung", "browser / HP")
    node(300, 84, 250, 80, "shield", "Cloudflare", "cache HTML ± 2 jam")
    arrow(260, 124, 296, 124)
    arrow(550, 124, 586, 124)

    # The Next.js app
    vx, vy, vw, vh = 590, 74, 340, 420
    s.add(f'<rect x="{vx}" y="{vy}" width="{vw}" height="{vh}" rx="20" fill="{INK}"/>')
    s.add(f'<path d="{blob(vx + 46, vy + 48, 26, "vercel")}" fill="{GOLD}"/>')
    s.icon("spa", vx + 46, vy + 48, 24, WHITE)
    s.text(vx + 86, vy + 44, "Vercel · Next.js 14", "lit", 600, 22, WHITE)
    s.text(vx + 86, vy + 68, "Pages Router · build dari main", "mul", 400, 15, MUTED)
    rows = (
        ("Halaman statis", "treatment, pricelist, kontak, dll."),
        ("Homepage · ISR 24 jam", "review Google ikut segar"),
        ("/guide/ · ISR 60 detik", "artikel blog dari Supabase"),
        ("/admin/ · login", "tulis, edit & publish artikel"),
        ("/api/*", "form kontak, subscribe, upload"),
    )
    for i, (t, sub) in enumerate(rows):
        ry = vy + 96 + i * 63
        s.add(f'<rect x="{vx + 20}" y="{ry}" width="{vw - 40}" height="55" rx="12" fill="#2a272b"/>')
        s.add(f'<circle cx="{vx + 40}" cy="{ry + 27.5}" r="4.5" fill="{GOLD_SOFT}"/>')
        s.text(vx + 58, ry + 24, t, "mul", 700, 16, WHITE)
        s.text(vx + 58, ry + 44, sub, "mul", 400, fit(sub, "mul", 400, 14.5, vw - 98), MUTED)

    # Services on the right
    lane_label(970, 54, "Layanan luar")
    services = (
        ("file-contract", "Supabase", "artikel blog + gambar"),
        ("star", "Google Places", "rating & review"),
        ("envelope", "SendGrid", "email form kontak"),
        ("clipboard-list", "Google Sheets", "daftar subscriber"),
        ("shield", "Turnstile", "captcha anti-bot"),
    )
    for i, (icon, t, sub) in enumerate(services):
        sy = 84 + i * 84
        node(970, sy, 270, 72, icon, t, sub)
        arrow(930, min(max(sy + 36, vy + 40), vy + vh - 30), 966, sy + 36)

    # WhatsApp booking leaves the site entirely
    node(40, 230, 220, 80, "whatsapp", "WhatsApp", "semua tombol Book", icon_fill=WHITE, blob_fill="#25d366")
    arrow(150, 164, 150, 226, dashed=True)
    s.text(164, 202, "wa.me", "mul", 700, 14, GOLD)

    # Why every deploy ends in a purge, in the space under the visitor lane.
    nx, ny, nw, nh = 300, 230, 250, 264
    s.add(f'<rect x="{nx}" y="{ny}" width="{nw}" height="{nh}" rx="16" fill="{SAND}" stroke="{LINE}" stroke-dasharray="4 5"/>')
    s.icon("clock", nx + 32, ny + 36, 22)
    s.text(nx + 56, ny + 43, "Soal cache", "lit", 600, 20, INK)
    note = ("Cloudflare menyimpan", "salinan HTML ± 2 jam.", "Tanpa purge, pengunjung", "masih melihat versi lama",
            "walau Vercel sudah build.", "", "Karena itu deploy selalu", "lewat .\\deploy.ps1")
    for i, line in enumerate(note):
        if line:
            strong = i >= 6
            s.text(nx + 22, ny + 82 + i * 23, line, "mul", 700 if strong else 400, 15, INK_SOFT if strong else TEXT)

    # Lanes 2 and 3: publishing an article, and a deploy ---------------------
    sg = 40
    sw = (W - 80 - 3 * sg) / 4
    lanes = (
        (560, "2 · Admin menerbitkan artikel blog", (
            ("user-shield", "Admin", "login di /admin/"),
            ("file-contract", "Supabase", "artikel tersimpan"),
            ("clock", "Revalidate", "halaman dibuat ulang"),
            ("shield", "Purge Cloudflare", "otomatis, per URL"),
        )),
        (710, "3 · Developer melakukan deploy", (
            ("user-check", "Developer", "commit di branch main"),
            ("paper-plane", "Deploy script", "push ke GitHub"),
            ("spa", "Vercel build", "tunggu buildId baru"),
            ("shield", "Purge Cloudflare", "lalu cek ulang"),
        )),
    )
    s.add(f'<rect x="40" y="{560 - 34}" width="{W - 80}" height="1" fill="{LINE}"/>')
    for y, label, steps in lanes:
        lane_label(40, y + 4, label)
        for i, (icon, t, sub) in enumerate(steps):
            x = 40 + i * (sw + sg)
            node(x, y + 24, sw, 76, icon, t, sub)
            if i:
                arrow(x - sg + 4, y + 62, x - 4, y + 62)
    write("architecture.svg", s)


def footer():
    H = 300
    s = Svg(W, H, "Spa Bali Moon - Seminyak, Bali")
    edge = torn(0, W, 34, seed=11)
    s.define("paper", f'<clipPath id="paper"><path d="M0 {num(edge[0][1])} {pts_path(edge)} V{H - 22}Q{W} {H} {W - 22} {H}'
                      f'H22Q0 {H} 0 {H - 22}Z"/></clipPath>')
    s.add('<g clip-path="url(#paper)">')
    s.add(f'<rect width="{W}" height="{H}" fill="{INK}"/>')
    s.glow(W / 2, 40, 520, 200, "#a78627", 0.22, "sun")
    s.bloom(70, 250, 0.55, 18, opacity=0.9)
    s.bloom(W - 60, 90, 0.42, -12, opacity=0.9)
    s.petal(W - 180, 250, 0.26, 120, opacity=0.8)
    s.add("</g>")
    s.add(f'<svg x="{W / 2 - 160}" y="78" width="320" height="58" viewBox="0 0 444 80">{logo_markup(GOLD)}</svg>')
    s.ornament(W / 2, 168, 150)
    items = (("location-dot", "Seminyak, Bali"), ("spa", "Day spa sejak 2009"), ("whatsapp", "Booking via WhatsApp"),
             ("star", "spabalimoon.com"))
    widths = [measure(t, "mul", 600, 17) + 36 for _, t in items]
    x = W / 2 - (sum(widths) + 44 * (len(items) - 1)) / 2
    for (icon, t), w in zip(items, widths):
        s.icon(icon, x + 10, 213, 18)
        s.text(x + 29, 219, t, "mul", 600, 17, "#d8d2c8")
        x += w + 44
    s.text(W / 2, 262, "Gambar README dibuat oleh scripts/build-readme-art.py", "mul", 400, 14, "#8d867c", "middle", 0.4)
    write("footer.svg", s)


# ===================================================================== content

SECTIONS = (
    ("tentang", "01", "Spa Bali Moon · Seminyak", "Tentang Website Ini"),
    ("gaya", "02", "Warna, Huruf & Ikon", "Gaya Visual"),
    ("mulai", "03", "Untuk Developer", "Mulai dalam 5 Menit"),
    ("folder", "04", "Struktur Proyek", "Peta Folder"),
    ("cara-kerja", "05", "Arsitektur", "Cara Kerja Website"),
    ("resep", "06", "Tugas yang Sering Muncul", "Mau Ubah Apa?"),
    ("aturan", "07", "Wajib Dibaca", "Aturan Emas"),
    ("deploy", "08", "Rilis ke Production", "Deploy"),
)

NAV = (
    ("tentang", "hands-holding-heart", "Tentang"),
    ("gaya", "star", "Gaya Visual"),
    ("mulai", "play", "Mulai"),
    ("folder", "folder", "Folder"),
    ("cara-kerja", "share-nodes", "Cara Kerja"),
    ("resep", "clipboard-list", "Resep"),
    ("aturan", "bullseye", "Aturan Emas"),
    ("deploy", "paper-plane", "Deploy"),
)

FEATURES = (
    ("treatment", "spa"),
    ("pricelist", "clipboard-list"),
    ("outcall", "car-side"),
    ("whatsapp", "whatsapp"),
    ("blog", "file-contract"),
    ("review", "star"),
)


def main():
    print(f"Writing {os.path.relpath(OUT, ROOT)}/")
    hero()
    for slug, icon, label in NAV:
        pill(slug, icon, label)
    for args in SECTIONS:
        section(*args)
    for i, (slug, icon) in enumerate(FEATURES):
        feature_icon(slug, icon, filled=(i % 3 == 1), seed=slug)
    brand()
    architecture()
    footer()


if __name__ == "__main__":
    main()
