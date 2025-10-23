# Landing Page Project

A modern, responsive landing page built with Next.js, TypeScript, and Tailwind CSS. Optimized for performance and SEO, with mobile-first design and smooth animations.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful responsive layouts
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- **Performance**: Optimized images, lazy loading, fast page loads
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: WCAG compliant components
- **Ready for Deployment**: Configured for Vercel, Netlify, and other platforms

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Main landing page
│   │   └── globals.css        # Global styles and Tailwind
│   └── components/
│       ├── Header.tsx         # Navigation header
│       ├── Hero.tsx           # Hero section
│       ├── About.tsx          # About section
│       ├── Features.tsx       # Features showcase
│       ├── Contact.tsx        # Contact form
│       └── Footer.tsx         # Footer with links
├── public/                    # Static assets (add your images/videos here)
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies and scripts
```

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Customization Guide

### 1. Update Content
- Edit the text content in each component file
- Replace placeholder images and videos in the `public/` folder
- Update company information, contact details, and social links

### 2. Add Your Assets
Place your files in the `public/` folder:
- `public/logo.png` - Your company logo
- `public/hero-video.mp4` - Hero section video
- `public/images/` - Additional images
- Update the components to reference these files

### 3. Customize Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    50: '#your-color-50',
    100: '#your-color-100',
    // ... continue with your brand colors
  },
}
```

### 4. Update Metadata
Edit `src/app/layout.tsx` to update:
- Page title and description
- Open Graph tags
- Company information

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Netlify
1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `out`

### GitHub Pages
1. Update `next.config.js` with your repository name
2. Run `npm run build`
3. Deploy the `out/` folder to GitHub Pages

## 📧 Contact Form Setup

The contact form is ready for integration with:
- **Netlify Forms**: Add `netlify` attribute to the form
- **Formspree**: Update form action to your Formspree endpoint
- **EmailJS**: Integrate with EmailJS for client-side email sending
- **Custom API**: Create your own API endpoint

## 🎨 Design System

### Typography
- **Headings**: Bold, large sizes with proper hierarchy
- **Body**: Readable font sizes with good contrast
- **Interactive**: Hover states and transitions

### Color Palette
- **Primary**: Blue theme (customizable)
- **Grays**: Neutral colors for text and backgrounds
- **Semantic**: Success, warning, error colors

### Components
- **Buttons**: Primary and secondary styles
- **Cards**: Consistent spacing and shadows
- **Forms**: Styled inputs with focus states

## 📱 Responsive Breakpoints

- **Mobile**: 640px and below
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px and above

## ⚡ Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **SEO**: Built-in SEO optimization
- **Caching**: Static generation for better performance

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is ready for commercial use. Customize it for your business needs.

---

**Ready to launch your landing page?** 🚀

1. Add your content and assets
2. Customize colors and styling
3. Deploy to your preferred platform
4. Start converting visitors to customers!

For support or questions, feel free to reach out.