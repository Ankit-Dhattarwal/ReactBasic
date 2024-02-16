function Random() {

  /// Here Random is reusable component that is use 4 and 5 times 

  let number = Math.random() * 100;

  /// Here note that user use two two times this {{}} for given style 
  /// Bcz one for expression 
   return <h4 style={{'background-color': '#738315'}}>
    This is Random Number: {Math.round(number)}
  </h4>
}
export default Random;