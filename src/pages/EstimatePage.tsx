
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Ruler, DollarSign } from "lucide-react";
import { useState } from "react";

const EstimatePage = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [estimate, setEstimate] = useState(0);

  const productPrices = {
    "blackout": 150,
    "sheer": 100,
    "silk": 250,
    "roman": 200
  };

  const productTypes = [
    { id: "blackout", name: "Blackout Curtains", price: 150 },
    { id: "sheer", name: "Sheer Curtains", price: 100 },
    { id: "silk", name: "Silk Drapes", price: 250 },
    { id: "roman", name: "Roman Blinds", price: 200 }
  ];

  const calculateEstimate = () => {
    if (selectedProduct && width && height) {
      const area = parseFloat(width) * parseFloat(height);
      const pricePerSqFt = productPrices[selectedProduct as keyof typeof productPrices];
      const total = area * pricePerSqFt;
      setEstimate(total);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Get Your Estimate</h1>
          <p className="text-xl text-luxury-300 max-w-3xl mx-auto">
            Use our simple calculator to get an instant estimate for your curtain project. Professional measurement and installation available.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-luxury-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calculator className="w-16 h-16 text-champagne-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-charcoal-900 mb-4">Curtain Cost Calculator</h2>
              <p className="text-sage-600">Select your product type and enter dimensions for an instant estimate</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator Form */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-6">Calculate Your Estimate</h3>
                  
                  {/* Product Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-charcoal-800 mb-3">Select Product Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      {productTypes.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => setSelectedProduct(product.id)}
                          className={`p-4 rounded-lg border-2 text-left transition-all ${
                            selectedProduct === product.id
                              ? 'border-champagne-500 bg-champagne-50'
                              : 'border-gray-200 hover:border-champagne-300'
                          }`}
                        >
                          <div className="font-semibold text-charcoal-800">{product.name}</div>
                          <div className="text-sm text-sage-600">Rs. {product.price}/sq ft</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dimensions */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-800 mb-2">Width (feet)</label>
                      <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                        placeholder="8"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-800 mb-2">Height (feet)</label>
                      <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-champagne-500 focus:border-transparent"
                        placeholder="10"
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={calculateEstimate}
                    className="w-full bg-champagne-500 hover:bg-champagne-600 text-white font-semibold py-3"
                  >
                    Calculate Estimate
                  </Button>

                  {/* Estimate Result */}
                  {estimate > 0 && (
                    <div className="mt-6 p-6 bg-charcoal-800 rounded-lg text-white text-center">
                      <DollarSign className="w-8 h-8 mx-auto mb-2" />
                      <h4 className="text-lg font-semibold mb-2">Estimated Cost</h4>
                      <div className="text-3xl font-bold text-champagne-400">Rs. {estimate.toLocaleString()}</div>
                      <p className="text-sm text-luxury-300 mt-2">*Price includes material and basic installation</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Ruler className="w-8 h-8 text-champagne-500 mb-4" />
                    <h3 className="text-lg font-bold text-charcoal-900 mb-3">Need Accurate Measurements?</h3>
                    <p className="text-sage-600 mb-4">Get professional measurement service at your doorstep for precise estimates.</p>
                    <Button className="w-full bg-charcoal-800 hover:bg-charcoal-700 text-white">
                      Book Free Measurement
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-charcoal-900 mb-3">What's Included:</h3>
                    <ul className="space-y-2 text-sage-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-champagne-500 rounded-full"></div>
                        <span>Premium quality materials</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-champagne-500 rounded-full"></div>
                        <span>Professional installation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-champagne-500 rounded-full"></div>
                        <span>Hardware and accessories</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-champagne-500 rounded-full"></div>
                        <span>Quality guarantee</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstimatePage;
