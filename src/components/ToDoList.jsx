import { Store } from "../context/Store";
import Footer from "./Footer";
import Checked from "../assets/svg/Whitecheck.svg";
import Delete from "../assets/svg/icon-cross.svg";
import React, { useContext, useState } from "react";

function ToDoList({ setDragItemID }) {
  const { state, dispatch } = useContext(Store);

  const {
    mode,
    tasks: { task },
  } = state;

  const onDragStart = (e, id) => {
    setDragItemID(id);
  };

  const toggleCheck = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="relative flex items-center justify-center sm:w-8/12 w-9/12 mx-auto">
      <div className="shadow-md md:shadow-none w-full mt-6 divide-y flex flex-col justify-center md:items-center">
        {task.map((task, index) => {
          return (
            <div
              className={`cursor-pointer text-xl w-full p-4 md:text-x md:w-[35rem] ${
                mode
                  ? "bg-VeryDarkDesaturatedBlue text-LightGrayishBlue"
                  : "bg-VeryLightGray text-VeryDarkBlue"
              } ${index === task.length && "border-0"} ${
                index === 0 && "rounded-t-lg"
              }`}
              key={task.id}
              draggable
              onDragStart={(e) => onDragStart(e, task.id)}
            >
              <div className="flex space-x-6 items-center">
                <img
                  src={task.check && Checked}
                  onClick={() => toggleCheck(task.id)}
                  alt=""
                  className={`ml-2 left-[52px] md:left-[38%] border rounded-full z-10 ${
                    task.check && "bg-gradient-check"
                  } w-7 h-6`}
                />

                <div className="flex w-full justify-between items-center">
                  <span
                    className={`text-sm ${task.check && "line-through"} ${
                      mode
                        ? "bg-VeryDarkDesaturatedBlue text-LightGrayishBlue"
                        : "bg-VeryLightGray text-VeryDarkBlue"
                    }`}
                  >
                    {task.name}
                  </span>
                  {/* <span className="cursor-pointer"></span> */}
                  <img
                    onClick={() => onDelete(task.id)}
                    src={Delete}
                    className="cursor-pointer"
                    alt="delete"
                  />
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
          } text-sm flex justify-between rounded-b-lg p-6 font-semibold w-full items-center`}
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

          <span onClick={clearCompleted} className="cursor-pointer">
            Clear Completed
          </span>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
