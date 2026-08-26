const fs = require('fs');
const path = require('path');

const originalHtmlPath = '/Users/ivwellness/Downloads/wavesurfer-new.wpthemeverse.com/home-page-3/index.html';
const pageTsxPath = 'app/page.tsx';

function getCssLinks(htmlContent) {
  const headMatch = htmlContent.match(/<head>([\s\S]*?)<\/head>/i);
  if (!headMatch) return [];
  const headHtml = headMatch[1];
  const linkRegex = /<link\s+rel=['"]stylesheet['"]\s+id=['"]elementor-post-\d+-css['"]\s+href=['"]([^'"]+)['"][^>]*>/gi;
  const links = [];
  let match;
  while ((match = linkRegex.exec(headHtml)) !== null) {
    const originalHref = match[1];
    if (originalHref.includes('post-5113') || originalHref.includes('post-8') || originalHref.includes('post-6338') || originalHref.includes('post-6724')) continue;
    let newHref = originalHref.replace(/\.\.\/wp-content\/uploads/g, '/images');
    const idMatch = match[0].match(/id=['"]([^'"]+)['"]/i);
    const id = idMatch ? idMatch[1] : '';
    links.push(`<link rel="stylesheet" id="${id}" href="${newHref}" media="all" />`);
  }
  return links;
}

const originalHtml = fs.readFileSync(originalHtmlPath, 'utf8');
const cssLinks = getCssLinks(originalHtml);
if (cssLinks.length > 0) {
  let pageTsxContent = fs.readFileSync(pageTsxPath, 'utf8');
  const cssString = '\n      ' + cssLinks.join('\n      ') + '\n';
  if (!pageTsxContent.includes(cssLinks[0])) {
     const newContent = pageTsxContent.replace(/return\s*\(\s*<>/, `return (\n    <>${cssString}`);
     fs.writeFileSync(pageTsxPath, newContent);
     console.log(`Injected ${cssLinks.length} CSS links into ${pageTsxPath}`);
  }
}
