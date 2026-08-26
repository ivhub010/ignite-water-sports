const fs = require('fs');
const path = require('path');

const leftNavHtml = `<ul id="menu-divided-left-navigation" className="elementskit-navbar-nav elementskit-menu-po-left submenu-click-on-icon">
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
</ul>`;

const rightNavHtml = `<ul id="menu-divided-right-navigation" className="elementskit-navbar-nav elementskit-menu-po-left submenu-click-on-icon">
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
</ul>`;

const files = fs.readdirSync('app');
let count = 0;

files.forEach(f => {
  const pagePath = path.join('app', f, 'page.tsx');
  let filePath = pagePath;
  if (!fs.existsSync(filePath)) {
    if (f === 'page.tsx') filePath = 'app/page.tsx';
    else return;
  }

  let c = fs.readFileSync(filePath, 'utf8');

  // Replace Left Navigation
  const leftStart = c.indexOf('<ul id="menu-divided-left-navigation"');
  if (leftStart !== -1) {
    const leftEnd = c.indexOf('</ul>', leftStart) + 5;
    c = c.substring(0, leftStart) + leftNavHtml + c.substring(leftEnd);
  }

  // Replace Right Navigation
  const rightStart = c.indexOf('<ul id="menu-divided-right-navigation"');
  if (rightStart !== -1) {
    const rightEnd = c.indexOf('</ul>', rightStart) + 5;
    c = c.substring(0, rightStart) + rightNavHtml + c.substring(rightEnd);
  }

  // Ensure Logo points to /images/ignite-logo.png or updated logo with proper styling
  c = c.replace(/src="\/images\/2026\/02\/logo\.svg"/g, 'src="/images/ignite-logo.png" style={{ maxHeight: "45px", width: "auto" }}');
  c = c.replace(/src="\/images\/2026\/02\/logo\.png"/g, 'src="/images/ignite-logo.png" style={{ maxHeight: "45px", width: "auto" }}');

  // Update Footer links to exact Ignite pages
  c = c.replace(/About Us/g, 'About IGNITE');
  c = c.replace(/href="\/about-us"/g, 'href="/partner"');
  c = c.replace(/href="\/our-services"/g, 'href="/stand-up-paddle-boarding"');
  c = c.replace(/href="\/our-lessons"/g, 'href="/e-foil"');
  c = c.replace(/href="\/contact"/g, 'href="/contact-us"');

  fs.writeFileSync(filePath, c);
  count++;
});

console.log(`Updated Header & Footer Navigation and Logo on ${count} pages!`);
