import styles from "./FoodInput.module.css";

const FoodInput = (props) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onChange={props.handleOnChange}
    />
  );
};
export default FoodInput;
