import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Search, Filter } from 'lucide-react';

const ProductGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      title: "Premium UI Kit",
      price: 49,
      rating: 4.9,
      downloads: 1250,
      image: "/api/placeholder/300/200",
      creator: "DesignPro",
      category: "design"
    },
    {
      title: "React Course Bundle",
      price: 99,
      rating: 4.8,
      downloads: 890,
      image: "/api/placeholder/300/200", 
      creator: "CodeMaster",
      category: "education"
    },
    {
      title: "Logo Template Pack",
      price: 29,
      rating: 4.7,
      downloads: 2100,
      image: "/api/placeholder/300/200",
      creator: "BrandStudio",
      category: "design"
    },
    {
      title: "Marketing eBook",
      price: 19,
      rating: 4.9,
      downloads: 1680,
      image: "/api/placeholder/300/200",
      creator: "MarketingGuru",
      category: "education"
    },
    {
      title: "Photo Presets",
      price: 15,
      rating: 4.6,
      downloads: 3200,
      image: "/api/placeholder/300/200",
      creator: "PhotoPro",
      category: "photography"
    },
    {
      title: "Business Templates",
      price: 39,
      rating: 4.8,
      downloads: 950,
      image: "/api/placeholder/300/200",
      creator: "BizTools",
      category: "business"
    },
    {
      title: "Video Transitions Pack",
      price: 79,
      rating: 4.9,
      downloads: 1540,
      image: "/api/placeholder/300/200",
      creator: "VideoFX",
      category: "video"
    },
    {
      title: "Beat Library Vol. 1",
      price: 45,
      rating: 4.8,
      downloads: 2200,
      image: "/api/placeholder/300/200",
      creator: "BeatMaker",
      category: "music"
    },
    {
      title: "3D Character Models",
      price: 89,
      rating: 4.7,
      downloads: 780,
      image: "/api/placeholder/300/200",
      creator: "3DStudio",
      category: "3d"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'design', label: 'Design' },
    { value: 'education', label: 'Education' },
    { value: 'photography', label: 'Photography' },
    { value: 'business', label: 'Business' },
    { value: 'video', label: 'Video Editing' },
    { value: 'music', label: 'Music Production' },
    { value: '3d', label: '3D Modeling' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = (product?.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (product?.creator || "").toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product?.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;