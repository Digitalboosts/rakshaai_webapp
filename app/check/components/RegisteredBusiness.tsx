'use client';

import { useState } from 'react';

// ─── Icon helpers ─────────────────────────────────────────────────────────────

const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
);

const PendingIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
);

const ShieldIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 1zm0 2.18l7 3.12V11c0 4.52-3.02 8.72-7 9.93-3.98-1.21-7-5.41-7-9.93V6.3l7-3.12z" />
    </svg>
);

const CopyIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────

export interface RegisteredBusinessData {
    business_user_id?: string;
    has_active_subscription?: boolean;
    business_info?: {
        business_name?: string;
        product_name?: string;
        website?: string;
        phone?: string;
        email?: string;
        member_since?: string;
        business_info_verified?: boolean;
    };
    verification_summary?: {
        gst_verified?: boolean;
        pan_verified?: boolean;
        aadhaar_verified?: boolean;
        mca_verified?: boolean;
        bank_account_verified?: boolean;
    };
    kyc_details?: {
        gst?: { verified?: boolean; gstin?: string };
        pan?: { verified?: boolean; pan_number?: string };
        aadhaar?: { verified?: boolean };
        mca?: { verified?: boolean; cin_number?: string };
        bank_account?: { verified?: boolean };
    };
    documents?: {
        coi_url?: string | null;
        pan_url?: string | null;
        aoa_url?: string | null;
        moa_url?: string | null;
    };
}

// ─── Colour maps ──────────────────────────────────────────────────────────────

const colorMap = {
    light: {
        purple: { bg: '#faf5ff', icon: '#7c3aed' },
        orange: { bg: '#fff7ed', icon: '#ea580c' },
        green:  { bg: '#f0fdf4', icon: '#16a34a' },
        blue:   { bg: '#eff6ff', icon: '#2563eb' },
        pink:   { bg: '#fdf2f8', icon: '#db2777' },
    },
    dark: {
        purple: { bg: '#1e1b4b', icon: '#a78bfa' },
        orange: { bg: '#1c1108', icon: '#fb923c' },
        green:  { bg: '#052e16', icon: '#4ade80' },
        blue:   { bg: '#0c1a35', icon: '#60a5fa' },
        pink:   { bg: '#1a0d1a', icon: '#f472b6' },
    },
};

type ColorKey = keyof typeof colorMap.light;

// ─── KYC check row definitions ────────────────────────────────────────────────

const kycDefs: Array<{ key: keyof NonNullable<RegisteredBusinessData['verification_summary']>; name: string; source: string; color: ColorKey; icon: React.ReactNode }> = [
    {
        key: 'gst_verified',
        name: 'GST Registration',
        source: 'Cross-checked via GSTN Portal',
        color: 'purple',
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15v2h8v-2H8zm0-4v2h8v-2H8z" />
            </svg>
        ),
    },
    {
        key: 'aadhaar_verified',
        name: 'Aadhaar KYC',
        source: 'Cross-checked via UIDAI · eKYC',
        color: 'orange',
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
        ),
    },
    {
        key: 'pan_verified',
        name: 'PAN Verification',
        source: 'Cross-checked via NSDL · Income Tax Dept',
        color: 'green',
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
            </svg>
        ),
    },
    {
        key: 'bank_account_verified',
        name: 'Bank Account',
        source: 'Cross-checked via RBI regulated network',
        color: 'blue',
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zm-7 9h18v2H3v-2zm14-9v7h3v-7h-3zM12 1L2 6v2h19V6L12 1z" />
            </svg>
        ),
    },
    {
        key: 'mca_verified',
        name: 'MCA / Documents',
        source: 'Cross-checked via MCA21 Portal',
        color: 'pink',
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7L12 2z" />
            </svg>
        ),
    },
];

