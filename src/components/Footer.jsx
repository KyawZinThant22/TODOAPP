import React, { useContext, useState } from "react";
import { Store } from "../context/Store";

function Footer() {
  const { state, dispatch } = useContext(Store);
  const { mode } = state;

  const filterActive = () => {
    dispatch({ type: "FILTER_ACTIVE" });
  };
  const filterAll = () => {
    dispatch({ type: "FILTER_ALL" });
  };

  const filterCompleted = () => {
    dispatch({ type: "FILTER_COMPLETED" });
  };
  return (
    <div
      className={`p-4 justify-center flex sm:w-8/12 w-9/12 mx-auto shadow-md md:shadow-none md:mt-0 mt-8 rounded-md ${
        mode
          ? "bg-VeryDarkDesaturatedBlue text-LightGrayishBlue"
          : "bg-VeryLightGray text-DarkGrayishBlue"
      }`}
    >
      <div className={`font-semibold flex space-x-11 justify-center`}>
        <span onClick={filterAll} className="cursor-pointer">
          All
        </span>
        <span onClick={filterActive} className="cursor-pointer">
          Active
        </span>
        <span onClick={filterCompleted} className="cursor-pointer">
          Completed
        </span>
      </div>
    </div>
  );
}

export default Footer;
