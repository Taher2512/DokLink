import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Problems from "./components/sections/Problems";
import Services from "./components/sections/Services";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Problems />
      <Services />
      <Problems />
      {/* <Hero /> */}
    </>
  );
}
