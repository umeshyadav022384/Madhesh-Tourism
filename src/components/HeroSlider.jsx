import React from "react";
import { useEffect, useState } from "react";
import chhathimg from "../assets/images/chhath.jpg";
import jankiimg from "../assets/images/Janaki-Mandir.jpg";
import gadimaiimg from "../assets/images/gadimai.jpg";
const slides = [
  {
    name: "Janaki Mandir, Janakpur",
    image: jankiimg,
  },
  {
    name: "Gadhimai Temple, Bara",
    image: gadimaiimg,
  },
  {
    name: "Chhath Ghat, Madhesh",
    image: chhathimg,
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
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
            Discover religious, cultural and historical places of Madhesh
            Pradesh
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
