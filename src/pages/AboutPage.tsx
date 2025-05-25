
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Award, Users, Clock } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "10+", label: "Years Experience" },
    { number: "24hr", label: "Quick Delivery" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We use only the finest materials and craftsmanship to ensure lasting beauty and functionality."
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Lightning-fast delivery and installation without compromising on quality or attention to detail."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Every project is tailored to your unique needs with personalized service and expert guidance."
    },
    {
      icon: Home,
      title: "Home Transformation",
      description: "We don't just sell curtains; we transform spaces into beautiful, comfortable living environments."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">About Aziz Khan Curtains</h1>
              <p className="text-xl text-luxury-300 mb-8 leading-relaxed">
                For over a decade, Aziz Khan Curtains has been transforming homes across Pakistan with premium quality curtains and lightning-fast service. We combine traditional craftsmanship with modern efficiency to deliver exceptional results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-champagne-400">{stat.number}</div>
                    <div className="text-luxury-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" 
                alt="About Aziz Khan Curtains"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-charcoal-900 mb-8">Our Story</h2>
            <p className="text-lg text-sage-600 mb-8 leading-relaxed">
              Founded by Aziz Khan with a vision to bring luxury and comfort to every home, our company started as a small family business with big dreams. Today, we're proud to be one of Pakistan's leading curtain specialists, serving thousands of satisfied customers with our commitment to quality and speed.
            </p>
            <p className="text-lg text-sage-600 leading-relaxed">
              What sets us apart is our unique combination of premium materials, expert craftsmanship, and lightning-fast delivery. We understand that your home is your sanctuary, and we're dedicated to making it as beautiful and comfortable as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-luxury-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal-900 text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-champagne-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4">{value.title}</h3>
                  <p className="text-sage-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Home Visit CTA */}
      <section className="py-20 bg-gradient-to-r from-champagne-500 to-champagne-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Home className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Home?</h2>
            <p className="text-xl text-champagne-100 mb-8 leading-relaxed">
              Book a free home visit and let our experts help you choose the perfect curtains for your space. We'll provide professional measurement, consultation, and a detailed quote at no cost.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button className="bg-white text-champagne-600 hover:bg-luxury-50 font-semibold px-8 py-3 text-lg">
                Book Free Home Visit
              </Button>
              <Button className="bg-charcoal-800 hover:bg-charcoal-700 text-white font-semibold px-8 py-3 text-lg">
                Call Now: +92 300 1234567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to bringing your vision to life with expertise and care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-champagne-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AK</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">Aziz Khan</h3>
                <p className="text-champagne-600 font-semibold mb-4">Founder & CEO</p>
                <p className="text-sage-600">Leading the company with over 10 years of experience in premium curtain solutions.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-charcoal-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MT</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">Muhammad Tariq</h3>
                <p className="text-champagne-600 font-semibold mb-4">Head of Design</p>
                <p className="text-sage-600">Expert in interior design and curtain styling with a keen eye for detail.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-sage-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">SA</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">Sohail Ahmed</h3>
                <p className="text-champagne-600 font-semibold mb-4">Installation Manager</p>
                <p className="text-sage-600">Ensuring perfect installation with our team of certified professionals.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
