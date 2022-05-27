import React, { useContext } from "react";
import Moon from "../assets/svg/icon-moon.svg";
import Sun from "../assets/svg/icon-sun.svg";
import { Store } from "../context/Store";
import Cookies from "js-cookie";

function Header() {
  const { state, dispatch } = useContext(Store);
  const { mode } = state;

  const toggleMode = () => {
    dispatch({ type: mode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !mode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  return (
    <div className="">
      <div
        className={`absolute ${
          mode === true ? "bg-mobile-dark" : "bg-mobile-light"
        } md:hidden h-2/5 w-screen bg-cover`}
      ></div>
      <div
        className={`absolute ${
          mode === true ? "bg-desktop-dark" : "bg-desktop-light"
        } hidden md:block h-1/3 w-screen bg-cover `}
      ></div>
      <div className="pt-16 flex justify-center">
        <div className="relative w-5/6 flex justify-between  items-center md:w-[33rem] ">
          <h1 className="text-VeryLightGray text-4xl font-semibold tracking-wider md:text-5xl">
            TODO
          </h1>

          <img
            className="w-6 h-6 cursor-pointer "
            onClick={toggleMode}
            src={mode === true ? Sun : Moon}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
