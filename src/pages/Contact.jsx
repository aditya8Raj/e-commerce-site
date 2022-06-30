import Navbar from "../components/Navbar";
import React from "react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800 dark:text-white">
        <h1 className="text-4xl pt-8 text-center underline">CONTACT US</h1>
        <div className="flex flex-wrap p-10 pb-80 justify-center">
          <div className="p-3 bg-white dark:bg-gray-800">
            <div className="mail p-2 text-center">
              <span>--</span>
              <a href="mailto:aditya8raj000@gmail.com" className="text-3xl">
                Mail
              </a>
              <span>--</span>
            </div>
            <div className="discord p-2 text-center">
              <span>--</span>
              <a href="https://discord.gg/hREy6mYrwx" className="text-3xl">
                Discord
              </a>
              <span>--</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
