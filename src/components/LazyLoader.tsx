// components/LazyLoader.tsx
import React, { useState, useEffect } from 'react';

const LazyLoader: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const finishTimeoutId = setTimeout(() => {
      setExit(true);
      setTimeout(() => {
        onFinish?.();
      }, 300);
    }, 2500);

    return () => {
      clearTimeout(finishTimeoutId);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-champagne-50 to-sage-50 z-[9999] flex flex-col items-center justify-center transition-all duration-300 ${
        exit ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Animated Spinner */}
      <div className="mb-6">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-champagne-200 border-b-champagne-600"></div>
      </div>

      {/* Branding */}
      <div className="text-center">
        <h2 className="text-2xl font-cormorant font-semibold text-gray-900 mb-2">
          Aziz Khan Curtains
        </h2>
        <p className="text-gray-600 text-sm animate-pulse">Crafting Comfort & Elegance</p>
      </div>
    </div>
  );
};

export default LazyLoader;