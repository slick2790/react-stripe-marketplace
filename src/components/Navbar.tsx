import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-purple-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg flex items-center justify-center mr-2">
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                CreatorHub
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-purple-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/products" className="text-purple-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Products
              </a>
              <a href="/tutorials" className="text-purple-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Tutorials
              </a>
              <a href="/forum" className="text-purple-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Forum
              </a>
              <a href="/live" className="text-purple-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Live
              </a>
              <a href="/subscription" className="text-purple-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pricing
              </a>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-purple-700 hover:text-yellow-500 hover:bg-yellow-50">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart
            </Button>
            <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Sign In
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-purple-900 font-semibold shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
            >
              Start Selling
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-purple-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-purple-700 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="/products" className="text-purple-700 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              Products
            </a>
            <a href="/tutorials" className="text-purple-700 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              Tutorials
            </a>
            <a href="/forum" className="text-purple-700 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              Forum
            </a>
            <a href="/live" className="text-purple-700 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              Live
            </a>
            <a href="/subscription" className="text-purple-700 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </a>
            <div className="pt-4 pb-3 border-t border-purple-100">
              <div className="flex flex-col space-y-2 px-3">
                <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50 w-full">
                  Sign In
                </Button>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-purple-900 font-semibold w-full"
                >
                  Start Selling
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
