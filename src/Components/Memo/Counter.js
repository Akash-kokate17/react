import React from "react";

 function Counter({Counter}) {
    console.log('counter render()...')
  return <>
   <div>
   {Counter}
   </div>
  </>;
}
export default React.memo(Counter)