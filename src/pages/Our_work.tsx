// // import { useState } from "react";
// // import Header from "@/components/Header";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Calculator, DollarSign } from "lucide-react";

// // const categories = {
// //   "home-curtains": {
// //     label: "Home Curtains",
// //     image: "/public/boc.png",
// //     products: [
// //       { id: "blackout", name: "Blackout Curtains", price: 140 },
// //       { id: "sheer", name: "Sheer Curtains", price: 100 },
// //       { id: "linen", name: "Linen Curtains", price: 120 },
// //     ],
// //   },
// //   "office-curtains": {
// //     label: "Office Curtains",
// //     image: "/public/office1.png",
// //     products: [
// //       { id: "vertical", name: "Vertical Blinds", price: 110 },
// //       { id: "roller", name: "Roller Blinds", price: 130 },
// //     ],
// //   },
// //   "custom-sofas": {
// //     label: "Custom Sofas",
// //     image: "/public/sofa1.png",
// //     products: [
// //       { id: "two-seater", name: "2-Seater Sofa", price: 1200 },
// //       { id: "three-seater", name: "3-Seater Sofa", price: 1600 },
// //       { id: "sectional", name: "Sectional Sofa", price: 2500 },
// //     ],
// //   },
// //   "bedsheets": {
// //     label: "Bedsheets",
// //     image: "/public/bedsheet7.png",
// //     products: [
// //       { id: "cotton", name: "Premium Cotton", price: 180 },
// //       { id: "silk", name: "Silk Touch", price: 250 },
// //     ],
// //   },
// // };

// // const EstimatorPage = () => {
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [selectedProduct, setSelectedProduct] = useState("");
// //   const [width, setWidth] = useState("");
// //   const [height, setHeight] = useState("");
// //   const [estimate, setEstimate] = useState(0);

// //   const handleCalculate = () => {
// //     if (selectedCategory && selectedProduct) {
// //       const product = categories[selectedCategory].products.find(p => p.id === selectedProduct);
// //       if (!product) return;
// //       const price = product.price;
// //       const isAreaBased = selectedCategory.includes("curtains");
// //       const total = isAreaBased
// //         ? parseFloat(width) * parseFloat(height) * price
// //         : price;
// //       setEstimate(total);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-luxury-50">
// //       <Header />

// //       <section className="py-20 bg-gradient-to-br from-champagne-600 via-champagne-700 to-champagne-900 text-white text-center">
// //         <h1 className="text-5xl font-bold mb-4 mt-12">Get Your Instant Estimate</h1>
// //         <p className="text-xl text-luxury-300 max-w-2xl mx-auto">
// //           Choose a category and customize your selection to get an accurate cost estimation.
// //         </p>
// //       </section>

// //       <section className="py-16 container mx-auto px-4">
// //         <div className="max-w-4xl mx-auto">
// //           <div className="text-center mb-12">
// //             <Calculator className="w-12 h-12 text-champagne-500 mx-auto mb-4" />
// //             <h2 className="text-3xl font-bold text-charcoal-900">Aziz Services Price Estimator (AED)</h2>
// //             <p className="text-sage-600">Prices include materials and basic service charges</p>
// //           </div>

// //           <Card className="border-0 shadow-xl">
// //             <CardContent className="p-8 space-y-10">
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //                 {Object.entries(categories).map(([key, cat]) => (
// //                   <div key={key}>
// //                     <button
// //                       onClick={() => {
// //                         setSelectedCategory(key);
// //                         setSelectedProduct("");
// //                         setEstimate(0);
// //                         setWidth("");
// //                         setHeight("");
// //                       }}
// //                       className={`p-2 border-2 rounded-lg w-full overflow-hidden transition-all ${
// //                         selectedCategory === key
// //                           ? "border-champagne-500 bg-champagne-50"
// //                           : "border-gray-200 hover:border-champagne-300"
// //                       }`}
// //                     >
// //                       <img
// //                         src={cat.image}
// //                         alt={cat.label}
// //                         className="w-full h-48 object-cover rounded-md mb-2"
// //                       />
// //                       <span className="font-semibold text-charcoal-900 block text-center">
// //                         {cat.label}
// //                       </span>
// //                     </button>

