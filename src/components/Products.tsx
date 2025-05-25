
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      title: "Luxury Blackout Curtains",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      price: "From Rs. 3,000",
      features: ["100% Blackout", "Energy Saving", "Premium Fabric"]
    },
    {
      title: "Elegant Silk Drapes",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      price: "From Rs. 5,000",
      features: ["Pure Silk", "Handcrafted", "Multiple Colors"]
    },
    {
      title: "Modern Sheer Curtains",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
      price: "From Rs. 2,500",
      features: ["Light Filtering", "Easy Care", "Contemporary Design"]
    },
    {
      title: "Classic Roman Blinds",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      price: "From Rs. 4,000",
      features: ["Motorized Option", "Custom Fit", "Premium Materials"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Premium Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our extensive range of high-quality curtains and blinds, all available for quick delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Quick Delivery
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">{product.title}</h3>
                <p className="text-2xl font-bold text-orange-500 mb-4">{product.price}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
