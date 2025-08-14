import React from 'react';
import { DollarSign, Users, ShoppingBag, Star } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: DollarSign,
      value: "$2.5M+",
      label: "Creator Earnings",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Users,
      value: "50K+",
      label: "Active Creators",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: ShoppingBag,
      value: "100K+",
      label: "Products Sold",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Star,
      value: "4.9",
      label: "Average Rating",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Creators</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join a thriving marketplace where creativity meets opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;