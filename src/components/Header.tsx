
import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-charcoal-800 text-white py-2">
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
          <div className="flex items-center space-x-2 bg-champagne-500 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" />
            <span className="font-semibold text-white">24/7 Quick Service</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-charcoal-800">Aziz Khan Curtains</h1>
            <span className="text-champagne-600 text-sm font-semibold">Quick Delivery</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sage-700 hover:text-charcoal-800 font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-sage-700 hover:text-charcoal-800 font-medium transition-colors">Services</Link>
            <Link to="/products" className="text-sage-700 hover:text-charcoal-800 font-medium transition-colors">Products</Link>
            <Link to="/estimate" className="text-sage-700 hover:text-charcoal-800 font-medium transition-colors">Estimate</Link>
            <Link to="/about" className="text-sage-700 hover:text-charcoal-800 font-medium transition-colors">About</Link>
          </nav>

          <Button className="bg-champagne-500 hover:bg-champagne-600 text-white font-semibold px-6">
            Get Quote Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
