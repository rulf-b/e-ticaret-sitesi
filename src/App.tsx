// src/App.tsx
import React, { useState, useEffect, useMemo } from "react";

// Kütüphaneler
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Bileşenler
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import FilterSidebar from "./components/FilterSidebar";
import ProductCard from "./components/ProductCard";
import type { Product } from "./types";
import Footer from "./components/Footer";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Statik Veri
import { categories } from './data/staticData';


const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>("popular");

  // Örnek ürünleri oluşturma efekti
  useEffect(() => {
    const sampleProducts: Product[] = Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      name: `Ahşap Ürün ${i + 1}`,
      price: Math.floor(Math.random() * 4500) + 500,
      image: `https://readdy.ai/api/search-image?query=Beautiful%20wooden%20furniture%20or%20decor%20item%20with%20natural%20wood%20grain%20texture%2C%20minimalist%20design%2C%20soft%20lighting%2C%20clean%20background%2C%20professional%20product%20photography%2C%20high%20resolution%2C%20detailed%20craftsmanship&width=400&height=400&seq=${i + 1}&orientation=squarish`,
      category: ["Mobilya", "Dekorasyon", "Mutfak", "Banyo"][Math.floor(Math.random() * 4)],
      subCategory: ["Masa", "Sandalye", "Raf", "Tabure", "Aksesuar"][Math.floor(Math.random() * 5)],
      isPopular: Math.random() > 0.7,
    }));
    setProducts(sampleProducts);
  }, []);

  // Filtreleme ve Sıralama Mantığı (useMemo ile optimize edildi)
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedSubCategory) {
      result = result.filter((p) => p.subCategory === selectedSubCategory);
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortOption) {
        case "price-asc": result.sort((a, b) => a.price - b.price); break;
        case "price-desc": result.sort((a, b) => b.price - a.price); break;
        case "name-asc": result.sort((a, b) => a.name.localeCompare(b.name)); break;
        case "name-desc": result.sort((a, b) => b.name.localeCompare(a.name)); break;
        case "popular": result.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0)); break;
        case "newest": result.sort((a, b) => b.id - a.id); break;
        default: break;
    }
    return result;
  }, [products, selectedCategory, selectedSubCategory, priceRange, sortOption]);

  const clearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setPriceRange([0, 5000]);
  };

  // Mobil Filtre Butonu için Ayrı Component
  const MobileFilterButton = () => (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant="outline" className="mr-2 !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fas fa-filter mr-2"></i> Filtreler
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
                <SheetTitle>Filtreler</SheetTitle>
                <SheetDescription>Ürünleri filtrelemek için seçenekleri kullanın</SheetDescription>
            </SheetHeader>
            <div className="mt-6">
                <FilterSidebar {...{ priceRange, setPriceRange, selectedCategory, setSelectedCategory, selectedSubCategory, setSelectedSubCategory }} />
            </div>
        </SheetContent>
    </Sheet>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSlider />

      {/* Diğer bölümler buraya eklenebilir: Kategoriler, Öne Çıkanlar vb. */}

      <main className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ürünlerimiz</h2>

          <div className="flex flex-col lg:flex-row gap-8">
              <div className="hidden lg:block">
                  <FilterSidebar {...{ priceRange, setPriceRange, selectedCategory, setSelectedCategory, selectedSubCategory, setSelectedSubCategory }} />
              </div>

              <div className="flex-1">
                  {/* Mobile & Desktop Kontrolleri */}
                  <div className="flex justify-between items-center mb-6">
                      <div className="lg:hidden">
                        <MobileFilterButton />
                      </div>
                      <div className="hidden lg:flex text-sm text-gray-500">
                          {filteredProducts.length} ürün bulundu
                      </div>

                      <Select value={sortOption} onValueChange={setSortOption}>
                          <SelectTrigger className="w-[180px] !rounded-button whitespace-nowrap cursor-pointer">
                              <SelectValue placeholder="Sıralama" />
                          </SelectTrigger>
                          <SelectContent>
                              <SelectItem value="popular">Popülerlik</SelectItem>
                              <SelectItem value="newest">En Yeniler</SelectItem>
                              <SelectItem value="price-asc">Fiyat (Artan)</SelectItem>
                              <SelectItem value="price-desc">Fiyat (Azalan)</SelectItem>
                              <SelectItem value="name-asc">İsim (A-Z)</SelectItem>
                              <SelectItem value="name-desc">İsim (Z-A)</SelectItem>
                          </SelectContent>
                      </Select>
                  </div>

                  {/* Ürün Listesi */}
                  {filteredProducts.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {filteredProducts.map((product) => (
                              <ProductCard key={product.id} product={product} />
                          ))}
                      </div>
                  ) : (
                      <div className="text-center py-10 border rounded-md">
                          <h3 className="text-xl font-medium">Üzgünüz!</h3>
                          <p className="text-gray-500 mt-2">Aradığınız kriterlere uygun ürün bulunamadı.</p>
                      </div>
                  )}

                  {/* Sayfalama buraya gelecek */}
              </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;