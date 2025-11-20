import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}

export function BentoItem({ children, className = '', colSpan = 1, rowSpan = 1 }: BentoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/40 backdrop-blur-md
        border border-white/20
        shadow-lg hover:shadow-xl
        transition-all duration-300
        ${className}
      `}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
    >
      {children}
    </motion.div>
  );
}

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export default function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {children}
    </div>
  );
}
