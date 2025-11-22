import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Carousel from '../../components/ui/Carousel'
import AnimatedImage from '../../components/ui/AnimatedImage'
import ScrollReveal, { StaggerContainer, StaggerItem } from '../../components/ui/ScrollReveal'
import { buttonHover } from '../../utils/animations'
import MoreProjects from '../../components/ui/MoreProjects'

export default function EcoSavaari() {
  // Image gallery for this project
  const projectImages = [
    '/assets/Home_project_EcoSavaari.avif',
    '/assets/Landing_Eco_savaari.avif',
    '/assets/Home_Portfolio_Thurahalli.avif',
    '/assets/Home_project_lake.webp',
  ]



  const impactStats = [
    { number: '12+', label: 'Districts Covered' },
    { number: '2,500+', label: 'Children Reached' },
    { number: '50+', label: 'Sessions Conducted' },
    { number: '25+', label: 'Volunteers Engaged' },
  ]

  return (
    <div className="min-h-screen bg-background dark:bg-[#0C142B] transition-colors duration-300">
      <Navbar />

      {/* Hero Section with Breadcrumb */}
      <section className="relative pt-20 pb-16 bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <ScrollReveal variant="fadeIn">
              <nav className="flex items-center gap-2 text-sm text-forest-light mb-6">
                <Link to="/" className="hover:text-forest dark:hover:text-white transition">Home</Link>
                <span>/</span>
                <Link to="/projects" className="hover:text-forest dark:hover:text-white transition">Projects</Link>
                <span>/</span>
                <span className="text-forest dark:text-[#F5F0E1]">Eco Savaari</span>
              </nav>
            </ScrollReveal>

            <StaggerContainer>
              <StaggerItem>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-semibold text-[#e8bb49] uppercase tracking-wide">
                    Wildlife
                  </span>
                  <span className="text-sm text-forest-light">
                    Jun 30, 2025
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <h1 className="text-5xl md:text-6xl font-bold text-forest dark:text-[#F5F0E1] mb-10">
                  Eco Savaari
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="text-2xl text-forest-light font-medium">
                  Wildlife education, one district at a time.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Main Image Gallery */}
      <section className="py-12 bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="scaleIn">
            <Carousel
              autoPlay={false}
              showDots
              showArrows
              className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10"
            >
              {projectImages.map((image, index) => (
                <div key={index} className="aspect-video">
                  <AnimatedImage
                    src={image}
                    alt={`Eco Savaari ${index + 1}`}
                    aspectRatio="video"
                    priority={index === 0}
                  />
                </div>
              ))}
            </Carousel>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <ScrollReveal variant="slideUp">
              <h2 className="text-3xl font-bold text-forest dark:text-[#F5F0E1] mb-10">
                Bringing Wildlife Education to Rural India
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="slideUp" delay={0.2}>
              <p className="text-xl text-forest leading-relaxed mb-8">
                Eco Savaari is BlueDot's mobile outreach initiative designed to bridge the environmental awareness gap in rural and underserved communities. Using a specially equipped educational van, the program delivers interactive wildlife education sessions to children and youth who have limited access to formal environmental learning.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="slideUp" delay={0.4}>
              <p className="text-lg text-forest leading-relaxed mb-6">
                The van travels district-by-district across Karnataka, transforming open grounds, schoolyards, and village spaces into pop-up classrooms. Through storytelling, visual games, posters, and AV tools, all designed in local languages, Eco Savaari inspires the next generation to understand, respect, and protect their local ecosystems.
              </p>
            </ScrollReveal>

            {/* Key Features */}
            <ScrollReveal variant="slideUp" delay={0.6}>
              <div className="bg-white/30 dark:bg-[#0f3433]/50 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl p-8 my-12">
                <h3 className="text-2xl font-bold text-forest dark:text-[#F5F0E1] mb-10">Program Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: '🚐', title: 'Mobile Learning Unit', description: 'Fully equipped van with educational materials and AV tools' },
                    { icon: '🎓', title: 'Interactive Sessions', description: 'Games, storytelling, and hands-on activities in local languages' },
                    { icon: '🦅', title: 'Wildlife Awareness', description: 'Teaching about local biodiversity and conservation' },
                    { icon: '🌱', title: 'Community Impact', description: 'Empowering rural youth to become environmental stewards' },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="text-4xl">{feature.icon}</div>
                      <div>
                        <h4 className="font-bold text-forest dark:text-[#F5F0E1] mb-2">{feature.title}</h4>
                        <p className="text-forest-light">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideUp" delay={0.8}>
              <h3 className="text-2xl font-bold text-forest dark:text-[#F5F0E1] mb-8">
                Addressing Critical Challenges
              </h3>
            </ScrollReveal>

            <ScrollReveal variant="slideUp" delay={1.0}>
              <p className="text-lg text-forest leading-relaxed mb-6">
                This initiative addresses key challenges such as misinformation about wildlife, disconnect from nature, and lack of conservation exposure. Children are encouraged to learn through fun, curiosity-driven methods like quiz games, rewards, and real-world examples.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="slideUp" delay={1.2}>
              <p className="text-lg text-forest leading-relaxed mb-6">
                Volunteers and interns assist with logistics, session delivery, and feedback collection, ensuring the program remains community-centric and adaptive to local needs and contexts.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-[#3551B4] dark:bg-[#0f3433] text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="slideUp">
            <h2 className="text-4xl font-bold mb-16 text-center">
              Impact at a Glance
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <ScrollReveal key={index} variant="scaleIn" delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                    className="text-5xl md:text-6xl font-bold mb-2 text-[#e8bb49]"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <MoreProjects currentProjectId="eco-savaari" />

      {/* CTA Section */}
      <section className="py-20 bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="slideUp">
            <h2 className="text-4xl font-bold text-forest dark:text-[#F5F0E1] mb-10">
              Want to Support Eco Savaari?
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="slideUp" delay={0.2}>
            <p className="text-xl text-forest mb-8">
              Help us bring wildlife education to more communities across India.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="slideUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap">
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-[#e8bb49] text-forest rounded-lg hover:bg-[#3551B4] hover:text-white transition text-lg font-semibold shadow-lg"
                >
                  Get Involved
                </Link>
              </motion.div>

              <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap">
                <Link
                  to="/projects"
                  className="inline-block px-8 py-4 bg-[#3551B4] text-white rounded-lg hover:bg-[#e8bb49] hover:text-forest transition text-lg font-semibold shadow-lg"
                >
                  View All Projects
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
