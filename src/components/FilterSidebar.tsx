// src/components/FilterSidebar.tsx
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { categories, subCategories } from '@/data/staticData';

interface FilterSidebarProps {
    priceRange: [number, number];
    setPriceRange: (value: [number, number]) => void;
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
    selectedSubCategory: string | null;
    setSelectedSubCategory: (subCategory: string | null) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
    priceRange,
    setPriceRange,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
}) => {
  return (
    <div className="w-full lg:w-64 space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
        <h3 className="font-medium text-lg mb-4">Filtreler</h3>

        <div className="mb-6">
          <Accordion type="single" collapsible defaultValue="categories">
            <AccordionItem value="categories">
              <AccordionTrigger className="text-base font-medium">Kategoriler</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 mt-2">
                  {categories.map((category) => (
                    <div key={category} className="space-y-2">
                      <div
                        className={`cursor-pointer hover:text-amber-600 ${selectedCategory === category ? 'text-amber-600 font-medium' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </div>

                      {selectedCategory === category && (
                        <div className="ml-4 space-y-2 text-sm">
                          {(subCategories[category as keyof typeof subCategories] || []).map((subCategory) => (
                            <div
                              key={subCategory}
                              className={`cursor-pointer hover:text-amber-600 ${selectedSubCategory === subCategory ? 'text-amber-600 font-medium' : ''}`}
                              onClick={() => setSelectedSubCategory(subCategory)}
                            >
                              {subCategory}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-4">Fiyat Aralığı</h4>
          <div className="px-2">
            <Slider
              defaultValue={[0, 5000]}
              max={5000}
              step={100}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="mb-6"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{priceRange[0]} ₺</span>
              <span>{priceRange[1]} ₺</span>
            </div>
          </div>
        </div>

        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white !rounded-button whitespace-nowrap">
          Filtreleri Uygula
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;