import { useState } from "react";
import Item from "./Items";

const FoodItems = ({ itemList }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (items, event) => {
    let newItems = [...activeItems, items];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {itemList.map((items) => (
        <Item
          key={items}
          foodItem={items}
          bought={activeItems.includes(items)}
          handleBuyButton={(event) => onBuyButton(items, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
