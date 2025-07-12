import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Award, Users, Clock } from "lucide-react";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "25+", label: "Years of Exellence" },
    { number: "Quick", label: "Delivery" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Only premium materials and expert craftsmanship go into every product we create."
    },
    {
      icon: Clock,
      title: "Swift Turnaround",
      description: "Fast delivery and precise installation, without cutting corners."
    },
    {
      icon: Users,
      title: "Client-First Ethos",
      description: "We listen, understand, and personalize every experience for your space."
    },
    {
      icon: Home,
      title: "Holistic Transformation",
      description: "From bland rooms to breathtaking interiors — we don’t decorate, we elevate."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* 1. Hero Section */}
      <section className=" text-center sm:text-left py-16 sm:py-24 bg-gradient-to-br from-champagne-900 via-cyan-950 to-champagne-900">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 mt-12 leading-tight">
              Transform Home, with 
              <br />Aziz Khan Curtains
            </h1>
            <p className="text-lg sm:text-xl text-luxury-300 mb-8 leading-relaxed">
              At Aziz Khan Curtains, we don’t just hang fabrics — we craft comfort, style, and identity for your living spaces.
              Our mission is to bring warmth, elegance, and ease into every home we touch.
            </p>
            <div className="flex flex-col items-center sm:items-start mt-10">
              <a
                href="https://wa.me/+971503635428?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20free%20home%20visit%20with%20Aziz%20Khan%20Curtains."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:text-xl text-gray-900 font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 shadow-xl"
              >
                Book <u><b>Free</b></u> Home Visit
              </a>
              <p className="text-center sm:text-left text-gray-100 py-5 px-0 max-w-md">
                Our experts visit with samples and guide you in choosing custom window coverings for free
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xs sm:ml-60 sm:max-w-sm mt-12 md:max-w-md lg:w-[400px] lg:h-[500px]">
            <img
              src="/home6.png"
              alt="Aziz Khan Curtains in Action"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* 2. Brand Story
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-6">Our Journey</h2>
          <p className="text-md sm:text-lg text-sage-600 leading-relaxed mb-4">
            Founded with a vision to redefine how people feel about their homes, Aziz Khan started with a simple idea:
            luxury shouldn’t be slow, and style shouldn’t be complicated.
          </p>
          <p className="text-md sm:text-lg text-sage-600 leading-relaxed">
            Today, our reputation as Pakistan’s fastest, most design-savvy curtain experts is built on delivering results
            that wow — without the wait.
          </p>
        </div>
      </section> */}

          <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center max-w-6xl gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-6">Our Journey</h2>
          <p className="text-md sm:text-lg text-sage-600 leading-relaxed mb-4">
            Founded with a vision to redefine how people feel about their homes, Aziz Khan started with a simple idea:
            luxury shouldn’t be slow, and style shouldn’t be complicated.
          </p>
          <p className="text-md sm:text-lg text-sage-600 leading-relaxed">
            Today, our reputation as Dubai’s fastest, most design-savvy curtain experts is built on delivering results
            that wow — without the wait.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
  <img
    src="/sign.png"
    alt="Aziz Khan Signature"
    className="object-contain w-auto h-auto max-h-[400px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
  />
</div>

      </div>
    </section>

      {/* 2.1 Service Areas */}
      <section className="py-12 bg-luxury-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-900 mb-4">Serving Homes Across Dubai</h2>
          <p className="text-md sm:text-lg text-sage-700">
            From Downtown to Jumeirah, Dubai Marina to Business Bay — our curtain experts bring style, speed, and service to every corner of the city.
          </p>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="py-16 bg-luxury-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-charcoal-900 text-center mb-12">Why Customers Trust Us</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl font-bold text-champagne-700">{stat.number}</div>
                <div className="text-charcoal-700 text-md sm:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 text-center mb-12 sm:mb-16">Our Promise To You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className=" bg-gradient-to-tl from-champagne-600 to-champagne-900 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-charcoal-900 mb-2 sm:mb-4">{value.title}</h3>
                  <p className="text-sage-600 text-sm sm:text-base leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team */}
      <section className="py-16 sm:py-20 bg-luxury-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 text-center mb-12">Meet the People Behind the Craft</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Aziz Khan", title: "Founder & CEO", color: "bg-champagne-500", initials: "AK", desc: "Leading with vision and over a decade of experience in textile and interiors." },
              { name: "Abdul Razaq", title: "Managing Director", color: "bg-charcoal-800", initials: "MT", desc: "Crafts spaces that reflect your personality with design precision." },
              { name: "Abdul Qayyum", title: "Installation Manager", color: "bg-sage-600", initials: "SA", desc: "Turns your concept into reality with expert installation delivery." }
            ].map((member, i) => (
              <Card key={i} className="text-center border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className={`w-20 h-20 ${member.color} rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center`}>
                    <span className="text-xl sm:text-2xl font-bold text-white">{member.initials}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-charcoal-900 mb-2">{member.name}</h3>
                  <p className="text-champagne-600 font-semibold mb-3">{member.title}</p>
                  <p className="text-sage-600 text-sm sm:text-base">{member.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-champagne-900 via-cyan-950 to-champagne-900">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Home className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Book Your Free Home Visit</h2>
          <p className="text-md sm:text-xl text-champagne-100 mb-6 sm:mb-8 leading-relaxed">
            Let us visit your home, measure your space, and bring ideas to life — all at no cost.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
          href="https://wa.me/+971503635428?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20free%20home%20visit%20with%20Aziz%20Khan%20Curtains."
          target="_blank"
          rel="noopener noreferrer"
        className="bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:text-xl text-gray-900 font-semibold px-8 py-2 rounded-lg text-lg transition-all duration-300 shadow-xl">
              Book <u><b>Free</b></u> Home Visit
        </a>
            <a
          href="https://wa.me/+971503635428?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20free%20home%20visit%20with%20Aziz%20Khan%20Curtains."
          target="_blank"
          rel="noopener noreferrer"
        className="bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:text-xl text-gray-900 font-semibold px-8 py-2 rounded-lg text-lg transition-all duration-300 shadow-xl">
              <u><b>+971-503635428</b></u>
            </a>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default AboutPage;
