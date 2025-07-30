import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: "Playedon - Kelimutu Run Model A",
      brand: "SEPATU PRIA, OLAHRAGA",
      price: "Rp. 320.000,-",
      rating: 5,
      image: "https://picsum.photos/200/400",
    },
    {
      id: 2,
      name: "Le Modiste - Sepatu Kasual Wanita",
      brand: "SEPATU WANITA, KASUAL",
      price: "Rp. 230.000,-",
      rating: 5,
      image: "https://picsum.photos/400/300",
    },
    {
      id: 3,
      name: "X-Voyager Vintage Forrester",
      brand: "SEPATU PRIA, KASUAL",
      price: "Rp. 420.000,-",
      rating: 4,
      image: "https://picsum.photos/400/300",
    },
    {
      id: 4,
      name: "Cadillac Insignia 91",
      brand: "SANDAL JEPIT PRIA",
      price: "Rp. 357.000,-",
      rating: 5,
      image: "https://picsum.photos/400/300",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-700">
            Pilihan Minggu Ini
          </h2>
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 text-gray-700">
            PRODUK LAINNYA
          </button>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                brand={product.brand}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
