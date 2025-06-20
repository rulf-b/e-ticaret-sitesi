// src/components/HeroSlider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button } from '@/components/ui/button';
import { heroSlides } from '@/data/staticData';

const HeroSlider: React.FC = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-[300px] md:h-[500px]"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
              <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
                <div className="max-w-lg text-white">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg !rounded-button whitespace-nowrap cursor-pointer">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;