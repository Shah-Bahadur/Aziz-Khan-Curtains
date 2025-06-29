// import { useState } from "react";
// import Header from "@/components/Header";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Calculator, DollarSign } from "lucide-react";

// const categories = {
//   "home-curtains": {
//     label: "Home Curtains",
//     image: "/public/boc.png",
//     products: [
//       { id: "blackout", name: "Blackout Curtains", price: 140 },
//       { id: "sheer", name: "Sheer Curtains", price: 100 },
//       { id: "linen", name: "Linen Curtains", price: 120 },
//     ],
//   },
//   "office-curtains": {
//     label: "Office Curtains",
//     image: "/public/office1.png",
//     products: [
//       { id: "vertical", name: "Vertical Blinds", price: 110 },
//       { id: "roller", name: "Roller Blinds", price: 130 },
//     ],
//   },
//   "custom-sofas": {
//     label: "Custom Sofas",
//     image: "/public/sofa1.png",
//     products: [
//       { id: "two-seater", name: "2-Seater Sofa", price: 1200 },
//       { id: "three-seater", name: "3-Seater Sofa", price: 1600 },
//       { id: "sectional", name: "Sectional Sofa", price: 2500 },
//     ],
//   },
//   "bedsheets": {
//     label: "Bedsheets",
//     image: "/public/bedsheet7.png",
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
//       const product = categories[selectedCategory].products.find(p => p.id === selectedProduct);
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

//                     {/* Estimator Block shown directly below selected category */}
//                     {selectedCategory === key && (
//                       <div className="mt-6 space-y-6">
//                         {/* Product Selector */}
//                         <div>
//                           <label className="block text-sm font-medium text-charcoal-800 mb-2">
//                             Choose Product
//                           </label>
//                           <div className="grid grid-cols-1 gap-3">
//                             {cat.products.map((product) => (
//                               <button
//                                 key={product.id}
//                                 onClick={() => {
//                                   setSelectedProduct(product.id);
//                                   setEstimate(0);
//                                 }}
//                                 className={`p-4 border-2 rounded-lg text-left ${
//                                   selectedProduct === product.id
//                                     ? "border-champagne-500 bg-champagne-50"
//                                     : "border-gray-200 hover:border-champagne-300"
//                                 }`}
//                               >
//                                 <div className="font-semibold text-charcoal-800">{product.name}</div>
//                                 <div className="text-sage-600 text-sm">AED {product.price}</div>
//                               </button>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Dimension Inputs */}
//                         {key.includes("curtains") && selectedProduct && (
//                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             <div>
//                               <label className="block text-sm text-charcoal-800 mb-1">
//                                 Width (feet)
//                               </label>
//                               <input
//                                 type="number"
//                                 value={width}
//                                 onChange={(e) => setWidth(e.target.value)}
//                                 placeholder="e.g., 8"
//                                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-champagne-500"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm text-charcoal-800 mb-1">
//                                 Height (feet)
//                               </label>
//                               <input
//                                 type="number"
//                                 value={height}
//                                 onChange={(e) => setHeight(e.target.value)}
//                                 placeholder="e.g., 10"
//                                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-champagne-500"
//                               />
//                             </div>
//                           </div>
//                         )}

//                         {/* Calculate Button */}
//                         {selectedProduct && (
//                           <Button
//                             onClick={handleCalculate}
//                             className="w-full bg-champagne-500 hover:bg-champagne-600 text-white font-semibold py-3"
//                           >
//                             Calculate Estimate
//                           </Button>
//                         )}

//                         {/* Result Display */}
//                         {estimate > 0 && (
//                           <div className="text-center mt-6 p-6 bg-charcoal-800 text-white rounded-lg">
//                             <DollarSign className="w-6 h-6 mx-auto mb-2" />
//                             <h4 className="text-lg font-semibold mb-1">Estimated Cost</h4>
//                             <div className="text-3xl font-bold text-champagne-400">
//                               AED {estimate.toLocaleString()}
//                             </div>
//                             <p className="text-sm text-luxury-300 mt-1">
//                               *Final quote may vary based on customization
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>

//           {/* CTA Section */}
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
//     </div>
//   );
// };

// export default EstimatorPage;


import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const categories = {
  "home-curtains": {
    label: "Home Curtains",
    image: "/boc.webp",
    products: [
      { id: "blackout", name: "Blackout Curtains", price: 140 },
      { id: "sheer", name: "Sheer Curtains", price: 100 },
      { id: "linen", name: "Linen Curtains", price: 120 },
    ],
  },
  "office-curtains": {
    label: "Office Curtains",
    image: "/office1.png",
    products: [
      { id: "vertical", name: "Vertical Blinds", price: 110 },
      { id: "roller", name: "Roller Blinds", price: 130 },
    ],
  },
  "custom-sofas": {
    label: "Custom Sofas",
    image: "/sofa1.webp",
    products: [
      { id: "two-seater", name: "2-Seater Sofa", price: 1200 },
      { id: "three-seater", name: "3-Seater Sofa", price: 1600 },
      { id: "sectional", name: "Sectional Sofa", price: 2500 },
    ],
  },
  bedsheets: {
    label: "Bedsheets",
    image: "/bedsheet7.webp",
    products: [
      { id: "cotton", name: "Premium Cotton", price: 180 },
      { id: "silk", name: "Silk Touch", price: 250 },
    ],
  },
};

const EstimatorPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [estimate, setEstimate] = useState(0);

  const handleCalculate = () => {
    if (selectedCategory && selectedProduct) {
      const product = categories[selectedCategory].products.find(
        (p) => p.id === selectedProduct
      );
      if (!product) return;
      const price = product.price;
      const isAreaBased = selectedCategory.includes("curtains");
      const total = isAreaBased
        ? parseFloat(width) * parseFloat(height) * price
        : price;
      setEstimate(total);
    }
  };

  return (
    <div className="min-h-screen bg-luxury-50">
      <Header />

      <section className="py-20 bg-gradient-to-br from-champagne-600 via-champagne-700 to-champagne-900 text-white text-center">
        <h1 className="text-5xl font-bold mb-4 mt-12">Get Your Instant Estimate</h1>
        <p className="text-xl text-luxury-300 max-w-2xl mx-auto">
          Choose a category and customize your selection to get an accurate cost estimation.
        </p>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="w-12 h-12 text-champagne-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-charcoal-900">Aziz Services Price Estimator (AED)</h2>
            <p className="text-sage-600">Prices include materials and basic service charges</p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(categories).map(([key, cat]) => (
                  <div key={key}>
                    <button
                      onClick={() => {
                        setSelectedCategory(key);
                        setSelectedProduct("");
                        setEstimate(0);
                        setWidth("");
                        setHeight("");
                      }}
                      className={`p-2 border-2 rounded-lg w-full overflow-hidden transition-all ${
                        selectedCategory === key
                          ? "border-champagne-500 bg-champagne-50"
                          : "border-gray-200 hover:border-champagne-300"
                      }`}
                    >
                      <img
                        src={cat.image}
                        alt={cat.label}
                        className="w-full h-48 object-cover rounded-md mb-2"
                      />
                      <span className="font-semibold text-charcoal-900 block text-center">
                        {cat.label}
                      </span>
                    </button>

                    {/* Estimator Block with animation */}
                    <AnimatePresence>
                      {selectedCategory === key && (
                        <motion.div
                          className="mt-6 space-y-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Product Selector */}
                          <div>
                            <label className="block text-sm font-medium text-charcoal-800 mb-2">
                              Choose Product
                            </label>
                            <div className="grid grid-cols-1 gap-3">
                              {cat.products.map((product) => (
                                <motion.button
                                  key={product.id}
                                  onClick={() => {
                                    setSelectedProduct(product.id);
                                    setEstimate(0);
                                  }}
                                  whileTap={{ scale: 0.97 }}
                                  className={`p-4 border-2 rounded-lg text-left ${
                                    selectedProduct === product.id
                                      ? "border-champagne-500 bg-champagne-50"
                                      : "border-gray-200 hover:border-champagne-300"
                                  }`}
                                >
                                  <div className="font-semibold text-charcoal-800">{product.name}</div>
                                  <div className="text-sage-600 text-sm">AED {product.price}</div>
                                </motion.button>
                              ))}
                            </div>
                          </div>

                          {/* Dimension Inputs with animation */}
                          <AnimatePresence>
                            {key.includes("curtains") && selectedProduct && (
                              <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div>
                                  <label className="block text-sm text-charcoal-800 mb-1">
                                    Width (feet)
                                  </label>
                                  <input
                                    type="number"
                                    value={width}
                                    onChange={(e) => setWidth(e.target.value)}
                                    placeholder="e.g., 8"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-champagne-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm text-charcoal-800 mb-1">
                                    Height (feet)
                                  </label>
                                  <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    placeholder="e.g., 10"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-champagne-500"
                                  />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Calculate Button */}
                          {selectedProduct && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Button
                                onClick={handleCalculate}
                                className="w-full bg-champagne-500 hover:bg-champagne-600 text-white font-semibold py-3"
                              >
                                Calculate Estimate
                              </Button>
                            </motion.div>
                          )}

                          {/* Result Display */}
                          <AnimatePresence>
                            {estimate > 0 && (
                              <motion.div
                                className="text-center mt-6 p-6 bg-charcoal-800 text-white rounded-lg"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                              >
                                <DollarSign className="w-6 h-6 mx-auto mb-2" />
                                <h4 className="text-lg font-semibold mb-1">Estimated Cost</h4>
                                <div className="text-3xl font-bold text-champagne-400">
                                  AED {estimate.toLocaleString()}
                                </div>
                                <p className="text-sm text-luxury-300 mt-1">
                                  *Final quote may vary based on customization
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section (unchanged) */}
          <div className="flex flex-col items-center mt-16">
            <a
              href="https://wa.me/971501234567?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20free%20home%20visit%20with%20Aziz%20Khan%20Curtains."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:text-xl text-gray-900 font-semibold px-8 py-2 rounded-lg text-lg transition-all duration-300 shadow-xl"
            >
              Book <u><b>Free</b></u> Home Visit
            </a>
            <p className="text-center text-gray-600 py-5 px-4 max-w-md">
              Our experts visit with samples and guide you in choosing custom window coverings for free
            </p>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default EstimatorPage;
