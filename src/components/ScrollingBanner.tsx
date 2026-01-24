"use client"

import { siteContent as siteContentEN } from "@/lib/content"
import { siteContent as siteContentDA } from "@/lib/content-da"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function ScrollingBanner() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith('/da') ? 'da' : 'en'
  const siteContent = currentLang === 'da' ? siteContentDA : siteContentEN
  const { scrollingBanner } = siteContent

  // Triple items for perfect seamless loop
  const items = [...scrollingBanner.items, ...scrollingBanner.items, ...scrollingBanner.items]

  return (
    <div className="bg-violet-600 py-6 overflow-hidden">
      <div className="flex animate-scroll">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-8 whitespace-nowrap shrink-0"
          >
            {/* Logo Image - Kendi renkleriyle, tutarlı boyutlarda */}
            <div className={`relative shrink-0 ${
              item.text
                ? 'w-12 h-12 md:w-16 md:h-16'
                : item.logoUrl.includes('tiktok')
                  ? 'w-40 h-20 md:w-56 md:h-28'
                  : 'w-32 h-16 md:w-48 md:h-24'
            }`}>
              <Image
                src={item.logoUrl}
                alt={item.text || "Partner Logo"}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            {/* Text - Sadece varsa göster */}
            {item.text && (
              <span className="text-white font-black text-2xl tracking-wider">
                {item.text}
              </span>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
