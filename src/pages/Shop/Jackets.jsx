import React from "react";
import AddToCart from "../../components/AddToCartButton";
import Navbar from "../../components/Navbar";

const Jackets = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800 dark:text-white">
        <h2 className="text-4xl pt-4 text-center">jackets</h2>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/Tm57YfZ/blackjacket.png"
              alt="blackjacket-img"
            />
            <p className="text-left text-lg">black jacket</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/s13tYNf/bluewinterjacket.png"
              alt="bluewinterjacket-img"
            />
            <p className="text-left text-lg">blue winter jacket</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/fqkSyj8/bluejeanjacket.png"
              alt="bluejeanjacket-img"
            />
            <p className="text-left text-lg">blue jean jacket</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/d71FkXm/denimjacket.png"
              alt="denimjacket-img"
            />
            <p className="text-left text-lg">denim jacket</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/0tvJcVg/blackleatherjacket.png"
              alt="blackleatherjacket-img"
            />
            <p className="text-left text-lg">black leather jacket</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/9Y701S9/brownleatherjacket.png"
              alt="brownleatherjacket-img"
            />
            <p className="text-left text-lg">brown leather jacket</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jackets;
