# ZBE Website — Design Reference & Plan

Source of inspiration: Dribbble shot (Milena Sky / Gissele Dekel art-gallery site)
https://cdn.dribbble.com/userupload/11310002/file/original-d402e705b50039de02ea3f73a4abf860.mp4

Goal: same feel, adapted for a power/electric engineering company showcasing its work.
Priorities: **Gallery, Services, Sponsors & Clients** (plus footer).

> Colors below are eyeballed from video frames, not sampled. Treat hex values as approximate.

---

## 1. Reference analysis (original site)

### Color
- Near-white canvas (`#FDFDFD`), near-black body text.
- Single coral/salmon accent (~`#EB5E6C`): logo, display headlines, countdown badge, quote marks, "Scroll →" link.
- Lighter semi-transparent coral for the badge and cursor dot.
- Saturated artwork (cobalt, yellow, hot pink, red) is the real palette; UI stays neutral.
- Red-orange grainy backdrop and black bezel are Dribbble presentation only.

### Typography
- **Display:** wide, heavy grotesk/slab hybrid, coral, ~60–90px, quirky letterforms (G, k). Stand-ins: Syne, Unbounded, Bricolage Grotesque, Familjen Grotesk.
- **Body:** clean neo-grotesk (Inter-like), light weight, ~14–16px.
- Pairing is one loud face + one quiet one, no mid-range styles.
- Caps label for dates; small regular nav links.
- Pull-quote: bold ~15–16px lead-in, oversized coral straight quote marks.

### Layout
- Hero: two-column, ~55/45.
  - Left: 2×2 nav grid top-left, headline, subtitle, date, large tilted image bleeding off bottom.
  - Right: two-column masonry image wall running to the viewport edge.
- Profile section: centered, symmetrical. Full-width title, tilted portrait left, text block right.
- Generous whitespace used as structure.
- Large rounded viewport corners (~40px), thin white masonry gutters (~8–10px).

### Components
- **Countdown badge:** ~110px coral circle overlapping hero image corner, bold number + small caption, rotated ~−10°.
- **Custom cursor:** translucent coral circle following the mouse.
- **Hover state:** "View more" white heavy label over the hovered tile.
- **Tilt:** hero image, hovered tile and portrait rotated ~3–6°; everything else orthogonal.
- **Scroll link:** text + long thin coral arrow, no button chrome.

### Motion
- Hero content (title, subtitle, image, badge) swaps in sync on a timer/carousel, ~1.5s per state.
- Image wall scrolls/parallaxes vertically; hovered tile tilts and lifts.
- Hero clears out and the profile section builds in with a large centered title.
- Cursor follows with slight lag.
- Smooth, slow easing, no bounce.

### Principles
1. One accent color, everything else neutral.
2. Type as the main decoration.
3. Controlled playfulness over a strict grid.
4. Content-forward, minimal nav chrome.
5. A single urgent CTA (the badge).
6. Large radii and white gutters for an editorial feel.

---

## 2. Adaptation for a power/electric engineering company

Keep the structure; change the tone from whimsical to precise and trustworthy, with energy.

### Keep
- Hero split with project wall, one accent on a neutral base, oversized display type + quiet body type, corner-overlapping badge, large radii and thin gutters, big centered detail title.

### Change

| Element | Original | Power/electric version |
|---|---|---|
| Accent | Coral pink | Electric: volt yellow-green `#D7FF3A`, electric blue `#1F5BFF`, or safety orange. Volt yellow or orange on near-black reads as "power". |
| Base | White | Dark (`#0B0D10` with a faint grid), or white with charcoal text. Dark makes the accent glow. |
| Display type | Quirky wide slab | Sharp wide/condensed grotesk (Space Grotesk, Unbounded, Archivo Expanded, Sora), optional uppercase. Keep heaviness, drop quirk. |
| Body type | Light neo-grotesk | Keep; add monospace (JetBrains Mono / IBM Plex Mono) for specs, kV/MW and labels. |
| Images | Illustrations | Real project photography (substations, turbines, switchgear, solar, crews) with one consistent treatment (duotone, high contrast or dark overlay). |
| Tilt | 3–6° | Remove or ≤1–2° on hover only. Aligned grids say precision. |
| Cursor | Soft circle | Crosshair/ring or small accent square. |
| Badge | "3 days till the end" | Stats: "132 kV", "48 MW delivered", "Since 2009", "Now commissioning". Circle can become a hex or a corner-cut square. |
| Hover label | "View more" | "View project →" plus a spec chip (location, voltage, year). |
| Content swap | Exhibition rotation | Featured project rotation (title, scope line, photo, key metric) with progress indicator. |
| Profile section | Artist bio | Case study: client, scope, capacity, timeline, outcome, engineer quote. |

