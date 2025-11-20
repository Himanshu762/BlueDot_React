/**
 * Partner Carousel Component
 * Infinite scrolling carousel of partner brand logos
 */

import { motion } from 'framer-motion'

interface PartnerCarouselProps {
  partners: { name: string; logo: string }[]
  className?: string
}

export default function PartnerCarousel({ partners, className = '' }: PartnerCarouselProps) {
  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners]

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-12 items-center"
        animate={{
          x: [0, -100 * partners.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 w-48 h-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
