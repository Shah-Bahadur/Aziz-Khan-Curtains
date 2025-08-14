import React from "react";

const ServiceCards = ({ services, onSelect, selectedKey, heading, description }) => (
  <div className="flex flex-col items-center py-10 pl-4 pr-4 mr-4 ml-4">
    <h2 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left  bg-gradient-to-br from-champagne-700 to-champagne-900 bg-clip-text text-transparent mb-10">{heading}</h2>
    <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">{description}</p>
    <div className="flex flex-wrap justify-center gap-8 w-full">
      {services.map((service) => (
        <div
          key={service.id}
          className={`relative w-80 sm:w-96 bg-white/80 border border-champagne-300 rounded-2xl shadow-xl hover:shadow-champagne-400 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col ${String(selectedKey) === String(service.id) ? "" : ""}`}
          onClick={() => onSelect(service.id)}
        >
          {/* Card Image */}
          {service.imageUrl && (
            <div className="h-40 w-full overflow-hidden">
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-6 flex flex-col items-center flex-1 w-full">
            <h3 className="text-xl text-center font-bold text-champagne-700 mb-2">{service.name}</h3>
            <p className="text-gray-600 text-justify m-4">{service.description}</p>
            <div className="mt-auto w-full flex justify-center">
              <a
                href={`https://wa.me/+971503635428?text=Hi, I'm interested Could you please Guide me regarding more about it.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:shadow-lg text-gray-900 font-semibold px-5 py-2 rounded-lg text-sm transition w-full"
                onClick={e => e.stopPropagation()}
              >
                Call for free consultation
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      ))}
    </div>
  </div>
);

export default ServiceCards;