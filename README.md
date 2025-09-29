# Frank Li - Professional Portfolio

A modern, Apple-inspired portfolio website showcasing Frank Li's journey as Founder of Chinida.com and his extensive business development background.

## 🚀 Features

- **Apple-like Design System** - Clean, minimalist interface inspired by Apple's design principles
- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark/Light Mode** - Automatic theme switching with smooth transitions
- **Google Analytics** - Built-in tracking and analytics support
- **SEO Optimized** - Proper meta tags, sitemap generation, and search engine optimization
- **Performance Focused** - Fast loading with Next.js optimization

## 🛠️ Tech Stack

- **Framework:** Next.js 14+
- **Styling:** Tailwind CSS 3+ with custom Apple-inspired design system
- **Animations:** Framer Motion 11+
- **Font:** Montserrat (Google Fonts)
- **Analytics:** Google Analytics 4
- **Deployment:** Vercel/Netlify ready

## 📋 Quick Start

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- Yarn package manager ([Install](https://classic.yarnpkg.com/en/docs/getting-started))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lifuyi/nextemp.git
   cd nextemp
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Google Analytics ID:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **Run the development server:**
   ```bash
   yarn dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Google Analytics Setup

1. **Create Google Analytics Account:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property
   - Get your Measurement ID (format: G-XXXXXXXXXX)

2. **Add to Environment Variables:**
   ```bash
   # .env.local
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Analytics will automatically track:**
   - Page views
   - User interactions
   - Site performance

## 🎨 Apple-Inspired Design Features

- **Blur Effects:** Backdrop blur for navigation and cards
- **Rounded Corners:** Consistent border radius system
- **Shadows:** Subtle, layered shadow system
- **Colors:** Apple's color palette with blue accent
- **Typography:** Clean, readable Montserrat font
- **Animations:** Smooth, physics-based transitions

## 📦 Build & Deployment

### Build for Production

```bash
yarn build
```

### Deploy to Vercel

1. **Connect to Vercel:**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Add Environment Variables in Vercel Dashboard:**
   - Go to your project settings
   - Add `NEXT_PUBLIC_GA_ID` with your Analytics ID

### Deploy to Netlify

1. **Build command:** `yarn build`
2. **Publish directory:** `.next`
3. **Add environment variables in Netlify dashboard**

## 🔧 Customization

### Personal Information

Update the following files with your information:

- `src/pages/index.js` - Homepage content
- `src/pages/about.js` - About page and biography
- `src/components/Experience.js` - Work experience
- `src/components/Skills.js` - Professional skills
- `src/components/Footer.js` - Contact information

### Social Media Links

Edit `src/components/Navbar.js` to update social media profiles:

```javascript
// Update these URLs with your profiles
href="https://facebook.com/your-profile"
href="https://x.com/your-handle"
href="https://linkedin.com/in/your-profile"
href="https://github.com/your-username"
```

### Colors & Styling

Customize the Apple-inspired theme in `tailwind.config.js`:

```javascript
colors: {
  appleBlue: "#007AFF",    // Primary blue
  appleGreen: "#34C759",   // Success green
  appleOrange: "#FF9500",  // Warning orange
  appleRed: "#FF3B30",     // Error red
  // Add your custom colors
}
```

## 📈 Performance

- **Lighthouse Score:** 95+
- **Core Web Vitals:** Optimized
- **Image Optimization:** Next.js automatic optimization
- **Bundle Size:** Minimized with tree shaking

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Frank (FUYI) Li**
- Email: [lifuyi@gmail.com](mailto:lifuyi@gmail.com)
- Phone: +86 186 1814 0814
- Website: [Chinida.com](https://chinida.com)

---

Built with ❤️ using Next.js and Apple-inspired design principles.