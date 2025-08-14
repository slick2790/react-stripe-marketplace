import { Star, Users, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Creator } from "../data/mockData";

interface CreatorCardProps {
  creator: Creator;
}

const CreatorCard = ({ creator }: CreatorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex items-center mb-4">
        <img
          src={creator.avatar}
          alt={creator.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{creator.name}</h3>
          <div className="flex items-center text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{creator.rating}</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm">{creator.bio}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-1" />
          <span>{creator.followers.toLocaleString()} followers</span>
        </div>
        <div className="flex items-center">
          <Package className="w-4 h-4 mr-1" />
          <span>{creator.products} products</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {creator.specialties.slice(0, 3).map((specialty) => (
          <span
            key={specialty}
            className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
          >
            {specialty}
          </span>
        ))}
      </div>
      
      <Link 
        to={`/creator/${creator.id}`}
        className="block w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center"
      >
        View Profile
      </Link>
    </div>
  );
};

export default CreatorCard;