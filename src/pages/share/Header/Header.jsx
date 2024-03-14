import { useState } from "react";
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <Link to="/" className="text-white">Features</Link>
          <Link to="/" className="text-white">Download</Link>
          <Link to="/" className="text-white">Resources</Link>
          <Link to="/" className="text-white">Pricing</Link>
          <Link to="/" className="text-white">Business VPN</Link>
        </div>

        <div className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ease-in-out ${menuOpen ? "opacity-90 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="absolute top-0 left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out" style={{ height: '50vh' }}>
            <div className="container mx-auto px-4 lg:px-8 py-5">
              <button className="absolute top-4 right-4 text-black" onClick={toggleMenu}>
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
              <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                <li><Link to="/" className="text-black">Features</Link></li>
                <li><Link to="/" className="text-black">Download</Link></li>
                <li><Link to="/" className="text-black">Resources</Link></li>
                <li><Link to="/" className="text-black">Pricing</Link></li>
                <li><Link to="/" className="text-black">Business VPN</Link></li>
              </ul>
            </div>
          </div>
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
