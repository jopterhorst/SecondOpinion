````markdown
# Second Opinion - Upstream Christmas Musical 🎭

A high-end, polished static website for "Second Opinion," the 2025 Christmas musical by Upstream, an evangelism initiative of a modern church.

![Second Opinion Musical](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4)

## 🎭 About the Musical

Second Opinion is a transformative Christmas musical that challenges perspectives and opens hearts to the true meaning of hope, redemption, and second chances. Set against the backdrop of a bustling Christmas season, it follows the intertwining lives of individuals at crossroads, each facing decisions that will define their futures.

## ✨ Features

### 🎨 Design & User Experience
- **Modern Design**: Polished, high-end UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Accessibility**: WCAG compliant for inclusive user experience
- **Christmas Theme**: Beautiful red, green, and gold color scheme
- **Smooth Animations**: Framer Motion powered micro-interactions

### 🚀 Performance & SEO
- **Fast Performance**: Optimized for speed and Core Web Vitals
- **Static Export**: Built for deployment on Cloudflare Pages
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Sitemap & Robots**: Automatic generation for search engines
- **Schema Markup**: Rich snippets for event and organization data

### 📱 Functionality
- **Ticket Booking Modal**: Interactive reservation system
- **Contact Forms**: Functional contact and newsletter signup
- **Image Gallery**: Media gallery with category filtering
- **Navigation**: Smooth navigation with mobile support
- **404 Page**: Custom error page with navigation

### 🛠 Technical Features
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom Christmas theme
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion for smooth interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-org/second-opinion.git
   cd second-opinion
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates a static export in the `out` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page (Upstream info)
│   │   ├── page.tsx       # About page component
│   │   └── OverOnsContent.tsx
│   ├── cast/              # Cast & Crew page
│   │   └── page.tsx       # Cast & Crew page component
│   ├── contact/           # Contact page
│   │   ├── page.tsx       # Contact page component
│   │   └── ContactContent.tsx
│   ├── gallery/           # Media gallery page
│   │   ├── page.tsx       # Gallery page component
│   │   └── GalleryContent.tsx
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── loading.tsx        # Loading page component
│   ├── not-found.tsx      # 404 error page
│   ├── page.tsx          # Homepage
│   ├── robots.ts          # Robots.txt generation
│   └── sitemap.ts         # Sitemap generation
├── components/            # Reusable React components
│   ├── AboutSection.tsx   # About the musical section
│   ├── CastCrewSection.tsx # Cast & crew profiles
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Hero section with animation
│   ├── Loading.tsx        # Loading component
│   ├── Navigation.tsx     # Main navigation component
│   └── TicketModal.tsx    # Ticket booking modal
└── lib/                   # Utility functions and data
    ├── structuredData.ts  # SEO structured data
    └── utils.ts          # Utility functions
```

## 🎨 Design System

### Colors
- **Christmas Red**: `#dc2626` (600) to `#7f1d1d` (900)
- **Christmas Green**: `#16a34a` (600) to `#14532d` (900)  
- **Christmas Gold**: `#d97706` (600) to `#78350f` (900)

### Typography
- **Primary Font**: Geist Sans (modern, readable)
- **Monospace Font**: Geist Mono
- **Hierarchy**: Proper heading structure with responsive sizing

### Components
- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Subtle shadows with hover animations
- **Forms**: Focused states with Christmas theme colors
- **Modals**: Backdrop blur with smooth transitions

## 🎯 Performance Optimizations

- **Static Site Generation**: Fast loading with pre-rendered pages
- **Image Optimization**: Placeholder system for future images
- **Code Splitting**: Automatic with Next.js App Router
- **Minimal JavaScript**: Only necessary client-side code
- **CSS Optimization**: Tailwind CSS purging unused styles

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px+ (iPhone SE and up)
- **Tablet**: 768px+ (iPad and similar)
- **Desktop**: 1024px+ (Standard laptops)
- **Large Screens**: 1440px+ (Desktop monitors)
- **Extra Large**: 1920px+ (Large displays)

## � SEO Features

### Meta Tags
- Comprehensive Open Graph tags
- Twitter Card support
- Proper title and description optimization
- Language and locale settings

### Structured Data
- Event schema for the musical
- Organization schema for Upstream
- LocalBusiness markup for contact info

### Technical SEO
- Automatic sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Proper heading hierarchy

## 🚀 Deployment

### Cloudflare Pages (Recommended)
1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `out`
4. Deploy automatically on push to main branch

### Alternative Platforms
- **Vercel**: Native Next.js support with zero configuration
- **Netlify**: Works with static export out of the box
- **GitHub Pages**: Requires additional workflow setup

### Custom Domain Setup
1. Configure your domain DNS to point to your deployment platform
2. Update the base URL in `sitemap.ts` and `structuredData.ts`
3. Update OpenGraph URLs in metadata files

## 🔧 Configuration

### Environment Variables
No environment variables are required for basic functionality. For production deployments, consider:

```env
# Optional: Analytics tracking
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional: Contact form backend
NEXT_PUBLIC_FORM_ENDPOINT=your-form-handler-url
```

### Customization
- **Colors**: Update the Christmas theme in `tailwind.config.ts`
- **Content**: Modify text and information in component files
- **Images**: Replace placeholder images with actual photos
- **Contact Info**: Update contact details throughout the site

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions about the website or technical issues:
- **Email**: info@upstream.nl
- **Issues**: Create a GitHub issue
- **Documentation**: Check this README and inline comments

## 📄 License

Created for Upstream - Christmas Musical 2025. All rights reserved.

---

> "Want Ik weet wel, wat voor gedachten Ik over u denk, spreekt de HEERE: gedachten des vredes en niet des kwaads, dat Ik u geve een verwachte toekomst." - Jeremia 29:11

Made with ❤️ for sharing hope and love through the power of story and song.

````
