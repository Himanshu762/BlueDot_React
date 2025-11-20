import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function LakshaVruksha() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-[rgb(243,235,212)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-[rgb(238,185,42)]">
                Native Afforestation
              </span>
              <span className="text-sm text-[rgb(94,107,100)]">
                Mar 16, 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[rgb(19,38,27)] mb-8">
              Laksha-Vruksha
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[rgb(19,38,27)] leading-relaxed mb-8">
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

      {/* More to Explore Section */}
      <section className="py-20 bg-[rgb(243,246,245)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[rgb(19,38,27)] mb-8 text-center">
            More to explore
          </h2>
          <div className="flex justify-center">
            <Link
              to="/projects"
              className="inline-block px-8 py-4 bg-[rgb(238,185,42)] text-[rgb(19,38,27)] rounded-lg hover:bg-[#3551B4] hover:text-white transition text-lg font-semibold"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3551B4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to restore what nature gave us?
          </h2>
          <p className="text-xl mb-8">
            Connect with us to align your sustainability goals with real-world impact. Let's restore ecosystems and communities — side by side.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[rgb(238,185,42)] text-[rgb(19,38,27)] rounded-lg hover:bg-white hover:text-[#3551B4] transition text-lg font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
