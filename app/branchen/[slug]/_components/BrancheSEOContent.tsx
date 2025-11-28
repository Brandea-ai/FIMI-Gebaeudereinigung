import { Branche } from '@/lib/branchen-data'
import { FileText, Quote } from 'lucide-react'

interface BrancheSEOContentProps {
  branche: Branche
}

// Premium Markdown Parser mit besserer Typographie
function parseMarkdown(text: string): string {
  return text
    // H2 Headers - Große, fette Headlines
    .replace(/^## (.*$)/gm, `
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956] mt-16 mb-6 leading-tight">$1</h2>
    `)
    // H3 Headers
    .replace(/^### (.*$)/gm, `
      <h3 class="text-xl md:text-2xl font-bold text-[#012956] mt-10 mb-4 leading-tight">$1</h3>
    `)
    // Bold Text - Hervorgehobener Text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#012956] font-bold">$1</strong>')
    // Lists - Schöne Aufzählungen
    .replace(/^- (.*$)/gm, `
      <li class="flex items-start gap-3 mb-3">
        <span class="w-2 h-2 bg-[#109387] rounded-full mt-2.5 flex-shrink-0"></span>
        <span class="text-gray-700 text-lg leading-relaxed">$1</span>
      </li>
    `)
    // Paragraphs - Große, gut lesbare Absätze
    .replace(/^(?!<|$|\s)(.*$)/gm, '<p class="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">$1</p>')
    // Clean up empty paragraphs
    .replace(/<p class="[^"]*"><\/p>/g, '')
    // Wrap consecutive li elements in ul
    .replace(/(<li[^>]*>[\s\S]*?<\/li>\s*)+/g, (match) => `<ul class="my-8 space-y-1">${match}</ul>`)
}

export function BrancheSEOContent({ branche }: BrancheSEOContentProps) {
  if (!branche.seoContent) return null

  const htmlContent = parseMarkdown(branche.seoContent.trim())

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-[8px] bg-[#109387]/10 flex items-center justify-center">
            <FileText size={24} strokeWidth={1.5} className="text-[#109387]" />
          </div>
          <span className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em]">
            Expertenwissen
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">

          {/* Main Content - Links */}
          <div className="lg:w-2/3">
            <article
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>

          {/* Sidebar - Rechts */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">

            {/* Quote Box */}
            <div className="bg-gradient-to-br from-[#012956] to-[#012956]/90 rounded-[16px] p-8 mb-8">
              <Quote size={40} className="text-[#109387] mb-4" />
              <p className="text-white text-xl font-bold leading-relaxed mb-4">
                &bdquo;Qualität ist kein Zufall, sondern das Ergebnis von Erfahrung und Sorgfalt.&ldquo;
              </p>
              <p className="text-white/70">
                – FIMI Gebäudereinigung
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-gray-50 rounded-[16px] p-8 border border-gray-100">
              <p className="text-[#109387] font-bold text-xs uppercase tracking-[0.2em] mb-6">
                Unsere Zahlen
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold text-[#012956]">8+</p>
                  <p className="text-gray-600">Jahre Erfahrung in {branche.shortName}</p>
                </div>
                <div className="h-px bg-gray-200" />
                <div>
                  <p className="text-4xl font-bold text-[#012956]">85k</p>
                  <p className="text-gray-600">m² monatliche Reinigungsfläche</p>
                </div>
                <div className="h-px bg-gray-200" />
                <div>
                  <p className="text-4xl font-bold text-[#012956]">2h</p>
                  <p className="text-gray-600">Durchschnittliche Reaktionszeit</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
