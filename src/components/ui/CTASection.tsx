import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import AnimatedImage from './AnimatedImage';
import { buttonHover } from '../../utils/animations';

const ctaImages = [
    '/assets/cdTdWpANONWCmQ5kklm0ciXJtPg.jpg',
    '/assets/9fo51YFkvJ6yCmaUo8ZCa4VJI.png',
    '/assets/3uLOP2LM0f5x5Llmr3iRwv5VyU.png',
    '/assets/a0Ae50cFxSa98KfD9yxGz9jmE.png',
    '/assets/5xMloXcQ1GBrqbIt6YkMIeriM.png',
];

export default function CtaSection() {
    return (
        <section className="py-20 bg-transparent">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2">
                    <div className="p-8 md:p-16 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
                        <ScrollReveal variant="slideUp">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(19,38,27)] mb-6">
                                Ready to restore what nature gave us?
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal variant="slideUp" delay={0.2}>
                            <p className="text-lg text-[rgb(94,107,100)] mb-8 max-w-md">
                                Connect with us to align your sustainability goals with real-world impact. Let's restore ecosystems and communities — side by side.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal variant="slideUp" delay={0.4}>
                            <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap">
                                <Link
                                    to="/contact"
                                    className="inline-block px-8 py-4 bg-[#3551B4] text-white rounded-lg hover:bg-[rgb(238,185,42)] hover:text-[rgb(19,38,27)] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </ScrollReveal>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 gap-2 p-2 min-h-[400px] lg:h-auto">
                        <div className="col-span-1 row-span-1 rounded-lg overflow-hidden"><AnimatedImage src={ctaImages[0]} alt="Restoration work" className="w-full h-full" /></div>
                        <div className="col-span-1 row-span-2 rounded-lg overflow-hidden"><AnimatedImage src={ctaImages[1]} alt="Community engagement" className="w-full h-full" /></div>
                        <div className="col-span-1 row-span-1 rounded-lg overflow-hidden"><AnimatedImage src={ctaImages[2]} alt="Planting saplings" className="w-full h-full" /></div>
                        <div className="col-span-1 row-span-1 rounded-lg overflow-hidden"><AnimatedImage src={ctaImages[3]} alt="Wildlife education" className="w-full h-full" /></div>
                        <div className="col-span-2 row-span-1 rounded-lg overflow-hidden"><AnimatedImage src={ctaImages[4]} alt="Team meeting" className="w-full h-full" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
}