# BlueDot React Component Structure Guide

> Recommended component architecture for recreating the BlueDot website in React + Tailwind CSS

---

## Directory Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Container.jsx
│   │   └── Layout.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── FAQ.jsx
│   │   ├── CTA.jsx
│   │   ├── Mission.jsx
│   │   ├── Team.jsx
│   │   └── ContactForm.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Accordion.jsx
│   │   ├── Icon.jsx
│   │   └── Image.jsx
│   └── common/
│       ├── Navigation.jsx
│       ├── MobileMenu.jsx
│       └── SocialLinks.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── data/
│   ├── services.js
│   ├── projects.js
│   ├── faqs.js
│   └── team.js
├── assets/
│   └── images/
│       ├── logos/
│       ├── projects/
│       ├── team/
│       ├── icons/
│       └── backgrounds/
└── styles/
    └── tailwind.config.js
```

---

## Component Breakdown

### 1. Layout Components

#### Header.jsx
```jsx
// Sticky navigation header with logo and menu
// Props: transparent (boolean for transparent variant)
<Header transparent={false} />
```

**Features:**
- Logo (clickable, links to home)
- Navigation menu (About, Services, Contact)
- Mobile hamburger menu
- Sticky/fixed positioning
- Transparent variant for hero sections

---

#### Footer.jsx
```jsx
// Footer with links, social media, and branding
<Footer />
```

**Sections:**
- Logo/branding
- Navigation links
- Social media icons (Instagram, LinkedIn, Facebook, Twitter)
- Copyright text
- Background decorative elements

---

#### Container.jsx
```jsx
// Max-width container for content sections
<Container className="custom-class">
  {children}
</Container>
```

**Purpose:**
- Consistent max-width across sections
- Responsive padding
- Centered content

---

### 2. Section Components

#### Hero.jsx
```jsx
// Hero section with headline, tagline, and CTA
<Hero
  title="BlueDot - Reviving India's Blue Ecosystems"
  tagline="Delivering on-ground environmental solutions"
  description="Mission statement..."
  backgroundImage="/path/to/image"
  ctaText="Get Started"
  ctaLink="/contact"
/>
```

**Variants:**
- Homepage hero (full mission statement)
- About page hero (team introduction)
- Contact page hero (join movement message)

---

#### Services.jsx
```jsx
// 3-column grid of service cards
<Services />
```

**Data Structure:**
```js
const services = [
  {
    id: 1,
    title: "Lake Conservation",
    description: "India's lakes are choking with silt...",
    image: "/images/lake-conservation.jpeg",
    icon: "lake"
  },
  // ... more services
]
```

---

#### Projects.jsx
```jsx
// Featured projects showcase with images
<Projects />
```

**Features:**
- Image gallery/slider
- Project cards with title, description, image
- Grid or masonry layout
- Hover effects

---

#### FAQ.jsx
```jsx
// Accordion-style FAQ section
<FAQ faqs={faqData} />
```

**Data Structure:**
```js
const faqs = [
  {
    question: "How can I volunteer with BlueDot?",
    answer: "We run cleanups, restoration projects..."
  },
  // ... more FAQs
]
```

---

#### CTA.jsx
```jsx
// Call-to-action section
<CTA
  title="Ready to restore what nature gave us?"
  description="Connect with us to align your sustainability goals..."
  ctaText="Contact Us"
  ctaLink="/contact"
  backgroundStyle="gradient"
/>
```

**Variants:**
- Default (blue gradient background)
- Inverted (dark background)
- Large (full-screen height)

---

#### Mission.jsx
```jsx
// Mission statement with process/values
<Mission />
```

**Sections:**
- Mission heading
- Mission text
- Process steps (Ideation, Implementation, Assessment)
- Visual icons/images

---

#### Team.jsx
```jsx
// Team member grid
<Team members={teamData} />
```

**Data Structure:**
```js
const team = [
  {
    id: 1,
    name: "Harsha Tej",
    role: "Founder",
    bio: "Harsha Tej is an environmentalist...",
    image: "/images/team/harsha.png",
    isFounder: true
  },
  // ... more team members
]
```

---

#### ContactForm.jsx
```jsx
// Contact form with fields
<ContactForm />
```

**Fields:**
- Name
- Email
- Phone (optional)
- Interest type (Volunteer, Partner, Intern, Other)
- Message
- Submit button

---

### 3. UI Components

#### Button.jsx
```jsx
// Reusable button component
<Button
  variant="primary" // primary, secondary, inverted
  size="default" // small, default, large
  onClick={handleClick}
>
  Button Text
</Button>
```

**Variants:**
- Primary (blue background)
- Secondary (outlined)
- Inverted (white background for dark sections)

---

#### Card.jsx
```jsx
// Reusable card component for services, projects, team
<Card
  image="/path/to/image"
  title="Card Title"
  description="Card description..."
  link="/learn-more"
