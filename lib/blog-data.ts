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
          <a href="https://www.die-gebaeudedienstleister.de/die-branche/tarifpolitik/" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">BIV – Tarifpolitik und Tarifverträge →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Offizielle Informationen des Bundesinnungsverbandes zu den aktuellen Löhnen</p>
        </li>
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://igbau.de/Gebaeudereinigung-Dienstleistungen-FM-IDL.html" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">IG BAU – Gebäudereinigung & Dienstleistungen →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Perspektive der Gewerkschaft auf Arbeitsbedingungen und Tarife</p>
        </li>
        <li style="padding: 12px 0;">
          <a href="https://zvoove.de/wissen/blog/neuer-tarif-in-der-gebaeudereinigung" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">zvoove – Neuer Tarif in der Gebäudereinigung →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Detaillierte Übersicht zur Tarifentwicklung 2025/2026</p>
        </li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    category: 'news',
    author: 'FIMI Team',
    date: '2025-01-15',
    readTime: 4,
    featured: true,
    sources: [
      'https://www.die-gebaeudedienstleister.de/die-branche/tarifpolitik/',
      'https://igbau.de/Gebaeudereinigung-Dienstleistungen-FM-IDL.html',
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
          <a href="https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-standards/ecodesign-and-energy-labelling/ecodesign-sustainable-products-regulation_de" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">EU-Kommission – Ökodesign-Verordnung (ESPR) →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Offizielle Seite der EU zur neuen Verordnung</p>
        </li>
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://ec.europa.eu/environment/ecolabel/documents/Cleaning_Services_Factsheet_Final.pdf" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">EU Ecolabel – Cleaning Services Factsheet (PDF) →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Kriterien und Vorteile des EU-Umweltzeichens für Reinigungsdienste</p>
        </li>
        <li style="padding: 12px 0;">
          <a href="https://www.umweltpakt.bayern.de/management/fachwissen/207/umweltmanagementsystem-nach-din-en-iso-14001" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">Umweltpakt Bayern – ISO 14001 Umweltmanagement →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Informationen zum Umweltmanagementsystem nach DIN EN ISO 14001</p>
        </li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop',
    category: 'news',
    author: 'FIMI Team',
    date: '2024-10-15',
    readTime: 5,
    sources: [
      'https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-standards/ecodesign-and-energy-labelling/ecodesign-sustainable-products-regulation_de',
      'https://ec.europa.eu/environment/ecolabel/documents/Cleaning_Services_Factsheet_Final.pdf',
      'https://www.umweltpakt.bayern.de/management/fachwissen/207/umweltmanagementsystem-nach-din-en-iso-14001'
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
          <a href="https://www.die-gebaeudedienstleister.de/unser-handwerk/zahlen-fakten" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">BIV – Zahlen und Fakten zur Branche →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Branchenüberblick des Bundesinnungsverbands</p>
        </li>
        <li style="padding: 12px 0;">
          <a href="https://www.facility-manager.de/aktuelles/personalmangel-bremst-wachstum-in-der-gebaeudereinigung/" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">Facility Manager – Personalmangel bremst Wachstum →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Zusammenfassung der BIV Konjunkturumfrage 2024</p>
        </li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    category: 'news',
    author: 'FIMI Team',
    date: '2025-06-04',
    readTime: 5,
    sources: [
      'https://www.die-gebaeudedienstleister.de/unser-handwerk/zahlen-fakten',
      'https://www.facility-manager.de/aktuelles/personalmangel-bremst-wachstum-in-der-gebaeudereinigung/'
    ]
  },
  // TIPPS (3)
  {
    id: '4',
    slug: 'hygiene-arbeitsplatz-standards-buero-bmas-baua',
    title: 'Hygiene am Arbeitsplatz: Aktuelle Standards für ein gesundes Büro',
    excerpt: 'Die Pandemie hat das Bewusstsein für Hygiene am Arbeitsplatz nachhaltig verändert. Viele der etablierten Schutzmaßnahmen haben sich bewährt und definieren heute den Standard für ein gesundes Arbeitsumfeld, um Mitarbeiter vor Atemwegsinfektionen zu schützen.',
    content: `
      <!-- Key Facts Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 24px 28px; margin-bottom: 32px;">
        <p style="color: #109387; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;">Die AHA+L Formel</p>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">A</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Abstand halten</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">H</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Hygiene beachten</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">A</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Atemschutz</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">L</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Lüften</p>
          </div>
        </div>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Ein gesundes Arbeitsumfeld ist die Basis für Produktivität und Mitarbeiterzufriedenheit. Die während der Pandemie entwickelten Hygienekonzepte bleiben relevant, um generell vor Infektionen wie Grippe oder Erkältungen zu schützen. Der <strong style="font-weight: 800; color: #012956;">betriebliche Infektionsschutz</strong> ist eine Daueraufgabe.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Die Grundlage: AHA+L bleibt aktuell</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Das <strong style="font-weight: 800; color: #012956;">Bundesministerium für Arbeit und Soziales (BMAS)</strong> empfiehlt weiterhin die Anwendung der AHA+L-Formel als effektiven Schutz vor Tröpfcheninfektionen:</p>

      <!-- AHA+L Details -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 24px 0;">
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">A – Abstand</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Wo möglich, schützt physischer Abstand vor Übertragung.</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">H – Hygiene</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Regelmäßiges Händewaschen & Husten-/Niesetikette. Wer krank ist, bleibt zu Hause.</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">A – Atemschutz</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Bei Erkältungssymptomen ist das Tragen einer Maske wirksamer Fremdschutz.</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">L – Lüften</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Regelmäßiger Luftaustausch verringert die Aerosol-Konzentration.</p>
        </div>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Lüften als zentrale Säule des Infektionsschutzes</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Die <strong style="font-weight: 800; color: #012956;">Bundesanstalt für Arbeitsschutz und Arbeitsmedizin (BAuA)</strong> betont die Wichtigkeit der Raumluftqualität. In vielen Büroumgebungen ist die Fensterlüftung die praktikabelste Lösung.</p>

      <!-- Lüftungs-Empfehlungen Tabelle -->
      <div style="background: #f8f9fa; border-radius: 6px; padding: 20px; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid #e5e7eb;">
              <th style="text-align: left; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Raumtyp</th>
              <th style="text-align: center; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Intervall</th>
              <th style="text-align: center; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Dauer</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 700; font-size: 14px; color: #374151;">Büroräume</td>
              <td style="text-align: center; padding: 10px 14px; color: #109387; font-weight: 800; font-size: 14px;">alle 60 Min.</td>
              <td style="text-align: center; padding: 10px 14px; color: #6b7280; font-weight: 600; font-size: 14px;">3–10 Min.</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 700; font-size: 14px; color: #374151;">Besprechungsräume</td>
              <td style="text-align: center; padding: 10px 14px; color: #109387; font-weight: 800; font-size: 14px;">alle 20 Min.</td>
              <td style="text-align: center; padding: 10px 14px; color: #6b7280; font-weight: 600; font-size: 14px;">3–10 Min.</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: 700; font-size: 14px; color: #374151;">CO₂-Grenzwert</td>
              <td style="text-align: center; padding: 10px 14px; color: #109387; font-weight: 800; font-size: 14px;">max. 1000 ppm</td>
              <td style="text-align: center; padding: 10px 14px; color: #6b7280; font-weight: 600; font-size: 14px;">CO₂-Ampel nutzen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Angepasste Reinigung und gezielte Desinfektion</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Die professionelle <a href="/leistungen/bueroreinigung" style="color: #109387; font-weight: 700;">Gebäudereinigung</a> spielt eine Schlüsselrolle bei der Umsetzung der Hygienestandards. Es geht nicht darum, flächendeckend zu desinfizieren, sondern gezielt dort anzusetzen, wo das Übertragungsrisiko am höchsten ist.</p>

      <!-- Reinigungsfokus -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 24px 0;">
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Kontaktflächen</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Türklinken, Lichtschalter, Handläufe, Teeküchenoberflächen – kurze Reinigungsintervalle</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Sanitärhygiene</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Seife und Einmalhandtücher müssen stets verfügbar und regelmäßig kontrolliert werden</p>
        </div>
      </div>

      <!-- FIMI Highlight Box -->
      <div style="background: linear-gradient(135deg, #109387 0%, #0d7d72 100%); border-radius: 6px; padding: 24px 28px; margin: 28px 0;">
        <p style="color: white; font-size: 17px; font-weight: 800; margin-bottom: 10px;">Maßgeschneiderte Hygienepläne</p>
        <p style="color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 600; line-height: 1.8;">Ein effektives Hygienekonzept ist immer eine Kombination aus technischen, organisatorischen und personenbezogenen Maßnahmen. FIMI unterstützt Unternehmen in <a href="/kontakt" style="color: white; font-weight: 800; text-decoration: underline;">München, Regensburg und Landshut</a> dabei, diese Standards professionell umzusetzen – mit Hygieneplänen, die auf Ihre spezifischen Anforderungen zugeschnitten sind.</p>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Weiterführende Informationen</h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://www.bmas.de/DE/Arbeit/Arbeitsschutz/Gesundheit-am-Arbeitsplatz/Betrieblicher-Infektionsschutz/betrieblicher-infektionsschutz.html" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">BMAS – Betrieblicher Infektionsschutz →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Aktuelle Leitlinien des Bundesministeriums für Arbeit und Soziales</p>
        </li>
        <li style="padding: 12px 0;">
          <a href="https://www.baua.de/DE/Angebote/Publikationen/Praxis-kompakt/F93.pdf?__blob=publicationFile&v=4" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">BAuA – Lüften am Arbeitsplatz (PDF) →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Detaillierte Empfehlungen zur Ventilation am Arbeitsplatz</p>
        </li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    category: 'tipps',
    author: 'FIMI Team',
    date: '2024-08-22',
    readTime: 5,
    sources: [
      'https://www.bmas.de/DE/Arbeit/Arbeitsschutz/Gesundheit-am-Arbeitsplatz/Betrieblicher-Infektionsschutz/betrieblicher-infektionsschutz.html',
      'https://www.baua.de/DE/Angebote/Publikationen/Praxis-kompakt/F93.pdf?__blob=publicationFile&v=4'
    ]
  },
  {
    id: '5',
    slug: 'reinigungsintervalle-buero-schule-praxis-din-ral',
    title: 'Die richtigen Reinigungsintervalle: Wie oft muss gereinigt werden?',
    excerpt: 'Die Festlegung der richtigen Reinigungsintervalle ist entscheidend für Hygiene, Werterhalt und Kosteneffizienz. Starre Vorgaben gibt es selten; vielmehr muss die Frequenz individuell auf Basis von Nutzungsintensität, Raumtyp und relevanten Normen ermittelt werden.',
    content: `
      <!-- Key Facts Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 24px 28px; margin-bottom: 32px;">
        <p style="color: #109387; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;">Maßgebliche Standards</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          <div style="text-align: center;">
            <p style="color: white; font-size: 24px; font-weight: 800; margin-bottom: 2px;">DIN 77400</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Schulgebäude-Reinigung</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 24px; font-weight: 800; margin-bottom: 2px;">RAL-GZ 902</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Gütezeichen Reinigung</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 24px; font-weight: 800; margin-bottom: 2px;">Individuell</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Bedarfsgerechte Planung</p>
          </div>
        </div>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;"><em style="font-weight: 700; color: #012956;">"Wie oft soll gereinigt werden?"</em> Diese Frage stellen sich Facility Manager und Verantwortliche gleichermaßen. Eine pauschale Antwort gibt es nicht, denn die optimale Reinigungsfrequenz hängt von einer Vielzahl von Faktoren ab. Eine <strong style="font-weight: 800; color: #012956;">bedarfsgerechte Planung</strong> ist der Schlüssel zu einem sauberen und wirtschaftlichen Ergebnis.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Faktoren, die das Reinigungsintervall bestimmen</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Die Basis jeder Planung ist die Analyse der Ist-Situation. Folgende Aspekte müssen berücksichtigt werden:</p>

      <!-- Faktoren Cards -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 24px 0;">
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Nutzungsintensität</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Ein Großraumbüro hat anderen Bedarf als ein Archiv.</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Verschmutzungsgrad</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Jahreszeitliche Einflüsse wie Schmutzeintrag im Winter.</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Hygieneanforderungen</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Medizinische Einrichtungen haben strengere Vorgaben.</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Repräsentation</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Eingangsbereiche erfordern oft höhere Frequenz.</p>
        </div>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Normen und Standards als Orientierung</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Normen und Gütezeichen bieten wichtige Rahmenbedingungen für die Qualität der Reinigung:</p>

      <!-- Normen Tabelle -->
      <div style="background: #f8f9fa; border-radius: 6px; padding: 20px; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid #e5e7eb;">
              <th style="text-align: left; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Standard</th>
              <th style="text-align: left; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Fokus</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 800; font-size: 14px; color: #109387;">DIN 77400</td>
              <td style="padding: 10px 14px; color: #374151; font-weight: 600; font-size: 14px;">Mindestanforderungen für Schulreinigung – Systematik übertragbar auf andere Gebäudetypen</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: 800; font-size: 14px; color: #109387;">RAL-GZ 902</td>
              <td style="padding: 10px 14px; color: #374151; font-weight: 600; font-size: 14px;">Gütezeichen für Dienstleister – Fachkompetenz, Leistungsverzeichnisse, Eigenüberwachung</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Empfohlene Reinigungsfrequenzen im Überblick</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Basierend auf Branchenstandards lassen sich folgende Empfehlungen ableiten:</p>

      <!-- Büro -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 20px; margin: 20px 0;">
        <p style="color: #109387; font-size: 13px; font-weight: 800; margin-bottom: 12px;">Büro- und Verwaltungsgebäude</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
          <div style="text-align: center;">
            <p style="color: white; font-size: 16px; font-weight: 800; margin-bottom: 4px;">Täglich</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 11px; font-weight: 600;">Sanitär, Teeküche, Eingang, Kontaktflächen</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 16px; font-weight: 800; margin-bottom: 4px;">2–3× / Woche</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 11px; font-weight: 600;">Büroräume, Böden, Abfall, Oberflächen</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 16px; font-weight: 800; margin-bottom: 4px;">Monatlich</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 11px; font-weight: 600;">Weniger frequentierte Bereiche</p>
          </div>
        </div>
      </div>

      <!-- Schulen -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 20px; margin: 20px 0;">
        <p style="color: #109387; font-size: 13px; font-weight: 800; margin-bottom: 12px;">Schulen (angelehnt an DIN 77400)</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
          <div style="text-align: center;">
            <p style="color: white; font-size: 16px; font-weight: 800; margin-bottom: 4px;">Täglich</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 11px; font-weight: 600;">Klassenzimmer, Sanitär, Flure</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 16px; font-weight: 800; margin-bottom: 4px;">Wöchentlich</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 11px; font-weight: 600;">Fachräume, Verwaltung</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 16px; font-weight: 800; margin-bottom: 4px;">Ferienzeit</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 11px; font-weight: 600;">Grundreinigung</p>
          </div>
        </div>
      </div>

      <!-- Arztpraxen -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 20px; margin: 20px 0;">
        <p style="color: #109387; font-size: 13px; font-weight: 800; margin-bottom: 12px;">Arztpraxen</p>
        <div style="text-align: center;">
          <p style="color: white; font-size: 16px; font-weight: 800; margin-bottom: 4px;">Täglich gemäß Hygieneplan</p>
          <p style="color: rgba(255,255,255,0.7); font-size: 11px; font-weight: 600;">Behandlungsräume, Wartezimmer, Anmeldung, Sanitäranlagen</p>
        </div>
      </div>

      <!-- FIMI Highlight Box -->
      <div style="background: linear-gradient(135deg, #109387 0%, #0d7d72 100%); border-radius: 6px; padding: 24px 28px; margin: 28px 0;">
        <p style="color: white; font-size: 17px; font-weight: 800; margin-bottom: 10px;">Individuelles Leistungsverzeichnis</p>
        <p style="color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 600; line-height: 1.8;">Die Kunst besteht darin, diese Empfehlungen in ein individuelles Leistungsverzeichnis zu übersetzen. FIMI Gebäudereinigung analysiert Ihren Bedarf vor Ort in <a href="/kontakt" style="color: white; font-weight: 800; text-decoration: underline;">Landshut, München oder Freising</a> und entwickelt ein Konzept, das Hygieneanforderungen, Kosteneffizienz und die Vorgaben von DIN und RAL optimal vereint.</p>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Weiterführende Informationen</h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://www.din.de/de/mitwirken/normenausschuesse/nadl/veroeffentlichungen/wdc-beuth:din21:247267691" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">DIN 77400 – Reinigungsdienstleistungen Schulgebäude →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Überblick über den Anwendungsbereich der Norm beim DIN</p>
        </li>
        <li style="padding: 12px 0;">
          <a href="https://www.ral-guetezeichen.de/guetezeichen/gebaeudereinigung-gz-902/" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">RAL-GZ 902 – Gütezeichen Gebäudereinigung →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Anforderungen und Vorteile der RAL Gütesicherung</p>
        </li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    category: 'tipps',
    author: 'FIMI Team',
    date: '2023-10-18',
    readTime: 5,
    sources: [
      'https://www.din.de/de/mitwirken/normenausschuesse/nadl/veroeffentlichungen/wdc-beuth:din21:247267691',
      'https://www.ral-guetezeichen.de/guetezeichen/gebaeudereinigung-gz-902/'
    ]
  },
  {
    id: '6',
    slug: 'winterdienst-bayern-pflichten-haftung-bgh-urteil-2025',
    title: 'Winterdienst für Unternehmen in Bayern: Pflichten, Haftung und das BGH-Urteil 2025',
    excerpt: 'Der Winterdienst ist eine essenzielle Verkehrssicherungspflicht für Immobilieneigentümer und Unternehmen in Bayern. Die Nichteinhaltung kann zu empfindlichen Haftungsansprüchen führen – ein Risiko, das durch ein aktuelles Urteil des Bundesgerichtshofs vom August 2025 nochmals verschärft wurde.',
    content: `
      <!-- Key Facts Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 24px 28px; margin-bottom: 32px;">
        <p style="color: #109387; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;">Wichtige Eckdaten</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          <div style="text-align: center;">
            <p style="color: white; font-size: 24px; font-weight: 800; margin-bottom: 2px;">7–20 Uhr</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Räumpflicht werktags</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 24px; font-weight: 800; margin-bottom: 2px;">1,0–1,2 m</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Mindestbreite Gehweg</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 24px; font-weight: 800; margin-bottom: 2px;">BGH 2025</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Neues Haftungsurteil</p>
          </div>
        </div>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Wenn Schnee und Eis die Wege bedecken, beginnt für Eigentümer von Gewerbeimmobilien die Zeit der erhöhten Wachsamkeit. Die Verantwortung für den <a href="/leistungen/winterdienst" style="color: #109387; font-weight: 700;">Winterdienst</a> ergibt sich in Bayern primär aus dem <strong style="font-weight: 800; color: #012956;">Bayerischen Straßen- und Wegegesetz (BayStrWG)</strong>, welches die Gemeinden ermächtigt, die Räum- und Streupflicht per Satzung auf die Anlieger zu übertragen.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Wann, wo und wie muss geräumt werden?</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Die genauen Anforderungen werden lokal festgelegt, folgen aber allgemeinen Grundsätzen:</p>

      <!-- Anforderungen Cards -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 24px 0;">
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Zeiten</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Werktags ca. 7:00–20:00 Uhr, Sonn-/Feiertage oft später.</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Frequenz</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Unmittelbar nach Schneefall/Glätte – so oft wie nötig wiederholen.</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Umfang</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Gehwege, Zugänge, Parkplätze, Zufahrten – Breite 1,0–1,2 m freihalten.</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Streumittel</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Salz oft verboten – abstumpfende Mittel wie Sand oder Splitt nutzen.</p>
        </div>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Haftung und Delegation: Das BGH-Urteil vom August 2025</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Viele Unternehmen übertragen den Winterdienst an externe Dienstleister. Dies ist zulässig, doch die Haftungsfrage wurde durch ein wegweisendes Urteil des <strong style="font-weight: 800; color: #012956;">Bundesgerichtshofs (BGH, Urteil vom 6. August 2025, Az. VIII ZR 250/23)</strong> nochmals präzisiert.</p>

      <!-- BGH Urteil Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 24px; margin: 24px 0;">
        <p style="color: #109387; font-size: 13px; font-weight: 800; margin-bottom: 12px;">⚖️ Kernaussage des BGH-Urteils</p>
        <p style="color: white; font-size: 15px; font-weight: 600; line-height: 1.7;">Ein Immobilieneigentümer haftet für Sturzschäden bei Eisglätte, <strong style="font-weight: 800;">selbst wenn ein professioneller Hausmeisterdienst beauftragt war</strong>. Der Dienstleister gilt als „Erfüllungsgehilfe" – seine Versäumnisse werden dem Eigentümer zugerechnet.</p>
      </div>

      <!-- Konsequenzen -->
      <div style="background: #f8f9fa; border-radius: 6px; padding: 20px; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid #e5e7eb;">
              <th style="text-align: left; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Konsequenz</th>
              <th style="text-align: left; padding: 10px 14px; color: #012956; font-weight: 800; font-size: 14px;">Was Sie beachten müssen</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 800; font-size: 14px; color: #109387;">Sorgfältige Auswahl</td>
              <td style="padding: 10px 14px; color: #374151; font-weight: 600; font-size: 14px;">Nur zuverlässige, professionelle Dienstleister beauftragen</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 800; font-size: 14px; color: #109387;">Dokumentation</td>
              <td style="padding: 10px 14px; color: #374151; font-weight: 600; font-size: 14px;">Lückenlose Protokollierung aller Einsätze fordern</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: 800; font-size: 14px; color: #109387;">Versicherung</td>
              <td style="padding: 10px 14px; color: #374151; font-weight: 600; font-size: 14px;">Ausreichenden Versicherungsschutz des Dienstleisters prüfen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- FIMI Highlight Box -->
      <div style="background: linear-gradient(135deg, #109387 0%, #0d7d72 100%); border-radius: 6px; padding: 24px 28px; margin: 28px 0;">
        <p style="color: white; font-size: 17px; font-weight: 800; margin-bottom: 10px;">Professioneller Winterdienst für Ihr Unternehmen</p>
        <p style="color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 600; line-height: 1.8;">Gehen Sie auf Nummer sicher. FIMI bietet zuverlässigen Winterdienst für Gewerbeimmobilien in <a href="/kontakt" style="color: white; font-weight: 800; text-decoration: underline;">ganz Bayern</a>. Wir kennen die lokalen Satzungen, setzen umweltfreundliche Streumittel ein und dokumentieren unsere Einsätze lückenlos – um Ihr Haftungsrisiko zu minimieren.</p>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Weiterführende Informationen</h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://www.lto.de/recht/nachrichten/n/viiizr25023-bgh-winterdienst-mietwohnung-sturz-weg" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">LTO – BGH-Urteil zur Winterdienst-Haftung →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Analyse des Urteils VIII ZR 250/23 zur Haftung bei Delegation</p>
        </li>
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://www.freistaat.bayern/dokumente/leistung/68331805329" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">BayernPortal – Winterdienst Informationen →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Gesetzliche Grundlagen nach BayStrWG</p>
        </li>
        <li style="padding: 12px 0;">
          <a href="https://www.vkb.de/content/versicherungen/haus-wohnen/ratgeber-haus-wohnen/raeumpflichten-laub-schnee/" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">VKB – Ratgeber Räum- und Streupflicht →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Praktische Tipps zu Umfang und Durchführung</p>
        </li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=800&auto=format&fit=crop',
    category: 'tipps',
    author: 'FIMI Team',
    date: '2025-11-14',
    readTime: 5,
    sources: [
      'https://www.lto.de/recht/nachrichten/n/viiizr25023-bgh-winterdienst-mietwohnung-sturz-weg',
      'https://www.freistaat.bayern/dokumente/leistung/68331805329',
      'https://www.vkb.de/content/versicherungen/haus-wohnen/ratgeber-haus-wohnen/raeumpflichten-laub-schnee/'
    ]
  },
  // PROJEKT (3)
  {
    id: '7',
    slug: 'praxisreinigung-rki-krinko-richtlinien-hygiene-gesundheitswesen',
    title: 'Praxisreinigung nach RKI/KRINKO-Richtlinien: Hygiene im Gesundheitswesen',
    excerpt: 'Im Gesundheitswesen ist Hygiene die erste Verteidigungslinie gegen Infektionen. Die Kommission für Krankenhaushygiene und Infektionsprävention (KRINKO) beim RKI definiert die Standards für die Reinigung und Desinfektion von Flächen, die 2022 umfassend aktualisiert wurden.',
    content: `
      <!-- Key Facts Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 24px 28px; margin-bottom: 32px;">
        <p style="color: #109387; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;">Das Wichtigste auf einen Blick</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">KRINKO</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Richtlinie Oktober 2022</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">Täglich</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Flächendesinfektion</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">IfSG § 23</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Hygieneplan-Pflicht</p>
          </div>
        </div>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Die Sicherheit von Patienten und Personal hat in Arztpraxen und Kliniken oberste Priorität. Eine fachgerechte <a href="/leistungen/unterhaltsreinigung" style="color: #109387; font-weight: 700;">Reinigung</a> und Desinfektion ist unerlässlich, um nosokomiale Infektionen zu verhindern. Die Grundlage hierfür bilden die Empfehlungen der <strong style="font-weight: 800; color: #012956;">KRINKO</strong>, insbesondere die im Oktober 2022 aktualisierte Richtlinie "Anforderungen an die Hygiene bei der Reinigung und Desinfektion von Flächen".</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Risikobewertung als Ausgangspunkt</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Nicht jede Fläche birgt das gleiche Infektionsrisiko. Die KRINKO-Empfehlung betont die Notwendigkeit einer differenzierten <strong style="font-weight: 800; color: #012956;">Risikobewertung</strong>:</p>

      <!-- Risikobewertung Cards -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 24px 0;">
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Patientennahe Flächen</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Flächen mit häufigem Kontakt: Untersuchungsstühle, Türgriffe im Behandlungsraum, Sanitäranlagen</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Patientenferne Flächen</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Flächen ohne häufigen Handkontakt: Fußböden außerhalb von Risikobereichen, Lagerbereiche</p>
        </div>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Diese Einteilung bestimmt die Frequenz und die Methode der Hygienemaßnahmen.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Die Neuerungen der KRINKO 2022</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Die Aktualisierung der Richtlinie hat wichtige Punkte präzisiert:</p>

      <!-- KRINKO Neuerungen Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 24px; margin: 24px 0;">
        <p style="color: #109387; font-size: 13px; font-weight: 800; margin-bottom: 12px;">📋 Zentrale Änderung</p>
        <p style="color: white; font-size: 15px; font-weight: 600; line-height: 1.7;">Mindestens <strong style="font-weight: 800;">„nutzungstägliche" Flächendesinfektion</strong> der patientennahen bzw. häufig berührten Flächen. Eine reine "Sichtreinigung" an Wochenenden ist in diesen Bereichen nicht mehr ausreichend.</p>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Zudem gibt es Empfehlungen zur Vermeidung von Resistenzentwicklungen, etwa beim Einsatz von quartären Ammoniumverbindungen (QAV).</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Reinigung vs. Desinfektion</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Eine routinemäßige Flächendesinfektion ist nicht überall erforderlich. Die KRINKO empfiehlt eine <strong style="font-weight: 800; color: #012956;">indikationsgerechte desinfizierende Flächenreinigung</strong>.</p>

      <!-- Desinfektion Tabelle -->
      <div style="background: #f8f9fa; border-radius: 6px; padding: 20px; margin: 20px 0;">
        <p style="color: #012956; font-weight: 800; font-size: 14px; margin-bottom: 12px;">Desinfektion ist zwingend erforderlich bei:</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 800; font-size: 14px; color: #109387; width: 40px;">✓</td>
              <td style="padding: 10px 14px; color: #374151; font-weight: 600; font-size: 14px;">Sichtbarer Kontamination mit potenziell infektiösem Material (Blut, Sekrete)</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 800; font-size: 14px; color: #109387;">✓</td>
              <td style="padding: 10px 14px; color: #374151; font-weight: 600; font-size: 14px;">Flächen für aseptische Tätigkeiten (z.B. Vorbereitung von Injektionen)</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: 800; font-size: 14px; color: #109387;">✓</td>
              <td style="padding: 10px 14px; color: #374151; font-weight: 600; font-size: 14px;">Bereiche mit erhöhtem Infektionsrisiko (z.B. OP-Säle)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">In vielen anderen Bereichen (z.B. Flure, Büros) ist eine qualitativ hochwertige Reinigung ausreichend.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Der individuelle Hygieneplan</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Jede medizinische Einrichtung ist gesetzlich verpflichtet (<strong style="font-weight: 800; color: #012956;">Infektionsschutzgesetz, IfSG § 23</strong>), einen individuellen Hygieneplan zu erstellen. Dieser Plan legt fest: <strong style="font-weight: 800; color: #012956;">Wer</strong> reinigt <strong style="font-weight: 800; color: #012956;">was</strong>, <strong style="font-weight: 800; color: #012956;">wann</strong>, <strong style="font-weight: 800; color: #012956;">womit</strong> und <strong style="font-weight: 800; color: #012956;">wie</strong>.</p>

      <!-- FIMI Highlight Box -->
      <div style="background: linear-gradient(135deg, #109387 0%, #0d7d72 100%); border-radius: 6px; padding: 24px 28px; margin: 28px 0;">
        <p style="color: white; font-size: 17px; font-weight: 800; margin-bottom: 10px;">Ihr Spezialist für medizinische Einrichtungen</p>
        <p style="color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 600; line-height: 1.8;">Die Umsetzung dieser komplexen Anforderungen erfordert spezialisiertes Wissen und geschultes Personal. FIMI Gebäudereinigung ist Ihr Spezialist für die <a href="/branchen/gesundheitswesen" style="color: white; font-weight: 800; text-decoration: underline;">Reinigung medizinischer Einrichtungen</a> in Bayern. Wir kennen die Anforderungen von RKI und KRINKO im Detail und unterstützen Praxen und Kliniken in <a href="/kontakt" style="color: white; font-weight: 800; text-decoration: underline;">München, Landshut und Umgebung</a> bei der Umsetzung rechtskonformer Hygienekonzepte.</p>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Weiterführende Informationen</h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://www.rki.de/DE/Themen/Infektionskrankheiten/Krankenhaushygiene/KRINKO/Empfehlungen-der-KRINKO/Basishygiene/Downloads/Flaeche_Rili.pdf?__blob=publicationFile" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">KRINKO – Flächenhygiene-Richtlinie 2022 (PDF) →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Zentrale Richtlinie des RKI zur Reinigung und Desinfektion von Flächen</p>
        </li>
        <li style="padding: 12px 0;">
          <a href="https://www.krankenhaushygiene.de/pdfdata/DGKH_Leitfaden%20Hausarztpraxis_HM_24_online%20vorab.pdf" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">DGKH – Leitfaden Hygienemanagement Arztpraxis (PDF) →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Praktischer Leitfaden der Deutschen Gesellschaft für Krankenhaushygiene</p>
        </li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    category: 'projekt',
    author: 'FIMI Team',
    date: '2025-04-08',
    readTime: 5,
    sources: [
      'https://www.rki.de/DE/Themen/Infektionskrankheiten/Krankenhaushygiene/KRINKO/Empfehlungen-der-KRINKO/Basishygiene/Downloads/Flaeche_Rili.pdf?__blob=publicationFile',
      'https://www.krankenhaushygiene.de/pdfdata/DGKH_Leitfaden%20Hausarztpraxis_HM_24_online%20vorab.pdf'
    ]
  },
  {
    id: '8',
    slug: 'industriereinigung-arbeitssicherheit-dguv-gefahrstoffv',
    title: 'Industriereinigung: Arbeitssicherheit und Gefahrstoffmanagement im Fokus',
    excerpt: 'Die Reinigung von Produktionsanlagen und Maschinen stellt hohe Anforderungen an die Arbeitssicherheit. Der Umgang mit spezialisierten Chemikalien erfordert die strikte Einhaltung der Gefahrstoffverordnung und der DGUV-Vorschriften, insbesondere hinsichtlich PSA und Explosionsschutz.',
    content: `
      <!-- Key Facts Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 24px 28px; margin-bottom: 32px;">
        <p style="color: #109387; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;">Sicherheit in der Industriereinigung</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">GefStoffV</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Gefahrstoffverordnung</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">DGUV</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">209-088 Explosionsschutz</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">PSA</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Schutzausrüstung Pflicht</p>
          </div>
        </div>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;"><a href="/leistungen/industriereinigung" style="color: #109387; font-weight: 700;">Industriereinigung</a> ist essenziell für die Aufrechterhaltung der Produktion und die Langlebigkeit von Maschinen. Reinigungskräfte sind hier oft mit hartnäckigen Verschmutzungen wie Ölen, Fetten oder Chemikalienrückständen konfrontiert. Dies erfordert spezielle Verfahren und ein konsequentes <strong style="font-weight: 800; color: #012956;">Sicherheitsmanagement</strong>.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Die Gefahrstoffverordnung (GefStoffV) als Grundlage</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Bei der Industriereinigung kommen häufig aggressive oder spezialisierte Chemikalien zum Einsatz. Die <strong style="font-weight: 800; color: #012956;">Gefahrstoffverordnung (GefStoffV)</strong> regelt den Schutz der Beschäftigten.</p>

      <!-- GefStoffV Pflichten -->
      <div style="background: #f8f9fa; border-radius: 6px; padding: 20px; margin: 20px 0;">
        <p style="color: #012956; font-weight: 800; font-size: 14px; margin-bottom: 12px;">Zentrale Pflichten für den Arbeitgeber:</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 800; font-size: 14px; color: #109387; width: 180px;">Gefährdungsbeurteilung</td>
              <td style="padding: 10px 14px; color: #374151; font-weight: 600; font-size: 14px;">Ermittlung und Bewertung aller potenziellen Gefahren</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 800; font-size: 14px; color: #109387;">Sicherheitsdatenblätter</td>
              <td style="padding: 10px 14px; color: #374151; font-weight: 600; font-size: 14px;">Bereitstellung aktueller Informationen und regelmäßige Unterweisung</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: 800; font-size: 14px; color: #109387;">Expositionsminimierung</td>
              <td style="padding: 10px 14px; color: #374151; font-weight: 600; font-size: 14px;">Maßnahmen zur Begrenzung der Dauer und Höhe der Exposition (§8 GefStoffV)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Brand- und Explosionsschutz (DGUV 209-088)</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Viele in der Industrie eingesetzte Reiniger, insbesondere <strong style="font-weight: 800; color: #012956;">Kaltreiniger oder Lösemittel</strong>, sind entzündbar. Ihre Dämpfe können explosionsfähige Atmosphären bilden.</p>

      <!-- Explosionsschutz Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 24px; margin: 24px 0;">
        <p style="color: #109387; font-size: 13px; font-weight: 800; margin-bottom: 12px;">⚠️ DGUV Information 209-088</p>
        <p style="color: white; font-size: 15px; font-weight: 600; line-height: 1.7;">Wenn ein relevantes Explosionsrisiko besteht, müssen <strong style="font-weight: 800;">Explosionsschutzzonen (Ex-Zonen)</strong> definiert und entsprechende Arbeitsmittel (z.B. explosionsgeschützte Sauger) verwendet werden.</p>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Persönliche Schutzausrüstung (PSA)</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Technische und organisatorische Maßnahmen haben immer Vorrang (<strong style="font-weight: 800; color: #012956;">TOP-Prinzip</strong>). Dennoch ist die richtige Persönliche Schutzausrüstung in der Industriereinigung unverzichtbar.</p>

      <!-- PSA Cards -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 24px 0;">
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Handschutz</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Flüssigkeitsdichte, chemikalienbeständige Schutzhandschuhe (z.B. Nitril)</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Augenschutz</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Dichtschließende Korbbrillen bei Spritzgefahr</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Körperschutz</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Geschlossene Arbeitskleidung und Sicherheitsschuhe</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Atemschutz</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Bei unzureichender Lüftung oder Einsatz von Aerosolen</p>
        </div>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Die Reinigung von kontaminierter PSA muss ebenfalls streng nach GefStoffV erfolgen.</p>

      <!-- FIMI Highlight Box -->
      <div style="background: linear-gradient(135deg, #109387 0%, #0d7d72 100%); border-radius: 6px; padding: 24px 28px; margin: 28px 0;">
        <p style="color: white; font-size: 17px; font-weight: 800; margin-bottom: 10px;">Professionelle Industriereinigung für Ihren Betrieb</p>
        <p style="color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 600; line-height: 1.8;">Die Industriereinigung erfordert spezialisierte Fachkräfte. FIMI Gebäudereinigung bietet professionelle <a href="/branchen/industrie-produktion" style="color: white; font-weight: 800; text-decoration: underline;">Industriedienstleistungen</a> für Betriebe in Bayern. Unsere geschulten Teams arbeiten streng nach den Vorgaben von DGUV und GefStoffV, um maximale Sicherheit und optimale Reinigungsergebnisse in Ihrer Produktion in <a href="/kontakt" style="color: white; font-weight: 800; text-decoration: underline;">Ingolstadt, Straubing oder Erding</a> zu gewährleisten.</p>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Weiterführende Informationen</h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://medien.bgetem.de/medienportal/artikel/MjA5LTA4OA--" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">DGUV 209-088 – Reinigen von Werkstücken (BG ETEM) →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Informationen zu Brand- und Explosionsschutz bei der Industriereinigung</p>
        </li>
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://publikationen.dguv.de/widgets/pdf/download/article/3365" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">DGUV Regel 101-605 – Branche Gebäudereinigung (PDF) →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Umfassende Regel zum Arbeitsschutz in der Gebäudereinigung</p>
        </li>
        <li style="padding: 12px 0;">
          <a href="https://www.bghm.de/arbeitsschuetzer/praxishilfen/arbeitsschutz-kompakt/015-reinigen-von-werkstuecken" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">BGHM – Arbeitsschutz Kompakt: Werkstückreinigung →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Praktische Hinweise zu Schutzmaßnahmen und PSA</p>
        </li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop',
    category: 'projekt',
    author: 'FIMI Team',
    date: '2024-02-28',
    readTime: 5,
    sources: [
      'https://medien.bgetem.de/medienportal/artikel/MjA5LTA4OA--',
      'https://publikationen.dguv.de/widgets/pdf/download/article/3365',
      'https://www.bghm.de/arbeitsschuetzer/praxishilfen/arbeitsschutz-kompakt/015-reinigen-von-werkstuecken'
    ]
  },
  {
    id: '9',
    slug: 'schulreinigung-bayern-rahmenhygieneplan-hygienestandards',
    title: 'Hygiene in Schulen: Anforderungen des Bayerischen Rahmenhygieneplans',
    excerpt: 'Ein sauberes Umfeld ist entscheidend für die Gesundheit von Schülern und Lehrkräften. Der Rahmenhygieneplan des Bayerischen Kultusministeriums definiert die Standards für die Schulreinigung, wobei der Fokus klar auf gründlicher Reinigung statt routinemäßiger Desinfektion liegt.',
    content: `
      <!-- Key Facts Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 24px 28px; margin-bottom: 32px;">
        <p style="color: #109387; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;">Schulhygiene in Bayern</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">RHP</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Rahmenhygieneplan</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">RKI</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">Reinigung statt Desinfektion</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 2px;">DIN</p>
            <p style="color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 700;">77400 Schulgebäude</p>
          </div>
        </div>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Schulen sind Orte, an denen täglich viele Menschen zusammenkommen, was die Übertragung von Krankheitserregern begünstigt. In Bayern bildet der <strong style="font-weight: 800; color: #012956;">Rahmenhygieneplan</strong> die Grundlage für die Infektionsprävention an Schulen. Er legt innerbetriebliche Verfahrensweisen zur Einhaltung der Infektionshygiene fest.</p>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Kernpunkte des Bayerischen Rahmenhygieneplans</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Der Plan umfasst verschiedene Bereiche, wobei die persönliche Hygiene, die Raumlüftung und die <a href="/leistungen/unterhaltsreinigung" style="color: #109387; font-weight: 700;">Gebäudereinigung</a> im Mittelpunkt stehen:</p>

      <!-- Kernpunkte Cards -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 24px 0;">
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Persönliche Hygiene</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Händewaschen 20-30 Sek. mit Seife, Flüssigseife & Einmalhandtücher</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Raumlüftung</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Regelmäßiges Stoßlüften der Klassenräume für gute Luftqualität</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Reinigung</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Kontinuierliche, planmäßige Reinigung als Hygiene-Voraussetzung</p>
        </div>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Reinigung statt Desinfektion: Die RKI-Linie</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Ein wichtiger Grundsatz folgt den Empfehlungen des <strong style="font-weight: 800; color: #012956;">Robert Koch-Instituts (RKI)</strong>:</p>

      <!-- RKI Highlight Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 6px; padding: 24px; margin: 24px 0;">
        <p style="color: #109387; font-size: 13px; font-weight: 800; margin-bottom: 12px;">🏫 RKI-Empfehlung für Schulen</p>
        <p style="color: white; font-size: 15px; font-weight: 600; line-height: 1.7;">Eine <strong style="font-weight: 800;">routinemäßige Flächendesinfektion wird in Schulen ausdrücklich nicht empfohlen</strong>. Die angemessene, regelmäßige Reinigung von Oberflächen ist ausreichend. Durch die mechanische Entfernung von Schmutz wird die Keimlast effektiv reduziert.</p>
      </div>

      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Der unnötige Einsatz von Desinfektionsmitteln belastet die Umwelt und die Gesundheit. Eine gezielte Desinfektion ist nur in <strong style="font-weight: 800; color: #012956;">Ausnahmefällen</strong> notwendig:</p>

      <!-- Ausnahmen Tabelle -->
      <div style="background: #f8f9fa; border-radius: 6px; padding: 20px; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 14px; font-weight: 800; font-size: 14px; color: #109387; width: 40px;">✓</td>
              <td style="padding: 10px 14px; color: #374151; font-weight: 600; font-size: 14px;">Kontamination mit Blut, Erbrochenem oder Stuhl</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: 800; font-size: 14px; color: #109387;">✓</td>
              <td style="padding: 10px 14px; color: #374151; font-weight: 600; font-size: 14px;">Auf Anweisung des Gesundheitsamtes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Anforderungen an die professionelle Schulreinigung</h3>
      <p style="font-weight: 600; color: #374151; line-height: 1.8;">Die Schulreinigung muss sicherstellen, dass die Vorgaben des Hygieneplans (und der <strong style="font-weight: 800; color: #012956;">DIN 77400</strong> für Schulgebäude) umgesetzt werden:</p>

      <!-- Reinigungsfokus Cards -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 24px 0;">
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Handkontaktflächen</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Türklinken, Lichtschalter, Treppenhandläufe, Tische – regelmäßige Reinigung</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Sanitärbereiche</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Toiletten und Handwaschbecken erfordern tägliche Reinigung</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Bodenreinigung</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Flure und Klassenzimmer müssen regelmäßig feucht gewischt werden</p>
        </div>
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%); border-radius: 6px; padding: 20px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
          <p style="color: #109387; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Farbsystem</p>
          <p style="color: #012956; font-size: 14px; font-weight: 700; line-height: 1.4;">Rot für WC, Gelb für Sanitär-Oberflächen – gegen Keimverschleppung</p>
        </div>
      </div>

      <!-- FIMI Highlight Box -->
      <div style="background: linear-gradient(135deg, #109387 0%, #0d7d72 100%); border-radius: 6px; padding: 24px 28px; margin: 28px 0;">
        <p style="color: white; font-size: 17px; font-weight: 800; margin-bottom: 10px;">Ihr Partner für Schulreinigung in Bayern</p>
        <p style="color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 600; line-height: 1.8;">Die Umsetzung des Rahmenhygieneplans ist eine Gemeinschaftsaufgabe. FIMI Gebäudereinigung ist ein erfahrener Partner für die Schulreinigung in Bayern. Wir kennen die spezifischen Anforderungen in <a href="/kontakt" style="color: white; font-weight: 800; text-decoration: underline;">Landshut, Regensburg, Passau und München</a> und sorgen für eine zuverlässige Reinigung gemäß den bayerischen Vorgaben.</p>
      </div>

      <h3 style="font-size: 20px; font-weight: 800; color: #012956; margin-top: 32px; margin-bottom: 16px;">Weiterführende Informationen</h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="https://www.stmgp.bayern.de/meine-themen/fuer-schulen-und-kitas/" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">StMGP Bayern – Hygiene an Schulen und Kitas →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Überblick des Bayerischen Gesundheitsministeriums</p>
        </li>
        <li style="padding: 12px 0;">
          <a href="https://www.gesetze-bayern.de/Content/Document/BayVwV96841-12" target="_blank" rel="noopener noreferrer" style="color: #109387; font-weight: 700; text-decoration: none;">Bayern.Recht – Muster-Hygieneplan für Schulen →</a>
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-top: 4px;">Detaillierte Anlage mit Reinigungsintervallen und -methoden</p>
        </li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
    category: 'projekt',
    author: 'FIMI Team',
    date: '2023-12-12',
    readTime: 5,
    sources: [
      'https://www.stmgp.bayern.de/meine-themen/fuer-schulen-und-kitas/',
      'https://www.gesetze-bayern.de/Content/Document/BayVwV96841-12'
    ]
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
