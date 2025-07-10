
import { Profiler, useEffect, useState } from "react";
import { Home, ShoppingBag, Settings, Phone, BedIcon, DiscIcon, FileIcon, SkullIcon, StoreIcon } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     setShowHeader(currentScrollY < lastScrollY);
  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  return (
    <>
      {/* Top Header */}
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 
          ${showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
          bg-white border border-gray-200 shadow-md rounded-xl sm:rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-[95%] max-w-6xl`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-sm leading-tight sm:text-xl font-semibold text-champagne-600">
            Aziz Khan Curtains
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-4 text-sm font-medium">
            <Link to="/" className="text-gray-700 hover:text-champagne-600">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-champagne-600">Products</Link>
            <Link to="/estimate" className="text-gray-700 hover:text-champagne-600">Calculate Cost</Link>
            <Link to="/about" className="text-gray-700 hover:text-champagne-600">About Us</Link>
          </nav>

          {/* CTA Button */}
          <a
            href="https://wa.me/+971503635428?text=Hi%20I%20am%20interested%20in%20Aziz%20Khan%20Curtains.%20Please%20guide%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-champagne-500 to-champagne-700 hover:bg-champagne-700 text-gray-900 px-2 sm:px-4 py-2 sm:py-2 rounded-xl text-sm sm:text-sm font-medium transition"
          >
            Call for <u><b>Free</b></u> Consultation
          </a>
        </div>
      </header>


      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-4 rounded-2xl left-5 right-5 z-50 bg-white border border-champagne-700 shadow-xl sm:hidden">

        <div className="flex justify-around items-center py-2 text-xs font-medium text-gray-700">
          <Link to="/" className="flex flex-col items-center hover:text-champagne-600 transition">
            <Home className="w-5 h-5 mb-0.5" />
            Home
          </Link>
          <Link to="/products" className="flex flex-col items-center hover:text-champagne-600 transition">
            <ShoppingBag className="w-5 h-5 mb-0.5" />
            Products
          </Link>
          <Link to="/estimate" className="flex flex-col items-center hover:text-champagne-600 transition">
            <Settings className="w-5 h-5 mb-0.5" />
            Calculate Cost
          </Link>
          <Link to="/about" className="flex flex-col items-center hover:text-champagne-600 transition">
            <StoreIcon className="w-5 h-5 mb-0.5" />
            About Us
          </Link>
          <Link to="https://wa.me/923083180744?text=Hi..." target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-green-600 transition">
          <Phone className="w-5 h-5 mb-0.5" />
          WhatsApp Us
        </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
