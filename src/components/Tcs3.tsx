import { useState, useEffect } from 'react';


const images = ['/sm.png', '/large.png', '/curtainssec2.jpg'];

const Tcs3 = () => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  // Optional autoplay
  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
      {/* Text Section */}
      <div className="lg:w-1/2 flex flex-col gap-4">
        <h2 className="text-center sm:text-left text-2xl sm:text-5xl font-bold bg-gradient-to-br from-champagne-500 to-champagne-900 bg-clip-text text-transparent">
          Step into<br />
          <i className='bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent'>Cooler Days </i><br />
          and Calmer Nights<br />
          Daily Reset!
        </h2>
        <p className="text-center sm:text-left text-lg text-gray-400 leading-relaxed">
          Our thermal curtains don’t just decorate — they transform your space. 
          Block Dubai’s blazing heat, protect interiors from fading, and create a soothing sanctuary right at home.
        </p>
      </div>

      {/* Layered Image Stack */}
      <div className="relative w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] py-10">

        {images.map((img, i) => {
          const relativeIndex = (i - index + images.length) % images.length;
          return (
            <img
              key={i}
              src={img}
              alt={`Image ${i}`}
              className={`absolute w-full h-full object-cover rounded-xl shadow-xl transition-all duration-700 ease-in-out `}
              style={{
                transform: `translate(${relativeIndex * 20}px, ${relativeIndex * 20}px) scale(${1 - relativeIndex * 0.03})`,
                zIndex: images.length - relativeIndex,
                opacity: relativeIndex > 2 ? 0 : 1, // Show top 3 images only
              }}
            />
          );
        })}
      </div>
    </div>
    <div className="flex flex-col items-center mt-16">
  <button className="bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:text-xl text-gray-900 font-semibold px-8 py-2 rounded-lg text-lg transition-all duration-300 shadow-xl">
              Book <u><b>Free</b></u> Home Visit
            </button>
  <p className='text-center text-gray-600 py-5 px-4 max-w-md'>
    Our experts visit with samples and guide you in choosing custom window coverings for free</p>
</div>
    </section>
  );
};

export default Tcs3;
