import { CheckCircle2, Sparkles } from 'lucide-react';

const LeadMagnetSection = () => {
  const whatsappNumber = '+971503635428';
  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to schedule a FREE home consultation with fabric samples for my curtains project. 🎨`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-8 md:py-10 bg-gradient-to-r from-luxury-50 via-white to-luxury-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-champagne-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-sage-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 -z-0"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="flex justify-center mb-2 md:mb-3">
          <div className="inline-flex items-center gap-2 bg-champagne-100 px-3 md:px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-champagne-600" />
            <span className="text-xs md:text-sm font-semibold text-champagne-800">Limited Time Offer</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-900 mb-2 md:mb-3 leading-tight">
          Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne-600 to-champagne-900">Free Consultation</span>
        </h2>

        <p className="text-base md:text-lg text-charcoal-700 mb-1 md:mb-2 font-medium leading-relaxed">
          Professional Design Plan + Premium Fabric Samples at Your Home
        </p>
        <p className="text-sm md:text-base text-sage-600 mb-4 md:mb-5 font-medium leading-relaxed">
          Join 500+ happy Dubai families who transformed their homes
        </p>

        {/* Main CTA Button */}
        <div className="mb-4 md:mb-5">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-champagne-600 to-champagne-800 hover:from-champagne-700 hover:to-champagne-900 text-white font-bold px-6 md:px-10 py-3 md:py-4 rounded-lg md:rounded-xl text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
          >
            Schedule FREE Consultation
          </a>
          <p className="text-xs md:text-sm text-sage-600 mt-2 md:mt-2 font-medium">
            Respond within 1 hour | No obligation
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-5 bg-white bg-opacity-80 backdrop-blur-sm p-4 md:p-5 rounded-lg md:rounded-xl border border-champagne-200">
          <div className="flex flex-col items-center gap-2">
            <CheckCircle2 className="w-5 md:w-6 h-5 md:h-6 text-champagne-600" />
            <div>
              <p className="font-bold text-charcoal-900 text-sm md:text-base">24-Hour Response</p>
              <p className="text-xs md:text-sm text-sage-600 font-medium">Reply within 1 hour</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CheckCircle2 className="w-5 md:w-6 h-5 md:h-6 text-champagne-600" />
            <div>
              <p className="font-bold text-charcoal-900 text-sm md:text-base">100% Free</p>
              <p className="text-xs md:text-sm text-sage-600 font-medium">No hidden charges</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CheckCircle2 className="w-5 md:w-6 h-5 md:h-6 text-champagne-600" />
            <div>
              <p className="font-bold text-charcoal-900 text-sm md:text-base">Premium Samples</p>
              <p className="text-xs md:text-sm text-sage-600 font-medium">At your home</p>
            </div>
          </div>
        </div>

        {/* FOMO Element */}
        <div className="bg-champagne-50 border-2 border-champagne-300 rounded-lg p-3 md:p-4">
          <p className="text-xs md:text-sm text-champagne-900 font-medium">
            <span className="font-bold">Special Offer:</span> Book this week and get <span className="text-base md:text-lg font-bold text-champagne-800">15% OFF</span> installation
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
