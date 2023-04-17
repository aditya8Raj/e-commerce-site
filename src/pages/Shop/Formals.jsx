import React from "react";
import AddToCart from "../../components/AddToCartButton";
import blueformalpants from "../../assets/Formals/blueformalpants.png";
import formalbluesuit from "../../assets/Formals/formalbluesuit.png"
import formalshoes from "../../assets/Formals/formalshoes.png"
import graysuitandjacket from "../../assets/Formals/graysuitandjacket.png"
import navyblueformals from "../../assets/Formals/navyblueformals.png"
import womenformals from "../../assets/Formals/womenformals.png"

const Formals = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 dark:text-white">
        <h2 className="text-4xl pt-4 text-center">formals</h2>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src={blueformalpants}
              alt="blueformalpants-img"
            />
            <p className="text-left text-lg">blue formal pants</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src={womenformals}
              alt="womenformals-img"
            />
            <p className="text-left text-lg">women formal (set)</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src={navyblueformals}
              alt="navyblueformals-img"
            />
            <p className="text-left text-lg">navy blue formal</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src={formalshoes}
              alt="formalshoes-img"
            />
            <p className="text-left text-lg">brown formal shoes</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src={graysuitandjacket}
              alt="graysuitandjacket-img"
            />
            <p className="text-left text-lg">gray suit & jacket</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src={formalbluesuit}
              alt="formalbluesuit-img"
            />
            <p className="text-left text-lg">formal blue suit</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Formals;
