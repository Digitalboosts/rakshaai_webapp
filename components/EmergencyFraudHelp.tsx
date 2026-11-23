import Link from 'next/link';

interface EmergencyFraudHelpProps {
  heading?: string;
  compact?: boolean;
}

export default function EmergencyFraudHelp({
  heading = 'Already Been Scammed? Act Now.',
  compact = false,
}: EmergencyFraudHelpProps) {
  if (compact) {
    return (
      <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40 rounded-xl p-4">
        <div className="flex gap-3 items-start">
          <span className="text-red-600 text-lg flex-shrink-0">🚨</span>
          <div>
            <p className="font-semibold text-red-800 dark:text-red-300 text-sm mb-1">{heading}</p>
            <ul className="space-y-0.5 text-sm text-red-700 dark:text-red-400">
              <li>
                <strong>Call 1930</strong>  National Cybercrime Helpline (24/7, free)
              </li>
              <li>
                File at{' '}
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  cybercrime.gov.in
                </a>
              </li>
              <li>
                <strong>Call your bank immediately</strong> to freeze &amp; dispute
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40 rounded-2xl p-6 md:p-8">
      <div className="flex gap-4 items-start mb-6">
        <span className="text-red-600 text-2xl flex-shrink-0">🚨</span>
        <h2 className="text-xl font-bold text-red-800 dark:text-red-300">{heading}</h2>
      </div>

      <p className="text-sm text-red-700 dark:text-red-400 mb-6 leading-relaxed">
        Time is critical. Report within 24 hours for the best chance of recovering funds. Follow
        these steps immediately:
      </p>

      <ol className="space-y-4 mb-6">
        {[
          {
            step: '1',
            title: 'Call 1930 now',
            body: 'The National Cybercrime Helpline is free, available 24/7, and can initiate a bank freeze to stop further losses. This is your most time-critical action.',
          },
          {
            step: '2',
            title: 'Call your bank or UPI app',
            body: 'Request an immediate transaction block or chargeback. Report the fraudulent transaction reference number. Most banks have a 24/7 fraud line.',
          },
          {
            step: '3',
            title: 'File a complaint at cybercrime.gov.in',
            body: "India's National Cybercrime Reporting Portal. File online  you do not need to visit a police station to start the complaint.",
          },
          {
            step: '4',
            title: 'Preserve all evidence',
            body: 'Take screenshots of the conversation, payment confirmation, website, or UPI ID before the scammer can delete them. Note the date and time.',
          },
          {
            step: '5',
            title: 'Report on RakshaAI',
            body: 'Report the phone number, UPI ID, or website on RakshaAI so other Indians are warned before transacting with the same scammer.',
          },
        ].map((item) => (
          <li key={item.step} className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              {item.step}
            </div>
            <div>
              <div className="font-semibold text-red-800 dark:text-red-300 text-sm mb-0.5">
                {item.title}
              </div>
              <p className="text-xs text-red-700 dark:text-red-400 leading-relaxed">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="flex flex-wrap gap-3">
        <a
          href="tel:1930"
          className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors text-sm"
        >
          <span>📞</span> Call 1930
        </a>
        <a
          href="https://cybercrime.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 text-red-700 dark:text-red-400 font-semibold px-5 py-2.5 rounded-lg border border-red-300 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors text-sm"
        >
          File at cybercrime.gov.in
        </a>
        <Link
          href="/report-correction"
          className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-medium px-5 py-2.5 rounded-lg border border-red-200 dark:border-red-800/40 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors text-sm"
        >
          Report Correction
        </Link>
      </div>
    </div>
  );
}
