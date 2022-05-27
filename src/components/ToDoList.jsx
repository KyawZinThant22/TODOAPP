import { Store } from "../../context/Store";
import Footer from "../Footer";
import Check from "../../assets/svg/icon-check.svg";
import Checked from "../../assets/svg/Whitecheck.svg";
import Delete from "../../assets/svg/icon-cross.svg";
import React, { useContext, useState } from "react";

function ToDoList({ setDragItemID }) {
  const { state } = useContext(Store);
  const [check, setCheck] = useState(false);

  const {
    mode,
    tasks: { task },
  } = state;
  const onDragStart = (e, id) => {
    setDragItemID(id);
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="shadow-md md:shadow-none w-10/12 mt-6 divide-y flex flex-col justify-center md:items-center">
        {task.map((item, index) => {
          return (
            <div
              className={`cursor-pointer text-xl w-full p-4 md:text-xl ${
                mode
                  ? "bg-VeryDarkDesaturatedBlue text-LightGrayishBlue"
                  : "bg-VeryLightGray text-VeryDarkBlue"
              }  ${index === task.length && "border-0"} ${
                index === 0 && "rounded-t-lg"
              }`}
              key={index}
              draggable
              onDragStart={(e) => onDragStart(e, index)}
            >
              <div className="flex space-x-6 items-center">
                {check ? (
                  <>
                    <img
                      src={Checked}
                      onClick={() => setCheck(false)}
                      alt=""
                      className={`ml-2 left-[52px] md:left-[38%] border rounded-full z-10 bg-Gradient-Check w-6 h-6 p-1`}
                    />
                  </>
                ) : (
                  <button
                    onClick={() => setCheck(!check)}
                    className={`   ml-2 left-[52px] md:left-[38%]  border rounded-full w-6 h-6 ${"text-LightGrayishBlue"} z-10 `}
                  ></button>
                )}

                <div className="flex w-full justify-between items-center">
                  <span
                    className={`text-sm ${
                      mode
                        ? "bg-VeryDarkDesaturatedBlue text-LightGrayishBlue"
                        : "bg-VeryLightGray text-VeryDarkBlue"
                    }`}
                  >
                    {task.task}
                  </span>
                  {/* <span className="cursor-pointer"></span> */}
                  <img src={Delete} className="cursor-pointer" alt="delete" />
                </div>
              </div>
            </div>
          );
        })}
        <div
          className={`${
            mode
              ? "bg-VeryDarkDesaturatedBlue text-LightGrayishBlue"
              : "bg-VeryLightGray text-DarkGrayishBlue"
          } text-sm flex justify-between rounded-b-lg p-6 font-semibold`}
        >
          <span>
            {
              task.filter((task) => {
                return !task.check;
              }).length
            }{" "}
            items left
          </span>

          <div className="hidden md:flex">
            <Footer />
          </div>

          <span className="cursor-pointer">Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
