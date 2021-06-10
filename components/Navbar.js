import { useEffect, useState } from "react";
import Logo from "../svgIcons/Logo";
import CompanyNavDropdown from "./CompanyNavDropdown";
import ConnectNavDropdown from "./ConnectNavDropdown";
import ProductNavDropdown from "./ProductNavDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleNavOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white flex py-8 max-w-6xl mx-auto md:justify-around justify-between relative z-20">
      <div className="flex">
        <div className="md:mr-14 ml-10">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ProductNavDropdown />
          <CompanyNavDropdown />
          <ConnectNavDropdown />
        </nav>
      </div>

      <div className="hidden md:block my-auto">
        <button className="mr-6 text-sm font-semibold">Login</button>
        <button className="px-7 py-2.5 rounded-full bg-white text-lightRed text-sm hover:text-white hover:bg-opacity-30 font-semibold">
          Sign Up
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden mr-10 my-auto relative">
        <img
          onClick={handleNavOpen}
          src={
            isOpen ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"
          }
          className="cursor-pointer"
        />
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute transform -translate-x-1/2  left-1/2 top-24 bg-white w-10/12 rounded-md md:hidden shadow-2xl pt-3`}
      >
        <nav className="md:mb-0 mb-5">
          <ProductNavDropdown />
          <CompanyNavDropdown />
          <ConnectNavDropdown />
        </nav>
        <div className="w-11/12 bg-gray-100 h-px mx-auto mb-6"></div>
        <div className="my-7">
          <button className="mb-4 block text-black my-auto mx-auto tracking-wide">
            Login
          </button>
          <button className="block mx-auto px-7 py-2.5 rounded-full text-white  font-semibold bg-gradient-to-r">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
