"use client"

import { siteContent as siteContentEN } from "@/lib/content"
import { siteContent as siteContentDA } from "@/lib/content-da"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function HeroSection() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith('/da') ? 'da' : 'en'
  const siteContent = currentLang === 'da' ? siteContentDA : siteContentEN
  const { hero } = siteContent

  // Animasyonlu kelimeler - DA'da content'ten, EN'de sabit
  const words = currentLang === 'da'
    ? (hero.animatedWords || ["BEDRE", "STØRRE", "HURTIGERE"])
    : ["FASTER", "BIGGER", "BETTER"]

  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2000) // Her 2 saniyede bir değişir

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section id="home" className="pt-32 md:pt-36 pb-16 bg-gradient-to-b from-violet-50/50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            {hero.title.part1} <br />
            <span className="text-gradient inline-block min-w-[280px] animate-pulse">
              {words[currentWordIndex]}
            </span>{" "}
            {hero.title.part2}
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto xl:font-medium">
            {hero.description}
          </p>

          <div className="flex justify-center">
            <Link
              href={`/${currentLang}/contact`}
              className="px-8 py-4 btn-gradient text-white font-bold rounded-md flex items-center justify-center gap-2 hover:shadow-xl transition-all"
            >
              {hero.buttons.primary}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
