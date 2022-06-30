import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../../components/AddToCartButton";

const JoggersSection = () => {
  return (
    <>
      <div className="joggers">
        <Link to="/shop/joggers">
          <h2 className="text-3xl pl-6 pt-4 underline">JOGGERS</h2>
        </Link>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/HxPpPfBs/blackjoggers.png"
              alt="blackjoggers-img"
            />
            <p className="text-left text-lg">Black Joggers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/BQ2jXnmT/casualtrousers.png"
              alt="casualtrousers-img"
            />
            <p className="text-left text-lg">Casual Trousers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/8CzcKBN4/unisextrousers.png"
              alt="unisextrousers-img"
            />
            <p className="text-left text-lg">Unisex Trousers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/05wQBNRT/redstrippedjoggers.png"
              alt="redstrippedjoggers-img"
            />
            <p className="text-left text-lg">Red-stripped Joggers</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default JoggersSection;
