/// This is 1st method

import styles from "./Items.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles["pure-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["item-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;

/*
-->  This is 2nd Method
const Item = (props) => {
  let {foodItem} = props;
  return <li className="list-group-item">{foodItem}</li>;
};

export default Item;

*/

/*
-->  This is 3rd Method
const Item = ({foodItem}) => {
  return <li className="list-group-item">{foodItem}</li>;
};

export default Item;

*/
