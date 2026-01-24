"use client"

import { siteContent as siteContentEN } from "@/lib/content"
import { siteContent as siteContentDA } from "@/lib/content-da"
import { ArrowUpRight } from "lucide-react"
import { usePathname } from "next/navigation"

export default function ServicesSection() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith('/da') ? 'da' : 'en'
  const siteContent = currentLang === 'da' ? siteContentDA : siteContentEN
  const { services } = siteContent

  return (
    <section id="services" className="py-20 bg-violet-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {services.title.part1}{" "}
            <span className="text-gradient">{services.title.highlighted}</span>{" "}
            {services.title.part2}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.items.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all group"
            >
              {service.number && (
                <div className="text-4xl font-black text-violet-300 mb-4">
                  {service.number}
                </div>
              )}
              <h3 className="text-2xl font-black mb-6 text-[#8D6EEA]">{service.title}</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-violet-600 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="text-violet-600 hover:text-violet-700 flex items-center gap-2 font-bold group-hover:gap-3 transition-all">
                <ArrowUpRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
