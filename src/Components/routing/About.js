import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export function About(props) {
  let navigate = useNavigate();

  let goToHomePage = () =>{
    console.log('use navigate is process...')
     navigate('/home')
  };

  return <>this is about component;
  <a href="/home">go to home</a>
  <NavLink to="/home" className='m-1'>go to home page</NavLink>
  <button onClick={goToHomePage}>go to home function</button>
  <button onClick={()=>navigate(-1)}>go to prev page</button>
  <button onClick={()=>navigate(2)}>go to prev page</button>
  </> 
}
