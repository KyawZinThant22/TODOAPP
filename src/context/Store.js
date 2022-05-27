import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

export const Store = createContext();

const initialState = {
  tasks: {
    task: Cookies.get("task") ? JSON.parse(Cookies.get("task")) : [],
  },
  mode: Cookies.get("darkMode") === "ON" ? true : false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DARK_MODE_ON":
      return { ...state, mode: true };
    case "DARK_MODE_OFF":
      return { ...state, mode: false };
    case "INPUT_CHANGE":
      return { ...state, input: action.payload };
    case "ADD_TASK":
      const addTask = action.payload;
      addTask.id = uuidv4();
      // const existedTask = state.tasks.task.find(
      //   (task) => task.task === addTask.task
      // );
      const TODO = [...state.tasks.task, addTask];
      Cookies.set("task", JSON.stringify(TODO));
      return {
        ...state,
        tasks: { task: TODO },
      };
    case "DROP_TASK":
      const item = action.payload.dragItemID;
      const task = state.tasks.task.filter((task) => task.id !== item);
      Cookies.set("task", JSON.stringify(task));
      return { ...state, tasks: { task: task } };
    case "TOGGLE_TASK":
      const taskId = action.payload;
      const taskToggle = state.tasks.task.map((task) => {
        if (task.id === taskId) {
          task.check = !task.check;
        }
        return task;
      });
      Cookies.set("task", JSON.stringify(taskToggle));
      return { ...state, tasks: { task: taskToggle } };
    case "DELETE_TASK":
      console.log(action.payload);
      const taskDelete = state.tasks.task.filter(
        (task) => task.id !== action.payload
      );
      console.log(taskDelete);
      Cookies.set("task", JSON.stringify(taskDelete));
      return { ...state, tasks: { task: taskDelete } };

    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
