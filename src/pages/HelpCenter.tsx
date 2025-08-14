import React from 'react';
import { Search, MessageCircle, Book, Phone } from 'lucide-react';

const HelpCenter: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600">Find answers to your questions</p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <MessageCircle className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Get instant help from our support team</p>
            <button className="text-purple-600 font-medium hover:text-purple-700">Start Chat</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Book className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Documentation</h3>
            <p className="text-gray-600 mb-4">Browse our comprehensive guides</p>
            <button className="text-purple-600 font-medium hover:text-purple-700">View Docs</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Phone className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-4">Call us for urgent issues</p>
            <button className="text-purple-600 font-medium hover:text-purple-700">Call Now</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2">How do I create my first product?</h3>
              <p className="text-gray-600">Visit your dashboard and click "Add Product" to get started with our step-by-step guide.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2">How do payments work?</h3>
              <p className="text-gray-600">We accept both Stripe (cards) and Cash App Pay for secure payments. You'll receive payouts weekly to your connected account.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2">What file types are supported?</h3>
              <p className="text-gray-600">We support PDF, ZIP, MP4, MP3, and most common digital file formats.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;