import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import WorkProcess from "./components/WorkProcess";

export default function Home() {
  return (
    <>
   <Header/>
   <Hero/>
   <Portfolio/>
   <Services/>
   <Features/>
   <Testimonials/>
   <WorkProcess/>
   </>
  );
}
