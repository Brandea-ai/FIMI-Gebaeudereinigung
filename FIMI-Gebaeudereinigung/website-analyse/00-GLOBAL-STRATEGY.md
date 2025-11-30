# Global Website Strategy & Analysis

## 1. Executive Summary
The current state of the FIMI website is a solid **"One-Pager" Foundation**, but it is **NOT yet ready** to compete for Top 10 rankings in Google for competitive keywords like "Gebäudereinigung München" or "Industriereinigung Bayern".

**Current Status:**
*   ✅ **Tech Stack:** Excellent (Next.js 14, Tailwind, TypeScript). Fast and modern.
*   ✅ **Design:** Premium "Apple-Style" aesthetic (in progress with new images).
*   ❌ **Content Depth:** Critical Gap. Google ranks **pages**, not just websites. You currently lack dedicated pages for your 18 services and 8 locations.
*   ❌ **SEO Structure:** Metadata is good for the homepage, but without subpages, you cannot target specific long-tail keywords.

## 2. SEO Strategy (The "Top 10" Blueprint)
To dominate the market, we must move from a "Brochure" to a "Content Ecosystem".

### A. The "Hub & Spoke" Model
You need a massive expansion of the site structure.
*   **Hub:** Homepage (General Brand Authority)
*   **Spoke 1 (Services):** `/leistungen/` overview + 18 dedicated subpages (e.g., `/leistungen/industriereinigung`).
    *   *Why:* A user searching for "Industriereinigung" wants a specific landing page, not a general homepage.
*   **Spoke 2 (Locations):** `/standorte/` overview + 8 dedicated subpages (e.g., `/standorte/muenchen`).
    *   *Why:* "Gebäudereinigung München" is a different intent than "Gebäudereinigung Landshut". You need a local landing page for each.
*   **Spoke 3 (Industries):** `/branchen/` (e.g., "Automotive", "Medical", "Office").

### B. Technical SEO
*   **JSON-LD Structured Data:** Currently hardcoded in `layout.tsx`. Needs to be **dynamic**.
    *   *Service Pages:* Must use `Service` schema.
    *   *Location Pages:* Must use `LocalBusiness` schema with specific `areaServed` and `geo` coordinates.
*   **Canonical Tags:** Must be self-referencing for every new page.
*   **Sitemap.xml:** Must be auto-generated to include all new subpages.

## 3. Conversion Psychology & UX
*   **Trust Signals:** The "TrustContainer" is good, but needs to be omnipresent.
    *   *Recommendation:* Add a "Sticky Bottom Bar" on mobile with "Call Now" and "Get Quote".
*   **Social Proof:** "120+ satisfied customers" is a claim. We need **proof**.
    *   *Recommendation:* Add a `/referenzen` page with case studies (Problem → Solution → Result).
*   **Personas:**
    *   *The "Stressed Manager":* Needs reliability. "We solve your problem in 2 hours."
    *   *The "Procurement Officer":* Needs compliance. "ISO 9001, Cost-Efficiency, Transparent Pricing."
    *   *The "Business Owner":* Needs trust. "Owner-managed, no subcontractors."

## 4. Performance & Core Web Vitals
*   **Images:** You are using `next/image`, which is perfect. Ensure all new AI images are converted to WebP/AVIF (Next.js does this automatically).
*   **Fonts:** `next/font` with Inter is excellent. Zero layout shift (CLS).
*   **Code Splitting:** Next.js App Router handles this. Keep client components (`'use client'`) at the leaf level to maximize server rendering.

## 5. Action Plan (Prioritized)
1.  **Content Expansion (CRITICAL):** Create the 18 Service and 8 Location pages.
2.  **Dynamic Metadata:** Refactor `layout.tsx` to accept dynamic SEO data.
3.  **Local SEO:** Create individual Google Business Profiles for major locations if possible, and link them to the respective Location Pages.
