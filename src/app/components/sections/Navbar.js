"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-center md:w-full text-[#1e40af] mt-4">
      <div className="md:px-8 px-6 py-1 bg-gray-200 flex md:gap-12 gap-8 items-center justify-center rounded-xl z-50">
        <Link
          href="/"
          className="md:text-lg text-base font-semibold flex items-center"
        >
          <Image src={"/logo.png"} width={70} height={70} alt="DokLink Logo" />
          <p>DokLink</p>
        </Link>
        <Link href="/about" className="md:text-lg text-base font-semibold">
          About Us
        </Link>
      </div>
      <div
        className="relative md:absolute right-0 m-0 md:mr-32 z-50"
        ref={dropdownRef}
      >
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:w-auto"
        >
          Sign In{" "}
          <svg
            className={`w-2.5 h-2.5 ms-2.5 transition-transform ${
              dropdownOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="absolute right-0 z-50 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul
              className="py-2 text-sm text-gray-700"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <Link
                  href="/user-login"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  User Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/doctor-login"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Doctor Sign In
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
