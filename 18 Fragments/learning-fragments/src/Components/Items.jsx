/// This is 1st method

import styles from "./Items.module.css";

const Item = (props) => {
  return (
    <li className={`${styles["pure-item"]}`}>
      <span className={styles["item-span"]}>{props.foodItem}</span>
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
