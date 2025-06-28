import Header from "@/components/Header";

import Tcs3 from "@/components/Tcs3";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const ProductsPage = () => { 
return (
<div className="min-h-screen mt-16  ">
  <Header />
  <Tcs3
  />
  <Tcs3
        headingLines = "Redefine Your "
        focusWord = " Workspace"
        headingLines2 = "Aziz Khan Office Curtains"
        paragraphText = "Blinds or blackout — made to match your team’s focus - Free Fabric Preview at Your Location."
        images ={['/office6.png', '/office7.png', '/office8.png']}
  
        />

      <Tcs3
        headingLines = "Where Style Meets "
        focusWord = " Comfort."
        headingLines2 = "Aziz Khan Custom Sofas"
        paragraphText = "Free Fabric Preview at Home We bring materials, take measurements, and plan the design — all at your doorstep."
        images ={['/sofa6.png', '/sofa7.png', '/sofa8.png']}
  
        />
        <Tcs3
        headingLines = "Your Bed, "
        focusWord = " Your Sanctuary."
        headingLines2 = "Aziz Khan Bed Sheets"
        paragraphText = "soft, elegant, and personalized to your comfort. We bring fabric samples to your home, take measurements, and help you style the bedroom you’ve always dreamed of."
        images ={['/bedsheet6.png', '/bedsheet7.png', '/bedsheet8.png']}
  
        />
        <Services/>
        <Contact/>
  <Footer/>
  </div>
)
}

export default ProductsPage;