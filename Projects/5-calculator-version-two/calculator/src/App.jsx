import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./Compoments/ButtonContainer";
import Display from "./Compoments/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (textButton) => {
    if (textButton === "C") {
      setCalVal("");
    } else if (textButton === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + textButton;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
