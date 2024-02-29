import React, { useState } from "react";

export function FormDemo1(props) {
    let[fname, setFname] = useState('akash');
    let[lname,setLname] = useState('kokate')

    let submitHandler = (e) =>{
         e.preventDefault()
         console.log(fname,lname)
    }
  return <>
<form onSubmit={submitHandler}>
<input name='fname' value={fname} onChange={(e)=>{setFname(e.target.value)}}/>
  <input name="lname" value={lname} onChange={(e)=>{setLname(e.target.value)}}/>
  <button>Submit</button>
</form>
  </>;
}
