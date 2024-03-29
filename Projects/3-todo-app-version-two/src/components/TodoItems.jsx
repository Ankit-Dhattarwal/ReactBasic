import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const todoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((items) => (
          <TodoItem todoDate={items.dueDate} todoName={items.name}></TodoItem>
        ))}
      </div>
    </>
  );
};

export default todoItems;
