import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function EcoSavaari() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-[rgb(243,235,212)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-[rgb(238,185,42)]">
                Wildlife
              </span>
              <span className="text-sm text-[rgb(94,107,100)]">
                Jun 30, 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[rgb(19,38,27)] mb-8">
              Eco Savaari
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[rgb(19,38,27)] leading-relaxed mb-8">
              Eco Savaari is BlueDot's mobile outreach initiative designed to bridge the environmental awareness gap in rural and underserved communities. Using a specially equipped educational van, the program delivers interactive wildlife education sessions to children and youth who have limited access to formal environmental learning. The van travels district-by-district across Karnataka, transforming open grounds, schoolyards, and village spaces into pop-up classrooms. Through storytelling, visual games, posters, and AV tools, all designed in local languages. Eco Savaari inspires the next generation to understand, respect, and protect their local ecosystems. This initiative addresses key challenges such as misinformation about wildlife, disconnect from nature, and lack of conservation exposure. Children are encouraged to learn through fun, curiosity-driven methods like quiz games, rewards, and real-world examples. Volunteers and interns assist with logistics, session delivery, and feedback collection, ensuring the program remains community-centric and adaptive.
            </p>
          </div>

          {/* Project Image */}
          <div className="mt-12 mb-12">
            <img
              src="/assets/D9Gry0SbXEuqGskezKzCNnOpE.png"
              alt="Eco Savaari"
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
