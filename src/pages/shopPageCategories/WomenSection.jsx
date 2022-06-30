import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../../components/AddToCartButton";

const WomenSection = () => {
  return (
    <>
      <div className="women">
        <Link to="/shop/women">
          <h2 className="text-3xl pl-6 pt-4 underline">WOMEN</h2>
        </Link>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/cJ07nScz/floraldress.png"
              alt="floraltdress-img"
            />
            <p className="text-left text-lg">Floral Dress</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/zD6nkWjK/tanktop.png"
              alt="tanktop-img"
            />
            <p className="text-left text-lg">Tank Top</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/qRYCjV84/floraltop.png"
              alt="floraltop-img"
            />
            <p className="text-left text-lg">Floral Top</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/DwdYWFGW/blackdress.png"
              alt="blackdress-img"
            />
            <p className="text-left text-lg">Black Dress</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default WomenSection;
