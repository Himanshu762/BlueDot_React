/**
 * Featured Card Component
 * Matching Framer's Featured and Featured-Flipped layouts
 */

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cardHover, imageHover } from '../../utils/animations'
import OrbitingCard from './OrbitingCard'

interface FeaturedCardProps {
  title: string
  description: string
  image: string
  category?: string
  date?: string
  link?: string
  flipped?: boolean
  variant?: 'default' | 'featured' | 'featured-flipped'
  onClick?: () => void
  children?: ReactNode
}

export default function FeaturedCard({
  title,
  description,
  image,
  category,
  date,
  link,
  flipped = false,
  variant = 'default',
  onClick,
  children,
}: FeaturedCardProps) {
  const isLarge = variant === 'featured' || variant === 'featured-flipped'
  const shouldFlip = variant === 'featured-flipped' || flipped

  const CardWrapper = link ? motion.a : motion.div

  return (
    <OrbitingCard className="rounded-xl bg-white/30 backdrop-blur-md border border-white/20 shadow-xl">
      <CardWrapper
        href={link}
        onClick={onClick}
        initial="rest"
        whileHover="hover"
        variants={cardHover}
        className={`
          group relative overflow-hidden rounded-xl bg-transparent
          ${isLarge ? 'col-span-2 row-span-2' : ''}
          ${link ? 'cursor-pointer' : ''}
          ${shouldFlip ? 'flex-row-reverse' : ''}
        `}
        style={{
          willChange: 'transform, box-shadow',
        }}
      >
        {/* Image Container */}
        <motion.div
          variants={imageHover}
          className={`
          relative overflow-hidden
          ${isLarge ? 'aspect-[16/10]' : 'aspect-video'}
        `}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ willChange: 'transform' }}
          />

          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Content */}
        <div className={`p-6 ${isLarge ? 'p-8' : ''}`}>
          {(category || date) && (
            <div className="flex items-center gap-3 mb-3">
              {category && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-sm font-semibold text-[rgb(238,185,42)] uppercase tracking-wide"
                >
                  {category}
                </motion.span>
              )}
              {date && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-sm text-[rgb(94,107,100)]"
                >
                  {date}
                </motion.span>
              )}
            </div>
          )}

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`
            font-bold text-[rgb(19,38,27)] mb-3
            group-hover:text-[#3551B4] transition-colors duration-300
            ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}
          `}
          >
            {title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`
            text-[rgb(94,107,100)] leading-relaxed
            ${isLarge ? 'text-lg' : 'text-base'}
          `}
          >
            {description}
          </motion.p>

          {children}

          {link && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 flex items-center text-[#3551B4] font-semibold group-hover:text-[rgb(238,185,42)] transition-colors"
            >
              <span>Read more</span>
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          )}
        </div>
      </CardWrapper>
    </OrbitingCard>
  )
}

// Compact variant for grids
export function CompactCard({
  title,
  description,
  image,
  category,
  date,
  link,
}: FeaturedCardProps) {
  return (
    <OrbitingCard className="rounded-xl bg-white/30 backdrop-blur-md border border-white/20 shadow-xl">
      <motion.a
        href={link}
        initial="rest"
        whileHover="hover"
        variants={cardHover}
        className="group block bg-transparent rounded-xl overflow-hidden"
        style={{ willChange: 'transform' }}
      >
        <motion.div
          variants={imageHover}
          className="aspect-video overflow-hidden"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ willChange: 'transform' }}
          />
        </motion.div>

        <div className="p-6">
          {(category || date) && (
            <div className="flex items-center gap-3 mb-3">
              {category && (
                <span className="text-xs text-[rgb(94,107,100)]">{date}</span>
              )}
              {date && (
                <span className="px-3 py-1 bg-[rgb(243,235,212)] text-[rgb(19,38,27)] text-xs rounded-full font-semibold">
                  {category}
                </span>
              )}
            </div>
          )}

          <h3 className="text-xl font-bold text-[rgb(19,38,27)] mb-2 group-hover:text-[#3551B4] transition-colors">
            {title}
          </h3>

          <p className="text-[rgb(94,107,100)]">{description}</p>
        </div>
      </motion.a>
    </OrbitingCard>
  )
}
