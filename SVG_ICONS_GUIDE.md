# SVG Icons Guide

## Available SVG Icons

This project includes custom SVG icons that match the brand's aesthetic. All icons are located in the `/public/icons/` directory.

### Icon List

#### 1. **Leaf Icon** (`/icons/leaf.svg`)
- **Purpose**: Natural, organic products
- **Colors**: Green (#65a30d, #84cc16)
- **Size**: 24x24px
- **Usage**: Product features, natural ingredients badge

#### 2. **Organic Icon** (`/icons/organic.svg`)
- **Purpose**: Organic certification, natural products
- **Colors**: Green (#16a34a, #22c55e)
- **Size**: 24x24px
- **Usage**: Product badges, feature highlights

#### 3. **Handmade Icon** (`/icons/handmade.svg`)
- **Purpose**: Handcrafted products
- **Colors**: Orange/Amber (#d97706, #fef3c7)
- **Size**: 24x24px
- **Usage**: Product features, about section

#### 4. **Traditional Icon** (`/icons/traditional.svg`)
- **Purpose**: Traditional recipes, heritage
- **Colors**: Amber/Gold (#d97706, #f59e0b)
- **Size**: 24x24px
- **Usage**: Story section, product features

#### 5. **Quality Icon** (`/icons/quality.svg`)
- **Purpose**: Premium quality, certification
- **Colors**: Gold gradient (#fbbf24, #d97706)
- **Size**: 24x24px
- **Usage**: Quality badges, testimonials

#### 6. **Fresh Icon** (`/icons/fresh.svg`)
- **Purpose**: Fresh daily, made fresh
- **Colors**: Green (#16a34a, #22c55e)
- **Size**: 24x24px
- **Usage**: Product features, daily fresh badge

#### 7. **Delivery Icon** (`/icons/delivery.svg`)
- **Purpose**: Fast delivery, shipping
- **Colors**: Blue (#2563eb, #dbeafe)
- **Size**: 24x24px
- **Usage**: Shipping section, delivery info

#### 8. **Secure Icon** (`/icons/secure.svg`)
- **Purpose**: Secure payment, trust
- **Colors**: Blue (#2563eb, #dbeafe)
- **Size**: 24x24px
- **Usage**: Checkout, payment section

## Logo Files

### Main Logo (`/logo.svg`)
- **Size**: 500x120px
- **Features**:
  - Elephant head with detailed design
  - Gold and maroon color scheme
  - "THIRU ANNAMALAI" text
  - "Natural Foods" subtitle
  - Tagline ribbon: "Healthy in Every Piece of Bite"
- **Usage**: Navbar, footer, branding

### Favicon (`/favicon.svg`)
- **Size**: Optimized for browser tabs
- **Usage**: Browser tab icon

## How to Use Icons

### Method 1: Direct Image Tag
```tsx
<img src="/icons/leaf.svg" alt="Natural" className="h-6 w-6" />
```

### Method 2: As Background Image
```tsx
<div className="w-6 h-6 bg-[url('/icons/leaf.svg')] bg-contain bg-no-repeat" />
```

### Method 3: Inline SVG (for color customization)
```tsx
import LeafIcon from '/public/icons/leaf.svg?react';

<LeafIcon className="h-6 w-6 text-green-600" />
```

### Method 4: Using in Components
```tsx
export function FeatureCard() {
  return (
    <div className="flex items-center gap-3">
      <img src="/icons/organic.svg" alt="Organic" className="h-8 w-8" />
      <span>100% Organic</span>
    </div>
  );
}
```

## Icon Usage Examples

### Product Features Section
```tsx
<div className="grid grid-cols-2 gap-4">
  <div className="flex items-center gap-2">
    <img src="/icons/leaf.svg" alt="" className="h-5 w-5" />
    <span>100% Natural</span>
  </div>
  <div className="flex items-center gap-2">
    <img src="/icons/handmade.svg" alt="" className="h-5 w-5" />
    <span>Handmade</span>
  </div>
  <div className="flex items-center gap-2">
    <img src="/icons/fresh.svg" alt="" className="h-5 w-5" />
    <span>Made Fresh Daily</span>
  </div>
  <div className="flex items-center gap-2">
    <img src="/icons/traditional.svg" alt="" className="h-5 w-5" />
    <span>Traditional Recipe</span>
  </div>
</div>
```

### Why Choose Us Section
```tsx
<div className="grid md:grid-cols-3 gap-8">
  <div className="text-center">
    <img src="/icons/quality.svg" alt="Quality" className="h-16 w-16 mx-auto mb-4" />
    <h3>Premium Quality</h3>
    <p>Only the finest ingredients</p>
  </div>
  <div className="text-center">
    <img src="/icons/delivery.svg" alt="Delivery" className="h-16 w-16 mx-auto mb-4" />
    <h3>Fast Delivery</h3>
    <p>Ships within 24 hours</p>
  </div>
  <div className="text-center">
    <img src="/icons/secure.svg" alt="Secure" className="h-16 w-16 mx-auto mb-4" />
    <h3>Secure Payment</h3>
    <p>100% safe & secure</p>
  </div>
</div>
```

### Product Badges
```tsx
<div className="absolute top-3 left-3 flex gap-2">
  <img src="/icons/organic.svg" alt="Organic" className="h-8 w-8" />
  <img src="/icons/fresh.svg" alt="Fresh" className="h-8 w-8" />
</div>
```

## Color Scheme

### Brand Colors Used in Icons
- **Maroon/Red**: #8B0000, #5C0A0A (brand primary)
- **Gold**: #D4AF37, #F5DEB3 (brand accent)
- **Green**: #16a34a, #22c55e, #65a30d (natural, organic)
- **Amber**: #d97706, #f59e0b (traditional, handmade)
- **Blue**: #2563eb, #dbeafe (trust, security)

## Customization

### Changing Icon Colors
To change icon colors, edit the SVG file and update the `fill` and `stroke` attributes:

```xml
<!-- Original -->
<path fill="#65a30d" stroke="#4d7c0f" />

<!-- Custom Color -->
<path fill="#your-color" stroke="#your-stroke-color" />
```

### Resizing Icons
Icons are designed at 24x24px but can be scaled:

```tsx
<img src="/icons/leaf.svg" className="h-12 w-12" /> {/* 48x48px */}
<img src="/icons/leaf.svg" className="h-6 w-6" />  {/* 24x24px */}
<img src="/icons/leaf.svg" className="h-4 w-4" />  {/* 16x16px */}
```

## Best Practices

1. **Always provide alt text** for accessibility
2. **Use consistent sizing** across similar contexts
3. **Match icon colors** to your brand palette
4. **Optimize SVGs** before adding to project
5. **Use semantic naming** for icon files
6. **Group related icons** in the same directory

## Adding New Icons

To add new custom icons:

1. Create SVG file in `/public/icons/`
2. Use 24x24px viewBox
3. Follow brand color scheme
4. Keep file size small (<5KB)
5. Test in different browsers
6. Update this documentation

## Icon Sources

All icons in this project are:
- ✅ Custom designed for Thiru Annamalai Natural Foods
- ✅ Optimized for web performance
- ✅ Matching brand aesthetic
- ✅ Scalable vector graphics
- ✅ Cross-browser compatible

## Support

For icon-related questions or custom icon requests, refer to the project documentation or contact the development team.
