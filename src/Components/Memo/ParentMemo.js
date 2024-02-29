import React, { useState } from "react";
import MemoA from "./MemoA";
import MemoB from "./MemoB";
import MemoC from "./MemoC";

export function ParentMemo(props) {
let[A , setA] = useState(10)
let[B, setB] = useState(20)
let[C , setC] = useState(30)
  return <>
  <div><button onClick={()=>setA(A + 1)}>A</button>
  <button onClick={()=>setB(B + 1)}>B</button>
  <button onClick={()=>setC(C + 1)}>C</button>
  </div>
  
   <MemoA a={A}/>
   <MemoB b={B}/>
   <MemoC c={C}/>
  </>;
}
