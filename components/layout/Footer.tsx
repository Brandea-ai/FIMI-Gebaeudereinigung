'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Send, CheckCircle, XCircle } from 'lucide-react'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <footer className="bg-gradient-to-br from-fimi-navy via-fimi-navy-dark to-fimi-navy text-white">
      {/* Kontaktformular Section */}
      <div id="kontakt-formular" className="section-padding border-b border-white/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Linke Seite - Formular Info */}
            <div>
              <h2 className="text-white mb-6">Kontaktieren Sie uns</h2>
              <p className="text-gray-300 text-lg mb-8">
                Haben Sie Fragen zu unseren Dienstleistungen? Wir beraten Sie gerne kostenlos und unverbindlich.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-fimi-turquoise p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telefon</p>
                    <a href="tel:01747225473" className="text-fimi-turquoise hover:text-fimi-turquoise-light transition-colors text-lg">
                      01747225473
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-fimi-turquoise p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">E-Mail</p>
                    <a href="mailto:info@fimi-service.de" className="text-fimi-turquoise hover:text-fimi-turquoise-light transition-colors text-lg">
                      info@fimi-service.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-fimi-turquoise p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Adresse</p>
                    <p className="text-gray-300">
                      Kellerstr. 39<br />
                      84036 Landshut<br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Öffnungszeiten:</strong><br />
                  Montag - Freitag: 08:00 - 18:00 Uhr<br />
                  Samstag: Nach Vereinbarung<br />
                  24/7 Notfall-Hotline verfügbar
                </p>
              </div>
            </div>

            {/* Rechte Seite - Kontaktformular */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-fimi-navy text-2xl font-bold mb-6">Anfrage senden</h3>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800">Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800">Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ihr Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fimi-turquoise focus:border-transparent text-gray-900"
                      placeholder="Max Mustermann"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fimi-turquoise focus:border-transparent text-gray-900"
                      placeholder="Firmenname"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fimi-turquoise focus:border-transparent text-gray-900"
                      placeholder="mail@beispiel.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fimi-turquoise focus:border-transparent text-gray-900"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fimi-turquoise focus:border-transparent text-gray-900 resize-none"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Nachricht senden</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Mit dem Absenden stimmen Sie unserer <Link href="/datenschutz" className="text-fimi-turquoise hover:underline">Datenschutzerklärung</Link> zu.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links & Info */}
      <div className="section-padding border-b border-white/10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Über FIMI */}
            <div>
              <Image
                src="/FIMI-LOGO/FIMI-LOGO_Weiße-Schrift_Transparent.png"
                alt="FIMI Gebäudereinigung"
                width={150}
                height={50}
                className="mb-6"
              />
              <p className="text-gray-300 mb-4">
                Professionelle Gebäudereinigung mit höchsten Qualitätsstandards. Ihr zuverlässiger Partner in Landshut und Umgebung.
              </p>
              <p className="text-sm text-gray-400">
                <strong>UST-ID:</strong> DE347549925
              </p>
            </div>

            {/* Leistungen */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Unsere Leistungen</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/leistungen/bueroreinigung" className="hover:text-fimi-turquoise transition-colors">Büroreinigung</Link></li>
                <li><Link href="/leistungen/unterhaltsreinigung" className="hover:text-fimi-turquoise transition-colors">Unterhaltsreinigung</Link></li>
                <li><Link href="/leistungen/industriereinigung" className="hover:text-fimi-turquoise transition-colors">Industriereinigung</Link></li>
                <li><Link href="/leistungen/facility-management" className="hover:text-fimi-turquoise transition-colors">Facility Management</Link></li>
                <li><Link href="/leistungen/winterdienst" className="hover:text-fimi-turquoise transition-colors">Winterdienst</Link></li>
              </ul>
            </div>

            {/* Unternehmen */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/ueber-uns" className="hover:text-fimi-turquoise transition-colors">Über uns</Link></li>
                <li><Link href="/referenzen" className="hover:text-fimi-turquoise transition-colors">Referenzen</Link></li>
                <li><Link href="/blog" className="hover:text-fimi-turquoise transition-colors">Blog</Link></li>
                <li><Link href="/kontakt" className="hover:text-fimi-turquoise transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            {/* Rechtliches */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/impressum" className="hover:text-fimi-turquoise transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:text-fimi-turquoise transition-colors">Datenschutz</Link></li>
                <li><Link href="/agb" className="hover:text-fimi-turquoise transition-colors">AGB</Link></li>
              </ul>

              <div className="mt-6">
                <h5 className="text-white font-semibold mb-2">Geschäftsführer</h5>
                <p className="text-gray-300 text-sm">
                  Ntonalnt Tzoutzis<br />
                  Ergest Qiraj
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FIMI Gebäudereinigung. Alle Rechte vorbehalten.
            </p>
            <p className="text-gray-400 text-sm">
              Entwickelt mit ❤️ für höchste Qualität
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
