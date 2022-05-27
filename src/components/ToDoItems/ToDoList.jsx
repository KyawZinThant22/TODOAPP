import React, { useContext, useState } from "react";
import { Store } from "../../context/Store";
import Footer from "../Footer";
import Check from "../../assets/svg/icon-check.svg";
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



function ToDoList() {
  const { state, dispatch } = useContext(Store);
  const [check , setCheck ] = useState(false);
  const { mode } = state;

  console.log(check)

  return (
    <div className="relative flex items-center justify-center">
      <div className="shadow-md md:shadow-none w-10/12 mt-6 divide-y flex flex-col justify-center md:items-center">
        {Sampledata.map((item, index) => {
          return (
            <div
              key = { index }
              className={`text-xl w-full p-4 md:text-xl md:w-[35rem]  ${
                mode
                  ? "bg-VeryDarkDesaturatedBlue text-LightGrayishBlue"
                  : "bg-VeryLightGray text-VeryDarkBlue"
              }  ${index === Sampledata.length && "border-0"} ${
                index === 0 && "rounded-t-lg"
              }`}
            >
              <div className="flex space-x-6 items-center">
               {check ? (
                  <img 
                  onClick={() => setCheck(false)}
                  src={Check}
                  alt="check"
                  className="text-fuchsia-600"
               />
        
                  
               ):(

                 <button
                  onClick={() => setCheck(!check)}
                  className={`   ml-2 left-[52px] md:left-[38%]  border rounded-full w-6 h-5 ${"text-LightGrayishBlue"} z-10 `}
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
          } text-sm flex justify-between rounded-b-lg p-6 items-center md:w-[35rem]`}
        >
          <span>
            {
              Sampledata.filter((item) => {
                return !item.check;
              }).length
            }{" "}
            items left
          </span>
          
              <div className="hidden md:flex">
              <Footer/>
              </div>
          
          
          <span className="cursor-pointer">Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
