import Image from 'next/image'
import { ArrowRight, CheckCircle, Phone, Clock, Users, Zap } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheRegionenProps {
  branche: Branche
}

// SEO-konforme Daten pro Branche (echte Suchbegriffe + natürliche Sprache)
const brancheSEO: Record<string, {
  keyword: string
  keywordMitIn: string
  frage: string
  probleme: string[]
}> = {
  'buero-verwaltung': {
    keyword: 'Büroreinigung',
    keywordMitIn: 'Büroreinigung in',
    frage: 'Sie suchen eine zuverlässige Büroreinigung?',
    probleme: ['Ihre Reinigungskraft hat gekündigt', 'Die aktuelle Firma ist unzuverlässig', 'Ihr Unternehmen wächst']
  },
  'industrie-produktion': {
    keyword: 'Industriereinigung',
    keywordMitIn: 'Industriereinigung in',
    frage: 'Sie brauchen professionelle Industriereinigung?',
    probleme: ['Produktion darf nicht stillstehen', 'Maschinen müssen schonend gereinigt werden', 'Reinigung nur nachts möglich']
  },
  'gesundheitswesen': {
    keyword: 'Praxisreinigung',
    keywordMitIn: 'Praxisreinigung in',
    frage: 'Sie suchen eine Praxisreinigung mit Hygiene-Expertise?',
    probleme: ['RKI-Vorgaben müssen eingehalten werden', 'Die Praxis expandiert', 'Desinfektion muss professionell sein']
  },
  'einzelhandel': {
    keyword: 'Geschäftsreinigung',
    keywordMitIn: 'Geschäftsreinigung in',
    frage: 'Ihr Laden soll immer einladend wirken?',
    probleme: ['Reinigung während Öffnungszeiten nötig', 'Mehrere Filialen koordinieren', 'Schaufenster müssen glänzen']
  },
  'gastronomie-hotel': {
    keyword: 'Hotelreinigung',
    keywordMitIn: 'Hotelreinigung in',
    frage: 'Sie brauchen zuverlässige Hotel- oder Gastronomiereinigung?',
    probleme: ['Hygiene-Kontrollen bestehen', 'Zimmerreinigung outsourcen', 'Küche nach HACCP-Standard']
  },
  'bildung': {
    keyword: 'Schulreinigung',
    keywordMitIn: 'Schulreinigung in',
    frage: 'Ihre Bildungseinrichtung braucht professionelle Reinigung?',
    probleme: ['Ferienreinigung organisieren', 'Kindersichere Reinigungsmittel', 'Große Flächen effizient reinigen']
  },
  'fitness': {
    keyword: 'Fitnessstudio Reinigung',
    keywordMitIn: 'Fitnessstudio Reinigung in',
    frage: 'Ihr Fitnessstudio soll hygienisch einwandfrei sein?',
    probleme: ['Geräte richtig desinfizieren', 'Duschen keimfrei halten', 'Mitglieder erwarten Sauberkeit']
  },
  'logistik': {
    keyword: 'Lagerreinigung',
    keywordMitIn: 'Lagerreinigung in',
    frage: 'Ihr Lager braucht professionelle Reinigung?',
    probleme: ['24/7-Betrieb nicht stören', 'Hochregale reinigen', 'Staubfreie Lagerbedingungen']
  },
  'immobilien': {
    keyword: 'Treppenhausreinigung',
    keywordMitIn: 'Treppenhausreinigung in',
    frage: 'Ihre Wohnanlage braucht zuverlässige Reinigung?',
    probleme: ['Mieter beschweren sich', 'Winterdienst inklusive gesucht', 'Hausmeister-Service gewünscht']
  },
  'oeffentlich': {
    keyword: 'Gebäudereinigung Behörde',
    keywordMitIn: 'Gebäudereinigung für Behörden in',
    frage: 'Sie suchen einen Reinigungsdienstleister für öffentliche Gebäude?',
    probleme: ['Ausschreibung gewonnen', 'Öffentliche Standards erfüllen', 'Große Gebäudeflächen']
  },
  'banken': {
    keyword: 'Bankreinigung',
    keywordMitIn: 'Bankreinigung in',
    frage: 'Ihre Bankfiliale braucht diskrete, professionelle Reinigung?',
    probleme: ['Absolute Diskretion erforderlich', 'Sicherheitsbereiche reinigen', 'Kundenbereich repräsentativ halten']
  },
  'autohaus': {
    keyword: 'Autohaus Reinigung',
    keywordMitIn: 'Autohaus Reinigung in',
    frage: 'Ihr Autohaus soll Kunden beeindrucken?',
    probleme: ['Showroom muss glänzen', 'Werkstatt und Verkauf trennen', 'Außenflächen sauber halten']
  },
}

// Die 8 Einsatzorte
const staedte = [
  { name: 'Landshut', info: 'Hauptsitz' },
  { name: 'München', info: 'Großraum' },
  { name: 'Regensburg', info: 'Oberpfalz' },
  { name: 'Ingolstadt', info: 'Region 10' },
  { name: 'Freising', info: 'Flughafen' },
  { name: 'Erding', info: 'Landkreis' },
  { name: 'Straubing', info: 'Gäuboden' },
  { name: 'Passau', info: 'Grenzregion' },
]

