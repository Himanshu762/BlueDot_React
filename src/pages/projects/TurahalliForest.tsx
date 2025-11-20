import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function TurahalliForest() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-[rgb(243,235,212)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-[rgb(238,185,42)]">
                Cleanup Drives
              </span>
              <span className="text-sm text-[rgb(94,107,100)]">
                Jun 14, 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[rgb(19,38,27)] mb-8">
              Turahalli Forest Cleanup Drive
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[rgb(19,38,27)] leading-relaxed mb-8">
              As part of our continued commitment to on-ground environmental action, we recently led a cleanup initiative at Turahalli Forest — one of Bengaluru's last remaining natural forest patches. In collaboration with our dedicated interns and the spirited student community of IIM Bangalore, we came together to restore this ecologically important space. Armed with gloves, reusable bags, and a shared purpose, volunteers navigated the forest trails, collecting waste ranging from plastic bottles and wrappers to broken glass and packaging materials. Over 200 kilograms of waste were removed in a single day — a clear reflection of the human footprint on even our most treasured green spaces. Beyond the immediate impact, this initiative served as a powerful reminder of the role community-led efforts play in protecting local ecosystems. It was more than a cleanup — it was a collective act of awareness, responsibility, and reclaiming. Through efforts like these, we aim to inspire everyday action and restore the integrity of natural spaces like Turahalli.
            </p>
          </div>

          {/* Project Image */}
          <div className="mt-12 mb-12">

            <img
              src="/assets/Home_Portfolio_Thurahalli.avif"
              alt="Turahalli Forest Cleanup Drive"
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
