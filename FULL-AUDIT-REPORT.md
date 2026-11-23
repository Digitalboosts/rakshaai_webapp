# RakshaAI (rakshaai.co) — Full SEO Audit Report

**Date:** 8 July 2026 · **Auditor:** Claude Code (live-site checks + codebase review + GSC screenshots)
**GSC state:** 371 clicks / 23.1k impressions in 12 months · avg position 23.5 · **1 page indexed, 621 not indexed**

---

## Executive Summary

**SEO Health Score: 38/100** — On-page fundamentals are now good; the site is being held back by
(1) a broken www redirect at the hosting layer, (2) the aftermath of a mass programmatic-page
indexing event that Google's quality systems penalized site-wide, and (3) near-zero domain authority.

### What actually happened (timeline reconstructed from GSC + git history)

| Period | Event |
|---|---|
| Jan–Feb 2026 | Site live, minimal SEO, low traffic. Both `www` and non-www served content → duplicate hosts. |
| Early **March 2026** | Hundreds of auto-generated `/check/<domain>` and `/check-report/<domain>` "Is X safe?" pages got indexed. Impressions spiked to ~3.8k/day, clicks ~30/day. |
| Mid-March 2026 | Google's quality systems re-evaluated the programmatic pages (thin, templated, including pages about piracy/adult domains like `bolly4u.com`, `ww5.hqpprner.com`). Rankings collapsed to near zero within days. |
| April 2026 | ~500 pages still indexed but decaying (green bars in GSC Pages report). |
| **~1 May 2026** | Mass deindexing completes: indexed count falls to ~1. This was Google finishing the cleanup of the March programmatic burst — not caused by a code deploy (git shows only dashboard/subscription work that week). |
| June 2026 | You shipped the SEO overhaul (v1→v5): quality-gated sitemap (120 URLs), noindex rules for weak reports, redirects, 25+ long-form blogs. Good work — but recovery hasn't started because of the issues below. |

**The critical insight:** your June SEO work is genuinely good, but Google has already classified the
domain as low-quality from the March–May programmatic episode, and two technical faults are actively
preventing re-evaluation.

---

## Critical Issues (blocking recovery)

### C1. `www.rakshaai.co` redirects to a dead port — `https://rakshaai.co:8080/`  🔴 INFRA
```
$ curl -sI https://www.rakshaai.co/blog/fake-rental-scam-india
HTTP/1.1 301 Moved Permanently
Location: https://rakshaai.co:8080/blog/fake-rental-scam-india   ← port 8080, connection fails
```
- Google's index still contains many `www.rakshaai.co/...` URLs (verified via `site:` search:
  `www.rakshaai.co/scams/upi-fraud`, `www.rakshaai.co/check/mcdmyvoice.in`, etc.).
- Every one of those hits a broken redirect → GSC "Redirect error" (7) + "Page with redirect" (39),
  and **all link equity pointing at www URLs is being destroyed**.
- The commit `e1ead8c "www problem fixed"` (12 Jun) did **not** fix it — the bad redirect is emitted by
  the reverse proxy / hosting config (the `:8080` is the app's internal port leaking into the
  `Location` header), not by Next.js. **Fix at the hosting layer** (Azure/App Service or nginx: the
  www→apex redirect rule must write `https://rakshaai.co` without the port).

