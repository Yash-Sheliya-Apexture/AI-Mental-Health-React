import React, { useState } from "react";
import icon1 from "../Images/email.svg";
import icon2 from "../Images/54-telephone.svg";
import logo from "../Images/Logo.svg";
import MainMenu from "../Components/MainMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false); // State to toggle menu

  const handleMenuClick = () => {
    setShowMenu(!showMenu); // Toggle the menu visibility
  };

  return (
    /* Header Section Start */
    <div className="p-4 relative z-10">
      <header className="bg-Mindful-Gray rounded-full p-3 sm:p-4 flex items-center justify-between relative cursor-pointer">
        {/* Left Side (Icons) */}
        <div className="flex space-x-2 order-2 sm:order-1 sm:w-auto sm:justify-start lg:flex xs:hidden">
          <button className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center">
            <img src={icon1} alt="icon-1" />
          </button>
          <button className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center">
            <img src={icon2} alt="icon-2" />
          </button>
        </div>

        {/* Center (Logo) */}
        <div className="order-1 sm:order-2 sm:w-auto flex justify-center my-3 sm:my-0">
          <img src={logo} alt="Logo Website" className="w-auto lg:h-8 h-6" />
        </div>

        {/* Right Side (Main Menu) */}
        <div
          className="flex items-center space-x-2 order-3 sm:order-3 sm:w-auto justify-center sm:justify-end"
          onClick={handleMenuClick}
        >
          <span className="font-semibold lg:text-lg leading-5 text-[#4B3425] text-sm">
            Main Menu
          </span>
          <div className="w-3 h-3 rounded-full bg-[#926247]"></div>
        </div>
      </header>
      {/* Conditionally Render Menu Component */}
      {showMenu && <MainMenu />}
    </div>

    /* Header Section End */
    
  );
};

export default Header;

