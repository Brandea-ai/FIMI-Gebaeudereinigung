import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheServicesProps {
  branche: Branche
}

// ALLE Services auf passende Leistungs-Seiten mappen
const serviceToUrl: Record<string, string> = {
  // Hauptleistungen
  'Unterhaltsreinigung': '/leistungen/unterhaltsreinigung',
  'Büroreinigung': '/leistungen/bueroreinigung',
  'Glasreinigung': '/leistungen/glasreinigung',
  'Fensterreinigung': '/leistungen/fensterreinigung',
  'Industriereinigung': '/leistungen/industriereinigung',
  'Maschinenreinigung': '/leistungen/maschinenreinigung',
  'Hallenreinigung': '/leistungen/hallenreinigung',
  'Sonderreinigung': '/leistungen/sonderreinigung',
  'Fassadenreinigung': '/leistungen/fassadenreinigung',
  'Außenanlagenpflege': '/leistungen/aussenanlagenpflege',
  'Winterdienst': '/leistungen/winterdienst',
  'Tiefgaragenreinigung': '/leistungen/tiefgaragenreinigung',
  'Baureinigung': '/leistungen/baureinigung',
  'Facility Management': '/leistungen/facility-management',
  'Hausmeisterservice': '/leistungen/hausmeisterservice',
  'Parkplatzreinigung': '/leistungen/parkplatzreinigung',

  // Büro & Verwaltung
  'Sanitärreinigung': '/leistungen/unterhaltsreinigung',
  'Teppichreinigung': '/leistungen/sonderreinigung',
  'Küchenreinigung': '/leistungen/unterhaltsreinigung',
  'Treppenhausreinigung': '/leistungen/unterhaltsreinigung',
  'Bodenreinigung': '/leistungen/unterhaltsreinigung',

  // Industrie & Produktion
  'Hochregalreinigung': '/leistungen/hallenreinigung',
  'Grundreinigung': '/leistungen/sonderreinigung',

  // Gesundheitswesen
  'Praxisreinigung': '/leistungen/unterhaltsreinigung',
  'Flächendesinfektion': '/leistungen/sonderreinigung',
  'Wartezimmerreinigung': '/leistungen/unterhaltsreinigung',
  'Laborreinigung': '/leistungen/sonderreinigung',
  'Desinfektion': '/leistungen/sonderreinigung',

  // Einzelhandel
  'Schaufensterreinigung': '/leistungen/glasreinigung',
  'Tagesreinigung': '/leistungen/unterhaltsreinigung',
  'Kassenbereichsreinigung': '/leistungen/unterhaltsreinigung',
  'Lagerreinigung': '/leistungen/hallenreinigung',

  // Gastronomie & Hotel
  'Zimmerreinigung': '/leistungen/unterhaltsreinigung',
  'Gastraumreinigung': '/leistungen/unterhaltsreinigung',
  'Lobbyreinigung': '/leistungen/unterhaltsreinigung',
  'Wellnessreinigung': '/leistungen/sonderreinigung',
  'Veranstaltungsreinigung': '/leistungen/sonderreinigung',

  // Bildung
  'Klassenraumreinigung': '/leistungen/unterhaltsreinigung',
  'Turnhallenreinigung': '/leistungen/hallenreinigung',
  'Mensareinigung': '/leistungen/unterhaltsreinigung',
  'Ferienreinigung': '/leistungen/sonderreinigung',

  // Fitness
  'Gerätedesinfektion': '/leistungen/sonderreinigung',
  'Umkleidenreinigung': '/leistungen/unterhaltsreinigung',
  'Duschbereichsreinigung': '/leistungen/unterhaltsreinigung',
  'Kursraumreinigung': '/leistungen/unterhaltsreinigung',
  'Saunareinigung': '/leistungen/sonderreinigung',

  // Logistik
  'Außenflächenreinigung': '/leistungen/aussenanlagenpflege',
  'Rampenreinigung': '/leistungen/unterhaltsreinigung',

  // Immobilien
  'Grünflächenpflege': '/leistungen/aussenanlagenpflege',

  // Öffentliche Einrichtungen
  'Ratssaalreinigung': '/leistungen/unterhaltsreinigung',

  // Banken
  'Schalterraumreinigung': '/leistungen/unterhaltsreinigung',
  'SB-Bereichsreinigung': '/leistungen/unterhaltsreinigung',

  // Autohäuser
  'Showroom-Reinigung': '/leistungen/unterhaltsreinigung',
  'Werkstattreinigung': '/leistungen/industriereinigung',
  'Empfangsbereichsreinigung': '/leistungen/unterhaltsreinigung',
}

export function BrancheServices({ branche }: BrancheServicesProps) {
  if (!branche.services || branche.services.length === 0) return null

  return (
    <section id="leistungen" className="py-16 md:py-24 lg:py-32 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* Section Header - "für" auf zweiter Zeile */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-8 sm:mb-12 md:mb-16">
          <span className="text-white">Professionelle Reinigung</span>
          <span className="block text-[#109387]">für {branche.name}</span>
        </h2>

        {/* Services Grid - Mobile 2 Spalten mit kleinerem Padding */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {branche.services.map((service, i) => {
            const url = serviceToUrl[service]
            // Nur verlinken wenn echte Leistungs-Seite existiert
            const hasRealPage = url !== undefined

            if (hasRealPage) {
              return (
                <Link
                  key={i}
                  href={url}
                  className="group relative bg-white/5 hover:bg-white rounded-[6px] p-3 sm:p-4 md:p-5 border border-white/10 hover:border-[#109387] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Einheitliches Icon */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[6px] bg-[#109387]/20 group-hover:bg-[#109387] flex items-center justify-center mb-2 sm:mb-3 transition-colors">
                    <Check size={16} strokeWidth={2} className="text-[#109387] group-hover:text-white transition-colors sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-white group-hover:text-[#012956] font-bold text-xs sm:text-sm leading-tight transition-colors">
                    {service}
                  </p>
                </Link>
              )
            } else {
              // Ohne Link wenn keine echte Seite existiert
              return (
                <div
                  key={i}
                  className="bg-white/5 rounded-[6px] p-3 sm:p-4 md:p-5 border border-white/10"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[6px] bg-[#109387]/20 flex items-center justify-center mb-2 sm:mb-3">
                    <Check size={16} strokeWidth={2} className="text-[#109387] sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-white font-bold text-xs sm:text-sm leading-tight">
                    {service}
                  </p>
                </div>
              )
            }
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
          >
            Alle Leistungen entdecken
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
          </Link>
        </div>

      </div>
    </section>
  )
}
