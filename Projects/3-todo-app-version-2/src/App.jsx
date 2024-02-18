import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "17/2/2024",
    },
    {
      name: "Go to College",
      dueDate: "17/2/2024",
    },
    {
      name: "Go to Market",
      dueDate: "17/2/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
