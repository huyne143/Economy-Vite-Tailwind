import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 fixed top-0 left-0 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile Menu Button */}
          </div>
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">{/* Logo */}</div>
          {/* Desktop Menu */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-indigo-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Produce
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                About
              </a>
            </div>
          </div>
          {/* Right Side */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Notification Button */}
            <button
              type="button"
              className="relative rounded-full bg-indigo-700 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
            >
              {/* Notification Icon */}
            </button>
            {/* User Menu */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-indigo-700 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  {/* User Icon */}
                </button>
              </div>
            </div>
            {/* Search Input */}
            <div className="ml-3 relative">
              <select className="bg-indigo-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700">
                <option value="2022">2011</option>
                <option value="2023">2015</option>
                <option value="2024">2010</option>
                <option value="2025">2018</option>
                <option value="2025">2020</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="bg-indigo-700 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-indigo-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-indigo-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-indigo-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
