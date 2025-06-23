// import { Button } from "@/components/ui/button";
// import { ArrowRight, Shield, Clock, Award } from "lucide-react";
// import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
// import { useState, useEffect } from "react";

// const Hero = () => {
//   const [api, setApi] = useState<any>();

//   const carouselSlides = [
//     {
//       title: "Transform Your Home with",
//       highlight: "Premium Curtains",
//       description: "Professional installation, premium quality fabrics, and lightning-fast delivery. Experience the difference with Aziz Khan Curtains."
//     },
//     {
//       title: "Luxury Blinds for",
//       highlight: "Modern Living",
//       description: "Sleek and functional window treatments that combine style with practicality. Perfect for contemporary homes."
//     },
//     {
//       title: "Custom Drapes for",
//       highlight: "Every Space",
//       description: "Tailored solutions for bedrooms, living rooms, offices, and more. Made to measure with premium fabrics."
//     }
//   ];

//   // Auto-scroll carousel every 3 seconds
//   useEffect(() => {
//     if (!api) return;

//     const interval = setInterval(() => {
//       api.scrollNext();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [api]);

//   return (
//     <section
//       id="home"
//       className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20"
//       style={{ backgroundImage: "url('/curtainshs.png')" }}
//     >
//       {/* Black Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-0"></div>
//       {/* Gradient overlay at bottom to white */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
        
//       <div className="relative z-10 container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           <div className="space-y-8">
//             <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
//               <CarouselContent>
//                 {carouselSlides.map((slide, index) => (
//                   <CarouselItem key={index}>
//                     <div className="space-y-6">
//                       <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight py-5 text-white">
//                         {slide.title}
//                         <span className="text-champagne-600 block">{slide.highlight}</span>
//                       </h1>
//                       <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
//                         {slide.description}
//                       </p>
//                     </div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//             </Carousel>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button size="lg" className="bg-champagne-600 hover:bg-champagne-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg">
//                 Book Free Home Visit <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//               {/* <Button size="lg" variant="outline" className="border-gray-300 hover:border-champagne-700 text-gray-700 hover:bg-champagne-700 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg">
//                 View Our Collection
//               </Button> */}
//             </div>

//             <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
//               <div className="text-center">
//                 <Clock className="w-10 h-10 text-champagne-600 mx-auto mb-3" />
//                 <div className="text-sm text-white uppercase tracking-wide">24 Hours</div>
//                 <div className="font-bold text-white">Customer Support</div>
//               </div>
//               <div className="text-center">
//                 <Shield className="w-10 h-10 text-champagne-600 mx-auto mb-3" />
//                 <div className="text-sm text-white uppercase tracking-wide">100%</div>
//                 <div className="font-bold text-white">Guarantee</div>
//               </div>
//               <div className="text-center">
//                 <Award className="w-10 h-10 text-champagne-600 mx-auto mb-3" />
//                 <div className="text-sm text-white uppercase tracking-wide">15+ Years</div>
//                 <div className="font-bold text-white">Experience</div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Hero = () => {
  const [api, setApi] = useState<any>();

  const carouselSlides = [
    {
      title: "Transform Your Home with",
      highlight: "Premium Curtains",
      description:
        "Professional installation, premium quality fabrics, and lightning-fast delivery. Experience the difference with Aziz Khan Curtains.",
      image: "/home.png",
    },
    {
      title: "Design a Productive Space with",
      highlight: "Office Blinds & Curtains",
      description:
        "From boardrooms to coworking spaces — we provide vertical blinds, roller shades, and custom curtains to reduce glare and boost focus.",
      image: "/office.png",
    },
    {
      title: "Comfort Meets Craftsmanship in",
      highlight: "Customized Sofas",
      description:
        "From full sofa builds to professional renovation and upholstery — we craft seating that suits your style and space perfectly.",
      image: "/sofa1.png",
    },
    {
      title: "Softness that redefines sleep with",
      highlight: "Tailored Bedsheets",
      description:
        "Made-to-fit bed linens in luxurious fabrics and elegant designs. Say goodbye to wrinkled sheets and hello to restful nights.",
      image: "/bedsheet7.png",
    },
  ];

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="home" className="relative">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {carouselSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div
                className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/40 z-0" />
                {/* Gradient Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 py-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight py-5 text-white">
                          {slide.title}
                          <span className="block bg-gradient-to-br from-champagne-100 to-champagne-700 bg-clip-text text-transparent">{slide.highlight}</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                          {slide.description}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                href="https://wa.me/971501234567?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20free%20home%20visit."
                target="_blank"
                rel="noopener noreferrer"
                >
            <Button 
            size="lg"
            className="bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:text-xl text-gray-900 font-semibold px-8 py-2 rounded-lg text-lg transition-all duration-300 shadow-xl">
              Book <u><b>Free</b></u> Home Visit <ArrowRight className="ml-2 w-5 h-5" />
            </Button></a>
                        
              
                      </div>

                      <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-300">
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
                    {/* Optional: Add a static image or promotional banner here */}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Hero;
