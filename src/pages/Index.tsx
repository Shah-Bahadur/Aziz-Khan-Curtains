
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import ThermalCurtainsSectionProps from "@/components/ThermalCurtainsSectionProps";
import Tcs3 from "@/components/Tcs3";
import FloatingButton from "@/components/FloatingButton";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Process />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <ThermalCurtainsSectionProps />
      {/* Second section - custom data */}
      <Tcs3/>
      
      {/* <ThermalCurtainsSectionProps
        titleLine1="Block the Sun,"
        titleLine2="Stay Chill."
        imageUrl="/bcu.jpeg"
        testimonial="Didn’t expect curtains to lower my AC usage this much. I’m genuinely impressed!"
        author="Hina Yousuf"
        authorImageUrl="/reviewer2.png"
        description={
          <>
            Extreme sunlight protection, perfect for the Dubai heat.<br />
            Stylish, smart, and energy-saving.
          </>
        }
      /> */}
      
      </div>
      <Products />
      <Services />
      <Contact />
      <FloatingButton />

      
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
