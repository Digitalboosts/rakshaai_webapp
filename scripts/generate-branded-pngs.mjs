import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// Generate an ultra-modern, engaging SVG for the Phone Scam Checker
const phoneScamSvg = `
<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#082f49" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#164e63" />
    </linearGradient>
    <linearGradient id="shield" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.1" />
    </linearGradient>
    <linearGradient id="btn" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#b91c1c" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="15" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#000000" flood-opacity="0.6" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#bg)" />

  <!-- Background Decorative Circles -->
  <circle cx="200" cy="150" r="150" fill="#0ea5e9" opacity="0.1" filter="url(#glow)" />
  <circle cx="600" cy="450" r="200" fill="#2dd4bf" opacity="0.08" filter="url(#glow)" />

  <!-- Branding Watermark -->
  <text x="40" y="50" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#ffffff" letter-spacing="1">
    Raksha<tspan fill="#38bdf8">AI</tspan>
  </text>
  
  <!-- Glowing Shield Background -->
  <path d="M400 120 L580 180 V350 C580 470 400 540 400 540 C400 540 220 470 220 350 V180 Z" fill="url(#shield)" stroke="#38bdf8" stroke-width="4" filter="url(#glow)" />

  <!-- The Smartphone -->
  <rect x="330" y="190" width="140" height="260" rx="20" fill="#1e293b" stroke="#475569" stroke-width="4" filter="url(#shadow)"/>
  <rect x="340" y="200" width="120" height="240" rx="12" fill="#0f172a" />
  
  <!-- Phone Top Notch -->
  <rect x="380" y="200" width="40" height="15" rx="6" fill="#1e293b" />

  <!-- Caller ID Alert -->
  <circle cx="400" cy="270" r="30" fill="#ef4444" opacity="0.2" filter="url(#glow)" />
  <circle cx="400" cy="270" r="25" fill="#ef4444" opacity="0.4" />
  <circle cx="400" cy="270" r="20" fill="#ef4444" />
  <path d="M400 260 V275 M400 282 V284" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />

  <text x="400" y="325" font-family="system-ui" font-size="16" font-weight="800" fill="#ef4444" text-anchor="middle">SCAM LIKELY</text>
  <text x="400" y="340" font-family="system-ui" font-size="12" font-weight="600" fill="#94a3b8" text-anchor="middle">+91 98765 43210</text>

  <!-- Protection Overlay Graphic -->
  <rect x="180" y="420" width="180" height="60" rx="10" fill="#0ea5e9" opacity="0.9" filter="url(#shadow)" />
  <text x="270" y="455" font-family="system-ui" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">Threat Blocked</text>

  <rect x="440" y="420" width="180" height="60" rx="10" fill="#1e293b" opacity="0.9" stroke="#334155" stroke-width="2" filter="url(#shadow)" />
  <text x="530" y="455" font-family="system-ui" font-size="16" font-weight="500" fill="#e2e8f0" text-anchor="middle">Analyzed by AI</text>
  
  <circle cx="470" cy="450" r="10" fill="none" stroke="#22c55e" stroke-width="3"/>
  <path d="M465 450 L468 453 L475 446" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round"/>
</svg>
`;

// Generate Statistical Map PNG
const statsSvg = `
<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#e2e8f0" />
    </linearGradient>
    <linearGradient id="barG" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
    <filter id="shadow2" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#000000" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="800" height="600" fill="url(#bg2)" />

  <text x="40" y="60" font-family="system-ui" font-size="32" font-weight="900" fill="#0f172a">Rise in Phone Fraud Cases in India</text>
  <text x="40" y="90" font-family="system-ui" font-size="18" font-weight="500" fill="#64748b">Verified data across metropolitan and Tier-2 cities</text>

  <!-- Grid lines -->
  <line x1="80" y1="150" x2="720" y2="150" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="8 8" />
  <line x1="80" y1="250" x2="720" y2="250" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="8 8" />
  <line x1="80" y1="350" x2="720" y2="350" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="8 8" />
  <line x1="80" y1="450" x2="720" y2="450" stroke="#94a3b8" stroke-width="2" />

  <!-- Y axis text -->
  <text x="70" y="155" text-anchor="end" font-family="system-ui" font-size="14" fill="#64748b">3M+</text>
  <text x="70" y="255" text-anchor="end" font-family="system-ui" font-size="14" fill="#64748b">2M+</text>
  <text x="70" y="355" text-anchor="end" font-family="system-ui" font-size="14" fill="#64748b">1M+</text>

  <!-- Bars -->
  <!-- 2020 -->
  <rect x="140" y="380" width="70" height="70" rx="8" fill="url(#barG)" filter="url(#shadow2)" />
  <text x="175" y="480" font-family="system-ui" font-size="16" font-weight="bold" fill="#475569" text-anchor="middle">2020</text>
  
  <!-- 2021 -->
  <rect x="260" y="320" width="70" height="130" rx="8" fill="url(#barG)" filter="url(#shadow2)" />
  <text x="295" y="480" font-family="system-ui" font-size="16" font-weight="bold" fill="#475569" text-anchor="middle">2021</text>
  
  <!-- 2022 -->
  <rect x="380" y="260" width="70" height="190" rx="8" fill="url(#barG)" filter="url(#shadow2)" />
  <text x="415" y="480" font-family="system-ui" font-size="16" font-weight="bold" fill="#475569" text-anchor="middle">2022</text>
  
  <!-- 2023 -->
  <rect x="500" y="180" width="70" height="270" rx="8" fill="url(#barG)" filter="url(#shadow2)" />
  <text x="535" y="480" font-family="system-ui" font-size="16" font-weight="bold" fill="#475569" text-anchor="middle">2023</text>
  
  <!-- 2024 -->
  <rect x="620" y="110" width="70" height="340" rx="8" fill="url(#barG)" filter="url(#shadow2)" />
  <text x="655" y="480" font-family="system-ui" font-size="16" font-weight="bold" fill="#475569" text-anchor="middle">2024</text>
  
  <!-- Badges hanging around -->
  <rect x="610" y="60" width="90" height="30" rx="15" fill="#ef4444" filter="url(#shadow2)" />
  <text x="655" y="80" font-family="system-ui" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">₹21K Cr Lost</text>

</svg>
`;

async function main() {
    try {
        await sharp(Buffer.from(phoneScamSvg))
            .png()
            .toFile(path.join(outDir, 'phone-scam-shield.png'));
        console.log('Created phone-scam-shield.png');

        await sharp(Buffer.from(statsSvg))
            .png()
            .toFile(path.join(outDir, 'scam-statistics-india.png'));
        console.log('Created scam-statistics-india.png');

    } catch (err) {
        console.error('Error:', err);
    }
}

main();