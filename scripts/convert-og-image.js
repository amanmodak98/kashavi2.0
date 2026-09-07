// Convert SVG to JPG using sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/images/og-default.svg');
const jpgPath = path.join(__dirname, '../public/images/og-default.jpg');

const svgBuffer = fs.readFileSync(svgPath);

sharp(svgBuffer)
  .resize(1200, 630)
  .jpeg({ quality: 90 })
  .toFile(jpgPath)
  .then(() => {
    console.log('✓ OG image converted to JPG:', jpgPath);
    // Clean up SVG
    fs.unlinkSync(svgPath);
    console.log('✓ SVG file removed');
  })
  .catch(err => {
    console.error('Error converting image:', err);
  });
