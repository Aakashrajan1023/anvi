import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, TextAlignJustify } from "lucide-react";

const Navbar = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const Menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Products",
      path: "/products",
      submenu: [
        { name: "Cement", path: "/products/cement" },
        { name: "Steel", path: "/products/steel" },
        { name: "Paint", path: "/products/paint" },
        { name: "Aggregates", path: "/products/aggregates" },
        { name: "Bricks & Blocks", path: "/products/bricks" },
        { name: "Electrical & Plumbing", path: "/products/electrical" },
        { name: "Hardware & Consumables", path: "/products/hardware" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-dvw z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <NavLink to="/">
            <img
              src="/images/logo.jpeg"
              alt="Logo"
              className="h-10 w-auto"
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex items-center space-x-8 font-medium transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {Menu.map((item, index) => (
              <li key={index} className="relative group">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-2 py-2 transition-all duration-200 hover:text-[#0D47A1] ${
                      isActive ? "text-[#0D47A1]" : ""
                    }`
                  }
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}
                </NavLink>

                {/* Dropdown */}
                {item.submenu && (
                  <ul
                    className="absolute left-0 top-full mt-3 w-64 bg-white shadow-xl rounded-xl
                    opacity-0 invisible translate-y-3
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300 ease-out"
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={subItem.path}
                          className="block px-5 py-3 text-sm text-gray-800
                          hover:bg-[#F2B715]/10 hover:text-[#0D47A1]
                          transition-all duration-200"
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <button
            onClick={handleClick}
            className="hidden md:block relative overflow-hidden px-6 py-3 rounded-lg bg-[#0D47A1] text-white group hover:scale-105 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[#F2B715] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            <span className="relative group-hover:text-[#0D47A1] font-semibold transition-colors duration-300">
              Get a Free Quote
            </span>
          </button>

          {/* Mobile Button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* <svg
              className={`w-6 h-6 transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white drop-shadow-md"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg> */}
            <TextAlignJustify 
            size = {22}
            className={`w-6 h-6 transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white drop-shadow-md"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <aside
        className={`md:hidden fixed top-0 left-0 h-screen w-72 bg-[#0F172A] z-40
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          ✕
        </button>

        <ul className="flex flex-col space-y-6 p-8 mt-12 font-medium text-white">
          {Menu.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-[#00BCFF]" : "text-white"}`
                }
              >
                {item.name}
              </NavLink>

              {/* Mobile Submenu */}
              {item.submenu && (
                <ul className="pl-4 mt-3 space-y-3 text-sm text-gray-300">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className="block hover:text-[#00BCFF]"
                      >
                        {subItem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
};

export default Navbar;
