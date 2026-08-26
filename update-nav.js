const fs = require('fs');
const path = require('path');

// New navigation structure matching WordPress site
const newNavItems = `<li id="menu-item-home" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/" className="ekit-menu-nav-link">Home</a></li>
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
                       <li id="menu-item-faq" className="menu-item menu-item-type-post_type menu-item-object-page nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/faq" className="ekit-menu-nav-link">FAQ</a></li>`;

// Update footer links too
const newFooterLinks = `<li id="menu-item-f1" className="menu-item nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/" className="ekit-menu-nav-link">Home</a></li>
                         <li id="menu-item-f2" className="menu-item nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/faq" className="ekit-menu-nav-link">FAQ</a></li>
                         <li id="menu-item-f3" className="menu-item nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/our-events" className="ekit-menu-nav-link">Events</a></li>
                         <li id="menu-item-f4" className="menu-item nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/shop" className="ekit-menu-nav-link">Shop</a></li>
                         <li id="menu-item-f5" className="menu-item nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><a href="/contact-us" className="ekit-menu-nav-link">Contact</a></li>`;

// Walk all page files
function updateNavInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Replace the main menu items (between <ul id="menu-main-menu" ...> and </ul>)
  const mainMenuRegex = /(<ul id="menu-main-menu"[^>]*>)([\s\S]*?)(<\/ul><div className="elementskit-nav-identity-panel">)/g;
  if (mainMenuRegex.test(content)) {
    content = content.replace(mainMenuRegex, `$1${newNavItems}$3`);
    changed = true;
  }
  
  // Replace footer menu items
  const footerMenuRegex = /(<ul id="menu-footer-menu"[^>]*>)([\s\S]*?)(<\/ul><\/div>)/g;
  if (footerMenuRegex.test(content)) {
    content = content.replace(footerMenuRegex, `$1${newFooterLinks}$3`);
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log('Nav updated: ' + filePath);
  }
  return changed;
}

let updated = 0;
const walkDir = (dir) => {
  fs.readdirSync(dir).forEach(f => {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) walkDir(fp);
    else if (fp.endsWith('page.tsx') && updateNavInFile(fp)) updated++;
  });
};
walkDir('app');
console.log('\nUpdated navigation in ' + updated + ' pages.');
