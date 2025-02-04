import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow-md">

      <button
        className="lg:hidden flex items-center text-blue-600 p-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="block h-6 w-6 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>


      <ul
        className={`absolute lg:justify-center  top-16 left-0 w-full bg-white shadow-md lg:static lg:flex lg:items-center lg:space-x-6 lg:bg-transparent lg:shadow-none ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link className="block px-4 py-2 text-lg font-bold text-gray-700 hover:text-blue-600" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="block px-4 py-2 text-lg font-bold text-gray-700 hover:text-blue-600" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
