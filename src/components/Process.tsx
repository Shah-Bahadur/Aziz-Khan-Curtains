
import { Calendar, Users, CheckCircle, Truck } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Estimate & Schedule FREE Home Visit",
      description: "Get a free consultation and measurement at your convenience",
      step: "01"
    },
    {
      icon: Users,
      title: "Home Visit of Experts",
      description: "Our professional team visits to assess and advise on the best solutions",
      step: "02"
    },
    {
      icon: CheckCircle,
      title: "Approve the Quote",
      description: "Review and approve your customized quote with transparent pricing",
      step: "03"
    },
    {
      icon: Truck,
      title: "Install Curtains in 5 Days",
      description: "Quick professional installation with premium quality guarantee",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-luxury-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-4">
            How We Transform Your Space!
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            Our streamlined process ensures you get premium curtains with hassle-free experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 bg-champagne-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10">
                {step.step}
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-luxury-100 group-hover:scale-105">
                <div className="text-center">
                  {/* Icon */}
                  <div className="bg-charcoal-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-champagne-500 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sage-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-champagne-300 transform -translate-y-1/2 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-luxury-100">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-sage-600 mb-6">
              Schedule your free home visit today and transform your space with premium curtains
            </p>
            <button className="bg-champagne-500 hover:bg-champagne-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300">
              Book Free Home Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
