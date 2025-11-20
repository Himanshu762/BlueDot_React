import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedImage from './AnimatedImage';

interface ScrollingImageGridProps {
    images: string[];
    className?: string;
}

export default function ScrollingImageGrid({ images, className = '' }: ScrollingImageGridProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress when the container enters the viewport until it is fully in view (center)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    // Left column moves UP (starts at 20%, ends at 0%)
    const yLeft = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

    // Right column moves DOWN (starts at -20%, ends at 0%)
    const yRight = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

    // Split images
    const leftImages = images.slice(0, 3);
    const rightImages = images.slice(3, 6);

    return (
        <div ref={containerRef} className={`grid grid-cols-2 gap-4 h-[500px] overflow-hidden ${className}`}>
            {/* Left Column - Scrolls UP */}
            <div className="relative h-[120%] -top-[10%]">
                <motion.div
                    className="flex flex-col gap-4"
                    style={{ y: yLeft }}
                >
                    {leftImages.map((image, index) => (
                        <div key={`left-${index}`} className="w-full aspect-[3/4] rounded-2xl overflow-hidden shrink-0 shadow-lg">
                            <AnimatedImage
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Right Column - Scrolls DOWN - Staggered */}
            <div className="relative h-[120%] -top-[10%] pt-12">
                <motion.div
                    className="flex flex-col gap-4"
                    style={{ y: yRight }}
                >
                    {rightImages.map((image, index) => (
                        <div key={`right-${index}`} className="w-full aspect-[3/4] rounded-2xl overflow-hidden shrink-0 shadow-lg">
                            <AnimatedImage
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
