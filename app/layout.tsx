
import type { Metadata } from 'next';
import './globals.css';
import './header-overlay.css';
import './shop-grid.css';
import ScriptInjector from '@/components/ScriptInjector';
import FormHandler from '@/components/FormHandler';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Home Page 3 - Wavesurfer',
  description: 'Wavesurfer Theme converted to Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        <>
          <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
          <meta name="robots" content="noindex, nofollow" />
          <link rel="dns-prefetch" href="http://fonts.googleapis.com/" />
          <link rel="alternate" type="application/rss+xml" title="Wavesurfer » Feed" href="/feed" />
          <link rel="alternate" type="application/rss+xml" title="Wavesurfer » Comments Feed" href="/comments/feed/index.html" />
          <style id="wp-img-auto-sizes-contain-inline-css" dangerouslySetInnerHTML={{ __html: "\nimg:is([sizes=auto i],[sizes^=\"auto,\" i]){contain-intrinsic-size:3000px 1500px}\n/*# sourceURL=wp-img-auto-sizes-contain-inline-css */\n" }} />
          <link rel="stylesheet" id="elementor-frontend-css" href="/vendor/plugins/elementor/assets/css/frontend.minfb3d.css?ver=4.0.9" media="all" />
          <link rel="stylesheet" id="elementor-post-5113-css" href="/images/elementor/css/post-51135330.css?ver=1787311981" media="all" />
          <link rel="stylesheet" id="elementor-post-6338-css" href="/images/elementor/css/post-6338407f.css?ver=1787311982" media="all" />
          <style id="wp-emoji-styles-inline-css" dangerouslySetInnerHTML={{ __html: "\n\n\timg.wp-smiley, img.emoji {\n\t\tdisplay: inline !important;\n\t\tborder: none !important;\n\t\tbox-shadow: none !important;\n\t\theight: 1em !important;\n\t\twidth: 1em !important;\n\t\tmargin: 0 0.07em !important;\n\t\tvertical-align: -0.1em !important;\n\t\tbackground: none !important;\n\t\tpadding: 0 !important;\n\t}\n/*# sourceURL=wp-emoji-styles-inline-css */\n" }} />
          <style id="classic-theme-styles-inline-css" dangerouslySetInnerHTML={{ __html: "\n/*! This file is auto-generated */\n.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}\n/*# sourceURL=/lib/css/classic-themes.min.css */\n" }} />
          <link rel="stylesheet" id="woocommerce_prettyPhoto_css-css" href="/vendor/plugins/woocommerce/assets/css/prettyPhoto5886.css?ver=3.1.6" media="all" />
          <style id="global-styles-inline-css" dangerouslySetInnerHTML={{ __html: "\n:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);}.wp-block-button{--wp--preset--dimension--25: 25%;--wp--preset--dimension--50: 50%;--wp--preset--dimension--75: 75%;--wp--preset--dimension--100: 100%;}:where(body) { margin: 0; }:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}:root :where(.wp-element-button, .wp-block-button__link){background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;letter-spacing: inherit;line-height: inherit;padding-top: calc(0.667em + 2px);padding-right: calc(1.333em + 2px);padding-bottom: calc(0.667em + 2px);padding-left: calc(1.333em + 2px);text-decoration: none;text-transform: inherit;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}\n:root :where(.wp-block-icon svg){width: 24px;}\n:where(.wp-block-gallery.is-layout-flex){gap: var( --wp--style--gallery-gap-default, var( --gallery-block--gutter-size, var( --wp--style--block-gap, 0.5em ) ) );}:where(.wp-block-gallery.is-layout-grid){gap: var( --wp--style--gallery-gap-default, var( --gallery-block--gutter-size, var( --wp--style--block-gap, 0.5em ) ) );}\n:where(.wp-block-latest-posts.is-layout-flex){gap: 1.25em;}:where(.wp-block-latest-posts.is-layout-grid){gap: 1.25em;}\n:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}\n:where(.wp-block-term-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-term-template.is-layout-grid){gap: 1.25em;}\n:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}\n:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}\n/*# sourceURL=global-styles-inline-css */\n" }} />
          <link rel="stylesheet" id="contact-form-7-css" href="/vendor/plugins/contact-form-7/includes/css/stylesc098.css?ver=6.1.6" media="all" />
          <link rel="stylesheet" id="woocommerce-layout-css" href="/vendor/plugins/woocommerce/assets/css/woocommerce-layout9e47.css?ver=10.7.0" media="all" />
          <link rel="stylesheet" id="woocommerce-smallscreen-css" href="/vendor/plugins/woocommerce/assets/css/woocommerce-smallscreen9e47.css?ver=10.7.0" media="only screen and (max-width: 768px)" />
          <link rel="stylesheet" id="woocommerce-general-css" href="/vendor/plugins/woocommerce/assets/css/woocommerce9e47.css?ver=10.7.0" media="all" />
          <style id="woocommerce-inline-inline-css" dangerouslySetInnerHTML={{ __html: "\n.woocommerce form .form-row .required { visibility: visible; }\n/*# sourceURL=woocommerce-inline-inline-css */\n" }} />
          <link rel="stylesheet" id="elementor-post-8-css" href="/images/elementor/css/post-896e3.css?ver=1787278549" media="all" />
          <link rel="stylesheet" id="swiper-css" href="/vendor/plugins/elementor/assets/lib/swiper/v8/css/swiper.min94a4.css?ver=8.4.5" media="all" />
          <link rel="stylesheet" id="e-animation-fadeInUp-css" href="/vendor/plugins/elementor/assets/lib/animations/styles/fadeInUp.minfb3d.css?ver=4.0.9" media="all" />
          <link rel="stylesheet" id="widget-image-css" href="/vendor/plugins/elementor/assets/css/widget-image.minfb3d.css?ver=4.0.9" media="all" />
          <link rel="stylesheet" id="widget-heading-css" href="/vendor/plugins/elementor/assets/css/widget-heading.minfb3d.css?ver=4.0.9" media="all" />
          <link rel="stylesheet" id="e-animation-fadeInRight-css" href="/vendor/plugins/elementor/assets/lib/animations/styles/fadeInRight.minfb3d.css?ver=4.0.9" media="all" />
          <link rel="stylesheet" id="elementskit-parallax-css" href="/vendor/plugins/elementskit/modules/parallax/assets/css/style4235.css?ver=4.4.5" media="all" />
          <link rel="stylesheet" id="widget-counter-css" href="/vendor/plugins/elementor/assets/css/widget-counter.minfb3d.css?ver=4.0.9" media="all" />
          <link rel="stylesheet" id="e-animation-float-css" href="/vendor/plugins/elementor/assets/lib/animations/styles/e-animation-float.minfb3d.css?ver=4.0.9" media="all" />
          <link rel="stylesheet" id="e-animation-fadeIn-css" href="/vendor/plugins/elementor/assets/lib/animations/styles/fadeIn.minfb3d.css?ver=4.0.9" media="all" />
          <link rel="stylesheet" id="e-animation-fadeInLeft-css" href="/vendor/plugins/elementor/assets/lib/animations/styles/fadeInLeft.minfb3d.css?ver=4.0.9" media="all" />
          <link rel="stylesheet" id="e-swiper-css" href="/vendor/plugins/elementor/assets/css/conditionals/e-swiper.minfb3d.css?ver=4.0.9" media="all" />
          <link rel="stylesheet" id="widget-image-gallery-css" href="/vendor/plugins/elementor/assets/css/widget-image-gallery.minfb3d.css?ver=4.0.9" media="all" />
          <link rel="stylesheet" id="elementor-post-6724-css" href="/images/elementor/css/post-672421ea.css?ver=1787311983" media="all" />
          <link rel="stylesheet" id="ekit-widget-styles-css" href="/vendor/plugins/elementskit-lite/widgets/init/assets/css/widget-styles5219.css?ver=3.9.6" media="all" />
          <link rel="stylesheet" id="ekit-widget-styles-pro-css" href="/vendor/plugins/elementskit/widgets/init/assets/css/widget-styles-pro4235.css?ver=4.4.5" media="all" />
          <link rel="stylesheet" id="ekit-responsive-css" href="/vendor/plugins/elementskit-lite/widgets/init/assets/css/responsive5219.css?ver=3.9.6" media="all" />
          <link rel="stylesheet" id="wavesurfer-font-css" href="/fonts/plus-jakarta-sans.css" media="all" />
          <link rel="stylesheet" id="wavesurfer-css-variable-css" href="/vendor/themes/wavesurfer/assets/css/css-variable4e44.css?ver=1.3" media="all" />
          <link rel="stylesheet" id="fontawesome-6.4.0-css" href="/vendor/themes/wavesurfer/assets/css/all.min4e44.css?ver=1.3" media="all" />
          <link rel="stylesheet" id="bootstrap-5.3.2-css" href="/vendor/themes/wavesurfer/assets/css/bootstrap.min4e44.css?ver=1.3" media="all" />
          <link rel="stylesheet" id="sis-select2-css" href="/vendor/themes/wavesurfer/assets/css/select2.min4e44.css?ver=1.3" media="all" />
          <link rel="stylesheet" id="wavesurfer-style-css" href="/vendor/themes/wavesurfer/style4e44.css?ver=1.3" media="all" />
          <link rel="stylesheet" id="elementor-gf-cormorantinfant-css" href="/fonts/cormorant-infant.css" media="all" />
          <link rel="stylesheet" id="elementor-gf-worksans-css" href="/fonts/work-sans.css" media="all" />
          <link rel="stylesheet" id="elementor-icons-ekiticons-css" href="/vendor/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/css/ekiticons5219.css?ver=3.9.6" media="all" />
          <link rel="EditURI" type="application/rsd+xml" title="RSD" href="/xmlrpc.php?rsd" />
          <meta name="generator" content="WordPress 7.1" />
          <meta name="generator" content="WooCommerce 10.7.0" />
          <link rel="canonical" href="/" />
          <link rel="shortlink" href="/indexb798.html?p=6724" />
          <noscript>&lt;style&gt;.woocommerce-product-gallery{'{'} opacity: 1 !important; {'}'}&lt;/style&gt;</noscript>
          <meta name="generator" content="Elementor 4.0.9; features: e_font_icon_svg, additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-swap" />
          <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t.ekit-btt__button svg {\n\t\t\t\t\twidth: 1em;\n\t\t\t\t\theight: 1em;\n\t\t\t\t\tfill: currentColor;\n\t\t\t\t\tmargin: auto;\n\t\t\t\t}\n\t\t\t\t.ekit-btt__button {\n\t\t\t\t\tdisplay: flex !important;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\t\t\t" }} />
          <link rel="icon" href="/images/2026/02/favicon.png"  />
          <link rel="icon" href="/images/2026/02/favicon.png"  />
          <link rel="apple-touch-icon" href="/images/2026/02/favicon.png" />
          <meta name="msapplication-TileImage" content="/images/2026/02/favicon.png" />
        </>
      </head>
      <body className="wp-singular page-template page-template-elementor_header_footer page page-id-6724 wp-custom-logo wp-embed-responsive wp-theme-wavesurfer theme-wavesurfer woocommerce-no-js tt-magic-cursor elementor-default elementor-template-full-width elementor-kit-8 elementor-page elementor-page-6724">
        <Script src="/lib/js/jquery/jquery.minf43b.js?ver=3.7.1" strategy="beforeInteractive" />
        <Script src="/lib/js/jquery/jquery-migrate.min5589.js?ver=3.4.1" strategy="beforeInteractive" />
        {children}
        <FormHandler />
        <ScriptInjector html={`<script type="speculationrules">
{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/images/*","/vendor/*","/vendor/plugins/*","/vendor/themes/wavesurfer/*","/*\\\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\\"nofollow\\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}
<\/script>
<script>
				const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( \`.e-con.e-parent:not(.e-lazyloaded)\` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );
			<\/script>
<script>
		(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})();
	<\/script>
<script id="ekit-widget-scripts-js" src="/vendor/plugins/elementskit-lite/widgets/init/assets/js/widget-scripts5219.js?ver=3.9.6"><\/script>
<script id="lodash-js" src="/lib/js/dist/vendor/lodash.min7f9d.js?ver=4.18.1"><\/script>
<script id="lodash-js-after">
window.lodash = _.noConflict();
//# sourceURL=lodash-js-after
<\/script>
<script id="wp-polyfill-js" src="/lib/js/dist/vendor/wp-polyfill.min2c7c.js?ver=3.15.0"><\/script>
<script id="moment-js" src="/lib/js/dist/vendor/moment.minf799.js?ver=2.30.1"><\/script>
<script id="moment-js-after">
moment.updateLocale( 'en_US', {"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekdaysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"week":{"dow":1},"longDateFormat":{"LT":"g:i a","LTS":null,"L":null,"LL":"F j, Y","LLL":"F j, Y g:i a","LLLL":null}} );
//# sourceURL=moment-js-after
<\/script>
<script id="wp-hooks-js" src="/lib/js/dist/hooks.min4ce2.js?ver=f0f188028580e8dc1255"><\/script>
<script id="wp-deprecated-js" src="/lib/js/dist/deprecated.minee11.js?ver=fe587bac92b7d0ef760e"><\/script>
<script id="wp-date-js" src="/lib/js/dist/date.min4cc4.js?ver=8173fc0fc12b7bb7eaf0"><\/script>
<script id="wp-date-js-after">
wp.date.setSettings( {"l10n":{"locale":"en_US","months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekdaysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"meridiem":{"am":"am","pm":"pm","AM":"AM","PM":"PM"},"relative":{"future":"%s from now","past":"%s ago","s":"a second","ss":"%d seconds","m":"a minute","mm":"%d minutes","h":"an hour","hh":"%d hours","d":"a day","dd":"%d days","M":"a month","MM":"%d months","y":"a year","yy":"%d years"},"startOfWeek":1},"formats":{"time":"g:i a","date":"F j, Y","datetime":"F j, Y g:i a","datetimeAbbreviated":"M j, Y g:i a"},"timezone":{"offset":0,"offsetFormatted":"0","string":"","abbr":""}} );
//# sourceURL=wp-date-js-after
<\/script>
<script id="react-js" src="/lib/js/dist/vendor/react.mine1ab.js?ver=18.3.1.1"><\/script>
<script id="react-dom-js" src="/lib/js/dist/vendor/react-dom.mine1ab.js?ver=18.3.1.1"><\/script>
<script id="wp-i18n-js" src="/lib/js/dist/i18n.min99af.js?ver=1dfe7db3940c23ea9216"><\/script>
<script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after
<\/script>
<script id="wp-private-apis-js" src="/lib/js/dist/private-apis.min6a72.js?ver=eb85f28c4c729bb4f002"><\/script>
<script id="wp-url-js" src="/lib/js/dist/url.mina334.js?ver=7b0de086d4ae11d55704"><\/script>
<script data-wp-strategy="defer" id="wc-prettyPhoto-js" src="/vendor/plugins/woocommerce/assets/js/prettyPhoto/jquery.prettyPhoto.min5886.js?ver=3.1.6"><\/script>
<script id="SmoothScroll-js" src="/vendor/themes/wavesurfer/assets/js/SmoothScroll4e44.js?ver=1.3"><\/script>
<script data-wp-strategy="defer" id="gsap-js" src="/vendor/plugins/elementskit/widgets/init/assets/js/gsap4235.js?ver=4.4.5"><\/script>
<script id="magiccursor-js" src="/vendor/themes/wavesurfer/assets/js/magiccursor4e44.js?ver=1.3"><\/script>
<script id="SplitText-js" src="/vendor/themes/wavesurfer/assets/js/SplitText4e44.js?ver=1.3"><\/script>
<script id="ScrollTrigger-js" src="/vendor/themes/wavesurfer/assets/js/ScrollTrigger.min4e44.js?ver=1.3"><\/script>
<script id="swiper-js" src="/vendor/plugins/elementor/assets/lib/swiper/v8/swiper.min94a4.js?ver=8.4.5"><\/script>
<script id="sis-select2-js" src="/vendor/themes/wavesurfer/assets/js/select2.full.min4e44.js?ver=1.3"><\/script>
<script id="isotope-js" src="/vendor/plugins/elementskit-lite/widgets/init/assets/js/isotope.pkgd.min5219.js?ver=3.9.6"><\/script>
<script id="theme-js-js-extra">
var wavesurferAjax = {"ajaxurl":"/wp-admin/admin-ajax.php","nonce":"d7a6e9b833"};
//# sourceURL=theme-js-js-extra
<\/script>
<script id="theme-js-js" src="/vendor/themes/wavesurfer/assets/js/function4e44.js?ver=1.3"><\/script>
<script id="sourcebuster-js-js" src="/vendor/plugins/woocommerce/assets/js/sourcebuster/sourcebuster.min9e47.js?ver=10.7.0"><\/script>
<script id="wc-order-attribution-js-extra">
var wc_order_attribution = {"params":{"lifetime":1.0e-5,"session":30,"base64":false,"ajaxurl":"/wp-admin/admin-ajax.php","prefix":"wc_order_attribution_","allowTracking":true},"fields":{"source_type":"current.typ","referrer":"current_add.rf","utm_campaign":"current.cmp","utm_source":"current.src","utm_medium":"current.mdm","utm_content":"current.cnt","utm_id":"current.id","utm_term":"current.trm","utm_source_platform":"current.plt","utm_creative_format":"current.fmt","utm_marketing_tactic":"current.tct","session_entry":"current_add.ep","session_start_time":"current_add.fd","session_pages":"session.pgs","session_count":"udata.vst","user_agent":"udata.uag"}};
//# sourceURL=wc-order-attribution-js-extra
<\/script>
<script id="wc-order-attribution-js" src="/vendor/plugins/woocommerce/assets/js/frontend/order-attribution.min9e47.js?ver=10.7.0"><\/script>
<script id="jquery-numerator-js" src="/vendor/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.min3958.js?ver=0.2.1"><\/script>
<script id="elementor-webpack-runtime-js" src="/vendor/plugins/elementor/assets/js/webpack.runtime.minfb3d.js?ver=4.0.9"><\/script>
<script id="elementor-frontend-modules-js" src="/vendor/plugins/elementor/assets/js/frontend-modules.minfb3d.js?ver=4.0.9"><\/script>
<script id="jquery-ui-core-js-before">
jQuery.uiBackCompat = true;
//# sourceURL=jquery-ui-core-js-before
<\/script>
<script id="jquery-ui-core-js" src="/lib/js/jquery/ui/core.min0a10.js?ver=1.14.2"><\/script>
<script id="elementor-frontend-js-before">
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":1440,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.0.9","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_optimized_markup":true,"e_pro_free_trial_popup":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true},"urls":{"assets":"\/vendor\/plugins\/elementor\/assets\/","ajaxurl":"\/wp-admin\/admin-ajax.php","uploadUrl":"\/vendor\/uploads"},"nonces":{"floatingButtonsClickTracking":"638a27952c","atomicFormsSendForm":"4cb21008c7"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"body_background_background":"classic","active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":6724,"title":"Home%20Page%203%20%E2%80%93%20Wavesurfer","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before
<\/script>
<script id="elementor-frontend-js" src="/vendor/plugins/elementor/assets/js/frontend.minfb3d.js?ver=4.0.9"><\/script>
<script id="imagesloaded-js" src="/lib/js/imagesloaded.minbb93.js?ver=5.0.0"><\/script>
<script id="animejs-js" src="/vendor/plugins/elementskit/modules/parallax/assets/js/anime4235.js?ver=4.4.5"><\/script>
<script id="elementskit-parallax-frontend-js" src="/vendor/plugins/elementskit/modules/parallax/assets/js/parallax-frontend4235.js?ver=4.4.5"><\/script>
<script id="elementskit-parallax-admin-js" src="/vendor/plugins/elementskit/modules/parallax/assets/js/parallax-admin4235.js?ver=4.4.5"><\/script>
<script id="magnific-popup-js" src="/vendor/plugins/elementskit-lite/widgets/init/assets/js/jquery.magnific-popup.min5219.js?ver=3.9.6"><\/script>
<script id="animate-circle-js" src="/vendor/plugins/elementskit-lite/widgets/init/assets/js/animate-circle.min5219.js?ver=3.9.6"><\/script>
<script id="elementskit-elementor-js-extra">
var ekit_config = {"ajaxurl":"/wp-admin/admin-ajax.php","nonce":"a0867eda17","errorMessage":"Something went wrong. Please try again."};
//# sourceURL=elementskit-elementor-js-extra
<\/script>
<script id="elementskit-elementor-js" src="/vendor/plugins/elementskit-lite/widgets/init/assets/js/elementor5219.js?ver=3.9.6"><\/script>
<script id="elementskit-elementor-pro-js" src="/vendor/plugins/elementskit/widgets/init/assets/js/elementor4235.js?ver=4.4.5"><\/script>
<script id="wp-emoji-settings" type="application/json">
{"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"/lib/js/wp-emoji-release.min.js?ver=7.1"}}
<\/script>
<script type="module">
/*! This file is auto-generated */
var e="script#wp-emoji-settings",t=document.querySelector(e);if(!(t instanceof HTMLScriptElement))throw new Error("Element missing: "+e);const r=JSON.parse(t.text),s=(window._wpemojiSettings=r,"wpEmojiSettingsSupports"),o=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(s,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const r=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===r[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,r){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!r(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,r){let a;const s=(a="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),o=(s.textBaseline="top",s.font="600 32px Arial",{});return e.forEach(e=>{o[e]=t(s,e,n,r)}),o}function a(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}r.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(s));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(o),u.toString(),c.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"});const a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=e=>{i(n=e.data),a.terminate(),t(n)})}catch(e){}i(n=f(o,u,c,p))}t(n)}).then(e=>{for(const n in e)r.supports[n]=e[n],r.supports.everything=r.supports.everything&&r.supports[n],"flag"!==n&&(r.supports.everythingExceptFlag=r.supports.everythingExceptFlag&&r.supports[n]);var t;r.supports.everythingExceptFlag=r.supports.everythingExceptFlag&&!r.supports.flag,r.supports.everything||((t=r.source||{}).concatemoji?a(t.concatemoji):t.wpemoji&&t.twemoji&&(a(t.twemoji),a(t.wpemoji)))});
//# sourceURL=/lib/js/wp-emoji-loader.min.js
<\/script>`} />
      </body>
    </html>
  );
}
