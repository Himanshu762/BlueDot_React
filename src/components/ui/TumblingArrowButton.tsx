/**
 * Tumbling Arrow Button Component
 * Button with animated tumbling arrow effect on hover
 */

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { tumblingArrow } from '../../utils/customAnimations'

interface TumblingArrowButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function TumblingArrowButton({
  children,
  onClick,
  href,
  className = '',
  variant = 'primary'
}: TumblingArrowButtonProps) {
  const baseClass = variant === 'primary'
    ? 'px-8 py-4 bg-[rgb(238,185,42)] text-[rgb(19,38,27)] hover:bg-[#3551B4] hover:text-white'
    : 'px-8 py-4 bg-[#3551B4] text-white hover:bg-[rgb(238,185,42)] hover:text-[rgb(19,38,27)]'

  const buttonContent = (
    <motion.div
      className={`inline-flex items-center gap-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl ${baseClass} ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <span>{children}</span>
      <motion.svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={tumblingArrow}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </motion.svg>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {buttonContent}
      </a>
    )
  }

  return (
    <button onClick={onClick} type="button">
      {buttonContent}
    </button>
  )
}
