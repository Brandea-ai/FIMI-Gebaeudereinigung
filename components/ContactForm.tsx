'use client'

import { useState, useEffect, FormEvent, ChangeEvent, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useFormTracking, analytics } from './GoogleAnalytics'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  branche: string
  message: string
  privacy: boolean
}

interface FormErrors {
  [key: string]: string
}

const SERVICES = [
  'Unterhaltsreinigung',
  'Büroreinigung',
  'Industriereinigung',
  'Fensterreinigung',
  'Glasreinigung',
  'Fassadenreinigung',
  'Hallenreinigung',
  'Maschinenreinigung',
  'Facility Management',
  'Winterdienst',
  'Hausmeisterservice',
  'Außenanlagenpflege',
  'Baureinigung',
  'Sonderreinigung',
  'Tiefgaragenreinigung',
  'Parkplatzreinigung',
  'Sonstiges'
]

const BRANCHEN = [
  'Büro / Verwaltung',
  'Industrie / Produktion',
  'Einzelhandel / Geschäfte',
  'Arztpraxis / Gesundheitswesen',
  'Hotel / Gastronomie',
  'Logistik / Lager',
  'Bildung / Schule',
  'Öffentliche Einrichtung',
  'Automobilbranche',
  'IT / Technologie',
  'Sonstiges'
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    branche: '',
    message: '',
    privacy: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [userName, setUserName] = useState('')
  const [requestId, setRequestId] = useState('')
  const [phase2Visible, setPhase2Visible] = useState(false)
  const [formTime] = useState(Math.floor(Date.now() / 1000))
  const phase2TrackedRef = useRef(false)

  // Analytics Form Tracking Hook
  const formTracking = useFormTracking('footer')

  // Phase 1 → Phase 2 Übergang (wächst bei Eingabe)
  useEffect(() => {
    if (!phase2Visible) {
      if (formData.name.trim().length > 0 && formData.email.trim().length > 0 && formData.phone.trim().length > 0) {
        setTimeout(() => setPhase2Visible(true), 150)
        // Analytics: Phase 2 erreicht
        if (!phase2TrackedRef.current) {
          phase2TrackedRef.current = true
          formTracking.onPhase2Reached()
        }
      }
    }
  }, [formData.name, formData.email, formData.phone, phase2Visible, formTracking])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          form_time: formTime.toString(),
          js_active: 'yes',
          // Honeypots (leer)
          website_hp: '',
          fax_hp: ''
        })
      })

      const data = await response.json()

      if (response.ok) {
        setUserName(data.name || formData.name)
        setRequestId(data.request_id || '')
        setShowModal(true)

        // Analytics: Formular erfolgreich abgeschickt
        formTracking.onSubmit({
          service: formData.service,
          branche: formData.branche,
          company: formData.company,
          message: formData.message
        })

        // Reset Form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          branche: '',
          message: '',
          privacy: false
        })
        setPhase2Visible(false)
        phase2TrackedRef.current = false
      } else {
        // Analytics: Formular-Fehler
        if (data.errors) {
          setErrors(data.errors)
          Object.keys(data.errors).forEach(field => {
            formTracking.onError('validation', field)
          })
        }
        alert(data.message || 'Fehler aufgetreten. Bitte versuchen Sie es erneut.')
      }
    } catch {
      formTracking.onError('network', 'submission')
      alert('Technischer Fehler. Bitte kontaktieren Sie uns telefonisch: 0871 430 334 60')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        {/* Phase 1: Basis-Felder */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {/* Name */}
          <div>
            <label htmlFor="cf-name" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
              Ihr Name <span className="text-[#109387]">*</span>
            </label>
            <input
              type="text"
              id="cf-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => formTracking.onFieldFocus('name')}
              onBlur={() => formTracking.onFieldComplete('name', formData.name.length > 0)}
              placeholder="Max Mustermann"
              maxLength={100}
              required
              autoComplete="name"
              className={`w-full px-4 py-3 border-2 rounded-[6px] text-gray-900 font-semibold transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'
              }`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600 font-semibold">{errors.name}</p>}
          </div>

          {/* E-Mail */}
          <div>
            <label htmlFor="cf-email" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
              E-Mail <span className="text-[#109387]">*</span>
            </label>
            <input
              type="email"
              id="cf-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => formTracking.onFieldFocus('email')}
              onBlur={() => formTracking.onFieldComplete('email', formData.email.length > 0)}
              placeholder="max@beispiel.de"
              required
              autoComplete="email"
              className={`w-full px-4 py-3 border-2 rounded-[6px] text-gray-900 font-semibold transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600 font-semibold">{errors.email}</p>}
          </div>

          {/* Telefon */}
          <div>
            <label htmlFor="cf-phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
              Telefon <span className="text-[#109387]">*</span>
            </label>
            <input
              type="tel"
              id="cf-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => formTracking.onFieldFocus('phone')}
              onBlur={() => formTracking.onFieldComplete('phone', formData.phone.length > 0)}
              placeholder="+49 123 456789"
              maxLength={20}
              required
              autoComplete="tel"
              className={`w-full px-4 py-3 border-2 rounded-[6px] text-gray-900 font-semibold transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 ${
                errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'
              }`}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600 font-semibold">{errors.phone}</p>}
          </div>
        </div>

        {/* Phase 2: Erweiterte Felder (erscheinen nach Eingabe) */}
        {phase2Visible && (
          <div className="space-y-4 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Unternehmen */}
              <div>
                <label htmlFor="cf-company" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Unternehmen <span className="text-gray-400 normal-case">(optional)</span>
                </label>
                <input
                  type="text"
                  id="cf-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => formTracking.onFieldFocus('company')}
                  onBlur={() => formTracking.onFieldComplete('company', formData.company.length > 0)}
                  placeholder="Ihre Firma GmbH"
                  maxLength={100}
                  autoComplete="organization"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20"
                />
              </div>

              {/* Branche */}
              <div>
                <label htmlFor="cf-branche" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Branche <span className="text-gray-400 normal-case">(optional)</span>
                </label>
                <select
                  id="cf-branche"
                  name="branche"
                  value={formData.branche}
                  onChange={handleChange}
                  onFocus={() => formTracking.onFieldFocus('branche')}
                  onBlur={() => formTracking.onFieldComplete('branche', formData.branche.length > 0)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 bg-white"
                >
                  <option value="">Bitte wählen...</option>
                  {BRANCHEN.map(branche => (
                    <option key={branche} value={branche}>{branche}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Gewünschte Leistung - volle Breite */}
            <div>
              <label htmlFor="cf-service" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                Gewünschte Leistung <span className="text-gray-400 normal-case">(optional)</span>
              </label>
              <select
                id="cf-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                onFocus={() => formTracking.onFieldFocus('service')}
                onBlur={() => formTracking.onFieldComplete('service', formData.service.length > 0)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 bg-white"
              >
                <option value="">Bitte wählen...</option>
                {SERVICES.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            {/* Nachricht */}
            <div>
              <label htmlFor="cf-message" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                Ihre Nachricht <span className="text-gray-400 normal-case">(optional)</span>
              </label>
              <textarea
                id="cf-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => formTracking.onFieldFocus('message')}
                onBlur={() => formTracking.onFieldComplete('message', formData.message.length > 0)}
                rows={4}
                placeholder="Beschreiben Sie kurz Ihr Anliegen oder Ihre Anforderungen..."
                maxLength={2000}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 resize-none"
              />
            </div>
          </div>
        )}

        {/* Datenschutz Checkbox */}
        <div className={`mt-6 p-4 rounded-[6px] border-2 transition-all ${
          errors.privacy ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-[#109387]'
        }`}>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required
              className="mt-1 w-5 h-5 rounded border-gray-300 text-[#109387] focus:ring-[#109387] cursor-pointer accent-[#109387]"
            />
            <span className="text-sm text-gray-700 font-semibold leading-relaxed">
              Ich habe die{' '}
              <Link href="/datenschutz" target="_blank" className="text-[#109387] font-bold hover:underline">
                Datenschutzerklärung
              </Link>{' '}
              und{' '}
              <Link href="/agb" target="_blank" className="text-[#109387] font-bold hover:underline">
                AGB
              </Link>{' '}
              gelesen und stimme der Verarbeitung meiner Daten zu.{' '}
              <span className="text-[#109387]">*</span>
            </span>
          </label>
          {errors.privacy && <p className="mt-2 text-sm text-red-600 font-semibold">{errors.privacy}</p>}
        </div>

        {/* Honeypots (versteckt) */}
        <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
          <input type="text" name="website_hp" tabIndex={-1} autoComplete="off" />
          <input type="text" name="fax_hp" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-6 w-full flex items-center justify-center gap-3 bg-[#012956] hover:bg-[#01203d] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg hover:shadow-xl ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Wird gesendet...</span>
            </>
          ) : (
            <>
              <span>Kostenfreie Besichtigung anfragen</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <p className="mt-4 text-center text-sm text-gray-500 font-semibold">
          Wir melden uns innerhalb von 2 Stunden bei Ihnen.
        </p>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-[6px] p-8 md:p-12 max-w-lg w-full text-center shadow-2xl animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-24 h-24 bg-[#109387] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle size={48} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#012956] mb-4">
              Vielen Dank{userName ? `, ${userName}` : ''}!
            </h3>
            <p className="text-gray-700 font-semibold mb-4 text-lg">
              Ihre Anfrage wurde erfolgreich versendet. Wir melden uns schnellstmöglich bei Ihnen.
            </p>
            {requestId && (
              <div className="bg-[#f8f9fa] border-2 border-[#109387] rounded-[6px] px-6 py-3 mb-6 inline-block">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Referenznummer</p>
                <p className="text-lg font-bold text-[#012956] font-mono tracking-wider">{requestId}</p>
              </div>
            )}
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#012956] hover:bg-[#01203d] text-white font-bold px-10 py-4 rounded-[6px] transition-all text-lg"
            >
              Schließen
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease forwards;
        }
      `}</style>
    </>
  )
}
