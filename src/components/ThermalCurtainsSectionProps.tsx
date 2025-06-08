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
  titleLine1 = "Cooler Days.",
  titleLine2 = "Quieter Nights.",
  subtitle = "Aziz Khan Thermal Curtains",
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
    <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-12 relative">
      
      {/* Left: Text Content */}
      <div className="lg:w-1/2 text-left">
        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-br from-sky-500 to-champagne-600 bg-clip-text text-transparent">
             {titleLine1}
        </h1>
        <h1 className="text-5xl font-bold bg-gradient-to-bl from-champagne-600 to-slate-600 bg-clip-text text-transparent">{titleLine2}</h1>
        <h2 className="text-2xl text-champagne-600 font-semibold mb-2">{subtitle}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
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

        {/* Tilted & Centered Testimonial Card */}
        <div className="absolute  bottom-[-50px] left-1/1 transform -translate-x-1/2 rotate-[-3deg] bg-white shadow-xl rounded-xl p-6 w-[90%] max-w-md flex items-center gap-4 z-10">
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
            <div className="flex items-center mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-2">"{testimonial}"</p>
            <p className="text-sm font-medium text-sky-700">{author}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThermalCurtainsSection;
