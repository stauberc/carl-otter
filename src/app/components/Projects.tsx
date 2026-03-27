"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Customer Service Portal (Diplomarbeit)",
    description:
      "Im Rahmen meiner Diplomarbeit entwickelte ich die User-View eines webbasierten Customer Portals fuer die Firma Heldenglanz.",
    highlights: [
      "Passwortloser Login über Magic Link",
      "Verwaltung von Services, Rechnungen und Verträgen",
      "PDF-Export von Rechnungen",
      "Intuitives, responsives Dashboard",
    ],
    image: "/images/projects/customer-portal.png",
    technologies: ["Next.js", "React", "TypeScript", "Django", "Phyton", "Django REST API", "PostgreSQL"],
  },
  {
    title: "LockedOnYou - Dating App",
    description:
      "Eine moderne Dating-App mit Fokus auf echte Verbindungen durch intelligentes Matching und interaktive Kommunikation.",
    highlights: ["Swipe-basiertes Matching", "Chat-System", "KI-generierte Icebreaker im Chat"],
    image: "/images/projects/lockedonyou.png",
    secondImage: "/images/projects/lockedonyou-chat.png",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "NextAuth", "Shadcn/UI", "Prisma"],
  },
  {
    title: "Portfolio Website",
    description:
      "Eine moderne, responsive Portfolio-Website zur Präsentation meiner Projekte, Skills und Designfähigkeiten.",
    highlights: ["Uebersichtliches UI", "Responsive Design", "Animationen mit Framer Motion"],
    image: "/images/projects/portfolio.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Job & Bewerbungsportal",
    description:
      "Eine moderne Webanwendung zur Verwaltung von Stellenanzeigen, Bewerbungen und Nutzerprofilen für Studierende und Unternehmen. Die App bietet CV-Upload, Job- und Bewerbungsverwaltung, persönliche Dashboards sowie ein Messaging-System für die Kommunikation zwischen Kandidaten und Arbeitgebern.",
    highlights: ["Übersichtliches UI", "Responsive Design"],
    image: "/images/projects/Job-bewerbung.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "BetterAuth", "PostgreSQL", "Prisma"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-[#0a0a0a] to-[#030303]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-8" >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            Portfolio Showcase
          </h2>
          <p className="text-white/55 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Fünf ausgewählte Projekte mit Fokus auf Webentwicklung, Usability und moderne Technologien.
          </p>
          <a
            href="/docs/portfolio-carlotta-stauber.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition-colors"
          >
            Gesamtes Portfolio ansehen (PDF)
            <ExternalLink size={14} />
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} >
          <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-6 text-white text-center">Projekte</h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -3 }} className="group bg-white/[0.04] border border-white/10 rounded-xl p-4 sm:p-5 hover:bg-white/[0.07] transition-all duration-300" >
                <div className="relative aspect-video rounded-lg mb-4 border border-white/10 overflow-hidden bg-gradient-to-br from-indigo-500/15 via-violet-500/10 to-cyan-500/10">
                  <Image
                    src={project.image}
                    alt={`Screenshot von ${project.title}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {project.secondImage && (
                    <div className="absolute right-2 bottom-2 h-16 w-24 rounded-md border border-white/20 overflow-hidden shadow-lg">
                      <Image
                        src={project.secondImage}
                        alt={`Weitere Ansicht von ${project.title}`}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>

                <h4 className="text-sm font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-white/60 text-xs mb-3">{project.description}</p>

                <div className="mb-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/45 mb-1">Highlights</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-white/65 text-xs flex items-start gap-2">
                        <span className="text-indigo-300 leading-4">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-white/50 text-xs" >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
