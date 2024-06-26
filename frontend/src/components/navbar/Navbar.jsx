import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./Navlink";
import UserIconMenu from "./UserIconMenu";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
import { MyRoutes } from "../../common/common.config";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";

const Navbar = ({ userRole, screen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <nav className="bg-gray-800 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            {screen === MyRoutes.MY_TICKETS ||
            screen === MyRoutes.RAISED_TICKETS ? (
              <div className="flex items-center">
                <Logo />
                <NavLinks userRole={userRole} />
              </div>
            ) : (
              <button
                onClick={() => goBack()}
                className="flex items-center text-xl text-white hover:text-gray-300 "
              >
                <ArrowLeftIcon className="h-5 w-5 mr-1  " />
                Go Back
              </button>
            )}

            <UserIconMenu />
            <MenuButton toggleNavbar={toggleNavbar} />
          </div>
        </div>
        <MobileMenu isOpen={isOpen} />
      </nav>
    </>
  );
};

export default Navbar;
