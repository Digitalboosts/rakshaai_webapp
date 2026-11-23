"use client";
import dynamic from 'next/dynamic';

const EvidenceGalleryDemo = dynamic(() => import('../../../components/EvidenceGalleryDemo'), { ssr: false });

// Sample data based on your API response
const sampleScamReports = [
  {
    "id": 16,
    "submission_type": "phone",
    "phone_number": "1234567890",
    "website_url": "https://www.zomato.com",
    "name": "Avnish",
    "rating": 5,
    "review": "Good",
    "attachment": "https://expedblobstorage.blob.core.windows.net/images/SpeedyChat_85901b19-fd2c-4e95-a6a5-97c53997e0df.pdf?se=2140-02-02T10%3A25%3A50Z&sp=r&sv=2025-11-05&sr=b&sig=vZN9Fww4iIBlCTeRGYUy0v%2BoNLImonfmBSm2sYTMHiE%3D",
    "status": "pending",
    "created_at": "2026-01-03T19:25:50.915206Z",
    "updated_at": "2026-01-03T19:25:50.915251Z",
    "is_resolved": false,
    "resolution_details": null,
    "resolved_at": null,
    "domain": "zomato.com"
  },
  {
    "id": 15,
    "submission_type": "phone",
    "phone_number": "12111111111111",
    "website_url": "https://www.zomato.com/patna/delivery",
    "name": "ghhgh",
    "rating": 3,
    "review": "dasf asdf adf asdd asdfsad",
    "attachment": "https://expedblobstorage.blob.core.windows.net/images/SpeedyChat_4e47da86-f48a-4d4-97d8-8c1222d598dc.pdf?se=2140-02-02T08%3A01%3A10Z&sp=r&sv=2025-11-05&sr=b&sig=Ao1ggYTnqlBJonW9%2Bfejvp8KeeX%2BJV91iMTD8LDmCrM%3D",
    "status": "pending",
    "created_at": "2026-01-03T17:01:10.761682Z",
    "updated_at": "2026-01-03T17:01:10.761722Z",
    "is_resolved": false,
    "resolution_details": null,
    "resolved_at": null,
    "domain": "zomato.com"
  }
];

export default function EvidenceTestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Evidence Gallery Test
        </h1>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
          <EvidenceGalleryDemo scamReports={sampleScamReports} />
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            How to use in your components:
          </h2>
          <pre className="text-sm bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto">
            {`import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import EvidenceGallery to prevent SSR issues with PDF.js
const EvidenceGallery = dynamic(() => import('@/components/EvidenceGallery'), {
    ssr: false,
    loading: () => (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
    )
});

function YourComponent({ apiResponse }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  
  // Transform API data to evidence items
  const evidenceItems = apiResponse.related_scam_reports.map(report => ({
    id: report.id.toString(),
    url: report.attachment,
    type: 'pdf', // or detect from URL/mime type
    name: \`Evidence from \${report.name} - \${report.submission_type}\`,
    reportId: report.id,
    reporterName: report.name
  }));
  
  return (
    <>
      <button onClick={() => setIsGalleryOpen(true)}>
        View Evidence ({evidenceItems.length})
      </button>
      
      <EvidenceGallery
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        items={evidenceItems}
        initialIndex={0}
      />
    </>
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}