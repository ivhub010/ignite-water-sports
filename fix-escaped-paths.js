const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('app', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;

    // Replace wp-content\/uploads\/ with \/images\/
    newContent = newContent.replace(/(\\\/)?wp-content\\\/uploads\\\//g, '\\/images\\/');
    
    // Replace wp-content\/fonts\/ with \/fonts\/
    newContent = newContent.replace(/(\\\/)?wp-content\\\/fonts\\\//g, '\\/fonts\\/');
    
    // Replace remaining wp-content\/ with \/vendor\/
    newContent = newContent.replace(/(\\\/)?wp-content\\\//g, '\\/vendor\\/');
    
    // Replace wp-includes\/ with \/lib\/
    newContent = newContent.replace(/(\\\/)?wp-includes\\\//g, '\\/lib\\/');

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed escaped paths in ${filePath}`);
    }
  }
});
