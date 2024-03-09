import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.svg";

const Header = () => {
  return (
    <div>
      <div className=" container mx-auto navbar text-white py-5 px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost ">
            <img src={logo} alt="Logo" className=" h-[71px] w-[198px]" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>
                  <Link>Features</Link>
                </summary>
              </details>
            </li>

            <li>
              <details>
                <summary>
                  <Link>Download</Link>
                </summary>
              </details>
            </li>

            <li>
              <details>
                <summary>
                  <Link>Resources</Link>
                </summary>
              </details>
            </li>

            <li>
              <Link>Pricing</Link>
            </li>

            <li>
              <Link>Business VPN</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-5">
          <Link>
            <button className="btn btn-outline rounded-full text-sm font-extrabold px-8 py-3 text-white border-[#55585E] hover:bg-[#592e8e]">
              Login
            </button>
          </Link>
          <Link>
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
