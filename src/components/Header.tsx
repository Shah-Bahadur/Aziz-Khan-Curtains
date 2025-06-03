// import { useState } from "react";
// import { Phone, Mail, Clock, Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-sm border-b">
//       {/* Top Bar */}
//       <div className="bg-champagne-600 text-gray-900 py-2">
//         <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <Phone className="w-4 h-4" />
//               <span>+92 300 1234567</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Mail className="w-4 h-4" />
//               <span>info@azizkhanacurtains.com</span>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2 bg-white px-3 py-1 rounded-full">
//             <Clock className="w-4 h-4" />
//             <span className="font-semibold text-gray-900">24/7 Quick Service</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="flex items-center space-x-2">
//             <h1 className="text-2xl md:text-3xl font-bold text-champagne-600">
//               Aziz Khan Curtains
//             </h1>
//           </Link>

//           {/* Hamburger Menu Icon (Mobile) */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-champagne-600 focus:outline-none"
//             >
//               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-10">
//             <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium text-base">
//               Home
//             </Link>
//             <Link to="/products" className="text-gray-700 hover:text-gray-900 font-medium text-base">
//               Products
//             </Link>
//             <Link to="/estimate" className="text-gray-700 hover:text-gray-900 font-medium text-base">
//               Estimate
//             </Link>
//             <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium text-base">
//               About
//             </Link>
//           </nav>

//           {/* Book Button */}
//           <div className="hidden md:block">
//             <Button className="bg-champagne-600 hover:bg-champagne-700 text-white font-semibold px-6 py-3 rounded-lg text-base shadow-md">
//               Book A Free Home Visit
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation with Curtain Animation */}
//         <div
//           className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
//             isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="mt-4 space-y-4 text-center">
//             <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 text-base">
//               Home
//             </Link>
//             <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 text-base">
//               Products
//             </Link>
//             <Link to="/estimate" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 text-base">
//               Estimate
//             </Link>
//             <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 text-base">
//               About
//             </Link>
//             <Button className="w-auto bg-champagne-600 hover:bg-champagne-700 text-white font-semibold px-4 py-2 rounded-lg text-base shadow-md">
//               Book A Free Home Visit
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import { useEffect, useState } from "react";

// const Header = () => {
//   const [showHeader, setShowHeader] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   // Scroll behavior
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY) {
//         setShowHeader(false); // Scrolling down
//       } else {
//         setShowHeader(true); // Scrolling up
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <header
//       className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
//         showHeader ? "opacity-100" : "opacity-0 -translate-y-10"
//       } bg-white shadow-lg rounded-2xl px-6 py-3 max-w-5xl w-[95%]`}
//     >
//       <div className="flex justify-between items-center">
//         {/* Logo or Brand Name */}
//         <div className="text-xl font-bold text-champagne-600">Aziz Khan Curtains</div>

//         {/* Navigation */}
//         <nav className="space-x-4 hidden sm:block">
//           <a href="#home" className="text-gray-700 hover:text-champagne-600 font-medium">
//             Home
//           </a>
//           <a href="#process" className="text-gray-700 hover:text-champagne-600 font-medium">
//             Products
//           </a>
//           <a href="#services" className="text-gray-700 hover:text-champagne-600 font-medium">
//             Services
//           </a>
//           <a href="#contact" className="text-gray-700 hover:text-champagne-600 font-medium">
//             Contact
//           </a>
//         </nav>

//         {/* Call to Action Button */}
//         <a
//           href="#book"
//           className="bg-champagne-600 hover:bg-champagne-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-300"
//         >
//           Book a Free Consultation
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;




import { useEffect, useState } from "react";
import { Home, ShoppingBag, Settings, Phone } from "lucide-react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
            <a href="#home" className="text-gray-700 hover:text-champagne-600">Home</a>
            <a href="#process" className="text-gray-700 hover:text-champagne-600">Products</a>
            <a href="#services" className="text-gray-700 hover:text-champagne-600">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-champagne-600">Contact</a>
          </nav>

          {/* CTA Button */}
          <a
            href="#book"
            className="bg-champagne-600 hover:bg-champagne-700 text-white px-2 sm:px-4 py-2 sm:py-2 rounded-xl text-sm sm:text-sm font-medium transition"
          >
            Call for Free Consultation
          </a>
        </div>
      </header>


      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-inner sm:hidden">
        <div className="flex justify-around items-center py-2 text-xs font-medium text-gray-700">
          <a href="#home" className="flex flex-col items-center hover:text-champagne-600 transition">
            <Home className="w-5 h-5 mb-0.5" />
            Home
          </a>
          <a href="#process" className="flex flex-col items-center hover:text-champagne-600 transition">
            <ShoppingBag className="w-5 h-5 mb-0.5" />
            Products
          </a>
          <a href="#services" className="flex flex-col items-center hover:text-champagne-600 transition">
            <Settings className="w-5 h-5 mb-0.5" />
            Services
          </a>
          <a href="#contact" className="flex flex-col items-center hover:text-champagne-600 transition">
            <Phone className="w-5 h-5 mb-0.5" />
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
