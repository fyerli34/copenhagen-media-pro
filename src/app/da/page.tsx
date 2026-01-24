import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import GameSection from "@/components/GameSection"
import ScrollingBanner from "@/components/ScrollingBanner"
import AboutSection from "@/components/AboutSection"
import StatsSection from "@/components/StatsSection"
import ServicesSection from "@/components/ServicesSection"

import PricingSection from "@/components/PricingSection"
import TeamSection from "@/components/TeamSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import BlogSection from "@/components/BlogSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function DanishHome() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <GameSection />
      <ScrollingBanner />
      <AboutSection />
      <StatsSection />
      <ServicesSection />

      <CTASection />
      <PricingSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  )
}
