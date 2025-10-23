# Add Your Assets Here

This folder is ready for your images, videos, and other assets:

## Recommended Structure:
- `logo.png` or `logo.svg` - Your company logo
- `hero-image.jpg` - Main hero section image
- `hero-video.mp4` - Hero section video (optional)
- `images/` - Additional images for features, team, etc.
- `icons/` - Custom icons or favicons

## Supported Formats:
- **Images**: JPG, PNG, SVG, WebP
- **Videos**: MP4, WebM
- **Icons**: ICO, PNG, SVG

## Optimization Tips:
- Use WebP format for better compression
- Optimize images before uploading
- Keep file sizes under 2MB for faster loading

## Usage in Components:
```jsx
import Image from 'next/image'

<Image 
  src="/images/your-image.jpg" 
  alt="Description" 
  width={500} 
  height={300} 
/>
```

For videos:
```jsx
<video 
  src="/hero-video.mp4" 
  autoPlay 
  muted 
  loop 
  className="w-full h-auto"
/>
```