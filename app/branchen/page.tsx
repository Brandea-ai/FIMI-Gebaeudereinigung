'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Factory, Stethoscope, ShoppingBag, UtensilsCrossed, GraduationCap, Dumbbell, Warehouse, Home, Landmark, Banknote, Car, Search, X } from 'lucide-react'
import { branchen } from '@/lib/branchen-data'
import FadeIn from '@/components/FadeIn'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import KundenLogosSlider from '@/components/KundenLogosSlider'

const branchenIcons: Record<string, any> = {
  Building2, Factory, Stethoscope, ShoppingBag, UtensilsCrossed, GraduationCap,
  Dumbbell, Warehouse, Home, Landmark, Banknote, Car
}

// Sehr umfangreiche Suchbegriffe/Synonyme für jede Branche
const searchTermsMap: Record<string, string[]> = {
  'buero-verwaltung': [
    // Direkte Begriffe
    'büro', 'buero', 'office', 'verwaltung', 'administration',
    // Arbeitsplatz
    'arbeitsplatz', 'schreibtisch', 'arbeitsraum', 'workspace', 'coworking', 'open space', 'großraumbüro', 'grossraumbuero',
    // Firmentypen
    'firma', 'unternehmen', 'betrieb', 'geschäft', 'geschaeft', 'konzern', 'startup', 'agentur', 'beratung', 'consulting',
    // Spezielle Büros
    'kanzlei', 'anwalt', 'rechtsanwalt', 'steuerberater', 'wirtschaftsprüfer', 'wirtschaftspruefer', 'notariat', 'notar',
    // Räume
    'empfang', 'rezeption', 'konferenz', 'meeting', 'besprechung', 'besprechungsraum', 'konferenzraum', 'lobby',
    // IT/Tech
    'it', 'tech', 'software', 'digital', 'computer', 'edv', 'server', 'rechenzentrum',
    // Versicherung/Bank Light
    'makler', 'immobilienmakler', 'finanzberater', 'vermögensberater', 'vermoegensberater'
  ],
  'industrie-produktion': [
    // Direkte Begriffe
    'industrie', 'produktion', 'fertigung', 'manufacturing', 'industrial',
    // Betriebsarten
    'fabrik', 'werk', 'produktionsstätte', 'produktionsstaette', 'fertigungshalle', 'werkshalle', 'industriebetrieb',
    // Branchen
    'metall', 'metallverarbeitung', 'stahl', 'aluminium', 'kunststoff', 'plastik', 'elektronik', 'elektro', 'elektrotechnik',
    'maschinenbau', 'automotive zulieferer', 'zulieferer', 'chemie', 'pharma', 'lebensmittel', 'food',
    // Maschinen
    'maschine', 'anlage', 'cnc', 'fräse', 'fraese', 'drehe', 'drehbank', 'presse', 'stanzen', 'roboter', 'automation',
    // Verschmutzungen
    'öl', 'oel', 'fett', 'schmierstoff', 'späne', 'spaene', 'staub', 'industriestaub', 'kühlmittel', 'kuehlmittel',
    // Bereiche
    'halle', 'produktionshalle', 'werkhalle', 'montagehalle', 'montage', 'linie', 'band', 'fließband', 'fliessband'
  ],
  'gesundheitswesen': [
    // Direkte Begriffe
    'gesundheit', 'medizin', 'medizinisch', 'healthcare', 'health',
    // Einrichtungstypen
    'praxis', 'arztpraxis', 'klinik', 'krankenhaus', 'hospital', 'mvz', 'medizinisches versorgungszentrum',
    'pflegeheim', 'pflege', 'altenheim', 'seniorenheim', 'betreutes wohnen', 'reha', 'rehabilitation', 'rehaklinik',
    // Fachärzte
    'arzt', 'ärztin', 'doktor', 'facharzt', 'hausarzt', 'allgemeinmedizin',
    'zahnarzt', 'dental', 'kieferorthopäde', 'kieferorthopaedie', 'oralchirurg',
    'hno', 'hals nasen ohren', 'augenarzt', 'ophthalmologie', 'augen',
    'orthopäde', 'orthopaede', 'orthopädie', 'orthopaedie', 'chirurg', 'chirurgie',
    'hautarzt', 'dermatologie', 'dermatologe', 'gynäkologe', 'gynaekologie', 'frauenarzt',
    'urologe', 'urologie', 'kardiologe', 'kardiologie', 'herz', 'internist', 'innere medizin',
    'neurologe', 'neurologie', 'psychiater', 'psychiatrie', 'psychologe', 'psychotherapeut', 'psychotherapie',
    'radiologe', 'radiologie', 'röntgen', 'roentgen', 'mrt', 'ct',
    // Therapie
    'physio', 'physiotherapie', 'physiotherapeut', 'krankengymnastik', 'massage', 'massagepraxis',
    'ergotherapie', 'ergotherapeut', 'logopädie', 'logopaedie', 'logopäde',
    // Labor
    'labor', 'laborpraxis', 'blutabnahme', 'diagnostik',
    // Apotheke
    'apotheke', 'pharmazie', 'arzneimittel',
    // Hygiene
    'hygiene', 'desinfektion', 'steril', 'rki', 'keimfrei', 'infektionsschutz'
  ],
  'einzelhandel': [
    // Direkte Begriffe
    'einzelhandel', 'handel', 'retail', 'geschäft', 'geschaeft', 'laden', 'shop', 'store',
    // Geschäftstypen
    'boutique', 'fachgeschäft', 'fachgeschaeft', 'kaufhaus', 'warenhaus', 'einkaufszentrum', 'mall', 'center', 'centre',
    // Branchen
    'mode', 'fashion', 'bekleidung', 'textil', 'kleidung', 'schuh', 'schuhe', 'accessoires',
    'elektro', 'elektronik', 'technik', 'computer', 'handy', 'smartphone', 'media',
    'möbel', 'moebel', 'einrichtung', 'wohnen', 'deko', 'dekoration', 'heimtextilien',
    'sport', 'sportgeschäft', 'outdoor', 'fahrrad', 'bike',
    'spielwaren', 'spielzeug', 'baby', 'kinder',
    'schmuck', 'juwelier', 'uhren', 'optiker', 'brille', 'brillen',
    'parfümerie', 'parfuemerie', 'kosmetik', 'drogerie', 'beauty',
    'buch', 'bücher', 'buecher', 'buchhandlung', 'schreibwaren', 'papier',
    // Lebensmittel
    'supermarkt', 'lebensmittel', 'discounter', 'bio', 'biomarkt', 'feinkost', 'delikatessen',
    'bäcker', 'baecker', 'bäckerei', 'baeckerei', 'konditor', 'konditorei',
    'metzger', 'metzgerei', 'fleischer', 'fleischerei',
    // Bereiche
    'verkauf', 'verkaufsfläche', 'verkaufsflaeche', 'kasse', 'kassenbereich', 'schaufenster', 'eingang', 'lager'
  ],
  'gastronomie-hotel': [
    // Direkte Begriffe
    'gastronomie', 'gastro', 'hotel', 'hotellerie', 'restaurant', 'gastgewerbe',
    // Restaurants
    'restaurant', 'lokal', 'gaststätte', 'gaststaette', 'wirtshaus', 'gasthof', 'biergarten', 'bierstube',
    'bistro', 'cafe', 'café', 'coffee', 'kaffee', 'kaffeebar', 'espressobar',
    'bar', 'cocktailbar', 'weinbar', 'club', 'disco', 'diskothek', 'lounge',
    // Schnellgastronomie
    'imbiss', 'snack', 'fastfood', 'fast food', 'döner', 'doener', 'kebab', 'pizza', 'pizzeria',
    'burger', 'sushi', 'asiatisch', 'italienisch', 'griechisch', 'mexikanisch', 'indisch',
    // Hotels
    'hotel', 'pension', 'gasthof', 'motel', 'hostel', 'herberge', 'jugendherberge',
    'ferienwohnung', 'apartment', 'suite', 'zimmer', 'hotelzimmer', 'rezeption',
    // Bereiche
    'küche', 'kueche', 'großküche', 'grosskueche', 'gastraum', 'speisesaal', 'frühstücksraum', 'fruehstuecksraum',
    'lobby', 'empfang', 'wellness', 'spa', 'sauna', 'pool', 'schwimmbad', 'fitnessraum',
    // Standards
    'haccp', 'hygiene', 'lebensmittelhygiene', 'küchenhygiene', 'kuechenhygiene',
    // Events
    'catering', 'event', 'veranstaltung', 'bankett', 'hochzeit', 'feier', 'tagung', 'konferenz'
  ],
  'bildung-schulen': [
    // Direkte Begriffe
    'bildung', 'schule', 'education', 'lernen', 'unterricht',
    // Schultypen
    'grundschule', 'hauptschule', 'realschule', 'gymnasium', 'gesamtschule', 'mittelschule', 'oberschule',
    'förderschule', 'foerderschule', 'sonderschule', 'berufsschule', 'berufsfachschule', 'fachoberschule', 'fos',
    // Kinder
    'kindergarten', 'kita', 'kindertagesstätte', 'kindertagesstaette', 'krippe', 'hort', 'kinderbetreuung',
    'vorschule', 'kinder', 'kleinkind', 'baby',
    // Hochschule
    'universität', 'universitaet', 'uni', 'hochschule', 'fachhochschule', 'fh', 'akademie', 'institut',
    'studium', 'student', 'campus', 'mensa', 'bibliothek', 'bücherei', 'buecherei',
    // Weitere
    'volkshochschule', 'vhs', 'musikschule', 'tanzschule', 'sprachschule', 'fahrschule', 'nachhilfe',
    'internat', 'wohnheim', 'studentenwohnheim',
    // Räume
    'klassenzimmer', 'unterrichtsraum', 'aula', 'turnhalle', 'sporthalle', 'pausenhof', 'schulhof',
    'lehrerzimmer', 'sekretariat', 'rektorat', 'labor', 'werkraum', 'computerraum', 'medienraum'
  ],
  'fitness-sport': [
    // Direkte Begriffe
    'fitness', 'sport', 'training', 'workout', 'gym',
    // Studios
    'fitnessstudio', 'fitnesscenter', 'gym', 'sportstudio', 'trainingscenter', 'kraftraum',
    'crossfit', 'yoga', 'yogastudio', 'pilates', 'spinning', 'cycling', 'boxstudio', 'kampfsport', 'martial arts',
    // Sportarten
    'fußball', 'fussball', 'soccer', 'tennis', 'badminton', 'squash', 'golf', 'basketball', 'volleyball', 'handball',
    'schwimmen', 'schwimmbad', 'hallenbad', 'freibad', 'aqua', 'wassersport',
    'tanzen', 'tanzstudio', 'ballett', 'turnen', 'gymnastik', 'leichtathletik',
    'eishockey', 'eislaufen', 'eishalle', 'schlittschuh',
    'klettern', 'kletterhalle', 'bouldern', 'bergsteigen',
    // Wellness
    'wellness', 'spa', 'sauna', 'dampfbad', 'whirlpool', 'massage', 'entspannung', 'erholung',
    'therme', 'thermalbad', 'heilbad',
    // Anlagen
    'sportanlage', 'sportzentrum', 'sportplatz', 'stadion', 'arena', 'sporthalle', 'turnhalle', 'mehrzweckhalle',
    // Bereiche
    'umkleide', 'umkleidekabine', 'dusche', 'duschen', 'sanitär', 'sanitaer', 'garderobe',
    'trainingsgerät', 'trainingsgeraet', 'geräte', 'geraete', 'hanteln', 'laufband', 'stepper'
  ],
  'logistik-lager': [
    // Direkte Begriffe
    'logistik', 'lager', 'warehouse', 'storage', 'distribution',
    // Einrichtungstypen
    'lagerhalle', 'lagerhallen', 'logistikzentrum', 'distributionszentrum', 'versandzentrum', 'fulfillment',
    'hochregallager', 'hochregal', 'kühllager', 'kuehllager', 'tiefkühllager', 'tiefkuehllager',
    'freilager', 'außenlager', 'aussenlager', 'containerlager',
    // Transport
    'spedition', 'transport', 'fracht', 'versand', 'lieferung', 'zustellung',
    'lkw', 'lastwagen', 'transporter', 'lieferwagen', 'gabelstapler', 'stapler', 'hubwagen',
    // E-Commerce
    'ecommerce', 'e-commerce', 'online', 'onlinehandel', 'versandhandel', 'paket', 'paketzentrum',
    'amazon', 'ebay', 'zalando', 'otto', 'dhl', 'ups', 'dpd', 'hermes', 'gls',
    // Bereiche
    'rampe', 'laderampe', 'verladebereich', 'wareneingang', 'warenausgang', 'kommissionierung',
    'verpackung', 'packstation', 'sortierung', 'sortieranlage',
    // Industrie
    'betriebshof', 'außenbereich', 'aussenbereich', 'parkplatz', 'stellfläche', 'stellflaeche'
  ],
  'wohnungswirtschaft': [
    // Direkte Begriffe
    'wohnung', 'wohnungswirtschaft', 'immobilie', 'wohnen', 'residential',
    // Verwaltung
    'hausverwaltung', 'wohnungsbaugesellschaft', 'genossenschaft', 'wohnungsgenossenschaft', 'eigentümer', 'eigentuemer',
    'weg', 'wohnungseigentümergemeinschaft', 'verwalter', 'immobilienverwaltung', 'objektverwaltung',
    // Gebäudetypen
    'mehrfamilienhaus', 'hochhaus', 'wohnblock', 'wohnanlage', 'wohnkomplex', 'siedlung', 'wohnsiedlung',
    'eigentumswohnung', 'mietwohnung', 'sozialwohnung', 'studentenwohnung', 'seniorenwohnung',
    'einfamilienhaus', 'reihenhaus', 'doppelhaus', 'bungalow',
    // Bereiche
    'treppenhaus', 'hausflur', 'flur', 'eingang', 'eingangsbereich', 'foyer', 'aufzug', 'fahrstuhl', 'lift',
    'keller', 'kellerraum', 'abstellraum', 'waschküche', 'waschkueche', 'trockenraum',
    'tiefgarage', 'garage', 'carport', 'stellplatz', 'parkhaus',
    'garten', 'gemeinschaftsgarten', 'spielplatz', 'grünanlage', 'gruenanlage', 'innenhof', 'hof',
    // Dienste
    'hausmeister', 'hauswart', 'facility', 'winterdienst', 'räumen', 'raeumen', 'streuen', 'schnee'
  ],
  'oeffentliche-einrichtungen': [
    // Direkte Begriffe
    'öffentlich', 'oeffentlich', 'public', 'staat', 'staatlich', 'kommunal', 'kommune',
    // Behörden
    'behörde', 'behoerde', 'amt', 'amtsgebäude', 'amtsgebaeude', 'rathaus', 'stadtverwaltung', 'gemeindeverwaltung',
    'landratsamt', 'finanzamt', 'arbeitsamt', 'jobcenter', 'agentur für arbeit', 'sozialamt', 'standesamt',
    'bürgeramt', 'buergeramt', 'bürgerbüro', 'buergerbuero', 'einwohnermeldeamt', 'kfz zulassung', 'führerscheinstelle',
    'polizei', 'polizeiwache', 'polizeistation', 'gericht', 'amtsgericht', 'landgericht', 'justiz',
    // Kultur
    'museum', 'galerie', 'ausstellung', 'bibliothek', 'stadtbibliothek', 'bücherei', 'buecherei',
    'theater', 'oper', 'konzerthaus', 'kulturzentrum', 'stadthalle', 'veranstaltungshalle',
    'kirche', 'gemeinde', 'gemeindehaus', 'pfarramt',
    // Infrastruktur
    'bahnhof', 'busbahnhof', 'haltestelle', 'flughafen', 'airport', 'hafen',
    'feuerwehr', 'feuerwache', 'rettungswache', 'notaufnahme',
    // Bereiche
    'wartezimmer', 'wartebereich', 'empfang', 'schalter', 'servicecenter', 'kundencenter'
  ],
  'banken-versicherungen': [
    // Direkte Begriffe
    'bank', 'versicherung', 'finanz', 'finance', 'banking', 'insurance',
    // Banken
    'sparkasse', 'volksbank', 'raiffeisenbank', 'commerzbank', 'deutsche bank', 'postbank', 'ing', 'dkb',
    'filiale', 'bankfiliale', 'geschäftsstelle', 'geschaeftsstelle', 'zweigstelle',
    'geldautomat', 'atm', 'bankautomat', 'kontoauszugsdrucker', 'sbs', 'selbstbedienung',
    // Versicherungen
    'allianz', 'axa', 'huk', 'ergo', 'generali', 'zurich', 'aok', 'tk', 'barmer', 'dak',
    'versicherungsagentur', 'versicherungsbüro', 'versicherungsbuero', 'maklerbüro', 'maklerbuero',
    // Finanzdienstleister
    'finanzberater', 'vermögensberater', 'vermoegensberater', 'anlageberater', 'fondsberater',
    'bausparkasse', 'lbs', 'schwäbisch hall', 'schwaebisch hall', 'wüstenrot', 'wuestenrot',
    'leasing', 'factoring', 'inkasso', 'kreditinstitut',
    // Bereiche
    'schalterraum', 'schalter', 'kassenraum', 'tresor', 'tresorraum', 'safe', 'schließfach', 'schliessfach',
    'beratungsraum', 'beratungszimmer', 'kundencenter', 'empfang', 'lobby', 'wartezone',
    // Sicherheit
    'sicherheitsbereich', 'hochsicherheit', 'diskret', 'vertraulich', 'datenschutz'
  ],
  'automotive': [
    // Direkte Begriffe
    'automotive', 'auto', 'kfz', 'fahrzeug', 'car', 'vehicle',
    // Autohäuser
    'autohaus', 'autohändler', 'autohaendler', 'autoverkauf', 'neuwagen', 'gebrauchtwagen', 'jahreswagen',
    'showroom', 'ausstellungsraum', 'verkaufsraum', 'präsentationsfläche', 'praesentationsflaeche',
    // Marken
    'mercedes', 'bmw', 'audi', 'vw', 'volkswagen', 'porsche', 'opel', 'ford', 'toyota', 'honda',
    'nissan', 'mazda', 'hyundai', 'kia', 'skoda', 'seat', 'renault', 'peugeot', 'citroen', 'fiat',
    // Werkstätten
    'werkstatt', 'autowerkstatt', 'kfz werkstatt', 'meisterbetrieb', 'reparatur', 'inspektion', 'service',
    'atu', 'pit stop', 'vergölst', 'euromaster', 'freie werkstatt', 'vertragswerkstatt',
    'reifenwechsel', 'reifenservice', 'tüv', 'tuev', 'dekra', 'hauptuntersuchung', 'hu', 'au',
    'karosserie', 'lackierung', 'smart repair', 'unfallreparatur', 'glasreparatur',
    // Waschanlage
    'waschanlage', 'autowaschanlage', 'waschstraße', 'waschstrasse', 'waschhalle',
    // Bereiche
    'werkstatthalle', 'hebebühne', 'hebebuehne', 'grube', 'montage', 'ersatzteillager', 'teileverkauf',
    'kundenbereich', 'wartezone', 'kaffeeecke', 'empfang',
    // Tankstelle
    'tankstelle', 'tanken', 'zapfsäule', 'shop', 'tankstellenshop'
  ],
}

