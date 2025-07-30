import { Search, ShoppingCart, User } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Search className="w-5 h-5" />
            <h1 className="text-2xl font-bold">mino.</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-blue-300">
              BERANDA
            </a>
            <a href="#" className="hover:text-blue-300">
              BELANJA ∨
            </a>
            <a href="#" className="hover:text-blue-300">
              BUNDEL 1 ∨
            </a>
            <a href="#" className="hover:text-blue-300">
              BUNDEL 2 ∨
            </a>
            <a href="#" className="hover:text-blue-300">
              PROMO
            </a>
            <a href="#" className="hover:text-blue-300">
              BLOG
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <ShoppingCart className="w-5 h-5" />
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
