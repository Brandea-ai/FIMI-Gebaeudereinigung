export default function LeistungsumfangSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2940&auto=format&fit=crop"
              alt="Büroreinigung Leistungen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-fimi-navy/80 to-fimi-turquoise/80 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <p className="text-5xl font-bold mb-4">100%</p>
                <p className="text-2xl">Kundenzufriedenheit</p>
              </div>
            </div>
          </div>

          {/* Right - Leistungen */}
          <div>
            <span className="text-fimi-turquoise font-semibold text-sm uppercase tracking-wider mb-4 block">
              Leistungsumfang
            </span>
            <h3 className="mb-6">Was wir für Sie reinigen</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-fimi-navy mb-2">Arbeitsplätze & Büros</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-fimi-turquoise mr-2">•</span>
                    <span>Schreibtische und Arbeitsflächen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fimi-turquoise mr-2">•</span>
                    <span>Staubsaugen und Wischen der Böden</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fimi-turquoise mr-2">•</span>
                    <span>Papierkörbe leeren und entsorgen</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-fimi-navy mb-2">Sanitärbereiche</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-fimi-turquoise mr-2">•</span>
                    <span>Toiletten und Waschbecken reinigen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fimi-turquoise mr-2">•</span>
                    <span>Spiegel und Armaturen polieren</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fimi-turquoise mr-2">•</span>
                    <span>Hygieneartikel auffüllen</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-fimi-navy mb-2">Gemeinschaftsräume</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-fimi-turquoise mr-2">•</span>
                    <span>Küchen und Pausenräume</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fimi-turquoise mr-2">•</span>
                    <span>Besprechungsräume</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fimi-turquoise mr-2">•</span>
                    <span>Eingangsbereiche und Flure</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-fimi-navy mb-2">Zusatzleistungen</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-fimi-turquoise mr-2">•</span>
                    <span>Fensterreinigung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fimi-turquoise mr-2">•</span>
                    <span>Teppichreinigung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fimi-turquoise mr-2">•</span>
                    <span>Grundreinigung nach Vereinbarung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
