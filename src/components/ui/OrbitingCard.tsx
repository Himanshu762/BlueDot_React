/**
 * Orbiting Card Component
 * Card with orbiting earth animation and arrow that locks to NW corner
 */

import { motion } from 'framer-motion'
import { useState } from 'react'
import type { ReactNode } from 'react'
import { orbitingEarth, arrowLockToNW, zoomOutOnScroll, zoomInOnHover } from '../../utils/customAnimations'

interface OrbitingCardProps {
  children: ReactNode
  className?: string
}

export default function OrbitingCard({ children, className = '' }: OrbitingCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [hasScrolledIn, setHasScrolledIn] = useState(false)

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl ${className}`}
      initial="rest"
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onViewportEnter={() => setHasScrolledIn(true)}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Card Content with Zoom Effects */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={zoomOutOnScroll}
      >
        <motion.div
          variants={zoomInOnHover}
        >
          {children}
        </motion.div>
      </motion.div>

      {/* Orbiting Earth Container */}
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none"
        style={{
          transformOrigin: 'top right',
        }}
      >
        {/* Orbit Path */}
        <motion.div
          className="absolute"
          style={{
            width: '100%',
            height: '100%',
            transformOrigin: '100% 0',
          }}
          animate={isHovered ? orbitingEarth.orbit : {}}
        >
          {/* Earth Icon */}
          <div
            className="absolute top-0 right-0"
            style={{
              transform: 'translate(50%, -50%)',
            }}
          >
            <motion.div
              className="w-8 h-8 rounded-full bg-[#3551B4] flex items-center justify-center shadow-lg"
              animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </div>

          {/* Arrow that Locks to NW */}
          <motion.div
            className="absolute top-0 right-0"
            initial="initial"
            animate={hasScrolledIn && isHovered ? "locked" : "initial"}
            variants={arrowLockToNW}
            style={{
              width: '24px',
              height: '24px',
            }}
          >
            <svg
              className="w-6 h-6 text-[rgb(238,185,42)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
