import React, { useContext } from "react";
import { Store } from "../context/Store";

function AddTodo() {
  const { input, dispatch, mode } = useContext(Store);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="">
      <div>
        <form onSubmit={handleSubmit} className=" absolute md:left-1/3">
          <button className="border absolute rounded-full w-5 h-5 md:top-[68px] top-15 top-[60px] text-LightGrayishBlue left-10 z-10 ml-3"></button>
          <input
            type="text"
            className={`p-3 absolute left-8 w-80 pl-12 top-12  md:pl-14 mx-auto rounded-md focus:outline-none md:w-[33rem] md:p-5 md:px-8 ${
              mode === "true"
                ? "bg-VeryDarkBlue text-VeryLightGray"
                : "bg-VeryLightGray text-VeryDarkBlue"
            }  `}
            placeholder="Create a new todo.."
            value={input}
            onChange={(e) =>
              dispatch({ type: "INPUT_CHANGE", payload: e.target.value })
            }
          />
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
