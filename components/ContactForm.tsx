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
  postalCode: string
  website: string
  employeeCount: string
  service: string
  branche: string
  callbackTime: string
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

const CALLBACK_TIMES = [
  'Vormittags (9-12 Uhr)',
  'Mittags (12-15 Uhr)',
  'Nachmittags (15-18 Uhr)',
  'Jederzeit erreichbar'
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    postalCode: '',
    website: '',
    employeeCount: '',
    service: '',
    branche: '',
    callbackTime: '',
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
          postalCode: '',
          website: '',
          employeeCount: '',
          service: '',
          branche: '',
          callbackTime: '',
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
      alert('Technischer Fehler. Bitte kontaktieren Sie uns telefonisch: 0871 2066936 0')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate aria-label="Kontaktformular">
        {/* Phase 1: Basis-Felder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4">
          {/* Name */}
          <div>
            <label htmlFor="cf-name" className="block text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 sm:mb-2">
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
              aria-required="true"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'cf-name-error' : undefined}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-[6px] text-gray-900 font-semibold text-sm sm:text-base transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'
              }`}
            />
            {errors.name && <p id="cf-name-error" className="mt-1 text-xs sm:text-sm text-red-600 font-semibold" role="alert">{errors.name}</p>}
          </div>

          {/* E-Mail */}
          <div>
            <label htmlFor="cf-email" className="block text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 sm:mb-2">
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
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'cf-email-error' : undefined}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-[6px] text-gray-900 font-semibold text-sm sm:text-base transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'
              }`}
            />
            {errors.email && <p id="cf-email-error" className="mt-1 text-xs sm:text-sm text-red-600 font-semibold" role="alert">{errors.email}</p>}
          </div>

          {/* Telefon */}
          <div className="sm:col-span-2 lg:col-span-1">
            <label htmlFor="cf-phone" className="block text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 sm:mb-2">
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
              aria-required="true"
              aria-invalid={errors.phone ? 'true' : 'false'}
              aria-describedby={errors.phone ? 'cf-phone-error' : undefined}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-[6px] text-gray-900 font-semibold text-sm sm:text-base transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 ${
                errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'
              }`}
            />
            {errors.phone && <p id="cf-phone-error" className="mt-1 text-xs sm:text-sm text-red-600 font-semibold" role="alert">{errors.phone}</p>}
          </div>
        </div>

        {/* Phase 2: Erweiterte Felder (erscheinen nach Eingabe) */}
        {phase2Visible && (
          <div className="space-y-3 sm:space-y-4 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Unternehmen */}
              <div>
                <label htmlFor="cf-company" className="block text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 sm:mb-2">
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold text-sm sm:text-base transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20"
                />
              </div>

              {/* Branche */}
              <div>
                <label htmlFor="cf-branche" className="block text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 sm:mb-2">
                  Branche <span className="text-gray-400 normal-case">(optional)</span>
                </label>
                <select
                  id="cf-branche"
                  name="branche"
                  value={formData.branche}
                  onChange={handleChange}
                  onFocus={() => formTracking.onFieldFocus('branche')}
                  onBlur={() => formTracking.onFieldComplete('branche', formData.branche.length > 0)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold text-sm sm:text-base transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 bg-white"
                >
                  <option value="">Bitte wählen...</option>
                  {BRANCHEN.map(branche => (
                    <option key={branche} value={branche}>{branche}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* PLZ, Website, Mitarbeiter */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* PLZ */}
              <div>
                <label htmlFor="cf-postalCode" className="block text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 sm:mb-2">
                  PLZ <span className="text-gray-400 normal-case">(optional)</span>
                </label>
                <input
                  type="text"
                  id="cf-postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="84036"
                  maxLength={10}
                  autoComplete="postal-code"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold text-sm sm:text-base transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20"
                />
              </div>

              {/* Website */}
              <div>
                <label htmlFor="cf-website" className="block text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 sm:mb-2">
                  Website <span className="text-gray-400 normal-case">(optional)</span>
                </label>
                <input
                  type="url"
                  id="cf-website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="www.beispiel.de"
                  maxLength={100}
                  autoComplete="url"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold text-sm sm:text-base transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20"
                />
              </div>

              {/* Mitarbeiteranzahl */}
              <div>
                <label htmlFor="cf-employeeCount" className="block text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 sm:mb-2">
                  Mitarbeiter <span className="text-gray-400 normal-case">(optional)</span>
                </label>
                <select
                  id="cf-employeeCount"
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold text-sm sm:text-base transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 bg-white"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
            </div>

            {/* Gewünschte Leistung + Rückrufzeit */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor="cf-service" className="block text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 sm:mb-2">
                  Gewünschte Leistung <span className="text-gray-400 normal-case">(optional)</span>
                </label>
                <select
                  id="cf-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => formTracking.onFieldFocus('service')}
                  onBlur={() => formTracking.onFieldComplete('service', formData.service.length > 0)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold text-sm sm:text-base transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 bg-white"
                >
                  <option value="">Bitte wählen...</option>
                  {SERVICES.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Rückrufzeitfenster */}
              <div>
                <label htmlFor="cf-callbackTime" className="block text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 sm:mb-2">
                  Rückruf gewünscht <span className="text-gray-400 normal-case">(optional)</span>
                </label>
                <select
                  id="cf-callbackTime"
                  name="callbackTime"
                  value={formData.callbackTime}
                  onChange={handleChange}
                  onFocus={() => formTracking.onFieldFocus('callbackTime')}
                  onBlur={() => formTracking.onFieldComplete('callbackTime', formData.callbackTime.length > 0)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold text-sm sm:text-base transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 bg-white"
                >
                  <option value="">Bitte wählen...</option>
                  {CALLBACK_TIMES.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Nachricht */}
            <div>
              <label htmlFor="cf-message" className="block text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 sm:mb-2">
                Ihre Nachricht <span className="text-gray-400 normal-case">(optional)</span>
              </label>
              <textarea
                id="cf-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => formTracking.onFieldFocus('message')}
                onBlur={() => formTracking.onFieldComplete('message', formData.message.length > 0)}
                rows={3}
                placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                maxLength={2000}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold text-sm sm:text-base transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 resize-none"
              />
            </div>
          </div>
        )}

        {/* Datenschutz Checkbox */}
        <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-[6px] border-2 transition-all ${
          errors.privacy ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-[#109387]'
        }`}>
          <label className="flex items-start gap-2.5 sm:gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={errors.privacy ? 'true' : 'false'}
              aria-describedby={errors.privacy ? 'cf-privacy-error' : undefined}
              className="mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-[#109387] focus:ring-[#109387] focus:ring-2 cursor-pointer accent-[#109387]"
            />
            <span className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
              Ich habe die{' '}
              <Link href="/datenschutz" target="_blank" className="text-[#109387] font-bold hover:underline">
                Datenschutzerklärung
              </Link>{' '}
              und{' '}
              <Link href="/agb" target="_blank" className="text-[#109387] font-bold hover:underline">
                AGB
              </Link>{' '}
              gelesen und stimme zu.{' '}
              <span className="text-[#109387]">*</span>
            </span>
          </label>
          {errors.privacy && <p id="cf-privacy-error" className="mt-2 text-xs sm:text-sm text-red-600 font-semibold" role="alert">{errors.privacy}</p>}
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
          aria-busy={isSubmitting}
          className={`mt-4 sm:mt-6 w-full flex items-center justify-center gap-2 sm:gap-3 bg-[#012956] hover:bg-[#01203d] text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group shadow-lg hover:shadow-xl ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
              <span>Wird gesendet...</span>
            </>
          ) : (
            <>
              <span>Kostenfreie Besichtigung anfragen</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </>
          )}
        </button>

        <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-500 font-semibold">
          Wir melden uns innerhalb von 2 Stunden bei Ihnen.
        </p>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
        >
          <div
            className="bg-white rounded-[6px] p-5 sm:p-6 md:p-8 max-w-md w-full text-center shadow-2xl animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#109387] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
              <CheckCircle size={24} className="sm:w-8 sm:h-8 text-white" aria-hidden="true" />
            </div>
            <h3 id="success-modal-title" className="text-lg sm:text-xl md:text-2xl font-bold text-[#012956] mb-2 sm:mb-3">
              Vielen Dank{userName ? `, ${userName}` : ''}!
            </h3>
            <p className="text-gray-700 font-semibold mb-3 text-sm sm:text-base">
              Ihre Anfrage wurde erfolgreich versendet. Wir melden uns schnellstmöglich bei Ihnen.
            </p>
            {requestId && (
              <div className="bg-[#f8f9fa] border-2 border-[#109387] rounded-[6px] px-3 sm:px-4 py-2 mb-3 sm:mb-4 inline-block">
                <p className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wide mb-0.5">Referenznummer</p>
                <p className="text-xs sm:text-sm font-bold text-[#012956] font-mono tracking-wider">{requestId}</p>
              </div>
            )}
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-[#012956] hover:bg-[#01203d] text-white font-bold px-6 py-2.5 sm:py-3 rounded-[6px] transition-all text-sm sm:text-base"
              autoFocus
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
