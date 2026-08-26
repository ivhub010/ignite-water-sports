const fs = require('fs');
const path = require('path');

function fixEmptyClassName(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixEmptyClassName(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.js') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const newContent = content
        .replace(/ className alt=/g, ' alt=')
        .replace(/ className \/>/g, ' />')
        .replace(/ className >/g, ' >')
        .replace(/ className\s+width=/g, ' width=');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Fixed empty className in ${fullPath}`);
      }
    }
  }
}

fixEmptyClassName('app');
