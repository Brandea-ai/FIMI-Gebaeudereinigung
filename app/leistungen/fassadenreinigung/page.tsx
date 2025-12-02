import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fassadenreinigung Bayern | FIMI Gebäudereinigung',
  description: 'Professionelle Fassadenreinigung in Bayern. Seite wird bald aktualisiert.',
}

export default function FassadenreinigungPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center py-40">
        <h1 className="text-4xl font-bold text-[#012956] mb-4">Fassadenreinigung</h1>
        <p className="text-gray-500">Seite wird bald aktualisiert.</p>
      </div>
    </main>
  )
}
