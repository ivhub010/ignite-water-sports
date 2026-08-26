const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const HTMLtoJSX = require('htmltojsx');

const converter = new HTMLtoJSX({ createClass: false });

const fullDumpPath = '/Users/ivwellness/Downloads/wavesurfer-new.wpthemeverse.com';
const themeIndexHtmlPath = 'theme_reference/index.html';
const appDir = 'app';

// Find unique links in theme_reference/index.html
const content = fs.readFileSync(themeIndexHtmlPath, 'utf8');
const regex = /href="\.\.\/([^/]+)\/index\.html"/g;
let match;
const linkedPages = new Set();

while ((match = regex.exec(content)) !== null) {
  linkedPages.add(match[1]);
}

console.log(`Found ${linkedPages.size} linked pages in theme.`);

linkedPages.forEach(page => {
  const pageHtmlPath = path.join(fullDumpPath, page, 'index.html');
  if (fs.existsSync(pageHtmlPath)) {
    console.log(`Processing ${page}...`);
    let pageContent = fs.readFileSync(pageHtmlPath, 'utf8');
    
    // Fix malformed HTML
    pageContent = pageContent.replace(/class="([^"]+?)\s+width="/g, 'class="$1" width="');
    
    const dom = new JSDOM(pageContent);
    const document = dom.window.document;
    
    let bodyHtml = '';
    document.body.childNodes.forEach(node => {
      // exclude scripts as they are handled in layout
      if (node.nodeType === 1 && node.tagName.toLowerCase() === 'script') {
        return;
      }
      if (node.nodeType === 1 || node.nodeType === 3) {
        if (node.nodeType === 1) {
          // Remove preloader
          if (node.className && node.className.includes('preloader')) return;
          bodyHtml += node.outerHTML + '\n';
        } else {
          bodyHtml += node.textContent + '\n';
        }
      }
    });

    let bodyJsx = converter.convert(bodyHtml);
    
    // Clean up JSX output
    let safeBodyJsx = bodyJsx.trim();
    if (safeBodyJsx.startsWith('<div>')) {
      safeBodyJsx = '<>' + safeBodyJsx.slice(5, -6) + '</>';
    }
    
    // Fix HTTrack relative links
    safeBodyJsx = safeBodyJsx.replace(/href="\.\.\/([^/]+)\/index\.html"/g, 'href="/$1"');
    safeBodyJsx = safeBodyJsx.replace(/href="\.\.\/index\.html"/g, 'href="/"');
    safeBodyJsx = safeBodyJsx.replace(/href="index\.html"/g, 'href="/"');
    safeBodyJsx = safeBodyJsx.replace(/href="\.\.\/([^"]+)"/g, 'href="/$1"');
    
    // Fix numeric literal errors in JSX (e.g. data-id={0998671})
    safeBodyJsx = safeBodyJsx.replace(/=\{0([0-9]+)\}/g, '="0$1"');

    const componentContent = `
export default function ${page.replace(/[^a-zA-Z0-9]/g, '')}() {
  return (
    ${safeBodyJsx}
  );
}
`;
    
    const pageDir = path.join(appDir, page);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    fs.writeFileSync(path.join(pageDir, 'page.tsx'), componentContent);
  } else {
    console.warn(`Could not find full HTML for ${page}`);
  }
});

// Finally, update app/layout.tsx and app/page.tsx links
const fixLinksInFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    fileContent = fileContent.replace(/href="\.\.\/([^/]+)\/index\.html"/g, 'href="/$1"');
    fileContent = fileContent.replace(/href="\.\.\/index\.html"/g, 'href="/"');
    fileContent = fileContent.replace(/href="index\.html"/g, 'href="/"');
    fs.writeFileSync(filePath, fileContent);
  }
};

fixLinksInFile('app/layout.tsx');
fixLinksInFile('app/page.tsx');

console.log('Done generating pages and fixing links.');
