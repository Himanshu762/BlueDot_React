import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function WildlifeConservation() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-[rgb(243,235,212)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[rgb(19,38,27)] mb-10">
              Wildlife Conservation
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
          <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-12">
            The Problem
          </h2>
          <p className="text-xl text-[rgb(19,38,27)] leading-relaxed">
            In many rural and semi-urban communities, there's limited access to wildlife education. This leads to misinformation, fear of local fauna, and a growing disconnect from nature — worsening human-animal conflicts and reducing conservation awareness.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-12">
            Our Solution
          </h2>
          <p className="text-xl text-[rgb(19,38,27)] leading-relaxed">
            <strong>Eco Savaari</strong> is a first-of-its-kind mobile outreach initiative. A specially equipped van travels to schools, villages, and forest-edge settlements, turning open spaces into learning hubs. Through games, storytelling, visual aids, and interactive sessions, it makes wildlife and conservation education accessible, engaging, and rooted in local culture.
          </p>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-12">
            Why It Works
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                Uses regional languages and simple tools to make concepts relatable.
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                Breaks barriers by reaching communities where traditional awareness programs don't go.
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                Creates curiosity and dialogue among children and youth — the next stewards of nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-12">
            Our Impact So Far
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                Reached thousands of students across Karnataka.
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                Over 85% of participants report greater interest in wildlife after sessions.
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[rgb(238,185,42)] rounded-full mt-2 mr-4"></div>
              <p className="text-lg text-[rgb(19,38,27)]">
                Teachers and parents note reduced fear and improved understanding of local ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-12">
            Our Difference
          </h2>
          <p className="text-xl text-[rgb(19,38,27)] leading-relaxed">
            Unlike static awareness programs, Eco Savaari brings conservation to people's doorsteps. Its mobile, interactive model ensures both inclusivity and deeper behavioural change, planting the seeds of stewardship where it's needed most.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3551B4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-10">
            Take Wildlife Education on the Road
          </h2>
          <p className="text-xl mb-8">
            Join us in bridging people and nature through mobile wildlife education that inspires future conservation leaders.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[rgb(238,185,42)] text-[rgb(19,38,27)] rounded-lg hover:bg-white hover:text-[#3551B4] transition text-lg font-semibold"
          >
            Support Eco Savaari
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
