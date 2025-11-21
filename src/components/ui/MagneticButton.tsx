import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ''
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic effect - pull toward cursor
    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantStyles = {
    primary: 'bg-[#3c4faf] text-[#f3ecd9] shadow-lg shadow-ocean-500/30 hover:shadow-xl hover:shadow-ocean-500/40',
    secondary: 'bg-gradient-to-r from-ocean-500 to-ocean-600 text-[#f3ecd9] shadow-lg shadow-ocean-500/30 hover:shadow-xl hover:shadow-ocean-500/40',
    outline: 'border-2 border-[#e8bb49] text-[#e8bb49] hover:bg-golden-50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonContent = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center justify-center gap-2
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        rounded-full font-semibold
        transition-all duration-300
        cursor-pointer
        overflow-hidden
        group
        ${className}
      `}
    >
      <div className="relative h-6 overflow-hidden">
        <motion.div
          variants={{
            hover: { y: -24 }
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col"
        >
          <span className="block h-6 flex items-center">{children}</span>
          <span className="block h-6 flex items-center">{children}</span>
        </motion.div>
      </div>
      <motion.span
        initial={{ x: 0 }}
        variants={{
          hover: { x: 4 }
        }}
        transition={{ duration: 0.2 }}
        className="inline-block text-current"
      >
        →
      </motion.span>
    </motion.div>
  );

  if (href) {
    return (
      <Link to={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return <div onClick={onClick}>{buttonContent}</div>;
}
