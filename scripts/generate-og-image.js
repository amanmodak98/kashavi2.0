// Script to generate OG image
// Run: node scripts/generate-og-image.js

const fs = require('fs');
const path = require('path');

// Create a simple SVG that can be converted to JPG later
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f97316;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ea580c;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Pattern overlay -->
  <rect width="1200" height="630" fill="#000000" opacity="0.05"/>

  <!-- Main text -->
  <text x="600" y="280" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="#ffffff" text-anchor="middle">
    Kashavi Infotech
  </text>

  <!-- Subtitle -->
  <text x="600" y="360" font-family="Arial, sans-serif" font-size="36" fill="#ffffff" text-anchor="middle" opacity="0.95">
    AI-Powered Growth, Engineered for Scale
  </text>

  <!-- Bottom tagline -->
  <text x="600" y="520" font-family="Arial, sans-serif" font-size="24" fill="#ffffff" text-anchor="middle" opacity="0.9">
    Digital Products · Growth · Intelligence · Infrastructure
  </text>
</svg>`;

const outputPath = path.join(__dirname, '../public/images/og-default.svg');
fs.writeFileSync(outputPath, svg);

console.log('✓ OG image (SVG) generated at:', outputPath);
console.log('Note: For JPG, use an online converter or install sharp: npm install sharp');