// Funktion um zu prüfen ob ein Suchbegriff zu einer Branche passt
function matchesSearch(brancheSlug: string, searchQuery: string): boolean {
  if (!searchQuery.trim()) return true

  const query = searchQuery.toLowerCase().trim()
  const terms = searchTermsMap[brancheSlug] || []
  const branche = branchen.find(b => b.slug === brancheSlug)

  if (!branche) return false

  // Alle durchsuchbaren Texte zusammenfügen
  const allSearchableText = [
    branche.name.toLowerCase(),
    branche.shortName.toLowerCase(),
    branche.description.toLowerCase(),
    branche.headline.toLowerCase(),
    branche.subheadline.toLowerCase(),
    branche.seoContent.toLowerCase(),
    ...branche.keywords.map(k => k.toLowerCase()),
    ...branche.services.map(s => s.toLowerCase()),
    ...branche.benefits.map(b => b.toLowerCase()),
    ...branche.detailedChallenges.map(c => c.titel.toLowerCase() + ' ' + c.beschreibung.toLowerCase()),
    ...terms
  ].join(' ')

  // Teile die Suchanfrage in einzelne Wörter
  const queryWords = query.split(/\s+/)

  // Alle Wörter müssen gefunden werden
  return queryWords.every(word => allSearchableText.includes(word))
}

