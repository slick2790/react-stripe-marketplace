import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      title: "Premium UI Kit",
      price: 49,
      rating: 4.9,
      downloads: 1250,
      image: "/api/placeholder/300/200",
      creator: "DesignPro"
    },
    {
      title: "React Course Bundle",
      price: 99,
      rating: 4.8,
      downloads: 890,
      image: "/api/placeholder/300/200", 
      creator: "CodeMaster"
    },
    {
      title: "Logo Template Pack",
      price: 29,
      rating: 4.7,
      downloads: 2100,
      image: "/api/placeholder/300/200",
      creator: "BrandStudio"
    },
    {
      title: "Marketing eBook",
      price: 19,
      rating: 4.9,
      downloads: 1680,
      image: "/api/placeholder/300/200",
      creator: "MarketingGuru"
    },
    {
      title: "Photo Presets",
      price: 15,
      rating: 4.6,
      downloads: 3200,
      image: "/api/placeholder/300/200",
      creator: "PhotoPro"
    },
    {
      title: "Business Templates",
      price: 39,
      rating: 4.8,
      downloads: 950,
      image: "/api/placeholder/300/200",
      creator: "BizTools"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the most popular digital products from top creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/products"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;