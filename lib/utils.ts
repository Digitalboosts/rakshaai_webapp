import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function getDaysAgo(days: number): string {
    if (days < 30) return `${days} days ago`;
    if (days < 365) return `${Math.floor(days / 30)} months ago`;
    return `${Math.round(days / 365.25)} years ago`;
}

export function getTrustLevel(score: number): {
    label: string;
    color: string;
    bgColor: string;
    borderColor: string;
} {
    if (score >= 8) {
        return {
            label: "Highly Trusted",
            color: "text-green-600 dark:text-green-400",
            bgColor: "bg-green-50 dark:bg-green-950/30",
            borderColor: "border-green-200 dark:border-green-800",
        };
    }
    if (score >= 6) {
        return {
            label: "Trusted",
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-50 dark:bg-blue-950/30",
            borderColor: "border-blue-200 dark:border-blue-800",
        };
    }
    if (score >= 4) {
        return {
            label: "Moderate Risk",
            color: "text-yellow-600 dark:text-yellow-400",
            bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
            borderColor: "border-yellow-200 dark:border-yellow-800",
        };
    }
    return {
        label: "High Risk - Potential Scam",
        color: "text-red-600 dark:text-red-400",
        bgColor: "bg-red-50 dark:bg-red-950/30",
        borderColor: "border-red-200 dark:border-red-800",
    };
}

export function saveToHistory(url: string, score: number) {
    if (typeof window === "undefined") return;

    const history = JSON.parse(localStorage.getItem("scam-detector-history") || "[]");
    const newEntry = {
        url,
        score,
        timestamp: Date.now(),
    };

    const updatedHistory = [newEntry, ...history.filter((item: any) => item.url !== url)].slice(0, 10);
    localStorage.setItem("scam-detector-history", JSON.stringify(updatedHistory));
}

export function getHistory(): Array<{ url: string; score: number; timestamp: number }> {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("scam-detector-history") || "[]");
}

export function printWithWatermark(filename?: string) {
    if (typeof window === "undefined") return;

    // Create watermark element
    const watermark = document.createElement('div');
    watermark.id = 'print-watermark';
    watermark.textContent = 'RakshaAI';
    watermark.style.cssText = `
        position: fixed !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) rotate(-45deg) !important;
        font-size: 84px !important;
        font-weight: 900 !important;
        color: rgba(128, 128, 128, 0.08) !important;
        text-shadow: 0 0 1px rgba(128, 128, 128, 0.02), 0 0 2px rgba(128, 128, 128, 0.01), 1px 1px 0 rgba(128, 128, 128, 0.01), -1px -1px 0 rgba(128, 128, 128, 0.01) !important;
        -webkit-text-stroke: 0.5px rgba(128, 128, 128, 0.03) !important;
        z-index: 9999 !important;
        pointer-events: none !important;
        font-family: Inter, system-ui, -apple-system, sans-serif !important;
        white-space: nowrap !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        display: none !important;
        letter-spacing: 2px !important;
    `;
    // Add print-specific styles with multiple fallback approaches
    const printStyle = document.createElement('style');
    printStyle.id = 'print-watermark-style';
    printStyle.textContent = `
        @media print {
            #print-watermark {
                display: block !important;
            }
            /* Reduce page margins */
    @page {
      margin: 14mm 12mm;
    }
      body {
      padding: 0 !important;
      margin: 0 !important;
      font-size: 11px !important;
      line-height: 1.35 !important;
    }
      /* Header container */
    .print-header,
    .glass {
      padding: 10px !important;
      margin-bottom: 8px !important;
    }
       /* Main title */
    h1 {
      font-size: 18px !important;
      margin-bottom: 6px !important;
      line-height: 1.2 !important;
    }

    /* Disclaimer */
    .print-disclaimer {
      font-size: 9px !important;
      padding: 6px 8px !important;
      margin-bottom: 6px !important;
      line-height: 1.3 !important;
    }
      /* Analyzing URL */
    .print-analyzing {
      font-size: 10px !important;
      margin-bottom: 4px !important;
    }

    /* Summary section */
    .print-summary {
      font-size: 10.5px !important;
      line-height: 1.4 !important;
      margin-top: 4px !important;
    }
      /* Reduce spacing everywhere */
    p {
      margin: 4px 0 !important;
    }

    section,
    article,
    .space-y-6 > * {
      margin-top: 6px !important;
      margin-bottom: 6px !important;
    }
      /* Keep watermark */
    #print-watermark {
      display: block !important;
    }
            /* Additional body watermark as fallback */
            body::before {
                content: "RakshaAI" !important;
                position: fixed !important;
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%, -50%) rotate(-45deg) !important;
                font-size: 84px !important;
                font-weight: 900 !important;
                color: rgba(128, 128, 128, 0.08) !important;
                z-index: 9998 !important;
                pointer-events: none !important;
                font-family: Inter, system-ui, -apple-system, sans-serif !important;
                white-space: nowrap !important;
                letter-spacing: 2px !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
        }
    `;
    document.head.appendChild(printStyle);
    document.body.appendChild(watermark);

    // Set document title for filename if provided
    const prevTitle = document.title;
    if (filename) {
        document.title = filename;
    }

    setTimeout(() => {
        window.print();
        setTimeout(() => {
            document.title = prevTitle;
            // Clean up watermark and style
            const watermarkEl = document.getElementById('print-watermark');
            const styleEl = document.getElementById('print-watermark-style');
            if (watermarkEl) watermarkEl.remove();
            if (styleEl) styleEl.remove();
        }, 1000);
    }, 100);
}

/**
 * Mask phone number for privacy
 * Shows first 3 and last 2 digits, masks the middle digits
 */
export function maskPhoneNumber(phoneNumber: string): string {
    if (!phoneNumber || typeof phoneNumber !== 'string') {
        return phoneNumber;
    }

    // Remove any non-digit characters
    const digits = phoneNumber.replace(/\D/g, '');

    if (digits.length < 5) {
        // If too short, mask all but the first digit
        return digits.charAt(0) + '*'.repeat(digits.length - 1);
    }

    if (digits.length <= 7) {
        // For shorter numbers, show first 2 and last 2
        return digits.substring(0, 2) + '*'.repeat(digits.length - 4) + digits.substring(digits.length - 2);
    }

    // For longer numbers (like 10 digit), show first 3 and last 2
    return digits.substring(0, 3) + '*'.repeat(digits.length - 5) + digits.substring(digits.length - 2);
}
