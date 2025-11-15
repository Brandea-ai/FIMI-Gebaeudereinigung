'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    unternehmen: '',
    nachricht: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Implement actual form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    alert('Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden bei Ihnen.')
    setFormData({ name: '', email: '', telefon: '', unternehmen: '', nachricht: '' })
    setIsSubmitting(false)
  }

  return (
    <footer className="bg-fimi-navy text-white">
      {/* Kontaktformular Section */}
      <section className="py-20 border-b border-white/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Kontaktieren Sie uns
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-fimi-turquoise p-3" style={{ borderRadius: '4px' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telefon</h3>
                    <a href="tel:01747225473" className="text-fimi-turquoise hover:underline text-lg">
                      01747225473
                    </a>
                    <p className="text-gray-400 text-sm mt-1">24/7 Notfallservice verfügbar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-fimi-turquoise p-3" style={{ borderRadius: '4px' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">E-Mail</h3>
                    <a href="mailto:info@fimi-service.de" className="text-fimi-turquoise hover:underline text-lg">
                      info@fimi-service.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-fimi-turquoise p-3" style={{ borderRadius: '4px' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Adresse</h3>
                    <p className="text-gray-300">
                      Gebäudereinigung Fimi-Service<br />
                      Kellerstr. 39<br />
                      84036 Landshut
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm" style={{ borderRadius: '4px' }}>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">ISO 9001 & 14001 zertifiziert</strong><br />
                  Höchste Qualitätsstandards und umweltfreundliche Reinigungsverfahren
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white/5 backdrop-blur-sm p-8" style={{ borderRadius: '4px' }}>
              <h3 className="text-2xl font-bold mb-6">Angebot anfordern</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="footer-name" className="block font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="footer-name"
                    required
                    className="w-full px-4 py-3 bg-white text-fimi-navy border-2 border-transparent focus:border-fimi-turquoise focus:outline-none transition-colors"
                    style={{ borderRadius: '4px' }}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="footer-unternehmen" className="block font-semibold mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="footer-unternehmen"
                    className="w-full px-4 py-3 bg-white text-fimi-navy border-2 border-transparent focus:border-fimi-turquoise focus:outline-none transition-colors"
                    style={{ borderRadius: '4px' }}
                    value={formData.unternehmen}
                    onChange={(e) => setFormData({...formData, unternehmen: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="footer-email" className="block font-semibold mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="footer-email"
                      required
                      className="w-full px-4 py-3 bg-white text-fimi-navy border-2 border-transparent focus:border-fimi-turquoise focus:outline-none transition-colors"
                      style={{ borderRadius: '4px' }}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="footer-telefon" className="block font-semibold mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="footer-telefon"
                      className="w-full px-4 py-3 bg-white text-fimi-navy border-2 border-transparent focus:border-fimi-turquoise focus:outline-none transition-colors"
                      style={{ borderRadius: '4px' }}
                      value={formData.telefon}
                      onChange={(e) => setFormData({...formData, telefon: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="footer-nachricht" className="block font-semibold mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="footer-nachricht"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white text-fimi-navy border-2 border-transparent focus:border-fimi-turquoise focus:outline-none transition-colors resize-none"
                    style={{ borderRadius: '4px' }}
                    value={formData.nachricht}
                    onChange={(e) => setFormData({...formData, nachricht: e.target.value})}
                    placeholder="Beschreiben Sie kurz Ihren Bedarf..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-fimi-turquoise text-white px-8 py-4 font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                  style={{ borderRadius: '4px' }}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Kostenlos anfragen'}
                </button>

                <p className="text-sm text-gray-400">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Logo & Info */}
            <div className="md:col-span-2">
              <Image
                src="/FIMI-LOGO/FIMI-LOGO_Weiße-Schrift_Transparent.png"
                alt="FIMI Gebäudereinigung"
                width={300}
                height={100}
                className="h-20 w-auto mb-6"
              />
              <p className="text-gray-300 mb-4">
                Professionelle Gebäudereinigung und Facility Management seit über 15 Jahren. ISO 9001 & 14001 zertifiziert.
              </p>
              <p className="text-sm text-gray-400">
                <strong>UST-ID:</strong> DE347549925
              </p>
            </div>

            {/* Gewerbliche Objektreinigung */}
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wide text-fimi-turquoise">
                Gewerbliche Reinigung
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/leistungen/bueroreinigung" className="text-gray-300 hover:text-fimi-turquoise transition-colors">Büroreinigung</Link></li>
                <li><Link href="/leistungen/unterhaltsreinigung" className="text-gray-300 hover:text-fimi-turquoise transition-colors">Unterhaltsreinigung</Link></li>
                <li><Link href="/leistungen/baureinigung" className="text-gray-300 hover:text-fimi-turquoise transition-colors">Baureinigung</Link></li>
                <li><Link href="/leistungen/hallenreinigung" className="text-gray-300 hover:text-fimi-turquoise transition-colors">Hallenreinigung</Link></li>
              </ul>
            </div>

            {/* Industrielle Reinigung */}
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wide text-fimi-turquoise">
                Industriereinigung
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/leistungen/industriereinigung" className="text-gray-300 hover:text-fimi-turquoise transition-colors">Industriereinigung</Link></li>
                <li><Link href="/leistungen/maschinenreinigung" className="text-gray-300 hover:text-fimi-turquoise transition-colors">Maschinenreinigung</Link></li>
                <li><Link href="/leistungen/fassadenreinigung" className="text-gray-300 hover:text-fimi-turquoise transition-colors">Fassadenreinigung</Link></li>
                <li><Link href="/leistungen/tiefgaragenreinigung" className="text-gray-300 hover:text-fimi-turquoise transition-colors">Tiefgaragenreinigung</Link></li>
              </ul>
            </div>

            {/* Unternehmen */}
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wide text-fimi-turquoise">
                Unternehmen
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ueber-uns" className="text-gray-300 hover:text-fimi-turquoise transition-colors">Über uns</Link></li>
                <li><Link href="/referenzen" className="text-gray-300 hover:text-fimi-turquoise transition-colors">Referenzen</Link></li>
                <li><Link href="/kontakt" className="text-gray-300 hover:text-fimi-turquoise transition-colors">Kontakt</Link></li>
                <li><Link href="/impressum" className="text-gray-300 hover:text-fimi-turquoise transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="text-gray-300 hover:text-fimi-turquoise transition-colors">Datenschutz</Link></li>
                <li><Link href="/agb" className="text-gray-300 hover:text-fimi-turquoise transition-colors">AGB</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} FIMI Gebäudereinigung. Alle Rechte vorbehalten.
            </p>
            <p className="text-gray-400 text-sm">
              Ntonalnt Tzoutzis & Ergest Qiraj
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}
