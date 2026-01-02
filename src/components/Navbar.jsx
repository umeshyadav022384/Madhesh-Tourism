import React from "react";
import { useState } from "react";
import logo from "../assets/logos/main_logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-orange-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-1 -ml-5 md:space-x-2 md:-ml-7">
          <img
            src={logo}
            alt="Main logo"
            className="h-12 w-auto md:h-14 lg:h-16" // Responsive sizing
          />
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">Apan Madhesh</h1>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Districts</li>
          <li className="hover:text-yellow-300 cursor-pointer">Temples</li>
          <li className="hover:text-yellow-300 cursor-pointer">Hotels</li>
          <li className="hover:text-yellow-300 cursor-pointer">About</li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-orange-700 px-6 py-4 space-y-3">
          <p>Home</p>
          <p>Districts</p>
          <p>Temples</p>
          <p>Hotels</p>
          <p>About</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
