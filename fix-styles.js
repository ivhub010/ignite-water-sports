const fs = require('fs');
const path = require('path');

function fixStylesInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixStylesInDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Wrap keys starting with a hyphen in quotes: -key: -> '-key':
      const newContent = content.replace(/([{,]\s*)-([a-zA-Z0-9_]+)\s*:/g, "$1'-$2':");
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Fixed styles in ${fullPath}`);
      }
    }
  }
}

fixStylesInDir('app');
