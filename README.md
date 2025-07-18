# IRFC - Innovation Research Forum & Community

A futuristic 3D website for an educational community platform built with Next.js, React Three Fiber, and Firebase.

## Features

- 🌌 **Space-themed Design**: Immersive 3D experience with animated black hole and starfield
- 🚀 **Interactive 3D Elements**: Mouse and scroll-responsive animations
- 🛰️ **Community Pages**: Dedicated sections for EIRF and SIRF communities
- 📝 **Form Handling**: Join requests and contact forms with file upload
- 🔥 **Firebase Backend**: Real-time database and cloud storage
- 📱 **Responsive Design**: Fully mobile-optimized
- ⚡ **Performance Optimized**: Built with Next.js 15 and modern web standards

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **3D Graphics**: React Three Fiber, Three.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Firebase (Firestore, Storage)
- **UI Components**: shadcn/ui

## Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd irfc-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up Firebase:
   - Create a new Firebase project
   - Enable Firestore Database
   - Enable Storage
   - Copy your Firebase config

4. Create `.env.local` file:
\`\`\`env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
\`\`\`

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. Start the production server:
\`\`\`bash
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── communities/       # Community pages
│   ├── contact/           # Contact page
│   ├── join/              # Join form page
│   ├── admin/             # Admin panel
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── ui/                # UI components
│   ├── black-hole.tsx     # 3D black hole component
│   ├── navigation.tsx     # Navigation component
│   └── starfield.tsx      # Animated starfield
├── lib/                   # Utility functions
│   ├── firebase.ts        # Firebase configuration
│   └── utils.ts           # General utilities
└── public/                # Static assets
\`\`\`

## Key Features Explained

### 3D Black Hole
- Interactive WebGL shader-based black hole
- Click effects with bloom animation
- Responsive to user interaction

### Community System
- EIRF: Electronics Innovation Research Forum
- SIRF: Software Innovation Research Forum
- Dedicated pages with 3D visualizations

### Form Handling
- Join requests with resume upload
- Contact form with message storage
- Admin panel for managing submissions

### Responsive Design
- Mobile-first approach
- Touch-friendly interactions
- Optimized for all screen sizes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
