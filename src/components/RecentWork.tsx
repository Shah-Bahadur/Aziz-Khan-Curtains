import React from "react";

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

  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-900 mb-2 md:mb-3 leading-tight">
            {heading}
          </h2>
          <p className="text-sm md:text-lg text-sage-600 font-medium leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mb-8 md:mb-10">
          <div className="flex overflow-x-auto gap-4 pb-4 scroll-smooth snap-x snap-mandatory">
            {works.map((work, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full sm:w-96 bg-white border-2 border-champagne-200 rounded-lg md:rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-champagne-400 flex flex-col snap-center"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 md:h-72 object-cover"
                  loading="lazy"
                />
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <h3 className="text-base md:text-lg font-bold text-charcoal-900 mb-2 md:mb-3 leading-snug">{work.title}</h3>
                  {work.description && (
                    <p className="text-xs md:text-sm text-sage-600 leading-relaxed flex-grow font-medium">{work.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Scroll Hint for Mobile */}
          <p className="text-center text-xs text-sage-500 md:hidden mt-2">← Swipe to see more →</p>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
