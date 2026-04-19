import React from "react";
import { Link } from "react-router-dom";
const DistrictSection = ({ name, image }) => {
  const districtPath = `/district/${name.toLowerCase()}`;

  return (
    <div className=" relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay with button - appears on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          
          <Link 
            to={districtPath}  // Links to specific district page
            className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full text-white font-semibold transform translate-y-4 
            group-hover:translate-y-0 transition-transform duration-300">
            Explore {name} →
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-orange-600">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">
          Famous religious & tourist places
        </p>
      </div>
    </div>
  );
};

export default DistrictSection;
