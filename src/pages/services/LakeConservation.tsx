import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import OrganicBlob from '../../components/ui/OrganicBlob'
import ScrollReveal from '../../components/ui/ScrollReveal'
import CtaSection from '../../components/ui/CTASection'
import AnimatedImage from '../../components/ui/AnimatedImage'

export default function LakeConservation() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <OrganicBlob color="ocean" position="top-right" size="xl" opacity={0.15} />
        <OrganicBlob color="leaf" position="bottom-left" size="lg" opacity={0.12} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal>
                <span className="inline-block px-6 py-2 bg-[#3c4faf] text-[#f3ecd9] rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
                  Service
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-forest mb-8">
                  Lake Conservation
                </h1>
                <p className="text-xl md:text-2xl text-forest-light leading-relaxed">
                  Reviving India's Blue Ecosystems through community-led restoration.
                </p>
              </ScrollReveal>
            </div>
            <div className="relative">
              <ScrollReveal variant="slideLeft" delay={0.2}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3]">
                  <AnimatedImage
                    src="/assets/Home_project_lake.webp"
                    alt="Lake Conservation"
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
      <section className="py-20 bg-background-light relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal variant="slideUp">
            <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-forest mb-8">
                The Problem
              </h2>
              <p className="text-lg md:text-xl text-forest-light leading-relaxed">
                India's lakes are choking with silt, shrinking water storage and threatening both ecosystems and farmer livelihoods. Without intervention, these vital water bodies face irreversible degradation, impacting biodiversity and groundwater levels.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 relative">
        <OrganicBlob color="golden" position="center" size="xl" opacity={0.05} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal variant="slideUp">
            <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-forest mb-8">
                Our Solution
              </h2>
              <p className="text-lg md:text-xl text-forest-light leading-relaxed">
                We restore lakes by excavating nutrient-rich silt and giving it free to farmers. This doubles the impact: lakes hold millions of extra litres of water, while farmers improve soil fertility and increase crop yields without chemical fertilizers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 bg-background-light relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-12 text-center">
              Why It Works
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Desilting is low-cost, fast, and replicable.",
              "A 10-acre lake gains 30M litres of storage with just 2 feet of excavation.",
              "By 2035, reviving 10,000 lakes could add 300B litres of water storage."
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-3 h-3 bg-[#e8bb49] rounded-full mb-6"></div>
                  <p className="text-lg text-forest leading-relaxed">
                    {item}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 relative overflow-hidden">
        <OrganicBlob color="leaf" position="bottom-right" size="lg" opacity={0.1} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-12 text-center">
              Our Impact So Far
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "18 lakes restored in Karnataka, adding ~270M litres of extra capacity",
              "Farmers report healthier soil and better yields",
              "Restored lakes show clearer water, aquatic life return, and reduced pollution",
              "Secured permissions for 200 more lakes for desilting and are ready to scale"
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex items-start bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-md">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#3c4faf] rounded-full mt-2.5 mr-4"></div>
                  <p className="text-lg text-forest-light">
                    {item}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-20 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="slideUp">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-8">
              Our Difference
            </h2>
            <p className="text-xl text-forest-light leading-relaxed">
              Unlike traditional approaches, BlueDot directly links lake revival to farmer benefits. This unique model ties ecology to livelihoods, creating long-term stewardship and community ownership.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  )
}
