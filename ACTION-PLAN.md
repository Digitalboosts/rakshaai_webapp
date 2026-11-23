# RakshaAI — SEO Recovery Action Plan

Ordered by impact. Critical items block everything else.

## 🔴 Critical — do this week

1. **Fix the www redirect at the hosting layer** (not in Next.js code)
   - Today: `https://www.rakshaai.co/*` → 301 → `https://rakshaai.co:8080/*` (dead port).
   - Required: `https://www.rakshaai.co/*` → 301 → `https://rakshaai.co/*` (no port).
   - The `:8080` is the app's internal port leaking into the proxy's redirect rule
     (Azure App Service / nginx / Caddy config — wherever the www host is bound).
   - Verify after fix: `curl -sI https://www.rakshaai.co/blog/upi-scam-india-2026 | grep Location`

2. **Return real 404s for unknown `/check/<slug>`** (same for `/upi-id-checker/[slug]`,
   `/phone-number-validator/[slug]`)
   - In `app/check/[slug]/page.tsx`: when the backend has no genuine report
     (`found === false` / fallback report per `looksLikeFallbackReport`), call `notFound()`
     instead of rendering a noindex page.
   - Keep noindex only for *real but weak* reports; nonsense slugs must be 404.

3. **Check GSC → Security & Manual Actions** — confirm "No issues". If there is a manual
   action for spammy/scaled content, file reconsideration after steps 1–2 + pruning (step 4).

## 🟠 High — within 2 weeks

4. **Prune the programmatic footprint deliberately**
   - Keep `/check/<domain>` pages only for domains with real search demand + real data
     (the ~20 curated ones in the sitemap are the right idea).
   - For the rest that Google already crawled: leave them 404/noindex and let them fall out.
     Do NOT mass-create more check pages until the site has authority.

5. **301-map the 104 404s**
   - GSC → Indexing → Pages → "Not found (404)" → Export.
   - Old blog slugs (e.g. `/blog/how-to-identify-fake-websites`) → nearest current post.
   - Anything with zero impressions/links can stay 404.

6. **Fix trust claims (E-E-A-T, YMYL)**
   - Replace "Trusted by 10M+ Indians" / "10M+ reported scams" with verifiable figures, or
     attribute them ("checks against X database with N records — source").
   - Fraud-prevention is max-scrutiny YMYL; inflated claims actively suppress rankings.

7. **Request re-indexing of the 20 most important pages** via GSC URL Inspection
   (home, /check, the 3 checker tools, top 10 blogs, /scams hubs) after 1–2 ship.

## 🟡 Medium — within a month

8. **Authority building (this is the actual ranking lever)**
   - You own real fraud data → publish quarterly "India Scam Report" with statistics; pitch to
     tech/finance journalists (YourStory, Inc42, ET, MediaNama). Data-driven digital PR is the
     fastest link source for this niche.
   - Get listed: startup directories, RBI/cybercrime-awareness resource pages, Product Hunt,
     college cyber-awareness programs.
   - Cross-link properly from RakshaLink app + Play Store listing.
9. **Trim schema** to Organization / WebSite / Article / BreadcrumbList / FAQPage; remove
   `GovernmentOrganization`, `EducationalOccupationalCredential`.
10. **Simplify robots.txt** to one universal block + Disallows + Sitemap lines.
11. **Real `<lastmod>` values** in the sitemap (derive from content changes, not constants).
12. **Re-run PageSpeed/CWV** (API quota was exhausted during audit); homepage HTML ~348 KB —
    investigate inlined payloads.

## 📅 Expectations

- Weeks 1–2 after fixes: redirect errors and soft-404 discoveries stop growing.
- Months 1–2: valid pages (120 sitemap URLs) begin re-entering the index — watch the green line.
- Months 3–6: rankings recover only alongside authority signals (links/mentions). The June content
  is good enough to rank once the domain regains trust; more blogs alone will not move it.

## KPI checkpoints (check GSC every 2 weeks)

| Metric | Now | Target (60 days) |
|---|---|---|
| Indexed pages | 1 | 80–120 |
| Crawled–not indexed | 391 (rising) | flat/declining |
| Redirect errors | 7 | 0 |
| 404s with impressions | ~104 | <10 |
| Referring domains | ~0 | 15–25 |
