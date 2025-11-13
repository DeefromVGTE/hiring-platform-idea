# Deployment Guide - Onboard.AI

## Prerequisites

Before deploying, ensure you have:

1. **GitHub Account** - for version control
2. **Vercel Account** - for hosting
3. **Supabase Account** - for backend database
4. **Google OAuth Credentials** - for authentication
5. **LinkedIn Developer Account** (optional) - for LinkedIn OAuth

---

## Step 1: Push to GitHub

### Create a new GitHub repository

1. Go to [GitHub.com](https://github.com)
2. Click "New" to create a new repository
3. Name it `onboard-ai` (or your preferred name)
4. Set it to Public (recommended for initial setup)
5. Don't initialize with README (we have one)
6. Click "Create repository"

### Push your code

```bash
cd c:\Users\DDJay\FullApp\onboard-ai-app

# Add the remote
git remote add origin https://github.com/YOUR_USERNAME/onboard-ai.git

# Rename branch to main if needed
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## Step 2: Set Up Supabase

### Create a Supabase Project

1. Go to [Supabase.com](https://supabase.com)
2. Sign in or create account
3. Click "New project"
4. Fill in project details:
   - **Project name**: Onboard.AI
   - **Database password**: Generate strong password
   - **Region**: Choose closest to your users
5. Click "Create new project"

### Get Your Credentials

After project creation:
1. Go to "Project Settings" → "API"
2. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Create Database Tables (Optional)

For a complete setup, create these SQL tables in Supabase SQL Editor:

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  image TEXT,
  provider TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Candidates table
CREATE TABLE candidates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  target_role TEXT,
  job_ready_score INTEGER DEFAULT 0,
  verification_status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Learning progress table
CREATE TABLE progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  module_id TEXT NOT NULL,
  completed_at TIMESTAMP,
  score INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## Step 3: Set Up Google OAuth

### Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (if you don't have one)
3. Enable "Google+ API"
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Select "Web application"
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for local development)
   - `https://your-vercel-domain.vercel.app/api/auth/callback/google` (for production)
7. Copy:
   - **Client ID** → `NEXT_PUBLIC_GOOGLE_CLIENT_ID`
   - **Client Secret** → `GOOGLE_CLIENT_SECRET`

---

## Step 4: Deploy to Vercel

### Connect Vercel to GitHub

1. Go to [Vercel.com](https://vercel.com)
2. Sign in with GitHub (recommended)
3. Click "Add New..." → "Project"
4. Select your GitHub account and `onboard-ai` repository
5. Click "Import"

### Configure Environment Variables

In the Vercel project settings:

1. Go to "Settings" → "Environment Variables"
2. Add the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=<your_supabase_url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_key>
NEXT_PUBLIC_GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
NEXTAUTH_SECRET=<generate_new_secret>
NEXTAUTH_URL=https://your-vercel-domain.vercel.app
```

### Generate NEXTAUTH_SECRET

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

Or use Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Deploy

1. Click "Deploy"
2. Vercel will automatically build and deploy your app
3. Once deployed, your app will be available at the provided URL

---

## Step 5: Update OAuth Redirect URIs

### Update Google OAuth

1. Return to Google Cloud Console
2. Go to your OAuth 2.0 Client ID
3. Add your Vercel deployment URL to authorized redirect URIs:
   - `https://<your-app-name>.vercel.app/api/auth/callback/google`

### Update Your App

1. Update `.env.local` with production values
2. Commit and push changes
3. Vercel will automatically redeploy

---

## Step 6: Set Up Custom Domain (Optional)

1. In Vercel project settings → "Domains"
2. Click "Add"
3. Enter your domain name
4. Follow DNS setup instructions
5. Update `NEXTAUTH_URL` environment variable with your custom domain

---

## Monitoring & Maintenance

### View Logs

- Go to Vercel project → "Deployments"
- Click on a deployment to see logs
- Check "Functions" tab for API route logs

### Database Monitoring

- Go to Supabase project
- Use "Editor" to query data
- Monitor "Database" → "Replication" for health

### Performance Optimization

- Vercel Analytics: Check project → "Analytics"
- Web Vitals: Monitor Core Web Vitals
- Database Queries: Monitor slow queries in Supabase

---

## Troubleshooting

### Build Failures

If build fails on Vercel:
1. Check build logs in Vercel dashboard
2. Ensure all environment variables are set correctly
3. Try rebuilding the project

### Authentication Issues

1. Verify redirect URIs match exactly (include trailing slashes)
2. Check that OAuth credentials are correct
3. Ensure `NEXTAUTH_SECRET` is set

### Database Connection Issues

1. Verify Supabase credentials are correct
2. Check network access: Vercel IPs may need to be whitelisted
3. Ensure database tables exist (if using our schema)

---

## Next Steps

After deployment:

1. **Test Authentication** - Sign in with Google OAuth
2. **Verify Database Connection** - Create a test record
3. **Monitor Performance** - Check Vercel Analytics
4. **Set Up CI/CD** - Vercel auto-deploys on git push
5. **Scale as Needed** - Use Vercel Pro for additional resources

---

## Support

For issues or questions:
- Check [Vercel Docs](https://vercel.com/docs)
- Review [Supabase Docs](https://supabase.com/docs)
- Check [NextAuth.js Docs](https://next-auth.js.org)

---

**Deployment Complete! 🚀**
