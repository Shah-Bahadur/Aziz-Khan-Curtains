
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Premium Curtains with
                <span className="text-orange-400 block">Lightning Fast Delivery</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your space with our exquisite collection of curtains. 
                Professional installation, premium quality, and same-day delivery across the city.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
                Order Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg">
                View Collection
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-600">
              <div className="text-center">
                <Clock className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">Same Day</div>
                <div className="font-semibold">Delivery</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">100%</div>
                <div className="font-semibold">Guarantee</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">15+ Years</div>
                <div className="font-semibold">Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-xl p-6 text-navy-900 transform -rotate-3">
                <h3 className="text-2xl font-bold mb-4">Quick Service Promise</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Free consultation & measurement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Same-day delivery available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Professional installation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>1-year warranty included</span>
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
