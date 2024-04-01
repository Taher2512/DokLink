"use client";

import Link from "next/link";
import React from "react";

function Navbar({ scrollToRef, servicesRef }) {
  return (
    <nav className="flex items-center justify-center md:w-full text-white">
      <div className="md:px-20 px-10 py-4  bg-white/30 flex md:gap-20 gap-8 items-center justify-center mt-4 rounded-xl">
        <Link href="/" className="md:text-lg text-base font-semibold">
          LOGO
        </Link>
        <Link
          href="/"
          className="md:text-lg text-base font-semibold"
          onClick={() => scrollToRef(servicesRef)}
        >
          Services
        </Link>
        <Link href="/about" className="md:text-lg text-base font-semibold">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
