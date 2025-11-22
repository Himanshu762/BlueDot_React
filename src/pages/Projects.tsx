import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedImage from '../components/ui/AnimatedImage';
import CtaSection from '../components/ui/CTASection';
import { getCategoryColor, categoryTextColor } from '../utils/projectStyles';

// A card component styled to match the design
import { useTheme } from '../context/ThemeContext';

// ... (keep existing imports)

function ProjectCard({ title, description, image, date, category, link }: {
  // ... (keep existing types)
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  link: string;
}) {
  const { theme } = useTheme();
  return (
    <Link to={link} className="group block">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="backdrop-blur-md border border-card rounded-xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all h-full flex flex-col"
        style={{ backgroundColor: theme === 'dark' ? 'rgba(15, 52, 51, 0.7)' : 'rgba(255, 255, 255, 0.95)' }}
      >
        <div className="overflow-hidden aspect-video">
          <AnimatedImage
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            aspectRatio="video"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="px-3 py-1 text-xs rounded-full font-semibold"
              style={{
                backgroundColor: getCategoryColor(category),
                color: categoryTextColor
              }}
            >
              {category}
            </span>
            <span className="text-xs text-forest-light">{date}</span>
          </div>
          <h3 className="text-2xl font-bold text-forest mb-2 group-hover:text-[#3551B4] transition-colors">
            {title}
          </h3>
          <p className="text-forest-light">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Projects() {
  const projects = [
    {
      id: 'eco-savaari',
      category: 'Wildlife',
      date: 'Jun 30, 2025',
      title: 'Eco Savaari',
      description: 'Wildlife education, one district at a time.',
      image: '/assets/Home_project_EcoSavaari.avif'
    },
    {
      id: 'turahalli-forest-cleanup-drive',
      category: 'Cleanup Drives',
      date: 'Jun 14, 2025',
      title: 'Turahalli Forest Cleanup Drive',
      description: "Community-led cleanup to protect Bengaluru's last forest patch.",
      image: '/assets/Home_Portfolio_Thurahalli.avif'
    },
    {
      id: 'mangrove-plantation-chennai',
      category: 'Native Afforestation',
      date: 'May 4, 2025',
      title: 'Mangrove Plantation- Chennai',
      description: "Reviving Chennai's mangroves for urban ecological resilience.",
      image: '/assets/Home_Portfolio_Mangrove.avif'
    },
    {
      id: 'laksha-vruksha',
      category: 'Native Afforestation',
      date: 'Mar 16, 2025',
      title: 'Laksha-Vruksha',
      description: 'Restoring ecosystems one native tree at a time.',
      image: '/assets/Home_Portfolio_Vruksha.avif'
    },

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
                Projects
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-forest mb-10">
                BlueDot Journal
              </h1>
              <p className="text-xl text-forest-light">
                Stories, research, and reflections on restoring our planet — one action at a time.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} variant="slideUp" delay={index * 0.1}>
                <ProjectCard
                  link={`/projects/${project.id}`}
                  {...project}
                />
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