
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Process />
      <Products />
      <Services />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-charcoal-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Aziz Khan Curtains</h3>
            <p className="text-luxury-400">Premium Curtains with Lightning Fast Delivery</p>
          </div>
          <div className="border-t border-sage-700 pt-4">
            <p className="text-sm text-luxury-400">
              © 2024 Aziz Khan Curtains. All rights reserved. | Designed for Quick Service Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
