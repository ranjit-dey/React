import { useState } from "react";

function App() {
  const [counter, changeCounter] = useState(0);

  const increaseVal = () => {
    /* // this code not increase the value by 3
    changeCounter(counter + 1);
    changeCounter(counter + 1);
    changeCounter(counter + 1);

    */

    // this code will increase the value by three
    /* Behind the scene the changeCounter take a callback if you give the callback then it will evaluate one by one*/
    changeCounter(prevCounter => prevCounter +1)
    changeCounter((prevCounter) => prevCounter +1)
    changeCounter(prevCounter => prevCounter +1)
  };

  const decreaseVal = () => {
    changeCounter(counter - 1);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-4xl font-black text-blue-600">
        Counter Project v2.O
      </h1>
      <p className="mt-3 bg-slate-300 px-3 rounded-md">
        Counter value : {counter}
      </p>
      <div className="w-48 flex justify-between mt-4">
        <button onClick={increaseVal}>Add +1</button>
        <button onClick={decreaseVal}>Subtract -1</button>
      </div>
    </div>
  );
}

export default App;
