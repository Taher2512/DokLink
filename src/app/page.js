"use client";

import { useRef } from "react";
import Footer from "./components/sections/Footer";
import HeadingCard from "./components/sections/HeadingCard";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Problems from "./components/sections/Problems";
import Services from "./components/sections/Services";

export default function Home() {
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a ref
  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar />
      <Hero
        scrollToRef={scrollToRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <HeadingCard heading={"What are the problems?"} services={false} />
      <Problems />
      <HeadingCard heading={"Solutions / Services Offered"} services={true} />
      <Services servicesRef={servicesRef} />
      <Footer contactRef={contactRef} />
    </>
  );
}
