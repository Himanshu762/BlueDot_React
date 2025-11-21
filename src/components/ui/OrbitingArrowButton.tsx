import { motion } from 'framer-motion';

interface OrbitingArrowButtonProps {
    className?: string;
}

export default function OrbitingArrowButton({ className = '' }: OrbitingArrowButtonProps) {
    return (
        <motion.div
            className={`absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-20 ${className}`}
            variants={{
                rest: {
                    x: -40, // Start from West
                    y: 0,
                    opacity: 0,
                    scale: 0.5,
                    rotate: -45 // Rotate slightly for effect
                },
                hover: {
                    x: 0, // Land in place
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                    }
                }
            }}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-forest"
            >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
            </svg>
        </motion.div>
    );
}
