// src/components/ProductCard.tsx - YENİ HALİ
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from '@/types'; // Product tanımını yeni dosyadan alıyoruz

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Card className="overflow-hidden group hover:shadow-md transition-shadow duration-300 cursor-pointer">
            <div className="aspect-square overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <CardContent className="p-4">
                <div className="flex flex-col h-full">
                    <div className="mb-2">
                        <span className="text-xs text-gray-500">
                            {product.category} / {product.subCategory}
                        </span>
                    </div>
                    <h3 className="font-medium text-lg mb-1 truncate">{product.name}</h3>
                    <div className="mt-auto pt-2 flex justify-between items-center">
                        <span className="text-amber-600 font-bold">{product.price} ₺</span>
                        <div className="flex space-x-2">
                            <button className="text-gray-400 hover:text-amber-600 transition-colors cursor-pointer">
                                <i className="fas fa-heart"></i>
                            </button>
                            <button className="text-gray-400 hover:text-amber-600 transition-colors cursor-pointer">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;