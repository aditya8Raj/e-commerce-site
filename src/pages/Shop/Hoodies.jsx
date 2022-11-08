import React from "react";
import AddToCart from "../../components/AddToCartButton";
import Navbar from "../../components/Navbar";

const Hoodies = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800 dark:text-white">
        <h2 className="text-4xl pt-4 text-center">hoodies</h2>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/NSmNk6J/printedhoodie.png"
              alt="printedhoodie-img"
            />
            <p className="text-left text-lg">printed hoodie</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/hF4zCq6/woolenhoodie.png"
              alt="woolenhoodie-img"
            />
            <p className="text-left text-lg">woollen hoodie</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/qsTjcrZ/hoodieblack.png"
              alt="hoodieblack-img"
            />
            <p className="text-left text-lg">black hoodie</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/qdDwr4s/yellohoodie.png"
              alt="yellowhoodie-img"
            />
            <p className="text-left text-lg">yellow hoodie</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/Z2KvprX/hoodiewithtext.png"
              alt="hoodiewithtext-img"
            />
            <p className="text-left text-lg">hoodie with text</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/g9my4Gf/blackzipuphoodie.png"
              alt="blackzipuphoodie-img"
            />
            <p className="text-left text-lg">black zip-up hoodie</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hoodies;
