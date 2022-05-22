import React from "react";
import Moon from "../assets/svg/icon-moon.svg";
import Sun from "../assets/svg/icon-sun.svg";
import { useInputContext } from "../Hook/UseInputContext";
function Header() {

  const { mode ,changeMode } = useInputContext();


  const toggleMode = () =>{
       changeMode(mode === 'VeryDarkBlue' ? 'VeryLightGray' : 'VeryDarkBlue')
  }

  return (
    <div className="">
      <div className={`absolute  ${mode === 'VeryDarkBlue' ? 'bg-mobile-dark' : 'bg-mobile-light'  } md:hidden h-1/3 w-screen bg-cover`}></div>
      <div className={`absolute   ${mode === 'VeryDarkBlue' ? 'bg-desktop-dark' : 'bg-desktop-light'  } hidden md:block h-1/3 w-screen bg-cover`}></div>
      <div className="pt-16 flex justify-center">
        <div className="relative w-5/6 flex justify-between  items-center md:w-[33rem] ">
          <h1 className="text-VeryLightGray text-4xl font-semibold tracking-wider md:text-5xl">
            TODO
          </h1>

          <img 
              className="w-6 h-6 " 
              onClick={toggleMode}
              src={mode === 'VeryDarkBlue' ? Sun : Moon} 
              alt="logo"
             />

        </div>
      </div>
    </div>
  );
}

export default Header;
