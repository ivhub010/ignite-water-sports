const fs = require('fs');
const path = require('path');

const appDir = 'app';
const fullDumpPath = '/Users/ivwellness/Downloads/wavesurfer-new.wpthemeverse.com';

function getCssLinks(htmlContent) {
  // Extract all <link rel='stylesheet' ...> tags from the <head>
  const headMatch = htmlContent.match(/<head>([\s\S]*?)<\/head>/i);
  if (!headMatch) return [];
  
  const headHtml = headMatch[1];
  const linkRegex = /<link\s+rel=['"]stylesheet['"]\s+id=['"]elementor-post-\d+-css['"]\s+href=['"]([^'"]+)['"][^>]*>/gi;
  
  const links = [];
  let match;
  while ((match = linkRegex.exec(headHtml)) !== null) {
    const originalHref = match[1];
    
    // We only care about the post-XXXX.css files
    if (originalHref.includes('post-5113') || originalHref.includes('post-8') || originalHref.includes('post-6338') || originalHref.includes('post-6724')) {
      continue; // These are already in layout.tsx
    }
    
    // Clean up the href using the same rules as replace-paths.js
    let newHref = originalHref;
    newHref = newHref.replace(/\.\.\/wp-content\/uploads/g, '/images');
    newHref = newHref.replace(/\.\.\/wp-content\/plugins/g, '/vendor/plugins');
    newHref = newHref.replace(/\.\.\/wp-content\/themes/g, '/vendor/themes');
    newHref = newHref.replace(/\.\.\/wp-includes/g, '/lib');
    
    // Generate valid JSX for the link
    const idMatch = match[0].match(/id=['"]([^'"]+)['"]/i);
    const id = idMatch ? idMatch[1] : '';
    
    links.push(`<link rel="stylesheet" id="${id}" href="${newHref}" media="all" />`);
  }
  
  return links;
}

function processDirectory(dir) {
  const folders = fs.readdirSync(dir);
  
  for (const folder of folders) {
    const folderPath = path.join(dir, folder);
    
    if (fs.statSync(folderPath).isDirectory()) {
      const pageTsxPath = path.join(folderPath, 'page.tsx');
      const originalHtmlPath = path.join(fullDumpPath, folder, 'index.html');
      
      if (fs.existsSync(pageTsxPath) && fs.existsSync(originalHtmlPath)) {
        const originalHtml = fs.readFileSync(originalHtmlPath, 'utf8');
        const cssLinks = getCssLinks(originalHtml);
        
        if (cssLinks.length > 0) {
          let pageTsxContent = fs.readFileSync(pageTsxPath, 'utf8');
          
          // Inject right after `return (\n    <>`
          const cssString = '\n      ' + cssLinks.join('\n      ') + '\n';
          
          // Check if already injected
          if (!pageTsxContent.includes(cssLinks[0])) {
             const newContent = pageTsxContent.replace(/return\s*\(\s*<>/, `return (\n    <>${cssString}`);
             if (pageTsxContent !== newContent) {
               fs.writeFileSync(pageTsxPath, newContent);
               console.log(`Injected ${cssLinks.length} CSS links into ${pageTsxPath}`);
             }
          }
        }
      }
    }
  }
}

processDirectory(appDir);
