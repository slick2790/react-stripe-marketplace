import React from 'react';
import AppLayout from '@/components/AppLayout';
import CreatorDashboard from '@/components/CreatorDashboard';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CreatorDashboard />
    </div>
  );
};

export default Dashboard;