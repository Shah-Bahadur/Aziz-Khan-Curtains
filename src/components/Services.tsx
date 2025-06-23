
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Ruler, Wrench, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Same-day delivery for ready-made curtains. Custom orders delivered within 24-48 hours.",
      highlight: "Same Day"
    },
    {
      icon: Ruler,
      title: "Free Measurement",
      description: "Professional measurement service at your doorstep. Accurate sizing guaranteed.",
      highlight: "Free Service"
    },
    {
      icon: Wrench,
      title: "Installation",
      description: "Expert installation by certified professionals. Perfect fit and finish guaranteed.",
      highlight: "Professional"
    },
    {
      icon: Truck,
      title: "Home Delivery",
      description: "Fast and secure delivery to your doorstep. Track your order in real-time.",
      highlight: "Tracked"
    }
  ];

  return (
    <section id="services" className="py-20 bg-luxury-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-champagne-500 to-champagne-900 bg-clip-text text-transparent">Our Quick Services</h2>
          <p className="text-xl px-6 sm:px-0 text-sage-600 max-w-2xl mx-auto">
            From consultation to installation, we deliver excellence at every step with lightning-fast service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="absolute top-4 right-4">
                  <span className="bg-champagne-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {service.highlight}
                  </span>
                </div>
                
                <div className="bg-charcoal-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-champagne-500 transition-colors">
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
  );
};

export default Services;
