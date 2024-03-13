import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="">
      <div className="container mx-auto py-5 px-4 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="block lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 lg:h-12" />
          </Link>
        </div>

        <div className={`lg:flex ${menuOpen ? "block" : "hidden"} mt-4 lg:mt-0`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 text-white">
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Download</Link>
            </li>
            <li>
              <Link to="/">Resources</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Business VPN</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <Link to="/">
            <button className="hidden lg:block btn-outline rounded-full text-sm font-extrabold px-8 py-3 text-white border-[#55585E] hover:bg-[#592e8e]">
              Login
            </button>
          </Link>
          <Link to="/">
            <button className="btn text-white bg-[#701CB0] rounded-full text-sm font-extrabold px-8 py-3 hover:bg-[#592e8e]">
              Download
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
