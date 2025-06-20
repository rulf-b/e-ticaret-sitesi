// src/components/Header.tsx
import React from "react";
import { Input } from "@/components/ui/input";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-amber-700">Eliziahsap</a>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-amber-600 font-medium">Ana Sayfa</a>
          <a href="/products" className="text-gray-700 hover:text-amber-600 font-medium">Ürünler</a>
          <a href="/about" className="text-gray-700 hover:text-amber-600 font-medium">Hakkımızda</a>
          <a href="/contact" className="text-gray-700 hover:text-amber-600 font-medium">İletişim</a>
          <a href="/faq" className="text-gray-700 hover:text-amber-600 font-medium">SSS</a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Ara..."
              className="w-40 md:w-60 pl-10 pr-4 py-2 rounded-full border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 text-sm"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <i className="fas fa-search"></i>
            </div>
          </div>

          <a href="/favorites" className="text-gray-700 hover:text-amber-600 relative cursor-pointer">
            <i className="fas fa-heart text-xl"></i>
          </a>

          <a href="/cart" className="text-gray-700 hover:text-amber-600 relative cursor-pointer">
            <i className="fas fa-shopping-cart text-xl"></i>
            <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </a>

          <button className="md:hidden text-gray-700 focus:outline-none cursor-pointer">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;