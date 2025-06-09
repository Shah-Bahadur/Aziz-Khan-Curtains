
import React from "react";

interface TypeCurtainsSection1 {

  // Section 2 props
  section2Title?: React.ReactNode;
  section2titlesub1?: React.ReactNode;
  section2titlesub2?: React.ReactNode;
  section2Text?: string;
  section2MainImage?: string;
  section2DecorImage?: string;


}

const TypeCurtainsSection1: React.FC<TypeCurtainsSection1> = ({
 
  section2titlesub1 = "Décor",
  section2Title = "This Isn’t",
  section2titlesub2 = "It’s Your Daily Reset!",
  section2Text = "Dubai’s heat strains ACs, fades interiors, and invites mold — costing comfort, health, and money.",
  section2MainImage = "/large.png",
  section2DecorImage = "/small.png",
  
 
}) => {
  return (
    <section className="bg-white flex flex-col gap-16">
      {/* === Section 2: Decor Showcase === */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-28 gap-12">
        {/* Left: Large Decor Image */}
        <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-xl">
          <img
            src={section2MainImage}
            alt="Decor Showcase section"
            className="w-auto h-auto object-fill"
          />
        </div>

        {/* Right: Gradient Text + Decorative Images */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4 px-30">
          <h2 className="text-3xl px-4 text-center sm:text-5xl font-bold bg-gradient-to-br from-champagne-500 to-champagne-900 bg-clip-text text-transparent">
            
            {section2Title}
            {/* This Isn’t */}
            <div className='bg-gradient-to-br from-cyan-500 to-cyan-900 bg-clip-text text-transparent' >{section2titlesub1}</div>
            {section2titlesub2}
            {/* It’s Your
            Daily Reset! */}
          </h2>
          <p className="text-lg text-gray-400 px-4 text-center leading-relaxed">
            {section2Text}
          </p>

        </div>
        {/* Decorative Small Images */}
          <div className="flex gap-1 mt-4">
            <img
              src={section2DecorImage}
              alt="Interior Pic"
              className="w-80 h-80 rounded-md shadow-md object-cover"
            />
    
          </div>
      </div>
      
      
    </section>
  );
};

export default TypeCurtainsSection1;
