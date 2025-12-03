import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Award, TrendingUp, Users, Clock, Zap, Shield } from 'lucide-react';
import ContactCTAButton from './ContactCTAButton';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ once: false, mirror: true, duration: 800 });
  }, []);

  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Years Dubai Experience",
      description: "Trusted by 2,000+ Dubai families, businesses, and luxury villas. Local expertise in humidity, heat, and design preferences.",
      stat: "2,000+",
      statLabel: "Happy Clients"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Premium Quality, Affordable Prices",
      description: "Direct sourcing means no middlemen. Same quality you'd get elsewhere at 30-40% lower costs. Transparent pricing, zero surprises.",
      stat: "30-40%",
      statLabel: "Cost Savings"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Design Consultation",
      description: "Our designers understand Dubai's architecture—villas, apartments, penthouses. Free consultation includes fabric selection, color matching, and mood boards.",
      stat: "FREE",
      statLabel: "Design Service"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24-48 Hour Installation",
      description: "Fastest turnaround in Dubai. Consultation on Monday, installed by Wednesday. Minimal disruption to your life or business.",
      stat: "24-48",
      statLabel: "Hours Install"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Home Integration",
      description: "Our motorized systems work with Apple Home, Google Home, Alexa. Remote control from anywhere. Perfect for Dubai's tech-savvy residents.",
      stat: "Smart",
      statLabel: "Ready"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Satisfaction Guarantee",
      description: "Unhappy? We fix it free within 14 days. 2-year warranty on all products. We stand behind our work completely.",
      stat: "100%",
      statLabel: "Guarantee"
    }
  ];

  return (
    <section data-aos="fade-up" className="py-8 md:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-900 mb-2 md:mb-3">
            Why Aziz Khan Curtains?
          </h2>
          <p className="text-sm md:text-lg text-sage-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Premium design, professional service, and Dubai's fastest installation.
          </p>
        </div>

        <div className="mb-8 md:mb-10">
          <div className="flex overflow-x-auto gap-4 pb-4 scroll-smooth snap-x snap-mandatory">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full sm:w-80 bg-gradient-to-br from-champagne-50 to-white border-2 border-champagne-200 rounded-lg md:rounded-xl p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:border-champagne-400 group flex flex-col snap-center"
              >
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="text-champagne-600 group-hover:scale-110 transition-transform">
                    {reason.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl md:text-3xl font-bold text-champagne-700">{reason.stat}</p>
                    <p className="text-xs md:text-sm text-sage-600 font-medium leading-tight">{reason.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-charcoal-900 mb-2 md:mb-3 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-sm md:text-base text-sage-600 leading-relaxed flex-grow font-medium">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
          {/* Scroll Hint for Mobile */}
          <p className="text-center text-xs text-sage-500 md:hidden mt-2">← Swipe to see more →</p>
        </div>

        {/* Comparison Table */}
        <div className="mt-8 md:mt-10 bg-luxury-50 rounded-lg md:rounded-xl p-4 md:p-6 overflow-x-auto">
          <h3 className="text-lg md:text-xl font-bold text-charcoal-900 mb-4 md:mb-6 text-center">
            How We Compare
          </h3>
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="border-b-3 border-champagne-600">
                <th className="text-left py-3 md:py-3 px-2 md:px-4 font-bold text-charcoal-900">Feature</th>
                <th className="text-center py-3 md:py-3 px-2 md:px-4 font-bold text-champagne-700">Aziz Khan</th>
                <th className="text-center py-3 md:py-3 px-2 md:px-4 font-bold text-sage-600">Others</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Free Consultation", aziz: "Yes", other: "No" },
                { feature: "24-48 Hour Install", aziz: "Yes", other: "5-7 Days" },
                { feature: "Free Samples", aziz: "Yes", other: "No" },
                { feature: "Design Support", aziz: "Yes", other: "Extra Cost" },
                { feature: "Dubai-Based", aziz: "Yes", other: "No" },
                { feature: "Transparent Pricing", aziz: "Yes", other: "Hidden Costs" },
                { feature: "2-Year Warranty", aziz: "Yes", other: "6 Months" },
                { feature: "Same-Day Quote", aziz: "Yes", other: "3-5 Days" }
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-champagne-200 hover:bg-white transition-colors">
                  <td className="py-3 md:py-3 px-2 md:px-4 font-medium text-charcoal-800">{row.feature}</td>
                  <td className="py-3 md:py-3 px-2 md:px-4 text-center">
                    <span className="text-base md:text-lg font-bold text-champagne-700">{row.aziz}</span>
                  </td>
                  <td className="py-3 md:py-3 px-2 md:px-4 text-center text-sage-600 font-medium">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Final CTA */}
        <div className="mt-8 md:mt-10 text-center">
          <p className="text-sage-700 mb-3 md:mb-4 text-sm md:text-lg font-medium leading-relaxed">
            Ready to experience the difference?
          </p>
          <ContactCTAButton
            className="inline-block bg-gradient-to-r from-champagne-600 to-champagne-800 hover:from-champagne-700 hover:to-champagne-900 text-white font-bold px-6 md:px-10 py-2 md:py-4 rounded-lg md:rounded-xl text-sm md:text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Get Free Consultation
          </ContactCTAButton>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