const govSources = [
    { name: 'MCA21',       auth: 'Ministry of Corporate Affairs', statusKey: 'mca_verified'          as keyof NonNullable<RegisteredBusinessData['verification_summary']> },
    { name: 'GSTN',        auth: 'GST Council of India',           statusKey: 'gst_verified'          as keyof NonNullable<RegisteredBusinessData['verification_summary']> },
    { name: 'UIDAI',       auth: 'Aadhaar Authority of India',     statusKey: 'aadhaar_verified'      as keyof NonNullable<RegisteredBusinessData['verification_summary']> },
    { name: 'NSDL',        auth: 'Income Tax Dept · PAN',          statusKey: 'pan_verified'          as keyof NonNullable<RegisteredBusinessData['verification_summary']> },
    { name: 'RBI Network', auth: 'Reserve Bank of India',          statusKey: 'bank_account_verified' as keyof NonNullable<RegisteredBusinessData['verification_summary']> },
    { name: 'RakshaAI',    auth: 'Trust Engine · Fraud Check',     statusKey: null, highlight: true },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatMemberSince(raw?: string) {
    if (!raw) return '';
    try {
        return new Date(raw).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
        return raw;
    }
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function RegisteredBusiness({ data }: { data?: RegisteredBusinessData }) {
    const [dark, setDark] = useState(false);
    const [copied, setCopied] = useState(false);


    const biz      = data?.business_info     ?? {};
    const verify   = data?.verification_summary ?? {};
    const kyc      = data?.kyc_details ?? {};
    const docs     = data?.documents ?? {};
    const bizId    = data?.business_user_id  ?? '';

    const verifiedCount = Object.values(verify).filter(Boolean).length;
    const totalCount    = Object.keys(verify).length;

    const profileUrl = typeof window !== 'undefined'
        ? `${window.location.origin}/business-profile/${bizId}`
        : `/business-profile/${bizId}`;

    const handleCopy = () => {
        navigator.clipboard?.writeText(profileUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const d      = dark;
    const colors = d ? colorMap.dark : colorMap.light;

    const s = {
        wrap: {
            fontFamily: "'Inter', sans-serif",
            maxWidth: '83%',
            margin: '0 auto',
            borderRadius: 20,
            overflow: 'hidden' as const,
            border: `1px solid ${d ? '#2d2b45' : '#ede8e0'}`,
            background: d ? '#0f0e1a' : '#faf8f5',
            transition: 'all 0.25s',
        },
        gradBar: {
            height: 4,
            background: 'linear-gradient(90deg,#7c3aed,#f97316,#ec4899)',
        },
        hero: {
            background: d ? '#1a1830' : '#fff',
            borderBottom: `1px solid ${d ? '#2d2b45' : '#ede8e0'}`,
            padding: '28px 28px 24px',
            transition: 'all 0.25s',
        },
        logoBox: {
            width: 52, height: 52,
            background: '#f97316',
            borderRadius: 14,
            display: 'flex', alignItems: 'center' as const, justifyContent: 'center' as const,
            flexShrink: 0 as const,
        },
        brandName: {
            fontSize: 11, fontWeight: 700, letterSpacing: '1.5px',
            textTransform: 'uppercase' as const, marginBottom: 2,
            color: d ? '#a78bfa' : '#7c3aed',
        },
        brandSub:    { fontSize: 11, color: d ? '#6b7280' : '#9ca3af' },
        verifiedPill: {
            display: 'flex', alignItems: 'center' as const, gap: 5,
            background: d ? '#052e16' : '#f0fdf4',
            border: `1px solid ${d ? '#166534' : '#86efac'}`,
            borderRadius: 20, padding: '5px 12px',
        },
        vDot: { width: 7, height: 7, borderRadius: '50%', background: '#22c55e' },
        vText: { fontSize: 11, fontWeight: 600, color: d ? '#4ade80' : '#15803d' },
        coLabel: {
            fontSize: 10, fontWeight: 600, letterSpacing: '2px',
            textTransform: 'uppercase' as const, marginBottom: 5,
            color: d ? '#4b5563' : '#9ca3af',
        },
        coName: {
            fontSize: 22, fontWeight: 800, lineHeight: 1.2, marginBottom: 3,
            color: d ? '#f1f0ff' : '#111827',
        },
        coMeta:  { fontSize: 12, color: d ? '#4b5563' : '#6b7280' },
        scoreChip: {
            display: 'flex', alignItems: 'center' as const, gap: 6,
            background: d ? '#1e1b4b' : '#faf5ff',
            border: `1px solid ${d ? '#3730a3' : '#ddd6fe'}`,
            borderRadius: 8, padding: '6px 12px',
            fontSize: 12, fontWeight: 600,
            color: d ? '#a78bfa' : '#5b21b6',
        },
        recordsChip: {
            display: 'flex', alignItems: 'center' as const, gap: 6,
            background: d ? '#1c1108' : '#fff7ed',
            border: `1px solid ${d ? '#92400e' : '#fed7aa'}`,
            borderRadius: 8, padding: '6px 12px',
            fontSize: 12, fontWeight: 600,
            color: d ? '#fb923c' : '#c2410c',
        },
        dbChip: {
            display: 'flex', alignItems: 'center' as const,
            background: d ? '#111827' : '#f8fafc',
            border: `1px solid ${d ? '#1f2937' : '#e2e8f0'}`,
            borderRadius: 8, padding: '6px 12px',
            fontSize: 11, fontWeight: 500,
            color: d ? '#4b5563' : '#64748b',
        },
        body: {
            padding: '24px 28px',
            background: d ? '#0f0e1a' : '#faf8f5',
            transition: 'all 0.25s',
        },
        sectionTitle: {
            fontSize: 10, fontWeight: 700, letterSpacing: '2px',
            textTransform: 'uppercase' as const, marginBottom: 12,
            display: 'flex', alignItems: 'center' as const, gap: 8,
            color: d ? '#374151' : '#9ca3af',
        },
        divider: { flex: 1, height: 1, background: d ? '#1f1d35' : '#ede8e0' },
        checksList: {
            borderRadius: 12, overflow: 'hidden' as const, marginBottom: 20,
            border: `1px solid ${d ? '#1f1d35' : '#ede8e0'}`,
        },
        checkRow: {
            display: 'flex', alignItems: 'center' as const,
            justifyContent: 'space-between' as const, padding: '13px 16px',
            background: d ? '#1a1830' : '#fff',
            transition: 'all 0.25s',
        },
        checkName:   { fontSize: 13, fontWeight: 600, color: d ? '#e5e3ff' : '#111827' },
        checkSource: { fontSize: 11, marginTop: 1, color: d ? '#374151' : '#9ca3af' },
        govSection: {
            borderRadius: 12, padding: 16, marginBottom: 20,
            background: d ? '#1a1830' : '#fff',
            border: `1px solid ${d ? '#1f1d35' : '#ede8e0'}`,
            transition: 'all 0.25s',
        },
        govHeaderText: { fontSize: 12, fontWeight: 700, color: d ? '#c4b5fd' : '#374151' },
        govHeaderSub:  { fontSize: 11, marginLeft: 'auto' as const, color: d ? '#374151' : '#9ca3af' },
        govTile: {
            borderRadius: 8, padding: '10px 10px 8px',
            border: `1px solid ${d ? '#1f1d35' : '#f3f4f6'}`,
            background: d ? '#0f0e1a' : '#faf8f5',
            display: 'flex', flexDirection: 'column' as const, gap: 4,
            transition: 'all 0.25s',
        },
        govTileHighlight: {
            borderRadius: 8, padding: '10px 10px 8px',
            border: `1px solid ${d ? '#3730a3' : '#ddd6fe'}`,
            background: d ? '#1e1b4b' : '#faf5ff',
            display: 'flex', flexDirection: 'column' as const, gap: 4,
        },
        govTileName:          { fontSize: 10, fontWeight: 700, letterSpacing: '0.3px', color: d ? '#c4b5fd' : '#374151' },
        govTileNameHighlight: { fontSize: 10, fontWeight: 700, letterSpacing: '0.3px', color: d ? '#a78bfa' : '#5b21b6' },
        govTileAuth:          { fontSize: 9, lineHeight: 1.3, color: d ? '#374151' : '#9ca3af' },
        sourceBanner: {
            borderRadius: 12, padding: '14px 16px', marginBottom: 20,
            display: 'flex', alignItems: 'center' as const, gap: 12,
            background: d ? '#1e1b4b' : '#faf5ff',
            border: `1px solid ${d ? '#3730a3' : '#ddd6fe'}`,
            transition: 'all 0.25s',
        },
        sourceBannerTitle: { fontSize: 12, fontWeight: 700, marginBottom: 2, color: d ? '#c4b5fd' : '#4c1d95' },
        sourceBannerDesc:  { fontSize: 10, lineHeight: 1.5, color: '#7c3aed', opacity: d ? 1 : 0.8 },
        liveBadge: {
            display: 'flex', alignItems: 'center' as const, gap: 4,
            background: d ? '#052e16' : '#fff',
            border: `1px solid ${d ? '#166534' : '#86efac'}`,
            borderRadius: 20, padding: '4px 10px', flexShrink: 0 as const,
        },
        liveDot: { width: 6, height: 6, borderRadius: '50%', background: '#22c55e' },
        liveTxt:  { fontSize: 10, fontWeight: 700, color: d ? '#4ade80' : '#15803d' },
        shareRow: {
            display: 'flex', alignItems: 'center' as const, justifyContent: 'space-between' as const,
            gap: 12, borderRadius: 12, padding: '14px 16px',
            background: d ? '#1a1830' : '#fff',
            border: `1px solid ${d ? '#1f1d35' : '#ede8e0'}`,
            transition: 'all 0.25s',
        },
        shareTitle: { fontSize: 13, fontWeight: 700, marginBottom: 3, color: d ? '#e5e3ff' : '#111827' },
        shareUrl:   { fontSize: 10, fontFamily: 'monospace', color: d ? '#374151' : '#9ca3af' },
        btnCopy: {
            display: 'flex', alignItems: 'center' as const, gap: 5,
            background: '#7c3aed', border: 'none', borderRadius: 8,
            padding: '8px 14px', fontSize: 11, fontWeight: 600,
            color: '#fff', cursor: 'pointer' as const, fontFamily: 'inherit',
        },
        btnReport: {
            display: 'flex', alignItems: 'center' as const, gap: 5,
            background: 'transparent',
            border: `1px solid ${d ? '#1f1d35' : '#ede8e0'}`,
            borderRadius: 8, padding: '8px 14px',
            fontSize: 11, fontWeight: 600,
            color: d ? '#4b5563' : '#6b7280',
            cursor: 'pointer' as const, fontFamily: 'inherit',
        },
        footer: {
            padding: '12px 28px',
            display: 'flex', alignItems: 'center' as const, justifyContent: 'space-between' as const, gap: 12,
            background: d ? '#1a1830' : '#fff',
            borderTop: `1px solid ${d ? '#1f1d35' : '#ede8e0'}`,
            transition: 'all 0.25s',
        },
        footerText:   { fontSize: 10, color: d ? '#374151' : '#9ca3af' },
        footerStrong: { color: d ? '#a78bfa' : '#7c3aed', fontWeight: 600 },
        footerId:     { fontSize: 10, fontFamily: 'monospace', color: d ? '#1f1d35' : '#d1d5db', letterSpacing: '0.5px' },
        toggleWrap: { display: 'flex', justifyContent: 'center' as const, gap: 8, marginBottom: 12 },
        kycDetailGrid: {
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 20,
        },
        kycDetailTile: {
            borderRadius: 10, padding: '12px 14px',
            background: d ? '#1a1830' : '#fff',
            border: `1px solid ${d ? '#1f1d35' : '#ede8e0'}`,
            transition: 'all 0.25s',
        },
        kycDetailLabel: { fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' as const, color: d ? '#4b5563' : '#9ca3af', marginBottom: 4 },
        kycDetailValue: { fontSize: 13, fontWeight: 700, color: d ? '#e5e3ff' : '#111827', wordBreak: 'break-all' as const },
        docTile: {
            display: 'flex', alignItems: 'center' as const, gap: 10,
            borderRadius: 10, padding: '12px 14px', marginBottom: 10,
            background: d ? '#1a1830' : '#fff',
            border: `1px solid ${d ? '#1f1d35' : '#ede8e0'}`,
            textDecoration: 'none' as const,
            transition: 'all 0.25s',
        },
        docIcon: {
            width: 32, height: 32, borderRadius: 8, flexShrink: 0,
            display: 'flex', alignItems: 'center' as const, justifyContent: 'center' as const,
            background: d ? '#1e1b4b' : '#faf5ff',
            color: d ? '#a78bfa' : '#7c3aed',
        },
        docLabel: { fontSize: 13, fontWeight: 600, color: d ? '#e5e3ff' : '#111827' },
        docSub: { fontSize: 11, color: d ? '#4b5563' : '#9ca3af', marginTop: 1 },
    };

    const toggleBtn = (active: boolean) => ({
        display: 'flex', alignItems: 'center' as const, gap: 6,
        border: active ? '1px solid #4c1d95' : `1px solid ${d ? '#2d2b45' : '#e2e8f0'}`,
        borderRadius: 20, padding: '6px 14px',
        fontSize: 12, fontWeight: 600, cursor: 'pointer' as const, fontFamily: 'inherit',
        background: active ? '#1e1b4b' : (d ? '#1a1830' : '#fff'),
        color:  active ? '#a78bfa' : (d ? '#6b7280' : '#374151'),
        transition: 'all 0.2s',
    });

    const statusStyle = (verified: boolean) => ({
        display: 'flex', alignItems: 'center' as const, gap: 5,
        color: verified ? (d ? '#4ade80' : '#16a34a') : (d ? '#fbbf24' : '#d97706'),
        fontSize: 12, fontWeight: 600,
    });

    const tileStatusStyle = (confirmed: boolean) => ({
        display: 'flex', alignItems: 'center' as const, gap: 5,
        color: confirmed ? (d ? '#4ade80' : '#16a34a') : (d ? '#fbbf24' : '#d97706'),
        fontSize: 10, fontWeight: 600, marginTop: 2,
    });

    return (
        <div className="mt-8">
            {/* Dark/Light toggle */}
            <div style={s.toggleWrap}>
                <button style={toggleBtn(!dark)} onClick={() => setDark(false)}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-12.37l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.41 0l1.06-1.06a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0zM7.05 18.36l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.41 0l1.06-1.06a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0z" />
                    </svg>
                    Light
                </button>
                <button style={toggleBtn(dark)} onClick={() => setDark(true)}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
                    </svg>
                    Dark
                </button>
            </div>

            <div style={s.wrap}>
                {/* Gradient top bar */}
                <div style={s.gradBar} />

                {/* ── Hero ──────────────────────────────────────────────────── */}
                <div style={s.hero}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 20 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={s.logoBox}>
                                <ShieldIcon size={26} />
                            </div>
                            <div>
                                <div style={s.brandName}>RakshaAI</div>
                                <div style={s.brandSub}>Trust Certificate</div>
                            </div>
                        </div>
                        <div style={s.verifiedPill}>
                            <div style={s.vDot} />
                            <span style={s.vText}>RakshaVerified</span>
                        </div>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                        <div style={s.coLabel}>Business</div>
                        <div style={s.coName}>{biz.business_name || 'Verified Business'}</div>
                        <div style={s.coMeta}>
                            {biz.website && <>{biz.website}&nbsp;·&nbsp;</>}
                            {biz.phone   && <>{biz.phone}&nbsp;·&nbsp;</>}
                            {biz.member_since && <>Member since {formatMemberSince(biz.member_since)}</>}
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                        <div style={s.scoreChip}>
                            <ShieldIcon size={14} />
                            <span>Trust Score · {verifiedCount}/{totalCount || 5} High</span>
                        </div>
                        <div style={s.recordsChip}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                            <span>Govt. Records Checked · Trusted</span>
                        </div>
                        <div style={s.dbChip}>
                            <span>MCA21 · GSTN · UIDAI · NSDL</span>
                        </div>
                    </div>
                </div>

                {/* ── Body ──────────────────────────────────────────────────── */}
                <div style={s.body}>


                    {/* KYC Checks (summary) */}
                    <div style={s.sectionTitle}>
                        KYC verification · {verifiedCount} of {totalCount || 5} passed
                        <div style={s.divider} />
                    </div>
                    <div style={s.checksList}>
                        {kycDefs.map((check, i) => {
                            const verified = !!verify[check.key];
                            return (
                                <div
                                    key={check.key}
                                    style={{
                                        ...s.checkRow,
                                        borderBottom: i < kycDefs.length - 1 ? `1px solid ${d ? '#1f1d35' : '#f3f4f6'}` : 'none',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <div style={{
                                            width: 32, height: 32, borderRadius: 8,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            background: colors[check.color].bg, flexShrink: 0,
                                        }}>
                                            <span style={{ color: colors[check.color].icon, display: 'flex' }}>
                                                {check.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <div style={s.checkName}>{check.name}</div>
                                            <div style={s.checkSource}>{check.source}</div>
                                        </div>
                                    </div>
                                    <div style={statusStyle(verified)}>
                                        {verified ? <CheckIcon /> : <PendingIcon />}
                                        <span>{verified ? 'Verified' : 'Pending'}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* KYC Details (full) */}
                    <div style={s.sectionTitle}>
                        KYC Details
                        <div style={s.divider} />
                    </div>
                    <div style={s.kycDetailGrid}>
                        {kyc.gst?.gstin && (
                            <div style={s.kycDetailTile}>
                                <div style={s.kycDetailLabel}>GSTIN</div>
                                <div style={s.kycDetailValue}>{kyc.gst.gstin}</div>
                            </div>
                        )}
                        {kyc.pan?.pan_number && (
                            <div style={s.kycDetailTile}>
                                <div style={s.kycDetailLabel}>PAN Number</div>
                                <div style={s.kycDetailValue}>{kyc.pan.pan_number}</div>
                            </div>
                        )}
                        {kyc.mca?.cin_number && (
                            <div style={s.kycDetailTile}>
                                <div style={s.kycDetailLabel}>CIN Number</div>
                                <div style={s.kycDetailValue}>{kyc.mca.cin_number}</div>
                            </div>
                        )}
                        {kyc.aadhaar && (
                            <div style={s.kycDetailTile}>
                                <div style={s.kycDetailLabel}>Aadhaar KYC</div>
                                <div style={{ ...statusStyle(!!kyc.aadhaar.verified) }}>
                                    {kyc.aadhaar.verified ? <CheckIcon /> : <PendingIcon />}
                                    <span>{kyc.aadhaar.verified ? 'Verified' : 'Pending'}</span>
                                </div>
                            </div>
                        )}
                        {kyc.bank_account && (
                            <div style={s.kycDetailTile}>
                                <div style={s.kycDetailLabel}>Bank Account</div>
                                <div style={{ ...statusStyle(!!kyc.bank_account.verified) }}>
                                    {kyc.bank_account.verified ? <CheckIcon /> : <PendingIcon />}
                                    <span>{kyc.bank_account.verified ? 'Verified' : 'Pending'}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Business Documents */}
                    {(docs.coi_url || docs.pan_url || docs.aoa_url || docs.moa_url) && (
                        <>
                            <div style={s.sectionTitle}>
                                Business Documents
                                <div style={s.divider} />
                            </div>
                            <div style={{ marginBottom: 20 }}>
                                {[
                                    { url: docs.coi_url, label: 'Certificate of Incorporation', sub: 'COI · Govt. Issued' },
                                    { url: docs.pan_url, label: 'PAN Card', sub: 'Income Tax Dept' },
                                    { url: docs.aoa_url, label: 'Articles of Association', sub: 'AOA · MCA21' },
                                    { url: docs.moa_url, label: 'Memorandum of Association', sub: 'MOA · MCA21' },
                                ].filter(doc => doc.url).map(doc => (
                                    <a key={doc.label} href={doc.url!} target="_blank" rel="noopener noreferrer" style={s.docTile}>
                                        <div style={s.docIcon}>
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15v2h8v-2H8zm0-4v2h8v-2H8z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div style={s.docLabel}>{doc.label}</div>
                                            <div style={s.docSub}>{doc.sub}</div>
                                        </div>
                                        <div style={{ marginLeft: 'auto', color: d ? '#a78bfa' : '#7c3aed', display: 'flex' }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                                            </svg>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Government database sources */}
                    <div style={s.sectionTitle}>
                        Government database sources
                        <div style={s.divider} />
                    </div>

                    <div style={s.govSection}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, paddingBottom: 12, borderBottom: `1px solid ${d ? '#1f1d35' : '#f3f4f6'}` }}>
                            <ShieldIcon size={16} />
                            <span style={s.govHeaderText}>All data sourced from official Govt. of India databases  not self-declared</span>
                            <span style={s.govHeaderSub}>{verifiedCount} sources active</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                            {govSources.map((src) => {
                                const confirmed = src.statusKey ? !!verify[src.statusKey] : true;
                                const label = src.highlight ? 'Clear' : confirmed ? 'Confirmed' : 'Pending';
                                return (
                                    <div key={src.name} style={src.highlight ? s.govTileHighlight : s.govTile}>
                                        <div style={src.highlight ? s.govTileNameHighlight : s.govTileName}>{src.name}</div>
                                        <div style={s.govTileAuth}>{src.auth}</div>
                                        <div style={tileStatusStyle(confirmed || !!src.highlight)}>
                                            {!confirmed && !src.highlight ? <PendingIcon /> : <CheckIcon />}
                                            <span style={{ fontSize: 10 }}>{label}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Source banner */}
                    <div style={s.sourceBanner}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill={d ? '#a78bfa' : '#7c3aed'} style={{ flexShrink: 0 }}>
                            <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5v-5l-2.28 2.28C7.81 18 6 15.21 6 12c0-4.08 3.05-7.44 7-7.93V2.05z" />
                        </svg>
                        <div style={{ flex: 1 }}>
                            <div style={s.sourceBannerTitle}>RakshaVerified by RakshaAI · Sourced from MCA21, GSTN, UIDAI &amp; NSDL databases</div>
                            <div style={s.sourceBannerDesc}>RakshaAI queries official government APIs in real-time. Data is not submitted by the business.</div>
                        </div>
                        <div style={s.liveBadge}>
                            <div style={{ ...s.liveDot, animation: 'pulse 2s infinite' }} />
                            <span style={s.liveTxt}>Live</span>
                        </div>
                    </div>

                    {/* Share row */}
                    {bizId && (
                        <div style={s.shareRow}>
                            <div>
                                <div style={s.shareTitle}>Share this verified profile</div>
                                <div style={s.shareUrl}>{profileUrl}</div>
                            </div>
                            <div style={{ display: 'flex', gap: 8 }}>
                                <button style={s.btnCopy} onClick={handleCopy}>
                                    <CopyIcon />
                                    {copied ? 'Copied!' : 'Copy link'}
                                </button>
                                <button style={s.btnReport}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#f97316">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                    </svg>
                                    Report
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* ── Footer ────────────────────────────────────────────────── */}
                <div style={s.footer}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <ShieldIcon size={12} />
                        <span style={s.footerText}>
                            <span style={s.footerStrong}>RakshaVerified by RakshaAI</span> · Sourced from MCA21, GSTN, UIDAI &amp; NSDL databases
                        </span>
                    </div>
                    {bizId && <div style={s.footerId}># {bizId}</div>}
                </div>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
            `}</style>
        </div>
    );
}
