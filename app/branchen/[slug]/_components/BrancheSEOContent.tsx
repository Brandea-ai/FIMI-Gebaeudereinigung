import { Branche } from '@/lib/branchen-data'
import ReactMarkdown from 'react-markdown'

interface BrancheSEOContentProps {
  branche: Branche
}

export function BrancheSEOContent({ branche }: BrancheSEOContentProps) {
  if (!branche.seoContent) return null

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none
            prose-headings:text-[#012956] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-strong:text-[#012956]
            prose-li:text-gray-700
            prose-ul:my-4
            prose-a:text-[#109387] prose-a:no-underline hover:prose-a:underline
          ">
            <ReactMarkdown>{branche.seoContent}</ReactMarkdown>
          </article>
        </div>
      </div>
    </section>
  )
}
