"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="section-container flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <p className="text-lg md:text-xl text-muted-foreground">Hi, I'm</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-poppins"
        >
          Nurfikri Ihsan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="animate-float"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6">Fullstack Developer</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="text-muted-foreground max-w-2xl mb-8"
        >
          Mahasiswa Teknik Informatika | Fullstack Developer Intern | Backend Development | Web Development
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button asChild size="lg" className="hover-lift">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="outline" size="lg" asChild className="hover-lift">
            <a href="#">Download CV</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
          className="flex space-x-4"
        >
          <a
            href="https://github.com/Nurfikriihsan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors hover-lift"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/nurfikri-ihsan-35586a312"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors hover-lift"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/nurfikriihsn/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors hover-lift"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
          className="absolute bottom-10"
        >
          <Button variant="ghost" size="icon" onClick={scrollToAbout} className="animate-bounce hover:bg-primary/10">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
