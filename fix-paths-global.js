const fs = require('fs');
const path = require('path');

function fixPathsGlobal(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixPathsGlobal(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.js') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const newContent = content
        .replace(/\.\.\/images\//g, '/images/')
        .replace(/\.\.\/wp-content\//g, '/vendor/')
        .replace(/src="\.\.\//g, 'src="/')
        .replace(/href="\.\.\//g, 'href="/');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Fixed paths in ${fullPath}`);
      }
    }
  }
}

fixPathsGlobal('app');
