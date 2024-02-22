import { useState } from "react";
import { MdAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row todo-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success todo-button"
            onClick={handleAddButtonClicked}
          >
            <MdAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
