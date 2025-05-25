
import Header from "@/components/Header";
import Services from "@/components/Services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Truck, Ruler, Wrench, Award, Shield } from "lucide-react";

const ServicesPage = () => {
  const additionalServices = [
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our products and services.",
      highlight: "Guaranteed"
    },
    {
      icon: Shield,
      title: "Warranty Coverage",
      description: "Comprehensive warranty on all installations and products.",
      highlight: "Protected"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Premium Services</h1>
          <p className="text-xl text-luxury-300 max-w-3xl mx-auto">
            From consultation to installation, we provide comprehensive curtain services with lightning-fast delivery and professional excellence.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <Services />

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-charcoal-900 text-center mb-12">Additional Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-luxury-50">
                <CardContent className="p-8 text-center">
                  <div className="bg-champagne-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4">{service.title}</h3>
                  <p className="text-sage-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-luxury-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our experts are ready to help you choose the perfect curtains for your home.
          </p>
          <Button className="bg-champagne-500 hover:bg-champagne-600 text-white font-semibold px-8 py-3 text-lg">
            Get Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
