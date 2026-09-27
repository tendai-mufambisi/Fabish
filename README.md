# Fabish House Finishings

Website for **Fabish House Finishings**, premium home finishing services in Zimbabwe:
tiling, plastering and skimming, painting, ceilings, flooring, paving, brick dressing and construction.

Built with TanStack Start, React 19 and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
```

## Where to edit things

| What | File |
| --- | --- |
| Business name, phone, WhatsApp, email, hours | `src/lib/site-data.ts` → `company` |
| Services, reasons to choose us, process, FAQs | `src/lib/site-data.ts` |
| Projects (gallery, timeline, materials) | `src/lib/site-data.ts` → `projects` |
| Testimonials and headline counters | `src/lib/site-data.ts` (marked `TODO(Fabish)`) |
| Brand colours (maroon and gold) | `src/styles.css` → `:root` |
| Photos and logo | `src/assets/` |
| Showcase videos | put `.mp4` files in `public/videos/` and pass `src` in `src/components/sections/VideoShowcase.tsx` |
