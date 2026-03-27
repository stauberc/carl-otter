"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Start", href: "/" },
  { name: "Über mich", href: "/#about" },
  { name: "Projekte", href: "/#projects" },
  { name: "Kontakt", href: "/#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="text-sm md:text-base font-bold bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
            Portfolio
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-5">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -2 }}
                className="group text-sm"
              >
                <span className="text-white/70 transition-all duration-300 bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-200 to-rose-300 bg-[length:200%_100%] bg-[position:0%_0%] group-hover:bg-[position:100%_0%] group-hover:text-transparent group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.75)]">
                  {item.name}
                </span>
              </motion.a>
            ))}
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="lg:hidden border-t border-white/10">
            <div className="py-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="group block py-2 px-3 hover:bg-white/5 rounded-md text-sm"
                >
                  <span className="text-white/80 transition-all duration-300 bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-200 to-rose-300 bg-[length:200%_100%] bg-[position:0%_0%] group-hover:bg-[position:100%_0%] group-hover:text-transparent group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]">
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
