
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
import Footer from "@/components/Footer";
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
        titleLine1="Smarter Spaces,"
        titleLine2="Better Work."
        subtitle = "Aziz's"
        curtainsType ="Office Curtains"
        imageUrl="/office.png"
        testimonial="As a manager, I needed blinds that looked sleek and worked well. Aziz Khan’s team gave our office a polished, energy-efficient upgrade."
        author="Hina Yousuf"
        authorImageUrl="/reviewer2.png"
        description={
          <>
            Designed for Dubai offices. Built for focus and professionalism.
            Control glare. Add privacy. Impress your clients.
          </>}
          />
        <TypeCurtainsSection1  
        section2titlesub1 = "Smarter"
        section2Title = "Work"
        section2titlesub2 = "Design That Reflects Your Vision."

        section2Text = "Dubai offices battle strong sunlight, screen glare, and distractions. Our office blinds and curtains — like vertical blinds, roller blinds, and blackout shades — are made for productivity and style."
        section2MainImage = "/office1.png"
        section2DecorImage = "/office2.png"
        />
        <TypeCurtainsSection2
        section3Text = "Custom Fit & Corporate Finish – From boardrooms to startups, we offer modern, easy-to-maintain materials in neutral and premium tones."
        section3LeftImage = "/office5.png"
        section3CenterImage = "/office3.png"
        section3RightImage = "/office4.png"
        />
        <Tcs3
        headingLines = "Redefine Your "
        focusWord = " Workspace"
        headingLines2 = "Aziz Khan Office Curtains"
        paragraphText = "Blinds or blackout — made to match your team’s focus - Free Fabric Preview at Your Location."
        images ={['/office6.png', '/office7.png', '/office8.png']}
  
        />
      
      <TypeCurtainsSection
        titleLine1="More Than a Sofa..."
        titleLine2="It’s Where Moments Are Made."
        subtitle = "Aziz's"
        curtainsType ="Customized Sofas"
        imageUrl="/sofa.png"
        testimonial="They didn’t just fix my sofa — Aziz's Team redefined my living room. Professional team, premium finish, and worth every dirham."
        author="Hina Yousuf"
        authorImageUrl="/reviewer2.png"
        description={
          <>
            Each option is crafted to resonate with customers looking for custom sofa making and renovation — 
            Refresh your existing sofa with a new skin. Choose from a curated collection of fabrics.
          </>}
          />
        <TypeCurtainsSection1  
        section2titlesub1 = "Sofa Crafting"
        section2Title = "Bespoke"
        section2titlesub2 = "Complete Sofa Renovation"

        section2Text = "Old frame, new soul. We restore damaged or dated sofas with structural repair, fresh fabric, and upgraded cushioning — making it look and feel brand new."
        section2MainImage = "/sofa1.png"
        section2DecorImage = "/sofa2.png"
        />
        <TypeCurtainsSection2
        section3Text = "Your furniture should reflect your lifestyle — not limit it. Aziz Khan brings you the freedom to customize every detail, from design to comfort. Free Fabric Preview at Home We bring materials, take measurements, and plan the design — all at your doorstep."
        section3LeftImage = "/sofa3.png"
        section3CenterImage = "/sofa4.png"
        section3RightImage = "/sofa5.png"
        />
        <Tcs3
        headingLines = "Where Style Meets "
        focusWord = " Comfort."
        headingLines2 = "Aziz Khan Custom Sofas"
        paragraphText = "Free Fabric Preview at Home We bring materials, take measurements, and plan the design — all at your doorstep."
        images ={['/sofa6.png', '/sofa7.png', '/sofa8.png']}
  
        />

        <TypeCurtainsSection
        titleLine1="Make Every Night"
        titleLine2=" Feel Special."
        subtitle = "Aziz's"
        curtainsType ="Premium Bed Sheets"
        imageUrl="/bedsheet1.png"
        testimonial="These aren’t just bedsheets — they’re luxury in fabric form. I never thought a sheet could make such a difference in sleep quality. Highly recommend!"
        author="Maria Iqbal — Business Bay, Dubai"
        authorImageUrl={"/maria-iqbal.png"}
        description={
          <>
            Soft to the touch. Styled to your space. Tailored for restful nights in Dubai - Choose from a curated collection of fabrics.
          </>}
          />
        <TypeCurtainsSection1  
        section2titlesub1 = "Matches"
        section2Title = "Style That"
        section2titlesub2 = "Your Home"

        section2Text = "Modern, minimalist, floral, or bold — choose from handpicked patterns and palettes that complement your bedroom interior"
        section2MainImage = "/bedsheet.png"
        section2DecorImage = "/bedsheet2.png"
        />
        <TypeCurtainsSection2
        section3Text = "Your furniture should reflect your lifestyle — not limit it. Aziz Khan brings you the freedom to customize every detail, from design to comfort. Free Fabric Preview at Home We bring materials, take measurements, and plan the design — all at your doorstep."
        section3LeftImage = "/bedsheet5.png"
        section3CenterImage = "/bedsheet3.png"
        section3RightImage = "/bedsheet4.png"
        />
        <Tcs3
        headingLines = "Your Bed, "
        focusWord = " Your Sanctuary."
        headingLines2 = "Aziz Khan Bed Sheets"
        paragraphText = "soft, elegant, and personalized to your comfort. We bring fabric samples to your home, take measurements, and help you style the bedroom you’ve always dreamed of."
        images ={['/bedsheet6.png', '/bedsheet7.png', '/bedsheet8.png']}
  
        />
      
      </div>
      {/* <Products /> */}
      <Services />
      <Contact />
      {/* <FloatingButton /> */}

      
      {/* Footer */}
      <Footer/>
      
    </div>
  );
};

export default Index;
