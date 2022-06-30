import React from "react";
import AddToCart from "../../components/AddToCartButton";
import Navbar from "../../components/Navbar";
<AddToCart />;

const Mens = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800 dark:text-white">
        <h2 className="text-4xl pt-4 text-center">mens</h2>
        <div className="flex flex-wrap p-4 justify-center">
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/pTKqfrtD/floralshirt.png"
              alt="floraltshirt-img"
            />
            <p className="text-left text-lg ">floral shirt</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/Qx807jYT/camovest.png"
              alt="camovest-img"
            />
            <p className="text-left text-lg">camo vest</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/zfgjNvv9/yellowtshirt.png"
              alt="yellotshirt-img"
            />
            <p className="text-left text-lg">yellow t-shirt</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/NMvxjtrL/whiteandblacktshirt.png"
              alt="whiteandblacktshirt-img"
            />
            <p className="text-left text-lg">white & black t-shirt</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/1t46RyG1/adidastshirt.png"
              alt="adidastshirt-img"
            />
            <p className="text-left text-lg">adidas t-shirt</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
          <div className="p-3 bg-white dark:bg-gray-800">
            <img
              className="w-48 h-64 hover:border-4 hover:border-black"
              src="https://i.postimg.cc/zB6NbYQg/roundsunglasses.png"
              alt="roundsunglasses-img"
            />
            <p className="text-left text-lg">round sunglasses</p>
            <p className="text-left text-lg">₹599</p>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mens;
