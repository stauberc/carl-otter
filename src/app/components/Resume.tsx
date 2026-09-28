"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Languages, Sparkles, Wrench } from "lucide-react"

const experience = [
  {
    company: "Heldenglanz GmbH",
    role: "Frontend Development (geringfügig)",
    period: "12/2024 – heute",
    points: [
      "Wartung und Pflege der Firmenwebsite (CMS)",
      "Aktualisierung von Webinhalten",
      "Unterstützung bei UI/UX-Design",
      "Entwicklung eines webbasierten Kundensystems (Diplomarbeit)",
    ],
  },
  {
    company: "Infineon Technologies Austria AG",
    role: "Industriearbeiterin in der Produktion (Schichtbetrieb) · Standort Villach",
    period: "08/2026 – 10/2026 · Ferialjob",
    points: [
      "Bedienen und Bestücken von Anlagen",
      "Lossuche",
      "Sauberes Dokumentieren der Losbearbeitung",
      "Kontrollieren und Messen an Messgeräten und Mikroskopen",
    ],
  },
  {
    company: "KTM AG",
    role: "Praktikum Marketing",
    period: "2023 · 1 Monat",
    points: [
      "Kommunikation mit der Personalabteilung",
      "Social-Media- und Konkurrenzanalyse",
      "Arbeiten mit Photoshop",
      "Wartung der WordPress-Website",
    ],
  },
]

const skillGroups = [
  {
    title: "Sprachen",
    items: ["JavaScript", "TypeScript", "C++", "Python", "PHP"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "NestJS", "Node.js", "Tailwind CSS", "Bootstrap", "Sass"],
  },
  {
    title: "Datenbanken",
    items: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "SQLite", "Supabase", "Prisma"],
  },
  {
    title: "APIs & Tools",
    items: ["REST", "GraphQL", "Swagger", "Postman", "Bruno", "Jest", "Socket.IO"],
  },
  {
    title: "CMS & Deploy",
    items: ["WordPress", "Strapi", "Directus", "Vercel"],
  },
]

export default function Resume() {
  return (
    <section id="resume" className="py-20 sm:py-24 lg:py-28 xl:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#030303]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Lebenslauf
          </h2>
          <p className="text-white/55 text-sm sm:text-base max-w-2xl mx-auto">
            Berufserfahrung und technische Skills im Überblick.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <Briefcase className="w-4 h-4 text-indigo-300" />
              <h3 className="text-white font-semibold text-sm sm:text-base">Berufliche Erfahrung</h3>
            </div>
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={job.company} className="relative pl-4 border-l border-white/15">
                  <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-rose-400" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <p className="text-white font-semibold text-sm">{job.company}</p>
                    <p className="text-white/45 text-xs">{job.period}</p>
                  </div>
                  <p className="text-indigo-300 text-xs mb-2">{job.role}</p>
                  <ul className="space-y-1">
                    {job.points.map((point) => (
                      <li key={point} className="text-white/65 text-xs flex items-start gap-2">
                        <span className="text-indigo-300 leading-4">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap className="w-4 h-4 text-rose-300" />
              <h3 className="text-white font-semibold text-sm sm:text-base">Technische Fähigkeiten</h3>
            </div>
            <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p className="text-[11px] uppercase tracking-wide text-white/45 mb-2">{group.title}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
