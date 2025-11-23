import { useState } from 'react';
import { ChevronDown, Shield, Clock, Zap } from 'lucide-react';

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "How much do curtains cost in Dubai?",
      a: "Our pricing is transparent: Blackout Curtains start from AED 299/window, Motorized Curtains from AED 1,500/window, Premium Fabrics from AED 599/meter. We provide custom quotes based on your exact room dimensions, fabric choice, and design complexity. Most Dubai families spend AED 2,000-5,000 per room for complete installation with premium finishes.",
      icon: "💰"
    },
    {
      q: "How long does the installation take?",
      a: "Our proven process: FREE Consultation (1 hour) → Design & Quote (same day) → Delivery & Installation (24-48 hours). We work around your schedule—morning, evening, or weekend appointments available. Installation typically takes 2-4 hours depending on room complexity. No delays, no hidden timelines.",
      icon: "⏱️"
    },
    {
      q: "Do you offer guarantees and returns?",
      a: "Yes! We offer a 100% Satisfaction Guarantee: If unhappy within 14 days, we make alterations or adjustments free of charge. All installations come with a 2-year product warranty covering fabric and hardware defects. Your satisfaction is our priority—many of our clients are repeat customers and referrers.",
      icon: "🛡️"
    },
    {
      q: "Can you work with my interior designer?",
      a: "Absolutely! We collaborate with Dubai's top interior designers and architects. Many designers refer us because of our speed, quality, and professionalism. We provide design consultations, mood boards, and color matching services. Share your designer's specifications and we'll deliver exactly to brief.",
      icon: "🎨"
    },
    {
      q: "Why choose motorized curtains for Dubai weather?",
      a: "Dubai's intense sun and heat make motorized curtains perfect: Control UV exposure from your phone, reduce AC costs by 30-40%, protect furniture from fading. Our smart motorized systems integrate with your existing smart home setup and work even during power cuts with battery backup options.",
      icon: "🌞"
    },
    {
      q: "Do I need to be home for measurements?",
      a: "Yes, we recommend you be home for our FREE home visit. Our design expert will measure precisely, discuss your lifestyle, assess lighting conditions, and show you fabric samples in natural Dubai sunlight. This ensures perfect fit and the best color choice for your space.",
      icon: "📏"
    },
    {
      q: "Do you deliver and install across Dubai?",
      a: "Yes! We serve all of Dubai including Marina, Downtown, Jumeirah, Deira, Bur Dubai, and surrounding areas. Delivery is typically 24-48 hours. For urgent projects, express installation is available for AED 500 additional charge—same-day consultation and installation possible.",
      icon: "🚚"
    },
    {
      q: "What fabrics work best in Dubai's climate?",
      a: "We recommend: Blackout fabrics (99.9% light blocking) for bedrooms, Motorized blinds for offices (reduce glare, control heat), UV-protective fabrics (fade-resistant for 10+ years), moisture-resistant options for balconies. All our fabrics are tested for Dubai's extreme heat and humidity.",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-8 md:py-10 bg-gradient-to-b from-white to-luxury-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-900 mb-2 md:mb-3">
            Dubai Curtains Questions?
          </h2>
          <p className="text-sm md:text-lg text-sage-600 font-medium leading-relaxed">
            We've answered everything. WhatsApp us for more details.
          </p>
        </div>

        <div className="space-y-2 md:space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-2 border-champagne-200 rounded-lg md:rounded-xl overflow-hidden hover:border-champagne-400 transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full px-4 md:px-6 py-3 md:py-3 bg-white hover:bg-champagne-50 flex justify-between items-center transition-colors text-left gap-3"
              >
                <h3 className="font-bold text-charcoal-900 text-sm md:text-base leading-snug">{faq.q}</h3>
                <ChevronDown
                  className={`w-5 md:w-6 h-5 md:h-6 text-champagne-600 transition-transform duration-300 flex-shrink-0 ${
                    open === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === idx && (
                <div className="px-4 md:px-6 py-3 md:py-4 bg-champagne-50 border-t-2 border-champagne-200 text-charcoal-700 text-xs md:text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA at bottom of FAQ */}
        <div className="mt-6 md:mt-8 bg-gradient-to-r from-champagne-600 to-champagne-800 rounded-lg md:rounded-xl p-5 md:p-8 text-white text-center border-2 border-champagne-400">
          <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 leading-snug">Still have questions?</h3>
          <p className="text-champagne-100 text-sm md:text-base mb-4 md:mb-5 font-medium leading-relaxed">
            Our team is ready to help. Get personalized recommendations now.
          </p>
          <a
            href="https://wa.me/+971503635428?text=I%20have%20questions%20about%20curtains%20for%20my%20Dubai%20home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-champagne-700 font-bold px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-lg hover:bg-luxury-50 transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
