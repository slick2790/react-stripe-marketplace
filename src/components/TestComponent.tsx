import React from 'react';

const TestComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          App is Working!
        </h1>
        <p className="text-xl text-gray-600">
          React Stripe Marketplace is deployed successfully
        </p>
        <div className="mt-8 p-4 bg-white rounded-lg shadow">
          <p className="text-sm text-gray-500">
            Build time: {new Date().toISOString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;