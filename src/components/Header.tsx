
import { useState } from "react";
import {
  Home,
  ShoppingBag,
  Settings,
  Phone,
  Info,
  PenIcon,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ContactCTAButton from "./ContactCTAButton";


const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastClick, setLastClick] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to check if route is active
  const isActive = (path: string) => {
    return location.pathname === path ? "text-champagne-600 border-b-2 border-champagne-600" : "text-gray-700 hover:text-champagne-600";
  };



  // ✅ Handle mobile Products click
  const handleMobileProductsClick = () => {
    const now = Date.now();
    if (lastClick && now - lastClick < 500) {
      // double click within 0.5s → redirect
      navigate("/products");
    }
    setLastClick(now);
  };

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
          <div className="text-sm leading-tight text-champagne-600 sm:text-xl font-semibold text-champagne-750">
            <img
              src="/logo.png"
              alt="Aziz Khan Curtains Logo"
              className="h-6 sm:h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-4 text-sm font-medium">
            <Link to="/" className={`pb-1 transition ${isActive("/")}`}>
              Home
            </Link>

            {/* ✅ Products Dropdown for Desktop */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`pb-1 transition font-medium ${location.pathname.includes("/products") || location.pathname.includes("/curtains_lp") ? "text-champagne-600 border-b-2 border-champagne-600" : "text-gray-700 hover:text-champagne-600"}`}>
                  Products
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white shadow-lg rounded-lg">
                <DropdownMenuItem asChild>
                  <Link
                    to="/curtains_lp"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Curtains Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/products"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    See All Product/Services
                  </Link>
                </DropdownMenuItem>
                
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/our_work" className={`pb-1 transition ${isActive("/our_work")}`}>
              Our Work
            </Link>
            <Link to="/about" className={`pb-1 transition ${isActive("/about")}`}>
              About Us
            </Link>
            <Link to="/blog" className={`pb-1 transition ${isActive("/blog")}`}>
              Blogs
            </Link>
          </nav>

          {/* CTA Button */}
          <ContactCTAButton
            className="bg-gradient-to-r from-champagne-500 to-champagne-700 hover:bg-champagne-700 text-gray-900 px-2 sm:px-4 py-2 sm:py-2 rounded-xl text-sm sm:text-sm font-medium transition"
          >
            Get Your <u><b>Design</b></u> Today
          </ContactCTAButton>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-4 rounded-2xl left-5 right-5 z-50 bg-white border border-champagne-700 shadow-xl sm:hidden">
        <div className="flex justify-around items-center py-2 text-xs font-medium text-gray-700">
          <Link
            to="/"
            className="flex flex-col items-center hover:text-champagne-600 transition"
          >
            <Home className="w-5 h-5 mb-0.5" />
            Home
          </Link>

          {/* ✅ Products Dropdown for Mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                onClick={handleMobileProductsClick}
                className="flex flex-col items-center hover:text-champagne-600 transition"
              >
                <ShoppingBag className="w-5 h-5 mb-0.5" />
                Products
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              align="center"
              className="w-40 bg-white shadow-lg rounded-lg"
            >
              <DropdownMenuItem asChild>
                <Link to="/curtains_lp">Curtains Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/products">See All Products/Services</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/our_work"
            className="flex flex-col items-center hover:text-champagne-600 transition"
          >
            <Settings className="w-5 h-5 mb-0.5" />
            Our Work
          </Link>
          <Link
            to="/about"
            className="flex flex-col items-center hover:text-champagne-600 transition"
          >
            <Info className="w-5 h-5 mb-0.5" />
            About Us
          </Link>
          <Link
            to="/blog"
            className="flex flex-col items-center hover:text-champagne-600 transition"
          >
            <PenIcon className="w-5 h-5 mb-0.5" />
            Blogs
          </Link>
          <a
            href="/contact-redirect?method=whatsapp"
            className="flex flex-col items-center hover:text-green-600 transition"
          >
            <Phone className="w-5 h-5 mb-0.5" />
            WhatsApp Us
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;

