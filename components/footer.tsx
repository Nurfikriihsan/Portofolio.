import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold font-poppins">
              Nurfikri Ihsan<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground mt-2">Fullstack Developer</p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/Nurfikriihsan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nurfikri-ihsan-35586a312"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/nurfikriihsn/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">&copy; {currentYear} Nurfikri Ihsan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
