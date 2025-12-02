import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fensterreinigung | FIMI Gebäudereinigung',
  description: 'Professionelle Fensterreinigung in Bayern - FIMI Gebäudereinigung',
}

export default function FensterreinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-32 lg:py-40">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#012956] mb-6">
            Fensterreinigung
          </h1>
          <p className="text-xl text-gray-600 font-semibold">
            Seite in Bearbeitung
          </p>
        </div>
      </section>
    </main>
  )
}
