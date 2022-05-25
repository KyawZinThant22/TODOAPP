import React, { useContext, useState } from "react";
import { Store } from "../context/Store";
import Check from "../assets/svg/icon-check.svg";

function AddTodo() {
  const [check, setCheck] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { mode } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <div>
        <form onSubmit={handleSubmit} className="relative w-full">
          <div className="absolute w-full md:top-[68px] top-15 top-[20px] flex items-center justify-center">
            <div className="flex items-center w-full">
              {check ? (
                <img
                  onClick={() => setCheck(false)}
                  className={`ml-2 left-[52px] md:left-[38%] border absolute rounded-full w-6 h-6 z-10`}
                  src={Check}
                  alt="check"
                />
              ) : (
                <button
                  onClick={() => setCheck(!check)}
                  className={`ml-2 left-[52px] md:left-[38%] border absolute rounded-full w-6 h-6 ${
                    mode ? "text-LightGrayishBlue" : "text-DarkGrayishBlue"
                  } z-10`}
                ></button>
              )}

              <input
                type="text"
                className={`text-xl w-10/12 p-4 md:text-xl left-8 pl-16 md:pl-14 mx-auto rounded-md focus:outline-none md:w-[33rem] ${
                  mode === true
                    ? "bg-VeryDarkBlue text-VeryLightGray"
                    : "bg-VeryLightGray text-VeryDarkBlue"
                }  `}
                placeholder="Create a new todo.."
                onChange={(e) =>
                  dispatch({ type: "ADD_TASK", payload: e.target.value })
                }
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
