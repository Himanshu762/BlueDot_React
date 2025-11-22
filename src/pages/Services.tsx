import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedImage from '../components/ui/AnimatedImage';
import CtaSection from '../components/ui/CTASection';

export default function Services() {
  const services = [
    {
      id: 'lake-conservation',
      title: 'Lake Conservation',
      description: "India's lakes are choking with silt, shrinking water storage and threatening both ecosystems and farmer livelihoods.",
      image: '/assets/Home_project_lake.webp',
      link: '/services/lake-conservation'
    },
    {
      id: 'native-afforestation',
      title: 'Native Afforestation',
      description: 'Planting native trees to restore ecosystems and biodiversity.',
      image: '/assets/Home_Portfolio_Vruksha.avif',
      link: '/services/native-afforestation'
    },
    {
      id: 'wildlife-conservation',
      title: 'Wildlife Conservation',
      description: 'Mobile wildlife education bridging people, nature, and conservation.',
      image: '/assets/Home_project_EcoSavaari.avif',
      link: '/services/wildlife-conservation'
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal>
              <span className="inline-block px-4 py-2 bg-[rgba(53,81,180,0.1)] dark:bg-[#3c4faf]/20 text-[#3551B4] dark:text-[#3c4faf] rounded-full text-sm font-semibold mb-8">
                Services
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-forest mb-10">
                Restoring Ecosystems, Empowering Communities
              </h1>
              <p className="text-xl text-forest-light">
                Delivering impactful environmental services — from restoring lakes and planting native forests to building conservation awareness and sustainable solutions that benefit both people and nature.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} variant="slideUp" delay={index * 0.1}>
                <Link to={service.link} className="group">
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-card backdrop-blur-md border border-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all`}
                  >
                    <div className={` ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="rounded-xl overflow-hidden shadow-lg">
                        <AnimatedImage
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          aspectRatio="video"
                        />
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <h2 className="text-4xl font-bold text-forest mb-6 group-hover:text-[#3551B4] transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-lg text-forest leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
}