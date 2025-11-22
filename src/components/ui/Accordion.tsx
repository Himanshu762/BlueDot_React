/**
 * Animated Accordion Component
 * Matching Framer's FAQ accordion with icon rotation
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { plusToMinus } from '../../utils/customAnimations'

// Accordion content animation
const accordionContent = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

import { useTheme } from '../../context/ThemeContext';

// ... (keep existing imports)

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { theme } = useTheme()

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="backdrop-blur-md border border-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          style={{
            willChange: 'auto',
            backgroundColor: theme === 'dark' ? 'rgba(15, 52, 51, 0.7)' : 'rgba(255, 255, 255, 0.95)'
          }}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center p-6 text-left group"
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-semibold text-forest pr-8">
              {item.question}
            </span>

            <motion.div
              variants={plusToMinus}
              initial="plus"
              animate={openIndex === index ? 'minus' : 'plus'}
              className="flex-shrink-0 w-6 h-6 text-[#e8bb49]"
            >
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                variants={accordionContent}
                initial="closed"
                animate="open"
                exit="closed"
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-forest-light leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
