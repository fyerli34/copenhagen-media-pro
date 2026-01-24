"use client"

import { siteContent as siteContentEN } from "@/lib/content"
import { siteContent as siteContentDA } from "@/lib/content-da"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AboutSection() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith('/da') ? 'da' : 'en'
  const siteContent = currentLang === 'da' ? siteContentDA : siteContentEN
  const { about } = siteContent

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            {about.title}
          </h2>
          <Link
            href={`/${currentLang}/contact`}
            className="px-8 py-4 btn-gradient text-white font-bold rounded-md flex items-center justify-center gap-2 mx-auto hover:shadow-xl transition-all w-fit"
          >
            {about.button}
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-bold text-gray-900 mb-8 leading-relaxed">
            {about.description.main}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {about.description.columns.map((text, index) => (
              <div key={index} className="text-gray-600 leading-relaxed">
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
