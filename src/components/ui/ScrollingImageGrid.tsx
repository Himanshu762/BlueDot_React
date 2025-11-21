import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedImage from './AnimatedImage';

interface ScrollingImageGridProps {
    images: string[];
    className?: string;
}

export default function ScrollingImageGrid({ images, className = '' }: ScrollingImageGridProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Adjusted scroll range for better visibility
    const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const yRight = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

    // Split images
    const leftImages = images.slice(0, 3);
    const rightImages = images.slice(3, 6);

    return (
        <div ref={containerRef} className={`grid grid-cols-2 gap-6 h-[500px] overflow-hidden px-8 ${className}`}>
            {/* Left Column - Scrolls UP */}
            <div className="relative h-[150%] -top-[10%]">
                <motion.div
                    className="flex flex-col gap-6"
                    style={{ y: yLeft }}
                >
                    {leftImages.map((image, index) => (
                        <div key={`left-${index}`} className="w-full aspect-[3/4] rounded-xl overflow-hidden shrink-0 shadow-md transform scale-90">
                            <AnimatedImage
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover"
                                enableReveal={false}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Right Column - Scrolls DOWN */}
            <div className="relative h-[150%] -top-[25%]">
                <motion.div
                    className="flex flex-col gap-6"
                    style={{ y: yRight }}
                >
                    {rightImages.map((image, index) => (
                        <div key={`right-${index}`} className="w-full aspect-[3/4] rounded-xl overflow-hidden shrink-0 shadow-md transform scale-90">
                            <AnimatedImage
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover"
                                enableReveal={false}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
