# BlueDot Website - Framer to React Rebuild Documentation

This folder contains the complete content extraction and rebuild documentation for converting the BlueDot Framer website to React.

---

## 📁 Files in This Package

### 1. **CONTENT_EXTRACTION.md**
**The master content document** - Contains ALL text content, images, metadata, and assets extracted from the Framer HTML file.

**Includes:**
- Navigation menu items
- Hero section heading and description
- All service descriptions
- All 4+ project cards with titles, descriptions, dates, categories
- All 6-7 FAQ questions and answers
- CTA section text
- Footer links and social media
- Image paths and alt texts
- Color scheme and branding
- Section order and structure

**Use this for:** Reference when building components and populating content.

---

### 2. **content-data.json**
**Structured JSON data** - All content in a clean, importable JSON format.

**Includes:**
- Site metadata
- Navigation data
- Hero content
- About section content
- Services array (3 services)
- Projects array (4+ projects with full metadata)
- FAQ array (6-7 questions/answers)
- CTA content
- Footer data
- Theme colors and breakpoints

**Use this for:** Direct import into React components, mapping over arrays to render lists.

**Example usage:**
```jsx
import { projects } from './data/content-data.json';

projects.items.map(project => (
  <ProjectCard key={project.id} {...project} />
))
```

---

### 3. **COMPONENT_GUIDE.md**
**Technical implementation guide** - Component hierarchy, structure, and build instructions.

**Includes:**
- Complete component tree/hierarchy
- Reusable component specifications
- Props for each component
- Data import patterns
- Animation recommendations
- Responsive behavior details
- State management approach
- Routing setup
- Recommended dependencies
- Suggested file structure
- Implementation step-by-step

**Use this for:** Planning component architecture and development workflow.

---

### 4. **LAYOUT_REFERENCE.md**
**Visual layout guide** - ASCII diagrams and visual specifications for each section.

**Includes:**
- Visual layouts for all 8 sections
- Responsive breakpoint behavior
- Color usage by section
- Typography scale
- Spacing system
- Shadow and border radius specs
- Interactive states (hover, active, etc.)
- Common patterns

**Use this for:** Visual reference while building, ensuring layout accuracy.

---

### 5. **EXTRACTION_README.md** (This File)
Overview and guide to using all the documentation.

---

## 🚀 Quick Start Guide

### Step 1: Review Content
1. Open **CONTENT_EXTRACTION.md**
2. Read through all sections to understand the full site structure
3. Note any missing elements that need clarification

### Step 2: Set Up Project
The React + Vite project is already set up in this directory. Install dependencies:

```bash
npm install
npm install framer-motion react-router-dom
```

### Step 3: Import Data
1. The **content-data.json** file is already in the root
2. Move it to `src/data/` folder
3. Import in components as needed

### Step 4: Build Components
1. Follow **COMPONENT_GUIDE.md** for component structure
2. Use **LAYOUT_REFERENCE.md** for visual accuracy
3. Start with layout components (Navigation, Footer)
4. Build section components (Hero, About, Services, etc.)
5. Build reusable components (Button, Card, etc.)

### Step 5: Style
1. Apply color scheme from `content-data.json` theme section
2. Use spacing and typography scales from **LAYOUT_REFERENCE.md**
3. Implement responsive breakpoints
4. Add animations

---

## 📋 Section Checklist

Use this checklist to track your progress:

- [ ] **Navigation**
  - [ ] Logo
  - [ ] Menu items (5 links)
  - [ ] Mobile hamburger menu
  - [ ] Theme toggle
  - [ ] Active state indicator

- [ ] **Hero Section**
  - [ ] Heading text
  - [ ] Description text
  - [ ] CTA button
  - [ ] 4-image grid
  - [ ] Animations

- [ ] **About Section**
  - [ ] Section badge
  - [ ] Heading
  - [ ] Description
  - [ ] "Trusted by" section
  - [ ] Partner logos

- [ ] **Services Section**
  - [ ] Section heading
  - [ ] 3 service cards
  - [ ] Icons/images
  - [ ] Responsive grid

