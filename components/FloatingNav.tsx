'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

export interface NavItem {
  id: string
  label: string
}

interface FloatingNavProps {
  items: NavItem[]
  /** Offset from top when scrolling to section (default: 80) */
  scrollOffset?: number
}

export default function FloatingNav({ items, scrollOffset = 80 }: FloatingNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState(items[0]?.id || '')
  const [isHovering, setIsHovering] = useState(false)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Show toggle button when hero is ~30% scrolled away
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroElement = document.getElementById('hero')
      const heroHeight = heroElement ? heroElement.offsetHeight : 800
      const showThreshold = heroHeight * 0.3

      if (currentScrollY > showThreshold) {
        setIsVisible(true)

        // Auto-hide menu (not toggle button) after 2s of no scroll - BUT ONLY if not hovering
        if (isOpen && !isHovering) {
          if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current)
          }

          hideTimeoutRef.current = setTimeout(() => {
            if (!isHovering) {
              setIsOpen(false)
            }
          }, 2000)
        }
      } else {
        setIsVisible(false)
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [isOpen, isHovering])

  // Track active section using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          if (sectionId) {
            setActiveSection(sectionId)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections by their IDs
    items.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  // Scroll to section on click
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - scrollOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      // Close menu after navigation
      setIsOpen(false)
    }
  }

  // Handle mouse enter/leave (Desktop only)
  const handleMouseEnter = () => {
    setIsHovering(true)
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  // Get active index for badge
  const activeIndex = items.findIndex(item => item.id === activeSection)
  const badgeNumber = activeIndex >= 0 ? activeIndex + 1 : 1

  if (!isVisible) return null

  return (
    <>
      {/* Mobile Overlay - nur auf Mobile sichtbar wenn offen */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[9998]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Desktop: Floating Button rechts */}
      <div
        className="hidden md:block fixed z-[9999] top-[200px] right-[30px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Toggle Button - Desktop */}
        <button
          className="relative w-16 h-16 rounded-[6px] bg-[#109387] border-none cursor-pointer flex items-center justify-center shadow-[0_12px_40px_-8px_rgba(16,147,135,0.35),0_4px_16px_-4px_rgba(0,0,0,0.12),0_0_0_1px_rgba(16,147,135,0.15)] transition-all duration-300 ease-out hover:bg-[#0d7d72] hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-10px_rgba(16,147,135,0.45),0_6px_20px_-6px_rgba(0,0,0,0.15),0_0_0_1px_rgba(16,147,135,0.25)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Navigation öffnen/schließen"
        >
          <Menu size={22} className="text-white" strokeWidth={1.5} />
          <span className="absolute -top-2 -right-2 w-7 h-7 bg-white text-[#109387] rounded-[6px] flex items-center justify-center text-[0.8125rem] font-bold border-[1.5px] border-[#109387] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.15)] tabular-nums">
            {badgeNumber}
          </span>
        </button>

        {/* Navigation Menu - Desktop (links vom Button) */}
        <nav
          className={`absolute top-0 right-20 w-[300px] bg-white rounded-[6px] shadow-[0_24px_72px_-12px_rgba(0,0,0,0.18),0_8px_24px_-6px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out origin-right ${
            isOpen
              ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto'
              : 'opacity-0 scale-95 translate-x-2 pointer-events-none'
          }`}
          aria-label="Seitennavigation"
        >
          <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
            <span className="text-base font-semibold text-[#012956]">Navigation</span>
            <button
              className="w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer rounded hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Schließen"
            >
              <X size={18} className="text-gray-600" strokeWidth={2.5} />
            </button>
          </div>
          <div className="p-2 max-h-[580px] overflow-y-auto">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 bg-transparent border-none rounded-[6px] cursor-pointer text-left transition-all duration-200 ${
                  activeSection === item.id ? 'bg-[#109387]/10' : 'hover:bg-[#109387]/5'
                }`}
              >
                <span className={`text-[0.8125rem] font-bold min-w-[28px] tabular-nums tracking-tight ${
                  activeSection === item.id ? 'text-[#109387]' : 'text-[#109387]/70'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`flex-1 text-[0.9375rem] ${
                  activeSection === item.id ? 'text-[#109387] font-semibold' : 'text-[#012956] font-medium'
                }`}>
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <span className="w-1.5 h-1.5 bg-[#109387] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile: Bottom Button + Bottom Sheet Menu */}
      <div className="md:hidden fixed z-[9999] bottom-6 left-1/2 -translate-x-1/2">
        {/* Toggle Button - Mobile */}
        <button
          className="relative w-[60px] h-[60px] rounded-[6px] bg-[#109387] border-none cursor-pointer flex items-center justify-center shadow-[0_12px_40px_-8px_rgba(16,147,135,0.35),0_4px_16px_-4px_rgba(0,0,0,0.12),0_0_0_1px_rgba(16,147,135,0.15)] transition-all duration-300 ease-out active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Navigation öffnen/schließen"
        >
          {isOpen ? (
            <X size={22} className="text-white" strokeWidth={2} />
          ) : (
            <Menu size={22} className="text-white" strokeWidth={1.5} />
          )}
          {!isOpen && (
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-[#109387] rounded-[6px] flex items-center justify-center text-xs font-bold border-[1.5px] border-[#109387] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.15)] tabular-nums">
              {badgeNumber}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu - Bottom Sheet */}
      <nav
        className={`md:hidden fixed z-[9999] bottom-0 left-0 right-0 bg-white rounded-t-[20px] shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        aria-label="Seitennavigation"
      >
        {/* Handle Bar */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Menu Header */}
        <div className="flex justify-between items-center px-5 py-3 border-b border-gray-100">
          <span className="text-base font-semibold text-[#012956]">Navigation</span>
          <button
            className="w-8 h-8 flex items-center justify-center bg-gray-100 border-none cursor-pointer rounded-full"
            onClick={() => setIsOpen(false)}
            aria-label="Schließen"
          >
            <X size={18} className="text-gray-600" strokeWidth={2.5} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-3 pb-8 max-h-[60vh] overflow-y-auto">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-3 w-full px-4 py-4 bg-transparent border-none rounded-xl cursor-pointer text-left transition-all duration-200 ${
                activeSection === item.id ? 'bg-[#109387]/10' : 'active:bg-gray-100'
              }`}
            >
              <span className={`text-sm font-bold min-w-[28px] tabular-nums ${
                activeSection === item.id ? 'text-[#109387]' : 'text-[#109387]/70'
              }`}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={`flex-1 text-base ${
                activeSection === item.id ? 'text-[#109387] font-semibold' : 'text-[#012956] font-medium'
              }`}>
                {item.label}
              </span>
              {activeSection === item.id && (
                <span className="w-2 h-2 bg-[#109387] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
