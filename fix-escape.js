const fs = require('fs');
let content = fs.readFileSync('app/layout.tsx', 'utf8');
let before = content;

// Inside the yithWcwlAddToWishlist script block
content = content.replace(/var yithWcwlAddToWishlist = \{.*?\};/s, (match) => {
  return match.replace(/\\"/g, '\\\\"');
});

// Inside the yith_wcwl_l10n script block
content = content.replace(/var yith_wcwl_l10n = \{.*?\};/s, (match) => {
  return match.replace(/\\"/g, '\\\\"').replace(/\\u003C/g, '\\\\u003C').replace(/\\u003E/g, '\\\\u003E');
});

fs.writeFileSync('app/layout.tsx', content);
console.log('Fixed inline scripts! Changed:', content !== before);
