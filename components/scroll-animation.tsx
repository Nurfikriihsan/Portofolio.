"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  threshold?: number
  once?: boolean
  distance?: number
  type?: "fade" | "scale" | "both"
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  threshold = 0.1,
  once = true,
  distance = 50,
  type = "fade",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  // Set initial animation values based on direction
  let initial = { opacity: 0 }
  if (type !== "scale") {
    switch (direction) {
      case "up":
        initial = { ...initial, y: distance }
        break
      case "down":
        initial = { ...initial, y: -distance }
        break
      case "left":
        initial = { ...initial, x: distance }
        break
      case "right":
        initial = { ...initial, x: -distance }
        break
      case "none":
        initial = { opacity: 0 }
        break
    }
  }

  if (type === "scale" || type === "both") {
    initial = { ...initial, scale: 0.9 }
  }

  // Set animate values
  const animate = isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : { ...initial }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Improved easing function
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
