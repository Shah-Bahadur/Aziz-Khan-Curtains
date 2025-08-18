
import React from "react";

interface TypeCurtainsSection2 {

  // Section 2 props
  section2Title?: React.ReactNode;

  // Section 3 props
  section3Text?: string;
  section3LeftImage?: string;
  section3CenterImage?: string;
  section3RightImage?: string;
}

const TypeCurtainsSection2: React.FC<TypeCurtainsSection2> = ({

  
  section3Text = "From Measuring to Mounting – We handle everything. Choose from a wide variety of colors, fabrics, and styles that match your interior theme.",
  section3LeftImage = "/home7.webp",
  section3CenterImage = "/home3.webp",
  section3RightImage = "/home8-small.webp",
}) => {
  return (
    <section className="bg-white flex flex-col gap-12">
      
      {/* === Section 3: work Scope === */}

     
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-3 py-1 sm:py-28 gap-2">
         {/* Right: Gradient Text + Decorative Images */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4 px-30">

          {/* <h2 className="text-5xl font-bold bg-gradient-to-br from-champagne-500 to-champagne-900 bg-clip-text text-transparent">
          </h2> */}
          <p className="text-center px-12 text-xl sm:text-left sm:text-sm text-gray-400 leading-relaxed">
            {section3Text}
          </p>

        </div>
        

        {/* Decorative Small Images */}
          <div className="flex gap-1 shadow-2xl">
            <img
              src={section3LeftImage}
              alt="Interior Pic"
              className="w-80 rounded-md shadow-2xl object-cover"
              loading="lazy"
            />
    
          </div>
        {/* Center Decor Image */}
        <div className="lg:w-1/2 w-74 lg:ms-0 ms-28 lg:-mt-0 -mt-10 lg:rounded-2xl rounded-md  overflow-hidden shadow-2xl">
          <img
            src={section3CenterImage}
            alt="Decor Showcase"
            className="w-auto h-auto object-fill shadow-2xl"
            loading="lazy"
          />
        </div>

        {/* Decorative Small Images */}
          <div className="flex gap-1 lg:-mt-0 -mt-5 shadow-2xl">
            <img
              src={section3RightImage}
              alt="Interior Pic"
              className="w-80 h-auto rounded-md shadow-2xl object-cover"
              loading="lazy"
            />
    
          </div>

        
      </div>
    </section>
  );
};

export default TypeCurtainsSection2;
