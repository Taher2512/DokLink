import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="fixed w-full h-28 z-50 flex justify-center items-center">
      <div className="flex flex-row w-1/4 p-5 items-center justify-between border-2 border-gray-300 rounded-full backdrop-blur-xl z-50">
        <Link href={"/"} className="text-gray-200 hover:text-blue-400">
          DocLink Logo
        </Link>
        <Link
          href={"/about"}
          className="mr-5 text-gray-200 hover:text-blue-400"
        >
          About Us
        </Link>
      </div>
    </div>
  );

  {
    /* <div className="fixed w-full h-28 z-50 flex justify-center items-center">
      <div className="flex flex-row w-1/4 p-5 items-center justify-around">
        <div className="font-extrabold text-2xl">DocLink Logo</div>
        <Link
          href={"/"}
          className="font-semibold text-lg text-blue-800 hover:text-red-600"
        >
          About Us
        </Link>
      </div>
    </div> */
  }
}

export default Navbar;
