import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
/// Fragments & Mapping & Conditional Rendering & Passing Data via Props.

/// The main thing to learn is why use the extra div....
/// bcz you can return only one at a time so use extra div
/// if not use extra div then you try to return h2 and ul both that is not possible.. so use extra div

/// To avoid to use extra div now here come react fragments
/*
 <React.Fragment>     --> <>

</React.Fragment>    ---> </>
Left and Right side both are same things
*/

/// Key use karne ka main motive hai ki har baar rebulid na kare sara kuch or key se ussi ko bulid kare ga jiko bulid karne k jarurt hai

function App() {
  //let FoodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Milk", "Roti", "Salad", "Ghee"];

  let textToShow = "Food Item Enterend by User";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };

  // if (FoodItems.length === 0) {
  //   return <h3>I am still hungry.</h3>;
  // }

  /// Second method of ternary operator
  // let emptyMessage =
  //   FoodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

  return (
    <>
      <Container>
        <h2 className="food-Heading">Healthy Food</h2>
        {/* This is one way of ternary operator  {FoodItems.length === 0 ? <h3>I am still hungry.</h3> : null} */}

        {/* This is second method of ternary operatoremptyMessage*/}

        <ErrorMessage itemList={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}> </FoodInput>
        <p>{textToShow}</p>
        <FoodItems itemList={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>Above is the list of items that are good for your health.</p>
      </Container>
    </>
  );
}

export default App;
