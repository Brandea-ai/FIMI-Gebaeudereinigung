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
  Calendar,
  X
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
  veroeffentlicht: string
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
    gehalt: '15,00 € - 18,00 € / Stunde',
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
    gehalt: '15,00 € - 18,00 € / Stunde',
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
      'Faire Bezahlung ab 15,00 €/Std.',
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
    gehalt: '15,00 € - 18,00 € / Stunde',
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
    gehalt: '15,00 € / Stunde',
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

// 8 Standorte
const standorte = [
  'Landshut',
  'München',
  'Regensburg',
  'Ingolstadt',
  'Freising',
  'Erding',
  'Straubing',
  'Passau'
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
// JOB MODAL COMPONENT (Fullscreen Mobile)
// ============================================================================

interface JobModalProps {
  job: JobPosition | null
  onClose: () => void
}

function JobModal({ job, onClose }: JobModalProps) {
  useEffect(() => {
    if (job) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [job])

  if (!job) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal Content */}
      <div className="absolute inset-0 bg-white overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 z-10">
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
          <h2 className="text-xl font-bold text-[#012956]">{job.titel}</h2>
        </div>

        {/* Content */}
        <div className="p-4 pb-32">
          {/* Meta Info */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} className="text-[#109387]" />
              <span className="font-medium">{job.standorte.join(', ')}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={18} className="text-[#109387]" />
              <span className="font-medium">{job.arbeitszeit}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Euro size={18} className="text-[#109387]" />
              <span className="font-medium">{job.gehalt}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Calendar size={16} />
              <span>Veröffentlicht am {job.veroeffentlicht}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">{job.beschreibung}</p>

          {/* Aufgaben */}
          <div className="mb-6">
            <h3 className="font-bold text-[#012956] mb-3 flex items-center gap-2">
              <Briefcase size={18} className="text-[#109387]" />
              Ihre Aufgaben
            </h3>
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
          <div className="mb-6">
            <h3 className="font-bold text-[#012956] mb-3 flex items-center gap-2">
              <Star size={18} className="text-[#109387]" />
              Ihr Profil
            </h3>
            <ul className="space-y-2">
              {job.anforderungen.map((anforderung, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-[#109387] shrink-0 mt-0.5" />
                  <span>{anforderung}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h3 className="font-bold text-[#012956] mb-3 flex items-center gap-2">
              <Heart size={18} className="text-[#109387]" />
              Das bieten wir
            </h3>
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

          {/* CTA */}
          <a
            href={`mailto:bewerbung@fimi-reinigung.ch?subject=Bewerbung: ${job.titel}&body=Sehr geehrtes FIMI-Team,%0D%0A%0D%0Aich interessiere mich für die Stelle "${job.titel}".%0D%0A%0D%0AMit freundlichen Grüßen`}
            className="block w-full bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-center py-4 rounded-[6px] mb-4"
          >
            Jetzt bewerben
          </a>

          <a
            href="tel:+4917472254773"
            className="block w-full bg-[#012956] hover:bg-[#01203f] text-white font-bold text-center py-4 rounded-[6px]"
          >
            <Phone size={18} className="inline mr-2" />
            Anrufen: 0174 722 54 773
          </a>
        </div>

        {/* Fixed Close Button at Bottom */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 lg:hidden">
          <button
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 rounded-[6px] transition-colors"
          >
            <X size={20} />
            Schließen
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MOBILE JOB CARD (Indeed Style)
// ============================================================================

interface MobileJobCardProps {
  job: JobPosition
  onClick: () => void
}

function MobileJobCard({ job, onClick }: MobileJobCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white border border-gray-200 rounded-[6px] p-4 hover:border-[#109387]/50 hover:shadow-md transition-all"
    >
      {/* Tags */}
      <div className="flex items-center gap-2 mb-2">
        {job.dringend && (
          <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded">
            GESUCHT
          </span>
        )}
        {job.neu && (
          <span className="bg-[#109387]/10 text-[#109387] text-xs font-bold px-2 py-0.5 rounded">
            NEU
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-[#012956] mb-2">{job.titel}</h3>

      {/* Company */}
      <p className="text-sm text-gray-500 mb-3">FIMI Gebäudereinigung</p>

      {/* Key Facts */}
      <div className="space-y-2 mb-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={14} className="text-[#109387] shrink-0" />
          <span>{job.standorte.join(', ')}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Euro size={14} className="text-[#109387] shrink-0" />
          <span className="font-semibold text-[#012956]">{job.gehalt}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock size={14} className="text-[#109387] shrink-0" />
          <span>{job.arbeitszeit}</span>
        </div>
      </div>

      {/* Bereich Tag */}
      <div className="flex items-center justify-between">
        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
          {job.bereich}
        </span>
        <ChevronRight size={20} className="text-gray-400" />
      </div>
    </button>
  )
}

// ============================================================================
// HAUPTKOMPONENTE
// ============================================================================

export default function KarrierePage() {
  const [activeJob, setActiveJob] = useState<string | null>(null)
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null)
  const [isSidebarSticky, setIsSidebarSticky] = useState(false)
  const [showMoreJobs, setShowMoreJobs] = useState(false)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current && contentRef.current) {
        const sidebarTop = sidebarRef.current.getBoundingClientRect().top
        setIsSidebarSticky(sidebarTop <= 100)
      }

      // Auto-highlight: Finde den Job der gerade im Viewport ist
      const jobElements = stellenangebote.map(job => document.getElementById(job.id))
      const viewportCenter = window.innerHeight / 3

      for (const element of jobElements) {
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            setActiveJob(element.id)
            break
          }
        }
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
      {/* Mobile Job Modal */}
      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="relative py-16 lg:py-28 bg-[#012956] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#109387]/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-[#109387]/5 to-transparent" />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-4 lg:px-12 xl:px-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold mb-6 lg:mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Zurück zur Startseite
          </Link>

          <div className="max-w-4xl">
            <p className="text-sm lg:text-base text-[#109387] font-extrabold uppercase tracking-wide mb-3 lg:mb-4">
              Karriere bei FIMI
            </p>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 lg:mb-6">
              Ihre Karriere in der
              <span className="block text-[#109387]">Gebäudereinigung</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/80 font-medium leading-relaxed mb-6 lg:mb-8 max-w-2xl">
              Werden Sie Teil eines wachsenden Unternehmens mit über 90 Mitarbeitern.
              Faire Bezahlung, sichere Arbeitsplätze und echte Entwicklungsmöglichkeiten.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12">
              <button
                onClick={() => scrollToSection('stellenangebote')}
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-[6px] transition-all duration-300 group"
              >
                {stellenangebote.length} offene Stellen
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('initiativbewerbung')}
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-[6px] transition-all duration-300 border border-white/30"
              >
                Initiativbewerbung
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================== */}
      {/* STELLENANGEBOTE */}
      {/* ================================================================== */}
      <section id="stellenangebote" className="py-12 lg:py-24 bg-white scroll-mt-24">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-12 xl:px-20">
          <div className="mb-8 lg:mb-12">
            <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 lg:mb-3">
              Aktuelle Stellenangebote
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#012956] leading-tight mb-3 lg:mb-4">
              {stellenangebote.length} offene Positionen
            </h2>
            <p className="text-gray-600 font-medium text-sm lg:text-base max-w-2xl">
              Finden Sie die passende Stelle für sich. Wir suchen engagierte Mitarbeiter
              für verschiedene Bereiche und Standorte in ganz Bayern.
            </p>
          </div>

          {/* MOBILE: Indeed-Style Cards */}
          <div className="lg:hidden space-y-3">
            {stellenangebote.map((job) => (
              <MobileJobCard
                key={job.id}
                job={job}
                onClick={() => setSelectedJob(job)}
              />
            ))}
          </div>

          {/* DESKTOP: Sidebar + Full Cards */}
          <div className="hidden lg:flex flex-col lg:flex-row gap-8" ref={contentRef}>
            {/* SIDEBAR - Sticky & Scrollable */}
            <aside
              ref={sidebarRef}
              className="lg:w-80 xl:w-96 shrink-0"
            >
              <div className={`bg-[#f8f9fa] rounded-[6px] p-6 ${isSidebarSticky ? 'lg:sticky lg:top-28' : ''}`}>
                <h3 className="text-lg font-bold text-[#012956] mb-4 flex items-center gap-2">
                  <FileText size={20} className="text-[#109387]" />
                  Offene Stellen
                </h3>

                <nav className="space-y-2 max-h-[50vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#109387]/30 scrollbar-track-transparent">
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

            {/* JOB LISTINGS - Full Cards */}
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
      {/* INITIATIVBEWERBUNG + VORTEILE - Gleiche Höhe */}
      {/* ================================================================== */}
      <section id="initiativbewerbung" className="py-12 lg:py-24 bg-[#012956] scroll-mt-24">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

            {/* LINKS: Initiativbewerbung */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[6px] p-6 lg:p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-sm lg:text-base text-[#109387] font-extrabold uppercase tracking-wide mb-2">
                  Initiativbewerbung
                </p>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                  Keine passende Stelle dabei?
                </h2>
              </div>

              <div className="flex-1">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg lg:text-xl font-extrabold text-white mb-5">So bewerben Sie sich</h3>
                    <ol className="space-y-4">
                      <li className="flex items-start gap-4">
                        <span className="w-9 h-9 bg-[#109387] text-white rounded-full flex items-center justify-center font-extrabold text-sm shrink-0">1</span>
                        <div>
                          <p className="text-white font-bold text-base lg:text-lg">E-Mail senden</p>
                          <p className="text-white/70 text-sm font-medium">bewerbung@fimi-reinigung.ch</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="w-9 h-9 bg-[#109387] text-white rounded-full flex items-center justify-center font-extrabold text-sm shrink-0">2</span>
                        <div>
                          <p className="text-white font-bold text-base lg:text-lg">Kurze Vorstellung</p>
                          <p className="text-white/70 text-sm font-medium">Wer sind Sie?</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="w-9 h-9 bg-[#109387] text-white rounded-full flex items-center justify-center font-extrabold text-sm shrink-0">3</span>
                        <div>
                          <p className="text-white font-bold text-base lg:text-lg">Lebenslauf</p>
                          <p className="text-white/70 text-sm font-medium">Optional: Zeugnisse</p>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg lg:text-xl font-extrabold text-white mb-5">Wir suchen regelmäßig</h3>
                    <ul className="space-y-3">
                      {[
                        'Reinigungskräfte',
                        'Industriereiniger',
                        'Glasreiniger',
                        'Hausmeister',
                        'Vorarbeiter',
                        ...(showMoreJobs ? [
                          'Objektleiter',
                          'Baureiniger',
                          'Minijobber',
                          'Bürokaufleute',
                          'Vertriebsmitarbeiter',
                          'Marketing',
                          'Disponenten',
                          'Teamassistenz'
                        ] : [])
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white text-base lg:text-lg font-medium">
                          <CheckCircle2 size={20} className="text-[#109387] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setShowMoreJobs(!showMoreJobs)}
                      className="mt-5 text-[#109387] hover:text-[#0d7d72] text-base lg:text-lg font-extrabold flex items-center gap-2 transition-colors"
                    >
                      {showMoreJobs ? '− Weniger anzeigen' : '+ Mehr anzeigen'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:bewerbung@fimi-reinigung.ch?subject=Initiativbewerbung&body=Sehr geehrtes FIMI-Team,%0D%0A%0D%0Ahiermit möchte ich mich initiativ bei Ihnen bewerben.%0D%0A%0D%0AÜber mich:%0D%0A-%20Name:%0D%0A-%20Wohnort:%0D%0A-%20Gewünschte Tätigkeit:%0D%0A-%20Verfügbarkeit:%0D%0A%0D%0AMit freundlichen Grüßen"
                  className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm lg:text-base px-5 lg:px-6 py-3 rounded-[6px] transition-all duration-300"
                >
                  <Mail size={18} />
                  Jetzt bewerben
                </a>
                <a
                  href="tel:+4917472254773"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm lg:text-base px-5 lg:px-6 py-3 rounded-[6px] transition-all duration-300 border border-white/30"
                >
                  <Phone size={18} />
                  Anrufen
                </a>
              </div>
            </div>

            {/* RECHTS: Warum FIMI? Vorteile */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[6px] p-6 lg:p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-sm lg:text-base text-[#109387] font-extrabold uppercase tracking-wide mb-2">
                  Warum FIMI?
                </p>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                  Das bieten wir Ihnen
                </h2>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-4 lg:gap-5 content-start">
                {unternehmensvorteile.map((vorteil) => {
                  const IconComponent = vorteil.icon
                  return (
                    <div
                      key={vorteil.titel}
                      className="bg-white/5 rounded-[6px] p-4 lg:p-5"
                    >
                      <div className="w-11 h-11 lg:w-12 lg:h-12 bg-[#109387]/20 rounded-[6px] flex items-center justify-center mb-3">
                        <IconComponent size={22} className="text-[#109387] lg:w-6 lg:h-6" />
                      </div>
                      <h3 className="text-base lg:text-lg font-extrabold text-white mb-1">{vorteil.titel}</h3>
                      <p className="text-white/70 font-medium text-sm hidden lg:block">{vorteil.beschreibung}</p>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* BEWERBUNGSPROZESS - FIMI HR */}
      {/* ================================================================== */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-12 xl:px-20">
          <div className="mb-8 lg:mb-12">
            <p className="text-sm lg:text-base text-[#109387] font-extrabold uppercase tracking-wide mb-2 lg:mb-3">
              FIMI HR-Prozess
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#012956] leading-tight mb-4">
              Ihr Weg zu uns
            </h2>
            <p className="text-gray-600 font-medium text-base lg:text-lg max-w-3xl">
              Unser strukturierter Einstellungsprozess stellt sicher, dass wir die richtige Position für Sie finden
              und Sie optimal auf Ihre neue Aufgabe vorbereitet sind. Der gesamte Prozess wird in Ihrer bevorzugten
              Sprache begleitet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                schritt: '1',
                titel: 'Bewerbung einreichen',
                text: 'Per E-Mail, Telefon oder WhatsApp – unkompliziert und schnell. Wir melden uns innerhalb von 48 Stunden.',
                bullets: [
                  'Einfach per Anruf oder E-Mail bewerben',
                  'Lebenslauf hilfreich, aber kein Muss',
                  'Motivation & Zuverlässigkeit zählen',
                  'Persönliche Prüfung durch HR-Team',
                  'Rückmeldung innerhalb von 48 Stunden'
                ]
              },
              {
                schritt: '2',
                titel: 'Kennenlerngespräch',
                text: 'Ein persönliches Gespräch – vor Ort oder telefonisch, in Ihrer Sprache.',
                bullets: [
                  'Gespräch in Ihrer Sprache (DE, EN, TR, PL, RO)',
                  'Was motiviert Sie? Was sind Ihre Stärken?',
                  'Keine Prüfung – gemeinsames Kennenlernen',
                  'Welche Position passt optimal zu Ihnen?',
                  'Vor Ort oder telefonisch möglich'
                ]
              },
              {
                schritt: '3',
                titel: 'Kompetenz-Check',
                text: 'Ihr Wissen bestimmt Ihr Gehalt – faire Chancen für alle.',
                bullets: [
                  'Multiple-Choice-Test in Ihrer Sprache',
                  'Fachwissen, Sprache & Qualitätsverständnis',
                  'Je besser das Ergebnis, desto höher der Lohn',
                  '100 Punkte = bis zu +1,00 €/Std. ab Tag 1',
                  'Weitere Erhöhung nach Probezeit möglich'
                ]
              },
              {
                schritt: '4',
                titel: 'Willkommen im Team',
                text: 'Arbeitsvertrag, Einarbeitung und ein fester Ansprechpartner – los geht\'s!',
                bullets: [
                  'Unbefristeter Arbeitsvertrag',
                  'Einarbeitung durch erfahrenen Paten',
                  'Kostenlose Arbeitskleidung & Arbeitsmittel',
                  'Fester Ansprechpartner für die ersten Monate',
                  'Teil des Teams – nicht nur eine Nummer'
                ]
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-[#f8f9fa] rounded-[6px] p-5 lg:p-6 transition-all duration-300 ${
                  expandedStep === i ? 'ring-2 ring-[#109387]' : ''
                }`}
              >
                <div className="w-11 lg:w-12 h-11 lg:h-12 bg-[#109387] text-white rounded-[6px] flex items-center justify-center text-lg lg:text-xl font-extrabold mb-4">
                  {item.schritt}
                </div>
                <h3 className="text-base lg:text-lg font-extrabold text-[#012956] mb-2">{item.titel}</h3>
                <p className="text-gray-600 font-medium text-sm lg:text-base mb-3">{item.text}</p>

                {/* Expandable Details - Bullet Points */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedStep === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-3 border-t border-gray-200">
                    <ul className="space-y-2">
                      {item.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="w-2 h-2 bg-[#109387] rounded-[2px] shrink-0 mt-1.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                  className="mt-3 text-[#109387] hover:text-[#0d7d72] text-sm font-bold flex items-center gap-1 transition-colors"
                >
                  {expandedStep === i ? '− Weniger lesen' : '+ Mehr lesen'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* STANDORTE */}
      {/* ================================================================== */}
      <section className="py-12 lg:py-20 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-12 xl:px-20">
          <div className="mb-8 lg:mb-12">
            <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 lg:mb-3">
              Unsere Einsatzgebiete
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#012956] leading-tight">
              Arbeiten in Ihrer Nähe
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
            {standorte.map((stadt) => (
              <button
                key={stadt}
                onClick={() => {
                  const footer = document.querySelector('footer')
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="bg-white rounded-[6px] p-4 lg:p-5 flex items-center gap-3 lg:gap-4 shadow-sm hover:shadow-md hover:border-[#109387]/30 border border-transparent transition-all group cursor-pointer"
              >
                <MapPin size={20} className="text-[#109387] shrink-0 lg:w-6 lg:h-6" />
                <h3 className="font-extrabold text-[#012956] group-hover:text-[#109387] text-base lg:text-lg transition-colors">{stadt}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FINAL CTA */}
      {/* ================================================================== */}
      <section className="py-12 lg:py-20 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-12 xl:px-20">
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-white/70 font-medium text-base lg:text-lg mb-6 lg:mb-8">
              Starten Sie Ihre Karriere bei FIMI Gebäudereinigung.
              Wir freuen uns auf Ihre Bewerbung!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <a
                href="mailto:bewerbung@fimi-reinigung.ch"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-[6px] transition-all duration-300"
              >
                <Mail size={20} />
                <span className="hidden sm:inline">bewerbung@fimi-reinigung.ch</span>
                <span className="sm:hidden">E-Mail senden</span>
              </a>
              <a
                href="tel:+4917472254773"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-[6px] transition-all duration-300 border border-white/30"
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
