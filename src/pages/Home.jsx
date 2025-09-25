import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Catagories from "../components/Catagories";
import Recommendation from "../components/Recommendation";
import BestSellers from "../components/BestSellers";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Catagories />
      <Recommendation />
      <BestSellers />
    </>
  );
};

export default Home;
