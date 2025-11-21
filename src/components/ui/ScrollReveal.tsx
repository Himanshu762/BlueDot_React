/**
 * ScrollReveal Component
 * Wrapper for scroll-triggered animations matching Framer
 */

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { scrollFadeIn, slideUp, slideDown, slideLeft, slideRight, scaleIn, viewportSettings } from '../../utils/animations'

interface ScrollRevealProps {
  children: ReactNode
  variant?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleIn'
  delay?: number
  className?: string
  once?: boolean
}

export default function ScrollReveal({
  children,
  variant = 'fadeIn',
  delay = 0,
  className = '',
  once = true,
}: ScrollRevealProps) {
  const variants = {
    fadeIn: scrollFadeIn,
    slideUp: slideUp,
    slideDown: slideDown,
    slideLeft: slideLeft,
    slideRight: slideRight,
    scaleIn: scaleIn,
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportSettings, once }}
      variants={variants[variant]}
      transition={{ delay }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

// Stagger children variant
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.15,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.2,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Individual stagger item
export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={slideUp}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}
