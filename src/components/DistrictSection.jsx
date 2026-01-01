import React from "react";

const DistrictSection = ({ name, image }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white">
      <img
        src={image}
        alt={name}
        className="h-52 w-full object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-orange-600">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Famous religious & tourist places
        </p>
      </div>
    </div>
  );
};

export default DistrictSection;

