"use client"

import { siteContent as siteContentEN } from "@/lib/content"
import { siteContent as siteContentDA } from "@/lib/content-da"
import { Star } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface Testimonial {
  rating: number
  text: string
  author: {
    name: string
    role: string
    company: string
    logo: string
  }
}

export default function TestimonialsSection() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith('/da') ? 'da' : 'en'
  const siteContent = currentLang === 'da' ? siteContentDA : siteContentEN
  const { testimonials } = siteContent

  return (
    <section className="py-16 bg-violet-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            {testimonials.title.part1}{" "}
            <span className="text-gradient">{testimonials.title.highlighted}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.items.map((testimonial: Testimonial, index: number) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg relative flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-violet-600 text-violet-600" />
                ))}
              </div>

              <blockquote className="text-base md:text-lg font-medium mb-6 leading-relaxed text-gray-800 flex-grow">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 flex-shrink-0">
                  <Image
                    src={testimonial.author.logo}
                    alt={testimonial.author.company}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <div className="flex-grow">
                  <h4 className="font-bold text-base text-gray-900">{testimonial.author.name}</h4>
                  <p className="text-sm text-violet-600 font-medium">{testimonial.author.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.author.company}</p>
                </div>
              </div>

              <div className="absolute top-4 right-4 text-violet-100 text-5xl font-serif leading-none select-none">
                &rdquo;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
