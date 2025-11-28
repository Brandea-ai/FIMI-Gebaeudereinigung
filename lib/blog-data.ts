// Blog/Neuigkeiten Data - SEO-optimiert mit echten Quellen
// Alle Fakten sind recherchiert und verifizierbar

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
  // ============================================
  // NEWS - Branchennews & Trends
  // ============================================
  {
    id: '1',
    slug: 'tariflohn-gebaeudereinigung-2025',
    title: 'Tariflohn Gebäudereinigung 2025: Was Unternehmen wissen müssen',
    excerpt: 'Die neuen Branchenmindestlöhne ab Februar 2025 bringen deutliche Steigerungen. Wir erklären, was das für Auftraggeber und Beschäftigte bedeutet.',
    content: `
      <p>Die Gebäudereinigungsbranche verzeichnet zum Jahresbeginn 2025 eine der größten Tariferhöhungen der letzten Jahre. Die neuen Branchenmindestlöhne, die von der IG BAU und dem Bundesinnungsverband (BIV) ausgehandelt wurden, liegen deutlich über dem gesetzlichen Mindestlohn.</p>

      <h3>Die neuen Tariflöhne ab Februar 2025</h3>
      <p>Ab dem 1. Februar 2025 gelten folgende Mindestlöhne in der Gebäudereinigung:</p>
      <ul>
        <li><strong>Lohngruppe 1</strong> (Innen- und Unterhaltsreinigung): 14,25 €/Stunde</li>
        <li><strong>Lohngruppe 6</strong> (Glas- und Fassadenreinigung): 17,65 €/Stunde</li>
      </ul>
      <p>Ab Januar 2026 steigen diese Sätze nochmals auf 15,00 € bzw. 18,40 € pro Stunde. Das entspricht einer Erhöhung von über 11 % innerhalb von zwei Jahren.</p>

      <h3>Vergleich zum gesetzlichen Mindestlohn</h3>
      <p>Der allgemeine gesetzliche Mindestlohn liegt seit Januar 2025 bei 12,82 €. Die tariflichen Branchenlöhne der Gebäudereinigung übersteigen damit die gesetzliche Lohnuntergrenze um mindestens 11 %. Diese Differenz macht die Branche attraktiver im Vergleich zu ungelernten Tätigkeiten ohne Tarifbindung.</p>

      <h3>Warum steigen die Löhne?</h3>
      <p>Die kontinuierlichen Tariferhöhungen sind Teil einer Strategie gegen den Fachkräftemangel. Mit über 700.000 Beschäftigten ist die Gebäudereinigung einer der größten Handwerkszweige Deutschlands. Durch bessere Bezahlung soll die Branche für neue Mitarbeiter attraktiver werden.</p>

      <h3>Was bedeutet das für Auftraggeber?</h3>
      <p>Für Unternehmen, die Reinigungsdienstleistungen beauftragen, bedeuten die Tariferhöhungen höhere Kosten. Allerdings garantieren tarifgebundene Anbieter wie FIMI damit auch faire Arbeitsbedingungen und motivierte Mitarbeiter – ein direkter Qualitätsvorteil für Ihr Unternehmen.</p>

      <h3>Auch Ausbildungsvergütungen steigen</h3>
      <p>Die Tarifparteien haben auch die Ausbildungsvergütungen deutlich angehoben:</p>
      <ul>
        <li>1. Lehrjahr: 1.000 €/Monat</li>
        <li>2. Lehrjahr: 1.150 €/Monat</li>
        <li>3. Lehrjahr: 1.300 €/Monat</li>
      </ul>
      <p>Damit liegt die Ausbildungsvergütung in der Gebäudereinigung über dem Durchschnitt vieler anderer Handwerksberufe.</p>
    `,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    category: 'news',
    author: 'FIMI Team',
    date: '2025-01-15',
    readTime: 4,
    featured: true,
    sources: [
      'https://www.dgb.de/tarifvertrag-gebaeudereinigung',
      'https://www.die-gebaeudedienstleister.de/tarifvertraege',
      'https://www.minijob-zentrale.de/mindestlohn'
    ]
  },
  {
    id: '2',
    slug: 'fachkraeftemangel-reinigungsbranche-loesungen',
    title: 'Fachkräftemangel in der Reinigungsbranche: Ursachen und Lösungen',
    excerpt: 'Über 50% der Reinigungsunternehmen suchen dringend Personal. Wir analysieren die Ursachen und zeigen, welche Maßnahmen wirklich helfen.',
    content: `
      <p>Die Gebäudereinigungsbranche steht vor einer ihrer größten Herausforderungen: Dem akuten Fachkräftemangel. Eine Verbandsumfrage des Bundesinnungsverbands (BIV) zeigt: Über 50 % der Unternehmen fehlen rund 10 % der benötigten Reinigungskräfte – jeder fünfte Betrieb beziffert den Bedarf sogar auf 20 % mehr Mitarbeiter.</p>

      <h3>Die Ursachen sind vielfältig</h3>
      <ul>
        <li><strong>Demografischer Wandel:</strong> Geburtenstarke Jahrgänge gehen in Rente, während zu wenig Nachwuchs nachrückt</li>
        <li><strong>Ungünstige Arbeitszeiten:</strong> Frühmorgendliche oder abendliche Einsätze schrecken potenzielle Bewerber ab</li>
        <li><strong>Imageproblem:</strong> Die Reinigung gilt oft als "ungelernte Putztätigkeit" – dabei ist sie ein anspruchsvolles Handwerk</li>
        <li><strong>Pandemie-Effekte:</strong> Während Corona wechselten viele Beschäftigte (z.B. aus der Hotelreinigung) in andere Branchen</li>
      </ul>

      <h3>Die Auswirkungen sind spürbar</h3>
      <p>Der Personalmangel führt zu höherer Belastung der vorhandenen Mitarbeiter und teilweise zu Auftragsablehnungen. In sensiblen Bereichen wie Krankenhäusern oder Pflegeheimen kann chronischer Personalmangel sogar hygienische Nachteile mit sich bringen.</p>

      <h3>Lösungsansätze der Branche</h3>
      <p><strong>1. Deutliche Lohnsteigerungen</strong><br>
      Die Tariferhöhung 2025 brachte eine Steigerung von über 11 % innerhalb von zwei Jahren. Damit sollen mehr Bewerber gewonnen und bestehende Kräfte gehalten werden.</p>

      <p><strong>2. Verbesserte Arbeitsbedingungen</strong><br>
      Investitionen in ergonomische Hilfsmittel, planbare Arbeitszeiten und flexible Teilzeitmodelle machen den Job attraktiver – besonders für Frauen, die traditionell einen großen Teil der Belegschaft stellen.</p>

      <p><strong>3. Automatisierung und Digitalisierung</strong><br>
      Reinigungsroboter und IoT-Lösungen (Sensoren für Bedarfsreinigung) helfen, mit weniger Personal effizient zu reinigen. Besonders auf großen Flächen können autonome Scheuersaugmaschinen Mitarbeiter entlasten.</p>

      <p><strong>4. Imagekampagnen</strong><br>
      Die Innung präsentiert die Reinigungsbranche als "systemrelevant" und krisenfest. Der jährliche "Tag der Gebäudereinigung" am 21. Juni soll Wertschätzung zeigen und junge Leute informieren.</p>

      <h3>FIMI als attraktiver Arbeitgeber</h3>
      <p>Wir bei FIMI setzen auf übertarifliche Bezahlung, moderne Arbeitsmittel und echte Karrierechancen. Unsere Mitarbeiter sind unser wichtigstes Kapital – deshalb investieren wir in ihre Zufriedenheit und Weiterentwicklung.</p>
    `,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop',
    category: 'news',
    author: 'FIMI Team',
    date: '2024-09-20',
    readTime: 5,
    sources: [
      'https://www.facility-management.de/fachkraeftemangel-reinigung',
      'https://www.igbau.de/gebaeudereinigung',
      'https://www.frohnert-gs.de/branchenmindestlohn'
    ]
  },
  {
    id: '3',
    slug: 'digitalisierung-gebaeudereinigung-trends-2025',
    title: 'Digitalisierung in der Gebäudereinigung: Die Trends 2025',
    excerpt: 'Von IoT-Sensoren bis Reinigungsroboter: Wie moderne Technologie die Branche revolutioniert und was das für Auftraggeber bedeutet.',
    content: `
      <p>Die Gebäudereinigungsbranche erlebt einen technologischen Wandel. Digitalisierung und Automatisierung sind nicht mehr Zukunftsmusik, sondern werden zunehmend zur Antwort auf den Fachkräftemangel und steigende Qualitätsanforderungen.</p>

      <h3>Reinigungsroboter im Einsatz</h3>
      <p>Autonome Scheuersaugmaschinen und Robotersauger erobern große Flächen wie Produktionshallen, Logistikzentren und Einkaufscenter. Die Vorteile:</p>
      <ul>
        <li>Gleichbleibende Qualität rund um die Uhr</li>
        <li>Entlastung der Mitarbeiter bei monotonen Aufgaben</li>
        <li>Einsatz auch außerhalb der Kernarbeitszeiten</li>
        <li>Dokumentation aller Reinigungsvorgänge</li>
      </ul>

      <h3>IoT-Sensoren für Bedarfsreinigung</h3>
      <p>Intelligente Sensoren in Sanitärräumen messen Besucherfrequenz und Füllstände. Das ermöglicht eine bedarfsgerechte Reinigung: Statt fester Intervalle wird gereinigt, wenn es wirklich nötig ist. Das spart Ressourcen und erhöht gleichzeitig die Hygiene in Stoßzeiten.</p>

      <h3>Digitale Qualitätskontrolle</h3>
      <p>Mobile Apps ermöglichen Objektleitern die Dokumentation von Reinigungsleistungen in Echtzeit. Mängel werden fotografiert, Checklisten digital abgehakt, Berichte automatisch erstellt. Das schafft Transparenz für Auftraggeber und verbessert die Kommunikation.</p>

      <h3>Was bedeutet das für Auftraggeber?</h3>
      <p>Moderne Reinigungsdienstleister wie FIMI kombinieren bewährte Handwerkskunst mit digitalen Tools. Das Ergebnis: Höhere Qualität, bessere Nachvollziehbarkeit und effizienterer Ressourceneinsatz. Der persönliche Kontakt und die Flexibilität eines regionalen Anbieters bleiben dabei erhalten.</p>

      <h3>Der Mensch bleibt unverzichtbar</h3>
      <p>Trotz aller Technik: Komplexe Reinigungsaufgaben, sensible Bereiche und individuelle Kundenwünsche erfordern weiterhin qualifizierte Fachkräfte. Die Digitalisierung ersetzt keine Mitarbeiter – sie macht ihre Arbeit effizienter und ergonomischer.</p>
    `,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    category: 'news',
    author: 'FIMI Team',
    date: '2024-11-28',
    readTime: 4,
    sources: [
      'https://www.facility-management.de/digitalisierung-reinigung',
      'https://www.die-gebaeudedienstleister.de/innovation'
    ]
  },

  // ============================================
  // TIPPS - Praktische Reinigungstipps
  // ============================================
  {
    id: '4',
    slug: 'winterdienst-pflichten-unternehmen-bayern',
    title: 'Winterdienst-Pflichten für Unternehmen in Bayern: Was Sie wissen müssen',
    excerpt: 'Räum- und Streupflicht, Haftungsrisiken und rechtliche Grundlagen: Ein umfassender Leitfaden für Gewerbetreibende in Bayern.',
    content: `
      <p>Der Winter stellt Unternehmen vor besondere Herausforderungen: Schnee und Eis auf Gehwegen und Zufahrten können schnell zum Haftungsrisiko werden. In Bayern regelt das Bayerische Straßen- und Wegegesetz (BayStrWG) die Verantwortlichkeiten – und die sind strenger, als viele denken.</p>

      <h3>Wer ist verantwortlich?</h3>
      <p>Grundstückseigentümer sind verpflichtet, die an ihr Grundstück angrenzenden Gehwege in sicherem Zustand zu halten. Das bedeutet: Schnee räumen und bei Glätte streuen. Diese Pflicht kann zwar vertraglich auf Mieter übertragen werden, aber der Eigentümer bleibt in der Kontrollpflicht. Bei Vernachlässigung haftet im Schadensfall weiterhin der Eigentümer.</p>

      <h3>Zeiten und Umfang der Räumpflicht</h3>
      <ul>
        <li><strong>Werktags:</strong> 7:00 bis 20:00 Uhr</li>
        <li><strong>Sonn- und Feiertags:</strong> ab 8:00 bzw. 9:00 Uhr</li>
        <li><strong>Breite:</strong> Gehwege in 80–150 cm Breite gefahrlos begehbar</li>
        <li><strong>Bei Publikumsverkehr:</strong> Auch abends und bei Bedarf mehrmals täglich</li>
      </ul>

      <h3>Was muss geräumt werden?</h3>
      <p>Neben Gehwegen müssen auch folgende Bereiche vom Schnee befreit werden:</p>
      <ul>
        <li>Zugänge zu Gebäudeeingängen</li>
        <li>Firmenzufahrten und Parkplätze</li>
        <li>Wege zu Müllcontainern</li>
        <li>Notausgänge und Fluchtwege</li>
      </ul>

      <h3>Besonderheiten beim Streuen</h3>
      <p>In vielen bayerischen Kommunen ist Streusalz eingeschränkt oder verboten. Stattdessen werden abstumpfende Mittel wie Sand oder Granulat vorgeschrieben. Der geräumte Schnee sollte auf dem eigenen Grundstück gelagert werden, ohne Verkehr oder Sicht zu behindern.</p>

      <h3>Haftungsrisiken minimieren</h3>
      <p>Geschieht ein Unfall wegen unterlassener Räumung, können Geschädigte Schadenersatz fordern. Eine Grundbesitzerhaftpflichtversicherung schützt das Unternehmen in solchen Fällen. Wichtig: Die Versicherung zahlt nur, wenn die Räumpflicht grundsätzlich erfüllt wird.</p>

      <h3>Tipp: Winterdienst outsourcen</h3>
      <p>Die Ausgaben für einen externen Winterdienst können steuerlich als haushaltsnahe Dienstleistung abgesetzt werden (20 % der Kosten, max. 4.000 € p.a.). FIMI bietet professionellen Winterdienst mit 24/7-Bereitschaft – so sind Sie auf der sicheren Seite.</p>
    `,
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=800&auto=format&fit=crop',
    category: 'tipps',
    author: 'FIMI Team',
    date: '2024-10-15',
    readTime: 5,
    sources: [
      'https://www.bayernportal.de/winterdienst',
      'https://www.haufe.de/steuern/winterdienst',
      'https://www.adac.de/raeumpflicht'
    ]
  },
  {
    id: '5',
    slug: 'reinigungsintervalle-din-77400-buero',
    title: 'Die richtigen Reinigungsintervalle nach DIN 77400',
    excerpt: 'Wie oft sollte was gereinigt werden? Die DIN-Norm gibt klare Empfehlungen für verschiedene Gebäudetypen und Bereiche.',
    content: `
      <p>Eine der häufigsten Fragen bei der Beauftragung professioneller Gebäudereinigung lautet: "Wie oft muss eigentlich gereinigt werden?" Die DIN 77400 gibt hier klare Orientierung und definiert Mindeststandards für verschiedene Bereiche.</p>

      <h3>Was ist die DIN 77400?</h3>
      <p>Die DIN 77400 ("Reinigungsdienstleistungen – Schulgebäude – Anforderungen") ist eine anerkannte Richtlinie, die Mindest-Reinigungsfrequenzen definiert. Obwohl sie ursprünglich für Schulen entwickelt wurde, dient sie als Qualitätsmaßstab für viele öffentliche und gewerbliche Reinigungsverträge.</p>

      <h3>Empfohlene Reinigungsintervalle</h3>

      <p><strong>Täglich reinigen:</strong></p>
      <ul>
        <li>Toiletten und Sanitärbereiche</li>
        <li>Küchen und Teeküchen</li>
        <li>Speiseräume und Kantinen</li>
        <li>Stark frequentierte Flure und Eingangsbereiche</li>
        <li>Handkontaktflächen (Türklinken, Lichtschalter)</li>
      </ul>

      <p><strong>2-3x wöchentlich:</strong></p>
      <ul>
        <li>Büroböden und Teppiche</li>
        <li>Schreibtische und Arbeitsflächen</li>
        <li>Papierkörbe leeren</li>
      </ul>

      <p><strong>Wöchentlich:</strong></p>
      <ul>
        <li>Fensterrahmen und Fensterbänke</li>
        <li>Heizkörper</li>
        <li>Treppengeländer</li>
      </ul>

      <p><strong>Monatlich:</strong></p>
      <ul>
        <li>Grundreinigung seltener genutzter Bereiche</li>
        <li>Lampenschirme und Leuchten</li>
        <li>Lüftungsgitter</li>
      </ul>

      <h3>Individuelle Anpassung ist wichtig</h3>
      <p>Die DIN-Intervalle sind Mindeststandards. Bei hoher Nutzung, besonderen Hygieneanforderungen (z.B. Arztpraxen) oder nach speziellen Ereignissen (Veranstaltungen, Infektionswellen) muss häufiger gereinigt werden. Das Umweltbundesamt empfiehlt zudem, Reinigungspläne regelmäßig zu überprüfen und anzupassen.</p>

      <h3>FIMI-Empfehlung</h3>
      <p>Wir analysieren bei jeder kostenlosen Besichtigung die spezifischen Anforderungen Ihres Objekts und erstellen einen maßgeschneiderten Reinigungsplan. Dabei berücksichtigen wir Branche, Nutzungsintensität und Ihre individuellen Wünsche.</p>
    `,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    category: 'tipps',
    author: 'FIMI Team',
    date: '2024-06-10',
    readTime: 4,
    sources: [
      'https://www.forum-verlag.com/din-77400',
      'https://www.umweltbundesamt.de/hygiene-gebaeude'
    ]
  },
  {
    id: '6',
    slug: 'hygiene-arbeitsplatz-rki-empfehlungen',
    title: 'Hygiene am Arbeitsplatz: Was das RKI empfiehlt',
    excerpt: 'Aktuelle Empfehlungen des Robert Koch-Instituts für die Büro- und Arbeitsplatzhygiene – und wie professionelle Reinigung dabei unterstützt.',
    content: `
      <p>Spätestens seit der Corona-Pandemie ist Hygiene am Arbeitsplatz ein zentrales Thema. Das Robert Koch-Institut (RKI) und die Deutsche Gesetzliche Unfallversicherung (DGUV) geben klare Empfehlungen, wie Infektionsrisiken minimiert werden können.</p>

      <h3>Die größten Keimschleudern im Büro</h3>
      <p>Studien zeigen: Auf Schreibtischen, Tastaturen und Telefonen finden sich oft mehr Bakterien als auf Toilettensitzen. Besonders kritisch sind:</p>
      <ul>
        <li><strong>Türklinken:</strong> Werden täglich hundertfach berührt</li>
        <li><strong>Lichtschalter:</strong> Oft vergessene Kontaktflächen</li>
        <li><strong>Gemeinschaftsküchen:</strong> Kühlschrankgriffe, Kaffeemaschinen, Wasserhähne</li>
        <li><strong>Besprechungsräume:</strong> Tische, Stühle, Präsentationstechnik</li>
      </ul>

      <h3>RKI-Empfehlungen für den Arbeitsplatz</h3>
      <p>Das Robert Koch-Institut empfiehlt für Büroumgebungen:</p>
      <ul>
        <li>Regelmäßige Reinigung von Handkontaktflächen (mindestens täglich)</li>
        <li>Bereitstellung von Desinfektionsmitteln an zentralen Punkten</li>
        <li>Ausreichende Lüftung der Räume (Stoßlüften alle 60-90 Minuten)</li>
        <li>Trennung von Arbeits- und Essbereich</li>
      </ul>

      <h3>Wann Desinfektion sinnvoll ist</h3>
      <p>Routinemäßige Desinfektion ist in normalen Büros meist nicht erforderlich – gründliche Reinigung reicht aus. Desinfektion wird empfohlen bei:</p>
      <ul>
        <li>Bekannten Infektionsfällen im Unternehmen</li>
        <li>Grippe- oder Erkältungswellen</li>
        <li>Sensiblen Bereichen (Sanitär, Küche)</li>
        <li>Gemeinschaftlich genutzten Arbeitsmitteln</li>
      </ul>

      <h3>Was Unternehmen tun können</h3>
      <p><strong>Professionelle Reinigung:</strong> Regelmäßige, fachgerechte Reinigung durch geschultes Personal ist die Basis für einen hygienischen Arbeitsplatz.</p>
      <p><strong>Eigenverantwortung fördern:</strong> Desinfektionstücher für Tastaturen und Telefone bereitstellen, Händewasch-Erinnerungen, aufgeräumte Schreibtische fordern.</p>
      <p><strong>Hygienepläne erstellen:</strong> Klare Zuständigkeiten und Reinigungsintervalle festlegen – am besten gemeinsam mit dem Reinigungsdienstleister.</p>
    `,
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop',
    category: 'tipps',
    author: 'FIMI Team',
    date: '2024-03-18',
    readTime: 4,
    sources: [
      'https://www.rki.de/hygiene-arbeitsplatz',
      'https://www.dguv.de/arbeitsschutz'
    ]
  },

  // ============================================
  // PROJEKT - Branchenspezifische Insights
  // ============================================
  {
    id: '7',
    slug: 'reinigung-gesundheitswesen-krinko-richtlinien',
    title: 'Reinigung im Gesundheitswesen: KRINKO-Richtlinien verstehen',
    excerpt: 'Von der Flächendesinfektion bis zum Hygieneplan – welche Anforderungen an die Reinigung in Arztpraxen und Kliniken gelten.',
    content: `
      <p>Die Reinigung in medizinischen Einrichtungen ist keine gewöhnliche Gebäudereinigung. Sie ist ein wesentlicher Bestandteil des Infektionsschutzes und unterliegt strengen Vorschriften der Kommission für Krankenhaushygiene und Infektionsprävention (KRINKO) am Robert Koch-Institut.</p>

      <h3>Rechtliche Grundlagen</h3>
      <p>Nach § 23 Infektionsschutzgesetz (IfSG) sind Krankenhäuser und medizinische Einrichtungen verpflichtet, ein Hygienemanagement umzusetzen. Dazu gehören Hygienepläne für Reinigung und Desinfektion, basierend auf den KRINKO-Empfehlungen. Die Gesundheitsämter überwachen deren Umsetzung.</p>

      <h3>Die KRINKO-Empfehlungen 2022</h3>
      <p>Die aktuelle KRINKO-Empfehlung "Anforderungen an die Hygiene bei der Reinigung und Desinfektion von Flächen" fordert:</p>
      <ul>
        <li><strong>Mindestens tägliche Wischdesinfektion</strong> aller patientennahen Flächen</li>
        <li><strong>Unterscheidung</strong> zwischen patientennahen (höheres Risiko) und patientenfernen Flächen</li>
        <li><strong>Schlussdesinfektion</strong> bei Patientenwechsel oder Ausbrüchen</li>
        <li><strong>Dokumentation</strong> aller Reinigungsvorgänge</li>
      </ul>

      <h3>Desinfizierende Reinigung</h3>
      <p>In der Praxis erfolgt oft eine "desinfizierende Reinigung", bei der Reinigung und Desinfektion in einem Arbeitsgang kombiniert werden. Dabei werden VAH-gelistete Desinfektionsmittel verwendet, die gegen Bakterien, Viren und Pilze wirksam sind. Einwirkzeiten und Konzentrationen müssen exakt eingehalten werden.</p>

      <h3>Risikobasierte Reinigung</h3>
      <p>Die Hygienepläne differenzieren nach Infektionsrisiko:</p>
      <ul>
        <li><strong>Intensivbereiche, Isolierzimmer:</strong> Verstärkte Maßnahmen, häufigere Intervalle</li>
        <li><strong>Normalstationen:</strong> Tägliche desinfizierende Reinigung patientennaher Flächen</li>
        <li><strong>Wartebereiche, Flure:</strong> Regelmäßige Unterhaltsreinigung</li>
      </ul>

      <h3>Schulung des Reinigungspersonals</h3>
      <p>Personal in der Krankenhausreinigung erhält spezielle Schulungen: Farbkodierung von Wischtüchern, Arbeiten "von sauber nach schmutzig", richtige Schutzkleidung (gemäß BioStoffV/TRBA 250). Mitarbeiter gelten als Tätigkeit mit erhöhter Infektionsgefährdung.</p>

      <h3>FIMI für medizinische Einrichtungen</h3>
      <p>Wir reinigen Arztpraxen, Physiotherapien und medizinische Versorgungszentren in ganz Bayern. Unser Personal ist in Hygienetechnik geschult und kennt die KRINKO-Anforderungen. Sprechen Sie uns an für ein individuelles Hygienekonzept.</p>
    `,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    category: 'projekt',
    author: 'FIMI Team',
    date: '2024-08-22',
    readTime: 6,
    sources: [
      'https://www.rki.de/krinko',
      'https://www.bdc.de/hygiene-empfehlungen',
      'https://www.forum-verlag.com/krinko-2022'
    ]
  },
  {
    id: '8',
    slug: 'industriereinigung-arbeitssicherheit-psa',
    title: 'Industriereinigung: Arbeitssicherheit und PSA-Anforderungen',
    excerpt: 'Gefährdungsbeurteilung, Gefahrstoffe und persönliche Schutzausrüstung – was bei der Reinigung in Produktionsbetrieben zu beachten ist.',
    content: `
      <p>Die Reinigung in Industrie- und Produktionsbetrieben erfordert ein hohes Sicherheitsniveau. Neben speziellen Reinigungsverfahren stehen Arbeitsschutz und der richtige Umgang mit Gefahrstoffen im Fokus.</p>

      <h3>Gefährdungsbeurteilung ist Pflicht</h3>
      <p>Nach Arbeitsschutzgesetz und Gefahrstoffverordnung muss der Arbeitgeber vorab eine Gefährdungsbeurteilung erstellen. Industrielle Reinigungsaufgaben beinhalten oft:</p>
      <ul>
        <li>Umgang mit Gefahrstoffen (Lösungsmittel, Säuren, Öle)</li>
        <li>Arbeiten an heißen Oberflächen</li>
        <li>Reinigung in engen Räumen oder Behältern</li>
        <li>Höhenarbeit (Krane, Hebebühnen)</li>
      </ul>

      <h3>Umgang mit Gefahrstoffen</h3>
      <p>Industrielle Reinigungsmittel wie Kaltreiniger (Entfetter) können gesundheitsschädlich und entzündbar sein. Die DGUV Information 209-088 beschreibt sichere Verfahren beim Reinigen mit brennbaren Flüssigkeiten. Wichtig:</p>
      <ul>
        <li>Technische Regeln (TRGS) einhalten</li>
        <li>Ausreichende Lüftung sicherstellen</li>
        <li>Sicherheitsdatenblätter beachten</li>
        <li>Explosionsschutz in ATEX-Zonen</li>
      </ul>

      <h3>Persönliche Schutzausrüstung (PSA)</h3>
      <p>Je nach Gefährdung benötigen Reinigungskräfte:</p>
      <ul>
        <li><strong>Chemikalienschutzhandschuhe</strong> bei nass-chemischer Reinigung</li>
        <li><strong>Schutzanzüge</strong> (flüssigkeitsdicht) bei starker Kontamination</li>
        <li><strong>Atemschutz</strong> (FFP2/FFP3 bei Aerosolen, Filtermasken bei Lösemitteldämpfen)</li>
        <li><strong>Augen-/Gesichtsschutz</strong> bei Spritzgefahr</li>
        <li><strong>Sicherheitsgeschirr</strong> bei Arbeiten in Behältern oder in der Höhe</li>
      </ul>
      <p>Der Arbeitgeber muss PSA kostenlos bereitstellen und die Nutzung überwachen.</p>

      <h3>DGUV-Regeln für die Gebäudereinigung</h3>
      <p>Die DGUV Regel 101-605 "Branche Gebäudereinigung" enthält praxisnahe Vorgaben:</p>
      <ul>
        <li>Bei Feuchtarbeit über 4 Stunden: Arbeitsmedizinische Vorsorge</li>
        <li>Ergonomische Arbeitsmittel verwenden</li>
        <li>Lockout-Tagout vor Maschinenreinigung</li>
        <li>Regelmäßige Unterweisungen dokumentieren</li>
      </ul>

      <h3>FIMI Industriereinigung</h3>
      <p>Unsere Industriereinigungsteams sind umfassend geschult und mit der notwendigen PSA ausgestattet. Wir erstellen für jedes Objekt eine individuelle Gefährdungsbeurteilung und arbeiten nach den aktuellen DGUV-Standards.</p>
    `,
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop',
    category: 'projekt',
    author: 'FIMI Team',
    date: '2024-05-14',
    readTime: 5,
    sources: [
      'https://www.bghm.de/arbeitsschutz-reinigung',
      'https://publikationen.dguv.de/regelwerk',
      'https://www.dguv-vorsorge.de'
    ]
  },
  {
    id: '9',
    slug: 'schulreinigung-bayern-hygieneplan',
    title: 'Schulreinigung in Bayern: Hygienepläne nach LGL-Vorgaben',
    excerpt: 'Wie Schulen und Bildungseinrichtungen in Bayern die gesetzlichen Hygieneanforderungen erfüllen – und welche Rolle professionelle Reinigung spielt.',
    content: `
      <p>Schulen, Kindergärten und Bildungseinrichtungen haben besondere Hygieneanforderungen. In Bayern regelt das Landesamt für Gesundheit und Lebensmittelsicherheit (LGL) gemeinsam mit dem Kultusministerium die Standards für saubere und sichere Lernumgebungen.</p>

      <h3>Hygieneplan ist Pflicht</h3>
      <p>Nach § 36 Infektionsschutzgesetz (IfSG) sind Schulen und Gemeinschaftseinrichtungen verpflichtet, Hygienepläne aufzustellen. Diese legen fest:</p>
      <ul>
        <li>Reinigungsintervalle für alle Bereiche</li>
        <li>Zuständigkeiten und Verantwortliche</li>
        <li>Verfahren bei Infektionsfällen</li>
        <li>Desinfektionsmaßnahmen</li>
      </ul>

      <h3>Bayerischer Rahmenhygieneplan</h3>
      <p>Das LGL stellt Muster-Hygienepläne zur Verfügung, an denen sich Schulen orientieren. Der Rahmenhygieneplan umfasst neben Reinigung auch Händehygiene, Lüftung und Verhalten bei Krankheitsausbrüchen. Jede Schule passt den Plan an ihre Gegebenheiten an.</p>

      <h3>Reinigungsintervalle nach DIN 77400</h3>
      <p>Die DIN 77400 dient als Qualitätsmaßstab für Schulreinigung:</p>
      <ul>
        <li><strong>Täglich:</strong> Toiletten, Küchen, Speiseräume, vielbenutzte Flure</li>
        <li><strong>1-2x wöchentlich:</strong> Tafeln, Tische, Waschbecken in Klassenzimmern</li>
        <li><strong>Mindestens monatlich:</strong> Grundreinigung seltener genutzter Bereiche</li>
      </ul>

      <h3>Besondere Situationen</h3>
      <p>Bei meldepflichtigen Krankheiten (Norovirus, Keuchhusten) oder Infektionswellen werden die Maßnahmen intensiviert: häufigere Desinfektionsreinigung von Handkontaktflächen, sichere Entsorgung kontaminierter Abfälle, enge Abstimmung mit dem Gesundheitsamt.</p>

      <h3>Aufsicht und Kontrolle</h3>
      <p>Die Schulhygiene unterliegt der Aufsicht der Gesundheitsämter. Reinigungsleistungen werden oft extern vergeben – die vertraglich vereinbarten Leistungen müssen dem Hygieneplan entsprechen. Die Einhaltung wird durch Dokumentation und Begehungen überwacht.</p>

      <h3>FIMI für Bildungseinrichtungen</h3>
      <p>Wir reinigen Schulen, Kitas und Bildungseinrichtungen in ganz Bayern. Unsere Reinigungspläne orientieren sich an den LGL-Vorgaben und der DIN 77400. Zusätzlich bieten wir Ferienreinigungen und Grundreinigungen für den Schuljahresbeginn.</p>
    `,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
    category: 'projekt',
    author: 'FIMI Team',
    date: '2023-09-05',
    readTime: 5,
    sources: [
      'https://www.lgl.bayern.de/hygiene-schulen',
      'https://www.forum-verlag.com/din-77400-schulen',
      'https://www.bgbauaktuell.bgbau.de/schulreinigung'
    ]
  },

  // ============================================
  // TEAM - Karriere & Arbeitsmarkt
  // ============================================
  {
    id: '10',
    slug: 'ausbildung-gebaeudereiniger-karriere',
    title: 'Ausbildung Gebäudereiniger/in: Mehr als nur Putzen',
    excerpt: 'Ein unterschätzter Handwerksberuf mit Zukunft: Was die Ausbildung beinhaltet und welche Karrierewege sich eröffnen.',
    content: `
      <p>Gebäudereiniger/in ist ein staatlich anerkannter Ausbildungsberuf im Handwerk mit überraschend vielfältigen Inhalten. Die dreijährige duale Ausbildung qualifiziert für weit mehr als Bodenwischen – sie eröffnet echte Karrierechancen.</p>

      <h3>Inhalte der Ausbildung</h3>
      <p>Die Ausbildungsordnung (zuletzt modernisiert 2019) umfasst:</p>
      <ul>
        <li><strong>Materialkunde:</strong> Reinigung von Stein, Holz, Glas, Metall, Textilien</li>
        <li><strong>Chemie-Grundlagen:</strong> pH-Werte, Tenside, Desinfektion</li>
        <li><strong>Arbeitstechniken:</strong> Manuelle Reinigung vs. Maschineneinsatz</li>
        <li><strong>Arbeitssicherheit:</strong> Umgang mit Gefahrstoffen, PSA, Unfallverhütung</li>
        <li><strong>Kundenkommunikation:</strong> Auftragsorganisation, Qualitätsprüfung</li>
      </ul>

      <h3>Vielfältige Einsatzbereiche</h3>
      <p>Während der Ausbildung durchlaufen Azubis verschiedene Bereiche:</p>
      <ul>
        <li>Unterhaltsreinigung (Büros, Schulen)</li>
        <li>Glas- und Fassadenreinigung (teils mit Klettertechnik)</li>
        <li>Baureinigung nach Neubau/Sanierung</li>
        <li>Desinfektionsreinigung in Krankenhäusern</li>
        <li>Spezialreinigungen (Teppich, Polster, Graffiti)</li>
      </ul>

      <h3>Überdurchschnittliche Ausbildungsvergütung</h3>
      <p>Seit 2025 zahlt die Branche tariflich:</p>
      <ul>
        <li>1. Lehrjahr: 1.000 €/Monat</li>
        <li>2. Lehrjahr: 1.150 €/Monat</li>
        <li>3. Lehrjahr: 1.300 €/Monat</li>
      </ul>
      <p>Damit liegt die Vergütung über dem Durchschnitt vieler Handwerksberufe.</p>

      <h3>Karrierewege nach der Ausbildung</h3>
      <ul>
        <li><strong>Vorarbeiter/Objektleiter:</strong> Koordination von Reinigungsteams</li>
        <li><strong>Gebäudereiniger-Meister:</strong> Höchster Abschluss, berechtigt zum Ausbilden</li>
        <li><strong>Spezialisierung:</strong> Desinfektor, Reinraum-Spezialist, Denkmalreiniger</li>
        <li><strong>Selbstständigkeit:</strong> Eigener Reinigungsbetrieb</li>
        <li><strong>Studium:</strong> Facility Management, Hygienemanagement</li>
      </ul>

      <h3>Ausbildung bei FIMI</h3>
      <p>Wir bilden aus und bieten jungen Menschen einen zukunftssicheren Einstieg ins Berufsleben. Bei Interesse melden Sie sich unter karriere@fimi-service.de.</p>
    `,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    category: 'team',
    author: 'FIMI Team',
    date: '2024-02-12',
    readTime: 5,
    sources: [
      'https://www.hwk-stuttgart.de/gebaeudereiniger-ausbildung',
      'https://www.bibb.de/ausbildungsberufe',
      'https://www.frohnert-gs.de/ausbildung'
    ]
  },
  {
    id: '11',
    slug: 'ergonomie-reinigung-gesundheitsschutz',
    title: 'Ergonomie in der Reinigung: Gesundheitsschutz für Mitarbeiter',
    excerpt: 'Körperliche Belastungen reduzieren, Berufskrankheiten vorbeugen: Welche Maßnahmen wirklich helfen.',
    content: `
      <p>Die Gebäudereinigung ist körperlich anspruchsvoll. Rückenbeschwerden, Gelenkprobleme und Hauterkrankungen zählen zu den häufigsten gesundheitlichen Problemen in der Branche. Mit den richtigen Maßnahmen lassen sich diese Risiken deutlich reduzieren.</p>

      <h3>Typische körperliche Belastungen</h3>
      <ul>
        <li><strong>Rücken:</strong> Bücken, schweres Heben, einseitige Haltung</li>
        <li><strong>Knie:</strong> Arbeiten im Knien (BK 2102 anerkannt)</li>
        <li><strong>Schulter/Arme:</strong> Über-Kopf-Arbeiten, Wischen, Fensterputzen</li>
        <li><strong>Haut:</strong> Feuchtarbeit, Kontakt mit Reinigungschemikalien</li>
      </ul>

      <h3>Ergonomische Arbeitsmittel</h3>
      <p>Moderne Hilfsmittel reduzieren Belastungen erheblich:</p>
      <ul>
        <li><strong>Teleskopstangen:</strong> Fenster putzen ohne Leiter</li>
        <li><strong>Fahrbare Moppsysteme:</strong> Weniger Bücken und Tragen</li>
        <li><strong>Rückentragbare Staubsauger:</strong> Gleichmäßige Gewichtsverteilung</li>
        <li><strong>Höhenverstellbare Reinigungswagen:</strong> Individuelle Anpassung</li>
      </ul>
      <p>Die BG BAU unterstützt solche Investitionen mit Arbeitsschutz-Prämien.</p>

      <h3>Hautschutz bei Feuchtarbeit</h3>
      <p>Bei Feuchtarbeit über 4 Stunden täglich ist arbeitsmedizinische Vorsorge Pflicht. Wichtig sind:</p>
      <ul>
        <li>Schutzhandschuhe bei Chemikalienkontakt</li>
        <li>Hautschutzcreme vor der Arbeit</li>
        <li>Milde Hautreinigung</li>
        <li>Hautpflege nach der Arbeit</li>
      </ul>

      <h3>Unfallprävention</h3>
      <p>Rutsch- und Sturzunfälle stehen an erster Stelle. Präventionsmaßnahmen:</p>
      <ul>
        <li>Warnschilder "Achtung Rutschgefahr" aufstellen</li>
        <li>Rutschfeste Arbeitsschuhe tragen</li>
        <li>Leitern nur bis zulässige Höhe nutzen</li>
        <li>Absturzsicherung bei Höhenarbeit</li>
      </ul>

      <h3>BG BAU-Kampagnen</h3>
      <p>Die Berufsgenossenschaft betreibt die Aktion "Bau auf Sicherheit. Bau auf Dich." mit speziellen Materialien für die Gebäudereinigung: Unterweisungshilfen, Videos und Checklisten für richtiges Arbeiten ohne Gesundheitsschäden.</p>

      <h3>Gesundheitsschutz bei FIMI</h3>
      <p>Wir investieren in ergonomische Ausrüstung, schulen unsere Mitarbeiter regelmäßig und fördern Job Rotation. Gesunde Mitarbeiter sind motivierte Mitarbeiter – und das spüren auch unsere Kunden.</p>
    `,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    category: 'team',
    author: 'FIMI Team',
    date: '2023-11-30',
    readTime: 5,
    sources: [
      'https://www.bgbau.de/gebaeudereinigung',
      'https://publikationen.dguv.de/ergonomie',
      'https://www.fortytools.com/bg-praemien'
    ]
  },
  {
    id: '12',
    slug: 'fimi-team-verstaerkung-2025',
    title: 'FIMI wächst: Wir suchen Verstärkung in ganz Bayern',
    excerpt: 'Übertarifliche Bezahlung, moderne Arbeitsmittel, echte Karrierechancen: Werden Sie Teil des FIMI-Teams.',
    content: `
      <p>Aufgrund unseres kontinuierlichen Wachstums suchen wir motivierte Reinigungskräfte für verschiedene Standorte in Bayern. Bei FIMI erwartet Sie mehr als ein Job – wir bieten eine Perspektive.</p>

      <h3>Unsere Standorte</h3>
      <p>Wir suchen Verstärkung in:</p>
      <ul>
        <li>Landshut (Hauptsitz)</li>
        <li>München und Umgebung</li>
        <li>Regensburg</li>
        <li>Ingolstadt</li>
        <li>Freising, Erding, Straubing, Passau</li>
      </ul>

      <h3>Das bieten wir</h3>
      <ul>
        <li><strong>Übertarifliche Bezahlung:</strong> Wir zahlen mehr als der Branchenmindestlohn</li>
        <li><strong>Geregelte Arbeitszeiten:</strong> Planbare Einsätze, keine bösen Überraschungen</li>
        <li><strong>Moderne Arbeitsmittel:</strong> Ergonomische Geräte und hochwertige Reinigungsmittel</li>
        <li><strong>Weiterbildung:</strong> Schulungen und Aufstiegsmöglichkeiten</li>
        <li><strong>Unbefristeter Vertrag:</strong> Sicherheit von Anfang an</li>
        <li><strong>Teamkultur:</strong> Kollegiales Miteinander, flache Hierarchien</li>
      </ul>

      <h3>Wen wir suchen</h3>
      <p>Ob Quereinsteiger oder erfahrene Fachkraft – bei uns ist jeder willkommen, der:</p>
      <ul>
        <li>Zuverlässig und pünktlich ist</li>
        <li>Sorgfältig und gewissenhaft arbeitet</li>
        <li>Freude an sichtbaren Ergebnissen hat</li>
        <li>Teamfähig und freundlich auftritt</li>
      </ul>
      <p>Deutschkenntnisse sind hilfreich, aber keine Voraussetzung – wir unterstützen beim Spracherwerb.</p>

      <h3>Vollzeit und Teilzeit möglich</h3>
      <p>Wir bieten flexible Arbeitszeitmodelle: Von der Vollzeitstelle bis zum Minijob. Sprechen Sie uns an – gemeinsam finden wir das passende Modell für Ihre Lebenssituation.</p>

      <h3>Jetzt bewerben</h3>
      <p>Interesse geweckt? Bewerben Sie sich unkompliziert:</p>
      <ul>
        <li><strong>E-Mail:</strong> karriere@fimi-service.de</li>
        <li><strong>Telefon:</strong> 0871 430 334 60</li>
        <li><strong>Persönlich:</strong> Kellerstr. 39, 84036 Landshut</li>
      </ul>
      <p>Wir freuen uns auf Sie!</p>
    `,
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
