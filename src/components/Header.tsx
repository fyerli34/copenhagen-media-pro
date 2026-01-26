"use client"

import { siteContent as siteContentEN } from "@/lib/content"
import { siteContent as siteContentDA } from "@/lib/content-da"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const currentLang = pathname?.startsWith('/da') ? 'da' : 'en'
  const siteContent = currentLang === 'da' ? siteContentDA : siteContentEN

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-[#111827] overflow-x-clip">
      <div className="w-full h-20 md:h-24 px-4">
        <div className="flex items-center h-full gap-8 lg:gap-12 min-w-0">
          {/* Logo - Sol */}
          <Link href={`/${currentLang}`} className="flex items-center gap-3 shrink-0">
            <img
              src={siteContent.logo.imageUrl}
              alt={siteContent.logo.text}
              className="h-[48px] md:h-[60px] w-auto object-contain shrink-0"
            />
            <span className="text-xl md:text-2xl font-display font-extrabold tracking-tight xl:text-[26px] lg:font-medium bg-[#111827] text-[#ffffff] xl:font-semibold">
              COPENHAGEN MEDIA
            </span>
          </Link>

          {/* Desktop Navigation - Ortalı */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {siteContent.navigation.map((item) => {
              const isContact = item.label.toLowerCase() === 'contact' || item.label.toLowerCase() === 'kontakt'
              const href = isContact ? `/${currentLang}/contact` : item.href

              return isContact ? (
                <Link
                  key={item.label}
                  href={href}
                  className="text-sm md:text-base font-medium text-white hover:text-[#8D6EEA] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={href}
                  className="text-sm md:text-base font-medium text-white hover:text-[#8D6EEA] transition-colors"
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* CTA Button - Sağa itilmiş */}
          <Link
            href={`/${currentLang}/contact`}
            className="hidden md:block px-6 py-2.5 btn-gradient text-white font-bold text-sm rounded-md transition-all hover:shadow-lg shrink-0 ml-auto"
          >
            {siteContent.hero.buttons.primary}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50">
            <div className="container py-4">
              <nav className="flex flex-col gap-4">
                {siteContent.navigation.map((item) => {
                  const isContact = item.label.toLowerCase() === 'contact' || item.label.toLowerCase() === 'kontakt'
                  const href = isContact ? `/${currentLang}/contact` : item.href

                  return isContact ? (
                    <Link
                      key={item.label}
                      href={href}
                      className="text-sm font-medium text-gray-700 hover:text-[#8D6EEA] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={href}
                      className="text-sm font-medium text-gray-700 hover:text-[#8D6EEA] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                })}
                <Link
                  href={`/${currentLang}/contact`}
                  className="px-6 py-2.5 btn-gradient text-white font-bold text-sm rounded-md w-full mt-2 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {siteContent.hero.buttons.primary}
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
