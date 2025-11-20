/**
 * Alternating Image Grid Component
 * 3x2 grid with alternating scroll directions
 */

import { motion } from 'framer-motion'
import { alternatingScroll } from '../../utils/customAnimations'
import AnimatedImage from './AnimatedImage'

interface AlternatingImageGridProps {
  images: string[]
  className?: string
}

export default function AlternatingImageGrid({ images, className = '' }: AlternatingImageGridProps) {
  // Ensure we have exactly 6 images for 3 rows x 2 cols
  const gridImages = images.slice(0, 6)

  return (
    <div className={`grid grid-cols-2 grid-rows-3 gap-2 ${className}`}>
      {gridImages.map((image, index) => {
        const row = Math.floor(index / 2)
        const col = index % 2

        // Alternate direction: left column scrolls from left, right column from right
        const direction = col === 0 ? 'left' : 'right'

        return (
          <motion.div
            key={index}
            variants={alternatingScroll(row, direction)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-lg overflow-hidden"
          >
            <AnimatedImage
              src={image}
              alt={`Grid image ${index + 1}`}
              className="w-full h-full"
              aspectRatio="square"
            />
          </motion.div>
        )
      })}
    </div>
  )
}
