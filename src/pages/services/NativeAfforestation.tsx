import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function NativeAfforestation() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-[rgb(243,235,212)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[rgb(19,38,27)] mb-6">
              Native Afforestation
            </h1>
            <p className="text-xl text-[rgb(94,107,100)]">
              BlueDot - Reviving India's Blue Ecosystems
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-8">
            The Problem
          </h2>
          <p className="text-xl text-[rgb(19,38,27)] leading-relaxed">
            Rapid urbanization and deforestation have degraded ecosystems, reduced biodiversity, and increased vulnerability to climate change. Exotic or fast-growing plantation drives often fail long-term, as they don't support local fauna or restore ecological balance.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-[rgb(243,246,245)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-8">
            Our Solution
          </h2>
          <p className="text-xl text-[rgb(19,38,27)] leading-relaxed mb-4">
            BlueDot plants only <strong>native species</strong> — trees that co-evolved with local ecosystems and communities. These trees support pollinators, birds, and soil health, while being resilient to local climates and requiring minimal maintenance.
          </p>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-8">
            Why It Works
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                Native trees create self-sustaining ecosystems, not just greenery.
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                They strengthen biodiversity networks, aiding pollination and seed dispersal.
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                They demand fewer resources, making them climate- and cost-friendly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-[rgb(243,246,245)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-8">
            Our Impact So Far
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                Planted 160,000+ native trees.
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                Created urban and rural "green lungs" that improve air and water quality.
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                Supported habitat restoration, with noticeable return of local bird and insect species.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-8">
            Our Difference
          </h2>
          <p className="text-xl text-[rgb(19,38,27)] leading-relaxed">
            Unlike monoculture plantations, our approach emphasises <strong>ecological integrity</strong>. Each project is designed for long-term survival, involving communities in care and stewardship, ensuring these forests thrive for generations.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3551B4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Grow Forests That Last
          </h2>
          <p className="text-xl mb-8">
            Help us restore balance with native trees that heal ecosystems, support wildlife, and protect future generations.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[rgb(238,185,42)] text-[rgb(19,38,27)] rounded-lg hover:bg-white hover:text-[#3551B4] transition text-lg font-semibold"
          >
            Support Afforestation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
