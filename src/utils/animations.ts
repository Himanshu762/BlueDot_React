/**
 * Framer Motion Animation Variants
 * Matching exact Framer HTML animations
 */

import type { Variants } from 'framer-motion'

// Core animation values from Framer HTML
export const ANIMATION_DURATION = 0.8
export const STAGGER_DELAY = 0.15

// Framer-style fade variants
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION,
      ease: [0.25, 0.1, 0.25, 1], // Framer default easing
    },
  },
}

// Framer-style slide up (translateY: -50px initial)
export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
    willChange: 'transform',
  },
  visible: {
    opacity: 1,
    y: 0,
    willChange: 'auto',
    transition: {
      duration: ANIMATION_DURATION,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Framer-style slide down (translateY: 50px initial)
export const slideDown: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    willChange: 'transform',
  },
  visible: {
    opacity: 1,
    y: 0,
    willChange: 'auto',
    transition: {
      duration: ANIMATION_DURATION,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Framer-style slide left (translateX: 50px initial)
export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
    willChange: 'transform',
  },
  visible: {
    opacity: 1,
    x: 0,
    willChange: 'auto',
    transition: {
      duration: ANIMATION_DURATION,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Framer-style slide right (translateX: -50px initial)
export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    willChange: 'transform',
  },
  visible: {
    opacity: 1,
    x: 0,
    willChange: 'auto',
    transition: {
      duration: ANIMATION_DURATION,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Scale animation with slide
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    willChange: 'transform',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    willChange: 'auto',
    transition: {
      duration: ANIMATION_DURATION,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAY,
      delayChildren: 0.2,
    },
  },
}

// For scroll-triggered animations
export const scrollFadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    willChange: 'transform',
  },
  visible: {
    opacity: 1,
    y: 0,
    willChange: 'auto',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Image hover animation
export const imageHover: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Card hover animation
export const cardHover: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Button hover animation
export const buttonHover: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  tap: {
    scale: 0.98,
  },
}

// FAQ accordion animation
export const accordionContent: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Icon rotation animation
export const iconRotate: Variants = {
  closed: {
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  open: {
    rotate: 90,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Navbar slider animation (spring physics matching Framer)
export const navSlider = {
  initial: false,
  transition: {
    type: 'spring',
    stiffness: 380,
    damping: 30,
  },
}

// Parallax effect
export const parallaxImage = (offset: number = 50) => ({
  hidden: {
    y: offset,
  },
  visible: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
})

// Opacity levels from Framer
export const OPACITY_LEVELS = {
  hidden: 0,
  nearlyHidden: 0.001,
  semiTransparent: 0.5,
  semiTransparent2: 0.6,
  visible: 1,
}

// Viewport animation settings
export const viewportSettings = {
  once: true,
  amount: 0.3, // Trigger when 30% of element is visible
  margin: '0px 0px -100px 0px', // Start animating before element is fully in view
}
