"use client";

import dynamic from "next/dynamic";

const TrendingWebsitesSection = dynamic(
    () => import("@/components/TrendingWebsitesSection"),
    { ssr: false }
);

export default function TrendingWebsitesSectionClient() {
    return <TrendingWebsitesSection />;
}
