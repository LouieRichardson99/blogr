import { Menu } from "@headlessui/react";
import React from "react";
import DropdownArrow from "../svgIcons/DropdownArrow";

export default function CompanyNavDropdown() {
  return (
    <Menu as="div" className="relative my-auto rounded-lg text-left">
      <Menu.Button as={React.Fragment}>
        {({ open }) => (
          <button className="focus:outline-none flex hover:underline md:mr-8 text-gray-800 md:text-white mx-auto mt-4 md:mt-0 mb-4 md:mb-0">
            Connect{<DropdownArrow isOpen={open} />}
          </button>
        )}
      </Menu.Button>

      {/* Dropdown menu list */}
      <Menu.Items
        as="ul"
        className="relative mt-3 w-11/12 mx-auto md:absolute md:-left-2 focus:outline-none bg-gray-100 md:bg-white md:mt-4  text-gray-600 md:text-gray-800 md:pl-4 py-5 md:py-4 rounded-md md:w-40"
      >
        <Menu.Item as="li" className="md:mx-0  mx-auto w-max">
          {({ active }) => (
            <a
              className={`block w-max mb-3 md:mb-1 ${
                active && "font-semibold"
              }`}
              href="/"
            >
              Contact
            </a>
          )}
        </Menu.Item>
        <Menu.Item as="li" className="md:mx-0  mx-auto w-max">
          {({ active }) => (
            <a
              className={`block w-max mb-3 md:mb-1 ${
                active && "font-semibold"
              }`}
              href="/"
            >
              Newsletter
            </a>
          )}
        </Menu.Item>
        <Menu.Item as="li" className="md:mx-0 mx-auto w-max">
          {({ active }) => (
            <a className={`block w-max  ${active && "font-semibold"}`} href="/">
              LinkedIn
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
