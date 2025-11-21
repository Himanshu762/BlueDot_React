
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CtaSection from '../../components/ui/CTASection'
import MoreProjects from '../../components/ui/MoreProjects'

export default function DevaraKereRestoration() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-[rgb(243,235,212)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-[rgb(238,185,42)]">
                Lake Restoration
              </span>
              <span className="text-sm text-[rgb(94,107,100)]">
                May 11, 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[rgb(19,38,27)] mb-10">
              Devara Kere Restoration
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[rgb(19,38,27)] leading-relaxed mb-12">
              The climate crisis isn't a distant threat — it's already here, showing up as floods, droughts, rising temperatures, and disappearing species. Clean water bodies and thriving ecosystems are essential in combating these effects. When we restore a river, replant a mangrove, or save a species, we're not just protecting nature, we're protecting ourselves.
            </p>
          </div>

          {/* Project Image */}
          <div className="mt-12 mb-12">

            <img
              src="/assets/Home_project_lake.webp"
              alt="Devara Kere Restoration"
              className="w-full rounded-xl shadow-2xl"
            />

          </div>
        </div>
      </section>

      <MoreProjects currentProjectId="devara-kere-restoration" />

      <CtaSection />

      <Footer />
    </div>
  )
}
