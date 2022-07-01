import Navbar from "../components/Navbar";
import React from "react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800 dark:text-white pb-44">
        <h1 className="text-4xl pt-8 text-center underline">CONTACT US</h1>
        <div className="bg-white dark:bg-gray-800 dark:text-white">
          <form>
            <div className="flex justify-center gap-10 mt-8 mb-8">
              <input
                type="text"
                placeholder="firstname"
                className="p-4 bg-white dark:bg-gray-800 dark:text-white border-b-8 border-black"
              />
              <input
                type="text"
                placeholder="lastname"
                className="p-4 bg-white dark:bg-gray-800 dark:text-white border-b-8 border-black"
              />
            </div>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="email"
                className="p-4 bg-white dark:bg-gray-800 dark:text-white border-b-8 border-black"
              />
            </div>
            <div className="flex justify-center m-4 ">
              <textarea
                cols="50"
                rows="50"
                placeholder="feedback"
                className="bg-white dark:bg-gray-800 dark:text-white border-b-8 border-black"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
