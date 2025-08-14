import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const SimpleApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            React Stripe Marketplace
          </h1>
          <p className="text-xl text-gray-600">
            A modern marketplace built with React and Stripe
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Product {i}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Amazing digital product #{i} ready for purchase
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    ${(i * 10 + 9).toFixed(2)}
                  </span>
                  <Button>Buy Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-8">
            <h2 className="text-2xl font-semibold mb-4">Ready to Deploy!</h2>
            <p className="text-gray-600 mb-4">
              Your React Stripe marketplace is working correctly.
            </p>
            <Button variant="outline">Learn More</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SimpleApp;