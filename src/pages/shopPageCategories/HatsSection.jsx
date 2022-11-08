import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../../components/AddToCartButton";

const HatsSection = () => {
  return (
    <>
      <div className="HATS">
        <Link to="/shop/hats">
          <h2 className="text-3xl pl-6 pt-4 underline">HATS</h2>
        </Link>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/dWfyQHr/baseballcap.png"
              alt="baseballcap-img"
            />
            <p className="text-left text-lg">Baseball Cap</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/qyzbyTS/toque.png"
              alt="toque-img"
            />
            <p className="text-left text-lg">Toque</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/C2zVxxF/cowboyhat.png"
              alt="cowboyhat-img"
            />
            <p className="text-left text-lg">Cowboy Hat</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/WkFNpY3/sunhat.png"
              alt="sunhat-img"
            />
            <p className="text-left text-lg">Sun Hat</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default HatsSection;
