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
      className={`${
        mode ? "bg-VeryDarkBlue" : "bg-VeryLightGrayishBlue"
      } h-screen`}
    >
      <Header />
      <AddTodo />
      <ToDoList setDragItemID={setDragItemID} />
      <div
        className="h-1/6 py-10 text-center"
        onDrop={(e) => {
          onDrop(e, "complete");
        }}
        onDragOver={(e) => onDragOver(e)}
      >
        <span className="text-lg text-center text-DarkGrayishBlue font-semibold">
          Drag and drop to reorder list
        </span>
      </div>
    </div>
  );
}

export default App;
