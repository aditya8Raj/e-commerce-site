import React from "react";
import AddToCart from "../../components/AddToCartButton";
import Navbar from "../../components/Navbar";

const Joggers = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800 dark:text-white">
        <h2 className="text-4xl pt-4 text-center">joggers</h2>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/jRcpBbC/blackjoggers.png"
              alt="blackjoggers-img"
            />
            <p className="text-left text-lg">black joggers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/WkzVpXp/casualtrousers.png"
              alt="casualtrousers-img"
            />
            <p className="text-left text-lg">casual trousers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/8KTpfVx/unisextrousers.png"
              alt="unisextrousers-img"
            />
            <p className="text-left text-lg">unisex trousers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/174yGYb/redstrippedjoggers.png"
              alt="redstrippedjoggers-img"
            />
            <p className="text-left text-lg">red-stripped joggers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/5TsBjfK/slimfitjoggers.png"
              alt="slimfitjoggers-img"
            />
            <p className="text-left text-lg">slim fit joggers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/NV8b9B9/adidastrousers.png"
              alt="adidastrousers-img"
            />
            <p className="text-left text-lg">adidas trousers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Joggers;
