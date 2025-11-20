/**
 * Word-by-Word Reveal Component
 * Reveals text word by word with blur-to-clear animation
 */

import { motion } from 'framer-motion'
import { wordReveal } from '../../utils/customAnimations'

interface WordRevealProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export default function WordReveal({ text, className = '', as = 'p' }: WordRevealProps) {
  const words = text.split(' ')
  const Tag = motion[as]

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordReveal(index)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
