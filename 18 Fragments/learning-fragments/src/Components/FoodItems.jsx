import Item from "./Items";

const FoodItems = ({ itemList }) => {
  return (
    <ul className="list-group">
      {itemList.map((items) => (
        <Item
          key={items}
          foodItem={items}
          handleBuyButton={() => console.log(`${items} bought`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
