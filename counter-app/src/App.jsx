import { useState } from "react";
import "./App.css";

function App() {
 const[counter, setCounter]=useState(1);

 const addValue=()=>{
  setCounter(counter+1);
  console.log("add value")
 }

  const removeValue=()=>{
 setCounter(counter-1);
 console.log("remove value")
  }

  return (
    <>
      <h1>Mac with code</h1>
      <h2>counter Value:{counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}> Remove value {counter}</button>
    </>
  );
}

export default App;
