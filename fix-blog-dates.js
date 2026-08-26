const fs = require('fs');
const file = 'app/blogs/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const dates = [
  { day: '13', month: 'Mar' },
  { day: '12', month: 'Mar' },
  { day: '10', month: 'Mar' },
  { day: '05', month: 'Mar' },
  { day: '28', month: 'Feb' },
  { day: '20', month: 'Feb' },
];

let i = 0;
// We need to match the injected <img ... /> so we don't duplicate or delete it.
content = content.replace(/(<img src="\/images\/[^"]+" alt="Blog Image" style=\{\{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '16\/9' \}\} \/>)/g, (match) => {
  const date = dates[i % dates.length];
  i++;
  
  const dateBlock = `
    <div style={{
      position: 'absolute',
      top: '30px',
      left: '-15px',
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      width: '70px',
      height: '75px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
      zIndex: 10
    }}>
      <div style={{ fontSize: '28px', lineHeight: '1', fontWeight: '500', fontFamily: 'serif', marginBottom: '2px' }}>${date.day}</div>
      <div style={{ fontSize: '15px', lineHeight: '1', fontWeight: '400', fontFamily: 'sans-serif' }}>${date.month}</div>
      <div style={{
        position: 'absolute',
        top: '-15px',
        left: '0',
        width: '0',
        height: '0',
        borderStyle: 'solid',
        borderWidth: '0 0 15px 15px',
        borderColor: 'transparent transparent #000000 transparent'
      }}></div>
    </div>
  `;

  return match + '\n    ' + dateBlock;
});

// also add position relative to the container if not there
content = content.replace(/<div className="elementskit-entry-header">/g, '<div className="elementskit-entry-header" style={{ position: "relative" }}>');

fs.writeFileSync(file, content);
console.log('Fixed blog dates in ' + file);
