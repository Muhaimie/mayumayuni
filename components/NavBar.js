import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="flex items-center h-20 mx-4 md:mx-12 lg:mx-40 ">
        <div className="flex flex-grow">
          <a href="#">
            <p className="font-mono font-bold text-gray-600 hover:text text-2xl">
              MayuMayuni
            </p>
          </a>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6 ">
          {/* products */}
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-600 hover:text"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </a>
          {/* shopping-cart */}
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7  text-gray-600 hover:text"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;