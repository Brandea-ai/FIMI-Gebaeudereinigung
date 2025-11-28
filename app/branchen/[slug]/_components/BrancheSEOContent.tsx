import { Branche } from '@/lib/branchen-data'

interface BrancheSEOContentProps {
  branche: Branche
}

// Premium Markdown Parser mit Doppelpunkt-Logik für Headlines
// - Headline mit Doppelpunkt: Text vor Doppelpunkt = grün, Rest = blau (Navy)
// - Headline ohne Doppelpunkt: alles grün
// - Keine Doppelpunkte in normalen Texten wo sie nicht hingehören
function parseMarkdown(text: string): string {
  return text
    // H2 Headers mit Doppelpunkt-Logik
    .replace(/^## (.*$)/gm, (match, content) => {
      if (content.includes(':')) {
        const [before, ...after] = content.split(':')
        return `<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-16 mb-6 leading-tight"><span class="text-[#109387]">${before.trim()}</span> <span class="text-[#012956]">${after.join(':').trim()}</span></h2>`
      }
      return `<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#109387] mt-16 mb-6 leading-tight">${content}</h2>`
    })
    // H3 Headers mit Doppelpunkt-Logik
    .replace(/^### (.*$)/gm, (match, content) => {
      if (content.includes(':')) {
        const [before, ...after] = content.split(':')
        return `<h3 class="text-xl md:text-2xl font-bold mt-10 mb-4 leading-tight"><span class="text-[#109387]">${before.trim()}</span> <span class="text-[#012956]">${after.join(':').trim()}</span></h3>`
      }
      return `<h3 class="text-xl md:text-2xl font-bold text-[#109387] mt-10 mb-4 leading-tight">${content}</h3>`
    })
    // Bold Text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#012956] font-bold">$1</strong>')
    // Lists
    .replace(/^- (.*$)/gm, `
      <li class="flex items-start gap-3 mb-3">
        <span class="w-2 h-2 bg-[#109387] rounded-full mt-2.5 flex-shrink-0"></span>
        <span class="text-gray-700 text-lg leading-relaxed">$1</span>
      </li>
    `)
    // Paragraphs
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

        <div className="max-w-4xl">
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>

      </div>
    </section>
  )
}
