import React from "react";

export function UseRefDemo2(props) {
    let useRef1;
    let useRef2;
    const add = () =>{
        let num1 = +useRef1.value;
        let num2 = +useRef2.value;
        alert(num1 + num2)
    }

  return <>
  <div>
    num1:<input  ref={inputBox=>{useRef1 = inputBox}}/>
    num2:<input ref={inputBox=>{useRef2 = inputBox }}/>
    <button onClick={add} className="btn btn-primary">Add</button>
  </div>
  </>;
}
