import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import DistrictSection from "../components/DistrictSection";
import Footer from "../components/Footer";

//districts images
import dhanusha from "../assets/images/districts/dhanusha.jpg";
import bara from "../assets/images/districts/bara.jpg";
import parsa from "../assets/images/districts/parsa.jpg";
import saptari from "../assets/images/districts/saptari.png";
import mohatari from "../assets/images/districts/mohatari.jpg";
import sarlahi from "../assets/images/districts/sarlahi.jpg";
import sunsari from "../assets/images/districts/sunsari.jpg";
import siraha from "../assets/images/districts/siraha.jpg";

const Home = () => {
  //districts data and images for districtSection to show district image cards
  const districts = [
    { name: "Dhanusha", image: dhanusha },
    { name: "Bara", image: bara },
    { name: "Parsa", image: parsa },
    { name: "Saptari", image: saptari },
    { name: "Siraha", image: siraha },
    { name: "Sarlahi", image: sarlahi },
    { name: "Sunsari", image: sunsari },
    { name: "Mohatari", image: mohatari },
  ];
  return (
    <>
      <Navbar />
      <HeroSlider />

      {/* District Section */}
      <section className="px-6 md:px-12 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Explore Districts of Madhesh
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {districts.map((district, index) => (
            <DistrictSection
              key={index}
              name={district.name}
              image={district.image}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
