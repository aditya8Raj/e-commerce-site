import React from "react";
import AddToCart from "../../components/AddToCartButton";
import Navbar from "../../components/Navbar";

const Sneakers = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800 dark:text-white">
        <h2 className="text-4xl pt-4 text-center">sneakers</h2>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/cNNJJ36/nikejordan.png"
              alt="nikejordan-img"
            />
            <p className="text-left text-lg">nike jordans</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/YPv8bkV/pumawhitesneakers.png"
              alt="pumawhitesneakers-img"
            />
            <p className="text-left text-lg">puma white sneakers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/84gqrhy/adidassuperstar.png"
              alt="adidassuperstar-img"
            />
            <p className="text-left text-lg">adidas superstar</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/2kSn6gP/blacksneakers.png"
              alt="blacksneakers-img"
            />
            <p className="text-left text-lg">black sneakers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/4RhBjfK/nikesneakers.png"
              alt="nikesneakers-img"
            />
            <p className="text-left text-lg">nike sneakers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/NZFMyDG/blackandwhitesneakers.png"
              alt="blackandwhitesneakers-img"
            />
            <p className="text-left text-lg">black & white sneakers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sneakers;
