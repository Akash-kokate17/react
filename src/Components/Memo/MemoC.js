import React from "react";

 function MemoC({c}) {
    console.log('momoC rander()')
  return <>
  <div>MemoC : {c}</div>
  </>;
}
export default React.memo(MemoC)