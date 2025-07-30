import { Star } from "lucide-react";
import Image from "next/image";

type ProductCardType = {
  name: string;
  brand: string;
  price: string;
  rating: number;
  image: string;
};
const ProductCard: React.FC<ProductCardType> = ({
  name,
  brand,
  price,
  rating,
  image,
}) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-gray-100">
        <Image
          width={200}
          height={200}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">{brand}</p>
        <h3 className="font-semibold mb-2 text-sm text-gray-700">{name}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-lg font-bold mb-3 text-gray-700">{price}</p>
        <button className="w-full bg-blue-900 text-white py-2 rounded text-sm hover:bg-blue-800 transition-colors">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
