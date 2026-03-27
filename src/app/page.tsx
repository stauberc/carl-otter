'use client';

import Hero from "@/app/components/Hero"
import About from "@/app/components/About"
import Projects from "@/app/components/Projects"
import Contact from "@/app/components/Contact"

export default function Home() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
