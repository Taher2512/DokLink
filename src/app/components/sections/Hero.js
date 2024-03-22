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
          <p className="text-2xl font-bold w-3/4 text-stone-800">
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
          <button className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 backdrop-blur-lg">
            <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Contact Us
            </span>
          </button>
        </div>
      </div>

      <div className="relative w-1/3 flex items-end border-2">
        {/* <div className="absolute w-full h-screen flex items-center justify-center">
          <div id="shape" className="border-2 border-blue-800"></div>
        </div> */}
        <div className="absolute z-10">
          <svg
            width="150%"
            height="150%"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#0099ff"
              d="M48.4,-62.9C64.5,-53.7,80.7,-39,86.4,-21C92.1,-3,87.4,18.3,75.3,34.8C63.2,51.3,43.7,62.9,23,70.6C2.2,78.4,-19.8,82.2,-36.7,74.8C-53.6,67.3,-65.4,48.7,-70.7,30.5C-76,12.4,-74.9,-5.3,-67.3,-19.8C-59.7,-34.4,-45.7,-46,-30.2,-56.2C-14.7,-66.5,1.2,-75.4,17.7,-74.1C34.1,-72.9,51.2,-61.1,48.4,-62.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute -z-10">
          <svg
            width="180%"
            height="180%"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#d4ebf2"
              d="M37.4,-67.5C50,-63.6,63.5,-54.1,67.8,-41.7C72.1,-29.2,67.1,-13.6,63.9,0.5C60.6,14.5,59.1,29,51.4,38.2C43.6,47.3,29.6,51.2,17.3,58.2C5.1,65.2,-5.4,75.4,-20.1,75.8C-34.8,76.3,-53.8,67,-63.3,54.1C-72.7,41.2,-72.7,24.6,-73.4,9.1C-74.1,-6.4,-75.6,-21,-68.9,-32.6C-62.1,-44.2,-47.1,-53,-32.1,-61C-17,-68.9,-8.5,-75.9,2.6,-76.9C13.7,-77.9,27.3,-73.3,37.4,-67.5Z"
              transform="translate(100 120)"
            />
          </svg>
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
