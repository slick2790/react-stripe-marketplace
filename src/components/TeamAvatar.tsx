import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface TeamMember {
  id: string;
  name: string;
  image?: string;
  role?: string;
}

interface TeamAvatarProps {
  members: TeamMember[];
  maxVisible?: number;
  size?: "sm" | "md" | "lg" | "xl";
  showNames?: boolean;
}

export const TeamAvatar: React.FC<TeamAvatarProps> = ({
  members,
  maxVisible = 4,
  size = "md",
  showNames = false
}) => {
  const visibleMembers = members.slice(0, maxVisible);
  const remainingCount = Math.max(0, members.length - maxVisible);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {visibleMembers.map((member) => (
          <div key={member.id} className="relative group">
            <Avatar size={size} className="border-2 border-background">
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback className="text-xs font-medium">
                {getInitials(member.name)}
              </AvatarFallback>
            </Avatar>
            {!showNames && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {member.name}
                {member.role && <div className="text-gray-300">{member.role}</div>}
              </div>
            )}
          </div>
        ))}
        
        {remainingCount > 0 && (
          <Avatar size={size} className="border-2 border-background bg-muted">
            <AvatarFallback className="text-xs font-medium">
              +{remainingCount}
            </AvatarFallback>
          </Avatar>
        )}
      </div>
      
      {showNames && (
        <div className="ml-3">
          <div className="text-sm font-medium">
            {visibleMembers.map(m => m.name).join(', ')}
            {remainingCount > 0 && ` and ${remainingCount} more`}
          </div>
        </div>
      )}
    </div>
  );
};