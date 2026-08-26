const fs = require('fs');
const path = require('path');

// The new pages we created
const newPages = [
  'stand-up-paddle-boarding', 'kayak', 'water-park', 'pedalo', 'e-foil',
  'kids-and-birthdays', 'kids-kayak', 'kids-camp', 'water-sports-club',
  'beach-yoga', 'sup-sound-healing', 'full-moon-series', 'sup-yoga', 'soma-breath',
  'ignite-pink-is-punk-events', 'team-bonding', 'ignite-calendar', 'community-events',
  'terms-and-conditions', 'privacy-policy', 'partner'
];

// Read the our-services template to extract header and footer properly
const template = fs.readFileSync('app/our-services/page.tsx', 'utf8');

// Find the INNER content boundaries
// The header starts after the function declaration and return (<>  ... CSS links)
// and ends right before the page-specific content container
const funcStart = template.indexOf('export default function ourservices()');
const returnStart = template.indexOf('return (', funcStart);
const fragmentStart = template.indexOf('<>', returnStart);

// The page-specific content starts at the data-elementor-type="wp-page" div  
const wpPageStart = template.indexOf('<div data-elementor-type="wp-page"');

// The footer starts at ekit-template-content-footer
const footerStart = template.indexOf('<div className="ekit-template-content-markup ekit-template-content-footer');

// Extract just the header HTML (between <> and the wp-page content)
const headerHtml = template.substring(fragmentStart + 2, wpPageStart).trim();

// Extract footer HTML (from footer marker to end of JSX, before closing tags)
const footerEndMarker = '</>\n  );\n}';
const footerEndIdx = template.indexOf(footerEndMarker);
const footerHtml = template.substring(footerStart, footerEndIdx).trim();

newPages.forEach(route => {
  const filePath = path.join('app', route, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract the function name from the first line
  const fnMatch = content.match(/export default function (\w+)\(\)/);
  const fnName = fnMatch ? fnMatch[1] : route.replace(/-/g, '');
  
  // Find where the new page's own content starts (after the duplicated ourservices function)
  // The content we want is between our function's <> and our content div
  // We need to find our unique content (the wp-page div with id 9999)
  const contentStart = content.indexOf('<div data-elementor-type="wp-page" data-elementor-id={9999}');
  
  // Find where our content ends (before the duplicated footer from template)
  // Our content ends at the closing </div> before the footer
  const ourFooterStart = content.indexOf('<div className="ekit-template-content-markup ekit-template-content-footer');
  
  if (contentStart === -1 || ourFooterStart === -1) {
    console.log('SKIP (markers not found): ' + filePath);
    return;
  }
  
  const uniqueContent = content.substring(contentStart, ourFooterStart).trim();
  
  // Rebuild the page cleanly
  const cleanPage = `
export default function ${fnName}() {
  return (
    <>
      <link rel="stylesheet" id="elementor-post-3436-css" href="/images/elementor/css/post-343696e3.css?ver=1787278549" media="all" />
      <link rel="stylesheet" id="elementor-post-423-css" href="/images/elementor/css/post-42396e3.css?ver=1787278549" media="all" />

${headerHtml}
  ${uniqueContent}
  ${footerHtml}
</>
  );
}
`;
  
  fs.writeFileSync(filePath, cleanPage);
  console.log('Fixed: ' + filePath);
});

console.log('\nAll pages fixed!');
