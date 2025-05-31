import { useState } from "react";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-champagne-600 text-gray-900 py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
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
          <div className="flex items-center space-x-2 bg-white px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" />
            <span className="font-semibold text-gray-900">24/7 Quick Service</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold text-champagne-600">
              Aziz Khan Curtains
            </h1>
          </Link>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-champagne-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium text-base">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900 font-medium text-base">
              Products
            </Link>
            <Link to="/estimate" className="text-gray-700 hover:text-gray-900 font-medium text-base">
              Estimate
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium text-base">
              About
            </Link>
          </nav>

          {/* Book Button */}
          <div className="hidden md:block">
            <Button className="bg-champagne-600 hover:bg-champagne-700 text-white font-semibold px-6 py-3 rounded-lg text-base shadow-md">
              Book A Free Home Visit
            </Button>
          </div>
        </div>

        {/* Mobile Navigation with Curtain Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 space-y-4 text-center">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 text-base">
              Home
            </Link>
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 text-base">
              Products
            </Link>
            <Link to="/estimate" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 text-base">
              Estimate
            </Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 text-base">
              About
            </Link>
            <Button className="w-auto bg-champagne-600 hover:bg-champagne-700 text-white font-semibold px-4 py-2 rounded-lg text-base shadow-md">
              Book A Free Home Visit
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
