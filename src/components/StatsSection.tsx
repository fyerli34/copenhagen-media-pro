"use client"

import { siteContent as siteContentEN } from "@/lib/content"
import { siteContent as siteContentDA } from "@/lib/content-da"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Lottie from "lottie-react"
import animationDataLeft from "@/data/stats-animation.json"
import animationDataRight from "@/data/stats-animation-right.json"

export default function StatsSection() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith('/da') ? 'da' : 'en'
  const siteContent = currentLang === 'da' ? siteContentDA : siteContentEN
  const { stats, partners } = siteContent

  return (
    <section className="py-20 bg-violet-50/30">
      <div className="container">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              {/* Text - Above the animation box, centered */}
              <div className="mb-6 text-center">
                <p className="text-sm md:text-base font-bold text-gray-900 mb-2 uppercase">
                  {stat.title}
                </p>
                <h3 className="text-5xl md:text-7xl font-black text-gray-900">{stat.value}</h3>
              </div>

              {/* Lottie Animation Box */}
              <div className="aspect-video relative rounded-2xl overflow-hidden flex items-center justify-center bg-violet-50/30">
                {index === 0 ? (
                  <Lottie
                    animationData={animationDataLeft}
                    loop={true}
                    className="w-full h-full"
                  />
                ) : (
                  <Lottie
                    animationData={animationDataRight}
                    loop={true}
                    className="w-full h-full"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black">
            {partners.title}
          </h2>
        </div>
      </div>

      {/* Logo Carousel - Şeffaf arka plan, sola kayan, kesintisiz */}
      <div className="relative overflow-hidden py-6 mt-4">
        <div className="logo-carousel-track flex items-center">
          {/* İlk set */}
          {partners.logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 px-6 md:px-10"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-36 md:h-44 w-auto object-contain" style={logo.includes('mer_bistro') ? {transform: 'scale(2.8)'} : {}}
              />
            </div>
          ))}
          {/* İkinci set - kesintisiz döngü için */}
          {partners.logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 px-6 md:px-10"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-36 md:h-44 w-auto object-contain" style={logo.includes('mer_bistro') ? {transform: 'scale(2.8)'} : {}}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation - Kesintisiz döngü */}
      <style jsx>{`
        .logo-carousel-track {
          display: flex;
          width: max-content;
          animation: seamlessScroll 30s linear infinite;
        }

        @keyframes seamlessScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
      `}</style>
    </section>
  )
}
