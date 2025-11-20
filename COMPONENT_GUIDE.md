# React Component Structure Guide
**For rebuilding BlueDot website from Framer**

---

## Component Hierarchy

```
App
├── Navigation
│   ├── Logo
│   ├── NavLinks (Desktop)
│   ├── MobileMenu (Mobile/Tablet)
│   └── ThemeToggle
│
├── Hero
│   ├── HeroContent
│   │   ├── Heading
│   │   ├── Description
│   │   └── CTAButton
│   └── HeroImageGrid (4 images)
│
├── About
│   ├── SectionBadge
│   ├── Heading
│   ├── Description
│   └── TrustedBySection
│       └── PartnerLogos (slider/grid)
│
├── Services
│   ├── Heading
│   └── ServiceCards (map 3 items)
│       ├── Icon
│       ├── Title
│       └── Description
│
├── Projects
│   ├── Heading
│   └── ProjectCards (map 4+ items)
│       ├── Image
│       ├── Categories/Tags
│       ├── Title
│       ├── Description
│       ├── Date
│       └── CTALink
│
├── FAQ
│   ├── Heading
│   ├── Subheading
│   └── FAQAccordion (map 6-7 items)
│       ├── Question
│       └── Answer (collapsible)
│
├── CTA
│   ├── Heading
│   ├── Description
│   └── CTAButton
│
└── Footer
    ├── Description
    ├── FooterSections
    │   └── PageLinks
    ├── SocialLinks
    └── Copyright
```

---

## Reusable Components to Build

### 1. **Button**
```jsx
<Button
  variant="primary" | "secondary"
  size="large" | "medium" | "small"
  href="/link"
>
  Button Text
</Button>
```

**Props:**
- `variant`: "primary" (blue) or "secondary" (outline)
- `size`: button size
- `href`: link destination
- `onClick`: click handler
- `className`: additional classes

---

### 2. **SectionBadge**
```jsx
<SectionBadge>About</SectionBadge>
```

**Styling:**
- Blue background (rgb(53, 81, 180))
- White text
- Rounded corners
- Small padding

---

### 3. **ServiceCard**
```jsx
<ServiceCard
  icon="/path/to/icon.png"
  title="Lake Conservation"
  description="India's lakes are choking..."
/>
```

**Props:**
- `icon`: image path
- `title`: service name
- `description`: service description

**Layout:**
- Icon at top
- Title below (h3)
- Description text
- Card with border/shadow
- Hover effects

---

### 4. **ProjectCard**
```jsx
<ProjectCard
  image="/path/to/image.png"
  imageAlt="Alt text"
  title="Eco Savaari"
  description="Wildlife education..."
  date="Jun 30, 2025"
  categories={["Wildlife", "Education"]}
  link="/projects/eco-savaari"
/>
```

**Props:**
- `image`: project image
- `imageAlt`: alt text
- `title`: project name
- `description`: brief description
- `date`: project date
- `categories`: array of tags
- `link`: project detail link

**Layout:**
- Image at top (full width)
- Category badges overlay on image or below
- Title (h3)
- Description
- Date stamp
- "View Project" link/button

---

### 5. **FAQItem**
```jsx
<FAQItem
  question="How can I volunteer?"
  answer="We run cleanups, restoration..."
  isOpen={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
/>
```

**Props:**
- `question`: FAQ question
- `answer`: FAQ answer
- `isOpen`: accordion state
- `onToggle`: toggle function

**Behavior:**
- Accordion style
- Click to expand/collapse
- Smooth animation
- Icon rotation on open/close

---

### 6. **ImageGrid** (for Hero)
```jsx
<ImageGrid images={heroImages} />
```

**Layout:**
- 4 images in responsive grid
- Different sizes for visual interest
- Scale animation on load
- Responsive: changes layout on mobile/tablet/desktop

---

## Data Import Pattern

### Example component using data:

```jsx
import { projects } from '../data/content-data.json';

function ProjectsSection() {
  return (
    <section className="projects">
      <h2>{projects.heading}</h2>
      <div className="project-grid">
        {projects.items.map(project => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
```

---

## Animation Recommendations

### Scroll Animations:
Use `framer-motion`, `AOS`, or `Intersection Observer`:

