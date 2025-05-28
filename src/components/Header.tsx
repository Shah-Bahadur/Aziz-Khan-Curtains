
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
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold text-red-500">Aziz Khan</h1>
            <span className="text-gray-600 text-lg">curtains</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-12">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">Products</Link>
            <Link to="/estimate" className="text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">Estimate</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">About</Link>
          </nav>

          <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg text-base">
            📋 Book A Free Home Visit
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
