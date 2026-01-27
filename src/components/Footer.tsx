"use client"

import { siteContent as siteContentEN } from "@/lib/content"
import { siteContent as siteContentDA } from "@/lib/content-da"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Footer() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith("/da") ? "da" : "en"
  const siteContent = currentLang === "da" ? siteContentDA : siteContentEN
  const { footer, navigation } = siteContent

  const navItems = navigation.map((item) => {
    const isContact =
      item.label.toLowerCase() === "contact" || item.label.toLowerCase() === "kontakt"
    return {
      ...item,
      href: isContact ? `/${currentLang}/contact` : item.href,
    }
  })

  const followUsText = currentLang === "da" ? "Følg Os" : "Follow Us"
  const usefulLinksText = currentLang === "da" ? "Nyttige Links" : "Useful Links"

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6 relative z-10 overflow-hidden isolate">
      <div className="container">
        {/* 3 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 justify-items-center text-center">
          {/* Logo & Contact Info */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <img
                src={footer.logo.imageUrl}
                alt={footer.logo.text}
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-display font-extrabold tracking-tight">
                COPENHAGEN MEDIA
              </span>
            </div>

            <div className="space-y-2">
              <a
                href="tel:+4555227260"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
                aria-label="Call Copenhagen Media"
              >
                +45 55 22 72 60
              </a>

              <a
                href="mailto:info@cphmediapro.dk"
                className="block text-sm text-[#8D6EEA] hover:text-white transition-colors"
                aria-label="Email Copenhagen Media"
              >
                info@cphmediapro.dk
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">{usefulLinksText}</h3>
            <ul className="space-y-3">
              {navItems.map((item, index) => {
                const isContact =
                  item.label.toLowerCase() === "contact" || item.label.toLowerCase() === "kontakt"

                return (
                  <li key={index}>
                    {isContact ? (
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-[#8D6EEA] transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-[#8D6EEA] transition-colors text-sm"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold mb-4 text-lg">{followUsText}</h3>
            <a
              href="https://www.instagram.com/cphmediapro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img
                src="/instagram-icon.png"
                alt="Instagram"
                className="w-16 h-16 rounded-xl"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-400 text-sm text-center">© 2026 Copenhagen Media</p>
        </div>
      </div>
    </footer>
  )
}