```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

### Animation Targets:
1. **Hero elements**: Fade in from bottom with stagger
2. **Service cards**: Fade in on scroll
3. **Project cards**: Fade in with slight scale
4. **FAQ items**: Smooth expand/collapse
5. **Navigation**: Active state with underline animation
6. **Hero images**: Scale from 1.1 to 1 on load

---

## Responsive Behavior

### Navigation:
- **Desktop (≥1200px)**: Full horizontal nav with all links
- **Tablet (810-1199px)**: Compressed nav, some links visible
- **Mobile (<810px)**: Hamburger menu, slide-out drawer

### Hero:
- **Desktop**: 4-image grid (2x2)
- **Tablet**: 4-image grid (adjusted spacing)
- **Mobile**: 2x2 grid or vertical stack

### Projects:
- **Desktop**: 4 cards in a row or 2x2 grid
- **Tablet**: 2 cards per row
- **Mobile**: 1 card per row (vertical stack)

### Services:
- **Desktop**: 3 cards in a row
- **Tablet**: 3 cards (smaller)
- **Mobile**: 1 card per row (vertical stack)

---

## Styling Approach

### Option 1: Tailwind CSS
```jsx
<div className="bg-[rgb(243,235,212)] rounded-lg p-6 shadow-lg">
  {/* Content */}
</div>
```

### Option 2: CSS Modules
```jsx
import styles from './ServiceCard.module.css';

<div className={styles.card}>
  {/* Content */}
</div>
```

### Option 3: Styled Components
```jsx
const Card = styled.div`
  background: rgb(243, 235, 212);
  border-radius: 8px;
  padding: 24px;
`;
```

---

## State Management

### Theme State (Light/Dark Mode):
```jsx
const [theme, setTheme] = useState('light');
```
Store in Context or use localStorage to persist

### FAQ Accordion State:
```jsx
const [openIndex, setOpenIndex] = useState(null);
```
Only one item open at a time

### Mobile Menu State:
```jsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

---

## Image Handling

### Best Practice:
1. Store images in `/public/images/` folder
2. Use Next.js Image component for optimization:
```jsx
import Image from 'next/image';

<Image
  src="/images/oSf4Xkj3chTgLy6rymg1KkAXDo.jpeg"
  alt="Leaf closeup"
  width={600}
  height={600}
  quality={85}
/>
```

3. Or use standard img with lazy loading:
```jsx
<img
  src="/images/hero-1.jpeg"
  alt="Alt text"
  loading="lazy"
/>
```

---

## Routing

If using React Router:
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/blog" element={<ProjectsPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
</BrowserRouter>
```

For single-page with sections:
```jsx
<a href="#hero">Home</a>
<a href="#about">About</a>
// etc.
```

---

## Key Implementation Steps

1. **Setup Project Structure**
   - Create React app (Vite or CRA)
   - Install dependencies (framer-motion, react-router, etc.)
   - Set up folder structure

2. **Import Data**
   - Copy `content-data.json` to `/src/data/`
   - Import and use in components

3. **Build Layout Components**
   - Navigation
   - Footer
   - Main layout wrapper

4. **Build Section Components**
   - Hero
   - About
   - Services
   - Projects
   - FAQ
   - CTA

5. **Build Reusable Components**
   - Button
   - Card
   - Badge
   - etc.

6. **Add Styling**
   - Set up CSS framework
   - Apply colors from theme
   - Implement responsive breakpoints

7. **Add Animations**
   - Scroll animations
   - Hover effects
   - Transitions

8. **Implement Theme Toggle**
   - Light/dark mode
   - Persist preference

9. **Test Responsiveness**
   - Mobile
   - Tablet
   - Desktop

10. **Optimize**
    - Lazy load images
    - Code splitting
    - Performance audit

---

## Dependencies Recommended

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^6.x",
    "framer-motion": "^10.x"
  },
  "devDependencies": {
    "@types/react": "^18.x",
    "vite": "^5.x",
    "tailwindcss": "^3.x" // optional
  }
}
```

---

## File Structure Suggestion

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── FAQ.jsx
│   │   └── CTA.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   └── ImageGrid.jsx
│   └── features/
│       ├── ServiceCard.jsx
│       ├── ProjectCard.jsx
│       └── FAQItem.jsx
├── data/
│   └── content-data.json
├── styles/
│   ├── globals.css
│   └── theme.css
├── hooks/
│   └── useTheme.js
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
└── App.jsx
```

---

## Additional Notes

- **Accessibility**: Add proper ARIA labels, keyboard navigation
- **SEO**: Use proper heading hierarchy, meta tags, alt texts
- **Performance**: Lazy load images, code split routes
- **Forms**: Will need to build contact form separately (not in extracted content)
- **Analytics**: Add tracking if needed
- **Testing**: Consider unit tests for key components

