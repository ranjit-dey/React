import { useState } from "react";
import "./App.css";

function App() {
  /* // program will run but the UI will not be updated
  let currentVal = 0;
  function increaseValue() {
    currentVal++;
    console.log('value add : ', Math.random())
  }
  function decreaseValue() {
    currentVal--;
  }
  */

  /* For the above issue we use hooks */
  /* useState take a argument which will be set as initial state  and it returns an array of two element , first one is the variable which will be change and second one is function which is used to change the state */

  let [counter, setCounter] = useState(0)

  function increaseValue(){
    if (counter == 20) return;
    setCounter(++counter);
  }
  function decreaseValue(){
    if (counter == 0) return;
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Counter Project Demo {counter}</h1>
      <p>Counter Value : {counter}</p>
      <button onClick={increaseValue}>
        Increase Value {counter}
      </button>
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
    </>
  );
}

export default App;
