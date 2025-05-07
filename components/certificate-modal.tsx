"use client"

import { useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  certificate: {
    title: string
    image: string
    date: string
    description: string
  } | null
}

export default function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [onClose])

  if (!certificate) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>{certificate.title}</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 p-0">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        <div className="relative w-full pt-[75%] mt-4 bg-muted/20 rounded-md overflow-hidden">
          <Image
            src={certificate.image || "/placeholder.svg"}
            alt={certificate.title}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain absolute top-0 left-0 w-full h-full p-4"
          />
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">{certificate.date}</p>
          <p className="text-sm">{certificate.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
