import OpenGraphImage from './opengraph-image';

export const runtime = 'edge';
export const alt = 'RakshaAI scam checker for websites, UPI IDs, and phone numbers in India';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return OpenGraphImage();
}
