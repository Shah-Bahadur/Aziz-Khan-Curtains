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
    description:
      'Enjoy uninterrupted sleep and complete privacy with our blackout roller blinds — perfect for bedrooms and media rooms.',
    cta: 'Get a Free Quote',
  },
{
  title: 'Sheer Curtains',
  image: '/hcp2.webp',
  description:
    'Let natural light flow beautifully into your home with our sheer curtains. Ideal for living rooms and lounges — these add a gentle, airy feel without compromising on privacy.',
  cta: 'Get a Free Quote',
},
{
  title: 'Motorized Curtains',
  image: '/hcp3.webp',
  description:
    'Open and close your curtains with a remote or smartphone. Our motorized curtain systems offer convenience, modern living, and enhanced security — perfect for smart homes.',
  cta: 'Get a Free Quote',
}
];
const officeCurtainProducts = [
  {
    title: 'Roller Shades',
    image: '/ocp1.avif',
    description:
      'Modern roller shades perfect for controlling glare and light in office spaces — sleek, stylish, and highly functional.',
    cta: 'Get a Free Quote',
  },
  {
    title: 'Vertical Blinds',
    image: '/ocp2.webp',
    description:
      'Elegant vertical blinds that offer easy light adjustment and privacy — ideal for conference rooms and workspaces.',
    cta: 'Get a Free Quote',
  },
  {
    title: 'Venetian Blinds',
    image: '/ocp3.webp',
    description:
      'Durable and stylish Venetian blinds that blend well with any office decor while providing precise light control.',
    cta: 'Get a Free Quote',
  },
];
const sofaservices = [
  {
    title: 'From Scratch Designing',
    image: '/sp1.webp', // Replace with actual image path
    description:
      'Get your sofa crafted from the ground up. We offer complete custom design — from frame structure to fabric finish — tailored to your comfort and interior theme.',
    cta: 'Start Designing',
  },
  {
    title: 'Quoting & Consultation',
    image: '/sp2.jpg', // Replace with actual image path
    description:
      'Not sure where to start? Our experts provide accurate quotations and help you choose the right material, color, and design to fit your style and budget.',
    cta: 'Request a Quote',
  },
  {
    title: 'Complete Sofa Renovation',
    image: '/sp3.webp', // Replace with actual image path
    description:
      'Breathe new life into your old furniture with our sofa renovation service — reupholstery, padding, wood polish, and structural fixes all in one.',
    cta: 'Renovate Now',
  },
];


const bedsheets = [
  {
    title: 'Bleached China Bed Sheets',
    description:
      'Made with soft and breathable fabric, our Bleached China bed sheets are perfect for everyday comfort. Available in a wide range of modern shades to match your room’s vibe and aesthetics.',
    cta: 'Get a Free Quote',
    colorVariants: [
      { colorName: 'Default', colorCode: '#CCCCCC', imageUrl: '/bsp1.jpg' },
      { colorName: 'Mysterious', colorCode: '#152432', imageUrl: '/bsp2.jpg' },
      { colorName: 'Purple', colorCode: '#36013f', imageUrl: '/bsp3.jpg' },
      { colorName: 'Orchid Smoke', colorCode: '#D294AA', imageUrl: '/bsp4.jpg' },
      { colorName: 'Cappuccino Chocolate', colorCode: '#633f33', imageUrl: '/bsp5.jpg' },
      { colorName: 'Red', colorCode: '#C30F18', imageUrl: '/bsp6.jpg' },
      { colorName: 'Beige', colorCode: '#EDE8D0', imageUrl: '/bsp7.jpg' }, // fixed typo in colorCode
      { colorName: 'Navy Blue', colorCode: '#34414e', imageUrl: '/bsp8.jpg' },
      { colorName: 'Coffee', colorCode: '#393429', imageUrl: '/bsp9.jpg' },
    ],
  },
  {
    title: '125GSM Bed Sheets',
    description:
      'These lightweight and smooth 125 GSM bed sheets offer durability with softness. Ideal for regular use, they’re easy to maintain and come in beautiful tones and designs to uplift any bedroom setting.',
    cta: 'Get a Free Quote',
    colorVariants: [
      { colorName: 'Default', colorCode: '#F15A24', imageUrl: '/bsp10.png' },
      { colorName: '125 GSM Crimson', colorCode: '#DC143C', imageUrl: '/bsp11.png' },
      { colorName: '125 GSM Midnight Blue', colorCode: '#1A2B4C', imageUrl: '/bsp12.png' },
      { colorName: '125 GSM Beige', colorCode: '#EDE8D0', imageUrl: '/bsp13.png' },
      { colorName: '125 GSM Sky Blue', colorCode: '#87CEEB', imageUrl: '/bsp14.png' },
    ],
  },
  {
    title: 'Salonika Bed Sheets',
    description:
      'Premium quality Salonika bed sheets offer a luxurious look and feel. With subtle patterns and calming tones, they are perfect for modern, minimal, and elegant bedroom themes.',
    cta: 'Get a Free Quote',
    colorVariants: [
      {
        colorName: 'Salonika 8280 - Grey',
        colorCode: '#A9A9A9', // Approx. light grey
        imageUrl: '/bsp15.jpg',
      },
      {
        colorName: 'Salonika 4734 - Grey',
        colorCode: '#808080', // Standard grey
        imageUrl: '/bsp16.jpg',
      },
      {
        colorName: 'Salonika 5951 - Blue',
        colorCode: '#4682B4', // Steel blue
        imageUrl: '/bsp17.jpg',
      },
    ],
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
        
        <>
          <ProductCardsSection
          sectionTitle="Bespoke Sofa Solutions — From Frame to Fabric"
          products={sofaservices}
        />
        <Tcs3
          headingLines="Where Style Meets"
          focusWord="Comfort."
          headingLines2="Aziz Khan Custom Sofas"
          paragraphText="Free Fabric Preview at Home. We bring materials, take measurements, and plan the design — all at your doorstep."
          images={['/sofa6.png', '/sofa7.png', '/sofa8.png']}
        />
        </>
      )}
      {/* Under Home Curtains Section */}
      

      {(selectedCategory === 'All' || selectedCategory === 'Bed Sheets') && (
        <>
          <ProductCardsSection
          sectionTitle="Aziz Khans Bed Sheets Collection"
          products={bedsheets}
        />
        <Tcs3
          headingLines="Your Bed,"
          focusWord="Your Sanctuary."
          headingLines2="Aziz Khan Bed Sheets"
          paragraphText="Soft, elegant, and personalized to your comfort. We bring fabric samples to your home, take measurements, and help you style the bedroom you’ve always dreamed of."
          images={['/bedsheet6.webp', '/bedsheet7.webp', '/bedsheet8.webp']}
        />
        </>
      )}

      <Services />
      <Contact />
      <Footer />
    </div>
  );
};
export default ProductsPage;
