import Image from "next/image";
import { AlertTriangle } from "lucide-react";

export default function SafetyTrustBannerSection() {
    return (
        <section className="relative py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* ── Safety Trust Banner ────────────────────────────────── */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 dark:from-gray-950 dark:via-purple-950 dark:to-gray-950 p-8 sm:p-10 shadow-2xl">
                    {/* Grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]" />
                    {/* Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-purple-600/20 rounded-full blur-3xl" />

                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                                    <AlertTriangle className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                                    Real Threat, Real Protection
                                </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight">
                                Every 2 Minutes, an Indian Falls Victim to Online Fraud
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm mb-6">
                                India reported 15 lakh+ cybercrime complaints in 2025 alone through the National
                                Cybercrime Reporting Portal (I4C, Ministry of Home Affairs). Most victims never
                                recover their money. One free 5-second check on RakshaAI could prevent this from
                                happening to you or your family.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "✅ Secure login",
                                    "✅ Hindi & English",
                                    "✅ Works on mobile",
                                    "✅ 100% private",
                                ].map((chip) => (
                                    <span key={chip} className="px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/10">
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right: dual images */}
                        <div className="relative flex gap-4 justify-center items-end">
                            <div className="relative flex-1 max-w-[192px]">
                                <Image
                                    src="/image/upi-payment-verification-security-check-rakshaai.jpg"
                                    alt="UPI fraud detection in action  RakshaAI scam checker India"
                                    width={192}
                                    height={240}
                                    className="rounded-2xl object-cover shadow-xl w-full h-48 sm:h-60"
                                />
                                <div className="absolute -bottom-2 -right-2 px-2 py-1 rounded-lg bg-orange-500 text-white text-[10px] font-bold shadow-md">
                                    UPI Verified ✓
                                </div>
                            </div>
                            <div className="relative flex-1 max-w-[192px] mb-6">
                                <Image
                                    src="/image/indian-woman-checking-suspicious-scam-call-rakshaai.jpg"
                                    alt="Indian woman identifying scam phone call using RakshaAI"
                                    width={192}
                                    height={240}
                                    className="rounded-2xl object-cover shadow-xl w-full h-48 sm:h-60"
                                />
                                <div className="absolute -bottom-2 -left-2 px-2 py-1 rounded-lg bg-green-500 text-white text-[10px] font-bold shadow-md">
                                    Safe Call ✓
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
