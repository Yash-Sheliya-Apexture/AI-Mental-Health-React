import React from "react";
import location from "../Images/location.svg";
import email from "../Images/email-1.png";
import telphone from "../Images/telephone.png";
import RightArrow from "../Images/arrow-right.svg";
import RightArrow1 from "../Images/arrow-right-1.svg";

const MainMenu = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[140vh] bg-[#926247] text-white -z-10 flex">
      {/* Left Navigation */}
      <div className="w-full lg:w-2/4 lg:p-10 xs:px-6 flex justify-center items-center -mt-20">
        <nav className="space-y-4 inline-block text-center lg:text-start">
          <a
            href="#home"
            className="flex items-center px-6 py-2 bg-[#4B3425] rounded-full font-semibold"
          >
            <div className="w-3 h-3 rounded-full bg-[#9BB068]"></div>
            <span className="px-6 py-2 text-[30px] lg:text-[48px] font-bold">
              Home
            </span>
          </a>
          <a
            href="#platform"
            className="block px-6 py-2 font-bold text-[36px] lg:text-[48px] rounded-full hover:bg-[#4B3425] hover:translate-x-5 transition-all duration-300"
          >
            Platform
          </a>
          <a
            href="#about"
            className="block px-6 py-2 font-bold text-[36px] lg:text-[48px] rounded-full hover:bg-[#4B3425] hover:translate-x-5 transition-all duration-200"
          >
            About Us
          </a>
          <a
            href="#blog"
            className="block px-6 py-2 font-bold text-[36px] lg:text-[48px] rounded-full hover:bg-[#4B3425] hover:translate-x-5 transition-all duration-200 "
          >
            Blog
          </a>
          <a
            href="#contact"
            className="block px-6 py-2 font-bold text-[36px] lg:text-[48px] rounded-full hover:bg-[#4B3425] hover:translate-x-5 transition-all duration-200 "
          >
            Contact Us
          </a>
        </nav>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex flex-1 flex-col justify-between mt-20">
        {/* Info Section */}
        <div className="space-y-4">
          <div className="mt-16 space-x-5 text-white uppercase text-[16px] font-extrabold tracking-wide">
            <span>Terms & conditions</span>
            <span>Privacy Policy</span>
          </div>
          <div className="pt-16">
            <h1 className="max-w-[450px] text-[36px] font-medium -tracking-wide leading-[44px]">
              Harnessing the power of AI technology to revolutionize mental
              health.
            </h1>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-10 justify-start items-start mt-16">
              <div className="">
                <div className="size-10 bg-[#6D4B36] rounded-full flex justify-center items-center">
                  <img src={location} alt="Location-Icon" />
                </div>
                <div className="mt-2 text-[20px] leading-9 font-medium">
                  <p>
                    456 Oak Avenue <br /> Springfield, IL 62704
                  </p>
                </div>
              </div>
              <div className="-mt-0.5 -ml-20">
                <div className="">
                  <div className="size-10 bg-[#6D4B36] rounded-full flex justify-center items-center">
                    <img src={telphone} alt="Location-Icon" />
                  </div>
                  <div className="mt-2 text-[20px] leading-9 font-medium">
                    <p>
                      +(555) 123-4567 <br /> +(123) 456-789-000
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="size-10 bg-[#6D4B36] rounded-full flex justify-center items-center">
                  <img src={email} alt="" />
                </div>
                <div className="mt-2 text-[20px] leading-9 font-medium">
                  <p>
                    inquiries@freud.ai <br /> work@freud.ai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end p-2">
          <div className="bg-white rounded-full p-1.5 flex justify-end space-x-3">
            <div className="bg-[#FF7348] text-white px-4 py-3 rounded-full flex items-center space-x-8">
              <button className="text-[18px] font-bold">Apple Store</button>
              <span className="size-12 bg-white rounded-full flex justify-center items-center">
                <img src={RightArrow} alt="Orange-Arrow" />
              </span>
            </div>
            <div className="bg-[#9BB068] text-white px-4 py-3 rounded-full flex items-center space-x-8">
              <button className="text-[18px] font-bold">Google Store</button>
              <span className="size-12 bg-white rounded-full flex justify-center items-center">
                <img src={RightArrow1} alt="Green-Arrow" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden absolute top-[550px] left-4">
        <div className="bg-white rounded-[30px] w-[90vw] h-[30vh]">
          <div className="flex flex-col items-center space-y-4 p-1.5">
            <a
              href="#"
              className="flex items-center justify-between w-full px-4 py-2 text-white bg-[#FE814B] rounded-full"
            >
              <span className="text-[18px] font-bold">Apple Store</span>
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                <img src={RightArrow} alt="" />
              </div>
            </a>

            <a
              href="#"
              className="flex items-center justify-between w-full px-4 py-2 text-white bg-green-500 rounded-full  hover:bg-green-600"
            >
              <span className="text-[18px] font-bold">Google Play</span>
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                <img src={RightArrow1} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
