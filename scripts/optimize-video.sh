#!/bin/sh
# Re-encode an MP4 under public/ for web delivery.
#
# banner-one.mp4 shipped from the theme at 4.97 Mbps for 720p25 -- roughly three
# times what this footage needs. It is soft, slow-moving, shallow-depth-of-field
# spa video, which is close to the easiest thing H.264 can be asked to carry, so
# the extra bitrate was buying nothing.
#
# Settings, and why each one is what it is:
#
#   -crf 19        Quality-targeted rather than bitrate-targeted, so calm shots
#                  spend nothing and the few busy frames get what they need.
#                  Measured against the source at four timestamps: 44.5 dB mean
#                  PSNR, and at 1:1 the face (skin texture, individual eyebrow
#                  hairs) and the candle bokeh gradient are indistinguishable
#                  from the original. CRF 21 also tested transparent and halves
#                  the file again to ~1.3 MB if the weight ever matters more
#                  than the margin.
#   -preset veryslow  A one-off encode of a 12-second clip; the slow search is
#                  free here and buys real bitrate.
#   -profile high -level 4.0 -pix_fmt yuv420p
#                  The universally decodable combination. yuv420p in particular
#                  is what Safari and mobile browsers require.
#   -an -sn -dn    The element is muted and looping, so audio is dead weight --
#                  the source carried no audio but did carry a stray data track.
#   +faststart     Moves the index to the front so the browser can start
#                  playing before the whole file has arrived. This matters most
#                  for a hero background video.
#
# Resolution (1280x720), frame rate (25) and duration (12.2s / 305 frames) are
# deliberately left alone -- the brief was to cut weight without touching how
# the picture looks.
#
#   sh scripts/optimize-video.sh public/images/banner/banner-one.mp4

set -e

SRC="$1"
[ -n "$SRC" ] || { echo "usage: sh scripts/optimize-video.sh <file.mp4>" >&2; exit 1; }
[ -f "$SRC" ] || { echo "no such file: $SRC" >&2; exit 1; }

CRF="${CRF:-19}"
MARKER="spabalimoon:optimised"
TMP="${SRC%.mp4}.optimised.mp4"

# Re-encoding an already-encoded file at the same CRF produces a *smaller* file,
# because the first pass already smoothed away the detail the second one would
# have had to pay for. A size comparison therefore cannot tell "not yet done"
# from "done twice", and running this script twice would quietly stack
# generation loss. The marker in the container comment is what makes a second
# run a no-op instead.
if ffprobe -v error -show_entries format_tags=comment -of default=nw=1:nk=1 "$SRC" 2>/dev/null | grep -qF "$MARKER"; then
  echo "$SRC already optimised; left alone"
  exit 0
fi

ffmpeg -y -v error -i "$SRC" \
  -c:v libx264 -preset veryslow -crf "$CRF" \
  -profile:v high -level 4.0 -pix_fmt yuv420p \
  -an -sn -dn -movflags +faststart \
  -metadata comment="$MARKER crf=$CRF" \
  "$TMP"

before=$(wc -c < "$SRC")
after=$(wc -c < "$TMP")

# Never let a re-encode make a file bigger -- if it does, the source was already
# tighter than this setting and the right answer is to keep it.
if [ "$after" -ge "$before" ]; then
  rm -f "$TMP"
  echo "$SRC already smaller than a crf $CRF encode; left alone"
  exit 0
fi

mv -f "$TMP" "$SRC"
echo "$SRC: $before -> $after bytes" | awk '{printf "%s  %.2f MB -> %.2f MB  (-%.0f%%)\n", $1, $2/1048576, $4/1048576, 100-100*$4/$2}'
