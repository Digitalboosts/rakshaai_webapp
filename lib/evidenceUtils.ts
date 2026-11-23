// Utility functions for Evidence Gallery

export interface EvidenceItem {
    id: string;
    url: string;
    type: 'pdf' | 'image';
    name: string;
    reportId?: number;
    reporterName?: string;
}

/**
 * Detect file type from URL
 */
export function detectFileType(url: string): 'pdf' | 'image' {
    const urlLower = url.toLowerCase();

    // Check for PDF indicators
    if (urlLower.includes('.pdf') || urlLower.includes('pdf')) {
        return 'pdf';
    }

    // Check for image extensions
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];
    if (imageExtensions.some(ext => urlLower.includes(ext))) {
        return 'image';
    }

    // Default to PDF for unknown types (can be changed based on your use case)
    return 'pdf';
}

/**
 * Transform API scam reports to evidence items
 */
export function transformScamReportsToEvidence(scamReports: any[]): EvidenceItem[] {
    return scamReports
        .filter(report => report.attachment) // Only include reports with attachments
        .map(report => ({
            id: report.id.toString(),
            url: report.attachment,
            type: detectFileType(report.attachment),
            name: `Evidence from ${report.name} - ${report.submission_type}`,
            reportId: report.id,
            reporterName: report.name
        }));
}

/**
 * Transform any generic attachment list to evidence items
 */
export function transformAttachmentsToEvidence(
    attachments: Array<{
        id: string | number;
        url: string;
        name?: string;
        type?: string;
    }>
): EvidenceItem[] {
    return attachments.map((attachment, index) => ({
        id: attachment.id.toString(),
        url: attachment.url,
        type: attachment.type as 'pdf' | 'image' || detectFileType(attachment.url),
        name: attachment.name || `Evidence ${index + 1}`,
    }));
}

/**
 * Validate evidence item
 */
export function isValidEvidenceItem(item: any): item is EvidenceItem {
    return (
        item &&
        typeof item.id === 'string' &&
        typeof item.url === 'string' &&
        (item.type === 'pdf' || item.type === 'image') &&
        typeof item.name === 'string'
    );
}

/**
 * Filter valid evidence items
 */
export function filterValidEvidence(items: any[]): EvidenceItem[] {
    return items.filter(isValidEvidenceItem);
}