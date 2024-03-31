import React from "react";
import { IconPhone } from "@tabler/icons-react";

function Hero({ scrollToRef, servicesRef, contactRef }) {
  return (
    <div className="w-full h-screen flex flex-row bg-blue-800">
      <div className="relative w-1/2 h-full flex flex-col justify-center  pl-40 z-10">
        <img
          src="./hero-blob-2.png"
          className="absolute -top-4 -left-10 h-auto w-auto -z-10 opacity-15"
        />
        <p className="text-8xl text-white mb-4 ManropeBold">
          Your Health,
        </p>
        <p className="text-8xl text-white mb-4 ManropeBold">
          Your Way!
        </p>
        <p className="text-xl text-slate-100 mb-10 GilroyLight pt-4">
          Seamless Doctor Appointments and Hospital Bed Booking at Your
          Fingertips!
        </p>
        <div className="flex flex-row">
          <button
            onClick={() => scrollToRef(servicesRef)}
            className="bg-white rounded-md p-3 mr-6 GilroyBold hover:bg-gray-200"
          >
            Our Services
          </button>
          <button
            onClick={() => scrollToRef(contactRef)}
            className="flex flex-row border-white border-2 rounded-md p-3 text-white GilroyBold hover:bg-blue-200 hover:border-blue-200 hover:text-black"
          >
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
        <img src="./hero-4.png" className="h-[95vh] w-auto object-cover" />
      </div>
    </div>
  );
}

export default Hero;
