import React from "react";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

function About() {
  return (
    <>
      <Navbar />
      <h1 className="ManropeBold sm:text-7xl text-3xl text-center sm:text-left text-white sm:ml-20 mt-20">
        About Us
      </h1>
      <p className="GilroyLight text-lg sm:text-2xl w-3/4 sm:ml-20 ml-12 text-center sm:text-left mt-10 text-white">
        DokLink is revolutionizing healthcare accessibility by offering a
        seamless and user-friendly platform that enables patients to book doctor
        appointments & reserve hospital beds with ease, addressing a critical
        need in healthcare management. With a focus on saving lives through
        timely medical assistance, we streamline the healthcare process,
        ensuring efficiency & convenience for all.
      </p>
      <h1 className="ManropeBold sm:text-7xl text-3xl text-center sm:text-left text-white sm:ml-20 mt-20">
        Our Team
      </h1>

      <div className=" grid sm:grid-cols-3 sm:grid-rows-2  grid-rows-6 gap-x-8 gap-y-4 w-[90%] ml-20 mt-10 sm:h-auto h-[45rem]">
        <div className="max-h-96 overflow-hidden rounded-xl">
          <img
            src="./member1.jpg"
            className="w-full h-full object-cover "
            alt="Team Member 1"
          />
        </div>
        <div className="max-h-96 rounded-xl overflow-hidden">
          <img
            src="./member2.jpg"
            className="w-full h-full object-cover object-top"
            alt="Team Member 2"
          />
        </div>
        <div className="max-h-96 rounded-xl overflow-hidden">
          <img
            src="./member3.jpeg"
            className="w-full h-full object-cover object-center sm:object-bottom"
            alt="Team Member 2"
          />
        </div>

        <div className="flex-col px-8 py-4 bg-white/20 text-white rounded-xl max-h-24 row-start-2">
          <h1 className="GilroyBold sm:text-2xl text-lg">
            Rohit Kumar Choubey
          </h1>
          <h3 className="GilroyLight sm:text-xl text-sm">Director, Doklink</h3>
        </div>
        <div className="flex-col px-8 py-4 bg-white/20 text-white rounded-xl max-h-24 row-start-4 sm:row-start-2">
          <h1 className="GilroyBold sm:text-2xl text-lg">Krishnendu Gupta</h1>
          <h3 className="GilroyLight sm:text-xl text-sm">Director, Doklink</h3>
        </div>
        <div className="flex-col px-8 py-4 bg-white/20 text-white rounded-xl max-h-24 row-start-6 sm:row-start-2">
          <h1 className="GilroyBold sm:text-2xl text-lg">Sowhardya Biswas</h1>
          <h3 className="GilroyLight sm:text-xl text-sm">COO, Doklink</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
