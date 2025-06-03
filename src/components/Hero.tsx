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
      description: "Professional installation, premium quality fabrics, and lightning-fast delivery. Experience the difference with Aziz Khan Curtains."
    },
    {
      title: "Luxury Blinds for",
      highlight: "Modern Living",
      description: "Sleek and functional window treatments that combine style with practicality. Perfect for contemporary homes."
    },
    {
      title: "Custom Drapes for",
      highlight: "Every Space",
      description: "Tailored solutions for bedrooms, living rooms, offices, and more. Made to measure with premium fabrics."
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
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20"
      style={{ backgroundImage: "url('/curtainshs.png')" }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {carouselSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="space-y-6">
                      <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight py-5 text-white">
                        {slide.title}
                        <span className="text-champagne-600 block">{slide.highlight}</span>
                      </h1>
                      <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-champagne-600 hover:bg-champagne-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg">
                Book Free Home Visit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              {/* <Button size="lg" variant="outline" className="border-gray-300 hover:border-champagne-700 text-gray-700 hover:bg-champagne-700 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg">
                View Our Collection
              </Button> */}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <Clock className="w-10 h-10 text-champagne-600 mx-auto mb-3" />
                <div className="text-sm text-white uppercase tracking-wide">24 Hours</div>
                <div className="font-bold text-white">Customer Support</div>
              </div>
              <div className="text-center">
                <Shield className="w-10 h-10 text-champagne-600 mx-auto mb-3" />
                <div className="text-sm text-white uppercase tracking-wide">100%</div>
                <div className="font-bold text-white">Guarantee</div>
              </div>
              <div className="text-center">
                <Award className="w-10 h-10 text-champagne-600 mx-auto mb-3" />
                <div className="text-sm text-white uppercase tracking-wide">15+ Years</div>
                <div className="font-bold text-white">Experience</div>
              </div>
            </div>
          </div>
{/* 
          <div className="relative mt-10 lg:mt-0">
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/40 shadow-lg">
              <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-champagne-600 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-base sm:text-xl">Free consultation & measurement at your home</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-champagne-600 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-base sm:text-xl">Premium quality fabrics & materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-champagne-600 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-base sm:text-xl">Professional installation by experts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-champagne-600 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-base sm:text-xl">1-year warranty on all products</span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
