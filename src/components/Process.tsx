const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-champagne-600 mb-4">
            How We Transform Your Space!
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-6 lg:gap-4">
          {/* Step 1 */}
          <div className="text-center group">
            <div className="bg-champagne-50 rounded-2xl p-6 mb-4 h-54 flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full bg-champagne-300 rounded-xl flex items-center justify-center">
                <img
                  src="/calender1.png"
                  alt="Calendar"
                  className="w-30 h-30 sm:w-24 sm:h-24 lg:w-48 lg:h-48 object-contain mx-auto"
                />
              </div>
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-gray-600 mb-2 leading-tight">
              Estimate &<br />
              Schedule FREE<br />
              Home Visit
            </h3>
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="bg-champagne-50 rounded-2xl p-6 mb-4 h-54 flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full bg-champagne-300 rounded-xl flex items-center justify-center">
                <img
                  src="/homevisit1.png"
                  alt="Home Visit"
                  className="w-30 h-30 sm:w-24 sm:h-24 lg:w-48 lg:h-48 object-contain mx-auto"
                />
              </div>
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-gray-600 mb-2 leading-tight">
              Home Visit of<br />
              AZC Experts
            </h3>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="bg-champagne-50 rounded-2xl p-6 mb-4 h-54 flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full bg-champagne-300 rounded-xl flex items-center justify-center">
                <img
                  src="/aq1.png"
                  alt="Approve Quote"
                  className="w-30 h-30 sm:w-24 sm:h-24 lg:w-48 lg:h-48 object-contain mx-auto"
                />
              </div>
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-gray-600 mb-2 leading-tight">
              Approve the<br />
              Quote
            </h3>
          </div>

          {/* Step 4 */}
          <div className="text-center group">
            <div className="bg-champagne-50 rounded-2xl p-6 mb-4 h-54 flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full bg-champagne-300 rounded-xl flex items-center justify-center">
                <img
                  src="/install1.png"
                  alt="Install Curtains"
                  className="w-30 h-30 sm:w-24 sm:h-24 lg:w-48 lg:h-48 object-contain mx-auto"
                />
              </div>
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-gray-600 mb-2 leading-tight">
              Install Curtains<br />
              in 5 Days
            </h3>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule your free home visit today and transform your space with premium curtains
            </p>
            <button className="bg-champagne-500 hover:bg-champagne-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-xl">
              Book Free Home Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
