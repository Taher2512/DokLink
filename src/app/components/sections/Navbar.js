"use client";

import Link from "next/link";
import React from "react";

function Navbar({ scrollToRef, servicesRef }) {
  return (
    <nav className="flex items-center justify-center w-full text-white">
      <div className="px-20 py-4  bg-white/30  flex gap-20 items-center justify-center mt-4 rounded-xl">
        <Link href="/" className="text-lg font-semibold">
          LOGO
        </Link>
        <Link
          href="/"
          className="text-lg font-semibold"
          onClick={() => scrollToRef(servicesRef)}
        >
          Services
        </Link>
        <Link href="/about" className="text-lg font-semibold">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
