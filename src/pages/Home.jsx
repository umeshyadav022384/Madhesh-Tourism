import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import DistrictSection from "../components/DistrictSection";
import Footer from "../components/Footer";

const districts = [
  { name: "Dhanusha", image: "https://images.unsplash.com/photo-1585559602708-08a9c02a5a88" },
  { name: "Bara", image: "https://images.unsplash.com/photo-1600679472829-3044539ce8c2" },
  { name: "Parsa", image: "https://images.unsplash.com/photo-1604937455091-efc1d3b74b23" }
];

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Districts of Madhesh Pradesh
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {districts.map((d, i) => (
              <DistrictSection key={i} {...d} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;

