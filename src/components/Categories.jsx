import React from "react";
import { Link } from "react-router-dom";
import BuyNowButton from "./BuyNowButton";

const Categories = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <div className="flex flex-wrap justify-center">
          {/* 1st category - hats section */}
          <div className="w-60 m-4 bg-white shadow-md dark:bg-gray-800 border-black border rounded-tl-xl rounded-br-xl">
            <img
              className="p-8 rounded-t-lg w-60 h-60 zoom"
              src="https://i.postimg.cc/K80vVscW/hats.png"
              alt="hat-img"
            />
            <div className="px-5 pb-5 text-center">
              <h5 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white pb-5">
                hats
              </h5>
              <div className="flex items-center justify-center">
                <Link to="/shop/hats">
                  <BuyNowButton />
                </Link>
              </div>
            </div>
          </div>
          {/* 2nd category - jackets section */}
          <div className="w-60 m-4 bg-white shadow-md dark:bg-gray-800 border-black border rounded-tl-xl rounded-br-xl">
            <img
              className="p-8 rounded-t-lg w-60 h-60 zoom"
              src="https://i.postimg.cc/xdYQ9J9h/jackets.png"
              alt="jackets-img"
            />
            <div className="px-5 pb-5 text-center">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-5">
                jackets
              </h5>
              <div className="flex items-center justify-center">
                <Link to="/shop/jackets">
                  <BuyNowButton />
                </Link>
              </div>
            </div>
          </div>
          {/* 3rd category - sneakers section */}
          <div className="w-60 m-4 bg-white shadow-md dark:bg-gray-800 border-black border rounded-tl-xl rounded-br-xl">
            <img
              className="p-8 rounded-t-lg w-60 h-60 zoom"
              src="https://i.postimg.cc/k5qtjd0V/sneakers.jpg"
              alt="sneakers-img"
            />
            <div className="px-5 pb-5 text-center">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-5">
                sneakers
              </h5>
              <div className="flex items-center justify-center">
                <Link to="/shop/sneakers">
                  <BuyNowButton />
                </Link>
              </div>
            </div>
          </div>
          {/* 4th category - formals section */}
          <div className="w-60 m-4 bg-white shadow-md dark:bg-gray-800 border-black border rounded-tl-xl rounded-br-xl">
            <img
              className="p-8 rounded-t-lg w-60 h-60 zoom"
              src="https://i.postimg.cc/QCvcpxwp/formals.png"
              alt="formals-img"
            />
            <div className="px-5 pb-5 text-center">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-5">
                formals
              </h5>
              <div className="flex items-center justify-center">
                <Link to="/shop/formals">
                  <BuyNowButton />
                </Link>
              </div>
            </div>
          </div>
          {/* 5th category - joggers section */}
          <div className="w-60 m-4 bg-white shadow-md dark:bg-gray-800 border-black border rounded-tl-xl rounded-br-xl">
            <img
              className="p-8 rounded-t-lg w-60 h-60 zoom"
              src="https://i.postimg.cc/gJxQQ1Rp/joggers.jpg"
              alt="joggers-img"
            />
            <div className="px-5 pb-5 text-center">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-5">
                joggers
              </h5>
              <div className="flex items-center justify-center">
                <Link to="/shop/joggers">
                  <BuyNowButton />
                </Link>
              </div>
            </div>
          </div>
          {/* 6th category - hoodies section */}
          <div className="w-60 m-4 bg-white shadow-md dark:bg-gray-800 border-black border rounded-tl-xl rounded-br-xl">
            <img
              className="p-8 rounded-t-lg w-60 h-60 zoom"
              src="https://i.postimg.cc/d3wbJw4j/hoodies.png"
              alt="hoodies-img"
            />
            <div className="px-5 pb-5 text-center">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-5">
                hoodies
              </h5>
              <div className="flex items-center justify-center">
                <Link to="/shop/hoodies">
                  <BuyNowButton />
                </Link>
              </div>
            </div>
          </div>
          <br />
          <hr />
        </div>
        <div className="flex flex-wrap justify-center">
          {/* 7th category - women section */}
          <div className="w-80 m-4 bg-white shadow-md dark:bg-gray-800 border-black border rounded-t-xl">
            <img
              className="p-8 rounded-t-lg "
              src="https://i.postimg.cc/xCjrHvmV/women.png"
              alt="women-img"
            />
            <div className="px-5 pb-5 text-center">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-5">
                women
              </h5>
              <div className="flex items-center justify-center">
                <Link to="/shop/women">
                  <BuyNowButton />
                </Link>
              </div>
            </div>
          </div>
          {/* 8th category - mens section */}
          <div className="w-80 m-4 bg-white shadow-md dark:bg-gray-800 border-black border rounded-t-xl">
            <img
              className="p-8 rounded-t-lg "
              src="https://i.postimg.cc/MKyB1DHK/men.jpg"
              alt="hatimage"
            />
            <div className="px-5 pb-5 text-center">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-5">
                men
              </h5>
              <div className="flex items-center justify-center">
                <Link to="/shop/mens">
                  <BuyNowButton />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
