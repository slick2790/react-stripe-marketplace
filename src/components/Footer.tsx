import { Zap, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-purple-900" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                CreatorHub
              </span>
            </div>
            <p className="text-purple-200 mb-6 max-w-md">
              Empowering creators worldwide to build, sell, and grow their digital businesses. 
              Join our community of successful entrepreneurs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-300 hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-purple-300 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-purple-300 hover:text-yellow-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-purple-300 hover:text-yellow-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-purple-200 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="/products" className="text-purple-200 hover:text-yellow-400 transition-colors">Products</a></li>
              <li><a href="/marketplace" className="text-purple-200 hover:text-yellow-400 transition-colors">Creators</a></li>
              <li><a href="/subscription" className="text-purple-200 hover:text-yellow-400 transition-colors">Pricing</a></li>
              <li><a href="/contact" className="text-purple-200 hover:text-yellow-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/help-center" className="text-purple-200 hover:text-yellow-400 transition-colors">Help Center</a></li>
              <li><a href="/contact" className="text-purple-200 hover:text-yellow-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-purple-200 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-purple-200 hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-purple-200 hover:text-yellow-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-300 text-sm">
            © 2024 CreatorHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-purple-300 text-sm">Made with ❤️ for creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;