
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const Hero = () => {
  const [api, setApi] = useState<any>();

  const carouselSlides = [
    {
      title: "Transform Your Home with",
      highlight: "Premium Curtains",
      description: "Professional installation, premium quality fabrics, and lightning-fast delivery. Experience the difference with Aziz Khan Curtains.",
      emoji: "🏠",
      backgroundImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Luxury Blinds for",
      highlight: "Modern Living",
      description: "Sleek and functional window treatments that combine style with practicality. Perfect for contemporary homes.",
      emoji: "🪟",
      backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Custom Drapes for",
      highlight: "Every Space",
      description: "Tailored solutions for bedrooms, living rooms, offices, and more. Made to measure with premium fabrics.",
      emoji: "✨",
      backgroundImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
    }
  ];

  // Auto-scroll carousel every 3 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="home" className="relative bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {carouselSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="space-y-4 md:space-y-6">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                        {slide.title}
                        <span className="text-red-500 block">{slide.highlight}</span>
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg w-full sm:w-auto">
                📋 Book Free Home Visit <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg w-full sm:w-auto">
                View Our Collection
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 pt-6 md:pt-8 border-t border-gray-200">
              <div className="text-center">
                <Clock className="w-8 h-8 md:w-10 md:h-10 text-red-500 mx-auto mb-2 md:mb-3" />
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Same Day</div>
                <div className="font-bold text-sm md:text-base text-gray-900">Delivery</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-red-500 mx-auto mb-2 md:mb-3" />
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">100%</div>
                <div className="font-bold text-sm md:text-base text-gray-900">Guarantee</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 md:w-10 md:h-10 text-red-500 mx-auto mb-2 md:mb-3" />
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">15+ Years</div>
                <div className="font-bold text-sm md:text-base text-gray-900">Experience</div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {carouselSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                      </div>
                      <div className="relative z-10 h-full flex items-end p-6 md:p-8">
                        <div className="text-white">
                          <div className="text-4xl md:text-5xl mb-2">{slide.emoji}</div>
                          <h3 className="text-xl md:text-2xl font-bold mb-2">{slide.highlight}</h3>
                          <p className="text-sm md:text-base opacity-90">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 mt-6 md:mt-8">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Why Choose Us?</h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-gray-700">Free consultation & measurement at your home</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-gray-700">Premium quality fabrics & materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-gray-700">Professional installation by experts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-gray-700">1-year warranty on all products</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
