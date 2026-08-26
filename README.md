# ignite-water-sports

The IGNITE Water Sports site (ignitewatersports.com), rebuilt as a Next.js App
Router project from the original WordPress/Elementor build.

## Structure

```
src/
  app/                    routes only — each page is a few lines
  components/
    layout/               SiteHeader, SiteFooter, ThemeAssets, ThirdPartyScripts
    sections/             ContentPage, Blocks, widgets, ProductArchive, ProductCard
    forms/                FormHandler
  content/                page copy and the product catalogue, as typed data
  lib/                    small helpers (metadata)
  styles/                 globals + the two stylesheets this project owns
  types/                  the content model
public/
  images/ uploads/        site media
  vendor/ lib/ fonts/     theme runtime inherited from WordPress
```

## How a page works

Content pages are data, not markup. `src/content/<route>.ts` exports a
`PageContent` — a hero plus an ordered list of blocks — and the route file just
renders it:

```tsx
export const metadata = pageMetadata(kayak);
export default function Page() {
  return <ContentPage content={kayak} />;
}
```

`components/sections/widgets.tsx` holds the Elementor markup primitives. Those
class names are load-bearing: the theme's stylesheets key off them, so they are
reproduced exactly and kept in one file rather than repeated per page.

To change a page's copy, edit its file in `src/content`. To change how every
page renders a heading, a list or a button, edit `widgets.tsx` once.

Two pages stay as hand-written markup because they are bespoke layouts rather
than the standard content template: `app/page.tsx` (the home page) and
`app/contact-us/page.tsx` (info boxes plus the enquiry form).

## Shop

`src/content/products.ts` holds the catalogue. `/shop` renders all of it;
each `/product-category/*` route filters it. The grid lives in
`styles/shop-grid.css` and is self-contained — it does not depend on the
WooCommerce plugin stylesheets.

## Forms

The contact and newsletter forms are not wired to a backend. `FormHandler`
intercepts submits and reports through the form's own markup. Point
`submitForm()` in `src/components/forms/FormHandler.tsx` at a real endpoint to
connect them; nothing else needs to change.

## Inherited theme runtime

`public/vendor` and `public/lib` are the Elementor/ElementsKit/theme bundles the
migrated markup still needs. Elementor loads some of its JavaScript as dynamic
chunks whose paths never appear in source, so these directories cannot be pruned
by static analysis — check pages in a browser before removing anything from them.

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build
npm start
```
