import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedImage from './AnimatedImage';
import ScrollReveal from './ScrollReveal';

// Shared projects data
const allProjects = [
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
    {
        id: 'devara-kere-restoration',
        category: 'Lake Restoration',
        date: 'May 11, 2025',
        title: 'Lake Restoration',
        description: 'Restoring nature to fight the climate crisis head-on.',
        image: '/assets/Home_project_lake.webp'
    }
];

interface MoreProjectsProps {
    currentProjectId: string;
}

export default function MoreProjects({ currentProjectId }: MoreProjectsProps) {
    // Filter out current project and take first 3
    const displayProjects = allProjects
        .filter(p => p.id !== currentProjectId)
        .slice(0, 3);

    return (
        <section className="py-20 bg-[rgb(243,246,245)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-[rgb(19,38,27)] mb-12 text-center">
                    More to explore
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayProjects.map((project, index) => (
                        <ScrollReveal key={project.id} variant="slideUp" delay={index * 0.1}>
                            <Link to={`/projects/${project.id}`} className="group block h-full">
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="h-full flex flex-col"
                                >
                                    <div className="bg-white/30 backdrop-blur-md border border-white/20 overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow aspect-video mb-4">
                                        <AnimatedImage
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 bg-[rgba(164,142,105,0.2)] text-[rgb(19,38,27)] text-xs rounded-full font-semibold">
                                            {project.category}
                                        </span>
                                        <span className="text-xs text-[rgb(94,107,100)]">{project.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[rgb(19,38,27)] group-hover:text-[#3551B4] transition-colors">
                                        {project.title}
                                    </h3>
                                </motion.div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
