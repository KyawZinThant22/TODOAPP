import React, { useContext, useEffect, useState, useRef } from "react";
import { Store } from "../context/Store";
import Checked from "../assets/svg/Whitecheck.svg";

function AddTodo() {
  const [check, setCheck] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { mode } = state;

  const inputRef = useRef();

  // Below useEffect will be refactored soon.
  useEffect(() => {
    const keyPressEvent = (e) => {
      if (e.keyCode === 13) {
        dispatch({
          type: "ADD_TASK",
          payload: { name: inputRef.current.value, check: check },
        });
        inputRef.current.value = "";
      }
    };
    inputRef.current.addEventListener("keydown", keyPressEvent);
    let parentInputRef = inputRef;
    return () => {
      parentInputRef.current.removeEventListener("keydown", keyPressEvent);
    };
  }, [check, dispatch]);

  return (
    <div className="relative mt-6 sm:w-8/12 w-9/12 mx-auto">
      <div
        className={`rounded-lg p-4 space-x-4 flex items-center ${
          mode
            ? "bg-VeryDarkDesaturatedBlue text-VeryLightGray"
            : "bg-VeryLightGray text-VeryDarkBlue"
        }`}
      >
        <img
          onClick={() => setCheck(!check)}
          src={check && Checked}
          alt=""
          className={`${
            check && "bg-gradient-check"
          } ml-2 md:left-[35.7%] border rounded-full z-10 w-7 h-6`}
        />

        <input
          type="text"
          className={`${
            mode
              ? "bg-VeryDarkDesaturatedBlue text-VeryLightGray"
              : "bg-VeryLightGray text-VeryDarkBlue"
          }text-xl w-full md:text-xl rounded-md focus:outline-none`}
          placeholder="Create a new todo.."
          ref={inputRef}
        />
      </div>
    </div>
  );
}

export default AddTodo;
