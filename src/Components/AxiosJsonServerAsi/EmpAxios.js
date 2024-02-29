import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployeesTable from "./EmployeesTable";
import { EmpAdd } from "./EmpAdd";


export function EmpAxios(props) {
    let [employees, setEmployees] = useState([])
     
    let fetchEmpData = async() =>{
        let response = await axios.get('http://localhost:4000/employees')
        console.log(response.data)
         setEmployees(response.data)
    }

    useEffect(()=>{
        fetchEmpData()
    },[]);

    let deleteEmp = async(employee)=>{
    let response = await axios.delete(`http://localhost:4000/employees/${employee.id}`)
    console.log(response ,'response')
  if(response.status === 200){
    setEmployees((prevEmp)=>prevEmp.filter((emp)=>emp.id !== employee.id))
  }else{
    console.log('error to delete')
  }
    };

    let addEmployee = async(emp) =>{
        emp.id = emp.id.toString()
        let response = await axios.post('http://localhost:4000/employees',emp)
      let check =  employees.every((employ)=> employ.id !== emp.id)
      if(check && emp.name !== '' && emp.email !== ''){
        setEmployees([...employees,emp])
      }
    }
  return <> 
  <h2 className="text-center">Employees Table</h2>
 <div className="container border border-3 p-3 rounded rounded-2 h-100vh">
    <div className="row">
    <div className="col-sm-8 overflow-y-scroll" style={{maxHeight:'500px'}}>
    <EmployeesTable employees={employees} deleteEmp={deleteEmp} />
    </div>
    <div className="col-sm-4 border-1">
    <EmpAdd addEmployee={addEmployee}/>  
    </div>
    </div>
 </div>
  </>;
}
