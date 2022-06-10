import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import React, { useContext, useState } from "react";
import { Store } from "./context/Store";
import Footer from "./components/Footer";

function App() {
  const { state, dispatch } = useContext(Store);
  const { mode } = state;
  const [dragItemID, setDragItemID] = useState(null);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    const action = { type: "DROP_TASK", payload: { dragItemID, mode } };
    dispatch(action);
    setDragItemID(null);
  };
  return (
    <div
      className={`h-screen relative w-screen ${
        mode ? "bg-VeryDarkBlue" : "bg-VeryLightGrayishBlue"
      } `}
    >
      <Header />
      <AddTodo />
      <ToDoList dragItemID={dragItemID} setDragItemID={setDragItemID} />
      <div className="md:hidden flex">
        <Footer />
      </div>

      <div
        className="mt-12"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "complete");
        }}
      >
        <p className="h-full py-12 w-full flex items-center justify-center text-lg text-DarkGrayishBlue font-semibold ">
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
}

export default App;
