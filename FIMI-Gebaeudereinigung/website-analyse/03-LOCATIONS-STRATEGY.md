# Locations Strategy Analysis (Local SEO Domination)

## 1. The Goal
Rank #1 for "Gebäudereinigung [Stadt]" in all 8 target cities.
Currently, you only have the homepage. This is not enough for competitive cities like Munich.

## 2. The 8 Required Location Pages
1.  `/standorte/landshut` (HQ)
2.  `/standorte/muenchen`
3.  `/standorte/regensburg`
4.  `/standorte/ingolstadt`
5.  `/standorte/freising`
6.  `/standorte/erding`
7.  `/standorte/straubing`
8.  `/standorte/passau`

## 3. The "Local Landing Page" Formula
Do NOT just swap the city name. Google is smart. You need local relevance.

### Structure:
1.  **Local Hero:** "Gebäudereinigung in München" + Image of Munich skyline or local landmark (subtle).
2.  **Local Proof:** "Wir betreuen bereits Objekte im Werksviertel und in Schwabing." (Mention districts!).
3.  **Map Section:** Embed a Google Map centered on the city.
4.  **Local Team:** "Unser Team für München ist in 30 Min bei Ihnen."
5.  **Specific Services:** Highlight what's popular there (e.g., Munich = Office Cleaning, Dingolfing = Industrial/Automotive).

## 4. Google Business Profile (GBP) Strategy
*   **The Map Pack:** For the "Local Pack" (the map results at top of Google), you need a verified GBP address.
*   **Strategy:**
    *   If you have physical offices: Verify all 8.
    *   If you only have HQ: Verify Landshut, and set "Service Areas" for the others.
    *   **Link Strategy:** Link the GBP Website button to the *specific* location page, not just the homepage (e.g., The Munich GBP links to `fimi-service.de/standorte/muenchen`).

## 5. Structured Data (Schema.org)
Each location page needs specific JSON-LD:
```json
{
  "@type": "LocalBusiness",
  "name": "FIMI Gebäudereinigung München",
  "areaServed": "München",
  "address": { ... } // If you have a virtual office or real address
}
```
This tells Google explicitly: "We are a business entity relevant to this specific GPS coordinate."
