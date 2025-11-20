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
      image: '/assets/oSf4Xkj3chTgLy6rymg1KkAXDo.jpeg',
      link: '/services/lake-conservation'
    },
    {
      id: 'native-afforestation',
      title: 'Native Afforestation',
      description: 'Planting native trees to restore ecosystems and biodiversity.',
      image: '/assets/E2LjJIELkm0XgZ4AQfGXpVo95w.jpg',
      link: '/services/native-afforestation'
    },
    {
      id: 'wildlife-conservation',
      title: 'Wildlife Conservation',
      description: 'Mobile wildlife education bridging people, nature, and conservation.',
      image: '/assets/nyBgn9IEbJoE3XUZHWzc0HximQQ.jpg',
      link: '/services/wildlife-conservation'
    }
  ];

  return (
    <div className="min-h-screen bg-[rgb(243,235,212)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-[rgb(243,235,212)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal>
              <span className="inline-block px-4 py-2 bg-[rgba(53,81,180,0.1)] text-[#3551B4] rounded-full text-sm font-semibold mb-6">
                Services
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-[rgb(19,38,27)] mb-6">
                Restoring Ecosystems, Empowering Communities
              </h1>
              <p className="text-xl text-[rgb(94,107,100)]">
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
                    className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}
                  >
                    <div className={` ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="rounded-xl overflow-hidden shadow-2xl">
                        <AnimatedImage
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          aspectRatio="video"
                        />
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <h2 className="text-4xl font-bold text-[rgb(19,38,27)] mb-6 group-hover:text-[#3551B4] transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-lg text-[rgb(19,38,27)] leading-relaxed">
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