// @ts-nocheck
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageSquare, Users, TrendingUp, Calendar, Search, Plus,
  ThumbsUp, MessageCircle, Share2, Bookmark, MoreVertical,
  Filter, Clock, Flame, Star, Award, Code, HelpCircle,
  Lightbulb, CheckCircle, Flag, Heart, Eye, Send, Image,
  Video, FileText, ChevronRight, Bell, Settings, Trophy
} from 'lucide-react';

const CommunityHub = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [newPost, setNewPost] = useState('');

  const posts = [
    {
      id: 1,
      user: {
        name: "Marcus Rodriguez",
        level: "Level 9",
        badge: "Top Contributor"
      },
      timestamp: "2 hours ago",
      content: "Just cracked the backpropagation exercise! The key insight was drawing out the computational graph first. Anyone else find that helpful?",
      tags: ["Neural Networks", "Tips"],
      likes: 24,
      comments: 8,
      hasLiked: false,
      type: "discussion"
    },
    {
      id: 2,
      user: {
        name: "Elena Petrov",
        level: "Level 7",
        badge: "Helpful"
      },
      timestamp: "4 hours ago",
      content: "Need help with gradient descent optimization! I'm getting stuck on the learning rate selection. Any tips?",
      tags: ["Help Needed"],
      likes: 12,
      comments: 15,
      hasLiked: true,
      type: "question",
      solved: true
    }
  ];

  const studyGroups = [
    {
      id: 1,
      name: "Neural Networks Squad",
      members: 12,
      active: 8,
      topic: "Deep Learning Fundamentals",
      nextSession: "Today, 3:00 PM"
    },
    {
      id: 2,
      name: "CV Explorers", 
      members: 8,
      active: 3,
      topic: "Computer Vision Applications",
      nextSession: "Tomorrow, 10:00 AM"
    }
  ];

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
              <div className="text-xs text-gray-500">Community Hub</div>
            </div>
          </div>
          <Avatar className="w-8 h-8 ring-2 ring-blue-500">
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">SC</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">SC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input placeholder="Share what you're learning..." className="mb-3"/>
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost"><Image className="w-4 h-4"/></Button>
                        <Button size="sm" variant="ghost"><Code className="w-4 h-4"/></Button>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                        <Send className="w-4 h-4 mr-1"/>Post
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="flex justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="feed"><Flame className="w-4 h-4 mr-2"/>Feed</TabsTrigger>
                  <TabsTrigger value="trending"><TrendingUp className="w-4 h-4 mr-2"/>Trending</TabsTrigger>
                  <TabsTrigger value="questions"><HelpCircle className="w-4 h-4 mr-2"/>Questions</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="feed" className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                            {post.user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{post.user.name}</span>
                            <Badge variant="outline" className="text-xs">{post.user.level}</Badge>
                          </div>
                          <div className="text-sm text-gray-500">{post.timestamp}</div>
                        </div>
                      </div>
                      <p className="text-gray-800 mb-4">{post.content}</p>
                      <div className="flex gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">#{tag}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="w-4 h-4 mr-1"/>{post.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="w-4 h-4 mr-1"/>{post.comments}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Study Groups</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {studyGroups.map((group) => (
                  <div key={group.id} className="border rounded-lg p-3">
                    <div className="font-medium text-sm mb-1">{group.name}</div>
                    <div className="text-xs text-gray-500 mb-2">{group.topic}</div>
                    <div className="flex justify-between text-xs">
                      <span>{group.members} members</span>
                      <span className="text-green-600">{group.active} active</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2"/>Create Group
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHub;