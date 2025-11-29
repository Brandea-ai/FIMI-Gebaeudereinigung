'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  Clock,
  Euro,
  CheckCircle2,
  Briefcase,
  Users,
  GraduationCap,
  Heart,
  TrendingUp,
  Shield,
  Phone,
  Mail,
  FileText,
  ChevronRight,
  Building2,
  Star,
  Calendar
} from 'lucide-react'

// ============================================================================
// STELLENANGEBOTE DATEN - 12 Positionen, 8 Standorte, sortiert nach Datum
// ============================================================================

interface JobPosition {
  id: string
  titel: string
  bereich: string
  standorte: string[]
  arbeitszeit: string
  gehalt: string
  beschreibung: string
  aufgaben: string[]
  anforderungen: string[]
  benefits: string[]
  dringend?: boolean
  neu?: boolean
  veroeffentlicht: string // Datum für Sortierung
}

const stellenangebote: JobPosition[] = [
  // NOVEMBER 2025 (Neueste)
  {
    id: 'objektleiter-muenchen',
    titel: 'Objektleiter/in (m/w/d)',
    bereich: 'Führung & Management',
    standorte: ['München', 'Freising'],
    arbeitszeit: 'Vollzeit',
    gehalt: '3.200 € - 3.800 € / Monat',
    beschreibung: 'Als Objektleiter/in koordinieren Sie die Reinigungsteams an mehreren Standorten im Großraum München. Sie sind Ansprechpartner für unsere Kunden und stellen die Qualität unserer Dienstleistungen sicher.',
    aufgaben: [
      'Führung und Koordination von Reinigungsteams (10-30 Mitarbeiter)',
      'Kundenbetreuung und -kommunikation vor Ort',
      'Qualitätskontrolle und Dokumentation',
      'Personaleinsatzplanung und Dienstplangestaltung',
      'Einarbeitung neuer Mitarbeiter',
      'Material- und Bedarfsplanung'
    ],
    anforderungen: [
      'Abgeschlossene Ausbildung oder mehrjährige Erfahrung in der Gebäudereinigung',
      'Führungserfahrung wünschenswert',
      'Sehr gute Deutschkenntnisse in Wort und Schrift',
      'Führerschein Klasse B zwingend erforderlich',
      'Organisationstalent und Durchsetzungsvermögen'
    ],
    benefits: [
      'Attraktives Gehalt + Prämien',
      'Firmenwagen zur privaten Nutzung',
      'Firmenhandy',
      '30 Tage Urlaub',
      'Betriebliche Altersvorsorge'
    ],
    dringend: true,
    neu: true,
    veroeffentlicht: '15. November 2025'
  },
  {
    id: 'reinigungskraft-regensburg',
    titel: 'Reinigungskraft (m/w/d)',
    bereich: 'Unterhaltsreinigung',
    standorte: ['Regensburg', 'Straubing'],
    arbeitszeit: 'Vollzeit / Teilzeit',
    gehalt: '15,00 € - 17,00 € / Stunde',
    beschreibung: 'Als Reinigungskraft bei FIMI übernehmen Sie die professionelle Unterhaltsreinigung in Bürogebäuden, Praxen und Gewerbeobjekten im Raum Regensburg.',
    aufgaben: [
      'Professionelle Unterhaltsreinigung von Büro- und Geschäftsräumen',
      'Reinigung von Sanitäranlagen und Küchenbereichen',
      'Pflege von Bodenbelägen (Saugen, Wischen, Polieren)',
      'Staubwischen und Oberflächenpflege',
      'Dokumentation der durchgeführten Arbeiten'
    ],
    anforderungen: [
      'Zuverlässigkeit und Pünktlichkeit',
      'Sorgfältige und gründliche Arbeitsweise',
      'Teamfähigkeit und Eigeninitiative',
      'Grundkenntnisse Deutsch von Vorteil',
      'Keine Vorkenntnisse erforderlich – wir schulen Sie!'
    ],
    benefits: [
      'Faire Bezahlung ab 15,00 €/Std.',
      'Unbefristeter Arbeitsvertrag',
      'Geregelte Arbeitszeiten',
      'Kostenlose Arbeitskleidung',
      'Weiterbildungsmöglichkeiten'
    ],
    neu: true,
    veroeffentlicht: '12. November 2025'
  },
  {
    id: 'industriereiniger-ingolstadt',
    titel: 'Industriereiniger/in (m/w/d)',
    bereich: 'Industriereinigung',
    standorte: ['Ingolstadt', 'Regensburg'],
    arbeitszeit: 'Vollzeit / Schicht',
    gehalt: '16,00 € - 19,00 € / Stunde',
    beschreibung: 'Für unsere Industriekunden im Raum Ingolstadt suchen wir erfahrene Industriereiniger. Sie übernehmen die professionelle Reinigung von Produktionshallen und Anlagen.',
    aufgaben: [
      'Reinigung von Produktionshallen und Lagerflächen',
      'Bedienung von Scheuersaugmaschinen und Kehrmaschinen',
      'Maschinenreinigung und Entfettung',
      'Hochdruckreinigung von Böden und Anlagen',
      'Einhaltung von Sicherheitsvorschriften'
    ],
    anforderungen: [
      'Erfahrung in der Industriereinigung von Vorteil',
      'Körperliche Belastbarkeit',
      'Bereitschaft zu Schichtarbeit',
      'Führerschein Klasse B von Vorteil',
      'Zuverlässigkeit und Teamfähigkeit'
    ],
    benefits: [
      'Faire Bezahlung + Schichtzulagen',
      'Moderne Reinigungsmaschinen',
      'Sicherheitsausrüstung wird gestellt',
      'Unbefristeter Arbeitsvertrag',
      'Betriebliche Altersvorsorge'
    ],
    dringend: true,
    veroeffentlicht: '08. November 2025'
  },
  // OKTOBER 2025
  {
    id: 'vorarbeiter-landshut',
    titel: 'Vorarbeiter/in (m/w/d)',
    bereich: 'Teamleitung',
    standorte: ['Landshut', 'Erding'],
    arbeitszeit: 'Vollzeit',
    gehalt: '17,50 € - 20,00 € / Stunde',
    beschreibung: 'Als Vorarbeiter/in leiten Sie ein Team und sind für die operative Durchführung der Reinigungsarbeiten in einem oder mehreren Objekten im Raum Landshut verantwortlich.',
    aufgaben: [
      'Fachliche Anleitung eines Reinigungsteams (3-8 Mitarbeiter)',
      'Eigenständige Durchführung von Reinigungsarbeiten',
      'Qualitätssicherung und Nachkontrolle',
      'Einweisung neuer Kollegen',
      'Kommunikation mit Objektleitung und Kunden'
    ],
    anforderungen: [
      'Mindestens 2 Jahre Berufserfahrung in der Gebäudereinigung',
      'Gute Deutschkenntnisse',
      'Führerschein Klasse B von Vorteil',
      'Verantwortungsbewusstsein und Zuverlässigkeit',
      'Bereitschaft zur Schichtarbeit'
    ],
    benefits: [
      'Attraktive Vergütung',
      'Zulagen für Führungsverantwortung',
      'Unbefristeter Arbeitsvertrag',
      'Aufstiegsmöglichkeiten zum Objektleiter',
      'Regelmäßige Schulungen'
    ],
    veroeffentlicht: '28. Oktober 2025'
  },
  {
    id: 'glasreiniger-passau',
    titel: 'Glasreiniger/in (m/w/d)',
    bereich: 'Spezialreinigung',
    standorte: ['Passau', 'Straubing'],
    arbeitszeit: 'Vollzeit',
    gehalt: '16,50 € - 19,00 € / Stunde',
    beschreibung: 'Für unsere Kunden in Niederbayern suchen wir erfahrene Glasreiniger. Sie sorgen für strahlend saubere Fenster und Glasflächen bei gewerblichen und privaten Kunden.',
    aufgaben: [
      'Professionelle Fenster- und Glasreinigung',
      'Reinigung von Fassadenelementen und Wintergärten',
      'Rahmen- und Falzreinigung',
      'Einsatz von Teleskopstangen und Leitern',
      'Arbeit mit Osmose-Anlagen für streifenfreie Ergebnisse'
    ],
    anforderungen: [
      'Erfahrung in der Glasreinigung wünschenswert',
      'Schwindelfreiheit und körperliche Fitness',
      'Führerschein Klasse B erforderlich',
      'Zuverlässigkeit und Kundenorientierung',
      'Bereitschaft für Außeneinsätze bei jeder Witterung'
    ],
    benefits: [
      'Attraktive Vergütung',
      'Modernes Equipment (Unger, Moerman)',
      'Firmenwagen für Objektfahrten',
      'Wetterschutzkleidung',
      'Eigenständiges Arbeiten'
    ],
    veroeffentlicht: '22. Oktober 2025'
  },
  {
    id: 'reinigungskraft-muenchen',
    titel: 'Reinigungskraft (m/w/d)',
    bereich: 'Unterhaltsreinigung',
    standorte: ['München', 'Freising'],
    arbeitszeit: 'Vollzeit / Teilzeit',
    gehalt: '15,50 € - 17,50 € / Stunde',
    beschreibung: 'Für den Großraum München suchen wir zuverlässige Reinigungskräfte für die Unterhaltsreinigung in Bürogebäuden und Gewerbeobjekten.',
    aufgaben: [
      'Professionelle Unterhaltsreinigung von Büro- und Geschäftsräumen',
      'Reinigung von Sanitäranlagen und Küchenbereichen',
      'Pflege von Bodenbelägen',
      'Staubwischen und Oberflächenpflege',
      'Müllentsorgung und Abfallmanagement'
    ],
    anforderungen: [
      'Zuverlässigkeit und Pünktlichkeit',
      'Sorgfältige Arbeitsweise',
      'Teamfähigkeit',
      'Grundkenntnisse Deutsch von Vorteil',
      'Keine Vorkenntnisse erforderlich'
    ],
    benefits: [
      'Faire Bezahlung ab 15,50 €/Std.',
      'Unbefristeter Arbeitsvertrag',
      'Geregelte Arbeitszeiten',
      'Kostenlose Arbeitskleidung',
      'Moderne Reinigungsgeräte'
    ],
    dringend: true,
    veroeffentlicht: '18. Oktober 2025'
  },
  {
    id: 'hausmeister-landshut',
    titel: 'Hausmeister/in (m/w/d)',
    bereich: 'Facility Management',
    standorte: ['Landshut', 'Erding'],
    arbeitszeit: 'Vollzeit',
    gehalt: '2.800 € - 3.400 € / Monat',
    beschreibung: 'Als Hausmeister/in betreuen Sie Wohn- und Gewerbeobjekte unserer Kunden im Raum Landshut. Sie kümmern sich um kleinere Reparaturen und sind Ansprechpartner vor Ort.',
    aufgaben: [
      'Betreuung von Wohn- und Gewerbeimmobilien',
      'Durchführung kleinerer Reparatur- und Wartungsarbeiten',
      'Pflege von Außenanlagen und Grünflächen',
      'Winterdienst (Schneeräumung, Streuen)',
      'Kontrolle technischer Anlagen'
    ],
    anforderungen: [
      'Handwerkliches Geschick und technisches Verständnis',
      'Idealerweise handwerkliche Ausbildung',
      'Führerschein Klasse B erforderlich',
      'Gute Deutschkenntnisse',
      'Freundliches und serviceorientiertes Auftreten'
    ],
    benefits: [
      'Festgehalt mit Zusatzleistungen',
      'Firmenwagen',
      'Firmenhandy',
      'Selbstständiges Arbeiten',
      'Abwechslungsreiche Tätigkeit'
    ],
    veroeffentlicht: '10. Oktober 2025'
  },
  // SEPTEMBER 2025
  {
    id: 'reinigungskraft-minijob-erding',
    titel: 'Reinigungskraft Minijob (m/w/d)',
    bereich: 'Unterhaltsreinigung',
    standorte: ['Erding', 'Freising'],
    arbeitszeit: 'Minijob (556 € Basis)',
    gehalt: '15,00 € / Stunde',
    beschreibung: 'Ideal für Nebenverdienst: Als Reinigungskraft auf 556-Euro-Basis reinigen Sie in den frühen Morgen- oder Abendstunden Büros und Praxen im Raum Erding.',
    aufgaben: [
      'Unterhaltsreinigung von Büros und Praxen',
      'Reinigung von Sanitäranlagen',
      'Müllentsorgung',
      'Staubwischen und Bodenpflege'
    ],
    anforderungen: [
      'Zuverlässigkeit',
      'Flexibilität bei den Arbeitszeiten',
      'Keine Vorkenntnisse nötig'
    ],
    benefits: [
      'Flexible Arbeitszeiten',
      'Einsätze in Wohnortnähe',
      'Pünktliche Lohnzahlung',
      'Kostenlose Arbeitskleidung',
      'Möglichkeit zur Stundenaufstockung'
    ],
    veroeffentlicht: '28. September 2025'
  },
  {
    id: 'baureiniger-ingolstadt',
    titel: 'Baureiniger/in (m/w/d)',
    bereich: 'Baureinigung',
    standorte: ['Ingolstadt', 'München'],
    arbeitszeit: 'Vollzeit / Projektbasis',
    gehalt: '16,00 € - 18,50 € / Stunde',
    beschreibung: 'Für Bauprojekte im Raum Ingolstadt und München suchen wir Baureiniger. Sie übernehmen die Grob- und Feinreinigung auf Baustellen nach Fertigstellung.',
    aufgaben: [
      'Baugrobreinigung (Entfernen von Baustaub, Mörtelresten)',
      'Baufeinreinigung vor Übergabe',
      'Fensterreinigung inkl. Rahmen',
      'Reinigung von Sanitärräumen',
      'Bodenreinigung und -pflege'
    ],
    anforderungen: [
      'Erfahrung in der Baureinigung von Vorteil',
      'Körperliche Belastbarkeit',
      'Führerschein Klasse B von Vorteil',
      'Flexibilität bei Arbeitszeiten',
      'Teamfähigkeit'
    ],
    benefits: [
      'Faire Bezahlung',
      'Abwechslungsreiche Projekte',
      'Moderne Ausrüstung',
      'Unbefristeter Arbeitsvertrag',
      'Weiterbildungsmöglichkeiten'
    ],
    veroeffentlicht: '22. September 2025'
  },
  {
    id: 'objektleiter-passau',
    titel: 'Objektleiter/in (m/w/d)',
    bereich: 'Führung & Management',
    standorte: ['Passau', 'Straubing'],
    arbeitszeit: 'Vollzeit',
    gehalt: '3.000 € - 3.600 € / Monat',
    beschreibung: 'Für den Aufbau unserer Region Niederbayern Ost suchen wir einen erfahrenen Objektleiter. Sie bauen das Team auf und koordinieren die Reinigungseinsätze.',
    aufgaben: [
      'Aufbau und Führung eines Reinigungsteams',
      'Kundenakquise und -betreuung',
      'Qualitätskontrolle und Dokumentation',
      'Personaleinsatzplanung',
      'Angebotserstellung',
      'Regelmäßiges Reporting'
    ],
    anforderungen: [
      'Mehrjährige Erfahrung in der Gebäudereinigung',
      'Führungserfahrung erforderlich',
      'Sehr gute Deutschkenntnisse',
      'Führerschein Klasse B zwingend erforderlich',
      'Unternehmerisches Denken'
    ],
    benefits: [
      'Attraktives Gehalt + Provision',
      'Firmenwagen zur privaten Nutzung',
      'Firmenhandy und Laptop',
      '30 Tage Urlaub',
      'Eigenverantwortliches Arbeiten'
    ],
    veroeffentlicht: '15. September 2025'
  },
  {
    id: 'reinigungskraft-landshut',
    titel: 'Reinigungskraft (m/w/d)',
    bereich: 'Unterhaltsreinigung',
    standorte: ['Landshut', 'Moosburg'],
    arbeitszeit: 'Vollzeit / Teilzeit',
    gehalt: '14,50 € - 16,50 € / Stunde',
    beschreibung: 'Für unseren Hauptstandort Landshut suchen wir Reinigungskräfte für verschiedene Objekte. Sie arbeiten in einem festen Team mit geregelten Arbeitszeiten.',
    aufgaben: [
      'Unterhaltsreinigung von Bürogebäuden',
      'Reinigung von Sanitäranlagen',
      'Pflege von Bodenbelägen',
      'Staubwischen und Oberflächenpflege',
      'Müllentsorgung'
    ],
    anforderungen: [
      'Zuverlässigkeit und Pünktlichkeit',
      'Sorgfältige Arbeitsweise',
      'Teamfähigkeit',
      'Keine Vorkenntnisse erforderlich'
    ],
    benefits: [
      'Faire Bezahlung',
      'Unbefristeter Arbeitsvertrag',
      'Feste Arbeitszeiten',
      'Kostenlose Arbeitskleidung',
      'Kurze Anfahrtswege'
    ],
    veroeffentlicht: '10. September 2025'
  },
  {
    id: 'reinigungskraft-minijob-straubing',
    titel: 'Reinigungskraft Minijob (m/w/d)',
    bereich: 'Unterhaltsreinigung',
    standorte: ['Straubing', 'Regensburg'],
    arbeitszeit: 'Minijob (556 € Basis)',
    gehalt: '14,50 € / Stunde',
    beschreibung: 'Für den Raum Straubing/Regensburg suchen wir Reinigungskräfte auf Minijob-Basis. Perfekt als Nebenverdienst mit flexiblen Arbeitszeiten.',
    aufgaben: [
      'Unterhaltsreinigung von Büros',
      'Reinigung von Sanitäranlagen',
      'Staubwischen und Bodenpflege'
    ],
    anforderungen: [
      'Zuverlässigkeit',
      'Flexibilität',
      'Keine Vorkenntnisse nötig'
    ],
    benefits: [
      'Flexible Arbeitszeiten',
      'Einsätze in Wohnortnähe',
      'Pünktliche Lohnzahlung',
      'Kostenlose Arbeitskleidung'
    ],
    veroeffentlicht: '05. September 2025'
  }
]

