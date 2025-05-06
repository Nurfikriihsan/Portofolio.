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
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>{certificate.title}</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 p-0">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        <div className="relative h-[60vh] w-full mt-4 bg-muted/20 rounded-md overflow-hidden">
          <Image
            src={certificate.image || "/placeholder.svg"}
            alt={certificate.title}
            fill
            className="object-contain"
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
