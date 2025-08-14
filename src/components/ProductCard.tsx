import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Product } from "../data/mockData";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-purple-100">
      <div className="relative overflow-hidden">
        <img 
          src={product?.image || "/placeholder.svg"} 
          alt={product?.title || "Product"}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">{product?.category || "General"}</Badge>
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-3 right-3 w-8 h-8 p-0 bg-white/80 hover:bg-white text-purple-600 hover:text-yellow-500"
        >
          <Heart className="w-4 h-4" />
        </Button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < (product?.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-purple-600">({product?.downloads || 0})</span>
        </div>
        
        <h3 className="font-semibold text-purple-900 mb-2 line-clamp-2 group-hover:text-purple-700 transition-colors">
          {product?.title || "Untitled Product"}
        </h3>
        
        <p className="text-sm text-purple-600 mb-3">by {product?.creator || "Unknown Creator"}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-900">${product?.price || 0}</span>
          </div>
          
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-purple-900 font-semibold shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;