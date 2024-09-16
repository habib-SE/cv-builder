import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa"; // Import additional icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const storedUserData = localStorage.getItem("userData");

  return (
    <nav className=" bg-yellow-200 text-black">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center md:gap-40 justify-between w-full">
          {/* Logo and Links for Larger Screens */}
          <div className="flex items-center justify-between w-full md:gap-20 md:w-auto">
            <Link to="/" className="text-2xl font-bold">
              Cv Builder
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="px-4 py-2text-black hover:text-white">
                Home
              </Link>
              <Link
                to="/cv-heading"
                className="px-4 py-2 text-black hover:text-white"
              >
                Create Resume
              </Link>
            </div>
          </div>

          {/* Hamburger Icon for Mobile Menu */}
          <div className="md:hidden z-50 flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* User Icon and Mobile Menu */}
          <div className="hidden  md:flex items-center space-x-4">
            <Link
              to="/download"
              className="border border-white rounded-lg px-4 py-2 text-black hover:text-white"
            >
              Download
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex border border-white rounded-lg items-center p-1 text-black  focus:outline-none"
              >
                <FaUserCircle className="w-8 h-8" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200">
                  <div className="flex items-center px-4 py-2 border-b border-gray-200">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-gray-800 font-semibold">
                      John Doe
                    </span>
                  </div>
                  {!storedUserData ? (
                    <>
                      <Link to="/login">
                        <div className="px-4 py-2 hover:bg-gray-200">Login</div>
                      </Link>
                      <Link to="/signup">
                        <div className="px-4 py-2 hover:bg-gray-200">
                          Signup
                        </div>
                      </Link>
                    </>
                  ) : (
                    <>
                      <button className="flex items-center px-4 py-2 w-full text-gray-800 hover:bg-gray-100">
                        <FaSignOutAlt className="mr-2" />
                        Logout
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-gray-800 text-white`}
      >
        <Link
          to="/"
          className="block px-4 py-2 text-gray-200 hover:text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/cv-heading"
          className="block px-4 py-2 text-gray-200 hover:text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Create Resume
        </Link>
        <Link
          to="/download"
          className="block border border-white rounded-lg px-4 py-2 text-gray-200 hover:text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Download
        </Link>
        {!storedUserData ? (
          <>
            <Link
              to="/login"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <Link
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
