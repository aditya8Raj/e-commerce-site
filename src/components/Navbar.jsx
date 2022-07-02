import React from "react";
import logo from "../assets/logo.png";
import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <Flowbite>
        <Navbar fluid={true}>
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} className="mr-3 h-20 sm:h-28" alt="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link>
              <Link to="/">
                <Button outline={true} gradientDuoTone="purpleToPink">
                  home
                </Button>
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link to="/shop">
                <Button outline={true} gradientDuoTone="purpleToPink">
                  shop
                </Button>
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link to="/contact">
                <Button outline={true} gradientDuoTone="purpleToPink">
                  contact
                </Button>
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link to="/cart">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
                >
                  <svg
                    className="w-5 h-5 mr-2 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                  <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                    0
                  </span>
                </button>
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link to="/signin">
                <Button gradientDuoTone="redToYellow">
                  <div className="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      className="absolute w-8 h-8 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </Button>
              </Link>
            </Navbar.Link>
            <DarkThemeToggle />
          </Navbar.Collapse>
        </Navbar>
        <hr className="divide" />
      </Flowbite>
    </>
  );
};

export default navbar;
