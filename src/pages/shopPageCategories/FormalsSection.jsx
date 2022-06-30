import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../../components/AddToCartButton";

const FormalsSection = () => {
  return (
    <>
      <div className="formals">
        <Link to="/shop/formals">
          <h2 className="text-3xl pl-6 pt-4 underline">FORMALS</h2>
        </Link>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/sDrdmjJD/blueformalpants.png"
              alt="blueformalpants-img"
            />
            <p className="text-left text-lg">Blue Formal Pants</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/FHH6C7km/womenformals.png"
              alt="womenformals-img"
            />
            <p className="text-left text-lg">Women Formals</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/mkSd8sbt/navyblueformals.png"
              alt="navyblueformals-img"
            />
            <p className="text-left text-lg">Navy Blue Formal</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/fy5KYfKd/formalshoes.png"
              alt="formalshoes-img"
            />
            <p className="text-left text-lg">Formal Shoes</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormalsSection;
