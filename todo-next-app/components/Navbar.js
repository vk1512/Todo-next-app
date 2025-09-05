import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-500 to-pink-600 shadow-md">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-white tracking-wide cursor-pointer">
          Todo<span className="text-yellow-300">App</span>
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-white font-medium">
          <li className="cursor-pointer hover:text-yellow-300 transition duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition duration-300">
            Products
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition duration-300">
            About
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition duration-300">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
