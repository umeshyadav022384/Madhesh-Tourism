import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-0">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold text-white">
          Apan Madhesh
        </h2>
        <p className="mt-2 text-sm">
          Promoting tourism & culture of Madhesh Pradesh, Nepal
        </p>
        <p className="mt-4 text-xs text-gray-400">
          © {new Date().getFullYear()} Apan Madhesh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
