"use client";

import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
            404
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            Oops… Carl got lost 🦦
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
            Die Seite wurde nicht gefunden. Carl schaut sich schon um, aber
            bisher ohne Erfolg.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <OtterLookingAround />
        </div>

        <motion.a
          href="/"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/5 transition"
        >
          Zurück zur Startseite
        </motion.a>
      </div>
    </main>
  );
}
function OtterLookingAround() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [0, 1, 0, -1, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <svg
        width="340"
        height="320"
        viewBox="0 0 340 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_25px_60px_rgba(124,140,255,0.2)]"
      >
        <defs>
          <radialGradient id="aura" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(170 150) rotate(90) scale(120 130)">
            <stop stopColor="#7380FF" stopOpacity="0.35" />
            <stop offset="1" stopColor="#7380FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fur" x1="170" y1="86" x2="170" y2="256" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9B7659" />
            <stop offset="1" stopColor="#6D513D" />
          </linearGradient>
          <linearGradient id="belly" x1="170" y1="132" x2="170" y2="244" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D5B699" />
            <stop offset="1" stopColor="#B69479" />
          </linearGradient>
        </defs>

        <ellipse cx="170" cy="158" rx="110" ry="95" fill="url(#aura)" />

        <ellipse cx="170" cy="272" rx="94" ry="17" fill="#0D0D16" fillOpacity="0.5" />
        <motion.ellipse
          cx="170"
          cy="268"
          rx="102"
          ry="24"
          fill="none"
          stroke="#9FB0FF"
          strokeOpacity="0.25"
          strokeWidth="2"
          animate={{ scale: [0.95, 1.04, 0.95], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.g
          animate={{ rotate: [-2, 2, -1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "170px", originY: "230px" }}
        >
          <ellipse cx="120" cy="114" rx="13" ry="13" fill="#6D513D" />
          <ellipse cx="220" cy="114" rx="13" ry="13" fill="#6D513D" />
          <ellipse cx="120" cy="114" rx="7" ry="7" fill="#89674E" />
          <ellipse cx="220" cy="114" rx="7" ry="7" fill="#89674E" />

          <ellipse cx="170" cy="186" rx="72" ry="84" fill="url(#fur)" />
          <ellipse cx="170" cy="134" rx="58" ry="54" fill="url(#fur)" />
          <ellipse cx="170" cy="190" rx="47" ry="58" fill="url(#belly)" />
          <ellipse cx="170" cy="146" rx="34" ry="28" fill="#D6B89D" />

          <motion.g
            animate={{ x: [-4, 4, -3, 3, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="154" cy="138" r="4.5" fill="#121212" />
            <circle cx="186" cy="138" r="4.5" fill="#121212" />
          </motion.g>

          <motion.g
            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
            transition={{ duration: 4.6, repeat: Infinity, times: [0, 0.45, 0.5, 0.56, 1] }}
            style={{ originX: "170px", originY: "138px" }}
          >
            <ellipse cx="154" cy="138" rx="4.2" ry="1.3" fill="#7B5F48" />
            <ellipse cx="186" cy="138" rx="4.2" ry="1.3" fill="#7B5F48" />
          </motion.g>

          <ellipse cx="170" cy="152" rx="22" ry="17" fill="#E1C8B2" />
          <ellipse cx="170" cy="148" rx="4.8" ry="3.8" fill="#121212" />
          <path d="M163 156C166 159 174 159 177 156" stroke="#121212" strokeWidth="2" strokeLinecap="round" />

          <path d="M146 150H124" stroke="#E7D6C8" strokeWidth="2" strokeLinecap="round" />
          <path d="M146 157H120" stroke="#E7D6C8" strokeWidth="2" strokeLinecap="round" />
          <path d="M194 150H216" stroke="#E7D6C8" strokeWidth="2" strokeLinecap="round" />
          <path d="M194 157H220" stroke="#E7D6C8" strokeWidth="2" strokeLinecap="round" />

          <motion.ellipse
            cx="130"
            cy="196"
            rx="16"
            ry="11"
            fill="#7D5F46"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx="210"
            cy="196"
            rx="16"
            ry="11"
            fill="#7D5F46"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          />

          <motion.path
            d="M132 232C106 248 114 278 148 286"
            stroke="#6D513D"
            strokeWidth="14"
            strokeLinecap="round"
            animate={{ d: ["M132 232C106 248 114 278 148 286", "M132 232C98 244 106 280 143 290", "M132 232C106 248 114 278 148 286"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M208 232C234 248 226 278 192 286"
            stroke="#6D513D"
            strokeWidth="14"
            strokeLinecap="round"
            animate={{ d: ["M208 232C234 248 226 278 192 286", "M208 232C242 244 234 280 197 290", "M208 232C234 248 226 278 192 286"] }}
            transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
        </motion.g>

        <motion.g
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="92" cy="248" r="4.2" fill="#C9D8FF" />
          <circle cx="102" cy="236" r="2.9" fill="#DFE8FF" />
          <circle cx="82" cy="229" r="2.2" fill="#DFE8FF" />
        </motion.g>
        <motion.g
          animate={{ y: [0, -12, 0], opacity: [0.15, 0.8, 0.15] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        >
          <circle cx="248" cy="248" r="4.1" fill="#C9D8FF" />
          <circle cx="260" cy="236" r="2.8" fill="#DFE8FF" />
          <circle cx="238" cy="229" r="2.1" fill="#DFE8FF" />
        </motion.g>

        <motion.g
          animate={{ rotate: [-7, 8, -5], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "255px", originY: "98px" }}
        >
          <circle cx="255" cy="98" r="9" stroke="white" strokeWidth="2.5" strokeOpacity="0.5" />
          <line x1="262" y1="105" x2="274" y2="118" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.5" />
        </motion.g>
      </svg>
    </motion.div>
  );
}