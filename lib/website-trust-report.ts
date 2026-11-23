import type { WebsiteTrustLevel } from "@/lib/seo/report-indexability";

export function timeAgo(dateString?: string): string {
  if (!dateString) return "Not available";
  const diff = Date.now() - new Date(dateString).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  if (years > 0) return `${years} ${years === 1 ? "year" : "years"} ago`;
  if (months > 0) return `${months} ${months === 1 ? "month" : "months"} ago`;
  if (days > 0) return `${days} ${days === 1 ? "day" : "days"} ago`;
  if (hours > 0) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
}

export function getVerdictConfig(trustLevel: WebsiteTrustLevel | null) {
  if (!trustLevel) {
    return {
      verdict: "Analysis Incomplete",
      verdictSub: "We could not fully assess this website",
      color: "#9ca3af",
      colorLight: "#f3f4f6",
      colorMid: "#d1d5db",
      scoreText: "text-gray-700 dark:text-gray-300",
      barColor: "bg-gray-400",
    };
  }
  if (trustLevel.percent >= 80) {
    return {
      verdict: "Likely Safe",
      verdictSub: "This website appears trustworthy based on our analysis",
      color: "#10b981",
      colorLight: "#d1fae5",
      colorMid: "#6ee7b7",
      scoreText: "text-emerald-600 dark:text-emerald-400",
      barColor: "bg-emerald-500",
    };
  }
  if (trustLevel.percent >= 50) {
    return {
      verdict: "Use With Caution",
      verdictSub: "Some risk signals detected  verify before transacting",
      color: "#f59e0b",
      colorLight: "#fef3c7",
      colorMid: "#fcd34d",
      scoreText: "text-amber-600 dark:text-amber-400",
      barColor: "bg-amber-500",
    };
  }
  return {
    verdict: "High Risk Website",
    verdictSub: "Multiple danger signals found  avoid sharing data or payments",
    color: "#ef4444",
    colorLight: "#fee2e2",
    colorMid: "#fca5a5",
    scoreText: "text-red-600 dark:text-red-400",
    barColor: "bg-red-500",
  };
}

export function getDomainAge(data: any): string {
  const created = data?.domain_info?.created;
  if (created) {
    const createdDate = new Date(created);
    if (!isNaN(createdDate.getTime())) {
      const now = new Date();
      let yrs = now.getFullYear() - createdDate.getFullYear();
      if (now.getMonth() < createdDate.getMonth() || (now.getMonth() === createdDate.getMonth() && now.getDate() < createdDate.getDate())) {
        yrs--;
      }
      if (yrs > 0) return `${yrs}+ years`;
      const days = Math.floor((now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24));
      return `${days} days`;
    }
  }
  const days = data?.domain_info?.domain_age_days;
  if (typeof days === "number") {
    const yrs = Math.round(days / 365.25);
    if (yrs > 0) return `${yrs}+ years`;
    return `${days} days`;
  }
  const pubYear = data?.website_publishing_date?.publish_year;
  if (pubYear) {
    const yrs = new Date().getFullYear() - pubYear;
    if (yrs > 0) return `${yrs}+ years`;
    return "< 1 year";
  }
  return "Unknown";
}

export function getSSLStatus(data: any): { label: string; ok: boolean } {
  const ssl = data?.ssl_info;
  if (!ssl) return { label: "Unknown", ok: false };
  if (ssl.valid) return { label: "Valid & Secure", ok: true };
  return { label: "Invalid", ok: false };
}

export function getRiskSignalCount(data: any): number {
  let count = 0;
  const mw = data?.malicious_website;
  if (mw?.analysis_stats?.malicious > 0) count += mw.analysis_stats.malicious;
  if (mw?.analysis_stats?.suspicious > 0) count += mw.analysis_stats.suspicious;
  if (Array.isArray(data?.is_malware?.matches) && data.is_malware.matches.length > 0) count += data.is_malware.matches.length;
  const negReviews = Number(data?.website_reviews?.total_negative_sentiment_reviews ?? 0);
  if (negReviews > 0) count += negReviews;
  return count;
}

