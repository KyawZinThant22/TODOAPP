import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import ToDoList from "./components/ToDoItems/ToDoList";
import React, { useContext, useState } from "react";
import { Store } from "./context/Store";
import Footer from "./components/Footer";

function App() {
  const { state, dispatch } = useContext(Store);
  const { mode } = state;

  return (
    <div
      className={`${
        mode ? "bg-VeryDarkBlue" : "bg-VeryLightGrayishBlue"
      } h-screen`}
    >
      <Header />
      <AddTodo />
      <ToDoList />
     <div className="md:hidden">
       <Footer/>
     </div>
    </div>
  );
}

export default App;
