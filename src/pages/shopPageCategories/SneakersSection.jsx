import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../../components/AddToCartButton";

const SneakersSection = () => {
  return (
    <>
      <div className="sneakers">
        <Link to="/shop/sneakers">
          <h2 className="text-3xl pl-6 pt-4 underline">SNEAKERS</h2>
        </Link>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/cNNJJ36/nikejordan.png"
              alt="nikejordan-img"
            />
            <p className="text-left text-lg">Nike Jordans</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/YPv8bkV/pumawhitesneakers.png"
              alt="pumawhitesneakers-img"
            />
            <p className="text-left text-lg">Puma White Sneakers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/84gqrhy/adidassuperstar.png"
              alt="adidassuperstar-img"
            />
            <p className="text-left text-lg">Adidas Superstar</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/2kSn6gP/blacksneakers.png"
              alt="blacksneakers-img"
            />
            <p className="text-left text-lg">Black Sneakers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default SneakersSection;
