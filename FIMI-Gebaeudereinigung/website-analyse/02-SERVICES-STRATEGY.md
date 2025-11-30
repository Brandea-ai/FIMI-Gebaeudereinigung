# Services Strategy Analysis (The "SEO Engine")

## 1. The Problem
Currently, you have **0 dedicated service pages**. You list services on the homepage, but clicking "Mehr erfahren" likely leads nowhere or to a generic anchor.
**Google hates this.** If you want to rank for "Praxisreinigung Landshut", you need a page specifically about "Praxisreinigung".

## 2. The Solution: 18 Dedicated Landing Pages
You need a programmatic approach to generate these pages efficiently while keeping them unique.

### The 18 Required Pages (Based on your Data):
1.  `/leistungen/unterhaltsreinigung`
2.  `/leistungen/bueroreinigung`
3.  `/leistungen/glasreinigung`
4.  `/leistungen/fensterreinigung`
5.  `/leistungen/fassadenreinigung`
6.  `/leistungen/baureinigung`
7.  `/leistungen/sonderreinigung`
8.  `/leistungen/industriereinigung`
9.  `/leistungen/hallenreinigung`
10. `/leistungen/maschinenreinigung`
11. `/leistungen/tiefgaragenreinigung`
12. `/leistungen/parkplatzreinigung`
13. `/leistungen/facility-management`
14. `/leistungen/hausmeisterservice`
15. `/leistungen/winterdienst`
16. `/leistungen/aussenanlagenpflege`
17. `/leistungen/beschaffungsmanagement`
18. `/leistungen/sonderleistungen`

## 3. Page Structure Blueprint (High Conversion)
Every service page must follow this "Perfect Landing Page" structure:

1.  **Hero:** Specific H1 (e.g., "Professionelle Industriereinigung"). Background image matching the service (e.g., Factory floor).
2.  **The "Pain Point":** Why do they need this? (e.g., "Produktionsausfälle durch verschmutzte Maschinen?").
3.  **The Solution:** Your specific approach (e.g., "Trockeneisreinigung im laufenden Betrieb").
4.  **Features List:** Bullet points (e.g., "Ölabscheider-Service", "Hochdruckreinigung").
5.  **Social Proof:** A testimonial specifically for *this* service.
6.  **FAQ Section:** 3-5 questions specific to this service (e.g., "Reinigen Sie auch nachts?"). **Crucial for Voice Search SEO.**
7.  **CTA:** "Angebot für [Service] anfordern".

## 4. Technical Implementation
*   **Dynamic Routing:** Use `app/leistungen/[slug]/page.tsx`.
*   **Data Source:** The `lib/leistungen-data.ts` (which we planned) is essential here.
*   **Internal Linking:** The footer and the mega-menu must link to ALL 18 pages to pass "Link Juice".

## 5. Content Quality Rules
*   **No Duplicate Content:** You cannot just copy-paste the text. "Büroreinigung" text must be different from "Unterhaltsreinigung".
*   **Keyword Density:** Target primary keyword (e.g., "Industriereinigung") and secondary keywords (e.g., "Maschinenreinigung", "Hallenboden").
