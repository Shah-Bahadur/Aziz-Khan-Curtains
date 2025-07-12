

// const Footer = () => {
//     return (

//             <footer className=" bg-gradient-to-br from-champagne-900 via-cyan-950 to-champagne-900 text-white py-8">
//                     <div className="container mx-auto px-4 text-center">
//                     <div className="mb-4">
//                         <h3 className="text-xl font-bold mb-2">Aziz Khan Curtains</h3>
//                         <p className="text-luxury-400">Premium Curtains with Lightning Fast Delivery</p>
//                     </div>
//                     <div className=" border-sage-700 pt-4">
//                         <p className="text-sm text-luxury-400">
//                         © 2020 Aziz Khan Curtains. All rights reserved. | Designed for Quick Service Excellence
//                         </p>
//                     </div>
//                     </div>
//                 </footer>

//     )}

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-champagne-900 via-cyan-950 to-champagne-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Logo & Tagline */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Aziz Khan Curtains</h3>
          <p className="text-luxury-400 text-sm sm:text-base">
            Premium Curtains with Lightning Fast Delivery
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-luxury-300">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-white transition">
            Products
          </Link>
          <Link to="/estimate" className="hover:text-white transition">
            Our Work
          </Link>
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-luxury-300">
          <a href="#" className="hover:text-white" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white" aria-label="YouTube">
            <FaTiktok />
          </a>
          <a href="#" className="hover:text-white" aria-label="Twitter/X">
            {/* <FaXTwitter /> */}
          </a>
        </div>

        {/* Footer Text */}
        <div className="border-t border-luxury-800 pt-4 text-sm text-luxury-400">
          © {new Date().getFullYear()} Aziz Khan Curtains. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
