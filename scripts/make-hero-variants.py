#!/usr/bin/env python
"""
Build the phone-sized copy of every hero image.

The banner photo is the LCP element on nearly every page, and it is served
straight from /public with no srcset -- so a 375px phone downloads the same
1920px file as a desktop. This writes a <name>-sm.webp beside each hero at
HERO_SM_WIDTH, which Home2/Banner and PageTitle pick up under a max-width:767px
media query. Desktop keeps the full-size file untouched.

Run it after adding a page with a new hero, or after replacing a hero photo:

    python scripts/make-hero-variants.py --dry-run
    python scripts/make-hero-variants.py

A variant is rewritten only when it is missing or older than its source, so
re-running is cheap and does not stack generation loss.
"""

import argparse
import os
import re
import sys

from PIL import Image

PAGES = "pages"
ROOT = os.path.join("public", "images")

# 828 = 414 CSS px at 2x, which covers every phone PageSpeed emulates (its Moto
# G Power profile asks for 721 device px) without paying for pixels a phone
# cannot show. Quality 80 rather than the 82 used site-wide: at this size the
# difference is not visible, and the file is on the critical path.
HERO_SM_WIDTH = 828
HERO_SM_QUALITY = 80
SUFFIX = "-sm"

# Heroes come from three places: a Banner `image` prop, a PageTitle
# `backgroundImage` prop, and createTreatmentImageSet, which always resolves its
# hero to services/<folder>/<folder>-1.webp.
PROP_RE = re.compile(r'(?:image|backgroundImage|primaryImage)=["\'](/images/[^"\']+\.(?:webp|jpe?g|png))["\']')

# A page can render <Banner> with no image prop at all -- /reservation does --
# and then the hero is the component's own default, which no page file
# mentions. The components derive "-sm" from whatever they end up rendering, so
# these have to be built too or those pages lose their hero below 768px.
COMPONENT_DEFAULTS = [
    "/images/banner/banner-two-image1.jpg",  # components/sections/Home2/Banner.js
]

# The variant keeps its source's extension, so it has to keep its source's
# format too: writing WebP bytes into a name ending .jpg leaves the server
# sending image/jpeg for a file that is not one.
FORMATS = {
    ".webp": ("WEBP", {"method": 6}),
    ".jpg": ("JPEG", {"optimize": True, "progressive": True}),
    ".jpeg": ("JPEG", {"optimize": True, "progressive": True}),
    ".png": ("PNG", {"optimize": True}),
}


def sm_path(path):
    stem, ext = os.path.splitext(path)
    return stem + SUFFIX + ext


def discover():
    found = set(COMPONENT_DEFAULTS)

    for dirpath, _, names in os.walk(PAGES):
        for name in names:
            if not name.endswith(".js"):
                continue
            with open(os.path.join(dirpath, name), encoding="utf-8") as fh:
                for m in PROP_RE.finditer(fh.read()):
                    found.add(m.group(1))

    services = os.path.join(ROOT, "services")
    if os.path.isdir(services):
        for folder in sorted(os.listdir(services)):
            hero = "/images/services/%s/%s-1.webp" % (folder, folder)
            if os.path.exists(os.path.join("public", hero.lstrip("/"))):
                found.add(hero)

    # A -sm file is an output, never an input.
    return sorted(p for p in found if SUFFIX + os.path.splitext(p)[1] not in p)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--width", type=int, default=HERO_SM_WIDTH)
    ap.add_argument("--quality", type=int, default=HERO_SM_QUALITY)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    if not os.path.isdir(ROOT):
        sys.exit("run this from the repo root: %s not found" % ROOT)

    written = fresh = skipped = 0
    src_bytes = out_bytes = 0
    failures = []

    for web in discover():
        src = os.path.join("public", web.lstrip("/").replace("/", os.sep))
        if not os.path.exists(src):
            failures.append((web, "source missing"))
            continue
        dst = sm_path(src)

        size = os.path.getsize(src)
        src_bytes += size

        if os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(src):
            out_bytes += os.path.getsize(dst)
            fresh += 1
            continue

        fmt, opts = FORMATS.get(os.path.splitext(src)[1].lower(), (None, None))
        if fmt is None:
            failures.append((web, "unsupported extension"))
            continue

        try:
            im = Image.open(src)
            im.load()
            w, h = im.size
            if w <= args.width:
                # Already phone-sized; a copy would only add a request.
                out_bytes += size
                skipped += 1
                continue
            # PNG heroes can carry transparency worth keeping; JPEG cannot hold
            # it at all, and flattening to RGB is what it would do anyway.
            im = im.convert("RGBA" if fmt == "PNG" else "RGB").resize(
                (args.width, round(h * args.width / w)), Image.LANCZOS
            )
        except Exception as exc:
            failures.append((web, str(exc)))
            continue

        save = dict(opts)
        if fmt != "PNG":
            save["quality"] = args.quality

        if not args.dry_run:
            im.save(dst, fmt, **save)
            out_bytes += os.path.getsize(dst)
        else:
            import io

            buf = io.BytesIO()
            im.save(buf, fmt, **save)
            out_bytes += buf.tell()
        written += 1

    kb = lambda n: n / 1024.0
    print("%s at %dpx / q%d" % ("DRY RUN" if args.dry_run else "wrote", args.width, args.quality))
    print("  generated       %d" % written)
    print("  already current %d" % fresh)
    if skipped:
        print("  already small   %d" % skipped)
    print("  heroes on phones: %.0f KB -> %.0f KB (%.0f%% less)"
          % (kb(src_bytes), kb(out_bytes),
             100.0 * (src_bytes - out_bytes) / src_bytes if src_bytes else 0))
    for web, err in failures:
        print("  FAILED %s: %s" % (web, err))
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
