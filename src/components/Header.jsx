import React from "react";
import Moon from "../assets/svg/icon-moon.svg";
import Sun from "../assets/svg/icon-sun.svg";
function Header() {
  return (
    <div className="">
      <div className={`absolute bg-mobile-light h-1/3 w-screen bg-cover`}></div>
      <div className="pt-16 flex justify-center">
        <div className="relative w-5/6 flex justify-between items-center">
          <h1 className="text-VeryLightGray text-4xl font-semibold tracking-wider">
            TODO
          </h1>
          <img className="w-6 h-6" src={Moon} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
