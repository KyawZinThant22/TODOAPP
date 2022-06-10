import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { actions } from "./Actions";
export const Store = createContext();

const initialState = {
  tasks: {
    task: Cookies.get("task") ? JSON.parse(Cookies.get("task")) : [],
  },
  mode: Cookies.get("darkMode") === "ON" ? true : false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.DARK_MODE_ON:
      return { ...state, mode: true };
    case actions.DARK_MODE_OFF:
      return { ...state, mode: false };
    case actions.INPUT_CHANGE:
      return { ...state, input: action.payload };
    case actions.ADD_TASK:
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
      const taskToggle = JSON.parse(Cookies.get("task")).map((task) => {
        if (task.id === taskId) {
          task.check = !task.check;
        }
        return task;
      });
      Cookies.set("task", JSON.stringify(taskToggle));
      return { ...state, tasks: { task: taskToggle } };
    case "DELETE_TASK":
      const taskDelete = state.tasks.task.filter(
        (task) => task.id !== action.payload
      );
      Cookies.set("task", JSON.stringify(taskDelete));
      return { ...state, tasks: { task: taskDelete } };
    case "CLEAR_COMPLETED":
      const taskClear = JSON.parse(Cookies.get("task")).filter(
        (task) => !task.check
      );
      Cookies.set("task", JSON.stringify(taskClear));
      return { ...state, tasks: { task: taskClear } };
    case "FILTER_ACTIVE":
      const taskFilter = JSON.parse(Cookies.get("task")).filter(
        (task) => !task.check
      );
      return { ...state, tasks: { task: taskFilter } };
    case "FILTER_ALL":
      return { ...state, tasks: { task: JSON.parse(Cookies.get("task")) } };
    case "FILTER_COMPLETED":
      const taskFilterCompleted = JSON.parse(Cookies.get("task")).filter(
        (task) => task.check
      );
      if (taskFilterCompleted.length === 0) {
        alert("No completed tasks");
        return { ...state, tasks: { task: state.tasks.task } };
      }
      return { ...state, tasks: { task: taskFilterCompleted } };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
