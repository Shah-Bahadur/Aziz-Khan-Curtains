import React from 'react';

interface ThermalCurtainsSectionProps {
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  description?: React.ReactNode;
  testimonial?: string;
  author?: string;
  imageUrl?: string;
  authorImageUrl?: string;
}

const ThermalCurtainsSection = ({
  titleLine1 = "Cooler Days,",
  titleLine2 = "Quieter Nights.", 
  description = (
    <>
      Designed for Dubai’s sun. Made for your comfort.<br />
      Save energy. Sleep better. Feel the difference.
    </>
  ),
  testimonial = "Aziz Khan thermal curtains cut the heat and my energy bill. Didn’t know curtains could make this much difference. Aziz Khan just did it.",
  author = "Salim A. Naser",
  imageUrl = "/coolimg.png",
  authorImageUrl = "/reviewer.png",
}: ThermalCurtainsSectionProps) => {
  return (
    <section className="bg-white flex flex-col gap-12">
      {/* === Section 1: Thermal Curtains === */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-10 gap-12 relative">
        {/* Left: Text Content */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-br from-sky-500 to-champagne-600 bg-clip-text text-transparent">
            {titleLine1}
          </h1>
          <h1 className="text-5xl font-bold bg-gradient-to-bl from-champagne-600 to-slate-600 bg-clip-text text-transparent">{titleLine2}</h1>
          {/* <h2 className="text-2xl text-champagne-600 font-semibold mb-2">{subtitle}</h2> */}
          <p className="text-lg text-gray-600 leading-relaxed mt-5">{description}</p>
        </div>

        {/* Right: Image and Testimonial Card */}
        <div className="lg:w-1/2 relative">
          {/* Main Curtain Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={imageUrl}
              alt="Thermal Curtains"
              width={500}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Testimonial Card */}
          <div className="relative w-full flex justify-center mt-10 md:mt-0">
            <div className="bg-white shadow-xl rounded-xl p-6 w-[90%] max-w-md 
              flex flex-col md:flex-row items-center gap-4 
              rotate-0 md:rotate-[-3deg] 
              relative md:absolute md:bottom-[-50px] md:left-1/2 md:transform md:-translate-x-1/2 z-10">

              {/* Mobile: Stars first */}
              <div className="flex items-center mb-2 md:hidden">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>

              {/* Mobile: Decorative double quote */}
              <div className="text-5xl text-gray-300 font-serif -mt-2 md:hidden">
                &ldquo;
              </div>

              {/* Main flex: image and text */}
              <div className="flex items-center md:items-start gap-4 w-full">
                {/* Author Image */}
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={authorImageUrl}
                    alt={author}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Testimonial Text */}
                <div>
                  <div className="hidden md:flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">"{testimonial}"</p>
                  <p className="text-sm font-medium text-sky-700">{author}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Section 2: Decor Showcase === */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-5 gap-12">
        {/* Left: Large Decor Image */}
        <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/large.png"
            alt="Decor Showcase"
            className="w-auto h-auto object-fill"
          />
        </div>

        {/* Right: Gradient Text + Decorative Images */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4 px-30">
          <h2 className="text-3xl px-4 text-center sm:text-5xl font-bold bg-gradient-to-br from-champagne-500 to-champagne-900 bg-clip-text text-transparent">
            This Isn’t
            Décor
            It’s Your
            Daily Reset!
          </h2>
          <p className="text-lg text-gray-400 px-4 text-center leading-relaxed">
            Dubai’s heat strains ACs, fades interiors, and invites mold — costing comfort, health, and money.
          </p>

        </div>
        {/* Decorative Small Images */}
          <div className="flex gap-1 mt-4 lg:-mb-32">
            <img
              src="/sm.png"
              alt="Interior Pic"
              className="w-80 h-40 rounded-md shadow-md object-cover"
            />
    
          </div>
      </div>
      
      
      {/* === Section 3: work Scope === */}

     
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-3 py-10 gap-2">
         {/* Right: Gradient Text + Decorative Images */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4 px-30">

          {/* <h2 className="text-5xl font-bold bg-gradient-to-br from-champagne-500 to-champagne-900 bg-clip-text text-transparent">
          </h2> */}
          <p className="text-center sm:text-left px-20 text-2xl sm:text-xl text-gray-400 leading-relaxed">
            From fabric to fitting,
            we handle every detail
            so your home gets the
            comfort and calm it deserves.
          </p>

        </div>
        

        {/* Decorative Small Images */}
          <div className="flex gap-1 shadow-2xl">
            <img
              src="/sm.png"
              alt="Interior Pic"
              className="w-80 rounded-md shadow-2xl object-cover"
            />
    
          </div>
        {/* Left: right Decor Image */}
        <div className="lg:w-1/2 w-74 lg:ms-0 ms-28 lg:-mt-0 -mt-20 lg:rounded-2xl rounded-md  overflow-hidden shadow-2xl">
          <img
            src="/large.png"
            alt="Decor Showcase"
            className="w-auto h-auto object-fill shadow-2xl"
          />
        </div>

        {/* Decorative Small Images */}
          <div className="flex gap-1 lg:-mt-0 -mt-20 shadow-2xl">
            <img
              src="/curtainssec2.png"
              alt="Interior Pic"
              className="w-80 h-auto rounded-md shadow-2xl object-cover"
            />
    
          </div>

        
      </div>
    </section>
  );
};

export default ThermalCurtainsSection;
