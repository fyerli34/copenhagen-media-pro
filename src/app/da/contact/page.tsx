"use client"

import { useState } from "react"
import { Mail, Phone, ArrowRight, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("sending")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      console.log("Web3Forms Response:", data)

      if (data.success) {
        setFormStatus("success")
        form.reset()
        setTimeout(() => setFormStatus("idle"), 5000)
      } else {
        console.error("Web3Forms Error:", data)
        alert("ERROR: " + (data.message || "Unknown error"))
        setFormStatus("error")
        setTimeout(() => setFormStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("Network Error:", error)
      alert("NETWORK ERROR: " + String(error))
      setFormStatus("error")
      setTimeout(() => setFormStatus("idle"), 5000)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-50/30 to-white">
      {/* Header Spacer */}
      <div className="h-20 md:h-24" />

      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Link
              href="/da"
              className="inline-flex items-center gap-2 text-[#8D6EEA] font-bold mb-6 hover:gap-3 transition-all"
            >
              <ArrowRight size={20} className="rotate-180" />
              Tilbage til Hjem
            </Link>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              KOM I <span className="text-gradient">KONTAKT</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Har du et projekt i tankerne? Lad os tale om, hvordan vi kan hjælpe med at bringe din vision til live.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black mb-8">Kontaktinformation</h2>
                <p className="text-gray-600 mb-8">
                  Du er velkommen til at kontakte os. Vi er her for at hjælpe og besvare eventuelle spørgsmål.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#8D6EEA]/10 flex items-center justify-center shrink-0 group-hover:bg-[#8D6EEA] transition-colors">
                    <Mail className="text-[#8D6EEA] group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:info@cphmediapro.dk"
                      className="text-gray-600 hover:text-[#8D6EEA] transition-colors"
                    >
                      info@cphmediapro.dk
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#8D6EEA]/10 flex items-center justify-center shrink-0 group-hover:bg-[#8D6EEA] transition-colors">
                    <Phone className="text-[#8D6EEA] group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telefon</h3>
                    <a
                      href="tel:+4555227260"
                      className="text-gray-600 hover:text-[#8D6EEA] transition-colors"
                    >
                      +45 55 22 72 60
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="hidden md:block mt-12 p-8 bg-gradient-to-br from-[#8D6EEA]/10 to-transparent rounded-2xl">
                <h3 className="text-2xl font-black mb-4">Lad os Arbejde Sammen</h3>
                <p className="text-gray-600">
                  Vi glæder os til at høre om dit projekt og udforske, hvordan vi kan hjælpe dig med at nå dine mål.
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
              <h2 className="text-2xl font-black mb-6">Send os en Besked</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Web3Forms Access Key */}
                <input
                  type="hidden"
                  name="access_key"
                  value="7ed6da25-6d99-4503-90a3-20384e723d66"
                />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Dit Navn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8D6EEA] focus:outline-none transition-colors"
                    placeholder="Anders Jensen"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Din Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8D6EEA] focus:outline-none transition-colors"
                    placeholder="anders@eksempel.dk"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                    Emne *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8D6EEA] focus:outline-none transition-colors"
                    placeholder="Projektforespørgsel"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Besked *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8D6EEA] focus:outline-none transition-colors resize-none"
                    placeholder="Fortæl os om dit projekt..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full px-8 py-4 btn-gradient text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "sending" ? (
                    "Sender..."
                  ) : (
                    <>
                      Send Besked
                      <Send size={20} />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {formStatus === "success" && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 text-center font-bold">
                    ✓ Besked sendt! Vi vender tilbage til dig snarest.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 text-center font-bold">
                    ✗ Noget gik galt. Prøv venligst igen.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
