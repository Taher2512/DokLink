import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <h1 className="ManropeBold text-7xl text-white ml-20 mt-20">About Us</h1>
      <p className="GilroyLight text-2xl w-3/4 ml-20 mt-10 text-white">
        DokLink is revolutionizing healthcare accessibility by offering a
        seamless and user-friendly platform that enables patients to book doctor
        appointments & reserve hospital beds with ease, addressing a critical
        need in healthcare management. With a focus on saving lives through
        timely medical assistance, we streamline the healthcare process,
        ensuring efficiency & convenience for all.
      </p>
      <h1 className="ManropeBold text-7xl text-white ml-20 mt-20">Our Team</h1>

      <div className="grid grid-cols-2 auto-rows-auto gap-x-8 gap-y-4 w-[60%] ml-20 mt-10 mb-16">
        <div className="h-96 overflow-hidden rounded-xl">
          <img
            src="./member1.jpg"
            className="w-full h-full object-cover "
            alt="Team Member 1"
          />
        </div>
        <div className="h-96 rounded-xl overflow-hidden"> 
          <img
            src="./member2.jpg"
            className="w-full h-full object-cover object-top"
            alt="Team Member 2"
          />
        </div>

        <div className="flex-col px-8 py-4 bg-white/20 text-white rounded-xl h-auto max-h-80">
          <h1 className="GilroyBold text-2xl">Krishnendu Gupta</h1>
          <h3 className="GilroyLight text-xl">Director, Doklink</h3>
        </div>
        <div className="flex-col px-8 py-4 bg-white/20 text-white rounded-xl h-auto max-h-80"> 
          <h1 className="GilroyBold text-2xl">Rohit Kumar Choubey</h1>
          <h3 className="GilroyLight text-xl">Director, Doklink</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
