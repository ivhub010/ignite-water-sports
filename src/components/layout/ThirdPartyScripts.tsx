import ScriptInjector from './ScriptInjector';

/**
 * Runtime scripts inherited from the WordPress theme.
 *
 * Elementor, ElementsKit and the theme's own bundle are plain browser scripts
 * that expect to run in document order once the markup exists, so they are
 * injected on mount rather than rendered as JSX. ScriptInjector appends them
 * one at a time, waiting for each external file before moving on.
 *
 * Kept out of layout.tsx because it is ~15 KB of vendor script text. The
 * content is copied verbatim from the original layout, escaping included.
 */
const SCRIPTS = `<script type="speculationrules">
{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/media/*","/vendor/*","/vendor/plugins/*","/theme/wavesurfer/*","/*\\\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\\"nofollow\\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}
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
<script id="ekit-widget-scripts-js" src="/theme/elementskit-lite/widgets/init/assets/js/widget-scripts5219.js?ver=3.9.6"><\/script>
<script id="lodash-js" src="/theme/wp/js/dist/vendor/lodash.min7f9d.js?ver=4.18.1"><\/script>
<script id="lodash-js-after">
window.lodash = _.noConflict();
//# sourceURL=lodash-js-after
<\/script>
<script id="wp-polyfill-js" src="/theme/wp/js/dist/vendor/wp-polyfill.min2c7c.js?ver=3.15.0"><\/script>
<script id="moment-js" src="/theme/wp/js/dist/vendor/moment.minf799.js?ver=2.30.1"><\/script>
<script id="moment-js-after">
moment.updateLocale( 'en_US', {"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekdaysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"week":{"dow":1},"longDateFormat":{"LT":"g:i a","LTS":null,"L":null,"LL":"F j, Y","LLL":"F j, Y g:i a","LLLL":null}} );
//# sourceURL=moment-js-after
<\/script>
<script id="wp-hooks-js" src="/theme/wp/js/dist/hooks.min4ce2.js?ver=f0f188028580e8dc1255"><\/script>
<script id="wp-deprecated-js" src="/theme/wp/js/dist/deprecated.minee11.js?ver=fe587bac92b7d0ef760e"><\/script>
<script id="wp-date-js" src="/theme/wp/js/dist/date.min4cc4.js?ver=8173fc0fc12b7bb7eaf0"><\/script>
<script id="wp-date-js-after">
wp.date.setSettings( {"l10n":{"locale":"en_US","months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekdaysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"meridiem":{"am":"am","pm":"pm","AM":"AM","PM":"PM"},"relative":{"future":"%s from now","past":"%s ago","s":"a second","ss":"%d seconds","m":"a minute","mm":"%d minutes","h":"an hour","hh":"%d hours","d":"a day","dd":"%d days","M":"a month","MM":"%d months","y":"a year","yy":"%d years"},"startOfWeek":1},"formats":{"time":"g:i a","date":"F j, Y","datetime":"F j, Y g:i a","datetimeAbbreviated":"M j, Y g:i a"},"timezone":{"offset":0,"offsetFormatted":"0","string":"","abbr":""}} );
//# sourceURL=wp-date-js-after
<\/script>
<script id="react-js" src="/theme/wp/js/dist/vendor/react.mine1ab.js?ver=18.3.1.1"><\/script>
<script id="react-dom-js" src="/theme/wp/js/dist/vendor/react-dom.mine1ab.js?ver=18.3.1.1"><\/script>
<script id="wp-i18n-js" src="/theme/wp/js/dist/i18n.min99af.js?ver=1dfe7db3940c23ea9216"><\/script>
<script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after
<\/script>
<script id="wp-private-apis-js" src="/theme/wp/js/dist/private-apis.min6a72.js?ver=eb85f28c4c729bb4f002"><\/script>
<script id="wp-url-js" src="/theme/wp/js/dist/url.mina334.js?ver=7b0de086d4ae11d55704"><\/script>
<script data-wp-strategy="defer" id="wc-prettyPhoto-js" src="/theme/woocommerce/assets/js/prettyPhoto/jquery.prettyPhoto.min5886.js?ver=3.1.6"><\/script>
<script id="SmoothScroll-js" src="/theme/wavesurfer/assets/js/SmoothScroll4e44.js?ver=1.3"><\/script>
<script data-wp-strategy="defer" id="gsap-js" src="/theme/elementskit/widgets/init/assets/js/gsap4235.js?ver=4.4.5"><\/script>
<script id="magiccursor-js" src="/theme/wavesurfer/assets/js/magiccursor4e44.js?ver=1.3"><\/script>
<script id="SplitText-js" src="/theme/wavesurfer/assets/js/SplitText4e44.js?ver=1.3"><\/script>
<script id="ScrollTrigger-js" src="/theme/wavesurfer/assets/js/ScrollTrigger.min4e44.js?ver=1.3"><\/script>
<script id="swiper-js" src="/theme/elementor/assets/lib/swiper/v8/swiper.min94a4.js?ver=8.4.5"><\/script>
<script id="sis-select2-js" src="/theme/wavesurfer/assets/js/select2.full.min4e44.js?ver=1.3"><\/script>
<script id="isotope-js" src="/theme/elementskit-lite/widgets/init/assets/js/isotope.pkgd.min5219.js?ver=3.9.6"><\/script>
<script id="theme-js-js-extra">
var wavesurferAjax = {"ajaxurl":"/wp-admin/admin-ajax.php","nonce":"d7a6e9b833"};
//# sourceURL=theme-js-js-extra
<\/script>
<script id="theme-js-js" src="/theme/wavesurfer/assets/js/function4e44.js?ver=1.3"><\/script>
<script id="sourcebuster-js-js" src="/theme/woocommerce/assets/js/sourcebuster/sourcebuster.min9e47.js?ver=10.7.0"><\/script>
<script id="wc-order-attribution-js-extra">
var wc_order_attribution = {"params":{"lifetime":1.0e-5,"session":30,"base64":false,"ajaxurl":"/wp-admin/admin-ajax.php","prefix":"wc_order_attribution_","allowTracking":true},"fields":{"source_type":"current.typ","referrer":"current_add.rf","utm_campaign":"current.cmp","utm_source":"current.src","utm_medium":"current.mdm","utm_content":"current.cnt","utm_id":"current.id","utm_term":"current.trm","utm_source_platform":"current.plt","utm_creative_format":"current.fmt","utm_marketing_tactic":"current.tct","session_entry":"current_add.ep","session_start_time":"current_add.fd","session_pages":"session.pgs","session_count":"udata.vst","user_agent":"udata.uag"}};
//# sourceURL=wc-order-attribution-js-extra
<\/script>
<script id="wc-order-attribution-js" src="/theme/woocommerce/assets/js/frontend/order-attribution.min9e47.js?ver=10.7.0"><\/script>
<script id="jquery-numerator-js" src="/theme/elementor/assets/lib/jquery-numerator/jquery-numerator.min3958.js?ver=0.2.1"><\/script>
<script id="elementor-webpack-runtime-js" src="/theme/elementor/assets/js/webpack.runtime.minfb3d.js?ver=4.0.9"><\/script>
<script id="elementor-frontend-modules-js" src="/theme/elementor/assets/js/frontend-modules.minfb3d.js?ver=4.0.9"><\/script>
<script id="jquery-ui-core-js-before">
jQuery.uiBackCompat = true;
//# sourceURL=jquery-ui-core-js-before
<\/script>
<script id="jquery-ui-core-js" src="/theme/wp/js/jquery/ui/core.min0a10.js?ver=1.14.2"><\/script>
<script id="elementor-frontend-js-before">
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":1440,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.0.9","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_optimized_markup":true,"e_pro_free_trial_popup":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true},"urls":{"assets":"\/theme\/elementor\/assets\/","ajaxurl":"\/wp-admin\/admin-ajax.php","uploadUrl":"\/vendor\/uploads"},"nonces":{"floatingButtonsClickTracking":"638a27952c","atomicFormsSendForm":"4cb21008c7"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"body_background_background":"classic","active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":6724,"title":"Home%20Page%203%20%E2%80%93%20Wavesurfer","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before
<\/script>
<script id="elementor-frontend-js" src="/theme/elementor/assets/js/frontend.minfb3d.js?ver=4.0.9"><\/script>
<script id="imagesloaded-js" src="/theme/wp/js/imagesloaded.minbb93.js?ver=5.0.0"><\/script>
<script id="animejs-js" src="/theme/elementskit/modules/parallax/assets/js/anime4235.js?ver=4.4.5"><\/script>
<script id="elementskit-parallax-frontend-js" src="/theme/elementskit/modules/parallax/assets/js/parallax-frontend4235.js?ver=4.4.5"><\/script>
<script id="elementskit-parallax-admin-js" src="/theme/elementskit/modules/parallax/assets/js/parallax-admin4235.js?ver=4.4.5"><\/script>
<script id="magnific-popup-js" src="/theme/elementskit-lite/widgets/init/assets/js/jquery.magnific-popup.min5219.js?ver=3.9.6"><\/script>
<script id="animate-circle-js" src="/theme/elementskit-lite/widgets/init/assets/js/animate-circle.min5219.js?ver=3.9.6"><\/script>
<script id="elementskit-elementor-js-extra">
var ekit_config = {"ajaxurl":"/wp-admin/admin-ajax.php","nonce":"a0867eda17","errorMessage":"Something went wrong. Please try again."};
//# sourceURL=elementskit-elementor-js-extra
<\/script>
<script id="elementskit-elementor-js" src="/theme/elementskit-lite/widgets/init/assets/js/elementor5219.js?ver=3.9.6"><\/script>
<script id="elementskit-elementor-pro-js" src="/theme/elementskit/widgets/init/assets/js/elementor4235.js?ver=4.4.5"><\/script>`;

export default function ThirdPartyScripts() {
  return <ScriptInjector html={SCRIPTS} />;
}
