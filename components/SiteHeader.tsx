/**
 * Site header — single source of truth for the top bar, logo and navigation.
 * Edit here and every page updates.
 */
type SiteHeaderProps = {
  /** Float the header over the page hero instead of sitting above it (home page). */
  transparent?: boolean;
};

export default function SiteHeader({ transparent = false }: SiteHeaderProps) {
  const logo = transparent ? '/images/ignite-logo-light.png' : '/images/ignite-logo.png';
  return (
    <>
      <link rel="stylesheet" id="elementor-post-3436-css" href="/images/elementor/css/post-343696e3.css?ver=1787278549" media="all" />
    <div className={`ekit-template-content-markup ekit-template-content-header ekit-template-content-theme-support${transparent ? ' site-header--overlay' : ''}`}>
      <div data-elementor-type="wp-post" data-elementor-id={3436} className="elementor elementor-3436">
        <div className="elementor-element elementor-element-346619f e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-parent" data-id="346619f" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-element elementor-element-5973689 e-con-full e-flex e-con e-child" data-id={5973689} data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-2e9c1e0 elementor-widget elementor-widget-elementskit-stylish-list" data-id="2e9c1e0" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-stylish-list.default">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">		<ul className="ekit-stylish-list ">
                    <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-3ffd702">
                      <a className="ekit-wrapper-link" href="tel:800446483" aria-label="Call us: 800 IGNITE (446483)" />
                      <div className="ekit-stylish-list-content">
                        <div className="ekit-stylish-list-content-icon">
                          <i aria-hidden="true" className="icon icon-phone1" />							</div>
                        <div className="ekit-stylish-list-content-text">
                          <span className="ekit-stylish-list-content-title">Call us: 800 IGNITE (446483)</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>				</div>
            </div>
          </div>
          <div className="elementor-element elementor-element-3740fcc e-con-full e-flex e-con e-child" data-id="3740fcc" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-380abaa elementor-widget elementor-widget-elementskit-social-media" data-id="380abaa" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-social-media.default">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">			 <ul className="ekit_social_media">
                    <li className="elementor-repeater-item-69918e8">
                      <a href="#" aria-label="Facebook" className="facebook">
                        <svg aria-hidden="true" className="e-font-icon-svg e-fab-facebook" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                      </a>
                    </li>
                    <li className="elementor-repeater-item-7a4e6ff">
                      <a href="#" aria-label="Twitter" className="twitter">
                        <svg aria-hidden="true" className="e-font-icon-svg e-fab-x-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                      </a>
                    </li>
                    <li className="elementor-repeater-item-5b71769">
                      <a href="#" aria-label="LinkedIn" className="in">
                        <svg aria-hidden="true" className="e-font-icon-svg e-fab-linkedin-in" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                      </a>
                    </li>
                    <li className="elementor-repeater-item-2692400">
                      <a href="#" aria-label="Instagram" className="instagram">
                        <svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                      </a>
                    </li>
                  </ul>
                </div>				</div>
            </div>
          </div>
          <div className="elementor-element elementor-element-0e6df9e e-con-full e-flex e-con e-child" data-id="0e6df9e" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-eedbebd elementor-widget elementor-widget-elementskit-stylish-list" data-id="eedbebd" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-stylish-list.default">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">		<ul className="ekit-stylish-list ">
                    <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-3ffd702">
                      <a className="ekit-wrapper-link" href="mailto:info@ignitewatersports.com" aria-label="Mail us: info@ignitewatersports.com" />
                      <div className="ekit-stylish-list-content">
                        <div className="ekit-stylish-list-content-icon">
                          <i aria-hidden="true" className="icon icon-envelope1" />							</div>
                        <div className="ekit-stylish-list-content-text">
                          <span className="ekit-stylish-list-content-title">Mail us: info@ignitewatersports.com</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>				</div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-b3f0d8b elementor-hidden-tablet elementor-hidden-mobile e-con-full e-flex e-con e-parent" data-id="b3f0d8b" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-element elementor-element-5eea421 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-id="5eea421" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-ffec855 elementor-widget elementor-widget-elementskit-header-search" data-id="ffec855" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-header-search.default">
              <div className="ekit-wid-con">        <a href="#ekit_modal-popup-ffec855" className="ekit_navsearch-button ekit-modal-popup" aria-label="navsearch-button">
                  <i aria-hidden="true" className="icon icon-search11" />      </a>
                {/* language switcher strart */}
                {/* xs modal */}
                <div className="zoom-anim-dialog mfp-hide ekit_modal-searchPanel" id="ekit_modal-popup-ffec855">
                  <div className="ekit-search-panel">
                    {/* Polylang search - thanks to Alain Melsens */}
                    <form role="search" method="get" className="ekit-search-group" action="/">
                      <input type="search" className="ekit_search-field" aria-label="search-form" placeholder="Search..." defaultValue="" name="s" />
                      <button type="submit" className="ekit_search-button" aria-label="search-button">
                        <i aria-hidden="true" className="icon icon-search11" />                  </button>
                    </form>
                  </div>
                </div>{/* End xs modal */}
                {/* end language switcher strart */}
              </div>				</div>
            <div className="elementor-element elementor-element-5311dc9 elementor-widget elementor-widget-ekit-nav-menu" data-id="5311dc9" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="ekit-nav-menu.default">
              <div className="elementor-widget-container">
                <nav className="ekit-wid-con ekit_menu_responsive_tablet" data-hamburger-icon data-hamburger-icon-type="icon" data-responsive-breakpoint={1024}>
                  <button className="elementskit-menu-hamburger elementskit-menu-toggler" type="button" aria-label="hamburger-icon">
                    <span className="elementskit-menu-hamburger-icon" /><span className="elementskit-menu-hamburger-icon" /><span className="elementskit-menu-hamburger-icon" />
                  </button>
                  <div id="ekit-megamenu-divided-left-navigation" className="elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default ekit-nav-menu-one-page-no ekit-nav-dropdown-hover"><ul id="menu-divided-left-navigation" className="elementskit-navbar-nav elementskit-menu-po-left submenu-click-on-icon">
    <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/" className="ekit-menu-nav-link">Home</a></li>
    <li className="menu-item menu-item-has-children nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content"><a href="#" className="ekit-menu-nav-link ekit-menu-dropdown-toggle">Rentals</a>
      <ul className="elementskit-dropdown elementskit-submenu-panel">
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/stand-up-paddle-boarding" className="ekit-menu-nav-link">SUP</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/kayak" className="ekit-menu-nav-link">Kayak</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/water-park" className="ekit-menu-nav-link">Water Park</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/pedalo" className="ekit-menu-nav-link">Pedalo</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/e-foil" className="ekit-menu-nav-link">E-Foil</a></li>
      </ul>
    </li>
    <li className="menu-item menu-item-has-children nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content"><a href="#" className="ekit-menu-nav-link ekit-menu-dropdown-toggle">Kids and Birthday</a>
      <ul className="elementskit-dropdown elementskit-submenu-panel">
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/kids-and-birthdays" className="ekit-menu-nav-link">Kids Birthday Party</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/kids-kayak" className="ekit-menu-nav-link">Kids Kayak</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/kids-camp" className="ekit-menu-nav-link">Kids Camp</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/water-sports-club" className="ekit-menu-nav-link">Water Sports Club</a></li>
      </ul>
    </li>
    <li className="menu-item menu-item-has-children nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content"><a href="#" className="ekit-menu-nav-link ekit-menu-dropdown-toggle">Classes</a>
      <ul className="elementskit-dropdown elementskit-submenu-panel">
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/beach-yoga" className="ekit-menu-nav-link">Beach Yoga</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/sup-sound-healing" className="ekit-menu-nav-link">SUP Sound Healing</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/full-moon-series" className="ekit-menu-nav-link">Full Moon Series</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/sup-yoga" className="ekit-menu-nav-link">SUP Yoga</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/soma-breath" className="ekit-menu-nav-link">SOMA Breath</a></li>
      </ul>
    </li>
    </ul><div className="elementskit-nav-identity-panel"><button className="elementskit-menu-close elementskit-menu-toggler" type="button">X</button></div></div>
                  <div className="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay" />      </nav>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-e5c0c9d e-con-full e-flex e-con e-child" data-id="e5c0c9d" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-ce2bf47 elementor-widget elementor-widget-wavesurfer-site-logo" data-id="ce2bf47" data-element_type="widget" data-e-type="widget" data-settings="{&quot;align&quot;:&quot;center&quot;,&quot;width&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;width_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;width_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;max_height&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;max_height_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;max_height_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_border_radius&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;image_border_radius_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;image_border_radius_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_space&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;caption_space_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;caption_space_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="wavesurfer-site-logo.default">
              <div className="elementor-widget-container">
                <div className="ata-site-logo">
                  <a data-elementor-open-lightbox className="elementor-clickable" href="/">
                    <div className="ata-site-logo-set">           
                      <div className="ata-site-logo-container">
                        <img className="ata-site-logo-img elementor-animation-" src={logo} style={{ maxHeight: "45px", width: "auto" }} alt="default-logo" />
                      </div>
                    </div>
                  </a>
                </div>  
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-0c14d2e e-con-full e-flex e-con e-child" data-id="0c14d2e" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-4182f22 elementor-widget elementor-widget-ekit-nav-menu" data-id="4182f22" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="ekit-nav-menu.default">
              <div className="elementor-widget-container">
                <nav className="ekit-wid-con ekit_menu_responsive_tablet" data-hamburger-icon data-hamburger-icon-type="icon" data-responsive-breakpoint={1024}>
                  <button className="elementskit-menu-hamburger elementskit-menu-toggler" type="button" aria-label="hamburger-icon">
                    <span className="elementskit-menu-hamburger-icon" /><span className="elementskit-menu-hamburger-icon" /><span className="elementskit-menu-hamburger-icon" />
                  </button>
                  <div id="ekit-megamenu-divided-right-navigation" className="elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default ekit-nav-menu-one-page-no ekit-nav-dropdown-hover"><ul id="menu-divided-right-navigation" className="elementskit-navbar-nav elementskit-menu-po-left submenu-click-on-icon">
    <li className="menu-item menu-item-has-children nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content"><a href="/our-events" className="ekit-menu-nav-link ekit-menu-dropdown-toggle">Events</a>
      <ul className="elementskit-dropdown elementskit-submenu-panel">
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/ignite-pink-is-punk-events" className="ekit-menu-nav-link">Pink is Punk</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/team-bonding" className="ekit-menu-nav-link">Team Bonding</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/ignite-calendar" className="ekit-menu-nav-link">Calendar</a></li>
      </ul>
    </li>
    <li className="menu-item menu-item-has-children nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content"><a href="/shop" className="ekit-menu-nav-link ekit-menu-dropdown-toggle">Shop</a>
      <ul className="elementskit-dropdown elementskit-submenu-panel">
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/shop" className="ekit-menu-nav-link">Merch</a></li>
        <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/community-events" className="ekit-menu-nav-link">Community Events</a></li>
      </ul>
    </li>
    <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/faq" className="ekit-menu-nav-link">FAQ</a></li>
    <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/contact-us" className="ekit-menu-nav-link">Contact</a></li>
    </ul><div className="elementskit-nav-identity-panel"><button className="elementskit-menu-close elementskit-menu-toggler" type="button">X</button></div></div>
                  <div className="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay" />      </nav>
              </div>
            </div>
            <div className="elementor-element elementor-element-333b39f e-con-full e-flex e-con e-child" data-id="333b39f" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-38cb124 ekit-mini-cart--pos-right elementor-widget elementor-widget-elementskit-woo-mini-cart" data-id="38cb124" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="elementskit-woo-mini-cart.default">
                <div className="ekit-wid-con">
                  <div className="ekit-mini-cart">
                    <div className="ekit-dropdown-back ekit-mini-cart-visibility-hover" data-toggle="mini-cart-dropdown">
                      <i aria-hidden="true" className="icon icon-cart11" />                        <span className="ekit-mini-cart-text"> </span>
                      <div className="ekit-basket-item-count" style={{display: 'inline'}}>
                        <span className="ekit-cart-items-count count">
                          <span className="ekit-cart-content-count">0</span><span className="ekit-cart-content-separator"> - </span><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>0.00</bdi></span>                  </span>
                      </div>
                      <div className="ekit-mini-cart-container">
                        <div className="mini-cart-header">
                          <ul>
                            <li><span className="ekit-cart-count">0</span> items</li>
                            <li><a href="/cart">view cart</a></li>
                          </ul>
                        </div>
                        <div className="ekit-dropdown-menu ekit-dropdown-menu-mini-cart">
                          <div className="widget_shopping_cart_content">
                            <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>				</div>
              <div className="elementor-element elementor-element-2cf9a98 elementor-widget elementor-widget-button" data-id="2cf9a98" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="button.default">
                <a className="elementor-button elementor-button-link elementor-size-sm" href="/contact-us">
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">Book Now</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-869bc8d elementor-hidden-desktop e-flex e-con-boxed e-con e-parent" data-id="869bc8d" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-fc8470a e-con-full e-flex e-con e-child" data-id="fc8470a" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-c087356 elementor-widget elementor-widget-wavesurfer-site-logo" data-id="c087356" data-element_type="widget" data-e-type="widget" data-settings="{&quot;align&quot;:&quot;center&quot;,&quot;width&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;width_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;width_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;max_height&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;max_height_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;max_height_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_border_radius&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;image_border_radius_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;image_border_radius_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_space&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;caption_space_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;caption_space_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="wavesurfer-site-logo.default">
                <div className="elementor-widget-container">
                  <div className="ata-site-logo">
                    <a data-elementor-open-lightbox className="elementor-clickable" href="/">
                      <div className="ata-site-logo-set">           
                        <div className="ata-site-logo-container">
                          <img className="ata-site-logo-img elementor-animation-" src={logo} style={{ maxHeight: "45px", width: "auto" }} alt="default-logo" />
                        </div>
                      </div>
                    </a>
                  </div>  
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-a4a58e2 e-con-full e-flex e-con e-child" data-id="a4a58e2" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-7f71db2 elementor-widget elementor-widget-ekit-nav-menu" data-id="7f71db2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;ekit_we_effect_on&quot;:&quot;none&quot;}" data-widget_type="ekit-nav-menu.default">
                <div className="elementor-widget-container">
                  <nav className="ekit-wid-con ekit_menu_responsive_tablet" data-hamburger-icon data-hamburger-icon-type="icon" data-responsive-breakpoint={1024}>
                    <button className="elementskit-menu-hamburger elementskit-menu-toggler" type="button" aria-label="hamburger-icon">
                      <span className="elementskit-menu-hamburger-icon" /><span className="elementskit-menu-hamburger-icon" /><span className="elementskit-menu-hamburger-icon" />
                    </button>
                    <div id="ekit-megamenu-main-menu" className="elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default ekit-nav-menu-one-page-no ekit-nav-dropdown-hover"><ul id="menu-main-menu" className="elementskit-navbar-nav elementskit-menu-po-left submenu-click-on-icon"><li id="menu-item-home" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/" className="ekit-menu-nav-link">Home</a></li>
                         <li id="menu-item-rentals" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="#" className="ekit-menu-nav-link ekit-menu-dropdown-toggle">Rentals</a>
                           <ul className="elementskit-dropdown elementskit-submenu-panel">
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/stand-up-paddle-boarding" className="ekit-menu-nav-link">SUP</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/kayak" className="ekit-menu-nav-link">Kayak</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/water-park" className="ekit-menu-nav-link">Water Park</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/pedalo" className="ekit-menu-nav-link">Pedalo</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/e-foil" className="ekit-menu-nav-link">E-Foil</a></li>
                           </ul>
                         </li>
                         <li id="menu-item-kids" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="#" className="ekit-menu-nav-link ekit-menu-dropdown-toggle">Kids and Birthday</a>
                           <ul className="elementskit-dropdown elementskit-submenu-panel">
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/kids-and-birthdays" className="ekit-menu-nav-link">Kids Birthday Party</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/kids-kayak" className="ekit-menu-nav-link">Kids Kayak</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/kids-camp" className="ekit-menu-nav-link">Kids Camp</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/water-sports-club" className="ekit-menu-nav-link">Water Sports Club</a></li>
                           </ul>
                         </li>
                         <li id="menu-item-classes" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="#" className="ekit-menu-nav-link ekit-menu-dropdown-toggle">Classes</a>
                           <ul className="elementskit-dropdown elementskit-submenu-panel">
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/beach-yoga" className="ekit-menu-nav-link">Beach Yoga</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/sup-sound-healing" className="ekit-menu-nav-link">SUP Sound Healing</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/full-moon-series" className="ekit-menu-nav-link">Full Moon Series</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/sup-yoga" className="ekit-menu-nav-link">SUP Yoga</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/soma-breath" className="ekit-menu-nav-link">SOMA Breath</a></li>
                           </ul>
                         </li>
                         <li id="menu-item-events" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/our-events" className="ekit-menu-nav-link ekit-menu-dropdown-toggle">Events</a>
                           <ul className="elementskit-dropdown elementskit-submenu-panel">
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/ignite-pink-is-punk-events" className="ekit-menu-nav-link">Pink is Punk</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/team-bonding" className="ekit-menu-nav-link">Team Bonding</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/ignite-calendar" className="ekit-menu-nav-link">Calendar</a></li>
                           </ul>
                         </li>
                         <li id="menu-item-shop" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/shop" className="ekit-menu-nav-link ekit-menu-dropdown-toggle">Shop</a>
                           <ul className="elementskit-dropdown elementskit-submenu-panel">
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/shop" className="ekit-menu-nav-link">Merch</a></li>
                             <li className="menu-item nav-item elementskit-mobile-builder-content"><a href="/community-events" className="ekit-menu-nav-link">Community Events</a></li>
                           </ul>
                         </li>
                         <li id="menu-item-faq" className="menu-item menu-item-type-post_type menu-item-object-page nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/faq" className="ekit-menu-nav-link">FAQ</a></li></ul><div className="elementskit-nav-identity-panel"><button className="elementskit-menu-close elementskit-menu-toggler" type="button">X</button></div></div>
                    <div className="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay" />      </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
