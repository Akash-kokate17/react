import React, { useState } from "react";

export default  function CounterHOC(InputComponent) {
 
    function UpdateCounter(){
     let[count,setCounter] = useState(0)

     let increment = () =>{
        setCounter(count + 1)
     }
   return  <InputComponent count={count} increment={increment}/>
    }
    return UpdateCounter;
}
