"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import ScrollAnimation from "./scroll-animation"

const projectsData = [
  {
    title: "Analisis Efisiensi Pembelajaran Hibrida",
    description:
      "Proyek ini mengevaluasi hubungan durasi belajar tatap muka dan online dengan hasil akademik menggunakan regresi linier dalam dashboard Streamlit interaktif. Tujuannya adalah memberi wawasan efektivitas pembelajaran hibrida berbasis data.",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Streamlit"],
    image: "/images/Aljabar Linier.png",
    demoLink: "https://klmp-3-aljabar-antara.streamlit.app/",
    codeLink: "https://github.com/Nurfikriihsan/Kelompok_3_Aljabar_Linier.git",
  },
  {
    title: "Portofolio",
    description:
      "Website portfolio pribadi yang dibuat untuk menampilkan perjalanan saya. Website ini dirancang dengan desain yang modern dan responsif, berisi informasi tentang skill teknis, pengalaman, serta proyek-proyek yang pernah saya kerjakan.",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    image: "/images/Portofolio 2.png",
    demoLink: "https://nurfikriihsan.vercel.app/",
    codeLink: "https://github.com/Nurfikriihsan/Portofolio..git",
  },
  {
    title: "E-Commerce Product Page",
    description:
      "Website e-commerce product dengan desain modern. Fitur utama meliputi galeri gambar produk, detail harga dan deskripsi, tombol jumlah barang, serta desain responsif untuk berbagai perangkat. Desain ini menonjolkan antarmuka yang bersih dan ramah pengguna.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/E - Commerce Product.png",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Lezato - Burger Website",
    description:
      "Website restoran lezato dengan desain modern. Fitur utama meliputi judul utama, deskripsi hidangan sehat, navigasi menu, tombol pesan, serta desain elegan dan responsif. Desain ini mencerminkan profesionalisme dan kesan premium.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/Lezato - Burger Website.png",
    demoLink: "https://nurfikriihsan.github.io/Lezato/",
    codeLink: "https://github.com/Nurfikriihsan/Lezato.git",
  },
  {
    title: "Portofolio",
    description:
      "Website portfolio pribadi yang dibuat untuk menampilkan perjalanan saya. Website ini dirancang dengan desain yang modern dan responsif, berisi informasi tentang skill teknis, pengalaman, serta proyek-proyek yang pernah saya kerjakan.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/Portofolio 1.png",
    demoLink: "https://nurfikriihsan.github.io/Portofolio/",
    codeLink: "https://github.com/Nurfikriihsan/Portofolio.git",
  },
  {
    title: "Task Tracker Cli",
    description:
      "Task Tracker CLI adalah aplikasi command line sederhana berbasis JavaScript yang menyimpan data dalam file JSON. Aplikasi ini memungkinkan pengguna menambahkan, mengedit, menghapus, dan mengatur status tugas (belum dikerjakan, sedang dikerjakan, selesai), serta menampilkan daftar tugas berdasarkan status.",
    technologies: ["JavaScript", "JSON"],
    image: "/images/Task Tracker Cli.png",
    demoLink: "#",
    codeLink: "https://github.com/Nurfikriihsan/Task-Tracker-Cli.git",
  },
  {
    title: "Expense Tracker Cli",
    description:
      "Expense Tracker CLI adalah aplikasi command line berbasis Python yang menyimpan data pengeluaran dalam file JSON. Aplikasi ini memungkinkan pengguna mencatat, memperbarui, menghapus, dan melihat ringkasan pengeluaran, termasuk per bulan, untuk membantu mengontrol keuangan langsung dari terminal.",
    technologies: ["Python", "JSON"],
    image: "/images/Expense Tracker Cli.png",
    demoLink: "#",
    codeLink: "https://github.com/Nurfikriihsan/Expense-Tracker.git",
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  // Item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24">
      <div className="section-container">
        <ScrollAnimation direction="up" duration={0.7}>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">My recent work</p>
        </ScrollAnimation>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="overflow-hidden h-full flex flex-col hover-lift hover:shadow-md transition-all duration-300">
                <div className="relative pt-[56.25%] w-full overflow-hidden bg-muted/50">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain absolute top-0 left-0 w-full h-full p-2 transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow text-justify">{project.description}</p>

                  <ScrollAnimation direction="up" delay={0.2} duration={0.5}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full transition-colors hover:bg-primary hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </ScrollAnimation>

                  <div className="flex gap-3 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:bg-primary hover:text-white transition-colors"
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:bg-primary hover:text-white transition-colors"
                    >
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
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
