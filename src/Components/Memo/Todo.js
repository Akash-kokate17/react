import React from "react";

 function Todo({Todos}) {
    console.log('todo render() ....')
  return <>
    <div>
        {Todos.map((todo,ind)=>{
            return <p key={ind}>{todo}</p>
        })}
    </div>
  </>;
}
export default React.memo(Todo)