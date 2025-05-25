
import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-navy-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+92 300 1234567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@azizkhanacurtains.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-orange-500 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" />
            <span className="font-semibold">24/7 Quick Service</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-navy-900">Aziz Khan Curtains</h1>
            <span className="text-orange-500 text-sm font-semibold">Quick Delivery</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-navy-900 font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-navy-900 font-medium transition-colors">Services</a>
            <a href="#products" className="text-gray-700 hover:text-navy-900 font-medium transition-colors">Products</a>
            <a href="#about" className="text-gray-700 hover:text-navy-900 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-navy-900 font-medium transition-colors">Contact</a>
          </nav>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6">
            Get Quote Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
