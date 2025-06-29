


import React from "react";

interface TypeCurtainsSection {
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  curtainsType?: string;
  description?: React.ReactNode;
  testimonial?: string;
  author?: string;
  imageUrl?: string;
  authorImageUrl?: string;

}

const TypeCurtainsSection: React.FC<TypeCurtainsSection> = ({
  titleLine1 = "Cooler Homes,",
  titleLine2 = "Softer Moods.", 
  subtitle = "Aziz's", 
  curtainsType = "Home Curtains", 
  description = (
    <>
      Designed for Dubai homes. Tailored to your lifestyle,<br />
      Save energy. Sleep better. Feel the difference.
    </>
  ),
  testimonial = "We installed Aziz Khan's blackout curtains in our villa — the heat is down, the rooms feel luxurious, and my kids sleep better!",
  author = "Salim A. Naser",
  imageUrl = "/home.webp",
  authorImageUrl = "/reviewer.png",
  
}) => {
  return (
    <section className="bg-white flex flex-col gap-12">
      {/* === Section 1: Thermal Curtains === */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-10 gap-12 relative">
        {/* Left: Text Content */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-br from-sky-700 to-champagne-600 bg-clip-text text-transparent">
            {titleLine1}
          </h1>
          <h1 className="text-5xl font-bold bg-gradient-to-bl from-champagne-600 to-slate-600 bg-clip-text text-transparent">{titleLine2}</h1>
          <h2 className="text-xl text-champagne-600 font-sans font-regular mt-5 mb-5">{subtitle} <b>{curtainsType}</b></h2>
          <p className="text-md text-gray-600 font-sans leading-tight mt-5 ">{description}</p>
        </div>

        {/* Right: Image and Testimonial Card */}
        <div className="lg:w-1/2 relative mt-2 lg:mt-0 flex flex-col items-center lg:gap-20">
          {/* Main Curtain Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={imageUrl}
              alt="Thermal Curtains"
              width={400}
              height={250}
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
    </section>
  );
};

export default TypeCurtainsSection;
