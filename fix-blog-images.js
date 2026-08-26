const fs = require('fs');
const file = 'app/blogs/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const images = [
  '/images/2024/03/blog_details1-3.png',
  '/images/2024/03/blog_details2.png',
  '/images/2024/03/blog_details3.png',
  '/images/2024/03/blog_details4.png',
  '/images/2024/03/blog_details5.png',
  '/images/2024/03/blog_details6.png',
  '/images/2024/03/blog_details7.png',
];

let i = 0;
content = content.replace(/<div className="elementskit-entry-header">\s*<\/div>/g, () => {
  const imgSrc = images[i % images.length];
  i++;
  return `<div className="elementskit-entry-header">\n  <a href="#" className="elementskit-entry-thumb">\n    <img src="${imgSrc}" alt="Blog Image" style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '16/9' }} />\n  </a>\n</div>`;
});

fs.writeFileSync(file, content);
console.log('Fixed blog images in ' + file);
