import React from "react";
import { useEffect, useState } from "react";

const slides = [
  {
    name: "Janaki Mandir, Janakpur",
    image: "https://images.unsplash.com/photo-1585559602708-08a9c02a5a88"
  },
  {
    name: "Gadhimai Temple, Bara",
    image: "https://images.unsplash.com/photo-1600679472829-3044539ce8c2"
  },
  {
    name: "Chhath Ghat, Madhesh",
    image: "https://images.unsplash.com/photo-1604937455091-efc1d3b74b23"
  }
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="h-[90vh] bg-cover bg-center flex items-center justify-center transition-all duration-1000"
      style={{ backgroundImage: `url(${slides[index].image})` }}
    >
      {/* Gradient Overlay */}
      <div className="w-full h-full bg-gradient-to-t from-black/80 to-black/30 flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            {slides[index].name}
          </h2>
          <p className="text-gray-200 mt-4 max-w-xl mx-auto">
            Discover religious, cultural and historical places of Madhesh Pradesh
          </p>
          <button className="mt-6 bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full text-white font-semibold">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
