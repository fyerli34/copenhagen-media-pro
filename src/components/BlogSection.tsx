"use client"

import { siteContent as siteContentEN } from "@/lib/content"
import { siteContent as siteContentDA } from "@/lib/content-da"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { usePathname } from "next/navigation"

export default function BlogSection() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith('/da') ? 'da' : 'en'
  const siteContent = currentLang === 'da' ? siteContentDA : siteContentEN
  const { gameSection } = siteContent

  if (!gameSection.enabled) return null

  const openGame = () => {
    window.open(gameSection.gameUrl, '_blank', 'noopener,noreferrer')
  }

  const buttonText = currentLang === 'da' ? 'Spil Vores Mini Spil' : 'Play Our Mini Game'

  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Game Area */}
        <div className="max-w-5xl mx-auto">
          <div className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl relative group">
            {/* Background Image */}
            <Image
              src="/game-preview.jpg"
              alt="Game Preview"
              fill
              className="object-cover"
              priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

            {/* Play Button - Alt Ortada, Dikdörtgen */}
            <div className="absolute bottom-6 md:bottom-12 left-0 right-0 flex justify-center px-4">
              <button
                onClick={openGame}
                className="px-4 py-2.5 md:px-12 md:py-5 bg-[#8D6EEA] hover:bg-[#7C5DD9] text-white font-bold text-sm md:text-xl rounded-lg md:rounded-xl flex items-center gap-2 md:gap-3 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <svg className="w-4 h-4 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                <span className="whitespace-nowrap">{buttonText}</span>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
