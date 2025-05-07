"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink, Eye } from "lucide-react"
import ScrollAnimation from "./scroll-animation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CertificateModal from "./certificate-modal"

// Updated data structure to include image and preview link
const certificationsData = [
  {
    date: "January 10, 2024",
    title: "Introduction to Cybersecurity",
    description:
      "Sertifikat ini membuktikan pemahaman dasar keamanan siber, termasuk ancaman, risiko, dan perlindungan.",
    image: "/images/Introduction to Cybersecurity.png",
    previewLink: "#",
  },
  {
    date: "June 21, 2024",
    title: "JavaScript Essentials 1",
    description:
      "Sertifikat ini menandakan penguasaan dasar JavaScript, meliputi sintaksis, fungsi, struktur data, dan penerapannya pada pengembangan aplikasi web.",
    image: "/images/JavaScript Essentials 1.png",
    previewLink: "#",
  },
  {
    date: "July 30, 2024",
    title: "Introduction To Networks",
    description:
      "Sertifikat ini menunjukkan penguasaan konsep dasar jaringan, termasuk perangkat jaringan, protokol, dan cara jaringan diimplementasikan dalam berbagai skala.",
    image: "/images/Introduction To Networks.png",
    previewLink: "#",
  },
  {
    date: "Oct 22, 2024",
    title: "Al Fundamentals",
    description:
      "Sertifikat ini menunjukkan pemahaman dasar tentang kecerdasan buatan, termasuk algoritma, pembelajaran mesin, dan penerapannya untuk mengembangkan solusi inovatif yang meningkatkan efisiensi dan kinerja di berbagai sektor industri.",
    image: "/images/Al Fundamentals.png",
    previewLink: "#",
  },
  {
    date: "Oct 28, 2024",
    title: "Belajar Dasar Pemrograman JavaScript",
    description:
      "Sertifikat ini menunjukkan pemahaman dasar pemrograman JavaScript, termasuk pengelolaan variabel, pembuatan fungsi, penggunaan loop, dan manipulasi DOM untuk pengembangan aplikasi web.",
    image: "/images/Belajar Dasar Pemrograman JavaScript.png",
    previewLink: "https://www.dicoding.com/certificates/98XW55YJ4PM3",
  },
  {
    date: "Nov 02, 2024",
    title: "Belajar Back-End Pemula dengan JavaScript",
    description:
      "Sertifikat ini menunjukkan pemahaman dasar pengembangan back-end dengan JavaScript, mencakup konsep API, pengelolaan server, dan integrasi data untuk aplikasi web.",
    image: "/images/Belajar Back-End Pemula dengan JavaScript.png",
    previewLink: "https://www.dicoding.com/certificates/MRZMYN9WNZYQ",
  },
  {
    date: "Nov 10, 2024",
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    description:
      "Sertifikat ini menandakan penguasaan konsep dasar komputasi awan menggunakan AWS, meliputi layanan cloud, pengelolaan data, dan keamanan.",
    image: "/images/Cloud Practitioner Essentials (Belajar Dasar AWS Cloud).png",
    previewLink: "https://www.dicoding.com/certificates/GRX54W62KP0M",
  },
  {
    date: "Nov 10, 2024",
    title: "Belajar Dasar AI",
    description:
      "Sertifikat ini menunjukkan pemahaman tentang dasar-dasar pengembangan kecerdasan buatan, termasuk pengenalan algoritma, pembelajaran mesin, dan penerapannya.",
    image: "/images/Belajar Dasar AI.png",
    previewLink: "https://www.dicoding.com/certificates/MRZMYW9LLZYQ",
  },
  {
    date: "Dec 16, 2024",
    title: "Introduction to Python",
    description:
      "Sertifikat ini menunjukkan pemahaman dasar pemrograman Python, mencakup sintaks, variabel, fungsi, kontrol alur, dan penerapannya dalam pengembangan aplikasi dan analisis data.",
    image: "/images/Introduction to Python.png",
    previewLink: "#",
  },
  {
    date: "Jan 6 - 7, 2025",
    title: "UI/UX Design",
    description:
      "Sertifikat ini diberikan atas partisipasi dalam Bootcamp Kilat UI/UX Design pada 6 - 7 Januari 2025, membahas prinsip dan praktik terbaik desain antarmuka pengguna.",
    image: "/images/UI - UX Design.png",
    previewLink: "#",
  },
  {
    date: "Jan 16, 2025",
    title: "Introduction to Cybersecurity",
    description:
      "Sertifikat ini menunjukkan pemahaman dasar tentang cybersecurity, ancaman, perlindungan, dan praktik terbaik di bidang keamanan digital.",
    image: "/images/Introduction to Cybersecurity Dicoding.png",
    previewLink: "#",
  },
  {
    date: "Feb 27, 2025",
    title: "Networking Devices and Initial Configuration",
    description:
      "Sertifikat ini menunjukkan pemahaman tentang perangkat jaringan, subnetting, ARP, DNS, DHCP, serta konfigurasi dasar menggunakan Cisco IOS.",
    image: "/images/Networking Devices and Initial Configuration.png",
    previewLink: "#",
  },
]

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // State for modal
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificationsData)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (certificate: (typeof certificationsData)[0]) => {
    setSelectedCertificate(certificate)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Grid animation variants
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section id="certifications" ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <ScrollAnimation direction="up" duration={0.7}>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">My professional certifications</p>
        </ScrollAnimation>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {certificationsData.map((cert, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="hover-lift hover:shadow-md transition-all duration-300 h-full overflow-hidden">
                <div
                  className="relative pt-[75%] w-full overflow-hidden bg-muted/50 cursor-pointer"
                  onClick={() => openModal(cert)}
                >
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain absolute top-0 left-0 w-full h-full p-2 transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-sm font-medium text-white">{cert.date}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start mb-3">
                      <div className="p-2 bg-primary/10 rounded-full mr-3 transition-transform hover:scale-110 duration-300">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{cert.title}</h3>
                    </div>

                    <p className="text-muted-foreground text-justify text-sm mb-4">{cert.description}</p>

                    <div className="mt-auto flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-primary hover:text-white transition-colors"
                        onClick={() => openModal(cert)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 hover:bg-primary hover:text-white transition-colors"
                      >
                        <a href={cert.previewLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal isOpen={isModalOpen} onClose={closeModal} certificate={selectedCertificate} />
    </section>
  )
}
