import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star, Play } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const Tutorials = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const workshops = [
    {
      id: 1,
      title: "Advanced Photoshop Compositing",
      instructor: "Sarah Chen",
      category: "design",
      level: "Advanced",
      duration: "2 hours",
      participants: 24,
      rating: 4.9,
      date: "2024-01-15",
      time: "2:00 PM EST",
      price: 49,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Music Production Masterclass",
      instructor: "Mike Rodriguez",
      category: "music",
      level: "Intermediate",
      duration: "3 hours",
      participants: 18,
      rating: 4.8,
      date: "2024-01-18",
      time: "6:00 PM EST",
      price: 69,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "3D Character Modeling Basics",
      instructor: "Alex Kim",
      category: "3d",
      level: "Beginner",
      duration: "2.5 hours",
      participants: 32,
      rating: 4.7,
      date: "2024-01-20",
      time: "1:00 PM EST",
      price: 39,
      image: "/placeholder.svg"
    }
  ];

  const categories = [
    { id: "all", name: "All Workshops" },
    { id: "design", name: "Design" },
    { id: "music", name: "Music" },
    { id: "3d", name: "3D Modeling" },
    { id: "video", name: "Video" }
  ];

  const filteredWorkshops = selectedCategory === "all" 
    ? workshops 
    : workshops.filter(w => w.category === selectedCategory);

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-900 mb-4">
              Creative Workshops & Tutorials
            </h1>
            <p className="text-xl text-purple-700 max-w-3xl mx-auto">
              Learn from industry experts in live interactive sessions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-gradient-to-r from-yellow-400 to-amber-400 text-purple-900" 
                  : "border-purple-300 text-purple-700 hover:bg-purple-50"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Workshops Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop) => (
              <Card key={workshop.id} className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-yellow-100 text-purple-800">
                      {workshop.level}
                    </Badge>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-purple-700">{workshop.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-purple-900">{workshop.title}</CardTitle>
                  <CardDescription className="text-purple-600">
                    by {workshop.instructor}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-purple-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {workshop.date} at {workshop.time}
                    </div>
                    <div className="flex items-center text-sm text-purple-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {workshop.duration}
                    </div>
                    <div className="flex items-center text-sm text-purple-600">
                      <Users className="w-4 h-4 mr-2" />
                      {workshop.participants} registered
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-900">${workshop.price}</span>
                    <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                      <Play className="w-4 h-4 mr-2" />
                      Join Workshop
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Tutorials;