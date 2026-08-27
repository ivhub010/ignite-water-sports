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
  watersports/            all site imagery
  fonts/                  webfonts
  theme/                  inherited Elementor / theme runtime
    styles/               generated per-page Elementor CSS
    elementor/  elementskit/  elementskit-lite/
    wavesurfer/  woocommerce/  contact-form-7/
    wp/                   WordPress core JS (jQuery and friends)
```

`public/watersports` is the site's media library, carried over from the
WordPress install's `wp-content/uploads` — it holds every file the pages
reference, including the theme artwork that was never in WordPress.

`public/` is the right home for all of this: these are static files fetched by
URL at runtime, not modules you can import. What changed is the shape — the
tree no longer mirrors WordPress's `wp-content/plugins` layout, and stylesheets
are no longer served out of an images folder.

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

## Typography

The whole site is set in **Aaux Pro**, the brand typeface the WordPress site
uses — Medium for body copy, Bold for headings. All four weights are
self-hosted as woff2 in `public/fonts` (64 KB total, converted from the TTFs in
the WordPress media library). There are no external font requests.

`styles/fonts.css` is the single place this is set. Every font-family rule in
the Elementor bundle resolves through the kit's typography custom properties, so
redefining those four values on `body.elementor-kit-8` switches headings,
navigation, buttons and body copy together. The generated per-widget stylesheets
in `public/theme/styles` had the old faces hardcoded and were repointed too.

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

`public/theme` holds the Elementor / ElementsKit / theme bundles
the migrated markup still depends on. This is not a WordPress install, but the
markup is Elementor's, and these scripts supply the behaviour it expects:

- **Elementor frontend** reveals every element carrying a scroll animation.
  Those elements ship with `class="elementor-invisible"` and `opacity: 0`;
  Elementor's observer fades them in. Without it the home hero's headline,
  subline and button never appear.
- **ElementsKit** drives the navigation, mega menu and mobile off-canvas.
- **jQuery** (`public/lib`) is a hard dependency of both.

Anything not requested at runtime has been removed. What remains was verified by
recording every asset the browser actually fetches across all 30 routes at two
viewports — Elementor loads part of its JavaScript as dynamic chunks whose paths
never appear in source, so **static analysis cannot prune these directories**.
Check pages in a real browser before removing anything further.

Replacing this runtime means replacing the Elementor markup it animates — a
rewrite of the section components, not a file deletion.

WordPress's emoji script has been removed. It replaced native emoji with images
fetched from `s.w.org`, which meant a third-party request on every page and
broken images whenever wordpress.org was unreachable.

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build
npm start
```
