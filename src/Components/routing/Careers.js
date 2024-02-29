import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Careers(props) {
  return <>
  <h2>this is careers components</h2>
  <hr/>
 <div>
 <Link to="permanent" className="ms-4">PermanentJob</Link>
   <Link to="contract" className="ms-4">ContractJob</Link>
 </div>
   <Outlet />
  </>;
}
