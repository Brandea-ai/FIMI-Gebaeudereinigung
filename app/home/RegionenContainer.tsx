'use client'

import { useState } from 'react'
import { MapPin, ArrowRight, Phone, CheckCircle } from 'lucide-react'

const städte = [
  {
    name: 'Landshut',
    region: 'Niederbayern',
    hauptsitz: true,
    position: { top: '52%', left: '58%' },
    beschreibung: 'Als unser Hauptsitz kennen wir Landshut wie unsere Westentasche. Von der historischen Altstadt über das BMW-Werk bis zu modernen Gewerbegebieten – wir betreuen Büros, Produktionshallen und öffentliche Einrichtungen in der gesamten Region.'
  },
  {
    name: 'München',
    region: 'Oberbayern',
    hauptsitz: false,
    position: { top: '62%', left: '48%' },
    beschreibung: 'In Bayerns Landeshauptstadt reinigen wir Bürokomplexe in Schwabing, Gewerbeimmobilien in Moosach und Industrieanlagen im Münchner Norden. Flexible Einsatzzeiten für eine Stadt, die niemals schläft.'
  },
  {
    name: 'Regensburg',
    region: 'Oberpfalz',
    hauptsitz: false,
    position: { top: '40%', left: '62%' },
    beschreibung: 'Die UNESCO-Welterbestadt an der Donau vereint historische Substanz mit moderner Wirtschaft. Wir pflegen Gewerbeimmobilien im Gewerbepark Ost, Büroflächen in der Innenstadt und Produktionsstätten namhafter Unternehmen.'
  },
  {
    name: 'Straubing',
    region: 'Niederbayern',
    hauptsitz: false,
    position: { top: '45%', left: '68%' },
    beschreibung: 'Im Herzen des fruchtbaren Gäubodens betreuen wir Betriebe der Lebensmittelindustrie, landwirtschaftliche Genossenschaften und das wachsende Gewerbegebiet. Gründliche Reinigung für traditionsbewusste Unternehmen.'
  },
  {
    name: 'Dingolfing',
    region: 'Niederbayern',
    hauptsitz: false,
    position: { top: '55%', left: '65%' },
    beschreibung: 'Die Automobilstadt an der Isar ist geprägt von BMW und seinen Zulieferern. Wir reinigen Produktionshallen, Logistikzentren und Verwaltungsgebäude – mit dem Qualitätsanspruch, den die Automobilindustrie fordert.'
  },
  {
    name: 'Moosburg',
    region: 'Oberbayern',
    hauptsitz: false,
    position: { top: '58%', left: '52%' },
    beschreibung: 'Zwischen München und Landshut gelegen, profitieren Moosburger Unternehmen von kurzen Anfahrtswegen. Wir betreuen hier mittelständische Betriebe, Handwerksfirmen und lokale Gewerbeimmobilien.'
  },
  {
    name: 'Freising',
    region: 'Oberbayern',
    hauptsitz: false,
    position: { top: '60%', left: '50%' },
    beschreibung: 'Die Domstadt am Flughafen München ist ein Wissenschafts- und Wirtschaftsstandort. Von der TU München über Flughafenlogistik bis zu traditionellen Brauereien – unsere Teams kennen die besonderen Anforderungen.'
  },
  {
    name: 'Ingolstadt',
    region: 'Oberbayern',
    hauptsitz: false,
    position: { top: '48%', left: '42%' },
    beschreibung: 'In der Audi-Stadt betreuen wir Automobilzulieferer, den boomenden Einzelhandel und wachsende Gewerbegebiete. Präzise Reinigung für eine Stadt, die Perfektion gewohnt ist.'
  },
]

export default function RegionenContainer() {
  const [activeStadt, setActiveStadt] = useState<string>('Landshut')

  const scrollToFooter = () => {
    const footer = document.getElementById('contact-form')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const aktiveStadtDaten = städte.find(s => s.name === activeStadt)

  return (
    <section id="regionen-section" className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-5xl mb-16">
          <h2 className="heading-section">
            Gebäudereinigung in ganz Bayern
          </h2>
          <p className="text-lead">
            Von Landshut aus bedienen wir 8 Regionen in Bayern.
            Kurze Anfahrtswege garantieren schnellen Service und flexible Einsatzzeiten.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Bayern SVG */}
              <svg viewBox="0 0 400 450" className="w-full h-full" fill="none">
                <path
                  d="M200 20 L320 60 L380 140 L360 220 L380 300 L340 380 L260 420 L180 430 L100 400 L40 340 L20 260 L40 180 L80 100 L140 40 Z"
                  fill="#f8fafc"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                />
              </svg>

              {/* City Pins */}
              {städte.map((stadt) => (
                <button
                  key={stadt.name}
                  onClick={() => setActiveStadt(stadt.name)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    activeStadt === stadt.name ? 'z-20 scale-125' : 'z-10 hover:scale-110'
                  }`}
                  style={{ top: stadt.position.top, left: stadt.position.left }}
                >
                  <MapPin
                    size={stadt.hauptsitz ? 36 : 28}
                    className={`${
                      stadt.hauptsitz
                        ? 'text-fimi-navy'
                        : activeStadt === stadt.name
                          ? 'text-fimi-turquoise'
                          : 'text-gray-400'
                    }`}
                  />
                  <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-xs font-medium ${
                    activeStadt === stadt.name ? 'text-fimi-turquoise' : 'text-gray-500'
                  }`}>
                    {stadt.name}
                  </span>
                </button>
              ))}

              {/* Legend */}
              <div className="absolute bottom-0 left-0 flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-fimi-navy" />
                  <span className="text-gray-600">Hauptsitz</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-fimi-turquoise" />
                  <span className="text-gray-600">Service-Region</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div>
            {/* City List */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {städte.map((stadt) => (
                <button
                  key={stadt.name}
                  onClick={() => setActiveStadt(stadt.name)}
                  className={`flex items-center gap-2 p-3 rounded-[6px] border transition-all text-left ${
                    activeStadt === stadt.name
                      ? 'border-fimi-turquoise bg-fimi-turquoise/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <MapPin
                    size={20}
                    className={activeStadt === stadt.name ? 'text-fimi-turquoise' : 'text-gray-400'}
                  />
                  <div>
                    <span className={`text-sm font-medium block ${
                      activeStadt === stadt.name ? 'text-fimi-turquoise' : 'text-gray-700'
                    }`}>
                      {stadt.name}
                    </span>
                    <span className="text-xs text-gray-500">{stadt.region}</span>
                  </div>
                  {stadt.hauptsitz && (
                    <span className="ml-auto text-xs font-semibold text-fimi-navy bg-fimi-navy/10 px-1.5 py-0.5 rounded">
                      HQ
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Active City Info */}
            {aktiveStadtDaten && (
              <div className="bg-gray-50 rounded-[6px] p-5 mb-6">
                <h3 className="heading-card text-lg mb-2">
                  Gebäudereinigung {aktiveStadtDaten.name}
                </h3>
                <p className="text-body text-sm mb-4">
                  {aktiveStadtDaten.beschreibung}
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Büroreinigung', 'Industriereinigung', 'Facility Management'].map((service) => (
                    <span key={service} className="flex items-center gap-1.5 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-fimi-turquoise" />
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={scrollToFooter}
                className="btn-primary flex-1"
              >
                Angebot für {activeStadt}
                <ArrowRight size={18} />
              </button>
              <a
                href="tel:+4917472254773"
                className="btn-outline flex-1"
              >
                <Phone size={18} />
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
