'use client'

import { useState } from 'react'
import { Metadata } from 'next'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    nachricht: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Form submission logic
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.')
  }

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-20 bg-fimi-navy text-white">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kontakt
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Wir sind für Sie da. Kontaktieren Sie uns für ein kostenloses Angebot.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-fimi-navy mb-6">
                Kontaktinformationen
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-bold text-fimi-navy mb-2">Telefon</h3>
                  <a href="tel:01747225473" className="text-fimi-turquoise text-xl hover:underline">
                    01747225473
                  </a>
                  <p className="text-gray-600 mt-1">Montag - Freitag: 8:00 - 18:00 Uhr</p>
                  <p className="text-gray-600">Samstag: 9:00 - 14:00 Uhr</p>
                  <p className="text-gray-600">24/7 Notfallservice verfügbar</p>
                </div>

                <div>
                  <h3 className="font-bold text-fimi-navy mb-2">E-Mail</h3>
                  <a href="mailto:info@fimi-service.de" className="text-fimi-turquoise text-xl hover:underline">
                    info@fimi-service.de
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-fimi-navy mb-2">Adresse</h3>
                  <p className="text-gray-600">
                    FIMI Gebäudereinigung<br />
                    Musterstraße 123<br />
                    84028 Landshut
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6" style={{ borderRadius: '4px' }}>
                <h3 className="font-bold text-fimi-navy mb-2">ISO-Zertifiziert</h3>
                <p className="text-gray-600">
                  Wir arbeiten nach ISO 9001 & 14001 Standards für höchste Qualität und Umweltschutz.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-fimi-navy mb-6">
                Nachricht senden
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-semibold text-fimi-navy mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-fimi-turquoise focus:outline-none transition-colors"
                    style={{ borderRadius: '4px' }}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold text-fimi-navy mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-fimi-turquoise focus:outline-none transition-colors"
                    style={{ borderRadius: '4px' }}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="telefon" className="block font-semibold text-fimi-navy mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-fimi-turquoise focus:outline-none transition-colors"
                    style={{ borderRadius: '4px' }}
                    value={formData.telefon}
                    onChange={(e) => setFormData({...formData, telefon: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="nachricht" className="block font-semibold text-fimi-navy mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="nachricht"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-fimi-turquoise focus:outline-none transition-colors resize-none"
                    style={{ borderRadius: '4px' }}
                    value={formData.nachricht}
                    onChange={(e) => setFormData({...formData, nachricht: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-fimi-turquoise text-white px-8 py-4 font-bold text-lg hover:opacity-90 transition-opacity"
                  style={{ borderRadius: '4px' }}
                >
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
