"use client"

import { siteContent as siteContentEN } from "@/lib/content"
import { siteContent as siteContentDA } from "@/lib/content-da"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface PricingPlan {
  badge: string
  name: string
  shortLine: string
  price: string
  period: string
  features: string[]
  highlighted: boolean
}

export default function PricingSection() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith('/da') ? 'da' : 'en'
  const siteContent = currentLang === 'da' ? siteContentDA : siteContentEN
  const { pricing } = siteContent

  const getStartedText = currentLang === 'da' ? 'KOM I GANG' : 'GET STARTED'

  return (
    <section className="py-20 bg-violet-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {pricing.title.part1}{" "}
            <span className="text-gradient">{pricing.title.highlighted}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {pricing.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 items-end">
          {pricing.plans.map((plan: PricingPlan, index: number) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all ${
                plan.highlighted
                  ? "bg-[#8D6EEA] text-white shadow-2xl scale-105 md:scale-110"
                  : "bg-white text-gray-900 shadow-lg"
              }`}
            >
              {/* Badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 ${
                plan.highlighted
                  ? "bg-white/20 text-white"
                  : "bg-violet-100 text-violet-700"
              }`}>
                {plan.badge}
              </span>

              {/* Title */}
              <h3 className="text-xl font-black mb-3">{plan.name}</h3>

              {/* Short Line */}
              <p className={`text-sm mb-6 ${
                plan.highlighted ? "text-white/80" : "text-gray-600"
              }`}>
                {plan.shortLine}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={`text-sm font-bold ${
                  plan.highlighted ? "text-white/70" : "text-gray-500"
                }`}>
                  {" "}/ {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature: string, fIndex: number) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-white" : "text-violet-600"
                      }`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link
                href={`/${currentLang}/contact`}
                className={`w-full py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? "bg-white text-[#8D6EEA] hover:bg-gray-100"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {getStartedText}
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>

        {/* Custom Plan */}
        <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-3xl font-black mb-6">
            {pricing.customPlan.title}
          </h3>
          <Link
            href={`/${currentLang}/contact`}
            className="px-8 py-4 btn-gradient text-white font-bold rounded-md flex items-center justify-center gap-2 mx-auto hover:shadow-xl transition-all w-fit"
          >
            {pricing.customPlan.button}
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
