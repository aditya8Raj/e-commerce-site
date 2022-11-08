import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../../components/AddToCartButton";

const JacketsSection = () => {
  return (
    <>
      <div className="jackets">
        <Link to="/shop/jackets">
          <h2 className="text-3xl pl-6 pt-4 underline">JACKETS</h2>
        </Link>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/Tm57YfZ/blackjacket.png"
              alt="blackjacket-img"
            />
            <p className="text-left text-lg">Black Jacket</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/s13tYNf/bluewinterjacket.png"
              alt="bluewinterjacket-img"
            />
            <p className="text-left text-lg">Blue Winter Jacket</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/fqkSyj8/bluejeanjacket.png"
              alt="bluejeanjacket-img"
            />
            <p className="text-left text-lg">Blue Jean Jacket</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.ibb.co/d71FkXm/denimjacket.png"
              alt="denimjacket-img"
            />
            <p className="text-left text-lg">Denim Jacket</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default JacketsSection;
