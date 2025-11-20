import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function LakeConservation() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-[rgb(243,235,212)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[rgb(19,38,27)] mb-6">
              Lake Conservation
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
            India's lakes are choking with silt, shrinking water storage and threatening both ecosystems and farmer livelihoods.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-[rgb(243,246,245)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-8">
            Our Solution
          </h2>
          <p className="text-xl text-[rgb(19,38,27)] leading-relaxed">
            We restore lakes by excavating nutrient-rich silt and giving it free to farmers. This doubles the impact: lakes hold millions of extra litres of water, while farmers improve soil fertility and increase crop yields.
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
                Desilting is low-cost, fast, and replicable.
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                A 10-acre lake gains 30M litres of storage with just 2 feet of excavation.
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                By 2035, reviving 10,000 lakes could add 300B litres of water storage.
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
                18 lakes restored in Karnataka, adding ~270M litres of extra capacity
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                Farmers report healthier soil and better yields
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                Restored lakes show clearer water, aquatic life return, and reduced pollution
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                Secured permissions for 200 more lakes for desilting and are ready to scale
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
            Unlike traditional approaches, BlueDot directly links lake revival to farmer benefits. This unique model ties ecology to livelihoods, creating long-term stewardship and community ownership.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3551B4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bring Lakes Back to Life
          </h2>
          <p className="text-xl mb-8">
            Help us revive lakes, store billions of litres of water, and strengthen farmer livelihoods.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[rgb(238,185,42)] text-[rgb(19,38,27)] rounded-lg hover:bg-white hover:text-[#3551B4] transition text-lg font-semibold"
          >
            Support Lake Revival
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
