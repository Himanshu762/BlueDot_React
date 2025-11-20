/**
 * Animated Image Component
 * With lazy loading, blur-up effect, and parallax support
 */

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedImageProps {
  src: string
  alt: string
  className?: string
  parallax?: boolean
  parallaxOffset?: number
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto'
  objectFit?: 'cover' | 'contain'
  priority?: boolean
  enableReveal?: boolean
}

export default function AnimatedImage({
  src,
  alt,
  className = '',
  parallax = false,
  parallaxOffset = 50,
  aspectRatio = 'auto',
  objectFit = 'cover',
  priority = false,
  enableReveal = true,
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, parallax ? parallaxOffset : 0])

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    auto: '',
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}
    >
      {/* Blur placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[rgb(243,235,212)] animate-pulse" />
      )}

      {/* Actual image - only load when in view or priority */}
      {(inView || priority) && (
        <motion.img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          initial={enableReveal ? { opacity: 0 } : { opacity: 1 }}
          animate={enableReveal ? {
            opacity: isLoaded ? 1 : 0,
          } : { opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            y: parallax ? y : 0,
            willChange: parallax ? 'transform' : 'auto',
          }}
          className={`w-full h-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
        />
      )}
    </div>
  )
}

// Gallery variant with zoom on click
interface GalleryImageProps extends AnimatedImageProps {
  onZoom?: () => void
  index?: number
}

export function GalleryImage({ onZoom, index = 0, ...props }: GalleryImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      onClick={onZoom}
      className={`cursor-pointer ${props.className || ''}`}
    >
      <AnimatedImage {...props} />
    </motion.div>
  )
}