// //                     {/* Estimator Block shown directly below selected category */}
// //                     {selectedCategory === key && (
// //                       <div className="mt-6 space-y-6">
// //                         {/* Product Selector */}
// //                         <div>
// //                           <label className="block text-sm font-medium text-charcoal-800 mb-2">
// //                             Choose Product
// //                           </label>
// //                           <div className="grid grid-cols-1 gap-3">
// //                             {cat.products.map((product) => (
// //                               <button
// //                                 key={product.id}
// //                                 onClick={() => {
// //                                   setSelectedProduct(product.id);
// //                                   setEstimate(0);
// //                                 }}
// //                                 className={`p-4 border-2 rounded-lg text-left ${
// //                                   selectedProduct === product.id
// //                                     ? "border-champagne-500 bg-champagne-50"
// //                                     : "border-gray-200 hover:border-champagne-300"
// //                                 }`}
// //                               >
// //                                 <div className="font-semibold text-charcoal-800">{product.name}</div>
// //                                 <div className="text-sage-600 text-sm">AED {product.price}</div>
// //                               </button>
// //                             ))}
// //                           </div>
// //                         </div>

// //                         {/* Dimension Inputs */}
// //                         {key.includes("curtains") && selectedProduct && (
// //                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                             <div>
// //                               <label className="block text-sm text-charcoal-800 mb-1">
// //                                 Width (feet)
// //                               </label>
// //                               <input
// //                                 type="number"
// //                                 value={width}
// //                                 onChange={(e) => setWidth(e.target.value)}
// //                                 placeholder="e.g., 8"
// //                                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-champagne-500"
// //                               />
// //                             </div>
// //                             <div>
// //                               <label className="block text-sm text-charcoal-800 mb-1">
// //                                 Height (feet)
// //                               </label>
// //                               <input
// //                                 type="number"
// //                                 value={height}
// //                                 onChange={(e) => setHeight(e.target.value)}
// //                                 placeholder="e.g., 10"
// //                                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-champagne-500"
// //                               />
// //                             </div>
// //                           </div>
// //                         )}

// //                         {/* Calculate Button */}
// //                         {selectedProduct && (
// //                           <Button
// //                             onClick={handleCalculate}
// //                             className="w-full bg-champagne-500 hover:bg-champagne-600 text-white font-semibold py-3"
// //                           >
// //                             Calculate Estimate
// //                           </Button>
// //                         )}

// //                         {/* Result Display */}
// //                         {estimate > 0 && (
// //                           <div className="text-center mt-6 p-6 bg-charcoal-800 text-white rounded-lg">
// //                             <DollarSign className="w-6 h-6 mx-auto mb-2" />
// //                             <h4 className="text-lg font-semibold mb-1">Estimated Cost</h4>
// //                             <div className="text-3xl font-bold text-champagne-400">
// //                               AED {estimate.toLocaleString()}
// //                             </div>
// //                             <p className="text-sm text-luxury-300 mt-1">
// //                               *Final quote may vary based on customization
// //                             </p>
// //                           </div>
// //                         )}
// //                       </div>
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>
// //             </CardContent>
// //           </Card>

// //           {/* CTA Section */}
// //           <div className="flex flex-col items-center mt-16">
// //             <a
// //               href="https://wa.me/971501234567?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20free%20home%20visit%20with%20Aziz%20Khan%20Curtains."
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:text-xl text-gray-900 font-semibold px-8 py-2 rounded-lg text-lg transition-all duration-300 shadow-xl"
// //             >
// //               Book <u><b>Free</b></u> Home Visit
// //             </a>
// //             <p className="text-center text-gray-600 py-5 px-4 max-w-md">
// //               Our experts visit with samples and guide you in choosing custom window coverings for free
// //             </p>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default EstimatorPage;


