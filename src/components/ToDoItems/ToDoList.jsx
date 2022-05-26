import React, { useContext, useState } from "react";
import { Store } from "../../context/Store";

const Sampledata = [
  {
    task: "Complete online JavaScript course",
    check: true,
  },
  {
    task: "Learn SQL in JavaScript",
    check: false,
  },
  {
    task: "Learn MongoDb in JavaScript",
    check: false,
  },
  {
    task: "Complete Todo App on Frontend Mentor",
    check: false,
  },
  {
    task: "Read books",
    check: false,
  },
];
console.log();

function ToDoList() {
  const { state, dispatch } = useContext(Store);
  const { mode } = state;
  return (
    <div className="relative flex items-center justify-center">
      <div className="shadow-md w-10/12 mt-6 divide-y flex flex-col justify-center">
        {Sampledata.map((item, index) => {
          return (
            <div
              className={`text-xl w-full p-4 md:text-xl ${
                mode
                  ? "bg-VeryDarkDesaturatedBlue text-LightGrayishBlue"
                  : "bg-VeryLightGray text-VeryDarkBlue"
              }  ${index === Sampledata.length && "border-0"} ${
                index === 0 && "rounded-t-lg"
              }`}
            >
              <div className="flex space-x-6 items-center">
                <button
                  className={`ml-2 left-[52px] md:left-[38%] border rounded-full w-6 h-5 ${"text-LightGrayishBlue"} z-10`}
                ></button>

                <div className="flex w-full justify-between items-center">
                  <span
                    className={`text-sm ${
                      mode
                        ? "bg-VeryDarkDesaturatedBlue text-LightGrayishBlue"
                        : "bg-VeryLightGray text-VeryDarkBlue"
                    }`}
                  >
                    {item.task}
                  </span>
                  <span className="cursor-pointer">x</span>
                </div>
              </div>
            </div>
          );
        })}
        <div
          className={`${
            mode
              ? "bg-VeryDarkDesaturatedBlue text-LightGrayishBlue"
              : "bg-VeryLightGray text-VeryDarkBlue"
          } text-sm flex justify-between rounded-b-lg p-6`}
        >
          <span>
            {
              Sampledata.filter((item) => {
                return !item.check;
              }).length
            }{" "}
            items left
          </span>
          <span className="">Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