// 8 Standorte mit Stellenanzahl
const standorte = [
  { stadt: 'Landshut', stellen: 3 },
  { stadt: 'München', stellen: 3 },
  { stadt: 'Regensburg', stellen: 3 },
  { stadt: 'Ingolstadt', stellen: 2 },
  { stadt: 'Freising', stellen: 3 },
  { stadt: 'Erding', stellen: 3 },
  { stadt: 'Straubing', stellen: 3 },
  { stadt: 'Passau', stellen: 2 }
]

// ============================================================================
// VORTEILE / BENEFITS
// ============================================================================

const unternehmensvorteile = [
  {
    icon: Euro,
    titel: 'Faire Bezahlung',
    beschreibung: 'Attraktive Stundenlöhne und pünktliche Lohnzahlung – immer zum Monatsende.'
  },
  {
    icon: Shield,
    titel: 'Sicherer Arbeitsplatz',
    beschreibung: 'Unbefristete Verträge und langfristige Perspektiven in einem wachsenden Unternehmen.'
  },
  {
    icon: Users,
    titel: 'Feste Teams',
    beschreibung: 'Keine Leiharbeit – Sie arbeiten immer mit denselben Kollegen zusammen.'
  },
  {
    icon: GraduationCap,
    titel: 'Weiterbildung',
    beschreibung: 'Regelmäßige Schulungen und echte Aufstiegsmöglichkeiten für jeden.'
  },
  {
    icon: Heart,
    titel: 'Wertschätzung',
    beschreibung: 'Bei uns sind Sie kein "Putzpersonal" – Sie sind ein wichtiger Teil des Teams.'
  },
  {
    icon: TrendingUp,
    titel: 'Karrierechancen',
    beschreibung: 'Vom Reiniger zum Objektleiter – bei uns ist alles möglich.'
  }
]

