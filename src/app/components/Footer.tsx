"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black py-6 sm:py-8 lg:py-10 border-t border-white/10">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-4 sm:mb-6" >
            <h3 className="text-sm sm:text-base lg:text-lg font-bold bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent mb-2">
              Portfolio
            </h3>
            <p className="text-white/60 text-xs sm:text-sm">
              Digitale Erlebnisse mit Leidenschaft und Präzision gestaltet
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="text-white/40 text-xs" >
            <div className="flex items-center justify-center gap-4 mb-3">
              <Link href="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
            <p>&copy; 2026 Portfolio. Alle Rechte vorbehalten.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
