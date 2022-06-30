import React from "react";
import Navbar from "../../components/Navbar";
import FormalsSection from "../shopPageCategories/FormalsSection";
import HatsSection from "../shopPageCategories/HatsSection";
import HoodiesSection from "../shopPageCategories/HoodiesSection";
import JacketsSection from "../shopPageCategories/JacketsSection";
import JoggersSection from "../shopPageCategories/JoggersSection";
import MensSection from "../shopPageCategories/MensSection";
import SneakersSection from "../shopPageCategories/SneakersSection";
import WomenSection from "../shopPageCategories/WomenSection";

const Shop = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800 dark:text-white">
        <MensSection />
        <WomenSection />
        <HatsSection />
        <JacketsSection />
        <SneakersSection />
        <FormalsSection />
        <JoggersSection />
        <HoodiesSection />
      </div>
    </>
  );
};

export default Shop;
