import React from 'react';
import { CheckCircle, Upload, DollarSign, Users } from 'lucide-react';

const SellerGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Seller Guide</h1>
          <p className="text-xl text-gray-600">Everything you need to know about selling on CreatorVault</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Create Your Account</h3>
                  <p className="text-gray-600">Sign up and complete your seller profile with your skills and expertise.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Upload Your First Product</h3>
                  <p className="text-gray-600">Add high-quality digital products with detailed descriptions and previews.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Set Your Pricing</h3>
                  <p className="text-gray-600">Price competitively based on value and market research.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Promote Your Products</h3>
                  <p className="text-gray-600">Share on social media and engage with the community.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Upload className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Easy Upload</h3>
              <p className="text-gray-600 text-sm">Drag and drop your files with our simple upload system</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <DollarSign className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Instant Payouts</h3>
              <p className="text-gray-600 text-sm">Get paid weekly with our automated payout system</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">Sell to customers worldwide with built-in marketing tools</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Use high-quality images and detailed product descriptions</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Respond to customer messages within 24 hours</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Keep your products updated and relevant</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Engage with the community and build your reputation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerGuide;