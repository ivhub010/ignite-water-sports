const fs = require('fs');
const path = require('path');

function fixDomainGlobal(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixDomainGlobal(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.js') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const newContent = content
        .replace(/https:\/\/wavesurfer-new\.wpthemeverse\.com/g, '')
        .replace(/https:\\\/\\\/wavesurfer-new\.wpthemeverse\.com/g, '');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Fixed domain paths in ${fullPath}`);
      }
    }
  }
}

fixDomainGlobal('app');
