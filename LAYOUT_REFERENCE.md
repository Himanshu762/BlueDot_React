# Visual Layout Reference
**BlueDot Website - Section-by-Section Layout Guide**

---

## 1. NAVIGATION BAR

```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo]              Home  About  Services  Projects  Contact  ☀️│
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Fixed/sticky position
- Background: Translucent with blur effect
- Height: ~80px (desktop)
- Logo: Left-aligned
- Nav links: Center or right-aligned
- Theme toggle: Far right
- Active link: Yellow underline indicator
- Hover: Yellow text color

**Mobile:**
```
┌─────────────────────────────────────────┐
│ [Logo]                              ☰   │
└─────────────────────────────────────────┘
```

---

## 2. HERO SECTION

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│            [Heading: Large, bold, centered]                       │
│                                                                   │
│         [Subheading: Medium, gray, centered]                      │
│                                                                   │
│                    [Contact Us Button]                            │
│                                                                   │
│    ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐          │
│    │ Image 1 │  │ Image 2 │  │ Image 3 │  │ Image 4 │          │
│    │ (Leaf)  │  │ (Woman) │  │ (Stump) │  │  (Man)  │          │
│    └─────────┘  └─────────┘  └─────────┘  └─────────┘          │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- Full-width section
- Generous padding (80-120px top/bottom)
- Text content: Max-width 800px, centered
- Image grid: 4 columns on desktop, 2x2 on mobile
- Images: Rounded corners, aspect ratio ~1:1
- Spacing: 24px gap between images

**Animations:**
- Text: Fade in from bottom (staggered)
- Button: Fade in with slight delay
- Images: Scale from 1.1 to 1 on load

---

## 3. ABOUT SECTION

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│                       [About Badge]                               │
│                                                                   │
│              [Heading: Large, centered]                           │
│                                                                   │
│         [Body text: Medium, centered, gray]                       │
│                                                                   │
│                                                                   │
│                      Trusted by:                                  │
│                                                                   │
│    [Logo 1]  [Logo 2]  [Logo 3]  [Logo 4]  [Logo 5]             │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- Background: Light beige (same as body)
- Max-width: 1200px, centered
- Badge: Small, blue, centered
- Heading: Max-width 800px
- Partner logos: Horizontal scroll on mobile, grid on desktop
- Logo sizing: ~80-120px height

---

## 4. SERVICES SECTION

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│         [Heading: "Restoring ecosystems..." - centered]           │
│                                                                   │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐│
│   │  [Icon/Image]   │  │  [Icon/Image]   │  │  [Icon/Image]   ││
│   │                 │  │                 │  │                 ││
│   │ Lake            │  │ Native          │  │ Wildlife        ││
│   │ Conservation    │  │ Afforestation   │  │ Conservation    ││
│   │                 │  │                 │  │                 ││
│   │ [Description    │  │ [Description    │  │ [Description    ││
│   │  text...]       │  │  text...]       │  │  text...]       ││
│   │                 │  │                 │  │                 ││
│   └─────────────────┘  └─────────────────┘  └─────────────────┘│
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- 3 columns on desktop
- 1 column on mobile (stacked)
- Cards: Equal height, white/light background
- Icons: Top of card, centered, ~80px size
- Title: h3, bold, centered
- Description: Body text, gray
- Card spacing: 32px gap
- Card padding: 32-48px
- Border radius: 12-16px
- Subtle shadow on hover

---

## 5. PROJECTS SECTION

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│    [Heading: "Where Strategy Meets Impact..." - centered]         │
│                                                                   │
│   ┌────────────────┐  ┌────────────────┐  ┌────────────────┐   │
│   │ [Image:        │  │ [Image:        │  │ [Image:        │   │
│   │  Eco Savaari]  │  │  Turahalli]    │  │  Mangrove]     │   │
│   │                │  │                │  │                │   │
│   │ [Wildlife] [Ed]│  │ [Cleanup]      │  │ [Conservation] │   │
│   │                │  │                │  │                │   │
│   │ Eco Savaari    │  │ Turahalli      │  │ Mangrove       │   │
│   │                │  │ Forest...      │  │ Plantation...  │   │
│   │ Wildlife       │  │ Community-led  │  │ Reviving       │   │
│   │ education...   │  │ cleanup...     │  │ Chennai's...   │   │
│   │                │  │                │  │                │   │
│   │ Jun 30, 2025   │  │ Jun 14, 2025   │  │ May 4, 2025    │   │
│   │                │  │                │  │                │   │
│   │ [View Project] │  │ [View Project] │  │ [View Project] │   │
│   └────────────────┘  └────────────────┘  └────────────────┘   │
│                                                                   │
│   ┌────────────────┐                                             │
│   │ [Image:        │                                             │
│   │  Laksha-Vr.]   │                                             │
│   │                │                                             │
│   │ [Restoration]  │         (Continue pattern...)               │
│   │                │                                             │
│   │ Laksha-Vruksha │                                             │
│   │                │                                             │
│   │ Restoring      │                                             │
│   │ ecosystems...  │                                             │
│   │                │                                             │
│   │ Mar 16, 2025   │                                             │
│   │                │                                             │
│   │ [View Project] │                                             │
│   └────────────────┘                                             │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- Desktop: 3-4 columns (depending on container width)
- Tablet: 2 columns
- Mobile: 1 column (stacked)
- Cards: Vertical layout
- Image: Full-width at top, aspect ratio 16:9 or 4:3
- Category badges: Small pills, positioned on/near image
- Title: h3, bold
- Description: 2-3 lines, truncated if needed
- Date: Small text, gray, with icon
- Link/Button: "View Project" at bottom
- Card spacing: 24px gap
- Card border radius: 12px
- Hover effect: Lift with shadow

---

## 6. FAQ SECTION

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│              [Heading: "Frequently asked questions"]              │
│          [Subheading: "Got questions? We've answered..."]         │
│                                                                   │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │ ► How can I volunteer with BlueDot?                     │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                   │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │ ▼ Do I need experience or skills to help out?           │   │
│   │                                                          │   │
│   │   Not always! Most of our initiatives are beginner-     │   │
│   │   friendly. We'll provide all necessary orientation...  │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                   │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │ ► Can BlueDot support our CSR goals?                    │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                   │
│   [... more FAQ items ...]                                       │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- Max-width: 800px, centered
- Accordion-style items
- Each item: Full-width, stacked
- Question: Bold, left-aligned, with icon (chevron/arrow)
- Answer: Regular text, gray, padded
- Border: Bottom border on each item
- Hover: Background color change
- Expanded: Answer slides down smoothly
- Icon rotation: Arrow rotates 90° when open
- Spacing: 16px between items

---

## 7. CTA SECTION

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│                                                                   │
│        [Heading: "Ready to restore what nature gave us?"]         │
│                                                                   │
│     [Description: "Connect with us to align your                  │
│      sustainability goals..." - centered]                         │
│                                                                   │
│                    [Contact Us Button]                            │
│                                                                   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- Full-width section
- Background: Could be slightly different shade or have subtle pattern
- Text: Centered, max-width 700px
- Button: Large, prominent, centered
- Generous padding: 100-120px top/bottom
- Optional: Background image with overlay

---

## 8. FOOTER

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│  [Logo]                                                           │
│                                                                   │
│  Delivering on-ground environmental solutions for a               │
│  climate-resilient future.                                        │
│                                                                   │
│  ┌──────────────┐         ┌──────────────┐                       │
│  │ Pages        │         │ Social       │                       │
│  │              │         │              │                       │
│  │ • Home       │         │ • Instagram  │                       │
│  │ • About      │         │ • LinkedIn   │                       │
│  │ • Services   │         │              │                       │
│  │ • Projects   │         │              │                       │
│  │ • Contact    │         │              │                       │
│  └──────────────┘         └──────────────┘                       │
│                                                                   │
│  ─────────────────────────────────────────────────────────────  │
│                                                                   │
│  © 2025 BlueDot. All rights reserved.                            │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Layout Details:**
- Background: Slightly darker than body (or same)
- Logo: Top left, smaller than header
- Description: Below logo, max-width 400px
- Links: Organized in columns
- 2-3 columns on desktop
- Stacked on mobile
- Link style: No underline, gray, hover to yellow/blue
- Social: Icons + text or just icons
- Copyright: Bottom, centered or left
- Padding: 60-80px top/bottom

---

## RESPONSIVE BREAKPOINTS

### Desktop (≥1200px):
- Full navigation
- 4-column hero grid
- 3-column service cards
- 3-4 column project grid
- Multi-column footer

### Tablet (810px - 1199px):
- Slightly compressed navigation
- 4-column hero grid (smaller)
- 3-column services (or 2)
- 2-column project grid
- 2-column footer

### Mobile (<810px):
- Hamburger menu
- 2x2 hero grid or stacked
- 1-column service cards (stacked)
- 1-column project cards
- 1-column footer (stacked)

---

## COLOR USAGE BY SECTION

| Section    | Background          | Text            | Accents        |
|------------|---------------------|-----------------|----------------|
| Nav        | Translucent beige   | Dark green      | Yellow (hover) |
| Hero       | Beige               | Dark green      | Blue (button)  |
| About      | Beige               | Gray            | Blue (badge)   |
| Services   | Beige (cards white) | Dark green/gray | Blue           |
| Projects   | Beige (cards white) | Dark green/gray | Yellow (tags)  |
| FAQ        | Beige               | Dark green/gray | Blue (hover)   |
| CTA        | Beige or tinted     | Dark green      | Blue (button)  |
| Footer     | Beige or darker     | Gray            | Yellow (hover) |

---

## TYPOGRAPHY SCALE

```
H1 (Hero heading):     48-72px, Outfit Bold
H2 (Section headings): 36-48px, Outfit SemiBold
H3 (Card titles):      24-28px, Outfit Medium
Body (large):          18-20px, Inter Regular
Body (regular):        16-18px, Inter Regular
Body (small):          14-16px, Inter Regular
Button text:           16-18px, Poppins/Inter SemiBold
```

---

## SPACING SYSTEM

```
Section padding:     80-120px (top/bottom)
Container max-width: 1200-1400px
Card padding:        32-48px
Grid gap:            24-32px
Text spacing:        16-24px (between elements)
Button padding:      16px 32px
```

---

## COMMON PATTERNS

### Card Shadow:
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
/* Hover: */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
```

### Border Radius:
- Cards: 12-16px
- Buttons: 32-37px (pill shape)
- Images: 8-12px
- Badges: 16-20px

### Transitions:
```css
transition: all 0.3s ease;
```

---

## INTERACTIVE STATES

### Buttons:
- Default: Blue background, white text
- Hover: Slightly darker blue, slight lift
- Active: Even darker, scale down slightly

### Cards:
- Default: Flat with subtle shadow
- Hover: Lift with stronger shadow, slight scale up

### Links:
- Default: Gray text
- Hover: Yellow/blue color, underline
- Active: Darker shade

### Navigation:
- Active page: Yellow underline
- Hover: Yellow text color

