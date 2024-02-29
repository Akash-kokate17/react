import React,{useState} from "react";

export function PureDemo3(props) {
    let [color,setColor] = useState('red')
    console.log('color is render()')
  return <>
  <h2>color is :{color} </h2>
  <button onClick={()=>{setColor('red')}}>click</button>
  </>;
}
