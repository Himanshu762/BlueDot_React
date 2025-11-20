import { motion } from 'framer-motion';

interface RollingTextProps {
    text: string;
    className?: string;
    height?: number;
}

export default function RollingText({ text, className = '', height = 24 }: RollingTextProps) {
    return (
        <div
            className={`relative overflow-hidden flex flex-col ${className}`}
            style={{ height }}
        >
            <motion.span
                className="block h-full flex items-center"
                initial={{ y: 0 }}
                whileHover={{ y: -height }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
                {text}
            </motion.span>
            <motion.span
                className="block h-full flex items-center absolute top-full left-0"
                initial={{ y: 0 }}
                whileHover={{ y: -height }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
                {text}
            </motion.span>
        </div>
    );
}