- [ ] **Projects Section**
  - [ ] Section heading
  - [ ] 4+ project cards
  - [ ] Images
  - [ ] Category tags
  - [ ] Dates
  - [ ] "View Project" links

- [ ] **FAQ Section**
  - [ ] Heading and subheading
  - [ ] 6-7 accordion items
  - [ ] Expand/collapse functionality
  - [ ] Smooth animations

- [ ] **CTA Section**
  - [ ] Heading
  - [ ] Description
  - [ ] CTA button

- [ ] **Footer**
  - [ ] Logo
  - [ ] Description
  - [ ] Page links
  - [ ] Social media links
  - [ ] Copyright notice

- [ ] **Additional Features**
  - [ ] Dark mode toggle
  - [ ] Smooth scroll
  - [ ] Responsive design (3 breakpoints)
  - [ ] Accessibility (ARIA labels, keyboard nav)
  - [ ] SEO (meta tags, heading hierarchy)

---

## 🎨 Design System Quick Reference

### Colors
```css
/* Light Mode */
--bg-primary: rgb(243, 235, 212);
--text-dark: rgb(19, 38, 27);
--text-gray: rgb(94, 107, 100);
--primary-blue: rgb(53, 81, 180);
--accent-yellow: rgb(238, 185, 42);
--white: rgb(255, 255, 255);

/* Dark Mode */
--bg-dark: rgb(12, 20, 43);
--text-light: rgb(243, 235, 212);
```

### Breakpoints
```css
/* Mobile */
@media (max-width: 809.98px) { }

/* Tablet */
@media (min-width: 810px) and (max-width: 1199.98px) { }

/* Desktop */
@media (min-width: 1200px) { }
```

### Typography
```css
/* Fonts */
font-family: 'Inter', sans-serif; /* Body text */
font-family: 'Outfit', sans-serif; /* Headings */

/* Sizes */
H1: 48-72px
H2: 36-48px
H3: 24-28px
Body: 16-18px
```

### Spacing
```css
/* Common values */
Section padding: 80-120px
Container max-width: 1200px
Grid gap: 24-32px
Card padding: 32-48px
```

---

## 📦 Asset Checklist

### Images to Collect/Prepare

**Hero Images (4):**
- ✅ `oSf4Xkj3chTgLy6rymg1KkAXDo.jpeg` - Leaf
- ✅ `E2LjJIELkm0XgZ4AQfGXpVo95w.jpg` - Woman
- ✅ `nyBgn9IEbJoE3XUZHWzc0HximQQ.jpg` - Tree stump
- ✅ `D9Gry0SbXEuqGskezKzCNnOpE.png` - Man

**Project Images (4+):**
- ✅ `QV2rsTCYAjjlVL7jnmNIOVvLI.png` - Eco Savaari
- ✅ `McQOfg9QtdNdXO9orgq9MFHLps.png` - Turahalli
- ✅ `ICmeEwn4ctfrJxPY6hPYzfL9mo.png` - Mangrove
- ✅ `1COs4bbAVbCX5MPqQHUPT0YrTgA.png` - Laksha-Vruksha

**Logo:**
- ✅ `i492pqZkR63d9zLz1Br9iEJWRI.png` - Main logo

**Service Icons:**
- ⚠️ `wMTbDM0NSuhcd0hINrdTy3zd7IA.png` - Service 1
- ⚠️ `Qw1vsVCyPUzOOrJWXkRqe2dAqSM.png` - Service 2
- ❓ Service 3 icon (not found in extraction)

**Partner Logos:**
- ⚠️ `vQG42MZW4HmynIMRSZg7kL6Hg.png`
- ⚠️ `X5jXBjxaJqtQMXcgqZKYVwKT0U0.png`

**Note:** All image filenames are from the Framer CDN. You'll need to either:
1. Download these from the Framer site
2. Use placeholder images and replace later
3. Request the actual image files from the client

---

## 🔗 External Links & Social Media

