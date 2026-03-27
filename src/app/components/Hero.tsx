"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { Code2, Globe, Layers, MonitorCog } from "lucide-react"
import { cn } from "@/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.12]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div initial={{ opacity: 0, y: -150,rotate: rotate - 15,}} animate={{ opacity: 1, y: 0, rotate: rotate,}} transition={{ duration: 2.4,delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 0.55 }, }} className={cn("absolute", className)} >
      <motion.div animate={{ y: [0, 15, 0], }} transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", }} style={{ width, height, }} className="relative" >
        <motion.div
          initial={{ filter: "brightness(2.6) saturate(1.35)" }}
          animate={{
            filter: [
              "brightness(2.6) saturate(1.35)",
              "brightness(2.1) saturate(1.25)",
              "brightness(0.7) saturate(0.95)",
            ],
          }}
          transition={{
            duration: 0.5,
            delay,
            times: [0, 0.25, 1],
            ease: "easeOut",
          }}
          className={cn(
            "absolute inset-0 rounded-full will-change-[filter]",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.32]",
            "shadow-[0_12px_48px_0_rgba(255,255,255,0.22),0_0_60px_-10px_rgba(255,255,255,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.45),transparent_65%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Hero({ badge = "Webentwicklerin", title1 = "Curious like an Otter.", title2 = " Building in Code." }: { badge?: string, title1?: string, title2?: string }) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }
  const fadeOnly = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape  delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.38]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
        <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.36]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
        <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-violet-500/[0.36]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
        <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-amber-500/[0.34]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
        <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-cyan-500/[0.35]" className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-screen py-12">
          <div className="text-center lg:text-left">
          <motion.div variants={fadeOnly} initial="hidden" animate="visible" transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6" >
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-rose-400 rounded-full" />
            <span className="text-s text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div className="w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-bold mb-6 tracking-tight leading-tight">
              <motion.span variants={fadeOnly} initial="hidden" animate="visible" transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }} className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 inline-block" >
                {title1}
              </motion.span>
              <br />
              <motion.span variants={fadeOnly} initial="hidden" animate="visible" transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }} className={cn( "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 inline-block",  pacifico.className, )} >
                {title2}
              </motion.span>
            </h1>
          </motion.div>

          <motion.div variants={fadeOnly} initial="hidden" animate="visible" transition={{ duration: 1, delay: 1, ease: "easeOut" }} className="w-full" >
            <p className="text-sm sm:text-base md:text-lg text-white/45 mb-8 leading-relaxed font-light tracking-wide max-w-xl mt-6 lg:mx-0">
              Auf dieser Seite gebe ich einen Einblick in meine bisherigen Projekte und meine Entwicklung im Bereich Web und Design.
            </p>
          </motion.div>

          <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center" >
            <a href="#projects" className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium rounded-full hover:from-indigo-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 text-sm text-center">
              Meine Projekte ansehen
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-sm text-center">
              Kontakt aufnehmen
            </a>
          </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }} className="relative w-full max-w-xl mx-auto" >
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 sm:p-6 shadow-[0_0_70px_rgba(99,102,241,0.2)]">
              <div className="absolute -top-4 -right-3 h-20 w-20 rounded-full bg-indigo-500/20 blur-2xl" />
              <div className="absolute -bottom-5 -left-3 h-20 w-20 rounded-full bg-rose-500/20 blur-2xl" />

              <div className="flex items-center gap-2 mb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-xl border border-white/10 bg-[#111127] p-4">
                  <div className="flex items-center gap-2 mb-3 text-indigo-300">
                    <Code2 size={16} />
                    <span className="text-xs">hero.tsx</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded bg-indigo-400/30 w-11/12" />
                    <div className="h-2 rounded bg-violet-400/30 w-9/12" />
                    <div className="h-2 rounded bg-cyan-400/30 w-10/12" />
                    <div className="h-2 rounded bg-rose-400/30 w-7/12" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <MonitorCog size={20} className="text-indigo-300" />
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <Layers size={20} className="text-rose-300" />
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <Globe size={20} className="text-cyan-300" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}
