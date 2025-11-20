# Next Steps: Component Color Updates

## ✅ What's Been Fixed

1. **Base Styling** (`src/index.css`)
   - Background: Warm beige `rgb(243, 235, 212)`
   - Text: Dark forest green `rgb(19, 38, 27)`
   - Proper font configuration (Outfit, Inter, Poppins)

2. **Tailwind Config** (`tailwind.config.js`)
   - Added correct color palette:
     - `beige` - Main background color
     - `forest` - Dark green for text
     - `gold` - Golden yellow for accents
     - `cream` - Off-white for cards

3. **Color Documentation** (`COLOR-PALETTE.md`)
   - Complete color reference from original site
   - Usage examples for each color

## ⚠️ What Needs To Be Updated

The **component files** still use the old blue/green color scheme and need to be updated to match the original's beige/forest/gold palette.

### Files That Need Color Updates:

#### 1. **Navbar** (`src/components/Navbar.tsx`)
Current: White background with blue accents
Should be: Beige background `rgb(243, 235, 212)` with forest green text and gold accents

**Find and replace:**
```tsx
// Old
className="bg-white shadow-sm"
className="text-blue-600"
className="bg-blue-600 text-white"

// New
className="bg-beige shadow-sm"
className="text-gold"
className="bg-gold text-forest"
```

#### 2. **Footer** (`src/components/Footer.tsx`)
Current: Dark gray `bg-gray-900`
Should be: Dark forest green `bg-forest` with white text

**Find and replace:**
```tsx
// Old
className="bg-gray-900 text-white"
className="text-gray-400"

// New
className="bg-forest text-white"
className="text-white/70"
```

#### 3. **Home Page** (`src/pages/Home.tsx`)
Current: Blue/green color scheme
Should be: Beige/cream/forest/gold

**Updates needed:**
```tsx
// Hero section - change from blue to cream/beige
<section className="bg-gradient-to-b from-blue-50 to-white">
// Change to:
<section className="bg-gradient-to-b from-cream to-beige">

// Buttons - change from blue to gold
<button className="bg-blue-600 hover:bg-blue-700">
// Change to:
<button className="bg-gold text-forest hover:bg-[rgb(220,170,35)]">

// Text colors
className="text-blue-600" → className="text-gold"
className="text-green-600" → className="text-forest"
```

#### 4. **About Page** (`src/pages/About.tsx`)
**Updates needed:**
- Hero: `from-blue-50 to-white` → `from-cream to-beige`
- Cards: `bg-blue-50` → `bg-cream`, `bg-green-50` → `bg-cream`
- Buttons: `bg-blue-600` → `bg-gold text-forest`
- Number badges: `bg-blue-600`, `bg-green-600`, `bg-blue-800` → `bg-forest`

#### 5. **Contact Page** (`src/pages/Contact.tsx`)
**Updates needed:**
- Hero: `from-blue-50 to-white` → `from-cream to-beige`
- Form fields: `focus:ring-blue-500` → `focus:ring-gold`
- Submit button: `bg-blue-600` → `bg-gold text-forest`
- Instagram CTA: `from-pink-500 to-purple-600` → `bg-gradient-to-br from-gold to-forest`

#### 6. **Services Page** (`src/pages/Services.tsx`)
**Updates needed:**
- Hero: `from-green-50 to-white` → `from-cream to-beige`
- Checkmarks: `text-green-600` → `text-forest`
- Buttons: `bg-blue-600`, `bg-green-600` → `bg-gold text-forest`, `bg-forest text-white`
- Impact section: `from-blue-600 to-blue-800` → `bg-forest`

#### 7. **Blog Page** (`src/pages/Blog.tsx`)
**Updates needed:**
- Hero: `from-blue-50 to-white` → `from-cream to-beige`
- Icon: `text-blue-600` → `text-gold`
- Social icons: `hover:text-blue-600` → `hover:text-gold`
- Button: `bg-blue-600` → `bg-gold text-forest`

## 🎨 Quick Reference

### Background Colors
```tsx
from-blue-50  →  from-cream or from-beige
to-white      →  to-beige
bg-white      →  bg-beige or bg-cream
bg-gray-50    →  bg-cream
bg-gray-900   →  bg-forest
```

### Text Colors
```tsx
text-blue-600   →  text-gold
text-green-600  →  text-forest
text-gray-700   →  text-forest
text-gray-600   →  text-forest-light
text-gray-400   →  text-white/70 (on dark backgrounds)
```

### Button Colors
```tsx
bg-blue-600 text-white       →  bg-gold text-forest
bg-green-600 text-white      →  bg-forest text-white
hover:bg-blue-700            →  hover:bg-[rgb(220,170,35)]
hover:bg-green-700           →  hover:bg-[rgb(30,50,35)]
```

### Gradients
```tsx
from-blue-600 to-blue-800     →  bg-forest
from-pink-500 to-purple-600   →  from-gold to-forest
from-blue-50 to-white         →  from-cream to-beige
```

## 🚀 How to Update

### Option 1: Manual Update (Recommended)
1. Open each component file listed above
2. Use Find & Replace in your editor
3. Follow the color mappings provided
4. Test with `npm run dev`

### Option 2: Global Find & Replace
Use your editor's global search to replace across all files:

```
Find: bg-blue-600
Replace: bg-gold

Find: text-blue-600
Replace: text-gold

Find: from-blue-50 to-white
Replace: from-cream to-beige

Find: bg-gray-900
Replace: bg-forest
```

## ✅ Testing

After updating, run:
```bash
npm run dev
```

Visit http://localhost:5173 and verify:
- Background is warm beige (NOT white or blue)
- Text is dark green (NOT black or gray)
- Buttons/accents are golden yellow (NOT blue or green)
- Footer is dark green (NOT dark gray)

## 📋 Expected Visual Result

The site should have a **warm, natural, earthy aesthetic**:
- Beige/cream backgrounds (like parchment paper)
- Dark forest green text (organic, natural)
- Golden yellow accents (sunlight, optimism)
- NO blues, NO bright greens, NO purples

This matches the original Framer site's environmental/nature-focused branding.

---

**Current Status**: Base styling is correct. Component colors need manual updates using the mappings above.
