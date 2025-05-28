
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Transform Your Home with
                <span className="text-red-500 block">Premium Curtains</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional installation, premium quality fabrics, and lightning-fast delivery. 
                Experience the difference with Aziz Khan Curtains.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 text-lg rounded-lg">
                📋 Book Free Home Visit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-lg">
                View Our Collection
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <Clock className="w-10 h-10 text-red-500 mx-auto mb-3" />
                <div className="text-sm text-gray-500 uppercase tracking-wide">Same Day</div>
                <div className="font-bold text-gray-900">Delivery</div>
              </div>
              <div className="text-center">
                <Shield className="w-10 h-10 text-red-500 mx-auto mb-3" />
                <div className="text-sm text-gray-500 uppercase tracking-wide">100%</div>
                <div className="font-bold text-gray-900">Guarantee</div>
              </div>
              <div className="text-center">
                <Award className="w-10 h-10 text-red-500 mx-auto mb-3" />
                <div className="text-sm text-gray-500 uppercase tracking-wide">15+ Years</div>
                <div className="font-bold text-gray-900">Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Free consultation & measurement at your home</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Premium quality fabrics & materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Professional installation by experts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">1-year warranty on all products</span>
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
