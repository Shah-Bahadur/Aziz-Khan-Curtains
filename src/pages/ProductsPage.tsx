// import Header from "@/components/Header";

// import Tcs3 from "@/components/Tcs3";
// import Services from "@/components/Services";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// const ProductsPage = () => { 
// return (
// <div className="min-h-screen mt-16  ">
//   <Header />


//   <Tcs3
//   />
//   <Tcs3
//         headingLines = "Redefine Your "
//         focusWord = " Workspace"
//         headingLines2 = "Aziz Khan Office Curtains"
//         paragraphText = "Blinds or blackout — made to match your team’s focus - Free Fabric Preview at Your Location."
//         images ={['/office6.png', '/office7.png', '/office8.png']}
  
//         />

//       <Tcs3
//         headingLines = "Where Style Meets "
//         focusWord = " Comfort."
//         headingLines2 = "Aziz Khan Custom Sofas"
//         paragraphText = "Free Fabric Preview at Home We bring materials, take measurements, and plan the design — all at your doorstep."
//         images ={['/sofa6.png', '/sofa7.png', '/sofa8.png']}
  
//         />
//         <Tcs3
//         headingLines = "Your Bed, "
//         focusWord = " Your Sanctuary."
//         headingLines2 = "Aziz Khan Bed Sheets"
//         paragraphText = "soft, elegant, and personalized to your comfort. We bring fabric samples to your home, take measurements, and help you style the bedroom you’ve always dreamed of."
//         images ={['/bedsheet6.webp', '/bedsheet7.webp', '/bedsheet8.webp']}
  
//         />
//         <Services/>
//         <Contact/>
//   <Footer/>
//   </div>
// )
// }

// export default ProductsPage;

import React, { useState } from "react";
import Header from "@/components/Header";
import Tcs3 from "@/components/Tcs3";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProductFilterTabs from "@/components/ProductFilterTabs";
import ProductCardsSection from "@/components/ProductCardsSection";

const homeCurtainProducts = [
  {
  title: 'Blackout Roller Blinds',
  image: '/hcp1.webp',
  tagline: 'Total Privacy, Day or Night',
  description:
    'Enjoy uninterrupted sleep and complete privacy with our blackout roller blinds — perfect for bedrooms and media rooms. Blocks sunlight, reduces heat, and adds a modern touch to your space.',
  cta: 'Get a Free Quote',
},
{
  title: 'Sheer Curtains',
  image: '/hcp2.webp',
  tagline: 'Soft Light, Elegant Ambiance',
  description:
    'Let natural light flow beautifully into your home with our sheer curtains. Ideal for living rooms and lounges — these add a gentle, airy feel without compromising on privacy.',
  cta: 'Get a Free Quote',
},
{
  title: 'Motorized Curtains',
  image: '/hcp3.webp',
  tagline: 'Luxury at Your Fingertips',
  description:
    'Open and close your curtains with a remote or smartphone. Our motorized curtain systems offer convenience, modern living, and enhanced security — perfect for smart homes.',
  cta: 'Get a Free Quote',
}
];
const officeCurtainProducts = [
  {
    title: 'Roller Shades',
    image: '/ocp1.avif',
    tagline: 'Minimal Design, Maximum Impact',
    description:
      'Modern roller shades perfect for controlling glare and light in office spaces — sleek, stylish, and highly functional.',
    cta: 'Get a Free Quote',
  },
  {
    title: 'Vertical Blinds',
    image: '/ocp2.webp',
    tagline: 'Smart Control for Office Lighting',
    description:
      'Elegant vertical blinds that offer easy light adjustment and privacy — ideal for conference rooms and workspaces.',
    cta: 'Get a Free Quote',
  },
  {
    title: 'Venetian Blinds',
    image: '/ocp3.webp',
    tagline: 'Classic Style with Modern Function',
    description:
      'Durable and stylish Venetian blinds that blend well with any office decor while providing precise light control.',
    cta: 'Get a Free Quote',
  },
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen mt-16">
      <Header />

      <div className="p-6">
        <h2 className="text-3xl font-bold m-10 sm:ml-28 text-center sm:text-left bg-gradient-to-br from-champagne-700 to-cyan-900 bg-clip-text text-transparent">Choose What You’re Looking For</h2>

        {/* 🔻 Filter Tabs */}
        <ProductFilterTabs
          activeCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* 🔻 Conditional Product Sections */}
      
      {(selectedCategory === 'All' || selectedCategory === 'Home Curtains') && (
        <>
          <ProductCardsSection
          sectionTitle="Home Curtain Collection"
          products={homeCurtainProducts}
        />
        <Tcs3
          headingLines="Redefine Your"
          focusWord="Home"
          headingLines2="Aziz Khan Home Curtains"
          paragraphText="Custom curtains for every room — we bring fabric samples to your home, take measurements, and plan the design with you."
          images={['/home1.png', '/home2.png', '/home3.png']}
        />
      
        </>
      )}
      

      {(selectedCategory === 'All' || selectedCategory === 'Office Curtains') && (
        <>
        <ProductCardsSection
          sectionTitle="Office Curtain Collection"
          products={officeCurtainProducts}
        />
        <Tcs3
          headingLines="Redefine Your"
          focusWord="Workspace"
          headingLines2="Aziz Khan Office Curtains"
          paragraphText="Blinds or blackout — made to match your team’s focus - Free Fabric Preview at Your Location."
          images={['/office6.png', '/office7.png', '/office8.png']}
        />
        </>
      )}

      {(selectedCategory === 'All' || selectedCategory === 'Sofa Fabrics') && (
        <Tcs3
          headingLines="Where Style Meets"
          focusWord="Comfort."
          headingLines2="Aziz Khan Custom Sofas"
          paragraphText="Free Fabric Preview at Home. We bring materials, take measurements, and plan the design — all at your doorstep."
          images={['/sofa6.png', '/sofa7.png', '/sofa8.png']}
        />
      )}
      {/* Under Home Curtains Section */}
      

      {(selectedCategory === 'All' || selectedCategory === 'Bed Sheets') && (
        <Tcs3
          headingLines="Your Bed,"
          focusWord="Your Sanctuary."
          headingLines2="Aziz Khan Bed Sheets"
          paragraphText="Soft, elegant, and personalized to your comfort. We bring fabric samples to your home, take measurements, and help you style the bedroom you’ve always dreamed of."
          images={['/bedsheet6.webp', '/bedsheet7.webp', '/bedsheet8.webp']}
        />
      )}

      <Services />
      <Contact />
      <Footer />
    </div>
  );
};
export default ProductsPage;