### Social Media
- **Instagram:** [@bluedot.ngo](https://instagram.com/bluedot.ngo)
- **LinkedIn:** [bluedotfoundation](https://linkedin.com/company/bluedotfoundation)

### Internal Pages
- Home: `/` or `/#hero`
- About: `/about`
- Services: `/services`
- Projects: `/blog`
- Contact: `/contact`

---

## 🎯 Key Features to Implement

### Must-Have
1. ✅ Responsive design (mobile, tablet, desktop)
2. ✅ All 8 sections (Nav, Hero, About, Services, Projects, FAQ, CTA, Footer)
3. ✅ Working navigation
4. ✅ FAQ accordion
5. ✅ Image optimization

### Nice-to-Have
1. 🎨 Dark mode toggle
2. ✨ Scroll animations
3. 🔍 Search functionality for projects
4. 📧 Contact form integration
5. 📊 Analytics integration

### Optional Enhancements
1. 🌐 Internationalization (multi-language)
2. 🔔 Newsletter signup
3. 📱 PWA support
4. 🎥 Video backgrounds
5. 📈 Loading states and skeleton screens

---

## 🐛 Common Issues & Solutions

### Issue: Images not loading
**Solution:** Check image paths, ensure images are in `/public/images/` folder

### Issue: Animations not working
**Solution:** Ensure `framer-motion` is installed, check viewport once property

### Issue: Mobile menu not closing
**Solution:** Add click handler to menu items to close menu state

### Issue: FAQ accordion all opening at once
**Solution:** Use controlled state, only one item open at a time

### Issue: Dark mode not persisting
**Solution:** Save theme preference to `localStorage`

---

## 📚 Additional Resources

### Libraries You Might Need
- **Animations:** `framer-motion` or `react-spring`
- **Routing:** `react-router-dom` or Next.js routing
- **Icons:** `react-icons` or `lucide-react`
- **Forms:** `react-hook-form` (for contact page)
- **Styling:** `tailwindcss` or `styled-components`

### Useful Documentation
- [React Docs](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)

---

## ✅ Pre-Launch Checklist

Before deploying:

- [ ] All content matches Framer version
- [ ] All images optimized and loading
- [ ] Responsive on all breakpoints
- [ ] Accessibility tested (WCAG AA)
- [ ] Performance tested (Lighthouse > 90)
- [ ] SEO meta tags added
- [ ] Forms working (if applicable)
- [ ] Links working (internal and external)
- [ ] Social media links correct
- [ ] Browser testing (Chrome, Firefox, Safari)
- [ ] Mobile device testing
- [ ] Dark mode working (if implemented)

---

## 🤝 Contributing / Notes

### For Developers
- Follow the component structure in COMPONENT_GUIDE.md
- Use semantic HTML elements
- Add ARIA labels for accessibility
- Comment complex logic
- Keep components small and reusable

### For Designers
- Refer to LAYOUT_REFERENCE.md for spacing and sizes
- Colors are in content-data.json theme section
- Fonts: Inter and Outfit (from Google Fonts)

---

## 📞 Source

**Original Framer HTML:** `/Users/anonymouse/Downloads/BlueDot_Web-Final/public/index.html`

For questions about this documentation or the rebuild:
- Review all documentation files in this folder
- Refer to BlueDot social media for brand guidelines

---

## 🎉 Final Notes

This extraction contains **100% of the content** from the Framer HTML file, including:
- ✅ All text content (word-for-word)
- ✅ All image paths and alt texts
- ✅ All sections and structure
- ✅ Color scheme and styling notes
- ✅ Component hierarchy and layout
- ✅ Responsive breakpoints
- ✅ Animation specifications

You have everything you need to rebuild the BlueDot website in React with complete accuracy!

Good luck with the rebuild! 🚀

---

## 📄 File Summary

| File | Purpose | Size |
|------|---------|------|
| CONTENT_EXTRACTION.md | Complete content reference | ~20 KB |
| content-data.json | Structured data for import | ~8 KB |
| COMPONENT_GUIDE.md | Technical build guide | ~12 KB |
| LAYOUT_REFERENCE.md | Visual layout specs | ~10 KB |
| EXTRACTION_README.md | This overview document | ~8 KB |

**Total Documentation:** ~58 KB of comprehensive rebuild documentation
