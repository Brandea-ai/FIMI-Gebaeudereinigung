interface ProcessStep {
  number: string
  title: string
  description: string
}

interface ServiceProcessProps {
  title: string
  subtitle: string
  steps: ProcessStep[]
}

export default function ServiceProcess({ title, subtitle, steps }: ServiceProcessProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-fimi-turquoise font-semibold text-sm uppercase tracking-wider mb-4 block">
            Unser Prozess
          </span>
          <h2 className="mb-6">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-fimi-turquoise to-transparent -z-10" />
              )}

              <div className="text-center">
                {/* Number Circle */}
                <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6">
                  {/* Outer ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-fimi-navy to-fimi-turquoise rounded-full opacity-10 animate-pulse" />

                  {/* Inner circle */}
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