// import { useState } from "react";
// import Header from "@/components/Header";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Calculator, DollarSign } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// const categories = {
//   "home-curtains": {
//     label: "Home Curtains",
//     image: "/boc.webp",
//     products: [
//       { id: "blackout", name: "Blackout Curtains", price: 140 },
//       { id: "sheer", name: "Sheer Curtains", price: 100 },
//       { id: "linen", name: "Linen Curtains", price: 120 },
//     ],
//   },
//   "office-curtains": {
//     label: "Office Curtains",
//     image: "/office1.png",
//     products: [
//       { id: "vertical", name: "Vertical Blinds", price: 110 },
//       { id: "roller", name: "Roller Blinds", price: 130 },
//     ],
//   },
//   "custom-sofas": {
//     label: "Custom Sofas",
//     image: "/sofa1.webp",
//     products: [
//       { id: "two-seater", name: "2-Seater Sofa", price: 1200 },
//       { id: "three-seater", name: "3-Seater Sofa", price: 1600 },
//       { id: "sectional", name: "Sectional Sofa", price: 2500 },
//     ],
//   },
//   bedsheets: {
//     label: "Bedsheets",
//     image: "/bedsheet7.webp",
//     products: [
//       { id: "cotton", name: "Premium Cotton", price: 180 },
//       { id: "silk", name: "Silk Touch", price: 250 },
//     ],
//   },
// };

// const EstimatorPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState("");
//   const [width, setWidth] = useState("");
//   const [height, setHeight] = useState("");
//   const [estimate, setEstimate] = useState(0);

//   const handleCalculate = () => {
//     if (selectedCategory && selectedProduct) {
//       const product = categories[selectedCategory].products.find(
//         (p) => p.id === selectedProduct
//       );
//       if (!product) return;
//       const price = product.price;
//       const isAreaBased = selectedCategory.includes("curtains");
//       const total = isAreaBased
//         ? parseFloat(width) * parseFloat(height) * price
//         : price;
//       setEstimate(total);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-luxury-50">
//       <Header />

//       <section className="py-20 bg-gradient-to-br from-champagne-600 via-champagne-700 to-champagne-900 text-white text-center">
//         <h1 className="text-5xl font-bold mb-4 mt-12">Get Your Instant Estimate</h1>
//         <p className="text-xl text-luxury-300 max-w-2xl mx-auto">
//           Choose a category and customize your selection to get an accurate cost estimation.
//         </p>
//       </section>

//       <section className="py-16 container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <Calculator className="w-12 h-12 text-champagne-500 mx-auto mb-4" />
//             <h2 className="text-3xl font-bold text-charcoal-900">Aziz Services Price Estimator (AED)</h2>
//             <p className="text-sage-600">Prices include materials and basic service charges</p>
//           </div>

//           <Card className="border-0 shadow-xl">
//             <CardContent className="p-8 space-y-10">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {Object.entries(categories).map(([key, cat]) => (
//                   <div key={key}>
//                     <button
//                       onClick={() => {
//                         setSelectedCategory(key);
//                         setSelectedProduct("");
//                         setEstimate(0);
//                         setWidth("");
//                         setHeight("");
//                       }}
//                       className={`p-2 border-2 rounded-lg w-full overflow-hidden transition-all ${
//                         selectedCategory === key
//                           ? "border-champagne-500 bg-champagne-50"
//                           : "border-gray-200 hover:border-champagne-300"
//                       }`}
//                     >
//                       <img
//                         src={cat.image}
//                         alt={cat.label}
//                         className="w-full h-48 object-cover rounded-md mb-2"
//                       />
//                       <span className="font-semibold text-charcoal-900 block text-center">
//                         {cat.label}
//                       </span>
//                     </button>

