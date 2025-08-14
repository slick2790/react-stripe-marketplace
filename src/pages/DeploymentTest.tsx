import React from 'react';

const DeploymentTest: React.FC = () => {
  const buildInfo = {
    timestamp: new Date().toISOString(),
    environment: 'production',
    framework: 'React + Vite',
    deployment: 'Vercel',
    currentUrl: window.location.href,
    pathname: window.location.pathname
  };

  const testRoutes = [
    { path: '/', label: 'Home' },
    { path: '/success', label: 'Success Page' },
    { path: '/test', label: 'This Test Page' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
            🚀 Deployment & Routing Test
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-green-800 mb-4">✅ Build Success</h2>
              <ul className="space-y-2 text-green-700">
                <li>• React app compiled successfully</li>
                <li>• TypeScript types validated</li>
                <li>• Tailwind CSS processed</li>
                <li>• Assets optimized</li>
                <li>• Routing configured</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">⚙️ Current Info</h2>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>URL:</strong> {buildInfo.currentUrl}</div>
                <div><strong>Path:</strong> {buildInfo.pathname}</div>
                <div><strong>Time:</strong> {buildInfo.timestamp}</div>
                <div><strong>Platform:</strong> {buildInfo.deployment}</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">🔗 Test Routes</h2>
            <div className="grid gap-3">
              {testRoutes.map((route) => (
                <a
                  key={route.path}
                  href={route.path}
                  className="block p-3 bg-white border rounded hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium">{route.label}</span>
                  <span className="text-gray-500 ml-2">({route.path})</span>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a 
              href="/" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentTest;
