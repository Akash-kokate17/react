import React, { useRef } from "react";

export function FormDemo2(props) {
    let myRef1 = useRef('');
    let myRef2 = useRef('');

    let changeHandler = (e) =>{
     e.preventDefault();
      let fname = myRef1.current.value;
      let lname = myRef2.current.value;
      console.log(fname,lname)
    }
  return <>
 <form onSubmit={changeHandler}>
 <input defaultValue={'akash'} ref={myRef1}/>
  <input defaultValue={'kokate'} ref={myRef2}/>
  <button>submit</button>
 </form>
  </>;
}
