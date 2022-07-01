import React from "react";
import Navbar from "../components/Navbar";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800 dark:text-white flex flex-wrap justify-center p-10">
        <div className="justify-center flex flex-wrap p-2 mb-20">
          <div className="iAlreadyHaveAccount">
            <h1 className="pt-8 pr-8 text-2xl text-left font-extrabold">
              i have an account
            </h1>
            <h3 className="text-sm text-slate-400 text-left pb-8">
              sign in with your email and password
            </h3>
            <input
              type="email"
              placeholder="Email"
              className="bg-white dark:bg-gray-800 dark:text-white border-b-8 border-black w-60 font-mono"
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="bg-white dark:bg-gray-800 dark:text-white border-b-8 border-black w-60 font-mono"
            />
            <br />
            <br />
            <button
              type="button"
              className="text-black hover:text-white border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-extrabold rounded-lg text-sm inline-flex dark:border-black dark:text-white dark:hover:text-white dark:hover:bg-black dark:focus:black border-2 pl-4 pt-2 pb-2 pr-4"
            >
              sign in
            </button>
            <button
              type="button"
              className="text-black hover:text-white border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-extrabold rounded-lg text-sm inline-flex dark:border-black dark:text-white dark:hover:text-white dark:hover:bg-black dark:focus:black border-2 pl-4 pt-2 pb-2 pr-4 text-center mr-2 mb-2 ml-4"
            >
              sign in with google
            </button>
          </div>
          <div className="iDontHaveAccount pl-16">
            <h1 className="pt-8 pr-8 text-2xl text-left font-extrabold">
              i do not have an account
            </h1>
            <h3 className="text-sm text-slate-400 text-left pb-8">
              sign up with your email and password
            </h3>
            <input
              type="text"
              placeholder="Display Name"
              className="bg-white dark:bg-gray-800 dark:text-white border-b-8 border-black w-60 font-mono"
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="Email"
              className="bg-white dark:bg-gray-800 dark:text-white border-b-8 border-black w-60 font-mono"
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="bg-white dark:bg-gray-800 dark:text-white border-b-8 border-black w-60 font-mono"
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-white dark:bg-gray-800 dark:text-white border-b-8 border-black w-60 font-mono"
            />
            <br />
            <br />
            <button
              type="button"
              className="text-black hover:text-white border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-extrabold rounded-lg text-sm inline-flex dark:border-black dark:text-white dark:hover:text-white dark:hover:bg-black dark:focus:black border-2 pl-4 pt-2 pb-2 pr-4"
            >
              sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
