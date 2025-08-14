import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Heart, Eye, Clock, Plus } from "lucide-react";
import AppLayout from "@/components/AppLayout";

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const posts = [
    {
      id: 1,
      title: "Tips for Creating Cinematic Color Grading",
      author: "VideoMaster",
      avatar: "/placeholder.svg",
      category: "video",
      replies: 23,
      likes: 45,
      views: 234,
      timeAgo: "2 hours ago",
      excerpt: "Share your favorite techniques for achieving that cinematic look...",
      tags: ["color-grading", "cinematography", "tips"]
    },
    {
      id: 2,
      title: "My Latest 3D Character - Feedback Welcome!",
      author: "3DArtist",
      avatar: "/placeholder.svg",
      category: "showcase",
      replies: 12,
      likes: 78,
      views: 156,
      timeAgo: "4 hours ago",
      excerpt: "Just finished this fantasy character model. Would love your thoughts...",
      tags: ["3d-modeling", "character", "feedback"]
    },
    {
      id: 3,
      title: "Best VST Plugins for Hip-Hop Production?",
      author: "BeatMaker",
      avatar: "/placeholder.svg",
      category: "music",
      replies: 31,
      likes: 29,
      views: 189,
      timeAgo: "6 hours ago",
      excerpt: "Looking for recommendations on the best VST plugins...",
      tags: ["music-production", "vst", "hip-hop"]
    }
  ];

  const categories = [
    { id: "all", name: "All Posts", count: 156 },
    { id: "showcase", name: "Showcase", count: 45 },
    { id: "help", name: "Help & Tips", count: 67 },
    { id: "video", name: "Video", count: 23 },
    { id: "music", name: "Music", count: 21 }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? posts 
    : posts.filter(p => p.category === selectedCategory);

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-purple-900 mb-2">
                Community Forum
              </h1>
              <p className="text-xl text-purple-700">
                Connect, share, and learn with fellow creators
              </p>
            </div>
            <Button className="bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-purple-900 font-semibold">
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-900">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "ghost"}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full justify-between ${
                          selectedCategory === category.id 
                            ? "bg-gradient-to-r from-purple-600 to-violet-600" 
                            : "text-purple-700 hover:bg-purple-50"
                        }`}
                      >
                        {category.name}
                        <Badge variant="secondary" className="bg-yellow-100 text-purple-800">
                          {category.count}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Posts */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="border-purple-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={post.avatar} />
                            <AvatarFallback className="bg-purple-100 text-purple-700">
                              {post.author[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-purple-900 hover:text-purple-700 cursor-pointer">
                              {post.title}
                            </CardTitle>
                            <CardDescription>
                              by {post.author} • {post.timeAgo}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-purple-700 mb-4">{post.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-purple-300 text-purple-700">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-purple-600">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            {post.replies}
                          </div>
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {post.likes}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.views}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.timeAgo}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Forum;