export default function BranchenPage() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showStickySearch, setShowStickySearch] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  const filteredBranchen = useMemo(() => {
    if (!searchQuery.trim()) return branchen
    return branchen.filter(b => matchesSearch(b.slug, searchQuery))
  }, [searchQuery])

  // Scroll-Detection für sticky Suchleiste
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom
        setShowStickySearch(heroBottom < 0)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-scroll zu Ergebnissen
  const scrollToResults = () => {
    document.getElementById('branchen-grid')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    if (value.trim()) {
      setTimeout(scrollToResults, 100)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      scrollToResults()
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-[#012956] py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#109387]/10 to-transparent" />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-center">
            {/* Content */}
            <div>
              <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
                Unsere Branchen
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] mb-6">
                Branchenspezifische
                <span className="block text-[#109387] mt-2">Reinigungslösungen</span>
              </h1>

              <p className="text-lg text-white/80 font-semibold leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Jede Branche hat ihre eigenen Anforderungen an Sauberkeit und Hygiene.
                Wir kennen die Besonderheiten und bieten maßgeschneiderte Konzepte.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-10 mb-10">
                {[
                  { value: '12', label: 'Branchen' },
                  { value: '8+', label: 'Jahre Erfahrung' },
                  { value: '100%', label: 'Branchenkenntnis' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-[#109387] font-bold text-4xl lg:text-5xl">{stat.value}</div>
                    <div className="text-white/60 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Branche anfragen
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Search Box - Desktop */}
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-sm rounded-[12px] p-8 border border-white/10">
                <h3 className="text-white font-bold text-2xl mb-2">Branche finden</h3>
                <p className="text-white/60 font-semibold mb-6">
                  Suchen Sie nach Ihrer Branche, z.B. Arzt, Hotel, Werkstatt...
                </p>

                {/* Search Input */}
                <div className="relative">
                  <Search size={22} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="z.B. Physiotherapie, Autohaus, Schule..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full pl-14 pr-12 py-5 rounded-[8px] border-2 border-transparent bg-white font-semibold text-lg text-[#012956] placeholder:text-gray-400 focus:outline-none focus:border-[#109387] transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <X size={16} className="text-gray-500" />
                    </button>
                  )}
                </div>

                {/* Quick Suggestions */}
                <div className="mt-6">
                  <p className="text-white/50 font-semibold text-sm mb-3">Beliebte Suchen:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Arztpraxis', 'Hotel', 'Fitnessstudio', 'Autohaus', 'Schule', 'Büro'].map((term) => (
                      <button
                        key={term}
                        onClick={() => handleSearch(term)}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-[6px] transition-all"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Result Count */}
                {searchQuery && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white font-semibold">
                      {filteredBranchen.length === 0 ? (
                        <span className="text-red-400">Keine Ergebnisse für „{searchQuery}"</span>
                      ) : (
                        <span className="text-[#109387]">{filteredBranchen.length} Branche{filteredBranchen.length !== 1 ? 'n' : ''} gefunden</span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden mt-10">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Branche suchen... z.B. Arzt, Hotel"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pl-12 pr-10 py-4 rounded-[8px] bg-white font-semibold text-[#012956] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#109387] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-3 text-center text-white/80 font-semibold">
                {filteredBranchen.length} Ergebnis{filteredBranchen.length !== 1 ? 'se' : ''}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Sticky Search Bar - erscheint beim Scrollen am Hero vorbei */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg transition-all duration-500 ease-out ${
          showStickySearch
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="py-3 lg:py-4">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
              {/* Search Input */}
              <div className="relative flex-1 max-w-xl">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Branche suchen... z.B. Arzt, Hotel, Werkstatt"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full pl-12 pr-10 py-3 rounded-[6px] border border-gray-200 bg-[#f8f9fa] font-semibold text-[#012956] placeholder:text-gray-400 focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {/* Quick Tags - nur Desktop */}
              <div className="hidden lg:flex items-center gap-2">
                {['Arztpraxis', 'Hotel', 'Büro', 'Autohaus'].map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSearch(term)}
                    className={`px-4 py-2 rounded-[6px] font-semibold text-sm whitespace-nowrap transition-all ${
                      searchQuery === term
                        ? 'bg-[#012956] text-white'
                        : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
                    }`}
                  >
                    {term}
                  </button>
                ))}
              </div>

              {/* Result Count - inline auf Desktop */}
              {searchQuery && (
                <div className="hidden md:block">
                  <p className="text-gray-600 font-semibold text-sm whitespace-nowrap">
                    {filteredBranchen.length === 0 ? (
                      <span className="text-red-500">Keine Ergebnisse</span>
                    ) : (
                      <span className="text-[#109387]">{filteredBranchen.length} gefunden</span>
                    )}
                  </p>
                </div>
              )}
            </div>

            {/* Result Count - Mobile */}
            {searchQuery && (
              <div className="md:hidden mt-2">
                <p className="text-gray-600 font-semibold text-sm">
                  {filteredBranchen.length === 0 ? (
                    <span>Keine Ergebnisse für „{searchQuery}"</span>
                  ) : (
                    <span>{filteredBranchen.length} Branche{filteredBranchen.length !== 1 ? 'n' : ''} gefunden</span>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Branchen Grid */}
      <section id="branchen-grid" className="py-16 lg:py-28 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4">
              {searchQuery ? 'Suchergebnisse' : 'Alle Branchen im Überblick'}
            </h2>
            <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-2xl mx-auto">
              {searchQuery
                ? `Branchen passend zu Ihrer Suche nach „${searchQuery}"`
                : 'Finden Sie die passende Reinigungslösung für Ihre Branche.'
              }
            </p>
          </div>

          {/* Grid oder Keine Ergebnisse */}
          {filteredBranchen.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#012956] mb-3">Keine Ergebnisse gefunden</h3>
              <p className="text-lg text-gray-600 font-semibold mb-6">
                Versuchen Sie es mit anderen Suchbegriffen oder schauen Sie alle Branchen an.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-all"
              >
                Alle Branchen anzeigen
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredBranchen.map((branche) => {
                const IconComponent = branchenIcons[branche.icon] || Building2
                return (
                  <Link
                    key={branche.id}
                    href={`/branchen/${branche.slug}`}
                    className="group bg-white rounded-[8px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 active:scale-[0.98]"
                  >
                    {/* Image */}
                    <div className="relative h-44 md:h-52 overflow-hidden">
                      <Image
                        src={branche.heroImage}
                        alt={branche.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Default dark gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/90 via-[#012956]/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                      {/* Hover: White overlay from bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/70 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                      {/* Icon & Title Container */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        {/* Icon Box */}
                        <div className="w-14 h-14 bg-[#109387] rounded-[8px] flex items-center justify-center mb-3 shadow-lg transition-all duration-500 group-hover:bg-[#012956]">
                          <IconComponent size={26} strokeWidth={1.5} className="text-white" />
                        </div>

                        {/* Short Name */}
                        <span className="text-white/80 font-semibold text-sm uppercase tracking-wider transition-colors duration-500 group-hover:text-[#109387]">
                          {branche.shortName}
                        </span>

                        {/* Main Title */}
                        <h3 className="text-white font-bold text-xl mt-1 transition-colors duration-500 group-hover:text-[#012956]">
                          {branche.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-gray-700 font-semibold text-[15px] leading-relaxed mb-4 line-clamp-2">
                        {branche.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-[#109387] font-bold text-[15px]">
                          Mehr erfahren
                        </span>
                        <ArrowRight
                          size={18}
                          strokeWidth={2}
                          className="text-[#109387] group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Partner Trust - Ausrüstung */}
      <PartnerLogosSlider
        showHeader={true}
        showStats={true}
        bgColor="#ffffff"
      />

      {/* Kunden Trust - Social Proof vor CTA */}
      <KundenLogosSlider
        showHeader={true}
        showStats={false}
        bgColor="#f8f9fa"
      />

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-3">
                Ihre Branche nicht dabei?
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6">
                Wir finden die passende
                <span className="block text-white mt-2">Lösung für Sie</span>
              </h2>
              <p className="text-lg text-white/80 font-semibold leading-relaxed mb-10">
                Kontaktieren Sie uns für ein individuelles Reinigungskonzept –
                wir haben für jede Branche die richtige Lösung.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
                >
                  Kostenfreie Beratung
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+4987143033460"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
                >
                  0871 430 334 60
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
