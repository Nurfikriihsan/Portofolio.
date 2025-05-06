"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <ScrollAnimation direction="up" duration={0.7}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </ScrollAnimation>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Card className="h-full hover-lift hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <ScrollAnimation direction="up" delay={0.2} duration={0.5}>
                  <h3 className="text-2xl font-semibold mb-4 font-poppins">Fullstack Developer</h3>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={0.3} duration={0.5}>
                  <p className="text-muted-foreground mb-6 text-justify">
                  Mahasiswa Teknik Informatika yang aktif sebagai Fullstack Developer Intern. 
                  Terbiasa menangani pengembangan web secara menyeluruh dan selalu terbuka 
                  untuk tantangan dan pembelajaran baru di dunia teknologi.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation direction="up" delay={0.4} duration={0.5}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      <span>Tangerang, Banten</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-2" />
                      <span>+6283891814265</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-2" />
                      <span>nurfikriihsan@gmail.com</span>
                    </div>
                  </div>
                </ScrollAnimation>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full hover-lift hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <ScrollAnimation direction="up" delay={0.2} duration={0.5}>
                  <h3 className="text-xl font-semibold mb-4 font-poppins">Connect With Me</h3>
                </ScrollAnimation>

                <div className="space-y-4">
                  <ScrollAnimation direction="right" delay={0.3} duration={0.5}>
                    <a
                      href="https://github.com/Nurfikriihsan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Github className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-muted-foreground">github.com/Nurfikriihsan</p>
                      </div>
                    </a>
                  </ScrollAnimation>

                  <ScrollAnimation direction="right" delay={0.4} duration={0.5}>
                    <a
                      href="https://www.linkedin.com/in/nurfikri-ihsan-35586a312"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Linkedin className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">linkedin.com/in/nurfikri-ihsan</p>
                      </div>
                    </a>
                  </ScrollAnimation>

                  <ScrollAnimation direction="right" delay={0.5} duration={0.5}>
                    <a
                      href="https://www.instagram.com/nurfikriihsn/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Instagram className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">Instagram</p>
                        <p className="text-sm text-muted-foreground">instagram.com/nurfikriihsn</p>
                      </div>
                    </a>
                  </ScrollAnimation>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
