# Macojal - Enterprise Web3, AI & Digital Platforms

A modern, enterprise-grade website combining the best elements from leading tech companies, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimal, premium aesthetic inspired by top tech companies
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **SEO Optimized**: Proper meta tags and semantic HTML

## Pages

- **Homepage**: Hero section, trust statement, core solutions, hybrid advantage, FUSE framework, industries, and CTA
- **Solutions**: Overview page with links to individual solution pages
  - Web3 Product Development
  - AI Automation Systems
  - Enterprise Web & App Engineering
- **Industries**: Industry-specific solutions and use cases
- **Process**: Detailed breakdown of the FUSE™ framework
- **Case Studies**: Filterable case studies showcasing real projects
- **Contact**: Strategy call booking form

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
macojal/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles
│   ├── solutions/             # Solution pages
│   ├── industries/           # Industries page
│   ├── process/              # Process/Framework page
│   ├── case-studies/         # Case studies page
│   └── contact/              # Contact page
├── components/
│   ├── Navbar.tsx            # Navigation component
│   └── Footer.tsx            # Footer component
├── public/                   # Static assets
└── package.json
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- Primary: Dark Navy (#0B1220)
- Accent Blue: #3B82F6
- Accent Teal: #14B8A6
- Accent Emerald: #10B981

### Content

All content is in the page components. Edit the respective `.tsx` files to update:
- Text content
- Case studies
- Service descriptions
- Contact information

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## License

© 2025 Macojal. All rights reserved.

