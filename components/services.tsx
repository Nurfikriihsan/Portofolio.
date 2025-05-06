"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Server, Shield, Cloud, Smartphone, GitBranch } from "lucide-react"

const servicesData = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Membangun aplikasi web responsif dan skalabel dengan teknologi modern untuk kebutuhan bisnis yang dinamis.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Merancang dan membangun sistem backend yang aman, efisien, dan dapat diandalkan untuk mendukung performa aplikasi.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Implementation",
    description: "Mengimplementasikan solusi keamanan siber guna melindungi data dan mencegah ancaman online.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Solutions",
    description:
      "Mengelola integrasi aplikasi ke layanan cloud untuk meningkatkan efisiensi dan memastikan skalabilitas yang optimal.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Development",
    description: "Mengembangkan aplikasi yang optimal untuk berbagai perangkat demi pengalaman pengguna terbaik.",
  },
  {
    icon: GitBranch,
    title: "Version Control & Collaboration",
    description: "Mengelola proyek dengan Git untuk memastikan pengembangan terorganisasi dan kolaboratif.",
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">What I offer</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-md transition-shadow hover-lift">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="p-3 bg-primary/10 rounded-full mb-4 transition-transform hover:scale-110 duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
