import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import { useInputContext } from "./Hook/UseInputContext";

function App() {
  const {mode} = useInputContext()
  return (
    <div className={`App  bg-${mode}`}>
      <Header />
      <AddTodo/>
    </div>
  );
}

export default App;
