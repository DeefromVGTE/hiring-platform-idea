'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { BookOpen, Play, Trophy, Target, Bell, Settings, LogOut, Flame, Award, Heart, MessageSquare, Users, BarChart3 } from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('learning')

  const userData = {
    name: "Sarah Chen",
    targetRole: "AI Engineer",
    company: "TechFlow AI",
    jobReadyScore: 67,
    currentLevel: "Level 8",
    xp: 3240,
    streak: 7,
    modulesCompleted: 3,
    totalModules: 12,
  }

  const curriculum = [
    {
      id: 1,
      title: "AI Fundamentals",
      description: "Core concepts of AI and machine learning",
      modules: 6,
      completed: 6,
      status: "completed",
      score: 94,
    },
    {
      id: 2,
      title: "Neural Networks Deep Dive",
      description: "Understanding deep learning architectures",
      modules: 8,
      completed: 5,
      status: "in-progress",
      score: 87,
    },
    {
      id: 3,
      title: "Computer Vision Applications",
      description: "Build real-world CV models",
      modules: 10,
      completed: 0,
      status: "locked",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
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
              <div className="text-xs text-gray-500">Training Dashboard</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar className="w-8 h-8 ring-2 ring-blue-500">
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">Welcome back, {userData.name}! 👋</h2>
                <p className="text-blue-100 mb-4">Training for {userData.targetRole} at {userData.company}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/20">
                    <Target className="w-5 h-5 mb-1" />
                    <div className="text-xl font-bold">{userData.jobReadyScore}%</div>
                    <div className="text-xs text-blue-100">Job Ready</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/20">
                    <BookOpen className="w-5 h-5 mb-1" />
                    <div className="text-xl font-bold">{userData.modulesCompleted}/{userData.totalModules}</div>
                    <div className="text-xs text-blue-100">Modules</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/20">
                    <Flame className="w-5 h-5 mb-1" />
                    <div className="text-xl font-bold">{userData.streak}</div>
                    <div className="text-xs text-blue-100">Day Streak</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/20">
                    <Heart className="w-5 h-5 mb-1" />
                    <div className="text-xl font-bold">5</div>
                    <div className="text-xs text-blue-100">Helped</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Your Learning Path</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {curriculum.map((module) => (
                  <div key={module.id} className="border rounded-lg p-4 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">{module.title}</h4>
                        <p className="text-sm text-gray-600">{module.description}</p>
                      </div>
                      <Badge variant={module.status === 'completed' ? 'default' : module.status === 'in-progress' ? 'secondary' : 'outline'}>
                        {module.status}
                      </Badge>
                    </div>
                    {module.status === 'in-progress' && (
                      <>
                        <Progress value={(module.completed / module.modules) * 100} className="mb-2" />
                        <p className="text-xs text-gray-500">
                          {module.completed} of {module.modules} lessons completed
                        </p>
                      </>
                    )}
                    {module.status === 'completed' && (
                      <p className="text-sm text-green-600">Score: {module.score}%</p>
                    )}
                    <Button size="sm" className="mt-3" disabled={module.status === 'locked'}>
                      <Play className="w-4 h-4 mr-2" />
                      {module.status === 'completed' ? 'Review' : module.status === 'locked' ? 'Locked' : 'Continue'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">{userData.xp}</div>
                  <div className="text-sm text-blue-700">Total XP Earned</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-900">8</div>
                  <div className="text-sm text-purple-700">Achievements Unlocked</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Community</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full gap-2">
                  <Users className="w-4 h-4" />
                  Join Study Groups
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Community Forum
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
