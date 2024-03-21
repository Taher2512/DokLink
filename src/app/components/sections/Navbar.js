import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    // <div className="fixed w-full h-28 z-50 flex justify-center items-center">
    //   <div className="flex flex-row w-1/3 p-5 items-center justify-between border-2 border-black rounded-xl backdrop-blur-xl">
    //     <div>DocLink</div>
    //     <div className="mr-10">About Us</div>
    //   </div>
    // </div>
    <div className="fixed w-full h-28 z-50 flex justify-center items-center">
      <div className="flex flex-row w-1/4 p-5 items-center justify-around">
        <div className="font-extrabold text-2xl">DocLink Logo</div>
        <Link
          href={"/"}
          className="font-semibold text-lg text-blue-800 hover:text-red-600"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
