const fs = require('fs');

if (fs.existsSync('app/page.tsx')) {
  let home = fs.readFileSync('app/page.tsx', 'utf8');

  // Replace Hero slides
  home = home.replace(/Dive Into Thrilling Water Adventures/g, "Dubai's #1 Water Sports on Palm Jumeirah");
  home = home.replace(/Experience the ultimate rush with jet skiing, parasailing, scuba diving, and more—crafted for unforgettable moments\./g, "Experience e-foil, paddleboarding, kayaking, kids camps, and beach wellness at RIVA Beach Club on Palm Jumeirah.");

  // Replace features/cards in section 1
  home = home.replace(/Ride the Waves/g, "E-Foil & Rentals");
  home = home.replace(/Feel the adrenaline with jet skiing, surfing, and more in stunning ocean views\./g, "Experience the future of water sports with electric hydrofoils, paddleboards, and kayaks.");
  
  home = home.replace(/Seamless Experience/g, "Kids & Birthday Parties");
  home = home.replace(/From booking to activity, enjoy hassle-free and comfortable water adventures\./g, "Unforgettable inflatable water park fun, seasonal camps, and birthday celebrations.");
  
  home = home.replace(/Trusted Safety Standards/g, "Classes & Wellness");
  home = home.replace(/Professional instructors and world-class safety measures for worry-free fun\./g, "Beach yoga, SUP sound healing, full moon series, and SOMA breathwork on the water.");

  // Replace About section
  home = home.replace(/Feel the Rush of Ultimate Water Adventures/g, "Your Gateway to Ocean Thrills and Wellness");
  home = home.replace(/We bring you unforgettable water sports experiences with a perfect blend of adventure, safety, and fun\. From jet skiing to parasailing, our expert team ensures every moment is exciting, safe, and truly memorable\./g, "IGNITE Water Sports is Dubai's premier aquatic adventure hub at RIVA Beach Club, Palm Jumeirah. In calm, protected waters, we offer world-class equipment, certified instructors, and transformative wellness programs.");

  // Replace Service cards
  home = home.replace(/Scuba Diving/g, "Stand Up Paddleboarding");
  home = home.replace(/\/lessons\/scuba-diving\/index\.html/g, "/stand-up-paddle-boarding");
  home = home.replace(/3 days 18 hrs/g, "1 Hour Rental");
  home = home.replace(/\$49\.00/g, "AED 85");

  home = home.replace(/Snorkeling/g, "Kayak Rentals");
  home = home.replace(/\/lessons\/snorkeling\/index\.html/g, "/kayak");
  home = home.replace(/2 days 18 hrs/g, "Single / Double");
  home = home.replace(/\$39\.00/g, "AED 80");

  home = home.replace(/Parasailing/g, "E-Foil Adventures");
  home = home.replace(/\/lessons\/parasailing\/index\.html/g, "/e-foil");
  home = home.replace(/5 days 18 hrs/g, "30-60 Mins");
  home = home.replace(/\$49\.00/g, "AED 450");

  // Fix buttons & links
  home = home.replace(/href="\/our-lessons"/g, 'href="/stand-up-paddle-boarding"');
  home = home.replace(/href="\/contact"/g, 'href="/contact-us"');

  fs.writeFileSync('app/page.tsx', home);
  console.log('Homepage fully updated with real Ignite services and copy.');
}
