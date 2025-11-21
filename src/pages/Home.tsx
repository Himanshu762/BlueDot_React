import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Accordion from '../components/ui/Accordion';
import AnimatedImage from '../components/ui/AnimatedImage';
import ScrollReveal from '../components/ui/ScrollReveal';
import WordReveal from '../components/ui/WordReveal';
import ScrollingImageGrid from '../components/ui/ScrollingImageGrid';
import PartnerCarousel from '../components/ui/PartnerCarousel';
import OrganicBlob from '../components/ui/OrganicBlob';
import MagneticButton from '../components/ui/MagneticButton';
import { imageZoomOutReveal } from '../utils/customAnimations';
import { getCategoryColor, categoryTextColor } from '../utils/projectStyles';

// Enhanced Project Card
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageZoomOutReveal}
        whileHover={{ y: -12 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="overflow-hidden aspect-[4/3]">
          <AnimatedImage
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="px-3 py-1.5 text-xs rounded-full font-semibold shadow-sm"
              style={{
                backgroundColor: getCategoryColor(category),
                color: categoryTextColor
              }}
            >
              {category}
            </span>
            <span className="text-xs text-forest-light font-medium">{date}</span>
          </div>
          <h3 className="text-2xl font-bold text-forest mb-2 group-hover:text-ocean-500 transition-colors">
            {title}
          </h3>
          <p className="text-forest-light leading-relaxed">{description}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-ocean-500 font-semibold text-sm group-hover:gap-3 transition-all">
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
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
      image: '/assets/Home_project_EcoSavaari.avif',
      date: 'Jun 30, 2025',
      category: 'Wildlife',
      link: '/projects/eco-savaari'
    },
    {
      title: 'Turahalli Forest Cleanup Drive',
      description: "Community-led cleanup to protect Bengaluru's last forest patch.",
      image: '/assets/Home_Portfolio_Thurahalli.avif',
      date: 'Jun 14, 2025',
      category: 'Cleanup Drives',
      link: '/projects/turahalli-forest-cleanup-drive'
    },
    {
      title: 'Mangrove Plantation - Chennai',
      description: "Reviving Chennai's mangroves for urban ecological resilience.",
      image: '/assets/Home_Portfolio_Mangrove.avif',
      date: 'May 4, 2025',
      category: 'Conservation',
      link: '/projects/mangrove-plantation-chennai'
    },
    {
      title: 'Laksha Vruksha',
      description: 'Restoring ecosystems one native tree at a time.',
      image: '/assets/Home_Portfolio_Vruksha.avif',
      date: 'Mar 16, 2025',
      category: 'Afforestation',
      link: '/projects/laksha-vruksha'
    },
    {
      title: 'Devara Kere Restoration',
      description: 'Bringing life back to a historic lake ecosystem.',
      image: '/assets/Project_lake_restoration.avif',
      date: 'Feb 10, 2025',
      category: 'Lake Restoration',
      link: '/projects/devara-kere-restoration'
    }
  ];

  const services = [
    {
      title: 'Lake Conservation',
      description: "India's lakes are choking with silt, shrinking water storage and threatening both ecosystems and farmer livelihoods.",
      image: '/assets/Home_project_lake.webp',
      link: '/services/lake-conservation'
    },
    {
      title: 'Native Afforestation',
      description: 'Planting native trees to restore ecosystems and biodiversity.',
      image: '/assets/Home_project_Mangrove.avif',
      link: '/services/native-afforestation'
    },
    {
      title: 'Wildlife Conservation',
      description: 'Mobile wildlife education bridging people, nature, and conservation.',
      image: '/assets/Home_project_EcoSavaari.avif',
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
    '/assets/Contact_card_1.avif',
    '/assets/Contact_card_2.avif',
    '/assets/Contact_card_3.avif',
    '/assets/Contact_card_4.avif',
    '/assets/Contact_card_5.avif',
    '/assets/Contact_card_6.avif',
  ];

  const partners = [
    { name: 'Partner 1', logo: '/assets/partner_1.avif' },
    { name: 'Partner 2', logo: '/assets/partner_2.avif' },
    { name: 'Partner 3', logo: '/assets/partner_3.avif' },
    { name: 'Partner 4', logo: '/assets/partner_4.avif' },
    { name: 'Partner 5', logo: '/assets/partner_5.avif' },
    { name: 'Partner 6', logo: '/assets/partner_6.avif' },
    { name: 'Partner 7', logo: '/assets/partner_7.avif' },
    { name: 'Partner 8', logo: '/assets/partner_8.avif' },
    { name: 'Partner 9', logo: '/assets/partner_9.avif' },
    { name: 'Partner 10', logo: '/assets/partner_10.avif' },
    { name: 'Partner 11', logo: '/assets/partner_11.png' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Immersive with Organic Blobs */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32">
        {/* Organic Background Elements */}
        <OrganicBlob color="golden" position="top-right" size="xl" opacity={0.15} />
        <OrganicBlob color="ocean" position="bottom-left" size="lg" opacity={0.12} />
        <OrganicBlob color="leaf" position="center" size="md" opacity={0.08} />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background-light/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow flex flex-col justify-center">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Delivering on-ground<br />
              environmental solutions for<br />
              a climate-resilient future.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base md:text-lg text-forest-light mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Our mission is to conserve and restore water bodies and their surrounding ecosystems through hands-on action, scientific research, community engagement, and educational outreach creating sustainable, climate resilient habitats across India.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <MagneticButton href="/contact" variant="primary" size="lg">
                Contact Us
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Images Grid - Full Width */}
        <motion.div
          className="w-full px-4 pb-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {[
            '/assets/Landing_Eco_savaari.avif',
            '/assets/Landing_rahul.avif',
            '/assets/Landing_Lake_silt.avif',
            '/assets/Landing_mangrove.avif'
          ].map((src, index) => (
            <div key={index} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <AnimatedImage
                src={src}
                alt={`Hero image ${index + 1}`}
                className={`w-full h-full object-cover ${src.includes('rahul') ? 'object-right' : ''}`}
                priority
                enableReveal={false}
              />
            </div>
          ))}
        </motion.div>
      </section >

      {/* About Us Section with Word Reveal */}
      < section className="relative py-20 bg-background overflow-hidden" >
        <OrganicBlob color="golden" position="bottom-right" size="lg" opacity={0.1} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal variant="slideUp">
              <span className="text-sm font-semibold text-forest-light uppercase tracking-widest">
                WHO WE ARE
              </span>
            </ScrollReveal>

            <WordReveal
              text="We are a Bangalore-based non-profit organization dedicated to healing Earth's blue ecosystems through grassroots environmental action that delivers real measurable impact"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest mt-6 mb-8 leading-tight"
              as="h2"
            />

            <ScrollReveal variant="slideUp" delay={1.5}>
              <MagneticButton href="/about" variant="secondary" size="lg">
                Learn More About Us
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section >

      {/* Trusted By Section */}
      < section className="py-16 bg-background-light" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fadeIn">
            <h3 className="text-center text-sm font-semibold text-forest-light uppercase tracking-widest mb-12">
              TRUSTED BY
            </h3>
          </ScrollReveal>
          <PartnerCarousel partners={partners} />
        </div>
      </section >

      {/* Services Section */}
      < section className="relative py-20 bg-background overflow-hidden" >
        <OrganicBlob color="ocean" position="top-left" size="md" opacity={0.12} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12 items-start relative z-10">
          <div className="lg:col-span-1 lg:sticky lg:top-32">
            <ScrollReveal variant="slideUp">
              <span className="inline-block px-6 py-2 bg-[#3c4faf] text-[#f3ecd9] rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
                OUR SERVICES
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-forest mt-4 mb-6">
                Where Strategy Meets Impact
              </h2>
              <p className="text-lg text-forest-light">
                We deliver comprehensive environmental solutions that create lasting change through scientific research, community engagement, and hands-on restoration.
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-2 space-y-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} variant="slideUp" delay={index * 0.1}>
                <Link to={service.link} className="group block">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
                  >
                    <div className="overflow-hidden">
                      <AnimatedImage
                        src={service.image}
                        alt={service.title}
                        aspectRatio="video"
                        className="group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-forest mb-3 group-hover:text-ocean-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-lg text-forest-light">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 mt-4 text-ocean-500 font-semibold group-hover:gap-3 transition-all">
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section >

      {/* Projects Grid Section */}
      < section className="relative py-20 bg-background-light overflow-hidden" >
        <OrganicBlob color="leaf" position="bottom-left" size="lg" opacity={0.1} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal variant="slideUp">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div>
                <span className="inline-block px-6 py-2 bg-[#3c4faf] text-[#f3ecd9] rounded-full text-sm font-semibold uppercase tracking-wide mb-3">ALL PROJECTS</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-forest mt-3 mb-4 max-w-2xl">
                  Restoring ecosystems to secure tomorrow's climate
                </h2>
              </div>
              <MagneticButton href="/projects" variant="outline" size="md">
                View All Projects
              </MagneticButton>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {/* Left Column - Even indices */}
            <div className="space-y-12">
              {projects.filter((_, i) => i % 2 === 0).map((project) => (
                <ScrollReveal key={project.title} variant="slideUp">
                  <ProjectCard {...project} />
                </ScrollReveal>
              ))}
            </div>

            {/* Right Column - Odd indices */}
            <div className="space-y-12 md:mt-20">
              {projects.filter((_, i) => i % 2 === 1).map((project) => (
                <ScrollReveal key={project.title} variant="slideUp">
                  <ProjectCard {...project} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* FAQ Section */}
      < section className="relative py-20 bg-background overflow-hidden" >
        <OrganicBlob color="ocean" position="top-right" size="md" opacity={0.1} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal variant="slideUp">
            <div className="text-center mb-12">
              <span className="inline-block px-6 py-2 bg-[#3c4faf] text-[#f3ecd9] rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
                FAQ
              </span>
              <h2 className="text-4xl font-bold text-forest my-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-forest-light">
                Got questions? We've answered the ones we hear the most.
              </p>
            </div>
          </ScrollReveal>
          <Accordion items={faqs} />
        </div>
      </section >

      {/* CTA Section */}
      < section className="relative py-20 bg-gradient-to-br from-background-light via-background to-background-light overflow-hidden" >
        <OrganicBlob color="golden" position="top-left" size="xl" opacity={0.15} />
        <OrganicBlob color="ocean" position="bottom-right" size="lg" opacity={0.12} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-16 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <ScrollReveal variant="slideUp">
                <h2 className="text-4xl lg:text-5xl font-bold text-forest mb-6">
                  Ready to restore what nature gave us?
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="slideUp" delay={0.2}>
                <p className="text-lg text-forest-light mb-8 max-w-md">
                  Connect with us to align your sustainability goals with real-world impact. Let's restore ecosystems and communities — side by side.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="slideUp" delay={0.4}>
                <MagneticButton href="/contact" variant="primary" size="lg">
                  Get Started Today
                </MagneticButton>
              </ScrollReveal>
            </div>

            {/* 3x2 Scrolling Grid */}
            <div className="p-4 lg:p-8 h-full">
              <ScrollingImageGrid images={ctaImages} />
            </div>
          </div>
        </div>
      </section >

      <Footer />
    </div >
  );
}
