import React, { useState } from "react";
import CounterHOC from "./CounterHOC";

 function ClickCounter({count,increment}) {
    //   let [count, setCounter] = useState(0);

//   let increment = () => {
//     setCounter(count + 1);
//   };
  return <>
  <h2>counter count onClick :{count}</h2>
  <button className="btn btn-primary ms-2" onClick={increment}>click</button>
  </>;
}
export default CounterHOC(ClickCounter)