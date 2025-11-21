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

    // Left column moves UP slightly (starts at 5%, ends at 0%)
    // "left should scroll up very slightly" -> Positive y moves down, so to move UP we go from positive to 0?
    // No, if we want it to move UP as we scroll DOWN, it should go from a lower position (positive y) to higher position (0).
    // Or from 0 to negative?
    // User said: "trigger on scroll, from an equal level on both images, the left should scroll up very slightly and right should scroll down the same lenght as the left"
    // "from an equal level" -> implies initial state (before scroll effect completes?) or start state?
    // Let's assume they start aligned (0) and move apart?
    // Or they start offset and move to alignment?
    // "final position should be like in the second image" -> implies the aligned state is the final state?
    // Let's try: Start offset, end aligned (0).
    // Left starts at 10% (lower), moves to 0% (up).
    // Right starts at -10% (higher), moves to 0% (down).

    // Left column moves UP (starts at 0%, ends at -10%)
    const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    // Right column moves DOWN (starts at 0%, ends at 10%)
    const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

    // Split images
    const leftImages = images.slice(0, 3);
    const rightImages = images.slice(3, 6);

    return (
        <div ref={containerRef} className={`grid grid-cols-2 gap-4 h-[600px] overflow-hidden ${className}`}>
            {/* Left Column - Scrolls UP */}
            <div className="relative h-[120%] -top-[10%]">
                <motion.div
                    className="flex flex-col gap-4"
                    style={{ y: yLeft }}
                >
                    {leftImages.map((image, index) => (
                        <div key={`left-${index}`} className="w-full aspect-[2/3] rounded-2xl overflow-hidden shrink-0 shadow-lg">
                            <AnimatedImage
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Right Column - Scrolls DOWN */}
            <div className="relative h-[120%] -top-[10%]">
                <motion.div
                    className="flex flex-col gap-4"
                    style={{ y: yRight }}
                >
                    {rightImages.map((image, index) => (
                        <div key={`right-${index}`} className="w-full aspect-[2/3] rounded-2xl overflow-hidden shrink-0 shadow-lg">
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
