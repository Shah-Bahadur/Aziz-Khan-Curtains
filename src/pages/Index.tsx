
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import TypeCurtainsSection from "@/components/TypeCurtainsSection";
import TypeCurtainsSection1 from "@/components/TypeCurtainsSection1";
import TypeCurtainsSection2 from "@/components/TypeCurtainsSection2";
import Tcs3 from "@/components/Tcs3";
import FloatingButton from "@/components/FloatingButton";



const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Process />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <TypeCurtainsSection />
      <TypeCurtainsSection1 />
      <TypeCurtainsSection2 />
      <Tcs3/>
      
      <TypeCurtainsSection
        titleLine1="Block the Sun,"
        titleLine2="Stay Chill."
        subtitle = "Aziz's"
        curtainsType ="BlackOut Sheer Curtains"
        imageUrl="/bcu.jpeg"
        testimonial="Didn’t expect curtains to lower my AC usage this much. I’m genuinely impressed!"
        author="Hina Yousuf"
        authorImageUrl="/reviewer2.png"
        description={
          <>
            Takecontrol of light, privacy, and comfort — all at once.
            Aziz's Curtains blend function and elegance, letting you set
            the mood exactly how you like it, any time of day.
          </>}
          />
        <TypeCurtainsSection1  
        section2titlesub1 = "modern Homes"
        section2Title = "Made for "
        section2titlesub2 = "Loved by timeless souls"

        section2Text = "Dubai’s heat strains ACs, fades interiors, and invites mold — costing comfort, health, and money."
        section2MainImage = "/large.png"
        section2DecorImage = "/small.png"
        />
        <TypeCurtainsSection2
        section3Text = "From fabric to fitting,we handle every detail so your home gets the comfort and calm it deserves."
        section3LeftImage = "/sm.png"
        section3RightImage = "/secpart.png"
        section3SideImage = "/curtainssec2.png"
        />
      
      </div>
      {/* <Products /> */}
      <Services />
      <Contact />
      {/* <FloatingButton /> */}

      
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
