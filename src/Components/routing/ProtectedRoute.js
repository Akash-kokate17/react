import React from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({children}) {  // children as component
 let role = 'admin'

 if(role === 'student'){
  alert('you are not admin')
  return <Navigate to="/home" replace/>
 }
 return children;
}
