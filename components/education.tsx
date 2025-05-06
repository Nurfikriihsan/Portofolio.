"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const educationData = [
  {
    period: "2020 - 2023",
    institution: "SMAS Permata Insani Islamic School",
    description:
      "Selama tiga tahun di SMAS Permata Insani Islamic School, saya aktif dalam kegiatan akademik, non-akademik, dan keagamaan, serta terlibat dalam pramuka dan pencak silat. Pengalaman ini mengembangkan kedisiplinan, kepemimpinan, dan rasa kebersamaan, membantu saya tumbuh sebagai individu tangguh dan bertanggung jawab.",
  },
  {
    period: "2023 - Saat Ini",
    institution: "Universitas Mercu Buana",
    description:
      "Saya sedang menempuh studi di Universitas Mercu Buana jurusan Teknik Informatika. Di sini, saya belajar tentang berbagai aspek teknologi informasi seperti pemrograman, jaringan komputer, dan keamanan sistem. Selain itu, saya juga aktif dalam organisasi dan komunitas kampus, yang membantu saya berkembang dalam kepemimpinan dan kerja tim.",
  },
]

export default function Education() {
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
    hidden: { opacity: 0, x: -50 },
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
    <section id="education" ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <ScrollAnimation direction="up" duration={0.7}>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My educational journey</p>
        </ScrollAnimation>

        <motion.div
          className="max-w-3xl mx-auto mt-12 relative"
          variants={timelineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          {educationData.map((item, index) => (
            <motion.div key={index} variants={timelineItemVariants} className="mb-8 relative">
              <Card className="hover-lift hover:shadow-md transition-all duration-300 md:ml-8">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-primary/10 rounded-full md:absolute md:-left-6">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="md:ml-4">
                      <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
                      <h3 className="text-xl font-semibold mt-1 mb-2">{item.institution}</h3>
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
