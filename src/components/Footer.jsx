import React, { useContext, useState } from "react";
import { Store } from "../context/Store";

function Footer() {
  const { state, dispatch } = useContext(Store);
  const { mode } = state;
  return (
    <div className="mt-8 mx-auto w-10/12 justify-between">
      <div
        className={`p-4 rounded-md font-semibold ${
          mode
            ? "bg-VeryDarkDesaturatedBlue text-LightGrayishBlue"
            : "bg-VeryLightGray text-VeryDarkBlue"
        } flex justify-evenly`}
      >
        <span className="cursor-pointer">All</span>
        <span className="cursor-pointer">Active</span>
        <span className="cursor-pointer">Completed</span>
      </div>
    </div>
  );
}

export default Footer;
