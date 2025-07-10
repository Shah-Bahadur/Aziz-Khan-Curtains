// import React from 'react';

// interface Product {
//   title: string;
//   image: string;
//   description: string;
//   tagline?: string; // short catchy line
//   cta?: string; // call to action like "Learn More"
// }

// interface ProductCardsSectionProps {
//   sectionTitle: string;
//   products: Product[];
// }

// const ProductCardsSection: React.FC<ProductCardsSectionProps> = ({ sectionTitle, products }) => {
//   return (
//     <section className="px-6 py-12 max-w-7xl mx-auto">
//       <h2 className="text-3xl sm:text-3xl font-semibold text-center sm:text-left bg-gradient-to-br from-champagne-700 to-champagne-900 bg-clip-text text-transparent mb-10">
//         {sectionTitle}
//         <hr></hr>
//       </h2>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-auto h-72 object-cover"
//             />
//             <div className="flex flex-col flex-1 p-6">
//               {product.tagline && (
//                 <p className="text-sm uppercase font-semibold text-champagne-700 tracking-wide mb-2">
//                   {product.tagline}
//                 </p>
//               )}
//               <h3 className="text-xl font-bold text-gray-900 mb-2">
//                 {product.title}
//               </h3>
//               <p className="text-gray-700 text-sm flex-1 mb-4">
//                 {product.description}
//               </p>
//               {product.cta && (
//                 <button className="mt-auto inline-block bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:shadow-lg text-gray-900 font-semibold px-5 py-2 rounded-lg text-sm transition">
//                   {product.cta}
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductCardsSection;
import React, { useState } from 'react';

interface ColorVariant {
  colorName: string;
  colorCode: string;
  imageUrl: string;
}

interface Product {
  title: string;
  description: string;
  cta?: string;
  image?: string; // fallback for products without colorVariants
  colorVariants?: ColorVariant[];
}

interface ProductCardsSectionProps {
  sectionTitle: string;
  products: Product[];
}

const ProductCardsSection: React.FC<ProductCardsSectionProps> = ({
  sectionTitle,
  products,
}) => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-3xl font-semibold text-center sm:text-left bg-gradient-to-br from-champagne-700 to-champagne-900 bg-clip-text text-transparent mb-10">
        {sectionTitle}
        <hr />
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => {
          const hasVariants = product.colorVariants && product.colorVariants.length > 0;

          const initialImage = hasVariants
            ? product.colorVariants![0].imageUrl
            : product.image || '';

          const [selectedImage, setSelectedImage] = useState(initialImage);
          const [activeColor, setActiveColor] = useState(
            hasVariants ? product.colorVariants![0].colorCode : ''
          );

          const handleColorClick = (variant: ColorVariant) => {
            setSelectedImage(variant.imageUrl);
            setActiveColor(variant.colorCode);
          };

          return (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={selectedImage}
                alt={product.title}
                className="w-auto h-72 object-cover transition duration-500"
              />

              <div className="flex flex-col flex-1 p-6">
                {/* Show swatches only if colorVariants exist */}
                {hasVariants && (
                  <div className="flex items-center gap-2 mb-4">
                    {product.colorVariants!.map((variant, swatchIndex) => (
                      <button
                        key={swatchIndex}
                        onClick={() => handleColorClick(variant)}
                        className={`w-6 h-6 rounded-full border-2 transition ${
                          activeColor === variant.colorCode
                            ? 'border-gray-900 scale-110'
                            : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: variant.colorCode }}
                        aria-label={variant.colorName}
                      />
                    ))}
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-700 text-sm flex-1 mb-4">
                  {product.description}
                </p>

                {product.cta && (
                  <button className="mt-auto inline-block bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:shadow-lg text-gray-900 font-semibold px-5 py-2 rounded-lg text-sm transition">
                    {product.cta}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductCardsSection;
