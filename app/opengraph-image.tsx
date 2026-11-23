import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'RakshaAI  Free scam checker for India. Check websites, UPI IDs, and phone numbers instantly.';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0f0c29 0%, #1a1040 50%, #0d1b3e 100%)',
          padding: 64,
        }}
      >
        {/* Top bar  logo + badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            {/* Logo block */}
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 16,
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ fontSize: 38, color: '#ffffff', fontWeight: 900 }}>R</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#ffffff' }}>RakshaAI</div>
              <div style={{ fontSize: 16, color: '#a5b4fc', fontWeight: 500 }}>rakshaai.co</div>
            </div>
          </div>
          {/* DPIIT badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              borderRadius: 100,
              background: 'rgba(99,102,241,0.15)',
            }}
          >
            <div style={{ fontSize: 15, color: '#c7d2fe', fontWeight: 600 }}>IN · DPIIT Recognised Startup</div>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 900, color: '#ffffff', lineHeight: 1.05 }}>
            India's Free Scam Protection Platform
          </div>
          <div style={{ fontSize: 26, color: '#94a3b8', lineHeight: 1.4, fontWeight: 400 }}>
            Check any website, UPI ID, or phone number for fraud instantly.
          </div>
        </div>

        {/* Bottom tools row */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {[
            { label: 'Website Safety Check', bg: '#312e81', text: '#a5b4fc' },
            { label: 'UPI Fraud Checker', bg: '#1e1b4b', text: '#c4b5fd' },
            { label: 'Phone Scam Checker', bg: '#0c1a3a', text: '#93c5fd' },
          ].map((tool) => (
            <div
              key={tool.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '14px 24px',
                borderRadius: 14,
                background: tool.bg,
                flex: 1,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 700, color: tool.text }}>{tool.label}</div>
            </div>
          ))}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '14px 28px',
              borderRadius: 14,
              background: 'rgba(99,102,241,0.2)',
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 900, color: '#6ee7b7' }}>FREE</div>
            <div style={{ fontSize: 14, color: '#6ee7b7', fontWeight: 600 }}>No login needed</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