//                     {/* Estimator Block with animation */}
//                     <AnimatePresence>
//                       {selectedCategory === key && (
//                         <motion.div
//                           className="mt-6 space-y-6"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 20 }}
//                           transition={{ duration: 0.3 }}
//                         >
//                           {/* Product Selector */}
//                           <div>
//                             <label className="block text-sm font-medium text-charcoal-800 mb-2">
//                               Choose Product
//                             </label>
//                             <div className="grid grid-cols-1 gap-3">
//                               {cat.products.map((product) => (
//                                 <motion.button
//                                   key={product.id}
//                                   onClick={() => {
//                                     setSelectedProduct(product.id);
//                                     setEstimate(0);
//                                   }}
//                                   whileTap={{ scale: 0.97 }}
//                                   className={`p-4 border-2 rounded-lg text-left ${
//                                     selectedProduct === product.id
//                                       ? "border-champagne-500 bg-champagne-50"
//                                       : "border-gray-200 hover:border-champagne-300"
//                                   }`}
//                                 >
//                                   <div className="font-semibold text-charcoal-800">{product.name}</div>
//                                   <div className="text-sage-600 text-sm">AED {product.price}</div>
//                                 </motion.button>
//                               ))}
//                             </div>
//                           </div>

//                           {/* Dimension Inputs with animation */}
//                           <AnimatePresence>
//                             {key.includes("curtains") && selectedProduct && (
//                               <motion.div
//                                 className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                                 transition={{ duration: 0.3 }}
//                               >
//                                 <div>
//                                   <label className="block text-sm text-charcoal-800 mb-1">
//                                     Width (feet)
//                                   </label>
//                                   <input
//                                     type="number"
//                                     value={width}
//                                     onChange={(e) => setWidth(e.target.value)}
//                                     placeholder="e.g., 8"
//                                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-champagne-500"
//                                   />
//                                 </div>
//                                 <div>
//                                   <label className="block text-sm text-charcoal-800 mb-1">
//                                     Height (feet)
//                                   </label>
//                                   <input
//                                     type="number"
//                                     value={height}
//                                     onChange={(e) => setHeight(e.target.value)}
//                                     placeholder="e.g., 10"
//                                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-champagne-500"
//                                   />
//                                 </div>
//                               </motion.div>
//                             )}
//                           </AnimatePresence>

//                           {/* Calculate Button */}
//                           {selectedProduct && (
//                             <motion.div
//                               initial={{ opacity: 0 }}
//                               animate={{ opacity: 1 }}
//                               transition={{ duration: 0.3 }}
//                             >
//                               <Button
//                                 onClick={handleCalculate}
//                                 className="w-full bg-champagne-500 hover:bg-champagne-600 text-white font-semibold py-3"
//                               >
//                                 Calculate Estimate
//                               </Button>
//                             </motion.div>
//                           )}

//                           {/* Result Display */}
//                           <AnimatePresence>
//                             {estimate > 0 && (
//                               <motion.div
//                                 className="text-center mt-6 p-6 bg-charcoal-800 text-white rounded-lg"
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0 }}
//                                 transition={{ duration: 0.4 }}
//                               >
//                                 <DollarSign className="w-6 h-6 mx-auto mb-2" />
//                                 <h4 className="text-lg font-semibold mb-1">Estimated Cost</h4>
//                                 <div className="text-3xl font-bold text-champagne-400">
//                                   AED {estimate.toLocaleString()}
//                                 </div>
//                                 <p className="text-sm text-luxury-300 mt-1">
//                                   *Final quote may vary based on customization
//                                 </p>
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>

//           {/* CTA Section (unchanged) */}
//           <div className="flex flex-col items-center mt-16">
//             <a
//               href="https://wa.me/971501234567?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20free%20home%20visit%20with%20Aziz%20Khan%20Curtains."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:text-xl text-gray-900 font-semibold px-8 py-2 rounded-lg text-lg transition-all duration-300 shadow-xl"
//             >
//               Book <u><b>Free</b></u> Home Visit
//             </a>
//             <p className="text-center text-gray-600 py-5 px-4 max-w-md">
//               Our experts visit with samples and guide you in choosing custom window coverings for free
//             </p>
//           </div>
//         </div>
//       </section>
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default EstimatorPage;


