import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Users, Package, MapPin, Calendar, Mail, MessageCircle } from 'lucide-react';
import AppLayout from '../components/AppLayout';
import ProductCard from '../components/ProductCard';
import SocialLinks from '../components/SocialLinks';
import ReviewCard from '../components/ReviewCard';
import { mockCreators, mockProducts } from '../data/mockData';
import { mockReviews } from '../data/mockReviews';

const CreatorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const creator = mockCreators.find(c => c.id === id);
  const creatorProducts = mockProducts.filter(p => p.creator === creator?.name);
  const creatorReviews = mockReviews.filter(r => r.creatorId === id);

  if (!creator) {
    return (
      <AppLayout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-gray-900">Creator not found</h1>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Creator Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src={creator?.avatar || "/placeholder.svg"}
              alt={creator?.name || "Creator"}
              className="w-32 h-32 rounded-full object-cover"
            />

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{creator.name}</h1>
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-lg font-semibold mr-4">{creator.rating}</span>
                <Users className="w-5 h-5 text-gray-400 mr-1" />
                <span className="text-gray-600">{creator.followers.toLocaleString()} followers</span>
              </div>
              <p className="text-gray-600 text-lg mb-4">{creator.bio}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {creator.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                  >
                    {specialty}
                  </span>
                 ))}
               </div>
              <div className="flex items-center text-gray-500 mb-4">
                <Package className="w-4 h-4 mr-1" />
                <span className="mr-6">{creator.products} products available</span>
                <MapPin className="w-4 h-4 mr-1" />
                <span className="mr-6">{creator.location}</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span>Joined {new Date(creator.joinDate).toLocaleDateString()}</span>
              </div>
              
              {/* Contact & Social */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex gap-2">
                  <a
                    href={`mailto:${creator.email}`}
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </a>
                  <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </button>
                </div>
                <SocialLinks socialMedia={creator.socialMedia} />
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews ({creatorReviews.length})</h2>
          {creatorReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {creatorReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No reviews yet.</p>
            </div>
          )}
        </div>

        {/* Products Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Products by {creator.name}</h2>
          {creatorProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creatorProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No products available yet.</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default CreatorProfile;