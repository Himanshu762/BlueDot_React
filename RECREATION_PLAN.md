# BlueDot - Exact Framer HTML Recreation Plan

## Overview
This document outlines the complete recreation of the Framer HTML version in React with exact detail.

## Component Analysis

### Core Animation Patterns
1. **Initial State**: `opacity: 0, transform: translateY(-50px)`
2. **Animated State**: `opacity: 1, transform: none`
3. **Performance**: `will-change: transform` on animated elements
4. **Backdrop Blur**: `blur(10px)` and `blur(8px)` for glassmorphism effects

### Opacity Values Used
- 0 (hidden/initial)
- 0.001 (nearly hidden)
- 0.5 (semi-transparent)
- 0.6 (semi-transparent)
- 1 (fully visible)

### Transform Patterns
- `translateY(-50px)` - Slide down animation initial
- `translateY(50px)` - Slide up animation initial
- `translateX(-50%)` - Center alignment
- `scale(0.95)` - Scale-in animation
- `rotate(90deg)` - Icon rotation

## Section-by-Section Breakdown

### 1. Navbar
**Components:**
- Background Blur layer (backdrop-filter: blur(10px))
- Logo with animation
- Nav Links with animated slider underline
- Desktop/Tablet/Mobile variants
- Contact button with hover effects

**Animations:**
- Slider animation with spring physics
- Link hover states
- Mobile menu slide-in

### 2. Hero Section
**Components:**
- Container
- Heading with staggered animation
- Text wrapper
- Buttons container
- Icon elements

**Animations:**
- All text elements: `opacity: 0, translateY(-50px)` initial
- Staggered reveal on load
- Button hover with scale and color transition

### 3. Services Section
**Key Features:**
- "Where Strategy Meets Impact" heading
- Featured card layouts
- Image carousels/sliders in each service
- Variant system (Featured, Featured - Flipped)

**Components Required:**
- Slider components (37+ per section)
- Image loading with optimization
- Card hover effects
- Responsive variants

### 4. Projects/Blog Section
**Components:**
- Blog Items container
- Card grid with Featured layouts
- Image galleries
- Category tags
- Date displays

**Animations:**
- Scroll-triggered reveals
- Image hover scale
- Card lift on hover

### 5. FAQ Section
**Components:**
- Question/Answer pairs
- Plus icon with rotation
- Closed/Open states
- Interactive accordion

**Animations:**
- Height transition
- Icon rotation (90deg)
- Content fade-in

## Implementation Priority

### Phase 1: Foundation (Critical)
1. ✅ Extract all component structures
2. ⏳ Create animation system matching Framer
3. ⏳ Build carousel/slider component library
4. ⏳ Implement variant system for responsive layouts

### Phase 2: Core Components
5. ⏳ Recreate Navbar with exact animations
6. ⏳ Recreate Hero section
7. ⏳ Recreate Services section with sliders
8. ⏳ Recreate Projects section with galleries
9. ⏳ Recreate FAQ with animated accordion

### Phase 3: Detail Pages
10. ⏳ Recreate project detail pages (353KB each!)
11. ⏳ Recreate service pages
12. ⏳ Recreate about page
13. ⏳ Recreate contact page

### Phase 4: Interactions & Polish
14. ⏳ Add all micro-interactions
15. ⏳ Implement parallax effects
16. ⏳ Add scroll-based animations
17. ⏳ Optimize performance (will-change, lazy loading)
18. ⏳ Test all animations and timing

## Technical Requirements

### New Dependencies Needed
- `swiper` or `embla-carousel-react` - For advanced carousels
- `react-spring` or enhanced `framer-motion` - For spring physics
- `react-intersection-observer` - For scroll triggers
- `sharp` or image optimization - For image loading

### Animation Library Setup
- Create reusable animation variants
- Implement stagger animations
- Create scroll-triggered animation hooks
- Build spring physics system

### Component Library Needed
1. Carousel/Slider with:
   - Touch/swipe support
   - Navigation dots
   - Thumbnail preview
   - Auto-play
   - Multiple variants

2. Image Component with:
   - Lazy loading
   - Blur-up loading
   - srcset optimization
   - Hover effects

3. Card Components:
   - Featured variant
   - Featured - Flipped variant
   - Default variant
   - With image galleries

4. Accordion/FAQ:
   - Animated height
   - Icon rotation
   - Smooth transitions

## File Size Targets
- Homepage: ~15KB → 50-100KB (with components)
- Project pages: ~4KB → 30-50KB (with rich content)
- Service pages: ~6KB → 30-50KB (with galleries)

## Next Steps
1. Start with carousel component library
2. Build animation system
3. Recreate components section by section
4. Test against Framer HTML version side-by-side
