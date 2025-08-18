import ServiceHero from "@/components/Service_hero";
import Header from "@/components/Header";
import Process from "@/components/Process";
import TypeCurtainsSection from "@/components/TypeCurtainsSection";
import TypeCurtainsSection1 from "@/components/TypeCurtainsSection1";
import TypeCurtainsSection2 from "@/components/TypeCurtainsSection2";
import Tcs3 from "@/components/Tcs3";
import RecentWork from "@/components/RecentWork";
import Services from "@/components/Services";
import ProductCardsSection from "@/components/ProductCardsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/ServiceCards";

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
,
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

const recentWorks = [
  {
    title: "They transformed my living room!    ",
    image: "/hw1.webp",
    description: "I was so tired of my old, boring curtains.\
    The team at Aziz Khan helped me choose the perfect fabric \
    and design for my living room. The final product is stunning—it \
    completely transformed the space. The quality is exceptional, and \
     the service was so professional from start to finish. Highly recommend!",
  },
  {
    title: "Perfect fit, every time.",
    image: "/hw2.webp",
    description: "I was worried about getting the measurements right, \
    but Aziz Khan’s team came to my apartment, showed me fabric samples, \
    and handled everything. The installation was quick, and the curtains fit my windows flawlessly. \
    Their attention to detail is unmatched. It was a completely hassle-free experience.",
  },
  {
    title: "Better sleep with blackout curtains",
    image: "/hw3.webp",
    description: "Living in Dubai, the morning sun was always waking me up.\
     I called Aziz Khan for blackout curtains, and they delivered. The quality is fantastic, \
     and they're so effective. My bedroom is now completely dark when I need it to be. \
    A simple change that has made a huge difference to my sleep.",
  },
  // Add more as needed
];
const CurtainsLP = () => {
    return (
        <div>
            <Header />
            {/* Hero Section */}
            <ServiceHero 
                title="Curtains for You" 
                highlight="Elegant and Affordable" 
                description="Discover our wide range of curtains to match your home decor." 
                image="/mobile-image.jpg" 
                mobileImage="/mobile-image.jpg"
            />
            {/* Process Section */}
            <Process/>
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <TypeCurtainsSection />
      <TypeCurtainsSection1 />
      <TypeCurtainsSection2 />
      <Tcs3/>
      <div id = "office_curtains">
      <TypeCurtainsSection
        
        titleLine1="Smarter Spaces,"
        titleLine2="Better Work."
        subtitle = "Aziz's"
        curtainsType ="Office Curtains"
        imageUrl="/office.webp"
        testimonial="As a manager, I needed blinds that looked sleek and worked well. Aziz Khan’s team gave our office a polished, energy-efficient upgrade."
        author="Hina Yousuf"
        authorImageUrl="/reviewer2.webp"
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
        section2MainImage = "/office1.webp"
        section2DecorImage = "/office2.webp"
        />
        <TypeCurtainsSection2
        section3Text = "Custom Fit & Corporate Finish – From boardrooms to startups, we offer modern, easy-to-maintain materials in neutral and premium tones."
        section3LeftImage = "/office5.webp"
        section3CenterImage = "/office3.webp"
        section3RightImage = "/office4.webp"
        />
        <Tcs3
        headingLines = "Redefine Your "
        focusWord = " Workspace"
        headingLines2 = "Aziz Khan Office Curtains"
        paragraphText = "Blinds or blackout — made to match your team’s focus - Free Fabric Preview at Your Location."
        images ={['/office6.webp', '/office7.webp', '/office8.webp']}
  
        />
        </div>
        </div>
        <div>
      {/* ...other sections... */}
      <RecentWork works={recentWorks} />
      {/* ...other sections... */}
    </div>
    <div>
    <ProductCardsSection
      sectionTitle="Discover Your Perfect Curtains"
      products={homeCurtainProducts}
    />
    </div>
    <ServiceCards
  heading="We are the Pioneers of Interiors"
  description="Discover our range of premium services for your home and office. Click to learn more about each offering."
  services={[
    { id: 1, name: "Premium Curtain Design & Installation", 
      description: "Upgrade your bedroom with our premium bed sheets, crafted from soft, breathable fabrics for ultimate comfort. Designed in elegant styles to match your home décor, these sheets bring hotel-like luxury to your everyday sleep", 
      imageUrl: "/home1.webp" },
    { id: 2, name: "Sofa Restoration & Upholstery  ", 
      description: "Upgrade your bedroom with our premium bed sheets, crafted from soft, breathable fabrics for ultimate comfort. Designed in elegant styles to match your home décor, these sheets bring hotel-like luxury to your everyday sleep",
      imageUrl: "/sofa.webp" },
    { id: 3, name: "Elegant Bed Sheets for Every Mood & Vibe", 
      description: "Upgrade your bedroom with our premium bed sheets, crafted from soft, breathable fabrics for ultimate comfort. Designed in elegant styles to match your home décor, these sheets bring hotel-like luxury to your everyday sleep", 
      imageUrl: "/bedsheet1.webp" }
  ]}
  onSelect={(key) => console.log("Selected service key:", key)}
  selectedKey={"1"}
/>
    <Services/>
    <Contact />
    <Footer />

    
        </div>
    )
};

export default CurtainsLP;