
import { useState, useEffect } from 'react';

interface Tcs3 {

  // Section 2 props
  headingLines?: React.ReactNode;
  headingLines2?: string;
  focusWord?: string;
  // Section 3 props
  paragraphText?: string;
  images?: string[];

}

const Tcs3 = ({
  headingLines = "Step into,",
  focusWord = "Serinity",
  headingLines2 = "Aziz Khan Home Curtains",
  paragraphText = "Add softness, privacy, and temperature control to every room — all in one go Book Free Home Visit — Get Sample Fabrics & Design Advice at Home.",
  images =['/home4.png', '/home5.png', '/home6.png'],
  
}: Tcs3) => {

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className='bg-white'>
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-center text-3xl sm:text-left px-2 sm:text-5xl font-bold bg-gradient-to-br from-champagne-500 to-champagne-900 bg-clip-text text-transparent">
            {headingLines}<br />
            <i className=' bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent'>{focusWord}</i><br />
          {headingLines2},<br />
          
        </h2>
          <p className="text-center px-6 sm:px-0 sm:text-left text-lg text-gray-400 leading-relaxed">
            {paragraphText}
          </p>
        </div>

        {/* Image Stack */}
        <div className="relative w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] py-10">
          {images.map((img, i) => {
            const relativeIndex = (i - index + images.length) % images.length;
            return (
              <img
                key={i}
                src={img}
                alt={`Image ${i}`}
                className={`absolute w-full h-full object-cover rounded-xl shadow-xl transition-all duration-700 ease-in-out`}
                style={{
                  transform: `translate(${relativeIndex * 20}px, ${relativeIndex * 20}px) scale(${1 - relativeIndex * 0.03})`,
                  zIndex: images.length - relativeIndex,
                  opacity: relativeIndex > 2 ? 0 : 1,
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        {/* <button */}
        <a
          href="https://wa.me/+971503635428?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20free%20home%20visit%20with%20Aziz%20Khan%20Curtains."
          target="_blank"
          rel="noopener noreferrer"
        className="bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:text-xl text-gray-900 font-semibold px-8 py-2 rounded-lg text-lg transition-all duration-300 shadow-xl">
              Book <u><b>Free</b></u> Home Visit
        </a>
        <p className='text-center text-gray-600 py-5 px-4 max-w-md'>
        Our experts visit with samples and guide you in choosing custom window coverings for free</p>
      </div>
    </section>
  );
};

export default Tcs3;