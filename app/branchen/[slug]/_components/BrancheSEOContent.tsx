'use client'

import { Branche } from '@/lib/branchen-data'

interface BrancheSEOContentProps {
  branche: Branche
}

// Simple markdown parser for our specific use case
function parseMarkdown(text: string): string {
  return text
    // Headers
    .replace(/^### (.*$)/gm, '<h3 class="text-xl md:text-2xl font-bold text-[#012956] mt-6 mb-3">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl md:text-3xl font-bold text-[#012956] mt-8 mb-4">$1</h2>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#012956] font-bold">$1</strong>')
    // Lists
    .replace(/^- (.*$)/gm, '<li class="text-gray-700 ml-4 mb-1">$1</li>')
    // Paragraphs (lines not starting with < or being empty)
    .replace(/^(?!<|$)(.*$)/gm, '<p class="text-gray-700 leading-relaxed mb-4">$1</p>')
    // Clean up empty paragraphs
    .replace(/<p class="text-gray-700 leading-relaxed mb-4"><\/p>/g, '')
    // Wrap consecutive li elements in ul
    .replace(/(<li[^>]*>.*?<\/li>\n?)+/g, (match) => `<ul class="list-disc my-4 pl-4">${match}</ul>`)
}

export function BrancheSEOContent({ branche }: BrancheSEOContentProps) {
  if (!branche.seoContent) return null

  const htmlContent = parseMarkdown(branche.seoContent.trim())

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </section>
  )
}
