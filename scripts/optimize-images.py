#!/usr/bin/env python
"""
Re-compress the WebP images under public/images in place.

Every <img> on this site points straight at /public, so nothing resizes or
re-encodes these files at request time -- the bytes on disk are the bytes the
browser downloads. The originals were exported at roughly quality 90, which is
past the point where WebP buys any visible detail; re-encoding at 82 with the
slow search (method 6) drops about 39% of the weight with no difference
visible at 1:1 on the most detailed image in the set.

Only WebP is touched. PNG (145 files) and JPEG (111 files) were measured and
are already at their floor -- 0% and 2% -- so re-encoding them would spend
generation loss for nothing.

A file is only overwritten when the new encode is genuinely smaller, and every
path that gets rewritten is recorded in the manifest next to this script with
the hash of its output. A second run therefore skips anything it already did
instead of re-encoding it again and stacking generation loss.

    python scripts/optimize-images.py --dry-run     # report, touch nothing
    python scripts/optimize-images.py               # compress in place
    python scripts/optimize-images.py --quality 78  # push harder
"""

import argparse
import hashlib
import io
import json
import os
import sys

from PIL import Image

ROOT = os.path.join("public", "images")
MANIFEST = os.path.join("scripts", ".image-optimize-manifest.json")

# Nothing on the site is displayed larger than 1920 on its longest side, so
# anything bigger is paying for pixels that never reach a screen. Capping the
# longest side rather than width-and-height separately matters for the portrait
# and square images: a 768x1376 portrait is 768 wide in the layout and has no
# business being narrowed just because it is tall. As of the first run nothing
# in public/images exceeds this.
MAX_SIDE = 1920


def sha1(path):
    h = hashlib.sha1()
    with open(path, "rb") as fh:
        for chunk in iter(lambda: fh.read(1 << 16), b""):
            h.update(chunk)
    return h.hexdigest()


def encode(im, quality):
    buf = io.BytesIO()
    im.save(buf, "WEBP", quality=quality, method=6)
    return buf.getvalue()


def walk():
    for dirpath, _, names in os.walk(ROOT):
        for name in sorted(names):
            if name.lower().endswith(".webp"):
                yield os.path.join(dirpath, name)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--quality", type=int, default=82)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    if not os.path.isdir(ROOT):
        sys.exit("run this from the repo root: %s not found" % ROOT)

    try:
        with open(MANIFEST) as fh:
            done = json.load(fh)
    except (IOError, ValueError):
        done = {}

    before = after = 0
    written = skipped = already = animated = 0
    failures = []

    for path in walk():
        key = path.replace("\\", "/")
        size = os.path.getsize(path)
        before += size

        # Optimised on an earlier run and untouched since: leave it alone.
        if done.get(key) == sha1(path):
            after += size
            already += 1
            continue

        try:
            im = Image.open(path)
            if getattr(im, "n_frames", 1) > 1:
                after += size
                animated += 1
                continue
            im.load()

            w, h = im.size
            scale = min(MAX_SIDE / max(w, h), 1.0)
            if scale < 1.0:
                im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)

            data = encode(im, args.quality)
        except Exception as exc:  # a corrupt file should not stop the run
            failures.append((key, str(exc)))
            after += size
            continue

        # Re-encoding does not always win -- a few of these were exported at a
        # quality below the target already. Keeping the original is the only
        # correct answer there.
        if len(data) >= size:
            after += size
            skipped += 1
            continue

        after += len(data)
        written += 1
        if args.dry_run:
            continue

        with open(path, "wb") as fh:
            fh.write(data)
        done[key] = sha1(path)

    if not args.dry_run:
        with open(MANIFEST, "w") as fh:
            json.dump(done, fh, indent=1, sort_keys=True)

    mb = lambda n: n / 1048576.0
    print("%s at quality %d" % ("DRY RUN" if args.dry_run else "optimised", args.quality))
    print("  compressed        %d" % written)
    print("  already optimal   %d" % skipped)
    print("  done previously   %d" % already)
    if animated:
        print("  animated, left    %d" % animated)
    print("  %.2f MB -> %.2f MB   saved %.2f MB (%.1f%%)"
          % (mb(before), mb(after), mb(before - after),
             100.0 * (before - after) / before if before else 0))
    for key, err in failures:
        print("  FAILED %s: %s" % (key, err))
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
