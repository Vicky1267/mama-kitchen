import React from "react";
import HeroSection from "./HeroSection";
import OfferSection from "./OfferSection";
import NavBar from "./NavBar";
import About from "./About";
import Book from "./Book";
import Testimonial from "./Testimonial";


const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <OfferSection />
      <About />
      <Book />
      <Testimonial />
  
    </>
  );
};

export default Home;
