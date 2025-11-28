'use client'

import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  title: string
  text: string
}

export default function ShareButton({ title, text }: ShareButtonProps) {
  const handleShare = async () => {
    const url = window.location.href

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url })
      } catch {
        // User cancelled or error
      }
    } else {
      await navigator.clipboard.writeText(url)
      alert('Link wurde kopiert!')
    }
  }

  return (
    <button
      onClick={handleShare}
      className="p-2 bg-[#f8f9fa] hover:bg-[#012956] hover:text-white rounded-[6px] transition-colors cursor-pointer"
      aria-label="Artikel teilen"
    >
      <Share2 size={18} />
    </button>
  )
}
