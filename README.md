# Decra Technologies - Company Portfolio Website

A modern, responsive company portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features a clean orange (#FF7A00) and white color theme with smooth animations powered by Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, corporate design with orange (#FF7A00) and white color scheme
- **Fully Responsive**: Mobile-first responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Metadata and SEO best practices implemented
- **Reusable Components**: Well-structured component architecture
- **TypeScript**: Full type safety throughout the application
- **Server Components**: Optimized use of Next.js server components where appropriate

## 📁 Project Structure

```
decra-technologies/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── contact/
│   │   ├── layout.tsx         # Contact page metadata
│   │   └── page.tsx          # Contact page with form
│   ├── portfolio/
│   │   ├── layout.tsx         # Portfolio page metadata
│   │   └── page.tsx          # Portfolio/Projects page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── testimonials/
│   │   ├── layout.tsx        # Testimonials page metadata
│   │   └── page.tsx          # Testimonials slider
│   ├── globals.css           # Global styles and Tailwind config
│   ├── layout.tsx            # Root layout with Navigation & Footer
│   └── page.tsx              # Home page
├── components/
│   ├── Navigation.tsx        # Sticky navigation with active route highlighting
│   ├── Footer.tsx            # Footer with company info and links
│   └── ui/
│       ├── Button.tsx        # Reusable button component
│       ├── Card.tsx          # Card component with hover effects
│       └── Section.tsx       # Section wrapper component
├── data/
│   ├── services.ts           # Services data
│   ├── portfolio.ts          # Portfolio items data
│   ├── testimonials.ts       # Testimonials data
│   └── team.ts               # Team members data
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Color Palette

- **Primary**: #FF7A00 (Orange)
- **Primary Dark**: #E66A00
- **Secondary**: #FFFFFF (White)
- **Text**: #1A1A1A (Dark Gray)
- **Text Light**: #666666 (Medium Gray)
- **Background**: #FFFFFF (White)
- **Gray Light**: #F5F5F5
- **Gray Medium**: #E5E5E5

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 Pages

### Home Page (`/`)
- Hero section with CTA buttons
- Features section
- Services preview
- Call-to-action section

### About Us (`/about`)
- Mission and Vision
- Company history
- Team members showcase
- Company values

### Services (`/services`)
- Service cards with icons
- Detailed service descriptions
- Process overview
- CTA section

### Portfolio (`/portfolio`)
- Project grid with filter functionality
- Hover effects on project cards
- Technology tags
- Statistics section

### Testimonials (`/testimonials`)
- Interactive testimonial slider
- All testimonials grid view
- Client ratings and reviews

### Contact (`/contact`)
- Contact form with validation
- Contact information
- Map placeholder
- Business hours

## 🎯 Key Components

### Navigation
- Sticky navigation bar
- Active route highlighting
- Mobile-responsive hamburger menu
- Smooth scroll behavior

### Footer
- Company information
- Quick links
- Social media icons
- Contact details

### UI Components
- **Button**: Multiple variants (primary, secondary, outline)
- **Card**: Reusable card with hover effects
- **Section**: Consistent section wrapper

## 🔧 Customization

### Updating Colors
Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #FF7A00;
  --primary-dark: #E66A00;
  /* ... */
}
```

### Adding Content
- **Services**: Edit `data/services.ts`
- **Portfolio**: Edit `data/portfolio.ts`
- **Testimonials**: Edit `data/testimonials.ts`
- **Team**: Edit `data/team.ts`

### Adding Pages
1. Create a new folder in `app/` directory
2. Add `page.tsx` file
3. Add `layout.tsx` for metadata (if needed)
4. Update navigation links in `components/Navigation.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## 📝 Notes

- All images use Unsplash placeholders. Replace with your own images.
- Contact form currently logs to console. Integrate with your backend/email service.
- Map placeholder in contact page. Integrate Google Maps or Mapbox.
- All social media links are placeholders. Update with your actual links.

## 🛠️ Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📄 License

This project is private and proprietary.

## 👥 Support

For questions or support, contact: info@decratech.com

---

Built with ❤️ by Decra Technologies