// import React from 'react';
// import Header  from '@/components/Header';
// import Contact from '@/components/Contact'
// const StarRating = ({ count = 5 }: { count?: number }) => (
//   <div className="flex gap-1 text-yellow-500 mb-2">
//     {Array.from({ length: count }, (_, i) => (
//       <svg
//         key={i}
//         className="w-5 h-5 fill-current"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 20 20"
//       >
//         <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.572-.955L10 0l2.94 5.955 6.572.955-4.756 4.635 1.122 6.545z" />
//       </svg>
//     ))}
//   </div>
// );

// const testimonials = [
//   {
//     name: 'Fatima R.',
//     location: 'Dubai Marina',
//     feedback:
//       'Absolutely thrilled with the curtain fitting. From fabric selection to final install — everything was professional and quick!',
//   },
//   {
//     name: 'Ali Khan',
//     location: 'Jumeirah',
//     feedback:
//       'Their sofa renovation service transformed our entire living room. Highly recommended for anyone in Dubai.',
//   },
//   {
//     name: 'Sana Malik',
//     location: 'Downtown Dubai',
//     feedback:
//       'I loved how fast and detail-oriented their team was. We had custom blinds installed and they look perfect!',
//   },
// ];

// const services = [
//   {
//     name: 'Custom Curtains',
//     image: '/services/curtains.jpg',
//     description:
//       'Bespoke curtains tailored to your style — from fabric selection to final installation.',
//   },
//   {
//     name: 'Sofa Upholstery',
//     image: '/services/sofa.jpg',
//     description:
//       'Give your furniture a second life with high-quality, custom sofa upholstery and renovation.',
//   },
//   {
//     name: 'Blinds & Shades',
//     image: '/services/blinds.jpg',
//     description:
//       'Modern and motorized blinds — ideal for light control, privacy, and elegance.',
//   },
//   {
//     name: 'Bed Sheets & Fabrics',
//     image: '/services/bedsheets.jpg',
//     description:
//       'Premium bed linens and custom-made fabrics to elevate your home comfort.',
//   },
// ];

// const OurWork: React.FC = () => {
//   return (
//     <div className="px-6 py-16 max-w-7xl mx-auto">
//     <Header/>
//     <div className="px-6 py-16 max-w-7xl mx-auto">
//       <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
//         Our Work & Services in Dubai
//       </h1>

//       {/* Services Section */}
//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-20">
//         {services.map((service, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition"
//           >
//             <img
//               src={service.image}
//               alt={service.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-5">
//               <h3 className="text-lg font-semibold mb-2 text-gray-900">
//                 {service.name}
//               </h3>
//               <p className="text-sm text-gray-600">{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Testimonials Section */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
//           What Our Clients Say
//         </h2>
//         <div className="grid gap-6 md:grid-cols-3">
//           {testimonials.map((t, i) => (
//             <div
//               key={i}
//               className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-md transition"
//             >
//               <StarRating />
//               <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
//               <div className="text-sm text-gray-600 font-medium">
//                 — {t.name}, {t.location}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Conversion CTA Section */}
//       <div className="mt-20 text-center bg-champagne-100 rounded-xl p-10 shadow-md">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Ready to Transform Your Space?
//         </h3>
//         <p className="text-md text-gray-700 mb-6 max-w-xl mx-auto">
//           Book a free design consultation or request a custom quote. Our Dubai-based team is ready to assist you — fast, affordable, and stylish.
//         </p>
//         <a
//           href="https://wa.me/971XXXXXXXXX" // Replace with actual number
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-gradient-to-r from-champagne-600 to-champagne-800 hover:from-champagne-700 hover:to-champagne-900 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow"
//         >
//           Chat with Us on WhatsApp
//         </a>
//       </div>
//     </div>
//     <Contact/>
//     </div>
//   );
// };

// export default OurWork;