### C2. Infinite soft-404 space: `/check/<anything>` returns HTTP 200  🔴 CODE
```
$ curl -o /dev/null -w "%{http_code}" https://rakshaai.co/check/nonexistent-domain-abc123xyz.com
200   (page renders "Is nonexistent-domain-abc123xyz.com Safe?" with noindex)
```
- Any string after `/check/` produces a full 200 page. The noindex tag is correctly applied
  (good — that's the 70 "Excluded by noindex" in GSC), but Googlebot can still crawl an unlimited
  URL space, and each junk page burns crawl budget and reinforces the "low quality site" signal.
- **Fix:** return HTTP `404` (Next.js `notFound()`) when the backend has no real report for the slug,
  instead of rendering a noindex fallback page.

### C3. Site-wide quality suppression from the March programmatic burst  🔴 STRATEGY
- 391 pages "Crawled – currently not indexed" **with a rising trend** is Google's signature for
  "we've seen this site produce scaled thin content; we're not spending index space on it."
- Programmatic "Is X safe?" review pages for arbitrary domains (including piracy/adult sites) are
  exactly what Google's March 2024-era "scaled content abuse" policy targets. The domain now has to
  re-earn trust; simply publishing more pages won't do it.
- Also check **GSC → Security & Manual Actions** (visible in your sidebar, collapsed in screenshot) —
  confirm there is no manual action. If there is one, that changes the playbook entirely.

---

## High Issues

### H1. Old URLs 404 with no redirects (104 pages)
- Old blog slugs are dead: e.g. `/blog/how-to-identify-fake-websites` → 404 (this URL is still in
  Google's index). `next.config.ts` covers renamed `/scams/*` slugs and `/check-report/*` but not the
  old blog slugs. Export the exact 404 list from GSC (Pages → Not found → Export) and add 301s for
  every URL that has impressions or backlinks.

### H2. Domain authority ≈ zero
- Avg position 23.5 on the queries you do appear for; virtually no referring domains. The scam-checker
  SERPs you target are dominated by ScamAdviser, ScamDekho, government portals. Without links/citations,
  even perfect on-page won't rank. (See Action Plan — digital PR for a fraud-data brand is very doable.)

### H3. Unverifiable trust claims hurt E-E-A-T
- Homepage and meta claim "**Trusted by 10M+ Indians**" and "India's largest fraud database with
  10M+ reported scams" while the site has had 371 clicks in 6 months. Google's quality raters and
  algorithmic E-E-A-T signals treat inflated claims on a *fraud-prevention* site (YMYL, highest
  scrutiny tier) as a serious trust defect. Replace with verifiable numbers and cite data sources.

### H4. Duplicate-host history still unresolved in the index
- Google indexed both `www` and apex versions of the same pages ("Duplicate, Google chose different
  canonical" = 7, "Duplicate without user-selected canonical" = 1). Fixing C1 resolves this over time;
  until then the domain property keeps accumulating duplicate signals.

---

## Medium Issues

- **M1. Sitemap `<lastmod>` values are hand-maintained constants** in `lib/generate-sitemap.ts`
  (many pages stamped `2026-06-05`). If they don't reflect real content changes Google learns to
  ignore them. Derive from git or CMS timestamps.
- **M2. Locale redirects:** `/en|hi|or/*` 301/308 to root. Fine, but internal/external links to locale
  URLs keep generating "Page with redirect" entries. If Hindi content is planned (your metadata
  mentions Hindi), implement real `hreflang` pages; otherwise drop locale generation everywhere.
- **M3. Homepage HTML is ~348 KB** — heavy for a mostly-static page; check for inlined JSON payloads.
  (PageSpeed API quota was exhausted today — CWV unverified; re-run tomorrow. CrUX had no field data,
  which itself confirms minimal real traffic.)
- **M4. robots.txt is over-engineered** (~15 bot-specific blocks with long Allow lists). Allow-listing
  is redundant (everything not disallowed is allowed) and easy to break. Collapse to a simple
  universal block + Disallows + sitemap lines.
- **M5. Schema is very heavy** (20+ types on every page incl. `GovernmentOrganization`,
  `EducationalOccupationalCredential`). RakshaAI is not a government org — misleading types risk
  rich-result ineligibility. Trim to Organization, WebSite, WebPage/Article/BlogPosting, Breadcrumb, FAQ.

## What's already good ✅

- Server-rendered, prerendered HTML (`x-nextjs-prerender: 1`) — no JS-rendering problem.
- All 120 sitemap URLs return 200; sitemap quality gate (`report-indexability.ts`) is well designed.
- Blog content is long-form (3.4–4k words), India-specific, with real E-E-A-T scaffolding
  (author page, editorial policy, data sources, correction policy).
- Correct canonicals + `index,follow` on all pages that should rank; junk reports are noindexed.
- Security headers, HTTPS, HSTS all solid. `llms.txt` + AI-crawler robots rules present.

---

## Bottom line

Your June rebuild fixed the *content* side. Recovery is blocked by: the **broken www redirect
(:8080)**, the **infinite 200 soft-404 space under /check/**, and **Google's lingering quality
suppression + zero authority**. Fix the first two this week, then recovery is a 3–6 month
authority-building game, not a coding game. See `ACTION-PLAN.md`.
