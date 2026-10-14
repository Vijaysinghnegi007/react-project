import React, { useState } from "react";
import HeaderContent from "../components/header/HeaderContent";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full ${
        isMenuOpen ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between pl-2 fill-white">
        {/* Logo */}
        <div className="pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="103"
            height="44"
            viewBox="0 0 103 44"
            aria-label="Site logo"
            role="img"
          >
            <path
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            />
          </svg>
        </div>

        {/* Menu button */}
        <button
          type="button"
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          className="group relative flex h-12 w-60 flex-col items-end justify-center gap-1.5 overflow-hidden bg-black px-4 hover:cursor-pointer"
        >
          {/* Animated background */}
          <span
            className={`absolute inset-0 origin-top bg-[#d3fd50] transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
            }`}
            aria-hidden="true"
          />

          {/* Menu lines */}
          <span
            className={`relative z-10 block h-0.5 w-12 rounded-full transition-all duration-300 ${
              isMenuOpen
                ? "translate-y-1 rotate-45 bg-black"
                : "bg-white group-hover:bg-black"
            }`}
          />

          <span
            className={`relative z-10 block h-0.5 rounded-full transition-all duration-300 ${
              isMenuOpen
                ? "w-12 -translate-y-1 -rotate-45 bg-black"
                : "w-8 bg-white group-hover:bg-black"
            }`}
          />
        </button>
      </div>

      {isMenuOpen && <HeaderContent></HeaderContent>}
      {/* Navigation content can be added here when your routes are defined. */}
    </header>
  );
};

export default Header;
