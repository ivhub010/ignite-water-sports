const fs = require('fs');
const path = require('path');

const servicePages = [
  'beach-yoga',
  'community-events',
  'contact-us',
  'e-foil',
  'faq',
  'full-moon-series',
  'ignite-calendar',
  'ignite-pink-is-punk-events',
  'kayak',
  'kids-and-birthdays',
  'kids-camp',
  'kids-kayak',
  'our-events',
  'partner',
  'pedalo',
  'privacy-policy',
  'shop',
  'soma-breath',
  'stand-up-paddle-boarding',
  'sup-sound-healing',
  'sup-yoga',
  'team-bonding',
  'terms-and-conditions',
  'water-park',
  'water-sports-club'
];

let updated = 0;

servicePages.forEach(dir => {
  const filePath = path.join('app', dir, 'page.tsx');
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Ensure elementor-post-30-css is included in the head
  if (!content.includes('post-3027e7.css')) {
    content = content.replace(
      '<link rel="stylesheet" id="elementor-post-423-css" href="/images/elementor/css/post-42396e3.css?ver=1787278549" media="all" />',
      '<link rel="stylesheet" id="elementor-post-423-css" href="/images/elementor/css/post-42396e3.css?ver=1787278549" media="all" />\n      <link rel="stylesheet" id="elementor-post-30-css" href="/images/elementor/css/post-3027e7.css?ver=1787332087" media="all" />'
    );
  }

  // Ensure the page wrapper has className="elementor elementor-30"
  content = content.replace(
    /className="elementor elementor-9999"/g,
    'className="elementor elementor-30"'
  );
  content = content.replace(
    /data-elementor-id=\{9999\}/g,
    'data-elementor-id={30}'
  );

  // Fix button container styling and wrapper layout
  content = content.replace(
    /<div className="elementor-element e-flex e-con-boxed e-con e-parent" data-element_type="container">/g,
    '<div className="elementor-element elementor-element-957c32e e-flex e-con-boxed e-con e-parent" data-id="957c32e" data-element_type="container" data-e-type="container" data-settings=\'{"background_background":"classic"}\'>'
  );
  content = content.replace(
    /<div className="elementor-element e-con-full e-flex e-con e-child" data-element_type="container">/g,
    '<div className="elementor-element elementor-element-55f4937 e-con-full e-flex e-con e-child" data-id="55f4937" data-element_type="container" data-e-type="container">'
  );

  fs.writeFileSync(filePath, content);
  console.log('Fixed styling on: ' + filePath);
  updated++;
});

console.log(`\n✅ Fixed full theme styling across all ${updated} pages!`);
