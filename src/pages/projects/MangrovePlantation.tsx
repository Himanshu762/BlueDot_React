
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CtaSection from '../../components/ui/CTASection'
import MoreProjects from '../../components/ui/MoreProjects'

export default function MangrovePlantation() {
  return (
    <div className="min-h-screen bg-background dark:bg-[#0C142B] transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-[#e8bb49]">
                Native Afforestation
              </span>
              <span className="text-sm text-forest-light dark:text-[#F3EBC0]">
                May 4, 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-forest dark:text-[#F5F0E1] mb-10">
              Mangrove Plantation- Chennai
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-forest dark:text-[#F3EBC0] leading-relaxed mb-12">
              We've launched an ongoing mangrove restoration initiative in Chennai, Tamil Nadu. This project is part of our broader mission to reintroduce native biodiversity and build ecological resilience within urban landscapes. Recognizing the area's potential for ecological revival, we have begun restoring parts of its degraded periphery by planting 1,000 saplings of three native mangrove species: Rhizophora mucronata, known for its soil-stabilizing stilt roots; Excoecaria agallocha, a fast-growing species that adapts well to brackish urban soils; and Avicennia marina, a hardy pioneer species with aerial roots that improve water quality and support diverse wildlife These efforts aim to reduce urban flood risk, improve water retention, create green microhabitats for birds and aquatic life, and foster greater public involvement and care for urban ecosystems.
            </p>
          </div>

          {/* Project Image */}
          <div className="mt-12 mb-12">

            <img
              src="/assets/Home_Portfolio_Mangrove.avif"
              alt="Mangrove Plantation Chennai"
              className="w-full rounded-xl shadow-2xl"
            />

          </div>
        </div>
      </section>

      <MoreProjects currentProjectId="mangrove-plantation-chennai" />

      <CtaSection />

      <Footer />
    </div>
  )
}
