"use client"

import { siteContent as siteContentEN } from "@/lib/content"
import { siteContent as siteContentDA } from "@/lib/content-da"
import { ArrowRight, TrendingUp, Target, Sparkles } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CTASection() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith('/da') ? 'da' : 'en'
  const siteContent = currentLang === 'da' ? siteContentDA : siteContentEN
  const { cta } = siteContent

  // Icons for each category
  const categoryIcons = [
    <TrendingUp key="growth" size={18} />,
    <Target key="target" size={18} />,
    <Sparkles key="creative" size={18} />
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-violet-900 to-gray-900">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 text-violet-300">
            {cta.categories.map((category, index) => (
              <div key={index} className="flex items-center gap-2">
                {categoryIcons[index]}
                <span className="text-xs md:text-sm font-bold">{category}</span>
              </div>
            ))}
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-12">
            {cta.title}
          </h2>

          <Link
            href={`/${currentLang}/contact`}
            className="px-10 py-5 btn-gradient text-white font-bold rounded-md flex items-center justify-center gap-2 mx-auto hover:shadow-2xl transition-all text-lg w-fit"
          >
            {cta.button}
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}
