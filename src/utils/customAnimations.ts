/**
 * Custom Animations for BlueDot Website
 * These match the original Framer animations exactly
 */

// 3D Cube Flip Animation for Buttons (Navbar/Footer)
export const cubeFlip = {
  initial: {
    rotateX: 0,
  },
  hover: {
    rotateX: 90,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

// Tumbling Arrow Animation (appears on button hover)
export const tumblingArrow = {
  initial: {
    rotate: 0,
    x: 0,
    y: 0,
  },
  hover: {
    rotate: [0, -45, -90, -135, -180],
    x: [0, 3, 5, 3, 5],
    y: [0, -2, 0, 2, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut" as const,
      times: [0, 0.25, 0.5, 0.75, 1],
    },
  },
}

// Orbiting Earth Animation with NW Arrow Lock
export const orbitingEarth = {
  orbit: {
    rotate: 360,
    transition: {
      duration: 8,
      ease: "linear" as const,
      repeat: Infinity,
    },
  },
}

export const arrowLockToNW = {
  initial: {
    rotate: 270, // West facing
    x: 0,
    y: 0,
  },
  locked: {
    rotate: 315, // Northwest facing
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

// Spinning Plus to Minus Animation (FAQ Accordion)
export const plusToMinus = {
  plus: {
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
  minus: {
    rotate: 135, // Spins to create minus appearance
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

// Word-by-Word Blur-Clear Reveal
export const wordReveal = (index: number) => ({
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
})

// Alternating Scroll Direction for Image Grid
export const alternatingScroll = (index: number, direction: 'left' | 'right') => ({
  hidden: {
    x: direction === 'left' ? -100 : 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: index * 0.15,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
})

// Scrolling Pills (opposite directions)
export const scrollingPill = (direction: 'left' | 'right') => ({
  animate: {
    x: direction === 'left' ? [0, -20, 0] : [0, 20, 0],
    transition: {
      duration: 2,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
})

// Vertical To-and-Fro Motion (alternative for pills)
export const verticalFloat = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 2.5,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
}

// Mission/Values Cards - Scroll from Bottom
export const scrollFromBottom = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

// Team Cards - Slide from Left/Right
export const slideFromLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

export const slideFromRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

// Card Zoom Animations
export const zoomOutOnScroll = {
  hidden: {
    scale: 1.1,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

export const zoomInOnHover = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

// Blur-to-Clear Slide Up (Contact Page)
export const blurSlideUp = {
  hidden: {
    y: 30,
    opacity: 0,
    filter: "blur(8px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

// Hero Drop Down from Top
export const heroDropDown = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

// Image Card Zoom Out Reveal
export const imageZoomOutReveal = {
  hidden: {
    scale: 1.2,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

// Stagger container for sequential animations
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}
