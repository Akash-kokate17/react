import React, { useState } from "react";
import  Counter  from "./Counter";
import  Todo  from "./Todo";

export function MemoParent(props) {
  let [counter, setCounter] = useState(0);
  let [todo, setTodo] = useState(["todo-1,todo,2"]);

 let addtodo = () =>{
    todo.push('new todo')
    setTodo([...todo])
 }
  return (
    <>
    <h1>parent memo</h1>
    <div>
        <button onClick={()=>setCounter(counter + 1)}>counter + 1</button>
        <button onClick={addtodo}> add todo </button>
    </div>
      <Counter Counter={counter} />
      =============================
      <Todo Todos={todo}/>
    </>
  );
}
