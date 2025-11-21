
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CtaSection from '../../components/ui/CTASection'
import MoreProjects from '../../components/ui/MoreProjects'

export default function LakshaVruksha() {
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
                Mar 16, 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-forest dark:text-[#F5F0E1] mb-10">
              Laksha-Vruksha
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-forest dark:text-[#F3EBC0] leading-relaxed mb-12">
              We're laying the roots for a greener, more resilient tomorrow — one native tree at a time. Our vision is to revive degraded landscapes and enhance local biodiversity by bringing back the trees that truly belong. Native species are more than just trees — they are lifelines for birds, pollinators, small mammals, fungi, and people. As we begin this journey, we're identifying priority areas for reforestation in collaboration with ecologists, forest departments, and local communities. We're curating native species lists suited to specific soil and climate conditions, setting up nurseries, and planning seasonal plantation drives. But this is not just about planting — it's about stewardship. We aim to involve schools, farmers, citizen volunteers, and local leaders to not only plant but nurture each sapling until it thrives. These trees will not only restore natural habitats but also help regulate local climates, improve soil and water health, and reconnect people with the land.
            </p>
          </div>

          {/* Project Image */}
          <div className="mt-12 mb-12">

            <img
              src="/assets/Home_Portfolio_Vruksha.avif"
              alt="Laksha-Vruksha"
              className="w-full rounded-xl shadow-2xl"
            />

          </div>
        </div>
      </section>

      <MoreProjects currentProjectId="laksha-vruksha" />

      <CtaSection />

      <Footer />
    </div>
  )
}
