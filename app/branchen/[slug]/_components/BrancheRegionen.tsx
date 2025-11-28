import Image from 'next/image'
import { MapPin, ArrowRight, CheckCircle, Phone } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheRegionenProps {
  branche: Branche
}

// SEO-konforme Suchbegriffe pro Branche (was Leute WIRKLICH googlen)
const brancheSuchbegriffe: Record<string, { hauptKeyword: string; lokalKeywords: string[]; probleme: string[] }> = {
  'buero-verwaltung': {
    hauptKeyword: 'Büroreinigung',
    lokalKeywords: ['Büroreinigung', 'Büro putzen lassen', 'Reinigungsfirma Büro', 'Office Cleaning'],
    probleme: ['Reinigungskraft gekündigt?', 'Unzufrieden mit aktueller Firma?', 'Büro wächst, Reinigung reicht nicht mehr?']
  },
  'industrie-produktion': {
    hauptKeyword: 'Industriereinigung',
    lokalKeywords: ['Industriereinigung', 'Hallenreinigung', 'Produktionshalle reinigen', 'Fabrikreinigung'],
    probleme: ['Produktionsstillstand minimieren?', 'Maschinen schonend reinigen?', 'Nachtschicht-Reinigung gesucht?']
  },
  'gesundheitswesen': {
    hauptKeyword: 'Praxisreinigung',
    lokalKeywords: ['Praxisreinigung', 'Arztpraxis putzen', 'Zahnarzt Reinigung', 'Klinik Reinigung'],
    probleme: ['Hygiene-Vorschriften einhalten?', 'Desinfektion nach RKI?', 'Reinigung für mehrere Praxen?']
  },
  'einzelhandel': {
    hauptKeyword: 'Geschäftsreinigung',
    lokalKeywords: ['Ladenreinigung', 'Geschäft putzen lassen', 'Einzelhandel Reinigung', 'Shop Cleaning'],
    probleme: ['Reinigung während Öffnungszeiten?', 'Schaufenster immer sauber?', 'Filialreinigung koordinieren?']
  },
  'gastronomie-hotel': {
    hauptKeyword: 'Hotelreinigung',
    lokalKeywords: ['Hotelreinigung', 'Restaurant putzen', 'Gastronomie Reinigung', 'Küchenreinigung gewerblich'],
    probleme: ['Hygiene-Kontrolle bestehen?', 'Zimmerreinigung outsourcen?', 'Küche nach HACCP reinigen?']
  },
  'bildung': {
    hauptKeyword: 'Schulreinigung',
    lokalKeywords: ['Schulreinigung', 'Kita putzen lassen', 'Kindergarten Reinigung', 'Bildungseinrichtung Reinigung'],
    probleme: ['Ferienreinigung organisieren?', 'Kindgerechte Reinigungsmittel?', 'Turnhalle und Mensa reinigen?']
  },
  'fitness': {
    hauptKeyword: 'Fitnessstudio Reinigung',
    lokalKeywords: ['Fitnessstudio putzen', 'Gym Reinigung', 'Sportstudio Reinigung', 'Wellness Reinigung'],
    probleme: ['Geräte richtig desinfizieren?', 'Duschen keimfrei halten?', 'Mitgliederzufriedenheit steigern?']
  },
  'logistik': {
    hauptKeyword: 'Lagerreinigung',
    lokalKeywords: ['Lager putzen', 'Logistikzentrum Reinigung', 'Lagerhalle reinigen', 'Warehouse Cleaning'],
    probleme: ['24/7 Betrieb reinigen?', 'Hochregale säubern?', 'Staubfrei für Waren?']
  },
  'immobilien': {
    hauptKeyword: 'Hausverwaltung Reinigung',
    lokalKeywords: ['Treppenhausreinigung', 'Wohnanlage putzen', 'Hausreinigung Mehrfamilienhaus', 'WEG Reinigung'],
    probleme: ['Mieter beschweren sich?', 'Winterdienst + Reinigung?', 'Zuverlässige Hausmeister?']
  },
  'oeffentlich': {
    hauptKeyword: 'Behördenreinigung',
    lokalKeywords: ['Rathaus Reinigung', 'Amt putzen lassen', 'öffentliche Gebäude Reinigung', 'Behörde Reinigung'],
    probleme: ['Ausschreibung gewonnen?', 'Öffentliche Standards erfüllen?', 'Große Flächen effizient?']
  },
  'banken': {
    hauptKeyword: 'Bankreinigung',
    lokalKeywords: ['Bank putzen lassen', 'Sparkasse Reinigung', 'Filiale reinigen', 'SB-Zone Reinigung'],
    probleme: ['Diskretion gewährleistet?', 'Sicherheitsbereiche reinigen?', 'Kundenbereich repräsentativ?']
  },
  'autohaus': {
    hauptKeyword: 'Autohaus Reinigung',
    lokalKeywords: ['Autohaus putzen', 'Showroom Reinigung', 'KFZ Werkstatt reinigen', 'Autohändler Reinigung'],
    probleme: ['Showroom glänzt nicht?', 'Werkstatt + Verkauf trennen?', 'Außenflächen sauber?']
  },
}

// Die 8 Einsatzorte
const staedte = ['Landshut', 'München', 'Regensburg', 'Ingolstadt', 'Freising', 'Erding', 'Straubing', 'Passau']

