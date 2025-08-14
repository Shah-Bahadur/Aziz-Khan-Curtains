// // components/LazyLoader.tsx
// import React, { useState, useEffect } from 'react';
// import CurtainIcon from './icons/CurtainsIcon';
// import SofaIcon from './icons/SofaIcon';
// import BedsheetIcon from './icons/BedsheetIcon';
// // import logo from '@/assets/logo.svg'; // Replace with your actual logo path

// const iconComponents = [CurtainIcon, SofaIcon, BedsheetIcon];

// const LazyLoader: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
//   const [index, setIndex] = useState(0);
//   const [fadeIn, setFadeIn] = useState(true);
//   const [exit, setExit] = useState(false);

//   useEffect(() => {
//     const switchIcons = setInterval(() => {
//       setFadeIn(false);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % iconComponents.length);
//         setFadeIn(true);
//       }, 300);
//     }, 2000);

//     const timeout = setTimeout(() => {
//       setExit(true);
//       setTimeout(() => {
//         onFinish?.(); // Notify parent to remove loader
//       }, 600); // Match exit animation
//     }, 4000); // Total loader time

//     return () => {
//       clearInterval(switchIcons);
//       clearTimeout(timeout);
//     };
//   }, []);

//   const Icon = iconComponents[index];

//   return (
//     <div
//       className={`fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center transition-all duration-700 ${
//         exit ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
//       }`}
//     >
//       <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
//         <Icon />
//       </div>

//       {/* Branding */}
//       <div className="mt-6 text-center">
//         {/* <img src={logo} alt="Aziz Khan Curtains" className="w-24 h-auto mx-auto mb-2" /> */}
//         <p className="text-gray-600 text-sm animate-pulse">Crafting Comfort & Elegance</p>
//       </div>
//     </div>
//   );
// };

// export default LazyLoader;


// components/LazyLoader.tsx
import React, { useState, useEffect } from 'react';
import CurtainIcon from './icons/CurtainsIcon';
import SofaIcon from './icons/SofaIcon';
import BedsheetIcon from './icons/BedsheetIcon';
// import logo from '@/assets/logo.svg';

const iconComponents = [CurtainIcon, SofaIcon, BedsheetIcon];

const LazyLoader: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Recursive setTimeout for icon switching
    const switchIcon = () => {
      setFadeIn(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % iconComponents.length);
        setFadeIn(true);
      }, 150); // Shorter fade-out duration

      // Schedule the next switch
      setTimeout(switchIcon, 2000);
    };

    const iconTimeoutId = setTimeout(switchIcon, 2000);

    const finishTimeoutId = setTimeout(() => {
      setExit(true);
      setTimeout(() => {
        onFinish?.();
      }, 300); // Shorter exit duration
    }, 4000);

    return () => {
      clearTimeout(iconTimeoutId);
      clearTimeout(finishTimeoutId);
    };
  }, [onFinish]);

  const Icon = iconComponents[index];

  return (
    <div
      className={`fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center transition-all duration-300 ${
        exit ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className={`transition-opacity duration-150 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <Icon />
      </div>

      {/* Branding */}
      <div className="mt-6 text-center">
        {/* <img src={logo} alt="Aziz Khan Curtains" className="w-24 h-auto mx-auto mb-2" /> */}
        <p className="text-gray-600 text-sm animate-pulse">Crafting Comfort & Elegance</p>
      </div>
    </div>
  );
};

export default LazyLoader;