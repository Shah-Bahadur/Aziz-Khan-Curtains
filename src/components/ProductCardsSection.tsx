
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
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-900 mb-2 md:mb-3 leading-tight">
            {sectionTitle}
          </h2>
        </div>

        <div className="mb-8 md:mb-10">
          <div className="flex overflow-x-auto gap-4 pb-4 scroll-smooth snap-x snap-mandatory">
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
              className="flex-shrink-0 w-full sm:w-96 bg-white border-2 border-champagne-200 rounded-lg md:rounded-xl p-4 md:p-5 hover:shadow-lg transition-all duration-300 hover:border-champagne-400 flex flex-col snap-center"
            >
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-64 md:h-72 object-cover rounded-lg mb-4 transition duration-500"
              />

              <div className="flex flex-col flex-1 gap-3">
                {/* Show swatches only if colorVariants exist */}
                {hasVariants && (
                  <div className="flex items-center gap-2 mb-2">
                    {product.colorVariants!.map((variant, swatchIndex) => (
                      <button
                        key={swatchIndex}
                        onClick={() => handleColorClick(variant)}
                        className={`w-5 h-5 rounded-full border-2 transition ${
                          activeColor === variant.colorCode
                            ? 'border-charcoal-900 scale-110'
                            : 'border-champagne-300'
                        }`}
                        style={{ backgroundColor: variant.colorCode }}
                        aria-label={variant.colorName}
                      />
                    ))}
                  </div>
                )}

                <h3 className="text-base md:text-lg font-bold text-charcoal-900 mb-1 leading-snug">
                  {product.title}
                </h3>
                <p className="text-charcoal-700 text-xs md:text-sm flex-1 leading-relaxed font-medium">
                  {product.description}
                </p>

                {product.cta && (
                  <a
                    href={`https://wa.me/+971503635428?text=Hi, I'm interested in ${encodeURIComponent(product.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-center bg-gradient-to-r from-champagne-600 to-champagne-800 hover:from-champagne-700 hover:to-champagne-900 text-white font-bold px-4 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-sm transition-all shadow-lg hover:shadow-xl"
                  >
                    {product.cta}
                  </a>
                )}
              </div>
            </div>
          );
        })}
          </div>
          {/* Scroll Hint for Mobile */}
          <p className="text-center text-xs text-sage-500 md:hidden mt-2">← Swipe to see more →</p>
        </div>
      </div>
    </section>
  );
};

export default ProductCardsSection;
