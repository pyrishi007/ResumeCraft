import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import CTAsection from "./CTAsection";

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* HERO SECTION */}
      <HeroSection />

      {/* FEATURES SECTION */}
      <FeatureSection />

      {/* FINAL CTA SECTION */}
      <CTAsection />
    </div>
  );
};

export default Home;
