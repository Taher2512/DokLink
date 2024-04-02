import React from "react";
import { IconPhone } from "@tabler/icons-react";

function Hero({ scrollToRef, servicesRef, contactRef }) {
  return (
    <div className="w-full h-screen flex md:flex-row bg-blue-800">
      <div className="relative md:w-1/2 w-full h-full flex flex-col justify-center items-center md:items-start p-16 md:p-0 md:pl-40 z-10">
        <img
          src="./hero-blob-2.png"
          className="absolute -top-24 -left-10 h-auto w-auto -z-10 opacity-15"
        />
        <img
          src="./hero-asset-2.png"
          className="absolute top-9 -right-5 h-36 w-60 -z-10 opacity-15 md:hidden block"
        />
        <p className="md:text-8xl text-5xl text-white mb-4 ManropeBold">
          Your Health,
        </p>
        <p className="md:text-8xl text-5xl text-white mb-4 ManropeBold">
          Your Way!
        </p>
        <p className="md:text-xl text-2xl text-center md:text-start text-slate-100 mb-10 GilroyLight pt-4">
          Seamless Doctor Appointments and Hospital Bed Booking at Your
          Fingertips!
        </p>
        <div className="flex md:flex-row flex-col">
          <button
            onClick={() => scrollToRef(servicesRef)}
            className="bg-white rounded-md p-3 mr-6 md:w-40 w-80 mb-3 md:mb-0 GilroyBold hover:bg-gray-200 text-[#1E40AF] text-lg"
          >
            Our Services
          </button>
          <button
            onClick={() => scrollToRef(contactRef)}
            className="flex flex-row justify-center border-white border-2 text-lg rounded-md p-3 md:w-40 w-80 text-white GilroyBold hover:bg-blue-200 hover:border-blue-200 hover:text-black"
          >
            <IconPhone className="mr-1" /> Contact Us
          </button>
        </div>
        <img
          src="./hero-asset-1.png"
          className="absolute md:bottom-10 bottom-24 h-auto w-auto -z-10 opacity-15"
        />
      </div>
      <div className="md:w-1/2 relative flex justify-center items-end md:pr-15 z-10">
        <img
          src="./hero-asset-2.png"
          className="absolute top-10 left-0 w-72 -z-10 opacity-20"
        />
        <img
          src="./hero-blob-1.png"
          className="absolute bottom-0 h-auto w-auto -z-10 opacity-15"
        />
        <img
          src="./hero-4.png"
          className="h-[95vh] w-auto object-cover md:block hidden"
        />
      </div>
    </div>
  );
}

export default Hero;
