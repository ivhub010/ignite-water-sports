const fs = require('fs');
const path = require('path');

const layoutPath = 'app/layout.tsx';
let content = fs.readFileSync(layoutPath, 'utf8');

const regex = /<script id="jquery-numerator-js"[^>]*><\\\/script>\n/g;
const matches = content.match(regex);
if (matches) {
  content = content.replace(regex, '');
  content = content.replace(
    '<script id="elementor-webpack-runtime-js"',
    matches[0] + '<script id="elementor-webpack-runtime-js"'
  );
  fs.writeFileSync(layoutPath, content);
  console.log('Fixed script order in layout.tsx');
}
