"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const experienceData = [
  {
    period: "Sep 2024 - Dec 2024",
    position: "IDCamp 2024",
    description:
      "Mengembangkan Back-End dengan Node.js, membangun RESTful API, mengelola database, serta menerapkan autentikasi dan otorisasi. Mengoptimalkan arsitektur server dan menguji API dengan Postman untuk memastikan efisiensi, keamanan, dan performa aplikasi.",
  },
  {
    period: "Jan 2025 - Jun 2025",
    position: "ElevAlte With Dicoding",
    description:
      "Mengikuti program pelatihan AI komprehensif dari Microsoft & Dicoding, mempelajari Machine Learning, Data Processing, dan implementasi AI, serta berpartisipasi dalam Online Hackathon dan persiapan sertifikasi global Microsoft.",
  },
  {
    period: "Mar 2025 - Saat Ini",
    position: "Fullstack Developer",
    description:
      "Mengembangkan Sistem Jurnalistik Terpadu di PT. Winnicode Garuda Teknologi sebagai Fullstack Developer Intern, bertanggung jawab pada front-end yang responsif dan back-end yang efisien, serta mengoptimalkan performa dan keamanan sistem.",
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Timeline animation variants
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  }

  const timelineItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section id="experience" ref={sectionRef} className="py-16 md:py-24">
      <div className="section-container">
        <ScrollAnimation direction="up" duration={0.7}>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </ScrollAnimation>

        <motion.div
          className="max-w-3xl mx-auto mt-12 relative"
          variants={timelineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <div className="absolute right-4 top-6 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          {experienceData.map((item, index) => (
            <motion.div key={index} variants={timelineItemVariants} className="mb-8 relative">
              <Card className="hover-lift hover:shadow-md transition-all duration-300 md:mr-8">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-primary/10 rounded-full md:absolute md:-right-6 md:left-auto md:right-0">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
                      <h3 className="text-xl font-semibold mt-1 mb-2">{item.position}</h3>
                      <p className="text-muted-foreground text-justify">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
