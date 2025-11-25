'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, ArrowRight, Send, CheckCircle, Building2, Factory, Wrench } from 'lucide-react'

const leistungenLinks = {
  'Gewerbliche Reinigung': [
    { name: 'Buroreinigung', href: '/leistungen/bueroreinigung' },
    { name: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung' },
    { name: 'Baureinigung', href: '/leistungen/baureinigung' },
    { name: 'Hallenreinigung', href: '/leistungen/hallenreinigung' },
  ],
  'Industriereinigung': [
    { name: 'Industriereinigung', href: '/leistungen/industriereinigung' },
    { name: 'Maschinenreinigung', href: '/leistungen/maschinenreinigung' },
    { name: 'Fassadenreinigung', href: '/leistungen/fassadenreinigung' },
    { name: 'Tiefgaragenreinigung', href: '/leistungen/tiefgaragenreinigung' },
  ],
  'Facility Services': [
    { name: 'Facility Management', href: '/leistungen/facility-management' },
    { name: 'Hausmeisterservice', href: '/leistungen/hausmeisterservice' },
    { name: 'Winterdienst', href: '/leistungen/winterdienst' },
    { name: 'Beschaffungsmanagement', href: '/leistungen/beschaffungsmanagement' },
  ],
}

const rechtlicheLinks = [
  { name: 'Impressum', href: '/impressum' },
  { name: 'Datenschutz', href: '/datenschutz' },
  { name: 'AGB', href: '/agb' },
  { name: 'Sitemap', href: '/sitemap' },
]

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    unternehmen: '',
    nachricht: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.telefon,
          company: formData.unternehmen,
          message: formData.nachricht,
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: '', email: '', telefon: '', unternehmen: '', nachricht: '' })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        const data = await response.json()
        setError(data.error || 'Ein Fehler ist aufgetreten.')
      }
    } catch {
      setError('Verbindungsfehler. Bitte versuchen Sie es erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-fimi-navy text-white">
      {/* Contact Form Section */}
      <section id="contact-form" className="section border-b border-white/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div>
              <span className="badge mb-6">Kontakt aufnehmen</span>
              <h2 className="heading-2 text-white mb-6">
                Lassen Sie uns Ihr Projekt besprechen
              </h2>
              <p className="text-lead text-gray-300 mb-10">
                Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an.
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>

              <div className="space-y-6 mb-10">
                <a
                  href="tel:01747225473"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-fimi-turquoise/20 rounded-lg flex items-center justify-center group-hover:bg-fimi-turquoise transition-colors">
                    <Phone size={20} className="text-fimi-turquoise group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <span className="text-fimi-turquoise text-lg font-medium group-hover:underline">
                      0174 722 5473
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@fimi-service.de"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-fimi-turquoise/20 rounded-lg flex items-center justify-center group-hover:bg-fimi-turquoise transition-colors">
                    <Mail size={20} className="text-fimi-turquoise group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-Mail</h3>
                    <span className="text-fimi-turquoise text-lg font-medium group-hover:underline">
                      info@fimi-service.de
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-fimi-turquoise/20 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-fimi-turquoise" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <address className="text-gray-300 not-italic">
                      Gebaeudereinigung Fimi-Service<br />
                      Kellerstr. 39<br />
                      84036 Landshut
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-fimi-turquoise/20 rounded-lg flex items-center justify-center">
                    <Clock size={20} className="text-fimi-turquoise" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Erreichbarkeit</h3>
                    <p className="text-gray-300">
                      Mo - Fr: 08:00 - 18:00 Uhr<br />
                      <span className="text-fimi-turquoise font-medium">24/7 Notfallservice</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                  <CheckCircle size={18} className="text-fimi-turquoise" />
                  <span className="text-sm font-medium">15+ Jahre Erfahrung</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                  <CheckCircle size={18} className="text-fimi-turquoise" />
                  <span className="text-sm font-medium">500+ Kunden</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="glass-card p-8 lg:p-10 rounded-lg">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-fimi-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-fimi-turquoise" />
                  </div>
                  <h3 className="heading-4 text-fimi-navy mb-4">Anfrage gesendet</h3>
                  <p className="text-gray-600">
                    Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="heading-4 text-fimi-navy mb-6">Angebot anfordern</h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="footer-name" className="label">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="footer-name"
                          required
                          className="input"
                          placeholder="Max Mustermann"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>

                      <div>
                        <label htmlFor="footer-unternehmen" className="label">
                          Unternehmen
                        </label>
                        <input
                          type="text"
                          id="footer-unternehmen"
                          className="input"
                          placeholder="Firma GmbH"
                          value={formData.unternehmen}
                          onChange={(e) => setFormData({...formData, unternehmen: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="footer-email" className="label">
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          id="footer-email"
                          required
                          className="input"
                          placeholder="max@firma.de"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <div>
                        <label htmlFor="footer-telefon" className="label">
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          id="footer-telefon"
                          required
                          className="input"
                          placeholder="0174 1234567"
                          value={formData.telefon}
                          onChange={(e) => setFormData({...formData, telefon: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="footer-nachricht" className="label">
                        Ihre Anfrage *
                      </label>
                      <textarea
                        id="footer-nachricht"
                        required
                        rows={4}
                        className="input resize-none"
                        placeholder="Beschreiben Sie kurz Ihren Bedarf..."
                        value={formData.nachricht}
                        onChange={(e) => setFormData({...formData, nachricht: e.target.value})}
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Wird gesendet...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={18} />
                          Kostenlos anfragen
                        </span>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Logo & Info */}
            <div className="lg:col-span-2">
              <Image
                src="/FIMI-LOGO/FIMI-LOGO_Weiße-Schrift_Transparent.png"
                alt="FIMI Gebaeudereinigung"
                width={200}
                height={67}
                className="h-14 w-auto mb-6"
              />
              <p className="text-gray-300 mb-6 max-w-sm">
                Professionelle Gebaeudereinigung und Facility Management in Landshut und ganz Bayern.
                Ihr zuverlaessiger Partner seit ueber 15 Jahren.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p><strong className="text-white">Inhaber:</strong> Ntonalnt Tzoutzis & Ergest Qiraj</p>
                <p><strong className="text-white">UST-ID:</strong> DE347549925</p>
              </div>
            </div>

            {/* Leistungen Links */}
            {Object.entries(leistungenLinks).map(([kategorie, links]) => (
              <div key={kategorie}>
                <h3 className="text-xs font-bold text-fimi-turquoise mb-4 uppercase tracking-wider">
                  {kategorie}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-fimi-turquoise transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} FIMI Gebaeudereinigung. Alle Rechte vorbehalten.
              </p>
              <div className="flex items-center gap-6">
                {rechtlicheLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-fimi-turquoise transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
