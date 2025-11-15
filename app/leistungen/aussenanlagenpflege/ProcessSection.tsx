const processSteps = [
  {
    number: '01',
    title: 'Kostenlose Beratung',
    description: 'Wir analysieren Ihre Räumlichkeiten und Anforderungen vor Ort und erstellen ein maßgeschneidertes Konzept.'
  },
  {
    number: '02',
    title: 'Individuelles Angebot',
    description: 'Sie erhalten ein transparentes Festpreisangebot ohne versteckte Kosten, abgestimmt auf Ihre Bedürfnisse.'
  },
  {
    number: '03',
    title: 'Professionelle Durchführung',
    description: 'Unser geschultes Team reinigt Ihre Büroräume nach höchsten Standards und zu vereinbarten Zeiten.'
  },
  {
    number: '04',
    title: 'Qualitätskontrolle',
    description: 'Regelmäßige Kontrollen und Ihr Feedback sichern dauerhaft höchste Reinigungsqualität.'
  }
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-fimi-turquoise font-semibold text-sm uppercase tracking-wider mb-4 block">
            Unser Prozess
          </span>
          <h2 className="mb-6">So läuft's ab</h2>
          <p className="text-xl text-gray-600">
            In 4 einfachen Schritten zu sauberen Büroräumen
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-fimi-turquoise to-transparent -z-10" />
              )}

              <div className="text-center">
                {/* Number Circle */}
                <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-fimi-navy to-fimi-turquoise rounded-full opacity-10 animate-pulse" />
                  <div className="relative w-24 h-24 bg-gradient-to-br from-fimi-navy to-fimi-turquoise rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-4xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-fimi-navy mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
