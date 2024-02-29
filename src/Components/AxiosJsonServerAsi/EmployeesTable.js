import React from "react";

export default function EmployeesTable({employees,deleteEmp}) {
  return <>
   <table className="table table-bordered table-striped table-responsive table-hover">
    <thead className="table-head">
     <tr className="text-center position-sticky top-0">
        <th>Id</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Delete</th>
     </tr>
    </thead>
    <tbody className="table-head">
{employees.map((employee)=>{
    return <tr key={employee.id} className="text-center">
         <td>{employee.id}</td>
    <td>{employee.name}</td>
    <td>{employee.username}</td>
    <td>{employee.email}</td>
    <td>{employee.phone}</td>
    <td><button className="btn btn-danger" onClick={()=>{deleteEmp(employee)}}>Delete</button></td>
    </tr>
})}
    </tbody>
</table>

  </>;
}