export function BrancheRegionen({ branche }: BrancheRegionenProps) {
  const seo = brancheSEO[branche.slug] || {
    keyword: 'Gebäudereinigung',
    keywordMitIn: 'Gebäudereinigung in',
    frage: 'Sie suchen eine professionelle Gebäudereinigung?',
    probleme: ['Aktuelle Reinigung unzuverlässig', 'Qualität verbessern', 'Partner wechseln']
  }

  return (
    <section id="standorte" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* GESAMTES Layout als Grid - Sidebar sticky über alles */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">

          {/* ===== LINKE SPALTE: Header + Karte + SEO-Text ===== */}
          <div className="lg:col-span-3">

            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <p className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
                Ihre Region, unser Service
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956] leading-tight mb-4">
                {seo.keyword} in Landshut, München und ganz Bayern
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                {seo.frage} Wir sind mit 8 Standorten in Bayern für Sie da – schnell vor Ort, persönlich betreut.
              </p>
            </div>

            {/* Bayern Karte */}
            <div className="relative mb-4 sm:mb-6">
              <Image
                src="/images/home/staedte-fimi.avif"
                alt={`${seo.keyword} Bayern - FIMI Gebäudereinigung Standorte`}
                width={4800}
                height={3584}
                className="w-full h-auto rounded-[6px] shadow-lg"
              />
            </div>

            {/* Städte Grid */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-3 mb-10 sm:mb-14">
              {staedte.map((stadt) => (
                <div
                  key={stadt.name}
                  className="bg-white rounded-[6px] p-1.5 sm:p-3 text-center shadow-sm border border-gray-100"
                >
                  <p className="font-bold text-[#012956] text-[10px] sm:text-sm leading-tight">{stadt.name}</p>
                  <p className="text-[9px] sm:text-xs text-gray-500">{stadt.info}</p>
                </div>
              ))}
            </div>

            {/* SEO Footer Text */}
            <div className="bg-white rounded-[6px] p-5 sm:p-6 md:p-8 border border-gray-100">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#012956] mb-4">
                {seo.keywordMitIn} Bayern – regional verwurzelt, professionell aufgestellt
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Seit über 8 Jahren bieten wir <strong>{seo.keyword.toLowerCase()}</strong> in Bayern an.
                Ob Sie <strong>{seo.keyword.toLowerCase()} in Landshut</strong>, <strong>{seo.keyword.toLowerCase()} in München</strong> oder
                an einem anderen Standort benötigen – unsere Teams sind schnell bei Ihnen.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Von unserem Hauptsitz in Landshut aus betreuen wir Kunden in Regensburg, Ingolstadt, Freising,
                Erding, Straubing und Passau. Kurze Anfahrtswege bedeuten für Sie: schnellere Reaktionszeiten
                und persönliche Betreuung durch lokale Ansprechpartner.
              </p>
            </div>

          </div>

          {/* ===== RECHTE SPALTE: Sticky Sidebar über ALLES ===== */}
          <div className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start space-y-6">

            {/* Problem-Ansprache Box */}
            <div className="bg-white rounded-[6px] p-5 sm:p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-[#012956] mb-4">
                Kommt Ihnen das bekannt vor?
              </h3>
              <div className="space-y-3">
                {seo.probleme.map((problem, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#109387] flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-gray-700">{problem}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4 pt-4 border-t border-gray-100">
                Dann sind Sie bei uns richtig. Wir helfen – schnell und unkompliziert.
              </p>
            </div>

            {/* Trust Facts */}
            <div className="bg-[#012956] rounded-[6px] p-5 sm:p-6">
              <p className="text-white/70 text-xs uppercase tracking-wider mb-4">Warum FIMI</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[6px] bg-white/10 flex items-center justify-center">
                    <Clock size={20} className="text-[#109387]" />
                  </div>
                  <div>
                    <p className="text-white font-bold">30 Min. Anfahrt</p>
                    <p className="text-white/60 text-sm">Kurze Wege, schneller Service</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[6px] bg-white/10 flex items-center justify-center">
                    <Users size={20} className="text-[#109387]" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Feste Teams</p>
                    <p className="text-white/60 text-sm">Immer dieselben Mitarbeiter</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[6px] bg-white/10 flex items-center justify-center">
                    <Zap size={20} className="text-[#109387]" />
                  </div>
                  <div>
                    <p className="text-white font-bold">2h Notfall-Reaktion</p>
                    <p className="text-white/60 text-sm">Wenn es schnell gehen muss</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <a
                href="#contact-form"
                className="flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-[6px] transition-all duration-300 group w-full"
              >
                Kostenfreie Besichtigung anfragen
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4987120669360"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#012956] font-bold text-sm sm:text-base border-2 border-[#012956] px-6 py-3 rounded-[6px] transition-all w-full"
              >
                <Phone size={18} />
                0871 20669360
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
