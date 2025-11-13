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
  Users, Calendar, Clock, MessageSquare, Video, Plus, Search,
  Settings, Bell, ChevronRight, Star, Trophy, Target, BookOpen,
  Code, Brain, FileText, Send, Check, X,
  UserPlus, LogOut, MoreVertical, Flame, Award, ThumbsUp,
  Share2, Bookmark, Eye, Download, Upload
} from 'lucide-react';

const StudyGroups = () => {
  const [activeView, setActiveView] = useState('myGroups');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [chatMessage, setChatMessage] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const myGroups = [
    {
      id: 1,
      name: "Neural Networks Squad",
      description: "Deep dive into neural network architectures and training techniques",
      members: 12,
      activeMembers: 8,
      topic: "Neural Networks Deep Dive",
      color: "blue",
      role: "member",
      nextSession: {
        title: "Backpropagation Workshop",
        date: "Today, 3:00 PM",
        duration: "1.5 hours",
        type: "workshop"
      },
      recentActivity: "2 hours ago",
      unreadMessages: 5
    },
    {
      id: 2,
      name: "ML Fundamentals",
      description: "Building strong foundations in machine learning concepts",
      members: 15,
      activeMembers: 6,
      topic: "AI Fundamentals",
      color: "purple",
      role: "admin",
      nextSession: {
        title: "Q&A Session",
        date: "Tomorrow, 10:00 AM",
        duration: "1 hour",
        type: "discussion"
      },
      recentActivity: "30 minutes ago",
      unreadMessages: 12
    }
  ];

  const availableGroups = [
    {
      id: 3,
      name: "Computer Vision Explorers",
      description: "Learning CV applications and image processing techniques",
      members: 8,
      activeMembers: 3,
      topic: "Computer Vision Applications",
      color: "green",
      nextSession: {
        title: "CNN Architecture Review",
        date: "Wed, 2:00 PM",
        duration: "2 hours"
      }
    },
    {
      id: 4,
      name: "NLP Enthusiasts",
      description: "Natural language processing and transformer models",
      members: 10,
      activeMembers: 5,
      topic: "NLP & Language Models",
      color: "orange",
      nextSession: {
        title: "BERT Implementation",
        date: "Thu, 4:00 PM",
        duration: "1.5 hours"
      }
    }
  ];

  const groupMembers = [
    {
      id: 1,
      name: "Marcus Rodriguez",
      level: "Level 9",
      role: "Admin",
      status: "online",
      contributions: 45,
      joinedDate: "2 months ago"
    },
    {
      id: 2,
      name: "Elena Petrov",
      level: "Level 7",
      role: "Member",
      status: "online",
      contributions: 23,
      joinedDate: "1 month ago"
    },
    {
      id: 3,
      name: "David Kim",
      level: "Level 10",
      role: "Member",
      status: "away",
      contributions: 67,
      joinedDate: "3 months ago"
    },
    {
      id: 4,
      name: "Sarah Chen",
      level: "Level 8",
      role: "Member",
      status: "online",
      contributions: 34,
      joinedDate: "1 month ago"
    }
  ];

  const groupMessages = [
    {
      id: 1,
      user: "Marcus Rodriguez",
      message: "Hey everyone! Just set up today's workshop. We'll be covering backpropagation in detail. Come prepared with questions!",
      timestamp: "10 min ago",
      isPinned: true
    },
    {
      id: 2,
      user: "Elena Petrov",
      message: "Can someone explain the difference between batch and stochastic gradient descent? Still a bit confused.",
      timestamp: "30 min ago",
      likes: 3
    },
    {
      id: 3,
      user: "David Kim",
      message: "Sure! Batch gradient descent uses the entire dataset for each update, while stochastic uses one sample at a time. Mini-batch is the sweet spot - uses small batches.",
      timestamp: "25 min ago",
      likes: 5,
      isReply: true
    }
  ];

  const upcomingSessions = [
    {
      title: "Backpropagation Workshop",
      date: "Today",
      time: "3:00 PM",
      duration: "1.5 hours",
      host: "Marcus Rodriguez",
      attendees: 8,
      type: "workshop",
      meetingLink: "zoom.us/j/123456"
    },
    {
      title: "Weekly Progress Check-in",
      date: "Tomorrow",
      time: "10:00 AM",
      duration: "1 hour",
      host: "Study Group",
      attendees: 12,
      type: "check-in"
    },
    {
      title: "Coding Challenge: Neural Nets",
      date: "Friday",
      time: "6:00 PM",
      duration: "2 hours",
      host: "Elena Petrov",
      attendees: 10,
      type: "challenge"
    }
  ];

  const sharedResources = [
    {
      title: "Backpropagation Cheat Sheet",
      type: "pdf",
      uploadedBy: "Marcus Rodriguez",
      uploadedDate: "2 days ago",
      downloads: 8,
      size: "2.4 MB"
    },
    {
      title: "Neural Network Implementation",
      type: "code",
      uploadedBy: "David Kim",
      uploadedDate: "1 week ago",
      downloads: 12,
      size: "15 KB"
    },
    {
      title: "Lecture Recording: CNNs",
      type: "video",
      uploadedBy: "Elena Petrov",
      uploadedDate: "3 days ago",
      downloads: 15,
      size: "124 MB"
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-300';
      default: return 'bg-gray-300';
    }
  };

  const getSessionTypeIcon = (type) => {
    switch(type) {
      case 'workshop': return Brain;
      case 'discussion': return MessageSquare;
      case 'challenge': return Trophy;
      case 'check-in': return Target;
      default: return Calendar;
    }
  };

  const getResourceIcon = (type) => {
    switch(type) {
      case 'pdf': return FileText;
      case 'code': return Code;
      case 'video': return Video;
      default: return FileText;
    }
  };

  if (selectedGroup) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <header className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" onClick={() => setSelectedGroup(null)}>
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </Button>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Neural Networks Squad</div>
                  <div className="text-sm text-gray-500">12 members • 8 active now</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Video className="w-4 h-4 mr-2" />
                  Join Session
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-6">
              <Tabs defaultValue="chat">
                <TabsList className="mb-4">
                  <TabsTrigger value="chat">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Chat
                  </TabsTrigger>
                  <TabsTrigger value="sessions">
                    <Calendar className="w-4 h-4 mr-2" />
                    Sessions
                  </TabsTrigger>
                  <TabsTrigger value="resources">
                    <FileText className="w-4 h-4 mr-2" />
                    Resources
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="chat">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                        {groupMessages.map((msg) => (
                          <div key={msg.id} className={`flex gap-3 ${msg.isReply ? 'ml-12' : ''}`}>
                            <Avatar className="w-10 h-10 flex-shrink-0">
                              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                                {msg.user.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-sm">{msg.user}</span>
                                <span className="text-xs text-gray-500">{msg.timestamp}</span>
                                {msg.isPinned && (
                                  <Badge className="bg-yellow-100 text-yellow-800 border-0 text-xs">
                                    Pinned
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-700 mb-2">{msg.message}</p>
                              <div className="flex items-center gap-3">
                                <button className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1">
                                  <ThumbsUp className="w-3 h-3" />
                                  {msg.likes || 0}
                                </button>
                                <button className="text-xs text-gray-500 hover:text-blue-600">Reply</button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-4 border-t">
                        <Input 
                          placeholder="Share ideas, ask questions..." 
                          value={chatMessage}
                          onChange={(e) => setChatMessage(e.target.value)}
                          className="flex-1"
                        />
                        <Button>
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="sessions">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 space-y-4">
                      {upcomingSessions.map((session, index) => {
                        const Icon = getSessionTypeIcon(session.type);
                        return (
                          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-start gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                                  <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-1">{session.title}</h4>
                                  <div className="text-sm text-gray-600 space-y-1">
                                    <div className="flex items-center gap-2">
                                      <Calendar className="w-4 h-4" />
                                      {session.date} at {session.time}
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Clock className="w-4 h-4" />
                                      {session.duration}
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Users className="w-4 h-4" />
                                      {session.attendees} attending
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Badge className="bg-blue-100 text-blue-800 border-0 capitalize">
                                {session.type}
                              </Badge>
                            </div>
                            <div className="flex gap-2">
                              <Button className="flex-1">
                                <Calendar className="w-4 h-4 mr-2" />
                                Add to Calendar
                              </Button>
                              {session.meetingLink && (
                                <Button variant="outline" className="flex-1">
                                  <Video className="w-4 h-4 mr-2" />
                                  Join Meeting
                                </Button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                      <Button variant="outline" className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Schedule New Session
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="resources">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 space-y-4">
                      {sharedResources.map((resource, index) => {
                        const Icon = getResourceIcon(resource.type);
                        return (
                          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                            <div className="flex items-center gap-3">
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                resource.type === 'pdf' ? 'bg-red-100' :
                                resource.type === 'code' ? 'bg-purple-100' :
                                'bg-blue-100'
                              }`}>
                                <Icon className={`w-6 h-6 ${
                                  resource.type === 'pdf' ? 'text-red-600' :
                                  resource.type === 'code' ? 'text-purple-600' :
                                  'text-blue-600'
                                }`} />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium mb-1">{resource.title}</h4>
                                <div className="text-sm text-gray-500">
                                  {resource.uploadedBy} • {resource.uploadedDate}
                                </div>
                                <div className="text-xs text-gray-400 mt-1">
                                  {resource.size} • {resource.downloads} downloads
                                </div>
                              </div>
                              <Button variant="ghost" size="icon">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                      <Button variant="outline" className="w-full">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Resource
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Group Info */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">About This Group</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Deep dive into neural network architectures and training techniques
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Topic</span>
                      <span className="font-medium">Neural Networks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Created</span>
                      <span className="font-medium">2 months ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Activity</span>
                      <span className="font-medium text-green-600">Very Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Members */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Members</CardTitle>
                    <Button size="sm" variant="ghost">
                      <UserPlus className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {groupMembers.map((member) => (
                    <div key={member.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(member.status)}`}></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm truncate">{member.name}</span>
                          {member.role === 'Admin' && (
                            <Badge className="bg-yellow-100 text-yellow-800 border-0 text-xs">
                              <Star className="w-3 h-3 mr-1" />
                              Admin
                            </Badge>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">{member.level}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Group Stats */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <MessageSquare className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                      <div className="text-xl font-bold">234</div>
                      <div className="text-xs text-gray-500">Messages</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <Calendar className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                      <div className="text-xl font-bold">18</div>
                      <div className="text-xs text-gray-500">Sessions</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <FileText className="w-5 h-5 text-green-600 mx-auto mb-1" />
                      <div className="text-xl font-bold">24</div>
                      <div className="text-xs text-gray-500">Resources</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <Trophy className="w-5 h-5 text-yellow-600 mx-auto mb-1" />
                      <div className="text-xl font-bold">8</div>
                      <div className="text-xs text-gray-500">Challenges</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              <div className="text-xs text-gray-500">Study Groups</div>
            </div>
          </div>
          <Button onClick={() => setShowCreateModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Create Group
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeView} onValueChange={setActiveView} className="space-y-6">
          <TabsList>
            <TabsTrigger value="myGroups">
              <Users className="w-4 h-4 mr-2" />
              My Groups ({myGroups.length})
            </TabsTrigger>
            <TabsTrigger value="discover">
              <Search className="w-4 h-4 mr-2" />
              Discover
            </TabsTrigger>
          </TabsList>

          <TabsContent value="myGroups" className="space-y-4">
            {myGroups.map((group) => (
              <Card 
                key={group.id} 
                className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedGroup(group)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br from-${group.color}-500 to-${group.color}-600 rounded-xl flex items-center justify-center text-white shadow-lg`}>
                        <Users className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{group.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{group.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {group.members} members
                          </span>
                          <span className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            {group.activeMembers} active
                          </span>
                          {group.unreadMessages > 0 && (
                            <Badge className="bg-red-100 text-red-800 border-0">
                              {group.unreadMessages} new
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">
                      {group.role}
                    </Badge>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm text-blue-900 mb-1">
                          Next: {group.nextSession.title}
                        </div>
                        <div className="text-xs text-blue-600 flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {group.nextSession.date}
                          <Clock className="w-3 h-3 ml-2" />
                          {group.nextSession.duration}
                        </div>
                      </div>
                      <Button size="sm">
                        Join
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="discover" className="space-y-4">
            {availableGroups.map((group) => (
              <Card key={group.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-16 h-16 bg-gradient-to-br from-${group.color}-500 to-${group.color}-600 rounded-xl flex items-center justify-center text-white`}>
                        <Users className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{group.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{group.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {group.members} members
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            {group.topic}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button>
                      <UserPlus className="w-4 h-4 mr-2" />
                      Join Group
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Create Group Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowCreateModal(false)}>
          <Card className="w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <CardTitle>Create Study Group</CardTitle>
              <CardDescription>Start a new group to learn together</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Group Name</label>
                <Input placeholder="e.g., Advanced ML Techniques" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Description</label>
                <Input placeholder="What will your group focus on?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Related Module</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Neural Networks Deep Dive</option>
                  <option>Computer Vision Applications</option>
                  <option>NLP & Language Models</option>
                </select>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setShowCreateModal(false)}>
                  Cancel
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Group
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default StudyGroups;