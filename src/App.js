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
    <div className={`${mode ? "bg-VeryDarkBlue" : ""} h-screen`}>
      <Header />
      <AddTodo />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;
