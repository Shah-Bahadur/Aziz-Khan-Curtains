
import Header from "@/components/Header";
import Products from "@/components/Products";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  const productCategories = [
    {
      title: "Blackout Curtains",
      description: "Perfect for bedrooms and media rooms",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      products: ["Heavy Blackout", "Thermal Blackout", "Decorative Blackout"]
    },
    {
      title: "Sheer Curtains",
      description: "Light and elegant window treatments",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
      products: ["Classic Sheer", "Embroidered Sheer", "Textured Sheer"]
    },
    {
      title: "Silk Drapes",
      description: "Luxury curtains for sophisticated spaces",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      products: ["Pure Silk", "Silk Blend", "Dupioni Silk"]
    },
    {
      title: "Roman Blinds",
      description: "Modern and functional window coverings",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      products: ["Fabric Roman", "Bamboo Roman", "Motorized Roman"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Product Collection</h1>
          <p className="text-xl text-luxury-300 max-w-3xl mx-auto">
            Discover our extensive range of premium curtains and blinds, crafted with the finest materials and available for quick delivery.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <Products />

      {/* Product Categories */}
      <section className="py-20 bg-luxury-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal-900 text-center mb-16">Product Categories</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal-900 bg-opacity-40"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-luxury-200">{category.description}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-charcoal-800 mb-4">Available Options:</h4>
                  <ul className="space-y-2 mb-6">
                    {category.products.map((product, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sage-600">
                        <div className="w-2 h-2 bg-champagne-500 rounded-full"></div>
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-charcoal-800 hover:bg-charcoal-700 text-white">
                    View Products
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
