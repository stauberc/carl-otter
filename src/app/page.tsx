'use client';

import Hero from "@/app/components/Hero"
import About from "@/app/components/About"
import Projects from "@/app/components/Projects"
import Contact from "@/app/components/Contact"

export default function Home() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TYQBRHT4KR"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TYQBRHT4KR');
</script>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

