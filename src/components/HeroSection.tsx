import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-purple-700">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-yellow-400 animate-bounce delay-300" />
        <Zap className="absolute top-1/3 right-1/4 w-8 h-8 text-amber-300 animate-bounce delay-700" />
        <Star className="absolute bottom-1/3 left-1/3 w-5 h-5 text-yellow-500 animate-bounce delay-1000" />
        <Sparkles className="absolute bottom-1/4 right-1/3 w-7 h-7 text-amber-400 animate-bounce delay-500" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Where{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent animate-pulse">
            Creativity
          </span>{" "}
          Meets Commerce
        </h1>
        
        <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
          Join thousands of creators selling digital products, courses, and services 
          to a global audience. Start your journey today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-purple-900 font-semibold px-8 py-6 text-lg shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105"
          >
            Start Selling <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-purple-900 px-8 py-6 text-lg transition-all duration-300"
            onClick={() => window.location.href = '/marketplace'}
          >
            Browse Marketplace
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">10K+</div>
            <div className="text-purple-100">Active Creators</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-amber-300/20">
            <div className="text-3xl font-bold text-amber-300 mb-2">$2M+</div>
            <div className="text-purple-100">Creator Earnings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
            <div className="text-3xl font-bold text-yellow-500 mb-2">50K+</div>
            <div className="text-purple-100">Products Sold</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;