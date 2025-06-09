
import React from "react";

interface TypeCurtainsSection2 {

  // Section 2 props
  section2Title?: React.ReactNode;

  // Section 3 props
  section3Text?: string;
  section3LeftImage?: string;
  section3RightImage?: string;
  section3SideImage?: string;
}

const TypeCurtainsSection2: React.FC<TypeCurtainsSection2> = ({

  
  section3Text = "From fabric to fitting,we handle every detail so your home gets the comfort and calm it deserves.",
  section3LeftImage = "/sm.png",
  section3RightImage = "/secpart.png",
  section3SideImage = "/curtainssec2.png",
}) => {
  return (
    <section className="bg-white flex flex-col gap-12">
      
      {/* === Section 3: work Scope === */}

     
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-3 py-1 sm:py-28 gap-2">
         {/* Right: Gradient Text + Decorative Images */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4 px-30">

          {/* <h2 className="text-5xl font-bold bg-gradient-to-br from-champagne-500 to-champagne-900 bg-clip-text text-transparent">
          </h2> */}
          <p className="text-center sm:text-left px-20 text-xl sm:text-sm text-gray-400 leading-relaxed">
            {section3Text}
          </p>

        </div>
        

        {/* Decorative Small Images */}
          <div className="flex gap-1 shadow-2xl">
            <img
              src={section3LeftImage}
              alt="Interior Pic"
              className="w-80 rounded-md shadow-2xl object-cover"
            />
    
          </div>
        {/* Left: right Decor Image */}
        <div className="lg:w-1/2 w-74 lg:ms-0 ms-28 lg:-mt-0 -mt-10 lg:rounded-2xl rounded-md  overflow-hidden shadow-2xl">
          <img
            src={section3RightImage}
            alt="Decor Showcase"
            className="w-80 h-auto object-fill shadow-2xl"
          />
        </div>

        {/* Decorative Small Images */}
          <div className="flex gap-1 lg:-mt-0 -mt-5 shadow-2xl">
            <img
              src={section3SideImage}
              alt="Interior Pic"
              className="w-80 h-auto rounded-md shadow-2xl object-cover"
            />
    
          </div>

        
      </div>
    </section>
  );
};

export default TypeCurtainsSection2;
