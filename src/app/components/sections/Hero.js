"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import "../../globals.css";
import { Button } from "../ui/moving-border";

function Hero() {
  const words = [
    {
      text: "Your",
      className: "text-blue-800",
    },
    {
      text: "Health,",
      className: "text-blue-800",
    },
    {
      text: "Your",
      className: "text-red-600",
    },
    {
      text: "Way!",
      className: "text-red-600",
    },
  ];

  return (
    <BackgroundGradientAnimation className="-z-10">
    <div className="relative flex flex-row justify-end backdrop-blur-3xl z-20">
      <div className="absolute w-full h-screen flex flex-col justify-center px-10 border-2 border-black">
        <div>
          <TypewriterEffectSmooth words={words} />
        </div>
        <div>
          <p className="text-2xl font-bold w-1/2 text-stone-800">
            Seamless Doctor Appointments and Hospital Bed Booking at Your
            Fingertips!
          </p>
        </div>
        <div className="mt-8">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 mr-4"
          >
            Our Services
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 backdrop-blur-lg">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Contact Us
            </span>
          </button>
        </div>
      </div>
      <div className="relative w-1/2">
        <div className="absolute w-full h-screen flex items-center justify-center">
          <div id="shape" className="border-2 border-blue-800"></div>
        </div>
      </div>

      {/* <div className="absolute w-full h-screen flex items-center justify-end">
        <Image src={"/hero-img-2.png"} width={700} height={700} />
      </div> */}
    </div>
   </BackgroundGradientAnimation>
  );
}

export default Hero;
