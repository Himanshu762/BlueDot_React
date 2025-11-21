import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import OrganicBlob from '../../components/ui/OrganicBlob'
import ScrollReveal from '../../components/ui/ScrollReveal'
import CtaSection from '../../components/ui/CTASection'
import AnimatedImage from '../../components/ui/AnimatedImage'

export default function WildlifeConservation() {
  return (
    <div className="min-h-screen bg-background dark:bg-[#0C142B] transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <OrganicBlob color="golden" position="top-right" size="xl" opacity={0.15} />
        <OrganicBlob color="ocean" position="bottom-left" size="lg" opacity={0.12} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal>
                <span className="inline-block px-6 py-2 bg-[#3c4faf] text-[#f3ecd9] rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
                  Service
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-forest dark:text-[#F5F0E1] mb-8">
                  Wildlife Conservation
                </h1>
                <p className="text-xl md:text-2xl text-forest-light dark:text-[#F3EBC0] leading-relaxed">
                  Bridging people, nature, and conservation through education.
                </p>
              </ScrollReveal>
            </div>
            <div className="relative">
              <ScrollReveal variant="slideLeft" delay={0.2}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 aspect-[4/3]">
                  <AnimatedImage
                    src="/assets/Home_project_EcoSavaari.avif"
                    alt="Wildlife Conservation"
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
                In many rural and semi-urban communities, there's limited access to wildlife education. This leads to misinformation, fear of local fauna, and a growing disconnect from nature — worsening human-animal conflicts and reducing conservation awareness.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 relative bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <OrganicBlob color="leaf" position="center" size="xl" opacity={0.05} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal variant="slideUp">
            <div className="bg-white/30 dark:bg-[#0f3433]/50 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-forest dark:text-[#F5F0E1] mb-8">
                Our Solution
              </h2>
              <p className="text-lg md:text-xl text-forest-light dark:text-[#F3EBC0] leading-relaxed">
                <strong className="text-forest dark:text-[#F5F0E1] font-bold">Eco Savaari</strong> is a first-of-its-kind mobile outreach initiative. A specially equipped van travels to schools, villages, and forest-edge settlements, turning open spaces into learning hubs. Through games, storytelling, visual aids, and interactive sessions, it makes wildlife and conservation education accessible, engaging, and rooted in local culture.
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
              "Uses regional languages and simple tools to make concepts relatable.",
              "Breaks barriers by reaching communities where traditional awareness programs don't go.",
              "Creates curiosity and dialogue among children and youth — the next stewards of nature."
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
        <OrganicBlob color="ocean" position="bottom-right" size="lg" opacity={0.1} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-forest dark:text-[#F5F0E1] mb-12 text-center">
              Our Impact So Far
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Reached thousands of students across Karnataka.",
              "Over 85% of participants report greater interest in wildlife after sessions.",
              "Teachers and parents note reduced fear and improved understanding of local ecosystems."
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
              Unlike static awareness programs, Eco Savaari brings conservation to people's doorsteps. Its mobile, interactive model ensures both inclusivity and deeper behavioural change, planting the seeds of stewardship where it's needed most.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  )
}
