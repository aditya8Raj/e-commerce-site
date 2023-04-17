import React from "react";
import AddToCart from "../../components/AddToCartButton";

const Women = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 dark:text-white">
        <h2 className="text-4xl pt-4 text-center">women</h2>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/Ld08G70/floraldress.png"
              alt="floraltdress-img"
            />
            <p className="text-left text-lg">floral dress</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/XXk8w6h/tanktop.png"
              alt="tanktop-img"
            />
            <p className="text-left text-lg">tank top</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/47yDXK7/floraltop.png"
              alt="floraltop-img"
            />
            <p className="text-left text-lg">floral top</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/fkymgds/blackdress.png"
              alt="blackdress-img"
            />
            <p className="text-left text-lg">black dress</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/80dTY4L/blueandwhitestrippedtop.png"
              alt="blueandwhitestrippedtopdress-img"
            />
            <p className="text-left text-lg">blue & white stripped top</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/933jQJr/bottomupshirt.png"
              alt="bottomupshirt-img"
            />
            <p className="text-left text-lg">bottom-up shirt</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Women;
