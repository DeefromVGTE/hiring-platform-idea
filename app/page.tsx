import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
                <path d="M20 4L8 10v12l12 6 12-6V10L20 4z" fill="url(#logoGradient)" stroke="url(#logoGradient)" strokeWidth="2"/>
                <defs>
                  <linearGradient id="logoGradient" x1="8" y1="4" x2="32" y2="28">
                    <stop offset="0%" stopColor="#3B82F6"/>
                    <stop offset="50%" stopColor="#6366F1"/>
                    <stop offset="100%" stopColor="#3B82F6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Onboard.AI</div>
              <div className="text-xs text-gray-500">Talent Pipeline</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/auth/signin">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">AI-Powered Talent Pipeline</h1>
          <p className="text-xl text-gray-600 mb-8">
            Recruit, train, and deploy the next generation of AI engineers
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-lg px-8 py-6">
              Enter Platform
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <p className="text-gray-600">Candidates Trained</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-gray-600">Companies Partnered</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <p className="text-gray-600">Placement Rate</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
