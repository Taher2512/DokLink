"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-center md:w-full text-[#1e40af]">
      <div className="md:px-8 px-6 py-1 bg-gray-200 flex md:gap-12 gap-8 items-center justify-center mt-4 rounded-xl z-50">
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
    </nav>
  );
}

export default Navbar;
