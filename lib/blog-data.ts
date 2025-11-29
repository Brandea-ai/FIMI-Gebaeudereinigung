// Blog/Neuigkeiten Data - Dummy-Artikel als Platzhalter
// Warten auf SEO-Content vom User

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string // HTML content
  image: string
  category: 'news' | 'tipps' | 'projekt' | 'team'
  author: string
  date: string // ISO format
  readTime: number // minutes
  featured?: boolean
  sources?: string[] // Quellen-URLs
}

export const blogCategories = {
  news: { label: 'Neuigkeiten', color: '#109387' },
  tipps: { label: 'Reinigungstipps', color: '#012956' },
  projekt: { label: 'Projekte', color: '#0d7d72' },
  team: { label: 'Team & Karriere', color: '#01203d' },
}

export const blogPosts: BlogPost[] = [
  // NEWS (3)
  {
    id: '1',
    slug: 'tariflohn-gebaeudereinigung-2025-2026',
    title: 'Tarifabschluss 2025/2026: Deutliche Lohnsteigerungen in der Gebäudereinigung',
    excerpt: 'Nach intensiven Verhandlungen haben sich die Tarifparteien auf einen neuen Lohntarifvertrag für die rund 700.000 Beschäftigten in der Gebäudereinigung geeinigt. Die Vereinbarung sieht eine stufenweise Erhöhung der Löhne in den Jahren 2025 und 2026 vor, was die Attraktivität der Branche stärkt, aber auch Auswirkungen auf die Dienstleistungspreise haben wird.',
    content: `
      <!-- Key Facts Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 24px 28px; margin-bottom: 32px;">
        <p style="color: #109387; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;">Das Wichtigste auf einen Blick</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">14,25 €</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Mindestlohn LG 1 (2025)</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">+11 %</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Steigerung bis 2026</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">700.000</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Beschäftigte profitieren</p>
          </div>
        </div>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Die Gebäudereinigung, Deutschlands beschäftigungsstärkstes Handwerk, startet mit neuen finanziellen Rahmenbedingungen ins Jahr 2025. Der Ende 2024 zwischen dem <strong style="font-weight: 800; color: #012956;">Bundesinnungsverband des Gebäudereiniger-Handwerks (BIV)</strong> und der <strong style="font-weight: 800; color: #012956;">Industriegewerkschaft Bauen-Agrar-Umwelt (IG BAU)</strong> ausgehandelte Lohntarifvertrag ist in Kraft getreten und für allgemeinverbindlich erklärt worden.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Die neuen Tarife ab Januar 2025</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Der Kernpunkt der Einigung ist die Anpassung des Branchenmindestlohns. Zum 1. Januar 2025 steigt der Lohn in der Einstiegs-Lohngruppe (LG 1), die für die klassische <a href="/leistungen/unterhaltsreinigung" style="color: #109387; font-weight: 700;">Unterhaltsreinigung</a> maßgeblich ist, von 13,50 Euro auf <strong style="font-weight: 800; color: #012956;">14,25 Euro</strong> pro Stunde.</p>
      <p style="font-weight: 600; color: #374151; line-height: 1.8; margin-top: 16px;">Auch für qualifizierte Fachkräfte gibt es eine signifikante Erhöhung. In der Lohngruppe 6 (z.B. <a href="/leistungen/glasreinigung" style="color: #109387; font-weight: 700;">Glas-</a> und <a href="/leistungen/fassadenreinigung" style="color: #109387; font-weight: 700;">Fassadenreinigung</a>) steigt der Stundenlohn von 16,70 Euro auf <strong style="font-weight: 800; color: #012956;">17,65 Euro</strong>.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Ausblick auf 2026</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Der Tarifvertrag sieht eine weitere Stufe der Erhöhung zum 1. Januar 2026 vor:</p>

      <!-- Tarif-Tabelle -->
      <div style="background: #f8f9fa; border-radius: 6px; padding: 20px; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid #e5e7eb;">
              <th style="text-align: left; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Lohngruppe</th>
              <th style="text-align: center; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">2024</th>
              <th style="text-align: center; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">2025</th>
              <th style="text-align: center; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">2026</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 700; font-size: 14px; color: #374151;">LG 1 (Unterhaltsreinigung)</td>
              <td style="text-align: center; padding: 10px 14px; color: #6b7280; font-weight: 600; font-size: 14px;">13,50 €</td>
              <td style="text-align: center; padding: 10px 14px; color: #109387; font-weight: 800; font-size: 14px;">14,25 €</td>
              <td style="text-align: center; padding: 10px 14px; color: #109387; font-weight: 800; font-size: 14px;">15,00 €</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: 700; font-size: 14px; color: #374151;">LG 6 (Glas-/Fassadenreinigung)</td>
              <td style="text-align: center; padding: 10px 14px; color: #6b7280; font-weight: 600; font-size: 14px;">16,70 €</td>
              <td style="text-align: center; padding: 10px 14px; color: #109387; font-weight: 800; font-size: 14px;">17,65 €</td>
              <td style="text-align: center; padding: 10px 14px; color: #109387; font-weight: 800; font-size: 14px;">18,40 €</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Über die gesamte Laufzeit bedeutet dies eine <strong style="font-weight: 800; color: #012956;">Lohnsteigerung von über 11 Prozent</strong> für Einstiegskräfte.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Stärkung der Ausbildung</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Um dem Fachkräftemangel entgegenzuwirken, wurden auch die Ausbildungsvergütungen ab Januar 2025 deutlich angehoben:</p>

      <!-- Ausbildungsvergütung -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 20px 0;">
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">1. Lehrjahr</p>
          <p style="color: #012956; font-size: 24px; font-weight: 800; margin-bottom: 4px;">1.000 €</p>
          <p style="color: #109387; font-size: 12px; font-weight: 700;">+100 €</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">2. Lehrjahr</p>
          <p style="color: #012956; font-size: 24px; font-weight: 800; margin-bottom: 4px;">1.150 €</p>
          <p style="color: #109387; font-size: 12px; font-weight: 700;">+100 €</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">3. Lehrjahr</p>
          <p style="color: #012956; font-size: 24px; font-weight: 800; margin-bottom: 4px;">1.300 €</p>
          <p style="color: #109387; font-size: 12px; font-weight: 700;">+100 €</p>
        </div>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Auswirkungen für Auftraggeber in Bayern</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Für Unternehmen in Bayern, die Reinigungsdienstleistungen beauftragen, sind diese Entwicklungen relevant. Da die Gebäudereinigung sehr personalintensiv ist, werden sich die Tariferhöhungen in den Preisen der Dienstleister widerspiegeln.</p>
      <p style="font-weight: 600; color: #374151; line-height: 1.8; margin-top: 16px;">Gleichzeitig ist die Tarifeinigung ein wichtiges Signal für Qualität. Höhere Löhne steigern die Wertschätzung für die systemrelevante Arbeit und tragen dazu bei, qualifiziertes Personal zu halten. Dies sichert die Qualität der Reinigungsleistung für die Kunden.</p>

      <!-- FIMI Highlight Box -->
      <div style="background: linear-gradient(135deg, #109387 0%, #0d7d72 100%); border-radius: 6px; padding: 24px 28px; margin: 28px 0;">
        <p style="color: white; font-size: 17px; font-weight: 800; margin-bottom: 10px;">FIMI Gebäudereinigung begrüßt diese Entwicklung</p>
        <p style="color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 600; line-height: 1.8;">Als verantwortungsvoller Arbeitgeber setzen wir auf tarifkonforme Bezahlung und gut geschultes Personal, um unseren Kunden in <a href="/kontakt" style="color: white; font-weight: 800; text-decoration: underline;">Landshut, München, Regensburg und Umgebung</a> stets höchste Qualität zu bieten. Wir stehen bereit, um mit Ihnen transparent über die notwendigen Anpassungen zu sprechen und die optimale Reinigungsstrategie für Ihr Objekt sicherzustellen.</p>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Weiterführende Informationen</h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://www.die-gebaeudedienstleister.de/tarifpolitik" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">BIV – Tarifpolitik und Tarifverträge →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Offizielle Informationen des Bundesinnungsverbandes zu den aktuellen Löhnen</p>
        </li>
        <li style="padding: 12px 0;">
          <a href="https://igbau.de/Gebaeudereinigung.html" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">IG BAU Informationen zur Gebäudereinigung →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Perspektive der Gewerkschaft auf Arbeitsbedingungen und Tarife</p>
        </li>
      </ul>
    `,
    image: '/blog/artikel-1/hero.avif',
    category: 'news',
    author: 'FIMI Team',
    date: '2025-01-15',
    readTime: 4,
    featured: true,
    sources: [
      'https://www.die-gebaeudedienstleister.de/tarifpolitik',
      'https://zvoove.de/wissen/blog/neuer-tarif-in-der-gebaeudereinigung'
    ]
  },
  {
    id: '2',
    slug: 'eu-oekodesign-verordnung-espr-reinigung',
    title: 'Nachhaltigkeit wird Pflicht: Die neue EU-Ökodesign-Verordnung (ESPR) und ihre Folgen',
    excerpt: 'Im Rahmen des European Green Deal trat im Juli 2024 die neue Ökodesign-Verordnung (ESPR) in Kraft. Sie zielt darauf ab, nachhaltige Produkte zur Norm zu machen und hat weitreichende Folgen für die Gebäudereinigungsbranche, da auch Reinigungsmittel zu den priorisierten Produktgruppen gehören.',
    content: `
      <!-- Key Facts Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 24px 28px; margin-bottom: 32px;">
        <p style="color: #109387; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;">Das Wichtigste auf einen Blick</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">ESPR</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Neue EU-Verordnung</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">Juli 2024</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">In Kraft getreten</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">50 %</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Zertifizierte Produkte (EU Ecolabel)</p>
          </div>
        </div>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Die Europäische Union verschärft ihr Tempo auf dem Weg zur Klimaneutralität. Ein zentraler Baustein des <strong style="font-weight: 800; color: #012956;">"EU Green Deal"</strong> ist die neue Verordnung für das Ökodesign nachhaltiger Produkte (Ecodesign for Sustainable Products Regulation, ESPR), die am <strong style="font-weight: 800; color: #012956;">18. Juli 2024</strong> in Kraft getreten ist. Sie ersetzt die bisherige Ökodesign-Richtlinie und erweitert deren Anwendungsbereich massiv – mit direkten Auswirkungen auf die professionelle Gebäudereinigung.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">ESPR: Nachhaltigkeit als Mindestanforderung</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Das Ziel der ESPR ist klar definiert: Produkte auf dem EU-Binnenmarkt sollen langlebiger, energie- und ressourceneffizienter sowie leichter recycelbar sein. Anders als bisher sind nicht mehr nur energieverbrauchende Produkte betroffen, sondern nahezu alle physischen Waren.</p>
      <p style="font-weight: 600; color: #374151; line-height: 1.8; margin-top: 16px;">Für die Reinigungsbranche besonders relevant: <strong style="font-weight: 800; color: #012956;">Reinigungsmittel und Chemikalien</strong> gehören zu den ersten Produktgruppen, für die die EU-Kommission nun spezifische ökologische Mindestanforderungen festlegen wird.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Was bedeutet das für die Branche?</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Die neuen Regelungen werden den Markt für Reinigungschemikalien verändern. Produkte, die hohe Umweltstandards nicht erfüllen, könnten langfristig durch nachhaltigere Alternativen ersetzt werden müssen.</p>

      <!-- Auswirkungen Cards -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 24px 0;">
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Anpassung</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Umstellung auf ESPR-konforme Produkte</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Transparenz</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Digitaler Produktpass mit Nachhaltigkeitsdaten</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Effizienz</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Dosiersysteme & wassersparende Methoden</p>
        </div>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Die Rolle von EU Ecolabel und Umweltmanagement</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Bereits etablierte Umweltzeichen wie das <strong style="font-weight: 800; color: #012956;">EU Ecolabel</strong> bieten eine gute Orientierung. Das EU Ecolabel für Reinigungsdienste fordert beispielsweise, dass mindestens <strong style="font-weight: 800; color: #012956;">50% der verwendeten Produkte</strong> umweltzertifiziert sein müssen. Es setzt strenge Limits für gefährliche Inhaltsstoffe und fördert die korrekte Dosierung durch geschultes Personal.</p>

      <!-- Zertifizierungen Vergleich -->
      <div style="background: #f8f9fa; border-radius: 6px; padding: 20px; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid #e5e7eb;">
              <th style="text-align: left; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Zertifizierung</th>
              <th style="text-align: center; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Fokus</th>
              <th style="text-align: center; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Anforderungen</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 700; font-size: 14px; color: #374151;">EU Ecolabel</td>
              <td style="text-align: center; padding: 10px 14px; color: #6b7280; font-weight: 600; font-size: 14px;">Produkte & Dienste</td>
              <td style="text-align: center; padding: 10px 14px; color: #109387; font-weight: 700; font-size: 14px;">50% zertifizierte Produkte</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 700; font-size: 14px; color: #374151;">ISO 14001</td>
              <td style="text-align: center; padding: 10px 14px; color: #6b7280; font-weight: 600; font-size: 14px;">Umweltmanagement</td>
              <td style="text-align: center; padding: 10px 14px; color: #109387; font-weight: 700; font-size: 14px;">Systematische Verbesserung</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: 700; font-size: 14px; color: #374151;">EMAS</td>
              <td style="text-align: center; padding: 10px 14px; color: #6b7280; font-weight: 600; font-size: 14px;">Umweltmanagement+</td>
              <td style="text-align: center; padding: 10px 14px; color: #109387; font-weight: 700; font-size: 14px;">Strengste Anforderungen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Zusätzlich setzen professionelle Dienstleister auf Umweltmanagementsysteme wie <strong style="font-weight: 800; color: #012956;">ISO 14001</strong> oder das noch strengere <strong style="font-weight: 800; color: #012956;">EMAS</strong> (Eco-Management and Audit Scheme). Diese Systeme helfen, die Umweltleistung systematisch zu verbessern und die Einhaltung rechtlicher Vorgaben sicherzustellen.</p>

      <!-- FIMI Highlight Box -->
      <div style="background: linear-gradient(135deg, #109387 0%, #0d7d72 100%); border-radius: 6px; padding: 24px 28px; margin: 28px 0;">
        <p style="color: white; font-size: 17px; font-weight: 800; margin-bottom: 10px;">FIMI setzt auf Nachhaltigkeit</p>
        <p style="color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 600; line-height: 1.8;">Die ESPR ist ein klares Signal: Nachhaltigkeit wird zur regulatorischen Anforderung. FIMI Gebäudereinigung setzt bereits heute auf umweltfreundliche Verfahren und zertifizierte Produkte, um unseren Kunden in <a href="/kontakt" style="color: white; font-weight: 800; text-decoration: underline;">München, Landshut und Regensburg</a> eine zukunftssichere Dienstleistung zu bieten.</p>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Weiterführende Informationen</h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://environment.ec.europa.eu/topics/circular-economy/ecodesign-sustainable-products-regulation_en" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">EU-Kommission – Ökodesign-Verordnung (ESPR) →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Offizielle Seite der EU zur neuen Verordnung</p>
        </li>
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://environment.ec.europa.eu/topics/circular-economy/eu-ecolabel-home/product-groups-and-criteria/services/cleaning-services_en" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">EU Ecolabel für Reinigungsdienste →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Kriterien und Vorteile des EU-Umweltzeichens</p>
        </li>
        <li style="padding: 12px 0;">
          <a href="https://www.izu.bayern.de/praxis/detail_praxis.php?pid=0203010100206" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">IZU Bayern – ISO 14001 vs. EMAS →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Vergleich der Umweltmanagementsysteme</p>
        </li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop',
    category: 'news',
    author: 'FIMI Team',
    date: '2024-10-15',
    readTime: 5,
    sources: [
      'https://environment.ec.europa.eu/topics/circular-economy/ecodesign-sustainable-products-regulation_en',
      'https://www.hza-seminare.de/zoll-news/689/green-deal-eu-gruendet-sachverstaendigengruppe-fuer-oekodesign',
      'https://www.izu.bayern.de/praxis/detail_praxis.php?pid=0203010100206'
    ]
  },
  {
    id: '3',
    slug: 'digitalisierung-gebaeudereinigung-2025-ki-robotik-iot',
    title: 'Digitalisierungsschub 2025: Wie KI, Robotik und IoT die Gebäudereinigung verändern',
    excerpt: 'Die Gebäudereinigungsbranche steht 2025 im Zeichen tiefgreifender technologischer Veränderungen. Angetrieben durch den anhaltenden Personalmangel setzen Unternehmen verstärkt auf digitale Lösungen wie Künstliche Intelligenz und autonome Robotik, um Effizienz und Qualität zu steigern.',
    content: `
      <!-- Key Facts Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 24px 28px; margin-bottom: 32px;">
        <p style="color: #109387; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;">Die 3 großen Trends 2025</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">IoT</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Bedarfsorientierte Reinigung</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">Robotik</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Autonome Scheuersaugmaschinen</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">KI</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Dynamische Einsatzplanung</p>
          </div>
        </div>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Die Digitalisierung prägt die Reinigungsbranche im Jahr 2025 tiefgreifender denn je. Der Haupttreiber dieser Entwicklung ist der <strong style="font-weight: 800; color: #012956;">akute Personalmangel</strong>. Laut Konjunkturumfragen des <strong style="font-weight: 800; color: #012956;">Bundesinnungsverbandes (BIV)</strong> ist dies die größte Herausforderung der Branche; viele Unternehmen müssen bereits Aufträge ablehnen. Technologie wird daher zum entscheidenden Faktor, um diesen Mangel zu kompensieren.</p>

      <p style="font-weight: 600; color: #374151; line-height: 1.8; margin-top: 16px;">Wir beleuchten die drei wichtigsten Digitalisierungstrends in der professionellen <a href="/leistungen" style="color: #109387; font-weight: 700;">Gebäudereinigung</a>.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Trend 1: Bedarfsorientierte Reinigung durch IoT und KI</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Starre Reinigungspläne gehören zunehmend der Vergangenheit an. Stattdessen ermöglicht das <strong style="font-weight: 800; color: #012956;">Internet der Dinge (IoT)</strong> eine bedarfsorientierte Reinigung (Smart Cleaning).</p>

      <!-- IoT Features -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 24px 0;">
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Echtzeit-Monitoring</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Sensoren erfassen Raumnutzung in Echtzeit</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Automatische Meldung</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Füllstands-anzeigen melden Nachfüllbedarf</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">KI-Optimierung</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Dynamische Einsatzpläne per Algorithmus</p>
        </div>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Diese Daten fließen in eine zentrale Plattform, wo <strong style="font-weight: 800; color: #012956;">Künstliche Intelligenz (KI)</strong> die Informationen analysiert und dynamische Einsatzpläne erstellt. Das Personal wird gezielt dorthin geschickt, wo tatsächlich Reinigungsbedarf besteht. Dies spart Ressourcen und erhöht gleichzeitig die Reinigungsqualität in stark frequentierten Bereichen.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Trend 2: Reinigungsroboter und Cobotics</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Der Markt für professionelle Service-Roboter boomt. Insbesondere <strong style="font-weight: 800; color: #012956;">autonome Scheuersaugmaschinen</strong> werden immer häufiger eingesetzt. Sie sind ideal für große, strukturierte Flächen wie Lagerhallen oder lange Büroflure.</p>

      <p style="font-weight: 600; color: #374151; line-height: 1.8; margin-top: 16px;">Die Zukunft liegt in der <strong style="font-weight: 800; color: #012956;">Kollaboration (Cobotics)</strong>: Roboter ersetzen das Personal nicht, sondern unterstützen es. Sie übernehmen monotone und körperlich anstrengende Standardaufgaben, während sich die Fachkräfte auf komplexere Tätigkeiten konzentrieren können, die menschliches Urteilsvermögen erfordern.</p>

      <!-- Cobotics Vergleich -->
      <div style="background: #f8f9fa; border-radius: 6px; padding: 20px; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid #e5e7eb;">
              <th style="text-align: left; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Aufgabe</th>
              <th style="text-align: center; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Roboter</th>
              <th style="text-align: center; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Fachkraft</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 700; font-size: 14px; color: #374151;">Große Bodenflächen</td>
              <td style="text-align: center; padding: 10px 14px; color: #109387; font-weight: 800; font-size: 14px;">✓</td>
              <td style="text-align: center; padding: 10px 14px; color: #6b7280; font-weight: 600; font-size: 14px;">Kontrolle</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 700; font-size: 14px; color: #374151;">Komplexe Bereiche</td>
              <td style="text-align: center; padding: 10px 14px; color: #6b7280; font-weight: 600; font-size: 14px;">—</td>
              <td style="text-align: center; padding: 10px 14px; color: #109387; font-weight: 800; font-size: 14px;">✓</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: 700; font-size: 14px; color: #374151;">Qualitätskontrolle</td>
              <td style="text-align: center; padding: 10px 14px; color: #6b7280; font-weight: 600; font-size: 14px;">Daten</td>
              <td style="text-align: center; padding: 10px 14px; color: #109387; font-weight: 800; font-size: 14px;">Urteil</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Trend 3: Digitales Qualitätsmanagement</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Das Qualitätsmanagement wird vollständig digitalisiert. Objektleiter nutzen <strong style="font-weight: 800; color: #012956;">mobile Apps</strong>, um Qualitätskontrollen direkt vor Ort durchzuführen, Mängel fotografisch zu dokumentieren und Maßnahmen sofort einzuleiten.</p>

      <p style="font-weight: 600; color: #374151; line-height: 1.8; margin-top: 16px;">Diese <strong style="font-weight: 800; color: #012956;">Echtzeit-Dokumentation</strong> schafft maximale Transparenz gegenüber dem Kunden und ermöglicht eine datenbasierte Analyse zur kontinuierlichen Verbesserung der Dienstleistung.</p>

      <!-- FIMI Highlight Box -->
      <div style="background: linear-gradient(135deg, #109387 0%, #0d7d72 100%); border-radius: 6px; padding: 24px 28px; margin: 28px 0;">
        <p style="color: white; font-size: 17px; font-weight: 800; margin-bottom: 10px;">Technologie für mehr Effizienz</p>
        <p style="color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 600; line-height: 1.8;">Die Digitalisierung ist ein notwendiges Werkzeug, um die Herausforderungen der Branche zu meistern. FIMI Gebäudereinigung investiert gezielt in moderne Technologien, um unseren Kunden in <a href="/kontakt" style="color: white; font-weight: 800; text-decoration: underline;">Bayern</a> auch 2025 effiziente, transparente und qualitativ hochwertige Reinigungsdienstleistungen zu bieten – und unsere Mitarbeiter zu entlasten.</p>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Weiterführende Informationen</h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://www.die-gebaeudedienstleister.de/der-biv/zahlen-fakten/" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">BIV – Zahlen und Fakten zur Branche →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Branchenüberblick des Bundesinnungsverbands</p>
        </li>
        <li style="padding: 12px 0;">
          <a href="https://www.facility-manager.de/aktuelles/personalmangel-bremst-wachstum-in-der-gebaeudereinigung/" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">Facility Manager – Personalmangel bremst Wachstum →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Zusammenfassung der BIV Konjunkturumfrage 2024</p>
        </li>
      </ul>
    `,
    image: '/blog/artikel-3/hero.avif',
    category: 'news',
    author: 'FIMI Team',
    date: '2025-06-04',
    readTime: 5,
    sources: [
      'https://www.die-gebaeudedienstleister.de/der-biv/zahlen-fakten/',
      'https://www.facility-manager.de/aktuelles/personalmangel-bremst-wachstum-in-der-gebaeudereinigung/'
    ]
  },
  // TIPPS (3)
  {
    id: '4',
    slug: 'artikel-4',
    title: 'Artikel 4 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=800&auto=format&fit=crop',
    category: 'tipps',
    author: 'FIMI Team',
    date: '2024-10-15',
    readTime: 3,
  },
  {
    id: '5',
    slug: 'artikel-5',
    title: 'Artikel 5 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    category: 'tipps',
    author: 'FIMI Team',
    date: '2024-06-10',
    readTime: 3,
  },
  {
    id: '6',
    slug: 'artikel-6',
    title: 'Artikel 6 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop',
    category: 'tipps',
    author: 'FIMI Team',
    date: '2024-03-18',
    readTime: 3,
  },
  // PROJEKT (3)
  {
    id: '7',
    slug: 'artikel-7',
    title: 'Artikel 7 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    category: 'projekt',
    author: 'FIMI Team',
    date: '2024-08-22',
    readTime: 3,
  },
  {
    id: '8',
    slug: 'artikel-8',
    title: 'Artikel 8 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop',
    category: 'projekt',
    author: 'FIMI Team',
    date: '2024-05-14',
    readTime: 3,
  },
  {
    id: '9',
    slug: 'artikel-9',
    title: 'Artikel 9 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
    category: 'projekt',
    author: 'FIMI Team',
    date: '2023-09-05',
    readTime: 3,
  },
  // TEAM (3)
  {
    id: '10',
    slug: 'artikel-10',
    title: 'Artikel 10 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    category: 'team',
    author: 'FIMI Team',
    date: '2024-02-12',
    readTime: 3,
  },
  {
    id: '11',
    slug: 'artikel-11',
    title: 'Artikel 11 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    category: 'team',
    author: 'FIMI Team',
    date: '2023-11-30',
    readTime: 3,
  },
  {
    id: '12',
    slug: 'artikel-12',
    title: 'Artikel 12 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    category: 'team',
    author: 'FIMI Team',
    date: '2025-01-08',
    readTime: 3,
  },
]

// Helper functions
export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find(post => post.featured)
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}

export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
