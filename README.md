# Interior Design Portfolio

A responsive portfolio website built for an interior design firm. This project utilizes Next.js 16 and Tailwind CSS v4 to deliver a high-performance, statically generated site.

### Live Link : https://luxedesign.pages.dev 

## Tech Stack

- **Framework:** Next.js 16.0.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Deployment Target:** Cloudflare Pages (Static Export)

## Features

- **Static Site Generation (SSG):** Project detail pages are pre-rendered at build time using `generateStaticParams`.
- **Dynamic Routing:** Individual project views handled via `app/projects/[id]`.
- **Responsive Design:** Mobile-first grid layouts for portfolio galleries.
- **Image Optimization:** Utilizes `next/image` with unoptimized settings for static export compatibility.

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/moshahidraza1/Interior_Design_Website.git
   cd interior-design-website

2. Install dependencies:
   ```bash
   npm install

3. Run the development server:
   ```bash
   npm run dev


### Open http://localhost:3000 to view the application.

## Build & Deployment

This project is configured for static export to host on Cloudflare Pages.

1. Configuration:
   Ensure next.config.ts includes:
   ```bash
   const nextConfig = {
   output: "export",
   images: { unoptimized: true }
   };

2. Build Command:
   ```bash
   npm run build

This generates an out/ directory containing the static HTML/CSS/JS assets.

3. Cloudflare Pages Settings:

   Framework Preset: None
   Build Command: npm run build
   Output Directory: out


## Project Structure

├── app/                                                         │   ├── data/          # Static data files (projects.ts)           
│   ├── projects/      # Dynamic project routes ([id])             
│   ├── globals.css    # Tailwind directives                       
│   ├── layout.tsx     # Root layout                               
│   └── page.tsx       # Landing page                              
├── public/            # Static assets                             
├── public/ # Static assets                                        
└── next.config.ts # Next.js configuration
