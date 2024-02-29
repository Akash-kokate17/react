import React, { useState } from "react";
import CounterHOC from "./CounterHOC";

 function HoverCounter({count,increment}) {
//   let [count, setCounter] = useState(0);

//   let increment = () => {
//     setCounter(count + 1);
//   };
  return (
    <>
      <h2>counter count onMouseOver {count}</h2>
      <button className="btn btn-primary ms-2" onMouseOver={increment}>
        click
      </button>
    </>
  );
}
export default CounterHOC(HoverCounter)