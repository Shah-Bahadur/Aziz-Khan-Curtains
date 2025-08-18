import React, { useState } from "react";

interface WorkItem {
  title: string;
  image: string;
  description?: string;
}

interface RecentWorkCarouselProps {
  works: WorkItem[];
  heading?: string;
  description?: string;
}

const RecentWork: React.FC<RecentWorkCarouselProps> = ({
  works,
  heading = "Our Recent Work",
  description = "A glimpse of our latest projects and satisfied clients.",
}) => {
  const [current, setCurrent] = useState(0);
  const total = works.length;

  // Mobile: horizontal scroll carousel, Desktop: single row
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-champagne-800 mb-2 text-center">{heading}</h2>
        <p className="text-gray-600 mb-8 text-center">{description}</p>
        {/* Mobile: horizontal scroll carousel */}
        <div className="block sm:hidden">
          <div className="relative max-w-xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-lg bg-white">
              <img
                src={works[current].image}
                alt={works[current].title}
                className="w-full h-64 object-cover transition-all duration-500"
                loading="lazy"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-champagne-700 mb-2">{works[current].title}</h3>
                {works[current].description && (
                  <p className="text-gray-500 text-sm">{works[current].description}</p>
                )}
              </div>
            </div>
            {/* Minimalist Carousel Controls */}
            <button
              onClick={() => setCurrent((c) => (c === 0 ? total - 1 : c - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-champagne-200 rounded-full p-1 transition border-none shadow-none focus:outline-none"
              aria-label="Previous"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-champagne-700">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => setCurrent((c) => (c === total - 1 ? 0 : c + 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-champagne-200 rounded-full p-1 transition border-none shadow-none focus:outline-none"
              aria-label="Next"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-champagne-700">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {works.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full ${idx === current ? "bg-champagne-700" : "bg-champagne-200"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Desktop: single row of cards */}
        <div className="hidden sm:grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-champagne-700 mb-2">{work.title}</h3>
                {work.description && (
                  <p className="text-gray-500 text-sm">{work.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
