"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import ScrollAnimation from "./scroll-animation"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

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
    <section id="contact" ref={sectionRef} className="py-16 md:py-24">
      <div className="section-container">
        <ScrollAnimation direction="up" duration={0.7}>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Get in touch</p>
        </ScrollAnimation>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Card className="h-full hover-lift hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <ScrollAnimation direction="up" delay={0.2} duration={0.5}>
                    <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  </ScrollAnimation>

                  <div className="space-y-6">
                    <ScrollAnimation direction="left" delay={0.3} duration={0.5}>
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">WhatsApp</p>
                          <p className="text-muted-foreground">+6283891814265</p>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation direction="left" delay={0.4} duration={0.5}>
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground">nurfikriihsan@gmail.com</p>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation direction="left" delay={0.5} duration={0.5}>
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">Tangerang, Banten</p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="hover-lift hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <ScrollAnimation direction="up" delay={0.2} duration={0.5}>
                  <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                </ScrollAnimation>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <ScrollAnimation direction="right" delay={0.3} duration={0.5}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation direction="right" delay={0.4} duration={0.5}>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation direction="right" delay={0.5} duration={0.5}>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows={5}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation direction="up" delay={0.6} duration={0.5}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full transition-all duration-300 hover:shadow-md"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </ScrollAnimation>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
