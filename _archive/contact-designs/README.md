# Contact page — archived designs

Four contact layouts were built as side-by-side previews. **Design 3 (Concierge
Rail)** was chosen and is now what `/contact/` renders. The other three and the
preview harness live here so nothing is lost, and so they can be brought back
without rebuilding them.

This folder sits **outside `pages/`** on purpose: anything under `pages/` becomes
a public route in the Next.js Pages Router, including files that start with `_`.
Kept here, none of it is built, routed, or shipped in any bundle.

## What is where

| File | What it was |
|---|---|
| `components/DesignSplit.js` | Design 1 — Studio Split (was the default) |
| `components/DesignCard.js` | Design 2 — Reply Card |
| `components/DesignAtlas.js` | Design 4 — Atlas (map folded into the section, no separate map band) |
| `components/_PreviewShell.js` | The preview wrapper + the bottom-left design switcher |
| `pages/contact-design-1..4.js` | The four `/contact-design-N/` preview routes |

Still live, in `components/sections/contact/`: `DesignRail.js` (the chosen one),
`MapPanel.js`, `ContactToast.js`, `useContactForm.js`.

## What changed in the live code

`components/sections/ContactInner.js` used to take a `design` prop and pick from
a map of all four. It now renders `DesignRail` directly — no prop, no map, no
imports pointing into this folder.

## Bringing the previews back

1. Copy `components/*.js` back into `components/sections/contact/`.
2. Copy `pages/*.js` back into `pages/`.
3. In `ContactInner.js`, restore the `DESIGNS` map, the `design` prop, and the
   `HAS_MAP_BAND` guard around `<MapPanel>` (atlas renders its own map, so it
   must not get the band as well).

Git history for `ContactInner.js` holds the exact previous version.

## Things worth knowing before reusing these

- Styling is `styled-jsx` scoped to each component, so a design file is
  self-contained — no shared SCSS to untangle.
- `public/sass/_base/_tear-rhythm.scss` keys off the plain `.contact-details`
  class, **not** the `--split` / `--card` / `--rail` modifier. The torn-paper
  spacing therefore still measures correctly for any of them.
- `DesignAtlas` is the one exception to the map band; see the guard above.
