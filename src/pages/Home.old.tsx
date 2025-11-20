import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  const projects = [
    {
      title: 'Eco Savaari',
      description: 'Wildlife education, one district at a time.',
      image: '/assets/D9Gry0SbXEuqGskezKzCNnOpE.png',
      date: 'Jun 30, 2025',
      category: 'Wildlife',
      link: '/projects/eco-savaari'
    },
    {
      title: 'Turahalli Forest Cleanup Drive',
      description: "Community-led cleanup to protect Bengaluru's last forest patch.",
      image: '/assets/X5jXBjxaJqtQMXcgqZKYVwKT0U0.png',
      date: 'Jun 14, 2025',
      category: 'Cleanup Drives',
      link: '/projects/turahalli-forest'
    },
    {
      title: 'Mangrove Plantation - Chennai',
      description: "Reviving Chennai's mangroves for urban ecological resilience.",
      image: '/assets/QV2rsTCYAjjlVL7jnmNIOVvLI.png',
      date: 'May 4, 2025',
      category: 'Conservation',
      link: '/projects/mangrove-plantation'
    },
    {
      title: 'Laksha Vruksha',
      description: 'Restoring ecosystems one native tree at a time.',
      image: '/assets/laksha-vruksha.jpg',
      date: 'Mar 16, 2025',
      category: 'Afforestation',
      link: '/projects/laksha-vruksha'
    },
    {
      title: 'Devara Kere Restoration',
      description: 'Bringing life back to a historic lake ecosystem.',
      image: '/assets/devara-kere.jpg',
      date: 'Feb 10, 2025',
      category: 'Lake Restoration',
      link: '/projects/devara-kere'
    }
  ]

  const services = [
    {
      title: 'Lake Conservation',
      description: "India's lakes are choking with silt, shrinking water storage and threatening both ecosystems and farmer livelihoods.",
      image: '/assets/oSf4Xkj3chTgLy6rymg1KkAXDo.jpeg',
      link: '/services/lake-conservation'
    },
    {
      title: 'Native Afforestation',
      description: 'Planting native trees to restore ecosystems and biodiversity.',
      image: '/assets/E2LjJIELkm0XgZ4AQfGXpVo95w.jpg',
      link: '/services/native-afforestation'
    },
    {
      title: 'Wildlife Conservation',
      description: 'Mobile wildlife education bridging people, nature, and conservation.',
      image: '/assets/nyBgn9IEbJoE3XUZHWzc0HximQQ.jpg',
      link: '/services/wildlife-conservation'
    }
  ]

  const faqs = [
    {
      question: 'How can I volunteer with BlueDot?',
      answer: 'We run cleanups, restoration projects, workshops, and more. Contact us to sign up for upcoming events.'
    },
    {
      question: 'Do I need experience or skills to help out?',
      answer: "Not always! Most of our initiatives are beginner-friendly. We'll provide all necessary orientation and guidance."
    },
    {
      question: "We're a company. Can we partner with you?",
      answer: 'Absolutely. From CSR partnerships to employee engagement programs, we offer tailored collaborations. Contact us for further details.'
    },
    {
      question: 'Can BlueDot support our CSR goals?',
      answer: 'Yes, we co-design nature-positive CSR initiatives that are measurable, transparent, and community-rooted.'
    },
    {
      question: 'How do you measure project success?',
      answer: 'We use a mix of ecological data, community feedback, and third-party evaluation to assess real-world impact.'
    },
    {
      question: 'Can I visit your project sites?',
      answer: "Yes, we love showing our work! Visits are welcome with prior scheduling — just drop us a message."
    },
    {
      question: 'How do I reach your team directly?',
      answer: 'You can email us, call us, or use our contact form. We typically respond within 48 hours.'
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-20 pb-16 bg-[rgb(243,235,212)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[rgb(19,38,27)] mb-6"
            >
              Delivering on-ground environmental solutions for a climate-resilient future.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-[rgb(94,107,100)] mb-12 max-w-3xl mx-auto"
            >
              Our mission is to conserve and restore water bodies and their surrounding ecosystems
              through hands-on action, scientific research, community engagement, and educational outreach —
              creating sustainable, climate-resilient habitats across India.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-[rgb(238,185,42)] text-[rgb(19,38,27)] rounded-lg hover:bg-[#3551B4] hover:text-white transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-[rgb(243,246,245)] text-[rgb(19,38,27)] rounded-full text-sm font-semibold mb-6"
            >
              About
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(19,38,27)] mb-6"
            >
              We're a focused team of restoration experts working with organizations to turn
              sustainability goals into real-world ecological impact.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-[rgb(94,107,100)] mb-8"
            >
              We help small and mid-sized businesses navigate the path to sustainability. Whether you're setting out or refining your route, we'll guide you every step of the way.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-[#3551B4] text-white rounded-lg hover:bg-[rgb(238,185,42)] hover:text-[rgb(19,38,27)] transition-all duration-300 font-semibold"
              >
                Learn more
              </Link>
            </motion.div>
          </div>

          {/* Trusted By Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-[rgb(94,107,100)] mb-6 uppercase tracking-wider">Trusted by:</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {/* Add partner logos here when available */}
              <div className="text-[rgb(94,107,100)] text-sm">Leading organizations across India</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[rgb(243,246,245)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-4">
              Where Strategy Meets Impact: Our Services
            </h2>
            <p className="text-lg text-[rgb(94,107,100)] max-w-3xl mx-auto">
              We deliver comprehensive environmental solutions tailored to your sustainability goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link
                  to={service.link}
                  className="group block bg-[rgb(255,255,255)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  style={{ willChange: 'transform' }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ willChange: 'transform' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[rgb(19,38,27)] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[rgb(94,107,100)]">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects/Blog Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-4">
              Restoring ecosystems to secure tomorrow's climate
            </h2>
            <p className="text-lg text-[rgb(94,107,100)] max-w-3xl mx-auto mb-8">
              Explore our ongoing projects and impact stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-[rgb(255,255,255)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ willChange: 'transform' }}
              >
                <Link to={project.link} className="block">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ willChange: 'transform' }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-[rgb(94,107,100)]">{project.date}</span>
                      <span className="px-3 py-1 bg-[rgb(243,235,212)] text-[rgb(19,38,27)] text-xs rounded-full font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[rgb(19,38,27)] mb-2 group-hover:text-[#3551B4] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[rgb(94,107,100)]">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[#3551B4] hover:text-[rgb(238,185,42)] font-semibold text-lg transition-colors"
            >
              View all projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[rgb(243,246,245)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-[rgb(94,107,100)]">
              Got questions? We've answered the ones we hear the most.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group bg-[rgb(243,235,212)] rounded-lg p-6 hover:bg-[rgb(255,255,255)] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-[rgb(19,38,27)]">
                  {faq.question}
                  <span className="ml-4 text-[rgb(238,185,42)] text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-[rgb(94,107,100)]"
                >
                  {faq.answer}
                </motion.p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3551B4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to restore what nature gave us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl mb-8"
          >
            Connect with us to align your sustainability goals with real-world impact.
            Let's restore ecosystems and communities — side by side.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-[rgb(238,185,42)] text-[rgb(19,38,27)] rounded-lg hover:bg-white hover:text-[#3551B4] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
