import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../../components/AddToCartButton";

const MensSection = () => {
  return (
    <>
      <div className="men">
        <Link to="/shop/mens">
          <h2 className="text-3xl pl-6 pt-4 underline">MENS</h2>
        </Link>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/pTKqfrtD/floralshirt.png"
              alt="floraltshirt-img"
            />
            <p className="text-left text-lg ">Floral Shirt</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/Qx807jYT/camovest.png"
              alt="camovest-img"
            />
            <p className="text-left text-lg">Camo Vest</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/zfgjNvv9/yellowtshirt.png"
              alt="yellotshirt-img"
            />
            <p className="text-left text-lg">Yellow T-Shirt</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/NMvxjtrL/whiteandblacktshirt.png"
              alt="whiteandblacktshirt-img"
            />
            <p className="text-left text-lg">White & Black Tshirt</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default MensSection;
