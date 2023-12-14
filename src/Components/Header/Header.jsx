/* eslint-disable react/no-unknown-property */
import Logo from "../../assets/Images/Logo.jpg";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const headerClasses = `mt-${
    scrollY > 20 ? "0" : "5"
  } mx-4 md:mx-10 rounded-lg shadow-2xl z-1000 fixed top-0 left-0 right-0 bg-white`;

  return (
    <div>
      <div className={`transition-all duration-300 ${headerClasses}`}>
        <nav className="py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <img src={Logo} alt="" className="h-8" />
            </div>

            {/* Collapsed Navbar for Small Screens */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-600 focus:outline-none"
                onClick={() => handleToggle()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Expanded Navbar for Medium and Larger Screens */}
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0`}
              id="navbar-collapse"
            >
              <a href="#" className="p-2 lg:px-4 md:mx-2 text-black rounded">
                Home
              </a>

              <NavLink to={"/about"}>
                <div className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                  About Us
                </div>
              </NavLink>

              <NavLink to={"/contact"}>
              <div
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Contact Us
              </div>
              </NavLink>
              <NavLink to={"/shop"}>
                <div
                  href="#"
                  id="navbar-toggle"
                  onClick={handleToggle}
                  className="p-3 lg:px-4 flex gap-2 md:mx-2 text-white rounded transition-colors duration-300 bg-indigo-600 bg-gradient-to-l from-indigo-600 to-purple-500"
                >
                  Shop
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
