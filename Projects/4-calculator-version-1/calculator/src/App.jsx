import styles from "./App.module.css";
import ButtonsContainer from "./Compoments/ButtonContainer";
import Display from "./Compoments/Display";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