export function BrancheRegionen({ branche }: BrancheRegionenProps) {
  // Hole branchenspezifische Keywords oder Fallback
  const seoData = brancheSuchbegriffe[branche.slug] || {
    hauptKeyword: 'Gebäudereinigung',
    lokalKeywords: ['Gebäudereinigung', 'Reinigungsfirma', 'professionelle Reinigung'],
    probleme: ['Reinigung wechseln?', 'Qualität verbessern?', 'Zuverlässigen Partner finden?']
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* SEO-konforme Headline mit echtem Suchbegriff */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4">
            8 Standorte in Bayern
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#012956] leading-tight mb-4">
            {seoData.hauptKeyword} in Ihrer Stadt
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ob {staedte[0]}, {staedte[1]} oder {staedte[2]} – wir sind in 30 Minuten bei Ihnen.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">

          {/* Left: Bayern Karte + lokale Keywords */}
          <div>
            <div className="relative mb-6">
              <Image
                src="/images/home/staedte-fimi.avif"
                alt={`${seoData.hauptKeyword} in Bayern - Landshut, München, Regensburg, Ingolstadt, Freising, Erding, Straubing, Passau`}
                width={4800}
                height={3584}
                className="w-full h-auto rounded-[6px] shadow-lg"
              />
            </div>

            {/* Lokale SEO-Keywords als klickbare Chips */}
            <div className="bg-white rounded-[6px] p-4 sm:p-6 shadow-sm border border-gray-100">
              <p className="text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                Das suchen unsere Kunden
              </p>
              <div className="flex flex-wrap gap-2">
                {staedte.slice(0, 4).map((stadt) => (
                  <span
                    key={stadt}
                    className="inline-flex items-center gap-1.5 bg-[#012956]/5 text-[#012956] font-semibold text-xs sm:text-sm px-3 py-1.5 rounded-[6px]"
                  >
                    <MapPin size={12} className="text-[#109387]" />
                    {seoData.hauptKeyword} {stadt}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {staedte.slice(4).map((stadt) => (
                  <span
                    key={stadt}
                    className="inline-flex items-center gap-1.5 bg-[#012956]/5 text-[#012956] font-semibold text-xs sm:text-sm px-3 py-1.5 rounded-[6px]"
                  >
                    <MapPin size={12} className="text-[#109387]" />
                    {seoData.hauptKeyword} {stadt}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Probleme + CTA */}
          <div className="bg-white rounded-[6px] p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100">

            {/* Headline mit Problem-Ansprache */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#012956] mb-2">
              Sie suchen {seoData.hauptKeyword.toLowerCase().includes('reinigung') ? 'eine' : 'einen'} {seoData.hauptKeyword}?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Wir verstehen Ihre Situation – und haben die Lösung.
            </p>

            {/* Probleme die Kunden haben */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {seoData.probleme.map((problem, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-[6px] p-3 sm:p-4">
                  <CheckCircle size={18} className="text-[#109387] flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                  <div>
                    <p className="font-bold text-[#012956] text-sm sm:text-base">{problem}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Wir helfen – schnell und unkompliziert.</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Städte Grid */}
            <div className="border-t border-gray-100 pt-5 sm:pt-6 mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                Unsere Einsatzgebiete
              </p>
              <div className="grid grid-cols-4 gap-2">
                {staedte.map((stadt) => (
                  <div key={stadt} className="text-center">
                    <p className="font-bold text-[#012956] text-xs sm:text-sm">{stadt}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 p-4 bg-[#012956]/5 rounded-[6px]">
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#109387]">30</p>
                <p className="text-xs text-gray-600">Min. Anfahrt</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#109387]">8+</p>
                <p className="text-xs text-gray-600">Jahre Erfahrung</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#109387]">120+</p>
                <p className="text-xs text-gray-600">Kunden</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <a
                href="#contact-form"
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base md:text-lg px-6 py-3.5 sm:py-4 rounded-[6px] transition-all duration-300 group w-full"
              >
                Kostenfreie Besichtigung anfragen
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4987143033460"
                className="flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-gray-50 text-[#012956] font-bold text-sm sm:text-base border-2 border-[#012956] px-6 py-3 sm:py-3.5 rounded-[6px] transition-all duration-300 w-full"
              >
                <Phone size={18} />
                0871 430 334 60
              </a>
            </div>
          </div>

        </div>

        {/* SEO Footer Text mit echten Keywords */}
        <div className="mt-8 sm:mt-12 bg-white rounded-[6px] p-5 sm:p-6 md:p-8 border border-gray-100">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#012956] mb-3">
            {seoData.hauptKeyword} in Bayern – Ihr regionaler Partner
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Sie suchen <strong>{seoData.hauptKeyword.toLowerCase()}</strong> in <strong>Landshut</strong>, <strong>München</strong>, <strong>Regensburg</strong> oder <strong>Ingolstadt</strong>?
            FIMI Gebäudereinigung ist seit 8 Jahren Ihr zuverlässiger Partner für professionelle {branche.name.toLowerCase()} Reinigung in ganz Bayern.
            Auch in <strong>Freising</strong>, <strong>Erding</strong>, <strong>Straubing</strong> und <strong>Passau</strong> sind unsere Teams für Sie im Einsatz.
            Kurze Anfahrtswege bedeuten schnelle Reaktionszeiten – im Notfall sind wir in 2 Stunden vor Ort.
          </p>
        </div>

      </div>
    </section>
  )
}
