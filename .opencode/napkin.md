# Napkin Runbook

## Curation Rules
- Re-prioritize on every read.
- Keep recurring, high-value notes only.
- Max 10 items per category.
- Each item includes date + "Do instead".

## Execution & Validation (Highest Priority)
1. **[2026-04-08] Start empty repos with a minimal runnable front-end**
   Do instead: create the smallest coherent file set (`index.html`, `styles.css`, `script.js`) before layering visual polish.
2. **[2026-04-09] Validate deployment readiness with a production build**
   Do instead: run `npm run build` after hosting config changes and only conclude setup when the build succeeds.
3. **[2026-04-10] Lead forms should send payloads from the client only when required**
   Do instead: post the minimal field set to the configured endpoint, show submitting state, and handle request failures without clearing the form.

## Frontend Delivery
1. **[2026-04-08] Premium landing pages need image-replacement hooks**
   Do instead: label every placeholder clearly in code so real campaign assets can be swapped without restructuring layout.

## User Directives
1. **[2026-04-10] Keep only short mobile labels on one line**
   Do instead: apply `white-space: nowrap` only to short CTAs/titles (for example cadastro badge), and keep long section headlines with normal wrapping.
2. **[2026-04-10] Avoid narrow mobile text columns in section headings**
   Do instead: remove small `max-width` limits on mobile `h2` and reduce font size slightly so lines wrap naturally without vertical word stacking.
3. **[2026-04-10] Prefer vivid gradients over flat dark panels**
   Do instead: use a tighter palette with brighter accent glows, cleaner glass surfaces, and a modern sans pairing to avoid the generic AI look.
4. **[2026-04-08] Avoid generic AI-looking UI**
   Do instead: commit to a specific art direction, distinctive typography, and brand-shaped layout choices instead of template sections.
