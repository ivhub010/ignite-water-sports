import type { Metadata } from 'next';
import Script from 'next/script';

import '@/styles/globals.css';
import '@/styles/fonts.css';
import '@/styles/header-overlay.css';
import '@/styles/shop-grid.css';

import ThemeAssets from '@/components/layout/ThemeAssets';
import ThirdPartyScripts from '@/components/layout/ThirdPartyScripts';
import FormHandler from '@/components/forms/FormHandler';

export const metadata: Metadata = {
  title: 'IGNITE Water Sports Dubai | eFoil, SUP, Kayak on the Palm',
  description:
    "Dubai's #1 water sports experience on Palm Jumeirah. eFoil, kayak, SUP, kids parties, classes and more at RIVA Beach Club.",
};

/** Body classes the theme's stylesheets key off. */
const BODY_CLASS =
  'wp-singular page-template page-template-elementor_header_footer page page-id-6724 wp-custom-logo wp-embed-responsive wp-theme-wavesurfer theme-wavesurfer woocommerce-no-js tt-magic-cursor elementor-default elementor-template-full-width elementor-kit-8 elementor-page elementor-page-6724';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <ThemeAssets />
      </head>
      <body className={BODY_CLASS}>
        {/* jQuery must exist before the theme bundle runs. */}
        <Script src="/theme/wp/js/jquery/jquery.minf43b.js?ver=3.7.1" strategy="beforeInteractive" />
        <Script src="/theme/wp/js/jquery/jquery-migrate.min5589.js?ver=3.4.1" strategy="beforeInteractive" />

        {/* Theme chrome: the custom cursor target and the accessibility skip link. */}
        <div id="magic-cursor">
          <div id="ball" />
        </div>
        <a className="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>

        {children}

        <FormHandler />
        <ThirdPartyScripts />
      </body>
    </html>
  );
}
