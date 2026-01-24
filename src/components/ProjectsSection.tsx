"use client"

import { siteContent as siteContentEN } from "@/lib/content"
import { siteContent as siteContentDA } from "@/lib/content-da"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function ProjectsSection() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith('/da') ? 'da' : 'en'
  const siteContent = currentLang === 'da' ? siteContentDA : siteContentEN
  const { projects } = siteContent

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {projects.title.part1}{" "}
            <span className="text-gradient">{projects.title.highlighted}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {projects.description}
          </p>
          <button className="px-8 py-4 btn-gradient text-white font-bold rounded-md flex items-center justify-center gap-2 mx-auto hover:shadow-xl transition-all">
            {projects.button}
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.items.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="text-4xl font-black text-violet-300 mb-4">
                  {project.number}
                </div>
                <h3 className="text-3xl font-black mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold uppercase hover:text-violet-600 transition-colors group">
                  {project.category}
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
              <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
