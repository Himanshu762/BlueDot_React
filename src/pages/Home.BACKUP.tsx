import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Accordion from '../components/ui/Accordion';
import AnimatedImage from '../components/ui/AnimatedImage';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';
import { buttonHover } from '../utils/animations';

// A simple card component for the projects grid, matching the design
function ProjectCard({ title, description, image, date, category, link }: {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  link: string;
}) {
  return (
    <Link to={link} className="group block">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
          <AnimatedImage
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            aspectRatio="auto"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-[rgba(29,53,42,0.08)] text-[rgb(19,38,27)] text-xs rounded-full font-semibold">
              {category}
            </span>
            <span className="text-xs text-[rgb(94,107,100)]">{date}</span>
          </div>
          <h3 className="text-2xl font-bold text-[rgb(19,38,27)] mb-2 group-hover:text-[#3551B4] transition-colors">
            {title}
          </h3>
          <p className="text-[rgb(94,107,100)]">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}


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
      link: '/projects/turahalli-forest-cleanup-drive'
    },
    {
      title: 'Mangrove Plantation - Chennai',
      description: "Reviving Chennai's mangroves for urban ecological resilience.",
      image: '/assets/QV2rsTCYAjjlVL7jnmNIOVvLI.png',
      date: 'May 4, 2025',
      category: 'Conservation',
      link: '/projects/mangrove-plantation-chennai'
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
      link: '/projects/devara-kere-restoration'
    }
  ];

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
  ];

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
  ];

  const ctaImages = [
    '/assets/cdTdWpANONWCmQ5kklm0ciXJtPg.jpg',
    '/assets/9fo51YFkvJ6yCmaUo8ZCa4VJI.png',
    '/assets/3uLOP2LM0f5x5Llmr3iRwv5VyU.png',
    '/assets/a0Ae50cFxSa98KfD9yxGz9jmE.png',
    '/assets/X5jXBjxaJqtQMXcgqZKYVwKT0U0.png',
  ];

  return (
    <div className="min-h-screen bg-[rgb(243,235,212)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-[rgb(243,235,212)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          <StaggerContainer className="text-center max-w-4xl mx-auto">
            <StaggerItem>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[rgb(19,38,27)] mb-6"
                style={{ willChange: 'transform, opacity' }}
              >
                Delivering on-ground environmental solutions for a climate-resilient future.
              </motion.h1>
            </StaggerItem>

            <StaggerItem>
              <motion.p
                className="text-lg md:text-xl text-[rgb(94,107,100)] mb-12 max-w-3xl mx-auto"
                style={{ willChange: 'transform, opacity' }}
              >
                Our mission is to conserve and restore water bodies and their surrounding ecosystems
                through hands-on action, scientific research, community engagement, and educational outreach —
                creating sustainable, climate-resilient habitats across India.
              </motion.p>
            </StaggerItem>

            <StaggerItem>
              <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap">
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-[#3551B4] text-white rounded-lg hover:bg-[rgb(238,185,42)] hover:text-[rgb(19,38,27)] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
                  style={{ willChange: 'transform' }}
                >
                  Contact Us
                </Link>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Featured Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal variant="slideUp" delay={0.4}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[rgba(243,235,212,0.4)] backdrop-blur-sm rounded-2xl shadow-sm">
                    {projects.slice(1, 5).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <Link to={project.link} className="relative rounded-xl overflow-hidden group aspect-square md:aspect-[4/5] block">
                                <AnimatedImage src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" priority={index < 2} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                                    <h3 className="font-bold text-lg md:text-xl transition-transform duration-300 group-hover:translate-y-[-4px]">{project.title}</h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </ScrollReveal>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 sticky top-24">
            <ScrollReveal variant="slideUp">
              <span className="text-sm font-semibold text-[rgb(94,107,100)] uppercase tracking-widest">PROJECTS</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(19,38,27)] mt-4 mb-6">
                Where Strategy Meets Impact: Our Ongoing Projects
              </h2>
              <p className="text-lg text-[rgb(94,107,100)]">
                We help small and mid-sized businesses navigate the path to sustainability. Whether you're setting out or refining your route, we'll guide you every step of the way.
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-2 space-y-16">
            {services.map((service, index) => (
              <ScrollReveal key={index} variant="slideUp" delay={index * 0.1}>
                <Link to={service.link} className="group block">
                  <div className="overflow-hidden rounded-xl mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                    <AnimatedImage src={service.image} alt={service.title} aspectRatio="video" parallax={true} parallaxOffset={30} className="group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-[rgb(19,38,27)] mb-3 group-hover:text-[#3551B4] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-[rgb(94,107,100)]">
                    {service.description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-[rgb(243,246,245)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="slideUp">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(19,38,27)] mb-4 max-w-2xl">
                  Restoring ecosystems to secure tomorrow's climate
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden md:inline-flex items-center gap-2 text-[#3551B4] hover:text-[rgb(238,185,42)] font-semibold text-lg transition-colors flex-shrink-0"
              >
                View all projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <div className="space-y-12">
              <ScrollReveal variant="slideUp">
                <ProjectCard {...projects[0]} />
              </ScrollReveal>
              <ScrollReveal variant="slideUp">
                <ProjectCard {...projects[2]} />
              </ScrollReveal>
            </div>
            <div className="space-y-12 md:mt-20">
              <ScrollReveal variant="slideUp">
                <ProjectCard {...projects[1]} />
              </ScrollReveal>
              <ScrollReveal variant="slideUp">
                <ProjectCard {...projects[3]} />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="slideUp">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[rgb(94,107,100)] uppercase tracking-widest">FAQ</span>
              <h2 className="text-4xl font-bold text-[rgb(19,38,27)] my-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-[rgb(94,107,100)]">
                Got questions? We've answered the ones we hear the most.
              </p>
            </div>
          </ScrollReveal>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[rgb(243,235,212)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2">
                <div className="p-8 md:p-16 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
                    <ScrollReveal variant="slideUp">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(19,38,27)] mb-6">
                            Ready to restore what nature gave us?
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal variant="slideUp" delay={0.2}>
                        <p className="text-lg text-[rgb(94,107,100)] mb-8 max-w-md">
                            Connect with us to align your sustainability goals with real-world impact. Let's restore ecosystems and communities — side by side.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal variant="slideUp" delay={0.4}>
                        <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap">
                            <Link
                                to="/contact"
                                className="inline-block px-8 py-4 bg-[#3551B4] text-white rounded-lg hover:bg-[rgb(238,185,42)] hover:text-[rgb(19,38,27)] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </ScrollReveal>
                </div>
                <div className="grid grid-cols-2 grid-rows-6 gap-2 p-2 min-h-[400px] lg:h-auto">
                    <motion.div
                        className="col-span-1 row-span-3 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0, duration: 0.5 }}
                    >
                        <AnimatedImage src={ctaImages[0]} alt="Restoration work" className="w-full h-full" priority />
                    </motion.div>
                    <motion.div
                        className="col-span-1 row-span-4 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <AnimatedImage src={ctaImages[1]} alt="Community engagement" className="w-full h-full" />
                    </motion.div>
                    <motion.div
                        className="col-span-1 row-span-3 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <AnimatedImage src={ctaImages[2]} alt="Planting saplings" className="w-full h-full" />
                    </motion.div>
                    <motion.div
                        className="col-span-1 row-span-2 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <AnimatedImage src={ctaImages[3]} alt="Wildlife education" className="w-full h-full" />
                    </motion.div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}