export function getScoreBreakdownItems(data: any) {
  const items: { label: string; value: number; status: string; detail: string }[] = [];

  // Domain age
  const ageDays = data?.domain_info?.domain_age_days;
  if (typeof ageDays === "number") {
    const score = ageDays > 365 * 3 ? 95 : ageDays > 365 ? 70 : ageDays > 180 ? 50 : 25;
    items.push({
      label: "Domain Age",
      value: score,
      status: score >= 70 ? "Good" : score >= 50 ? "Fair" : "Risky",
      detail: ageDays > 365 ? `Established domain (${Math.round(ageDays / 365.25)}+ years)` : `Relatively new domain (${ageDays} days)`,
    });
  }

  // SSL
  const ssl = data?.ssl_info;
  if (ssl) {
    const score = ssl.valid ? (ssl.self_signed ? 60 : 95) : 10;
    items.push({
      label: "SSL Certificate",
      value: score,
      status: ssl.valid ? (ssl.self_signed ? "Self-Signed" : "Valid") : "Invalid",
      detail: ssl.valid ? `Secured with ${ssl.issuer?.organizationName || "trusted CA"}` : "No valid SSL certificate found",
    });
  }

  // Malware blacklist
  const mw = data?.malicious_website;
  if (mw?.success) {
    const mal = mw.analysis_stats?.malicious || 0;
    const sus = mw.analysis_stats?.suspicious || 0;
    const score = mal > 0 ? 10 : sus > 0 ? 40 : 95;
    items.push({
      label: "Malware Blacklist",
      value: score,
      status: mal > 0 ? "Flagged" : sus > 0 ? "Suspicious" : "Clean",
      detail: mal > 0 ? `${mal} engine(s) flagged as malicious` : sus > 0 ? `${sus} engine(s) flagged as suspicious` : "No malware detected across security engines",
    });
  }

  // Phishing / Safe Browsing
  const gsb = data?.is_malware;
  if (gsb) {
    const hasMatches = Array.isArray(gsb.matches) && gsb.matches.length > 0;
    items.push({
      label: "Phishing Signals",
      value: hasMatches ? 5 : 95,
      status: hasMatches ? "Dangerous" : "Clean",
      detail: hasMatches ? `Google Safe Browsing flagged ${gsb.matches.length} threat(s)` : "No phishing threats found by Google Safe Browsing",
    });
  }

  // User reports
  const reports = data?.related_scam_reports;
  if (Array.isArray(reports)) {
    const count = reports.length;
    const score = count === 0 ? 90 : count <= 2 ? 50 : 15;
    items.push({
      label: "User Reports",
      value: score,
      status: count === 0 ? "None" : `${count} report(s)`,
      detail: count === 0 ? "No community scam reports filed" : `${count} scam report(s) from the community`,
    });
  }

  // Payment safety (from action_items)
  const ai = data?.action_items;
  if (ai?.payment_advice) {
    const riskLevel = (ai.risk_level || "").toLowerCase();
    const isLow = riskLevel.includes("low");
    const isMedium = riskLevel.includes("medium");
    const score = isLow ? 90 : isMedium ? 55 : 20;
    items.push({
      label: "Payment Safety",
      value: score,
      status: isLow ? "Safe" : isMedium ? "Caution" : "Risky",
      detail: ai.payment_advice,
    });
  }

  // Contact transparency
  const fb = data?.fb_page_info;
  const regBiz = data?.registered_business;
  if (fb || regBiz) {
    const hasFb = fb && Object.keys(fb).length > 0;
    const hasReg = regBiz && Object.keys(regBiz).length > 0;
    const score = hasReg ? 90 : hasFb ? 70 : 30;
    items.push({
      label: "Contact Transparency",
      value: score,
      status: hasReg ? "Verified" : hasFb ? "Partial" : "Limited",
      detail: hasReg ? "Business registration information available" : hasFb ? "Facebook business page found" : "Limited contact information available",
    });
  }

  return items;
}
