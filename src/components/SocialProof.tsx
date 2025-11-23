import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  useEffect(() => {
    AOS.init({ once: false, mirror: true, duration: 800 });
  }, []);

  const testimonials = [
    {
      name: "Fatima Al Maktoum",
      location: "Emirates Hills, Dubai",
      rating: 5,
      text: "Aziz Khan's team arrived within 24 hours of my call. The professionalism and speed were incredible. My living room now has the perfect blackout curtains—installation took just 3 hours with zero mess. Worth every dirham!",
      image: "/reviewer1.webp",
      projectType: "Luxury Villa Curtains",
      savings: "Saved 6 hours from other quotes"
    },
    {
      name: "Ahmed Hassan",
      location: "Downtown Dubai Office",
      rating: 5,
      text: "As a business owner, I needed motorized blinds that looked professional and worked reliably. Aziz Khan delivered custom solutions that sync with our smart office system. Our productivity increased because we eliminated screen glare.",
      image: "/reviewer2.webp",
      projectType: "Office Motorized Blinds",
      savings: "30% reduction in AC costs"
    },
    {
      name: "Sarah Johnson",
      location: "Jumeirah, Dubai",
      rating: 5,
      text: "I've lived in Dubai for 8 years and always struggled with the intense sun. These custom curtains with thermal lining have genuinely made a difference. My bedroom is cool and dark, and my furniture doesn't fade anymore.",
      image: "/hw3.webp",
      projectType: "Thermal Blackout Curtains",
      savings: "40% cooler bedroom"
    },
    {
      name: "Hina Yousuf",
      location: "Business Bay, Dubai",
      rating: 5,
      text: "Not just a service provider—they're design partners. They understood what I wanted before I fully explained it. Free fabric samples at my office made the decision so easy. Installation was seamless, didn't interfere with work.",
      image: "/hw1.webp",
      projectType: "Commercial Office Design",
      savings: "Delivered 2 days ahead"
    },
    {
      name: "Mohammed Al Suwaidi",
      location: "Palm Jumeirah, Dubai",
      rating: 5,
      text: "I'm very particular about quality, being in the construction industry. Aziz Khan's attention to detail is exceptional. Every measurement is perfect, every seam is clean. They've set the standard for what premium service looks like.",
      image: "/hw2.webp",
      projectType: "Ultra-Luxury Villa Install",
      savings: "Zero alterations needed"
    }
  ];

  const stats = [
    { number: "2,000+", label: "Happy Dubai Clients" },
    { number: "500+", label: "5-Star Reviews" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "24h", label: "Average Response Time" }
  ];

  return (
    <section data-aos="fade-up" className="py-8 md:py-10 bg-gradient-to-b from-luxury-50 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-900 mb-2 md:mb-3">
            Loved by Dubai Families & Businesses
          </h2>
          <p className="text-sm md:text-lg text-sage-600 font-medium leading-relaxed">
            Real stories from real clients who transformed their spaces.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-8 md:mb-10 bg-white border-2 border-champagne-200 rounded-lg md:rounded-xl p-4 md:p-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-champagne-700">{stat.number}</p>
              <p className="text-charcoal-700 font-medium mt-1 md:mt-2 text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Horizontal Scroll */}
        <div className="mb-8 md:mb-10">
          <div className="flex overflow-x-auto gap-4 pb-4 scroll-smooth snap-x snap-mandatory">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full sm:w-96 bg-white border-2 border-champagne-200 rounded-lg md:rounded-xl p-4 md:p-5 hover:shadow-lg transition-all duration-300 hover:border-champagne-400 flex flex-col snap-center"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-champagne-500 text-champagne-500" />
                  ))}
                </div>

                {/* Quote */}
                <div className="flex gap-2 mb-2 md:mb-3 text-champagne-300">
                  <Quote className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                </div>

                {/* Text */}
                <p className="text-charcoal-700 mb-3 md:mb-4 flex-grow leading-relaxed italic text-xs md:text-sm font-medium">
                  "{testimonial.text}"
                </p>

                {/* Project Details */}
                <div className="bg-champagne-50 rounded-lg p-2 md:p-3 mb-3 md:mb-4">
                  <p className="text-xs md:text-sm font-semibold text-champagne-900">{testimonial.projectType}</p>
                  <p className="text-xs text-champagne-700 font-medium mt-1">Delivered: {testimonial.savings}</p>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-2 md:gap-3 border-t-2 border-champagne-100 pt-3 md:pt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover border-2 border-champagne-200 flex-shrink-0"
                  />
                  <div>
                    <p className="font-bold text-charcoal-900 text-xs md:text-sm">{testimonial.name}</p>
                    <p className="text-xs text-sage-600 font-medium">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll Hint for Mobile */}
          <p className="text-center text-xs text-sage-500 md:hidden mt-2">← Swipe to see more reviews →</p>
        </div>

        {/* CTA Section */}
        <div className="mt-8 md:mt-10 bg-gradient-to-r from-champagne-100 to-luxury-100 rounded-lg md:rounded-xl p-5 md:p-8 text-center border-2 border-champagne-300">
          <h3 className="text-lg md:text-2xl font-bold text-charcoal-900 mb-2 md:mb-3 leading-snug">
            Your Story Could Be Next
          </h3>
          <p className="text-sm md:text-base text-charcoal-700 mb-4 md:mb-5 max-w-2xl mx-auto font-medium leading-relaxed">
            Join our community of happy Dubai clients. Let us transform your space.
          </p>
          <a
            href="https://wa.me/+971503635428?text=I%20want%20to%20join%20your%20happy%20clients%20with%20a%20free%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-champagne-600 to-champagne-800 hover:from-champagne-700 hover:to-champagne-900 text-white font-bold px-6 md:px-10 py-2 md:py-4 rounded-lg md:rounded-xl text-sm md:text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
