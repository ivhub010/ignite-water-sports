const fs = require('fs');
const path = require('path');

function fixSrcset(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixSrcset(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.js') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove srcSet="..." and sizes="..."
      const newContent = content
        .replace(/\bsrcSet="[^"]*"/g, '')
        .replace(/\bsizes="[^"]*"/g, '');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Fixed srcSet in ${fullPath}`);
      }
    }
  }
}

fixSrcset('app');
