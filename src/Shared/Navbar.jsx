import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/Image/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="w-36">
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 hover:text-red-600"
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-red-600 text-lg">
                Who We Are
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-700 hover:text-red-600 text-lg">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-red-600 flex items-center gap-1 text-lg"
              >
                Buy A Franchise
                <MdOutlineKeyboardArrowDown className="text-xl" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-red-600 flex items-center gap-1 text-lg"
              >
                Franchise Your Business
                <MdOutlineKeyboardArrowDown className="text-xl" />
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-700 hover:text-red-600 text-lg">
                Articles
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Button */}
        <Link
          to="/"
          className="hidden lg:block px-4 py-2 bg-[#B2030A] text-white rounded-md hover:bg-red-700 text-lg"
        >
          Contact Us
        </Link>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {/* Sidebar Content */}
          <div
            className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="w-28">
                <img src={logo} alt="Logo" className="w-full" />
              </div>
              <button
                className="text-gray-700 hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="p-4">
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="block text-gray-700 hover:text-red-600 text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block text-gray-700 hover:text-red-600 text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between text-gray-700 hover:text-red-600 text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Buy A Franchise
                    <MdOutlineKeyboardArrowDown className="text-xl" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between text-gray-700 hover:text-red-600 text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Franchise Your Business
                    <MdOutlineKeyboardArrowDown className="text-xl" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block text-gray-700 hover:text-red-600 text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block w-full text-center px-4 py-2 bg-[#B2030A] text-white rounded-md hover:bg-red-700 text-lg mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
