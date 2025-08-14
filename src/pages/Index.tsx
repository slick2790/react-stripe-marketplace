import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎉 Deployment Successful!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Your React Stripe Marketplace is now live on Vercel
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>React 18</span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>TypeScript</span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Tailwind CSS</span>
                  <span className="text-green-600">✓</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Vercel Deploy</span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Stripe Ready</span>
                  <span className="text-blue-600">⚡</span>
                </div>
                <div className="flex justify-between">
                  <span>SPA Routing</span>
                  <span className="text-green-600">✓</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/success" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Test Success Page
            </a>
            <a 
              href="/test" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Deployment Test
            </a>
            <a 
              href="/nonexistent" 
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Test 404 Page
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Build completed at: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Index;