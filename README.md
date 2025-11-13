# Onboard.AI - Full-Stack Talent Pipeline & Training Platform

A comprehensive AI-powered recruitment and training platform built with **Next.js**, **Supabase**, and **NextAuth.js** with Google and LinkedIn OAuth integration.

## Features

- **🔐 Multi-Provider Authentication**: Google and LinkedIn OAuth integration
- **📚 Learning Management**: Curriculum tracking, module completion, and progress visualization
- **👥 Community Hub**: Study groups, discussion forums, and peer support
- **🎓 Verification System**: Multi-step identity and behavioral verification
- **📊 Analytics Dashboard**: Progress tracking, leaderboards, and achievements
- **⚡ Real-time Updates**: Supabase-powered real-time data synchronization
- **🎨 Modern UI**: Beautiful, responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Authentication**: NextAuth.js with OAuth 2.0
- **Backend**: Supabase (PostgreSQL, Real-time, Auth)
- **UI Components**: Radix UI, shadcn/ui, Lucide Icons
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Google OAuth credentials
- LinkedIn OAuth credentials
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd onboard-ai-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your credentials:
- Supabase URL and anon key
- Google OAuth client ID and secret
- LinkedIn OAuth credentials
- NextAuth secret

4. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
onboard-ai-app/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Auth pages
│   ├── dashboard/         # Dashboard pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            
│   └── ui/                # Reusable UI components
├── lib/                   # Utilities and configurations
│   ├── auth.ts           # NextAuth configuration
│   ├── supabase.ts       # Supabase client
│   └── utils.ts          # Helper functions
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Setting Up Supabase

1. Create a new project on [Supabase](https://supabase.com)
2. Set up the following tables:
   - `users` - User profiles and metadata
   - `candidates` - Candidate information
   - `modules` - Learning modules
   - `progress` - User learning progress
   - `achievements` - User achievements

3. Enable Row Level Security (RLS) for data protection
4. Configure CORS for your Vercel deployment domain

## Setting Up OAuth

### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://yourdomain.com/api/auth/callback/google`

### LinkedIn OAuth
1. Go to [LinkedIn Developer Portal](https://www.linkedin.com/developers)
2. Create a new app
3. Add authorized redirect URIs for Sign in with LinkedIn
4. Get your Client ID and Client Secret

## Deployment on Vercel

1. **Push to GitHub**
```bash
git remote add origin <your-github-repo-url>
git push -u origin master
```

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import from GitHub
   - Select your repository

3. **Configure Environment Variables** in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `NEXT_PUBLIC_LINKEDIN_CLIENT_ID`
   - `LINKEDIN_CLIENT_SECRET`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (your Vercel domain)

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your app

## Pages Included

- **`/`** - Landing page
- **`/dashboard`** - Training dashboard
- **`/auth/signin`** - Sign in page with OAuth options

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## API Routes

- **`/api/auth/[...nextauth]`** - NextAuth.js authentication endpoints

## Contributing

1. Create a new branch for features
2. Make your changes
3. Commit with clear messages
4. Push and create a pull request

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ by the Onboard.AI Team**
