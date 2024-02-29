import React from "react";
import { useState } from "react";

export function EmpAdd({addEmployee}) {
    let empObj = {id:'',name:'',username:'',phone:'',email:''}
    let[emp,setEmp] = useState(empObj)

    let onchangeHandler = (e) =>{
        let{name,value} = e.target;
        setEmp({...emp,[name]:value})
    };
    let afterAddEmployee = (emp) =>{
       addEmployee(emp)
       setEmp(empObj)
    }
  return <>
  <div className="d-flex justify-content-center border border-2 p-3 rounded-2">
    <div>
        <h3 className="text-danger text-center">Add Employee</h3>
        <div className="mb-1">
            <input  name="id" value={emp.id} onChange={(e)=>{onchangeHandler(e)}} className="form-control text-center" placeholder="Id"/>
        </div>
        <div className="mb-1">
            <input name="name" value={emp.name} onChange={(e)=>{onchangeHandler(e)}} className="form-control text-center" placeholder="Name"/>
        </div>
        <div className="mb-1">
            <input name="username" value={emp.username} onChange={(e)=>{onchangeHandler(e)}} className="form-control text-center" placeholder="UserName"/>
        </div>
        <div className="mb-1 ">
            <input name="email" value={emp.email} onChange={(e)=>{onchangeHandler(e)}} className="form-control text-center" placeholder="Email"/>
        </div>
        <div className="mb-1">
            <input name="phone" value={emp.phone} onChange={(e)=>{onchangeHandler(e)}} className="form-control text-center" placeholder="Phone No."/>
        </div>
        <div className="text-center">
            <button className="btn btn-primary" onClick={()=>{afterAddEmployee(emp)}}>Add</button>
        </div>
    </div>
  </div>
  </>;
}
