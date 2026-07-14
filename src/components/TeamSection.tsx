"use client"

import { siteContent as siteContentEN } from "@/lib/content"
import { siteContent as siteContentDA } from "@/lib/content-da"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface TeamMember {
  name: string
  role: string
  image: string
}

export default function TeamSection() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith('/da') ? 'da' : 'en'
  const siteContent = currentLang === 'da' ? siteContentDA : siteContentEN
  const { team } = siteContent

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {team.title.part1}{" "}
            <span className="text-gradient">{team.title.highlighted}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {team.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-6xl mx-auto">
          {team.members.map((member: TeamMember, index: number) => (
            <div key={index} className="group w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1.334rem)]">
              <div className="relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4 bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent p-3 md:p-6">
                  <h3 className="text-white font-bold text-sm md:text-lg">{member.name}</h3>
                  <p className="text-violet-300 text-xs md:text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
