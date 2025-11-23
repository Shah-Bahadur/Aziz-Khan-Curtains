import ServiceHero from "@/components/Service_hero";
import Header from "@/components/Header";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import SocialProof from "@/components/SocialProof";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import TypeCurtainsSection from "@/components/TypeCurtainsSection";
import TypeCurtainsSection1 from "@/components/TypeCurtainsSection1";
import TypeCurtainsSection2 from "@/components/TypeCurtainsSection2";
import Tcs3 from "@/components/Tcs3";
import FAQSection from "@/components/FAQSection";
import RecentWork from "@/components/RecentWork";
import Services from "@/components/Services";
import ProductCardsSection from "@/components/ProductCardsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/ServiceCards";

// ===== SEO & CONVERSION OPTIMIZED DATA =====
const homeCurtainProducts = [
  {
    title: 'Blackout Roller Blinds for Dubai Bedrooms',
    image: '/hcp1.webp',
    description:
      '99.9% light-blocking technology keeps your Dubai bedroom dark and cool. Perfect for uninterrupted sleep despite intense sun. Thermal-insulated fabric reduces AC costs by 30-40%. Installed in 24-48 hours.',
    cta: 'Get Free Consultation',
  },
  {
    title: 'Sheer Curtains & Light-Filtering Options',
    image: '/hcp2.webp',
    description:
      'Premium sheer fabrics let natural Dubai sunlight in while protecting your privacy and furniture from UV fading. Choose from elegant ivory, white, or champagne tones that complement modern UAE interiors. UV-protection rated.',
    cta: 'Get Free Consultation',
  },
  {
    title: 'Smart Motorized Curtains & Blinds',
    image: '/hcp3.webp',
    description:
      'Control your curtains from your phone, voice assistant, or smart home system. Perfect for Dubai villas and modern apartments. Battery backup works during power cuts. Scheduling options for automatic morning/evening control.',
    cta: 'Get Free Consultation',
  },
  {
    title: 'Office Roller Shades for Glare Control',
    image: '/ocp1.avif',
    description:
      'Professional roller shades designed for Dubai offices. Eliminate screen glare, improve focus, and maintain professional aesthetics. Available in blackout, semi-transparent, and solar-control fabrics. Corporate bulk discounts available.',
    cta: 'Get Free Consultation',
  },
  {
    title: 'Vertical Blinds for Commercial Spaces',
    image: '/ocp2.webp',
    description:
      'Durable vertical blinds perfect for Dubai conference rooms and open-plan offices. Easy-to-clean materials, smooth operation, modern aesthetics. Customize slat width and color to match your brand. Fast 24-hour installation.',
    cta: 'Get Free Consultation',
  },
  {
    title: 'Venetian Blinds with Motorization Options',
    image: '/ocp3.webp',
    description:
      'Timeless elegance meets modern functionality. Our Venetian blinds offer precise light control and can be motorized for full automation. Moisture-resistant materials for Dubai\'s humidity. Perfect for villas, apartments, and offices.',
    cta: 'Get Free Consultation',
  },
];

const recentWorks = [
  {
    title: "They transformed my living room!",
    image: "/hw1.webp",
    description: "I was so tired of my old, boring curtains. The team at Aziz Khan helped me choose the perfect fabric and design for my living room. The final product is stunning—it completely transformed the space. The quality is exceptional, and the service was so professional from start to finish. Highly recommend!",
  },
  {
    title: "Perfect fit, every time.",
    image: "/hw2.webp",
    description: "I was worried about getting the measurements right, but Aziz Khan's team came to my apartment, showed me fabric samples, and handled everything. The installation was quick, and the curtains fit my windows flawlessly. Their attention to detail is unmatched. It was a completely hassle-free experience.",
  },
  {
    title: "Better sleep with blackout curtains",
    image: "/hw3.webp",
    description: "Living in Dubai, the morning sun was always waking me up. I called Aziz Khan for blackout curtains, and they delivered. The quality is fantastic, and they're so effective. My bedroom is now completely dark when I need it to be. A simple change that has made a huge difference to my sleep.",
  },
];

