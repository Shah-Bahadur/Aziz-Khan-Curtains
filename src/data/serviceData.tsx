import React from "react";

interface ServiceCardProps {
  services: any[];
  onSelect: (service: any) => void;
  selectedKey: string;
}

const ServiceCards: React.FC<ServiceCardProps> = ({ services, onSelect, selectedKey }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-8">
      {services.map((service) => (
        <div
          key={service.key}
          className={`group relative w-80 bg-white/80 border border-blue-200 rounded-2xl shadow-xl hover:shadow-blue-400 transition-all duration-300 cursor-pointer overflow-hidden ${
            selectedKey === service.key ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => onSelect(service)}
        >
          <div className="h-48 w-full overflow-hidden">
            <img
              src={service.imageUrl}
              alt={service.curtainsType}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-2">{service.curtainsType}</h3>
            <p className="text-gray-600 mb-4">{service.titleLine2}</p>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
              {service.subtitle}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;