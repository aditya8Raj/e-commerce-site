import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../../components/AddToCartButton";

const HoodiesSection = () => {
  return (
    <>
      <div className="hoodies">
        <Link to="/shop/hoodies">
          <h2 className="text-3xl pl-6 pt-4 underline">HOODIES</h2>
        </Link>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/NSmNk6J/printedhoodie.png"
              alt="printedhoodie-img"
            />
            <p className="text-left text-lg">Printed Hoodie</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/hF4zCq6/woolenhoodie.png"
              alt="woolenhoodie-img"
            />
            <p className="text-left text-lg">Woollen Hoodie</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/qsTjcrZ/hoodieblack.png"
              alt="hoodieblack-img"
            />
            <p className="text-left text-lg">Black Hoodie</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/Z2KvprX/hoodiewithtext.png"
              alt="hoodiewithtext-img"
            />
            <p className="text-left text-lg">Hoodie with text</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default HoodiesSection;
