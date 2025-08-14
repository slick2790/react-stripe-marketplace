import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play, Users, Calendar, Clock, Star, Award } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const Live = () => {
  const [selectedLevel, setSelectedLevel] = useState("all");

  const liveClasses = [
    {
      id: 1,
      title: "Live Digital Painting Session",
      instructor: "Emma Wilson",
      avatar: "/placeholder.svg",
      level: "intermediate",
      viewers: 234,
      startTime: "Now Live",
      duration: "2 hours",
      category: "Digital Art",
      featured: true,
      rating: 4.9
    },
    {
      id: 2,
      title: "Music Production Masterclass",
      instructor: "DJ Marcus",
      avatar: "/placeholder.svg",
      level: "advanced",
      viewers: 156,
      startTime: "3:00 PM EST",
      duration: "1.5 hours",
      category: "Music",
      featured: false,
      rating: 4.8
    },
    {
      id: 3,
      title: "3D Modeling for Beginners",
      instructor: "Alex Chen",
      avatar: "/placeholder.svg",
      level: "beginner",
      viewers: 89,
      startTime: "5:00 PM EST",
      duration: "2 hours",
      category: "3D Design",
      featured: true,
      rating: 4.7
    }
  ];

  const creatorOfMonth = {
    name: "Sarah Martinez",
    avatar: "/placeholder.svg",
    specialty: "Motion Graphics",
    followers: "12.5K",
    rating: 4.9,
    totalClasses: 47,
    bio: "Award-winning motion graphics designer with 8+ years experience in film and advertising."
  };

  const levels = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" }
  ];

  const filteredClasses = selectedLevel === "all" 
    ? liveClasses 
    : liveClasses.filter(c => c.level === selectedLevel);

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-900 mb-4">
              Live Creator Classes
            </h1>
            <p className="text-xl text-purple-700 max-w-3xl mx-auto">
              Join live interactive sessions with top creators
            </p>
          </div>

          {/* Creator of the Month */}
          <Card className="border-yellow-300 bg-gradient-to-r from-yellow-50 to-amber-50 mb-12">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                  <div>
                    <CardTitle className="text-purple-900">Creator of the Month</CardTitle>
                    <CardDescription className="text-purple-700">Featured educator spotlight</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={creatorOfMonth.avatar} />
                  <AvatarFallback className="bg-purple-100 text-purple-700 text-xl">
                    {creatorOfMonth.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">{creatorOfMonth.name}</h3>
                  <p className="text-purple-700 mb-2">{creatorOfMonth.specialty}</p>
                  <p className="text-purple-600 mb-4">{creatorOfMonth.bio}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-purple-600" />
                      {creatorOfMonth.followers} followers
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                      {creatorOfMonth.rating} rating
                    </div>
                    <div className="flex items-center">
                      <Play className="w-4 h-4 mr-1 text-purple-600" />
                      {creatorOfMonth.totalClasses} classes
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-purple-900 font-semibold">
                  Follow Creator
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Level Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {levels.map((level) => (
              <Button
                key={level.id}
                variant={selectedLevel === level.id ? "default" : "outline"}
                onClick={() => setSelectedLevel(level.id)}
                className={selectedLevel === level.id 
                  ? "bg-gradient-to-r from-purple-600 to-violet-600" 
                  : "border-purple-300 text-purple-700 hover:bg-purple-50"
                }
              >
                {level.name}
              </Button>
            ))}
          </div>

          {/* Live Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((liveClass) => (
              <Card key={liveClass.id} className={`border-purple-200 hover:shadow-lg transition-shadow ${
                liveClass.featured ? 'ring-2 ring-yellow-400' : ''
              }`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant={liveClass.startTime === "Now Live" ? "destructive" : "secondary"}
                      className={liveClass.startTime === "Now Live" 
                        ? "bg-red-500 animate-pulse" 
                        : "bg-yellow-100 text-purple-800"
                      }
                    >
                      {liveClass.startTime === "Now Live" ? "🔴 LIVE" : liveClass.startTime}
                    </Badge>
                    {liveClass.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-400 to-amber-400 text-purple-900">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-purple-900">{liveClass.title}</CardTitle>
                  <CardDescription className="text-purple-600">
                    {liveClass.category} • {liveClass.level}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar>
                      <AvatarImage src={liveClass.avatar} />
                      <AvatarFallback className="bg-purple-100 text-purple-700">
                        {liveClass.instructor[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-purple-900">{liveClass.instructor}</p>
                      <div className="flex items-center text-sm text-purple-600">
                        <Star className="w-3 h-3 mr-1 text-yellow-500 fill-current" />
                        {liveClass.rating}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4 text-sm text-purple-600">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {liveClass.viewers} viewers
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {liveClass.duration}
                    </div>
                  </div>

                  <Button 
                    className={liveClass.startTime === "Now Live" 
                      ? "w-full bg-red-600 hover:bg-red-700 animate-pulse" 
                      : "w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
                    }
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {liveClass.startTime === "Now Live" ? "Join Live" : "Set Reminder"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Live;