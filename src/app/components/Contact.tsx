"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Gitlab, Instagram } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    title: "E-Mail",
    value: "trillian1998@gmail.com",
  },
  {
    icon: MapPin,
    title: "Standort",
    value: "Villach, Österreich",
  },
]

const socialLinks = [
  { icon: Gitlab, href: "https://gitlab.com/trillian1998", label: "GitLab (@trillian1998)" },
  { icon: Instagram, href: "https://instagram.com/carlotta.stauber", label: "Instagram" },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-[#030303] to-[#000000]">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12" >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Kontakt aufnehmen
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/60">
            Wenn du Fragen zu meinen Projekten hast oder dich einfach austauschen möchtest, kannst du mich gerne kontaktieren.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-white/60"> Ich freue mich über Feedback, neue Perspektiven und spannende Gespräche.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4">Schreib mir eine Nachricht</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2 font-medium text-xs sm:text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors text-xs sm:text-sm"
                  placeholder="Dein Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2 font-medium text-xs sm:text-sm">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors text-xs sm:text-sm"
                  placeholder="deine.email@beispiel.de"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2 font-medium text-xs sm:text-sm">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors resize-none text-xs sm:text-sm"
                  placeholder="Erzaehl mir mehr ueber dein Projekt..."
                />
              </div>

              <button type="submit" className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-xs sm:text-sm" >
                <Send size={12} />
                Nachricht senden
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center w-full"
          >
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4">Kontaktinformationen</h3>

            <div className="space-y-4 mb-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-center gap-3 p-3 sm:p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-semibold text-xs sm:text-sm">{info.title}</h4>
                    <p className="text-white/60 text-xs">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-3">Folge mir</h4>
              <div className="flex flex-col gap-3 items-center">
                {socialLinks.map((social, index) => (
                  <motion.a key={social.label} href={social.href} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.1, y: -2 }} className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300" >
                    <social.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        </div>
    </section>
  )
}