const CurtainsLP = () => {
  return (
    <div>
      <Header />

      {/* ========== STAGE 1: AWARENESS ========== */}
      {/* Hero Section - Strong Dubai-Specific Hook */}
      <ServiceHero
        title="Premium Curtains for Dubai Homes & Offices"
        highlight="Elegant, Affordable & Fast"
        description="Join 2,000+ Dubai families who get professional curtain solutions installed in 24-48 hours. Free design consultation included."
        image="/mobile-image.webp"
        mobileImage="/mobile-image-c.webp"
      />

      {/* Lead Magnet - Immediate Call-to-Action with Urgency */}
      <LeadMagnetSection />

      {/* ========== STAGE 2: CONSIDERATION & TRUST BUILDING ========== */}
      {/* Social Proof - Build Credibility Early */}
      <SocialProof />

      {/* Process Section - Show Simplicity & Speed */}
      <Process />

      {/* Why Choose Us - Competitive Differentiation */}
      <WhyChooseUs />

      {/* ========== STAGE 3: PRODUCT CONSIDERATION ========== */}
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        {/* Bedroom/Home Curtains Section */}
        <TypeCurtainsSection />
        <TypeCurtainsSection1 />
        <TypeCurtainsSection2 />
        <Tcs3 />

        {/* Office Curtains Section */}
        <div id="office_curtains">
          <TypeCurtainsSection
            titleLine1="Smarter Spaces,"
            titleLine2="Better Work."
            subtitle="Aziz's"
            curtainsType="Office Curtains"
            imageUrl="/office.webp"
            testimonial="As a manager, I needed blinds that looked sleek and worked well. Aziz Khan's team gave our office a polished, energy-efficient upgrade."
            author="Hina Yousuf"
            authorImageUrl="/reviewer2.webp"
            description={
              <>
                Designed for Dubai offices. Built for focus and professionalism.
                Control glare. Add privacy. Impress your clients.
              </>
            }
          />
          <TypeCurtainsSection1
            section2titlesub1="Smarter"
            section2Title="Work"
            section2titlesub2="Design That Reflects Your Vision."
            section2Text="Dubai offices battle strong sunlight, screen glare, and distractions. Our office blinds and curtains — like vertical blinds, roller blinds, and blackout shades — are made for productivity and style."
            section2MainImage="/office1.webp"
            section2DecorImage="/office2.webp"
          />
          <TypeCurtainsSection2
            section3Text="Custom Fit & Corporate Finish – From boardrooms to startups, we offer modern, easy-to-maintain materials in neutral and premium tones."
            section3LeftImage="/office5.webp"
            section3CenterImage="/office3.webp"
            section3RightImage="/office4.webp"
          />
          <Tcs3
            headingLines="Redefine Your"
            focusWord="Workspace"
            headingLines2="Aziz Khan Office Curtains"
            paragraphText="Blinds or blackout — made to match your team's focus - Free Fabric Preview at Your Location."
            images={['/office6.webp', '/office7-c.webp', '/office8-c.webp']}
          />
        </div>
      </div>

      {/* ========== STAGE 4: DECISION ========== */}
      {/* Product Cards - Clear, Specific Options with Pricing */}
      <ProductCardsSection
        sectionTitle="Discover Your Perfect Curtains - Starting from AED 299"
        products={homeCurtainProducts}
      />

      {/* Reviews/Testimonials Again - Reinforce Trust at Decision Point */}
      <RecentWork works={recentWorks} />

      {/* FAQ - Handle Objections & Build Confidence */}
      <FAQSection />

      {/* ========== STAGE 5: ACTION ========== */}
      {/* ServiceCards - Final Feature Showcase */}
      <ServiceCards
        heading="We are the Pioneers of Interiors in Dubai"
        description="Discover our range of premium services for your home and office. Click to learn more about each offering."
        services={[
          {
            id: 1,
            name: "Premium Curtain Design & Installation",
            description: "Expert design consultation + premium fabric selection + professional installation within 24-48 hours. Custom-fit solutions for bedrooms, living rooms, offices, and luxury villas across Dubai.",
            imageUrl: "/home1.webp"
          },
          {
            id: 2,
            name: "Motorized Smart Curtain Systems",
            description: "Control your curtains via smartphone, voice assistant, or smart home system. Perfect for Dubai's tech-savvy residents. Battery backup included for power cuts. Integrate with Apple Home, Google Home, Alexa.",
            imageUrl: "/sofa.webp"
          },
          {
            id: 3,
            name: "Thermal & Blackout Solutions",
            description: "Reduce AC costs by 30-40% with our thermal-insulated fabrics. 99.9% light-blocking technology for perfect sleep. UV-protection for furniture preservation in Dubai's intense sunlight.",
            imageUrl: "/bedsheet1.webp"
          }
        ]}
        onSelect={(key) => console.log("Selected service key:", key)}
        selectedKey={"1"}
      />

      {/* Services Section */}
      <Services />

      {/* Contact Section - Final CTA */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CurtainsLP;
