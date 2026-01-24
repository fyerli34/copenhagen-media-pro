"use client"

import Link from "next/link"

export default function LanguageGate() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Language Buttons - Center */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-sm md:max-w-md mx-auto">
        {/* Danish Button - LEFT */}
        <Link
          href="/da"
          prefetch={true}
          className="group relative overflow-hidden bg-white border-2 border-gray-200 rounded-xl md:rounded-2xl p-6 md:p-10 hover:border-[#8D6EEA] transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <div className="relative z-10">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 group-hover:text-[#8D6EEA] transition-colors">
              Dansk
            </h2>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#8D6EEA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        {/* English Button - RIGHT */}
        <Link
          href="/en"
          prefetch={true}
          className="group relative overflow-hidden bg-white border-2 border-gray-200 rounded-xl md:rounded-2xl p-6 md:p-10 hover:border-[#8D6EEA] transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <div className="relative z-10">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 group-hover:text-[#8D6EEA] transition-colors">
              English
            </h2>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#8D6EEA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>

      {/* Footer - Bottom */}
      <p className="absolute bottom-8 text-xs text-gray-400">
        © 2026 Copenhagen Media Pro
      </p>
    </main>
  )
}
