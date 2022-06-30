import React from "react";
import AddToCart from "../../components/AddToCartButton";
import Navbar from "../../components/Navbar";

const Hats = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800 dark:text-white">
        <h2 className="text-4xl pt-4 text-center">hats</h2>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/QtXBXg39/baseballcap.png"
              alt="baseballcap-img"
            />
            <p className="text-left text-lg">baseball cap</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/VL3dSPwc/toque.png"
              alt="toque-img"
            />
            <p className="text-left text-lg">toque(set of 5)</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/9M8fCvbK/cowboyhat.png"
              alt="cowboyhat-img"
            />
            <p className="text-left text-lg">brown cowboy hat</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/mkK2FC0S/sunhat.png"
              alt="sunhat-img"
            />
            <p className="text-left text-lg">sun hat</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/13Sxh2yH/blackhat.png"
              alt="blackhat-img"
            />
            <p className="text-left text-lg">black hat</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/SshVJFtT/creambaseballcap.png"
              alt="creambaseballcap-img"
            />
            <p className="text-left text-lg">cream baseball cap</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hats;
