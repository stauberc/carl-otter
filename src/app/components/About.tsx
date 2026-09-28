"use client"
import { motion } from "framer-motion"
import { Award, BriefcaseBusiness, Clock3 } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 xl:py-32 bg-gradient-to-b from-[#030303] to-[#0a0a0a]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12" >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Über mich
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} className="text-center lg:text-left" >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Hallo, ich bin <span className="text-indigo-300">Carlotta Stauber</span>
            </h3>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base mb-4">
            Seit diesem Jahr studiere ich Angewandte Informatik an der Universität Klagenfurt.
  Zuvor habe ich 2026 die HTL Villach im Bereich Medientechnik mit dem Schwerpunkt
  Web- &amp; Appdevelopment mit der Matura abgeschlossen. Während meiner Ausbildung habe ich
  mich intensiv mit Webentwicklung und Design beschäftigt und dabei praktische Erfahrungen
  in verschiedenen Projekten gesammelt.
            </p>
            <p className="text-white/65 leading-relaxed text-sm sm:text-base mb-7">
              Ich arbeite strukturiert und selbstständig, lege Wert auf saubere und nachvollziehbare Lösungen
              und entwickle meine Fähigkeiten laufend weiter.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className="flex justify-center lg:justify-end" >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-2xl scale-110" />
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-full border-2 border-white/20 overflow-hidden bg-white/5">
                <Image src="/images/carlotta-stauber.jpg" alt="Portraet von Carlotta Stauber" width={672} height={1008} className="h-full w-full object-cover" priority />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
