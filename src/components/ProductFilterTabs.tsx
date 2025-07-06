import React from 'react';

interface ProductFilterTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  'All',
  'Home Curtains',
  'Office Curtains',
  'Sofa Fabrics',
  'Bed Sheets',
];

const ProductFilterTabs: React.FC<ProductFilterTabsProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start sm:ml-28 gap-3 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full border transition font-medium text-sm ${
            activeCategory === category
              ? 'text-white bg-gradient-to-bl from-champagne-700 to-cyan-900 border-champagne-800'
              : 'text-gray-600 border-cyan-900 hover:text-champagne-500 hover:border-champagne-500'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductFilterTabs;
