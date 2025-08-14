import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-violet-800 to-purple-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full mb-8">
          <Sparkles className="w-8 h-8 text-purple-900" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your
          <span className="block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
            Creator Journey?
          </span>
        </h2>
        
        <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of successful creators who are building their businesses 
          and reaching customers worldwide. Your success story starts here.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-purple-900 font-semibold px-8 py-6 text-lg shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-purple-900 px-8 py-6 text-lg transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-12 text-purple-200">
          <p className="text-sm">✨ No setup fees • 30-day money-back guarantee • 24/7 support</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
