import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-center  w-full text-white">
      <ul className="px-20 py-4  bg-white/30  flex gap-20 items-center justify-center mt-4 rounded-xl">
        <li className="text-xl GilroyBold">
          <Link legacyBehavior rel="stylesheet" href="../About.js" >
            <a>LOGO</a>
            </Link>
        </li>
        <li className="text-xl GilroyBold">
          <a href="https://www.google.com/">Services</a>
        </li>
        <li className="text-xl GilroyBold">
          <a href="../About.js">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
