'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
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
  'Facility Management',
  'Winterdienst',
  'Hausmeisterservice',
  'Baureinigung',
  'Sonstiges'
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    privacy: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [userName, setUserName] = useState('')

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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Bitte geben Sie Ihren Namen ein'
    if (!formData.email.trim()) newErrors.email = 'Bitte geben Sie Ihre E-Mail ein'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Bitte geben Sie eine gültige E-Mail ein'
    if (!formData.phone.trim()) newErrors.phone = 'Bitte geben Sie Ihre Telefonnummer ein'
    if (!formData.privacy) newErrors.privacy = 'Bitte akzeptieren Sie die Datenschutzbestimmungen'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setUserName(formData.name)
        setShowModal(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          privacy: false
        })
      } else {
        alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
      }
    } catch {
      alert('Technischer Fehler. Bitte kontaktieren Sie uns telefonisch.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name & Firma */}
        <div className="grid md:grid-cols-2 gap-4">
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
              placeholder="Max Mustermann"
              className={`w-full px-4 py-3 border-2 rounded-[6px] text-gray-900 font-semibold transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'
              }`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600 font-semibold">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="cf-company" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
              Unternehmen <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="cf-company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Ihre Firma GmbH"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20"
            />
          </div>
        </div>

        {/* E-Mail & Telefon */}
        <div className="grid md:grid-cols-2 gap-4">
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
              placeholder="max@beispiel.de"
              className={`w-full px-4 py-3 border-2 rounded-[6px] text-gray-900 font-semibold transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600 font-semibold">{errors.email}</p>}
          </div>

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
              placeholder="+49 123 456789"
              className={`w-full px-4 py-3 border-2 rounded-[6px] text-gray-900 font-semibold transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 ${
                errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'
              }`}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600 font-semibold">{errors.phone}</p>}
          </div>
        </div>

        {/* Leistung */}
        <div>
          <label htmlFor="cf-service" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
            Gewünschte Leistung <span className="text-gray-400">(optional)</span>
          </label>
          <select
            id="cf-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
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
            Ihre Nachricht <span className="text-gray-400">(optional)</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Beschreiben Sie kurz Ihr Anliegen oder Ihre Anforderungen..."
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-[6px] text-gray-900 font-semibold transition-all focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 resize-none"
          />
        </div>

        {/* Datenschutz Checkbox */}
        <div className={`p-4 rounded-[6px] border-2 transition-all ${
          errors.privacy ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'
        }`}>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-[#109387] focus:ring-[#109387] cursor-pointer"
            />
            <span className="text-sm text-gray-700 font-semibold leading-relaxed">
              Ich habe die{' '}
              <Link href="/datenschutz" target="_blank" className="text-[#109387] font-bold hover:underline">
                Datenschutzerklärung
              </Link>{' '}
              gelesen und stimme der Verarbeitung meiner Daten zu.{' '}
              <span className="text-[#109387]">*</span>
            </span>
          </label>
          {errors.privacy && <p className="mt-2 text-sm text-red-600 font-semibold">{errors.privacy}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group ${
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

        <p className="text-center text-sm text-gray-500 font-semibold">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-[6px] p-8 max-w-md w-full text-center shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-20 h-20 bg-[#109387] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#012956] mb-4">
              Vielen Dank{userName ? `, ${userName}` : ''}!
            </h3>
            <p className="text-gray-700 font-semibold mb-6">
              Ihre Anfrage wurde erfolgreich versendet. Wir melden uns schnellstmöglich bei Ihnen.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#012956] hover:bg-[#01203d] text-white font-bold px-8 py-3 rounded-[6px] transition-all"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  )
}
