"use client";

import dynamic from "next/dynamic";

const LowestTrustSlider = dynamic(
    () => import("@/components/LowestTrustSlider"),
    { ssr: false }
);

export default function LowestTrustSliderClient() {
    return <LowestTrustSlider />;
}
