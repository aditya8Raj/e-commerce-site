import React from "react";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800 dark:text-white">
        <h1 className="text-4xl pt-8 text-center underline">checkout</h1>
        <div className="flex-nowrap p-10 pb-80 justify-center text-center">
          <p>cart items shows here</p>
          <br />
          <p>a button at the end of cart items</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
