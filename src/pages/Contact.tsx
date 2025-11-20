import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Accordion from '../components/ui/Accordion';
import ScrollReveal from '../components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import { blurSlideUp } from '../utils/customAnimations';

export default function Contact() {
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

  // This hook handles loading the Tally.so embed script
  useEffect(() => {
    const script = document.createElement('script');
    const scriptSrc = 'https://tally.so/widgets/embed.js';

    // Check if the script is already present
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
        // If script is already there, just reload the embeds
        if (window.Tally) {
            window.Tally.loadEmbeds();
        }
        return;
    }
    
    script.src = scriptSrc;
    script.async = true;
    script.onload = () => {
        // Once the script is loaded, Tally will automatically find and load the embeds.
        // Or you can explicitly call it if needed:
        if (window.Tally) {
            window.Tally.loadEmbeds();
        }
    };
    script.onerror = () => {
        console.error('Failed to load Tally embeds script.');
    };

    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);


  return (
    <div className="min-h-screen bg-[rgb(243,235,212)]">
      <Navbar />

      {/* Main Content Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Column: Intro Text */}
            <div className="max-w-lg">
              <motion.span
                variants={blurSlideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="inline-block px-4 py-2 bg-[rgba(53,81,180,0.1)] text-[#3551B4] rounded-full text-sm font-semibold mb-6"
              >
                Contact us
              </motion.span>
              <motion.h1
                variants={blurSlideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-[rgb(19,38,27)] mb-6"
              >
                Join the Movement
              </motion.h1>
              <motion.p
                variants={blurSlideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-[rgb(94,107,100)] mb-8 leading-relaxed"
              >
                We're glad you're here. Whether you're an individual looking to volunteer, a student eager to intern, or a partner exploring collaboration — we're here to connect. Share your interest and let's build meaningful impact together. Fill in your details and let's get started.
              </motion.p>
              <motion.p
                variants={blurSlideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3 }}
                className="text-md text-[rgb(94,107,100)] mb-6"
              >
                Not sure where you fit?
              </motion.p>
              <motion.a
                variants={blurSlideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4 }}
                href="https://www.instagram.com/bluedotfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#3551B4] text-white rounded-lg hover:bg-[rgb(238,185,42)] hover:text-[rgb(19,38,27)] transition text-lg font-semibold"
              >
                DM us on Instagram →
              </motion.a>
            </div>

            {/* Right Column: Tally Form Embed */}
            <div className="sticky top-24">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-2 shadow-2xl border border-gray-100 min-h-[530px]">
                  <iframe 
                    data-tally-src="https://tally.so/embed/mRQL7p?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                    loading="lazy" 
                    width="100%" 
                    height="530" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0" 
                    title="BlueDot - Contact"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[rgb(243,246,245)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.span
              variants={blurSlideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="inline-block px-4 py-2 bg-[rgba(53,81,180,0.1)] text-[#3551B4] rounded-full text-sm font-semibold mb-6"
            >
              FAQ
            </motion.span>
            <motion.h2
              variants={blurSlideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-[rgb(19,38,27)] mb-4"
            >
              Frequently asked questions
            </motion.h2>
            <motion.p
              variants={blurSlideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[rgb(94,107,100)]"
            >
              Here are the top questions our clients ask before getting started.
            </motion.p>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      <Footer />
    </div>
  );
}