const processSteps = [
  {
    number: '01',
    title: 'Besichtigung',
    description: '[PLATZHALTER: Beschreibung Schritt 1]'
  },
  {
    number: '02',
    title: 'Angebot',
    description: '[PLATZHALTER: Beschreibung Schritt 2]'
  },
  {
    number: '03',
    title: 'Durchführung',
    description: '[PLATZHALTER: Beschreibung Schritt 3]'
  },
  {
    number: '04',
    title: 'Qualitätskontrolle',
    description: '[PLATZHALTER: Beschreibung Schritt 4]'
  }
]

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
            Unser Prozess
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
            So funktioniert's
          </h2>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed">
            [PLATZHALTER: Kurze Einleitung zum Prozess]
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Number Circle */}
              <div className="w-20 h-20 bg-[#012956] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">{step.number}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#012956] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 font-semibold">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
