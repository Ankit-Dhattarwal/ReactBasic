import { useState, useRef } from "react";
import { MdAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  //   const [todoName, setTodoName] = useState("");
  //   const [dueDate, setDueDate] = useState("");
  const TodoNameElement = useRef();
  const DueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdate.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpadtes are: ${noOfUpdate.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = TodoNameElement.current.value;
    const dueDate = DueDateElement.current.value;
    TodoNameElement.current.value = "";
    DueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row todo-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={TodoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={DueDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success todo-button">
            <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
