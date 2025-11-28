'use client'

import { useState } from 'react'
import { Share2, Check } from 'lucide-react'

interface ShareButtonProps {
  title: string
}

export default function ShareButton({ title }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href

    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        // User cancelled - fallback to copy
        await copyToClipboard(url)
      }
    } else {
      await copyToClipboard(url)
    }
  }

  const copyToClipboard = async (url: string) => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleShare}
      className={`p-2 rounded-[6px] transition-colors cursor-pointer ${
        copied
          ? 'bg-[#109387] text-white'
          : 'bg-[#f8f9fa] hover:bg-[#012956] hover:text-white'
      }`}
      aria-label="Artikel teilen"
    >
      {copied ? <Check size={18} /> : <Share2 size={18} />}
    </button>
  )
}
