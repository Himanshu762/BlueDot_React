import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function FloatingContactButton() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Show button after scrolling down 100px
        if (latest > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <Link
                        to="/contact"
                        className="group flex items-center gap-2 bg-[#3551B4] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#2a4190] transition-all duration-300"
                    >
                        <span className="font-semibold">Contact Us</span>
                        <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                        >
                            →
                        </motion.span>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
