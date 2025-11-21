import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import OrganicBlob from '../../components/ui/OrganicBlob'
import ScrollReveal from '../../components/ui/ScrollReveal'
import CtaSection from '../../components/ui/CTASection'
import AnimatedImage from '../../components/ui/AnimatedImage'

export default function NativeAfforestation() {
  return (
    <div className="min-h-screen bg-background dark:bg-[#0C142B] transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <OrganicBlob color="leaf" position="top-left" size="xl" opacity={0.15} />
        <OrganicBlob color="golden" position="bottom-right" size="lg" opacity={0.12} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal>
                <span className="inline-block px-6 py-2 bg-[#3c4faf] text-[#f3ecd9] rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
                  Service
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-forest dark:text-[#F5F0E1] mb-8">
                  Native Afforestation
                </h1>
                <p className="text-xl md:text-2xl text-forest-light dark:text-[#F3EBC0] leading-relaxed">
                  Restoring ecosystems with native species that co-evolved with the land.
                </p>
              </ScrollReveal>
            </div>
            <div className="relative">
              <ScrollReveal variant="slideLeft" delay={0.2}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 aspect-[4/3]">
                  <AnimatedImage
                    src="/assets/Home_Portfolio_Vruksha.avif"
                    alt="Native Afforestation"
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background-light dark:bg-[#0C142B] transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal variant="slideUp">
            <div className="bg-white/30 dark:bg-[#0f3433]/50 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-forest dark:text-[#F5F0E1] mb-8">
                The Problem
              </h2>
              <p className="text-lg md:text-xl text-forest-light dark:text-[#F3EBC0] leading-relaxed">
                Rapid urbanization and deforestation have degraded ecosystems, reduced biodiversity, and increased vulnerability to climate change. Exotic or fast-growing plantation drives often fail long-term, as they don't support local fauna or restore ecological balance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 relative bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <OrganicBlob color="ocean" position="center" size="xl" opacity={0.05} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal variant="slideUp">
            <div className="bg-white/30 dark:bg-[#0f3433]/50 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-forest dark:text-[#F5F0E1] mb-8">
                Our Solution
              </h2>
              <p className="text-lg md:text-xl text-forest-light dark:text-[#F3EBC0] leading-relaxed">
                BlueDot plants only <strong className="text-forest dark:text-[#F5F0E1] font-bold">native species</strong> — trees that co-evolved with local ecosystems and communities. These trees support pollinators, birds, and soil health, while being resilient to local climates and requiring minimal maintenance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 bg-background-light dark:bg-[#0C142B] transition-colors duration-300 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-forest dark:text-[#F5F0E1] mb-12 text-center">
              Why It Works
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Native trees create self-sustaining ecosystems, not just greenery.",
              "They strengthen biodiversity networks, aiding pollination and seed dispersal.",
              "They demand fewer resources, making them climate- and cost-friendly."
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white/40 dark:bg-[#0f3433]/50 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-3 h-3 bg-[#e8bb49] rounded-full mb-6"></div>
                  <p className="text-lg text-forest dark:text-[#F3EBC0] leading-relaxed">
                    {item}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 relative overflow-hidden bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <OrganicBlob color="golden" position="bottom-left" size="lg" opacity={0.1} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-forest dark:text-[#F5F0E1] mb-12 text-center">
              Our Impact So Far
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Planted 160,000+ native trees.",
              "Created urban and rural 'green lungs' that improve air and water quality.",
              "Supported habitat restoration, with noticeable return of local bird and insect species."
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex items-start bg-white/30 dark:bg-[#0f3433]/50 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-md h-full">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#3c4faf] rounded-full mt-2.5 mr-4"></div>
                  <p className="text-lg text-forest-light dark:text-[#F3EBC0]">
                    {item}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-20 bg-background-light dark:bg-[#0C142B] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl md:text-4xl font-bold text-forest dark:text-[#F5F0E1] mb-8">
              Our Difference
            </h2>
            <p className="text-xl text-forest-light dark:text-[#F3EBC0] leading-relaxed">
              Unlike monoculture plantations, our approach emphasises <strong className="text-forest dark:text-[#F5F0E1] font-bold">ecological integrity</strong>. Each project is designed for long-term survival, involving communities in care and stewardship, ensuring these forests thrive for generations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  )
}
