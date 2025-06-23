import Chai from "./chai";

function App() {
  return (

    /* There is problem only one element can be returned so we wrap all the element into a unnamed div
    
    Before using any component we have to import it. Like here Chai is imported.
    */
    <>
      <Chai />
      <h2>Hello!, lets have a cup of tea</h2>
    </>
  );
}

export default App;
