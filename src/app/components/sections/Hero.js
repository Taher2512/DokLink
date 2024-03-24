import React from "react";
import { IconPhone } from "@tabler/icons-react";

function Hero() {
  return (
    <div className="w-full h-screen flex flex-row bg-blue-800">
      <div className="relative w-1/2 h-full flex flex-col justify-center items-center pl-20 z-10">
        <img
          src="./hero-blob-2.png"
          className="absolute -top-4 -left-10 h-auto w-auto -z-10 opacity-15"
        />
        <p className="text-5xl text-white font-semibold mb-4">
          Your Health, Your Way!
        </p>
        <p className="text-lg text-slate-100 mb-10">
          Seamless Doctor Appointments and Hospital Bed Booking at Your
          Fingertips!
        </p>
        <div className="flex flex-row">
          <button className="bg-white rounded-md p-3 mr-6 font-semibold">
            Our Services
          </button>
          <button className="flex flex-row border-white border-2 rounded-md p-3 text-white font-semibold">
            <IconPhone className="mr-1" /> Contact Us
          </button>
        </div>
        <img
          src="./hero-asset-1.png"
          className="absolute bottom-10 h-auto w-auto -z-10 opacity-15"
        />
      </div>
      <div className="w-1/2 relative flex justify-center items-end pr-15 z-10">
        <img
          src="./hero-asset-2.png"
          className="absolute top-10 left-0 w-72 -z-10 opacity-20"
        />
        <img
          src="./hero-blob-1.png"
          className="absolute bottom-0 h-auto w-auto -z-10 opacity-15"
        />
        <img src="./hero-3.png" className="h-5/6 w-auto" />
      </div>
    </div>
  );
}

export default Hero;
