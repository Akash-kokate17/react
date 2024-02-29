import React, { useRef } from "react";

export function UseRefDemo(props) {
  let inputRef1 = useRef();
  let inputRef2 = useRef();

  let addition = () =>{
     let num1 = +inputRef1.current.value;
     let num2 = +inputRef2.current.value;
     alert(num1 + num2)

  }
  return (
    <>
      <div>
        name: <input ref={inputRef1} />
        lastName : <input ref={inputRef2} />
        <button onClick={addition} className="btn btn-primary ms-4">Add</button>
      </div>
    </>
  );
}