import React from 'react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const servicesWithProjects = [
  {
    name: 'Custom Curtains',
    description:
      'Bespoke curtains tailored to your style — from fabric selection to final installation.',
    images: [
      '/hw1.webp',
      '/hw2.webp',
      '/hw3.webp',
      '/hw4.webp',
      '/hw5.webp',
      '/hw6.webp',
    ],
  },
  {
    name: 'Sofa Upholstery',
    description:
      'Give your furniture a second life with high-quality, custom sofa upholstery and renovation.',
    images: [
      'sw1.webp',
      '/sw2.webp',
      '/sw3.webp',
      '/sw4.webp',
      '/sw5.webp',
      '/sw6.webp',
    ],
  },
  {
    name: 'Blinds & Shades',
    description:
      'Modern and motorized blinds — ideal for light control, privacy, and elegance.',
    images: [
      '/blindsw.webp',
      '/office2.webp',
      '/office4.webp',
    ],
  },
  {
    name: 'Bed Sheets',
    description:
      'Premium bed linens and custom-made fabrics to elevate your home comfort.',
    images: [
      '/bedsheet.webp',
      '/bedsheet1.webp',
      '/bedsheet2.webp',
    ],
  },
];

const testimonials = [
  {
    name: 'Fatima R.',
    location: 'Dubai Marina',
    feedback:
      'Absolutely thrilled with the curtain fitting. From fabric selection to final install — everything was professional and quick!',
  },
  {
    name: 'Ali Khan',
    location: 'Jumeirah',
    feedback:
      'Their sofa renovation service transformed our entire living room. Highly recommended for anyone in Dubai.',
  },
  {
    name: 'Sana Malik',
    location: 'Downtown Dubai',
    feedback:
      'I loved how fast and detail-oriented their team was. We had custom blinds installed and they look perfect!',
  },
];

const StarRating = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-1 text-yellow-500 mb-2">
    {Array.from({ length: count }, (_, i) => (
      <svg
        key={i}
        className="w-5 h-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.572-.955L10 0l2.94 5.955 6.572.955-4.756 4.635 1.122 6.545z" />
      </svg>
    ))}
  </div>
);

const OurWork: React.FC = () => {
  return (
    <div>
    <div className="px-6 py-16 max-w-7xl mx-auto">
      <Header />
    <div className="px-6 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Our Work & Services in Dubai
      </h1>

      {/* Services with project images */}
      {servicesWithProjects.map((service, idx) => (
        <section key={idx} className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Recent Work — {service.name}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            {service.description}
          </p>
          {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
         <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-4 scroll-snap-x mandatory pb-4">
  {service.images.map((img, i) => (
    <div
      key={i}
      className="flex-shrink-0 sm:flex-shrink bg-white rounded-xl overflow-hidden shadow transition w-[64vw] sm:w-full h-[250px] scroll-snap-align-start"
    >
      <img
        src={img}
        alt={`${service.name} Project ${i + 1}`}
        className="w-64 sm:w-full h-full object-cover rounded-xl"
      />
    </div>
  ))}
</div>

          <div className="mt-6 flex justify-center">
      <a
        href="https://wa.me/+971503635428" // Replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mx-auto bg-gradient-to-r from-champagne-600 to-champagne-800 hover:from-champagne-700 hover:to-champagne-900 text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm shadow"
      >
        Contact Us for {service.name}
      </a>
      </div>
        </section>
      ))}




      {/* Testimonials Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          What Our Clients Say
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <StarRating />
              <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
              <div className="text-sm text-gray-600 font-medium">
                — {t.name}, {t.location}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conversion CTA Section */}
      <div className="mt-20 text-center bg-champagne-100 rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to Transform Your Space?
        </h3>
        <p className="text-md text-gray-700 mb-6 max-w-xl mx-auto">
          Book a free design consultation or request a custom quote. Our Dubai-based team is ready to assist you — fast, affordable, and stylish.
        </p>
        <a
          href="https://wa.me/+971503635428" // Replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-champagne-400 to-champagne-800 hover:from-champagne-400 hover:to-champagne-800 text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm shadow"
        >
          Chat with Us on WhatsApp
        </a>
      </div>

      
    </div>
    
    </div>
    <Contact />
    <Footer />
    </div>
  );
};

export default OurWork;