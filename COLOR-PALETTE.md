# BlueDot Original Color Palette

## Extracted from /Users/anonymouse/Downloads/BlueDot_Web-Final

### Primary Colors

#### Background (Warm Beige)
```css
rgb(243, 235, 212)
#F3EBD4
```
- Used for: Main page background
- Tailwind: `bg-beige` or `bg-[rgb(243,235,212)]`

#### Primary Text (Forest Green)
```css
rgb(19, 38, 27)
#13261B
```
- Used for: Headlines, body text, dark elements
- Tailwind: `text-forest` or `text-[rgb(19,38,27)]`

#### Accent (Golden Yellow)
```css
rgb(238, 185, 42)
#EEB92A
```
- Used for: Buttons, highlights, active states
- Tailwind: `text-gold` or `bg-gold` or `text-[rgb(238,185,42)]`

### Secondary Colors

#### Light Gray/Green
```css
rgb(94, 107, 100)
#5E6B64
```
- Used for: Secondary text, muted elements
- Tailwind: `text-forest-light` or `text-[rgb(94,107,100)]`

#### Cream/Off-White
```css
rgb(243, 246, 245)
#F3F6F5
```
- Used for: Card backgrounds, sections
- Tailwind: `bg-cream` or `bg-[rgb(243,246,245)]`

#### Pure White
```css
rgb(255, 255, 255)
#FFFFFF
```
- Used for: Text on dark backgrounds, cards
- Tailwind: `bg-white` or `text-white`

#### Gray (Medium)
```css
rgb(150, 150, 150)
#969696
```
- Used for: Borders, dividers
- Tailwind: `text-gray-500` or `border-gray-400`

#### Rust/Brown Accent
```css
rgb(168, 86, 19)
#A85613
```
- Used for: Alternative accent color
- Tailwind: `text-[rgb(168,86,19)]`

## Typography

### Fonts
1. **Outfit** - Primary font for headings and UI
   - Weights: Thin (100), Regular (400), Medium (500), SemiBold (600), Bold (700)
2. **Inter** - Secondary font for body text
   - Weights: Regular (400), Bold (700)
3. **Poppins** - Accent font
   - Weight: SemiBold (600)

## Design Philosophy

The original BlueDot website uses an **earthy, natural color palette**:
- **Warm** beige background evokes earth and sand
- **Forest green** text represents nature and trees
- **Golden yellow** accents symbolize sunlight and optimism
- Overall aesthetic is **organic, natural, and environmentally-focused**

## DO NOT USE (Previous Incorrect Colors)

❌ Blue (#0075e6, #005db3) - **NOT** in the original design
❌ Bright Green (#4caf50) - **NOT** in the original design
❌ Purple/Pink gradients - **NOT** in the original design
❌ White/Gray backgrounds - Use beige instead

## Tailwind Configuration

The colors have been configured in `tailwind.config.js`:

```javascript
colors: {
  beige: {
    DEFAULT: 'rgb(243, 235, 212)',
  },
  forest: {
    DEFAULT: 'rgb(19, 38, 27)',
    light: 'rgb(94, 107, 100)',
  },
  gold: {
    DEFAULT: 'rgb(238, 185, 42)',
  },
  cream: 'rgb(243, 246, 245)',
}
```

## Usage Examples

### Backgrounds
```tsx
<div className="bg-beige">Main background</div>
<div className="bg-cream">Card background</div>
<div className="bg-forest">Dark section</div>
```

### Text
```tsx
<h1 className="text-forest">Heading</h1>
<p className="text-forest-light">Secondary text</p>
<span className="text-gold">Accent text</span>
```

### Buttons
```tsx
<button className="bg-gold text-forest hover:bg-[rgb(220,170,35)]">
  Primary Button
</button>

<button className="bg-forest text-white hover:bg-[rgb(30,50,35)]">
  Secondary Button
</button>
```

### Borders
```tsx
<div className="border border-forest/20">Subtle border</div>
<div className="border-2 border-gold">Accent border</div>
```

---

**Note**: The body background is automatically set to beige (`rgb(243, 235, 212)`) in `src/index.css`. Components should use these colors for a consistent, natural aesthetic that matches the original BlueDot branding.
