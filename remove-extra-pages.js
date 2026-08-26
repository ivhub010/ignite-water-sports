const fs = require('fs');
const path = require('path');

// The exact 27 pages to KEEP
const keepPages = new Set([
  '',                           // Home (app/page.tsx)
  'faq',                        // FAQ
  'stand-up-paddle-boarding',   // Standup Paddleboarding (SUP)
  'kayak',                      // Kayak
  'water-park',                 // Water Park
  'pedalo',                     // Pedalo
  'e-foil',                     // E-Foil
  'kids-and-birthdays',         // Kids Birthday Party
  'kids-kayak',                 // Kids Kayak
  'kids-camp',                  // Kids Camp
  'water-sports-club',          // Water Sports Club
  'beach-yoga',                 // Beach Yoga
  'sup-sound-healing',          // SUP Sound Healing
  'full-moon-series',           // Full Moon Series
  'sup-yoga',                   // SUP Yoga
  'soma-breath',                // SOMA Breath
  'our-events',                 // Events
  'ignite-pink-is-punk-events', // IGNITE Pink is Punk
  'team-bonding',               // Team Bonding
  'ignite-calendar',            // Calendar
  'community-events',           // Community Events
  'shop',                       // Shop / Store / Merch
  'terms-and-conditions',       // Terms and Conditions
  'privacy-policy',             // Privacy Policy
  'contact-us',                 // Contact Us
  'partner'                     // Partner with Us
]);

const appDir = 'app';
const items = fs.readdirSync(appDir);
let removedCount = 0;

items.forEach(item => {
  const itemPath = path.join(appDir, item);
  if (fs.statSync(itemPath).isDirectory()) {
    if (!keepPages.has(item)) {
      fs.rmSync(itemPath, { recursive: true, force: true });
      console.log('Removed extra page: /' + item);
      removedCount++;
    }
  }
});

console.log(`\n✅ Total extra pages removed: ${removedCount}`);
