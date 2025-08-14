import React from 'react';
import { TeamAvatar } from './TeamAvatar';

const TeamAvatarTest = () => {
  const sampleMembers = [
    {
      id: '1',
      name: 'John Doe',
      role: 'Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: '2',
      name: 'Jane Smith',
      role: 'Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      role: 'Manager'
    },
    {
      id: '4',
      name: 'Sarah Wilson',
      role: 'Developer'
    },
    {
      id: '5',
      name: 'Tom Brown',
      role: 'Tester'
    }
  ];

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold">Team Avatar Examples</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Default (Medium)</h3>
          <TeamAvatar members={sampleMembers} />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Small Size</h3>
          <TeamAvatar members={sampleMembers} size="sm" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Large Size</h3>
          <TeamAvatar members={sampleMembers} size="lg" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">With Names</h3>
          <TeamAvatar members={sampleMembers} showNames={true} />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Max 3 Visible</h3>
          <TeamAvatar members={sampleMembers} maxVisible={3} />
        </div>
      </div>
    </div>
  );
};

export default TeamAvatarTest;