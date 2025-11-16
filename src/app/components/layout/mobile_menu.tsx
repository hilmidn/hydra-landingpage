"use client";
import { useState } from "react";

const MenuMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Burger Menu Icon */}
      <button
        className="lg:hidden text-white flex flex-col justify-center items-center gap-1"
        onClick={toggleMenu}
      >
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>

      {/* Mobile Menu (Burger) */}
      <div
        className={`lg:hidden absolute top-[102px] left-0 w-full bg-dark transition-all duration-300 ${
          isMenuOpen ? "opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center gap-5 py-5 font-bold uppercase">
          <li>About</li>
          <li>Services</li>
          <li>Technologies</li>
          <li>How To</li>
        </ul>
        <div className="flex flex-col items-center gap-5 py-5">
          <button className="btn btn-light">Contact Us</button>
          <button className="btn btn-primary">Join Hydra</button>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
