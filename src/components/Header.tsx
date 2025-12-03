
import { useState } from "react";
import {
  Home,
  ShoppingBag,
  Settings,
  Phone,
  Info,
  PenIcon,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";


const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastClick, setLastClick] = useState<number | null>(null);
  const [showContactDialog, setShowContactDialog] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const businessPhone = "+971503634385";

  // Helper function to check if route is active
  const isActive = (path: string) => {
    return location.pathname === path ? "text-champagne-600 border-b-2 border-champagne-600" : "text-gray-700 hover:text-champagne-600";
  };

  // Handle WhatsApp contact
  const handleWhatsApp = () => {
    window.location.href = "/contact-redirect?method=whatsapp";
    setShowContactDialog(false);
  };

  // Handle direct call
  const handleDirectCall = () => {
    window.location.href = "/contact-redirect?method=call";
    setShowContactDialog(false);
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
          <button
            onClick={() => setShowContactDialog(true)}
            className="bg-gradient-to-r from-champagne-500 to-champagne-700 hover:bg-champagne-700 text-gray-900 px-2 sm:px-4 py-2 sm:py-2 rounded-xl text-sm sm:text-sm font-medium transition"
          >
            Get Your <u><b>Design</b></u> Today
          </button>
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
          <Link
            to="https://wa.me/+971503634385?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20free%20home%20visit%20with%20Aziz%20Khan%20Curtains."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-green-600 transition"
          >
            <Phone className="w-5 h-5 mb-0.5" />
            WhatsApp Us
          </Link>
        </div>
      </nav>

      {/* Contact Choice Dialog */}
      <AlertDialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <AlertDialogContent className="bg-white border border-gray-200 rounded-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-cormorant text-gray-900">
              How would you like to connect?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center py-4">
              <p className="text-2xl font-bold text-champagne-600 mb-2">+971-503-634-385</p>
              <p className="text-sm text-gray-600">Choose your preferred contact method</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col gap-3 py-4">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg px-4 py-3 transition text-left"
            >
              <MessageCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">WhatsApp</p>
                <p className="text-sm text-gray-600">Quick message & instant response</p>
              </div>
            </button>
            <button
              onClick={handleDirectCall}
              className="flex items-center justify-center gap-3 bg-champagne-50 hover:bg-champagne-100 border border-champagne-200 rounded-lg px-4 py-3 transition text-left"
            >
              <PhoneCall className="w-5 h-5 text-champagne-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Direct Call</p>
                <p className="text-sm text-gray-600">Speak with our design expert now</p>
              </div>
            </button>
          </div>
          <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-900 border-0">
            Cancel
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Header;

