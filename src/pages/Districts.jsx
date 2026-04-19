import { Link } from "react-router-dom";
import { useState } from "react";

const Districts = () => {
  const [show, setShow] = useState(false);

  const districts = [
    "Bara",
    "Parsa",
    "Saptari",
    "Siraha",
    "Sarlahi",
    "Sunsari",
    "Dhanusha",
    "Mahottari",
  ];

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <button className="hover:text-yellow-300 cursor-pointer">
        Districts
      </button>

      {show && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0
         bg-orange-600 rounded-lg shadow-lg min-w-3.5 z-50">
          {districts.map((district, i) => (
            <Link
              key={i}
              to={`/district/${district.toLowerCase()}`}
              className="block px-4 py-2 hover:bg-orange-700 hover:text-yellow-300 whitespace-nowrap"
              onClick={() => setShow(false)}
            >
              {district}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Districts;