### New elements
- Monospace spec readouts on project tiles.
- Faint blueprint grid / single-line schematic motifs in the background.
- Trust strip: certifications and standards (ISO, IEC, IEEE), safety record.
- Service filter chips on the gallery.
- Subtle "pulse" animation traveling along a thin connector line, the one "electric" motion.
- Real CTA: "Request a consultation" / "Start a project".

### Principles (adapted)
1. Precision over whimsy: aligned grids, mono data, minimal rotation.
2. One electric accent on a dark or white neutral base.
3. Proof first: real photos and numbers lead, copy stays short.
4. Motion with meaning: animate progress, load and flow, not decoration.
5. Heavy display type, quiet body type.

---

## 3. Page structure (priorities: Gallery, Services, Sponsors & Clients)

Nav: **Gallery, Services, Clients, Contact** (2×2 grid as in the reference).

1. **Nav + hero (compact)** — logo, one-line value statement, CTA. Right side: scrolling project wall as a gallery teaser.
2. **Gallery** — main section.
3. **Services**
4. **Sponsors & Clients** — placed after work and services so it reads as validation.
5. **Footer** — contact, CTA, legal.

### Gallery
- Two-column masonry (three on large screens), thin gutters, large radii.
- Filter chips by service (Transmission, Substations, Renewables, ...), linking gallery to services.
- Tile hover: "View project →" plus mono chip (location, capacity, year).
- Detail view = case-study layout from the reference profile section: big centered title, photo left, scope/client/capacity/timeline/outcome right.
- Hero "featured project" rotation draws from the same data.

### Services
- 4–6 large rows/cards: number (01, 02, ...), heavy display title, one-line description, mono capability list.
- Hovering a service highlights/filters related gallery tiles or previews a matching project.
- Accent only on the number and hover state; keep the section calm.

### Sponsors & Clients
- Two groups: **Clients** and **Sponsors/Partners** (they mean different things to a B2B buyer).
- Monochrome logos in an even grid (white on dark / charcoal on white), accent or full color on hover; protects the one-accent rule.
- Credibility strip: 3–4 mono stats (years operating, MW delivered, projects completed, safety record) and certifications.
- One pull-quote testimonial using the reference quote style, with client name and project link.

### Rhythm
Alternate section backgrounds, e.g. hero + gallery dark, services light, clients dark, footer.
Each section opens with a very large display heading ("Our work", "What we do", "Trusted by").

---

## 4. Open decisions
1. Dark or light base? (Recommendation: dark with volt-yellow accent; light + electric blue is the safer corporate option.)
2. Content volume: number of projects, services and client logos (decides pagination and static grid vs. marquee).
3. Existing logo or brand colors to respect?
4. Real project photography available, or placeholders with a consistent treatment?
5. Stack for the site (plain HTML/CSS/JS, Next.js, Astro, other).

## 5. Suggested next step
Write design tokens first (colors, type scale, radii, spacing, rotation values), then build the hero + gallery, since the gallery sets the visual language for the other sections.

---

## 6. Prototype theme update (current)
The prototype (`index.html`, `styles.css`, `app.js`) now uses **aqua + white** instead of dark + volt yellow.
Tokens live in `:root` in `styles.css`:
- `--bg #ffffff`, `--panel #f1fbfd`, `--light #e4f8fc` (services section)
- `--accent #16cdeb` for fills (buttons, badge, chips, footer)
- `--accent-strong #0a8fad` for accent used as text on white (pure aqua fails contrast)
- `--text #08222c` deep navy ink, `--muted #55717b`

## 7. Rebrand to the live ZBE site (current)
Colors, photos, logos and copy now come from https://zbepowereng.com:
- Brand blue `#007ACC` (hover `#005C99`) and orange `#F58220` (badge), on white / `#F5F9FF` / `#EAF3FB`.
- Photos in `assets/zbe/photos/`, client logos and the ZBE logo in `assets/zbe/logos/`.
- Services, testimonials and contact details are the site's own text.
- The site has no sponsors list, only "Trusted by"; all logos are shown as clients.
- Gallery titles are descriptions of the photos and should be confirmed by the company.

## 8. Next.js + Tailwind (current)
The site is a Next.js App Router project styled with Tailwind CSS v4.
- Design tokens live in `@theme` in `src/app/globals.css` (colors `brand`, `brand-deep`, `warm`, `panel`, `tint`, `ink`, `muted`; radii `panel` / `card`; fonts mapped from `next/font`).
- Layout and spacing are utility classes in the components; `globals.css` only holds the keyframes and a few primitives (`.btn`, `.btn-ghost`, `.mono`, `.display`, `.reveal`, `.bg-grid`).
- Desktop layout starts at `lg` = 900px and the wide logo grid at `xl` = 1100px (defined in rem so Tailwind sorts them correctly).
- Hero state (swapping / offscreen / paused) is exposed as `data-*` attributes on the header and styled with `group-data-*` variants.
