import Image from 'next/image'
import { CheckCircle2, Phone, FileText, Users, Sparkles } from 'lucide-react'

export default function ProcessContainer() {
  const problems = [
    'Unzuverlässige Reinigungskräfte',
    'Inkonsistente Qualität',
    'Keine festen Ansprechpartner',
    'Intransparente Preise',
    'Fehlende Zertifizierungen'
  ]

  const process = [
    {
      icon: Phone,
      step: '1',
      title: 'Kostenlose Beratung',
      description: 'Kontaktieren Sie uns telefonisch oder per E-Mail. Wir beraten Sie umfassend und unverbindlich.'
    },
    {
      icon: FileText,
      step: '2',
      title: 'Individuelles Angebot',
      description: 'Nach einer Besichtigung vor Ort erstellen wir ein maßgeschneidertes Angebot für Ihre Anforderungen.'
    },
    {
      icon: Users,
      step: '3',
      title: 'Persönlicher Ansprechpartner',
      description: 'Sie erhalten einen festen Ansprechpartner, der sich um all Ihre Anliegen kümmert.'
    },
    {
      icon: Sparkles,
      step: '4',
      title: 'Professionelle Reinigung',
      description: 'Unser geschultes Team sorgt nach ISO-Standards für makellose Sauberkeit in Ihren Räumlichkeiten.'
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        {/* Problem vs Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          {/* Problem */}
          <div>
            <div className="inline-block px-4 py-2 bg-red-100 text-red-600 font-semibold mb-6" style={{ borderRadius: '4px' }}>
              Das Problem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fimi-navy mb-8">
              Frustriert von schlechter Reinigungsqualität?
            </h2>

            <div className="relative h-[400px] mb-8" style={{ borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=3540&auto=format&fit=crop"
                alt="Problem"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-fimi-navy/40" />
            </div>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-1" style={{ borderRadius: '4px' }}>
                    ✗
                  </div>
                  <p className="text-lg text-gray-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <div className="inline-block px-4 py-2 bg-fimi-turquoise/10 text-fimi-turquoise font-semibold mb-6" style={{ borderRadius: '4px' }}>
              Die Lösung
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fimi-navy mb-8">
              FIMI - Ihr zuverlässiger Partner
            </h2>

            <div className="relative h-[400px] mb-8" style={{ borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=3540&auto=format&fit=crop"
                alt="Lösung"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-fimi-turquoise/20" />
            </div>

            <div className="space-y-4">
              {[
                'Festangestelltes, geschultes Personal',
                'ISO 9001 & 14001 zertifizierte Qualität',
                'Persönlicher Ansprechpartner 24/7',
                'Transparente Festpreise',
                'Über 15 Jahre Erfahrung'
              ].map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-fimi-turquoise flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-gray-700 font-semibold">{solution}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-fimi-turquoise text-white" style={{ borderRadius: '4px' }}>
              <p className="text-lg font-semibold">
                💡 Über 500 Unternehmen vertrauen bereits auf unsere Expertise
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-fimi-turquoise/10 text-fimi-turquoise font-semibold mb-6" style={{ borderRadius: '4px' }}>
              Unser Prozess
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-fimi-navy mb-6">
              So einfach geht's
            </h2>
            <p className="text-xl text-gray-600">
              In 4 Schritten zur professionellen Gebäudereinigung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-fimi-turquoise/20" />
                  )}

                  <div className="bg-white border-2 border-gray-200 p-8 hover-lift h-full" style={{ borderRadius: '4px' }}>
                    {/* Step Number */}
                    <div className="bg-fimi-turquoise text-white w-12 h-12 flex items-center justify-center font-bold text-xl mb-4" style={{ borderRadius: '4px' }}>
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="bg-fimi-navy text-white w-16 h-16 flex items-center justify-center mb-6" style={{ borderRadius: '4px' }}>
                      <Icon size={28} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-fimi-navy mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
