import Item from "./Items";

const FoodItems = ({ itemList }) => {
  return (
    <ul className="list-group">
      {itemList.map((items) => (
        <Item key={items} foodItem={items}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
