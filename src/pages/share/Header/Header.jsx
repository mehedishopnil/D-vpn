import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="">
      {/* Header container */}
      <div className="container mx-auto py-5 px-4 lg:px-8 flex justify-between items-center">
        {/* Logo and mobile menu button */}
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
            className="block lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Toggle menu icon */}
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
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 lg:h-12" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <Link to="/" className="text-white">Features</Link>
          <Link to="/" className="text-white">Download</Link>
          <Link to="/" className="text-white">Resources</Link>
          <Link to="/" className="text-white">Pricing</Link>
          <Link to="/" className="text-white">Business VPN</Link>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`fixed inset-0 text-white z-50 transition-opacity duration-300 ease-in-out overflow-hidden ${menuOpen ? "opacity-90 pointer-events-auto text-center  font-bold text-xl " : "opacity-0 pointer-events-none"}`}>
          <div className="absolute top-0 left-0 w-full text-white bg-[#411562] shadow-lg transform transition-transform duration-300 ease-in-out" style={{ height: '50vh' }}>
            <div className="container mx-auto px-4 lg:px-8 py-5">
              {/* Close menu button */}
              <button className="absolute top-4 right-4 text-white" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Menu items */}
              <ul className="flex flex-col gap-5 mt-5 lg:flex-row lg:items-center lg:space-x-8">
                <li><Link to="/" className="">Features</Link></li>
                <li><Link to="/" className="">Download</Link></li>
                <li><Link to="/" className="">Resources</Link></li>
                <li><Link to="/" className="">Pricing</Link></li>
                <li><Link to="/" className="">Business VPN</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Login and Download buttons */}
        <div className="flex items-center">
          {/* Login button */}
          <Link to="/">
            <button className="hidden lg:block btn-outline rounded-full text-sm font-extrabold px-8 py-3 text-white border-[#55585E] hover:bg-[#592e8e]">
              Login
            </button>
          </Link>
          {/* Download button */}
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