// ============================================================================
// HAUPTKOMPONENTE
// ============================================================================

export default function KarrierePage() {
  const [activeJob, setActiveJob] = useState<string | null>(null)
  const [isSidebarSticky, setIsSidebarSticky] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current && contentRef.current) {
        const sidebarTop = sidebarRef.current.getBoundingClientRect().top
        setIsSidebarSticky(sidebarTop <= 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToJob = (jobId: string) => {
    const element = document.getElementById(jobId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveJob(jobId)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ================================================================== */}
      {/* HERO SECTION - Linksbündig */}
      {/* ================================================================== */}
      <section className="relative py-20 lg:py-28 bg-[#012956] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#109387]/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-[#109387]/5 to-transparent" />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Zurück zur Startseite
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#109387]/20 text-[#109387] px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Briefcase size={16} />
              Karriere bei FIMI
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              Ihre Karriere in der
              <span className="block text-[#109387]">Gebäudereinigung</span>
            </h1>

            <p className="text-xl text-white/80 font-medium leading-relaxed mb-8 max-w-2xl">
              Werden Sie Teil eines wachsenden Unternehmens mit über 90 Mitarbeitern.
              Faire Bezahlung, sichere Arbeitsplätze und echte Entwicklungsmöglichkeiten.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('stellenangebote')}
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                {stellenangebote.length} offene Stellen
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('initiativbewerbung')}
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 border border-white/30"
              >
                Initiativbewerbung
              </button>
            </div>

            {/* Stats - Bento Grid Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[6px] p-4">
                <div className="text-3xl font-bold text-[#109387] mb-1">90+</div>
                <div className="text-white/70 text-sm font-medium">Mitarbeiter</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[6px] p-4">
                <div className="text-3xl font-bold text-[#109387] mb-1">{stellenangebote.length}</div>
                <div className="text-white/70 text-sm font-medium">Offene Stellen</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[6px] p-4">
                <div className="text-3xl font-bold text-[#109387] mb-1">{standorte.length}</div>
                <div className="text-white/70 text-sm font-medium">Standorte</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[6px] p-4">
                <div className="text-3xl font-bold text-[#109387] mb-1">15€+</div>
                <div className="text-white/70 text-sm font-medium">Stundenlohn</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* VORTEILE - Bento Grid, Linksbündig */}
      {/* ================================================================== */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="mb-12">
            <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
              Warum FIMI?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#012956] leading-tight">
              Das bieten wir Ihnen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {unternehmensvorteile.map((vorteil) => {
              const IconComponent = vorteil.icon
              return (
                <div
                  key={vorteil.titel}
                  className="bg-white rounded-[6px] p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#109387]/10 rounded-[6px] flex items-center justify-center mb-4">
                    <IconComponent size={24} className="text-[#109387]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#012956] mb-2">{vorteil.titel}</h3>
                  <p className="text-gray-600 font-medium text-sm">{vorteil.beschreibung}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* STELLENANGEBOTE MIT SIDEBAR - Bento Style */}
      {/* ================================================================== */}
      <section id="stellenangebote" className="py-16 lg:py-24 bg-white scroll-mt-24">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="mb-12">
            <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
              Aktuelle Stellenangebote
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#012956] leading-tight mb-4">
              {stellenangebote.length} offene Positionen
            </h2>
            <p className="text-gray-600 font-medium max-w-2xl">
              Finden Sie die passende Stelle für sich. Wir suchen engagierte Mitarbeiter
              für verschiedene Bereiche und Standorte in ganz Bayern.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8" ref={contentRef}>
            {/* SIDEBAR - Sticky */}
            <aside
              ref={sidebarRef}
              className="lg:w-80 xl:w-96 shrink-0"
            >
              <div className={`bg-[#f8f9fa] rounded-[6px] p-6 ${isSidebarSticky ? 'lg:sticky lg:top-28' : ''}`}>
                <h3 className="text-lg font-bold text-[#012956] mb-4 flex items-center gap-2">
                  <FileText size={20} className="text-[#109387]" />
                  Offene Stellen
                </h3>

                <nav className="space-y-2">
                  {stellenangebote.map((job) => (
                    <button
                      key={job.id}
                      onClick={() => scrollToJob(job.id)}
                      className={`w-full text-left p-3 rounded-[6px] transition-all duration-200 group ${
                        activeJob === job.id
                          ? 'bg-[#109387] text-white'
                          : 'bg-white hover:bg-[#012956]/5'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {job.dringend && (
                              <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                                activeJob === job.id ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-700'
                              }`}>
                                GESUCHT
                              </span>
                            )}
                            {job.neu && (
                              <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                                activeJob === job.id ? 'bg-white/20 text-white' : 'bg-[#109387]/10 text-[#109387]'
                              }`}>
                                NEU
                              </span>
                            )}
                          </div>
                          <p className={`font-bold text-sm truncate ${
                            activeJob === job.id ? 'text-white' : 'text-[#012956]'
                          }`}>
                            {job.titel}
                          </p>
                          <p className={`text-xs mt-0.5 ${
                            activeJob === job.id ? 'text-white/70' : 'text-gray-500'
                          }`}>
                            {job.standorte[0]}{job.standorte.length > 1 && ` +${job.standorte.length - 1}`}
                          </p>
                        </div>
                        <ChevronRight size={16} className={`shrink-0 mt-1 transition-transform ${
                          activeJob === job.id ? 'text-white translate-x-0.5' : 'text-gray-400 group-hover:translate-x-0.5'
                        }`} />
                      </div>
                    </button>
                  ))}
                </nav>

                {/* Quick Contact in Sidebar */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm font-bold text-[#012956] mb-3">Fragen?</p>
                  <a
                    href="tel:+4917472254773"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#109387] font-medium mb-2"
                  >
                    <Phone size={14} />
                    0174 722 54 773
                  </a>
                  <a
                    href="mailto:bewerbung@fimi-reinigung.ch"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#109387] font-medium"
                  >
                    <Mail size={14} />
                    bewerbung@fimi-reinigung.ch
                  </a>
                </div>
              </div>
            </aside>

            {/* JOB LISTINGS - Bento Style */}
            <div className="flex-1 space-y-6">
              {stellenangebote.map((job) => (
                <article
                  key={job.id}
                  id={job.id}
                  className="bg-white border border-gray-200 rounded-[6px] overflow-hidden scroll-mt-32 hover:border-[#109387]/30 transition-colors"
                >
                  {/* Job Header */}
                  <div className="p-6 lg:p-8 border-b border-gray-100">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {job.dringend && (
                            <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">
                              GESUCHT
                            </span>
                          )}
                          {job.neu && (
                            <span className="bg-[#109387]/10 text-[#109387] text-xs font-bold px-2 py-1 rounded">
                              NEU
                            </span>
                          )}
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                            {job.bereich}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#012956]">{job.titel}</h3>
                      </div>
                      <a
                        href={`mailto:bewerbung@fimi-reinigung.ch?subject=Bewerbung: ${job.titel}&body=Sehr geehrtes FIMI-Team,%0D%0A%0D%0Aich interessiere mich für die Stelle "${job.titel}".%0D%0A%0D%0AMit freundlichen Grüßen`}
                        className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors shrink-0"
                      >
                        Jetzt bewerben
                        <ArrowRight size={18} />
                      </a>
                    </div>

                    {/* Job Meta */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} className="text-[#109387]" />
                        <span className="font-medium">{job.standorte.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={16} className="text-[#109387]" />
                        <span className="font-medium">{job.arbeitszeit}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Euro size={16} className="text-[#109387]" />
                        <span className="font-medium">{job.gehalt}</span>
                      </div>
                    </div>
                  </div>

                  {/* Job Content */}
                  <div className="p-6 lg:p-8">
                    <p className="text-gray-700 font-medium mb-6 leading-relaxed">
                      {job.beschreibung}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Aufgaben */}
                      <div>
                        <h4 className="font-bold text-[#012956] mb-3 flex items-center gap-2">
                          <Briefcase size={18} className="text-[#109387]" />
                          Ihre Aufgaben
                        </h4>
                        <ul className="space-y-2">
                          {job.aufgaben.map((aufgabe, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle2 size={16} className="text-[#109387] shrink-0 mt-0.5" />
                              <span>{aufgabe}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Anforderungen */}
                      <div>
                        <h4 className="font-bold text-[#012956] mb-3 flex items-center gap-2">
                          <Star size={18} className="text-[#109387]" />
                          Ihr Profil
                        </h4>
                        <ul className="space-y-2">
                          {job.anforderungen.map((anforderung, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle2 size={16} className="text-[#109387] shrink-0 mt-0.5" />
                              <span>{anforderung}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="font-bold text-[#012956] mb-3 flex items-center gap-2">
                        <Heart size={18} className="text-[#109387]" />
                        Das bieten wir
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.map((benefit, i) => (
                          <span
                            key={i}
                            className="bg-[#109387]/10 text-[#109387] text-sm font-medium px-3 py-1 rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Job Footer */}
                  <div className="bg-[#f8f9fa] px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                      <Calendar size={14} className="inline mr-1" />
                      Veröffentlicht am {job.veroeffentlicht}
                    </p>
                    <div className="flex gap-3">
                      <a
                        href={`mailto:bewerbung@fimi-reinigung.ch?subject=Bewerbung: ${job.titel}`}
                        className="inline-flex items-center gap-2 text-[#109387] hover:text-[#0d7d72] font-bold text-sm"
                      >
                        <Mail size={16} />
                        Per E-Mail bewerben
                      </a>
                      <a
                        href="tel:+4917472254773"
                        className="inline-flex items-center gap-2 text-[#012956] hover:text-[#109387] font-bold text-sm"
                      >
                        <Phone size={16} />
                        Anrufen
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INITIATIVBEWERBUNG */}
      {/* ================================================================== */}
      <section id="initiativbewerbung" className="py-16 lg:py-24 bg-[#012956] scroll-mt-24">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-[#109387]/20 text-[#109387] px-4 py-2 rounded-full text-sm font-bold mb-6">
                <FileText size={16} />
                Initiativbewerbung
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Keine passende Stelle dabei?
              </h2>
              <p className="text-white/70 font-medium text-lg max-w-2xl">
                Bewerben Sie sich initiativ! Wir sind immer auf der Suche nach
                engagierten Mitarbeitern und melden uns, sobald eine passende Position frei wird.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[6px] p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">So bewerben Sie sich</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-[#109387] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</span>
                      <div>
                        <p className="text-white font-medium">E-Mail senden</p>
                        <p className="text-white/60 text-sm">An bewerbung@fimi-reinigung.ch</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-[#109387] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</span>
                      <div>
                        <p className="text-white font-medium">Kurze Vorstellung</p>
                        <p className="text-white/60 text-sm">Wer sind Sie? Was suchen Sie?</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-[#109387] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</span>
                      <div>
                        <p className="text-white font-medium">Lebenslauf anhängen</p>
                        <p className="text-white/60 text-sm">Optional: Zeugnisse</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Wir suchen regelmäßig</h3>
                  <ul className="space-y-3">
                    {['Reinigungskräfte für Büros und Praxen', 'Industriereiniger für Produktionshallen', 'Glasreiniger mit Erfahrung', 'Hausmeister für Objektbetreuung', 'Vorarbeiter mit Führungserfahrung'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/80">
                        <CheckCircle2 size={18} className="text-[#109387]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:bewerbung@fimi-reinigung.ch?subject=Initiativbewerbung&body=Sehr geehrtes FIMI-Team,%0D%0A%0D%0Ahiermit möchte ich mich initiativ bei Ihnen bewerben.%0D%0A%0D%0AÜber mich:%0D%0A-%20Name:%0D%0A-%20Wohnort:%0D%0A-%20Gewünschte Tätigkeit:%0D%0A-%20Verfügbarkeit:%0D%0A%0D%0AMit freundlichen Grüßen"
                  className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
                >
                  <Mail size={20} />
                  Initiativbewerbung senden
                </a>
                <a
                  href="tel:+4917472254773"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 border border-white/30"
                >
                  <Phone size={20} />
                  0174 722 54 773
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* BEWERBUNGSPROZESS - Linksbündig */}
      {/* ================================================================== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="mb-12">
            <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
              Einfach & Schnell
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#012956] leading-tight">
              Unser Bewerbungsprozess
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { schritt: '1', titel: 'Bewerbung einreichen', text: 'Per E-Mail oder Telefon – einfach und unkompliziert.' },
              { schritt: '2', titel: 'Rückmeldung', text: 'Wir melden uns innerhalb von 48 Stunden bei Ihnen.' },
              { schritt: '3', titel: 'Kennenlerngespräch', text: 'Ein kurzes Gespräch – persönlich oder telefonisch.' },
              { schritt: '4', titel: 'Willkommen im Team', text: 'Arbeitsvertrag und Einarbeitung – los geht\'s!' }
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f9fa] rounded-[6px] p-6">
                <div className="w-12 h-12 bg-[#109387] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.schritt}
                </div>
                <h3 className="text-lg font-bold text-[#012956] mb-2">{item.titel}</h3>
                <p className="text-gray-600 font-medium text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* STANDORTE - Bento Grid, 8 Städte */}
      {/* ================================================================== */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="mb-12">
            <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
              Unsere Einsatzgebiete
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#012956] leading-tight">
              Arbeiten in Ihrer Nähe
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {standorte.map((standort) => (
              <div
                key={standort.stadt}
                className="bg-white rounded-[6px] p-5 flex items-center gap-4 shadow-sm"
              >
                <div className="w-10 h-10 bg-[#109387]/10 rounded-[6px] flex items-center justify-center shrink-0">
                  <Building2 size={20} className="text-[#109387]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#012956]">{standort.stadt}</h3>
                  <p className="text-sm text-gray-500">{standort.stellen} Stellen</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FINAL CTA - Linksbündig */}
      {/* ================================================================== */}
      <section className="py-16 lg:py-20 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-white/70 font-medium text-lg mb-8">
              Starten Sie Ihre Karriere bei FIMI Gebäudereinigung.
              Wir freuen uns auf Ihre Bewerbung!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:bewerbung@fimi-reinigung.ch"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
              >
                <Mail size={20} />
                bewerbung@fimi-reinigung.ch
              </a>
              <a
                href="tel:+4917472254773"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 border border-white/30"
              >
                <Phone size={20} />
                0174 722 54 773
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
