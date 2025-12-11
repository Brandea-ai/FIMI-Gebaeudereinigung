import { Branche } from '@/lib/branchen-data'
import { Quote } from 'lucide-react'

interface BrancheSEOContentProps {
  branche: Branche
}

// Premium Markdown Parser - KEINE Doppelpunkte, Mobile-First
function parseMarkdown(text: string): string {
  return text
    // H2 Headers - Doppelpunkte komplett entfernen
    .replace(/^## (.*$)/gm, (match, content) => {
      const cleanContent = content.replace(/:\s*/g, ' ').trim()
      return `<h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#109387] mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 leading-tight">${cleanContent}</h2>`
    })
    // H3 Headers - Doppelpunkte komplett entfernen
    .replace(/^### (.*$)/gm, (match, content) => {
      const cleanContent = content.replace(/:\s*/g, ' ').trim()
      return `<h3 class="text-lg sm:text-xl md:text-2xl font-bold text-[#109387] mt-8 sm:mt-10 mb-3 sm:mb-4 leading-tight">${cleanContent}</h3>`
    })
    // Doppelpunkte nach Bold-Text entfernen: **Text**: → **Text** –
    .replace(/\*\*([^*]+)\*\*:\s*/g, '**$1** – ')
    // Bold Text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#012956] font-bold">$1</strong>')
    // Lists
    .replace(/^- (.*$)/gm, `
      <li class="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
        <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#109387] rounded-full mt-2 sm:mt-2.5 flex-shrink-0"></span>
        <span class="text-gray-700 text-base sm:text-lg leading-relaxed">$1</span>
      </li>
    `)
    // Paragraphs
    .replace(/^(?!<|$|\s)(.*$)/gm, '<p class="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">$1</p>')
    // Clean up empty paragraphs
    .replace(/<p class="[^"]*"><\/p>/g, '')
    // Wrap consecutive li elements in ul
    .replace(/(<li[^>]*>[\s\S]*?<\/li>\s*)+/g, (match) => `<ul class="my-6 sm:my-8 space-y-1">${match}</ul>`)
}

export function BrancheSEOContent({ branche }: BrancheSEOContentProps) {
  if (!branche.seoContent) return null

  const htmlContent = parseMarkdown(branche.seoContent.trim())

  return (
    <section id="seo-content" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        <div className="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 lg:gap-16">

          {/* Main Content - Links */}
          <div className="lg:w-2/3 order-2 lg:order-1">
            <article
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>

          {/* Sidebar - Mobile oben, Desktop rechts sticky */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 order-1 lg:order-2">

            {/* Quote Box */}
            <div className="bg-gradient-to-br from-[#012956] to-[#012956]/90 rounded-[6px] p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
              <Quote size={32} className="text-[#109387] mb-3 sm:mb-4 sm:w-10 sm:h-10" />
              <p className="text-white text-lg sm:text-xl font-bold leading-relaxed mb-3 sm:mb-4">
                „Qualität ist kein Zufall, sondern das Ergebnis von Erfahrung und Sorgfalt."
              </p>
              <p className="text-white/70 text-sm sm:text-base">
                – FIMI Gebäudereinigung
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-gray-50 rounded-[6px] p-5 sm:p-6 md:p-8 border border-gray-100">
              <p className="text-[#109387] font-bold text-xs uppercase tracking-[0.2em] mb-4 sm:mb-6">
                Unsere Zahlen
              </p>
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012956]">8+</p>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Jahre Erfahrung</p>
                </div>
                <div className="hidden lg:block h-px bg-gray-200" />
                <div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012956]">120+</p>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Kundenprojekte</p>
                </div>
                <div className="hidden lg:block h-px bg-gray-200" />
                <div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012956]">2h</p>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Reaktionszeit</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                <a
                  href="#contact-form"
                  className="block w-full text-center bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base py-2.5 sm:py-3 rounded-[6px] transition-colors"
                >
                  Kostenfreie Besichtigung
                </a>
                <a
                  href="tel:+4987120669360"
                  className="block w-full text-center text-[#012956] font-bold text-sm sm:text-base py-2.5 sm:py-3 rounded-[6px] border-2 border-[#012956] hover:bg-[#012956] hover:text-white transition-colors"
                >
                  0871 2066936-0
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