/>
```

**Variants:**
- Service card (icon + title + description)
- Project card (image + title + description + link)
- Team card (photo + name + role + bio)

---

#### Accordion.jsx
```jsx
// Accordion/collapsible component for FAQs
<Accordion>
  <AccordionItem title="Question">
    Answer content
  </AccordionItem>
</Accordion>
```

**Features:**
- Click to expand/collapse
- Smooth animation
- Icon rotation (plus/minus or chevron)

---

#### Icon.jsx
```jsx
// Icon component for social media, UI elements
<Icon name="instagram" size="lg" color="primary" />
```

**Icon Types:**
- Social media (Instagram, LinkedIn, Facebook, Twitter)
- UI (Plus, Minus, Arrow, Chevron)
- Service icons (custom or from icon library)

---

### 4. Page Components

#### Home.jsx
```jsx
const Home = () => {
  return (
    <Layout>
      <Hero {...heroData} />
      <Services />
      <Projects />
      <FAQ faqs={homeFaqs} />
      <CTA {...ctaData} />
    </Layout>
  );
};
```

---

#### About.jsx
```jsx
const About = () => {
  return (
    <Layout>
      <Hero {...aboutHeroData} />
      <section className="about-story">
        {/* Organization description */}
      </section>
      <Mission />
      <Team members={teamData} />
      <CTA {...ctaData} />
    </Layout>
  );
};
```

---

#### Contact.jsx
```jsx
const Contact = () => {
  return (
    <Layout>
      <Hero {...contactHeroData} />
      <ContactForm />
      <FAQ faqs={contactFaqs} />
    </Layout>
  );
};
```

---

## Data Files

### data/services.js
```js
export const services = [
  {
    id: 'lake-conservation',
    title: 'Lake Conservation',
    description: 'India\'s lakes are choking with silt, shrinking water storage and threatening both ecosystems and farmer livelihoods.',
    image: '/images/services/lake-conservation.jpeg',
    icon: 'lake'
  },
  {
    id: 'native-afforestation',
    title: 'Native Afforestation',
    description: 'Planting native trees to restore ecosystems and biodiversity.',
    image: '/images/services/afforestation.jpg',
    icon: 'tree'
  },
  {
    id: 'wildlife-conservation',
    title: 'Wildlife Conservation',
    description: 'Mobile wildlife education bridging people, nature, and conservation.',
    image: '/images/services/wildlife.jpg',
    icon: 'wildlife'
  }
];
```

---

### data/projects.js
```js
export const projects = [
  {
    id: 'wildlife-education',
    title: 'Wildlife education, one district at a time',
    description: '',
    image: '/images/projects/wildlife-education.png',
    category: 'education'
  },
  {
    id: 'turahalli-cleanup',
    title: 'Turahalli Forest Cleanup Drive',
    description: 'Community-led cleanup to protect Bengaluru\'s last forest patch.',
    image: '/images/projects/turahalli.png',
    category: 'cleanup'
  },
  {
    id: 'chennai-mangroves',
    title: 'Mangrove Plantation- Chennai',
    description: 'Reviving Chennai\'s mangroves for urban ecological resilience.',
    image: '/images/projects/mangroves.png',
    category: 'plantation'
  },
  {
    id: 'native-trees',
    title: 'Restoring ecosystems one native tree at a time',
    description: '',
    images: [
      '/images/projects/tree-1.png',
      '/images/projects/tree-2.png',
      '/images/projects/tree-3.png',
      // ... more images
    ],
    category: 'afforestation'
  }
];
```

---

### data/faqs.js
```js
export const faqs = [
  {
    id: 'volunteer',
    question: 'How can I volunteer with BlueDot?',
    answer: 'We run cleanups, restoration projects, workshops, and more. Contact us to sign up for upcoming events.'
  },
  {
    id: 'experience',
    question: 'Do I need experience or skills to help out?',
    answer: 'Not always! Most of our initiatives are beginner-friendly. We\'ll provide all necessary orientation and guidance.'
  },
  {
    id: 'partnership',
    question: 'We\'re a company. Can we partner with you?',
    answer: 'Absolutely. From CSR partnerships to employee engagement programs, we offer tailored collaborations. Contact us for further details'
  },
  {
    id: 'csr',
    question: 'Can BlueDot support our CSR goals?',
    answer: 'Yes, we co-design nature-positive CSR initiatives that are measurable, transparent, and community-rooted.'
  },
  {
    id: 'measurement',
    question: 'How do you measure project success?',
    answer: 'We use a mix of ecological data, community feedback, and third-party evaluation to assess real-world impact.'
  },
  {
    id: 'visit',
    question: 'Can I visit your project sites?',
    answer: 'Yes, we love showing our work! Visits are welcome with prior scheduling — just drop us a message.'
  },
  {
    id: 'contact',
    question: 'How do I reach your team directly?',
    answer: 'You can email us, call us, or use our contact form. We typically respond within 48 hours.'
  }
];
```

---

### data/team.js
```js
export const team = [
  {
    id: 'harsha-tej',
    name: 'Harsha Tej',
    role: 'Founder',
    bio: 'Harsha Tej is an environmentalist with a deep commitment to ecological restoration and sustainability. With a background in environmental science, he has led impactful projects across Karnataka for over a decade. He has been instrumental in creating and restoring 18 lakes and has driven afforestation initiatives that resulted in the planting of over 1.5 lakh trees. His work empowers communities and promotes long-term environmental stewardship. Through BlueDot Foundation, Harsha continues to lead efforts that foster climate resilience and a greener, more sustainable future',
    image: '/images/team/harsha-tej.png',
    isFounder: true
  },
  {
    id: 'diganth-manchale',
    name: 'Diganth Manchale',
    role: 'Team Member',
    image: '/images/team/diganth.png',
    isFounder: false
  },
  {
    id: 'mohith-rajshekar',
    name: 'Mohith Rajshekar',
    role: 'Team Member',
    image: '/images/team/mohith.png',
    isFounder: false
  },
  {
    id: 'himanshu-venugopal',
    name: 'Himanshu Venugopal',
    role: 'Team Member',
    image: '/images/team/himanshu.png',
    isFounder: false
  },
  {
    id: 'chaitali-raizada',
    name: 'Chaitali Raizada',
    role: 'Team Member',
    image: '/images/team/chaitali.png',
    isFounder: false
  },
  {
    id: 'rammohan-paranjape',
    name: 'Rammohan Paranjape',
    role: 'Team Member',
    image: '/images/team/rammohan.png',
    isFounder: false
  }
];
```

---

## Tailwind Configuration

### tailwind.config.js
```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#b3d9ff',
          200: '#80c0ff',
          300: '#4da7ff',
          400: '#1a8eff',
          500: '#0075e6', // Main blue
          600: '#005db3',
          700: '#004580',
          800: '#002d4d',
          900: '#001a2e',
        },
        secondary: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50', // Green
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-blue': 'linear-gradient(135deg, #0075e6 0%, #004580 100%)',
        'gradient-green': 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

---

## Responsive Breakpoints

Following Tailwind's default breakpoints:
- **sm:** 640px (Mobile landscape)
- **md:** 768px (Tablet)
- **lg:** 1024px (Desktop)
- **xl:** 1280px (Large desktop)
- **2xl:** 1536px (Extra large)

### Usage Pattern
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

---

## Animation & Transitions

### Recommended Libraries
- **Framer Motion** - For page transitions, scroll animations
- **React Intersection Observer** - For scroll-triggered animations
- **Swiper** or **React Slick** - For image carousels/sliders

### Example Scroll Animation
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

---

## Implementation Checklist

### Phase 1: Setup & Foundation
- [ ] Initialize React app (Vite or Create React App)
- [ ] Install and configure Tailwind CSS
- [ ] Set up folder structure
- [ ] Create data files
- [ ] Download all images and organize in assets folder
- [ ] Configure fonts (Google Fonts: Outfit, Poppins, Inter)

### Phase 2: Core Components
- [ ] Build Layout component (Header + Footer)
- [ ] Create Container component
- [ ] Build Button component with variants
- [ ] Create Card component with variants
- [ ] Build Icon component

### Phase 3: Section Components
- [ ] Hero section (with variants)
- [ ] Services section
- [ ] Projects/Portfolio section
- [ ] FAQ accordion component
- [ ] CTA section
- [ ] Mission section
- [ ] Team section
- [ ] Contact form

### Phase 4: Pages
- [ ] Homepage
- [ ] About page
- [ ] Contact page
- [ ] 404 page (optional)

### Phase 5: Interactivity & Polish
- [ ] Add scroll animations
- [ ] Implement mobile menu
- [ ] Add form validation
- [ ] Image lazy loading
- [ ] Smooth scrolling
- [ ] Hover effects
- [ ] Page transitions

### Phase 6: Optimization
- [ ] Image optimization (WebP, lazy loading)
- [ ] Code splitting
- [ ] SEO meta tags
- [ ] Accessibility audit
- [ ] Performance testing
- [ ] Mobile responsiveness testing

---

## Additional Notes

### Image Optimization
- Convert large JPEGs to WebP format
- Use responsive images with srcset
- Implement lazy loading for below-fold images
- Consider using a CDN for image delivery

### Accessibility Considerations
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Alt text for all images
- Focus states for all interactive elements

### SEO Best Practices
- Proper heading hierarchy (H1 → H6)
- Meta descriptions for each page
- Open Graph tags for social sharing
- Structured data (JSON-LD) for organization info
- XML sitemap
- robots.txt

---

**End of Component Structure Guide**

*Use this guide alongside the content-extraction.md file to build a complete, production-ready React application for BlueDot.*
