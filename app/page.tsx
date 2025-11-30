import Image from "next/image";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import WorkProcess from "./components/WorkProcess";
import ContactForm from "./components/ContactForm";


export default function Home() {
  return (
    <>
   <Hero/>
   <Portfolio/>
   <Services/>
   <Features/>
   <Testimonials/>
   <WorkProcess/>
   <ContactForm/>
   </>
  );
}
