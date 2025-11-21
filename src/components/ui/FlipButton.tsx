/**
 * 3D Flip Button Component
 * Used in Navbar and Footer - flips like a cube face on hover
 */

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FlipButtonProps {
  frontContent: ReactNode
  backContent: ReactNode
  onClick?: () => void
  className?: string
  href?: string
}

export default function FlipButton({
  frontContent,
  backContent,
  onClick,
  className = '',
  href
}: FlipButtonProps) {
  const buttonClass = `relative inline-block ${className}`

  const content = (
    <div className={buttonClass} style={{ perspective: '1000px' }}>
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ rotateX: 90 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateX(0deg)',
          }}
        >
          {frontContent}
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateX(-90deg)',
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  )

  if (href) {
    return <a href={href} onClick={onClick}>{content}</a>
  }

  return <button onClick={onClick} type="button">{content}</button>
}
