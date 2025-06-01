"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import ScrollAnimation from "./scroll-animation"

const skills = [
  { name: "Microsoft Excel, Word, PowerPoint", percentage: 80 },
  { name: "HTML, CSS, & JavaScript", percentage: 75 },
  { name: "React.js & Next.js", percentage: 50 },
  { name: "Node.js & Express.js", percentage: 70 },
  { name: "Git & GitHub", percentage: 80 },
  { name: "MySQL & Oracle Database", percentage: 71 },
  { name: "Python & C/C++", percentage: 70 },
  { name: "Wireshark, Postman, & Figma", percentage: 78 },
  { name: "Cyber Security", percentage: 40 },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">My technical level</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skills.map((skill, index) => (
            <ScrollAnimation
              key={skill.name}
              delay={0.1 * index}
              direction={index % 2 === 0 ? "left" : "right"}
              duration={0.6}
              distance={30}
            >
              <Card className="hover-lift transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-sm text-primary font-medium">{skill.percentage}%</span>
                  </div>
                  <ScrollAnimation delay={0.3 + index * 0.1} direction="none" duration={1.5}>
                    <Progress value={skill.percentage} className="h-2" />
                  </ScrollAnimation>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
