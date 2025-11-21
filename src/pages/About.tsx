import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedImage from '../components/ui/AnimatedImage';
import { motion } from 'framer-motion';
import { verticalFloat, slideFromLeft, slideFromRight, scrollFromBottom } from '../utils/customAnimations';
import CtaSection from '../components/ui/CTASection';

export default function About() {
  const team = [
    {
      name: 'Harsha Tej',
      role: 'Founder',
      bio: 'Harsha Tej is an environmentalist with a deep commitment to ecological restoration and sustainability. With a background in environmental science, he has led impactful projects across Karnataka for over a decade. He has been instrumental in creating and restoring 18 lakes and has driven afforestation initiatives that resulted in the planting of over 1.5 lakh trees. His work empowers communities and promotes long-term environmental stewardship. Through BlueDot Foundation, Harsha continues to lead efforts that foster climate resilience and a greener, more sustainable future',
      image: '/assets/about_harsha.avif',
      isFounder: true
    },
    {
      name: 'Diganth Manchale',
      role: 'Core Team',
      image: '/assets/About_diganth.avif',
      isFounder: false
    },
    {
      name: 'Swetha',
      role: 'Core Team',
      image: '/assets/About_swetha.avif',
      isFounder: false
    },
    {
      name: 'Shreya Asrani',
      role: 'Core Team',
      image: '/assets/About_shreya.avif',
      isFounder: false
    },
    {
      name: 'Mohith Rajshekar',
      role: 'Core Team',
      image: '/assets/About_mohith.avif',
      isFounder: false
    },
    {
      name: 'Himanshu Venugopal',
      role: 'Core Team',
      image: '/assets/About_Himanshu.avif',
      isFounder: false
    },
    {
      name: 'Rahul Jauhari',
      role: 'Core Team',
      image: '/assets/About_rahul_j.avif',
      isFounder: false
    },
    {
      name: 'Deepika Appaiah',
      role: 'Core Team',
      image: '/assets/About_deepika.avif',
      isFounder: false
    },
    {
      name: 'Gubbi',
      role: 'Core Team',
      image: '/assets/About_gubbi.avif',
      isFounder: false
    },
    {
      name: 'Rahul Aradhya',
      role: 'Core Team',
      image: '/assets/About_rahul_a.avif',
      isFounder: false
    },
    {
      name: 'Renuka Kulkarni',
      role: 'Core Team',
      image: '/assets/About_renuka.avif',
      isFounder: false
    },
    {
      name: 'Chetan S Murthy',
      role: 'Core Team',
      image: '/assets/About_cheta.avif',
      isFounder: false
    },
    {
      name: 'Chaitali Raizada',
      role: 'Core Team',
      image: '/assets/About_chaitali.avif',
      isFounder: false
    },
    {
      name: 'Amit Shroff',
      role: 'Core Team',
      image: '/assets/About_amit.avif',
      isFounder: false
    },
    {
      name: 'Rammohan Paranjape',
      role: 'Core Team',
      image: '/assets/About_rammohan.avif',
      isFounder: false
    },
    {
      name: 'Divya Reddy',
      role: 'Core Team',
      image: '/assets/About_divya.avif',
      isFounder: false
    }
  ];

  const missionCards = [
    { title: 'Project Ideation', image: '/assets/About_card_1.avif' },
    { title: 'Project Implementation', image: '/assets/About_card_2.avif' },
    { title: 'Impact Assessment', image: '/assets/About_card_3.avif' },
    { title: 'Volunteering', image: '/assets/About_card_4.avif' },
  ];

  const founder = team[0];
  const coreTeam = team.slice(1);

  return (
    <div className="bg-background dark:bg-[#0C142B] transition-colors duration-300">
      <Navbar />

      {/* Intro Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-6 py-2 bg-[#3c4faf] text-[#f3ecd9] rounded-full text-sm font-semibold mb-8">
                About
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-forest dark:text-[#F5F0E1] mb-10">
                Our story so far
              </h1>
              <p className="text-lg text-forest-light dark:text-[#F3EBC0]">
                Meet the team and learn about our mission.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 items-center mt-16 max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-forest dark:text-[#F5F0E1] mb-8">About BlueDot</h2>
              <p className="text-lg text-forest dark:text-[#F3EBC0] leading-relaxed">
                BlueDot is a Bangalore-based non-profit organization dedicated to healing Earth's blue ecosystems — rivers, lakes, oceans, and wetlands while protecting the rich wildlife that depends on them. Born out of a deep concern for the accelerating impacts of climate change, we are a collective of environmentalists, scientists, educators, and everyday citizens driven by one goal: to restore what nature gave us and ensure it thrives for generations to come.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative aspect-square bg-[#3551B4] dark:bg-[#0f3433] rounded-2xl flex items-center justify-center border border-transparent dark:border-white/10 overflow-hidden">
                <img
                  src="/assets/About_logo.avif"
                  alt="BlueDot Logo"
                  className="w-full h-full object-cover"
                />
                <motion.span
                  variants={verticalFloat}
                  initial="initial"
                  animate="animate"
                  custom={0}
                  className="absolute top-8 left-8 bg-white/10 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  Hands-on action
                </motion.span>
                <motion.span
                  variants={verticalFloat}
                  initial="initial"
                  animate="animate"
                  custom={0.5}
                  className="absolute top-16 right-8 bg-white/10 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  Community Engagement
                </motion.span>
                <motion.span
                  variants={verticalFloat}
                  initial="initial"
                  animate="animate"
                  custom={1}
                  className="absolute bottom-16 left-8 bg-white/10 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  Scientific research
                </motion.span>
                <motion.span
                  variants={verticalFloat}
                  initial="initial"
                  animate="animate"
                  custom={1.5}
                  className="absolute bottom-8 right-8 bg-white/10 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  Educational Outreach
                </motion.span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block px-6 py-2 bg-[#3c4faf] text-[#e8bb49] rounded-full text-sm font-semibold mb-8">
              Mission & values
            </span>
            <h2 className="text-5xl font-bold text-forest dark:text-[#F5F0E1] mb-10">
              We're on a mission...
            </h2>
            <p className="text-lg text-forest-light dark:text-[#F3EBC0] leading-relaxed max-w-3xl mx-auto mb-16">
              ....to conserve and restore water bodies and their surrounding ecosystems through hands-on action, scientific research, community engagement, and educational outreach creating sustainable, climate resilient habitats across India.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {missionCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={scrollFromBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/90 dark:bg-[#0f3433] rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all border border-transparent dark:border-white/10"
              >
                <div className="mb-4 flex justify-center">
                  <img src={card.image} alt={card.title} className="h-16 w-auto object-contain" />
                </div>
                <h3 className="text-xl font-bold text-forest dark:text-[#F5F0E1]">
                  {card.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-6 py-2 bg-[#3c4faf] text-[#f3ecd9] rounded-full text-sm font-semibold mb-8">
                Our Team
              </span>
              <h2 className="text-5xl font-bold text-forest dark:text-[#F5F0E1]">
                Meet our founder
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-white/30 dark:bg-[#0f3433]/50 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-2xl shadow-xl">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <AnimatedImage
                src={founder.image}
                alt={founder.name}
                className="w-full rounded-lg"
              />
            </motion.div>
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <h3 className="text-4xl font-bold text-forest dark:text-[#F5F0E1] mb-2">
                  {founder.name}
                </h3>
                <p className="text-xl text-[#e8bb49] mb-6 font-semibold">
                  {founder.role}
                </p>
                <p className="text-forest dark:text-[#F3EBC0] leading-relaxed text-sm">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 bg-background dark:bg-[#0C142B] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-5xl font-bold text-forest dark:text-[#F5F0E1] mb-16 text-center">
              Our Core Team
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                variants={slideFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/30 dark:bg-[#0f3433]/50 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl flex items-center shadow-lg hover:shadow-xl transition-all overflow-hidden h-32"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-full object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-forest dark:text-[#F5F0E1] text-lg">
                    {member.name}
                  </h4>
                  <p className="text-sm text-forest-light dark:text-[#F3EBC0] font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />

      <Footer />
    </div>
  );
}