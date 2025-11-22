import ScrollReveal from './ScrollReveal';
import ScrollingImageGrid from './ScrollingImageGrid';
import MagneticButton from './MagneticButton';

const ctaImages = [
    '/assets/Contact_card_1.avif',
    '/assets/Contact_card_2.avif',
    '/assets/Contact_card_3.avif',
    '/assets/Contact_card_4.avif',
    '/assets/Contact_card_5.avif',
    '/assets/Contact_card_6.avif',
];

import { useTheme } from '../../context/ThemeContext';

export default function CtaSection() {
    const { theme } = useTheme();
    return (
        <section className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-card grid lg:grid-cols-2 gap-0 transition-colors duration-300"
                    style={{ backgroundColor: theme === 'dark' ? '#0f3433' : 'rgba(255, 255, 255, 0.95)' }}
                >
                    <div className="p-8 md:p-16 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
                        <ScrollReveal variant="slideUp">
                            <h2 className="text-4xl lg:text-5xl font-bold text-forest mb-6">
                                Ready to restore what nature gave us?
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal variant="slideUp" delay={0.2}>
                            <p className="text-lg text-forest-light mb-8 max-w-md">
                                Connect with us to align your sustainability goals with real-world impact. Let's restore ecosystems and communities — side by side.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal variant="slideUp" delay={0.4}>
                            <MagneticButton href="/contact" variant="primary" size="lg">
                                Get Started Today
                            </MagneticButton>
                        </ScrollReveal>
                    </div>

                    {/* 3x2 Scrolling Grid */}
                    <div className="p-4 lg:p-8 h-full">
                        <ScrollingImageGrid images={ctaImages} />
                    </div>
                </div>
            </div>
        </section>
    );
}