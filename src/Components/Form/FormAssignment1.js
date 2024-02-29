import React, { useState,useEffect } from "react";
import Modal from 'react-modal'

export function FormAssignment1(props) {
    let states = ['Maharashtra', 'Rajasthan', 'bihar','U.P','keral','Telangana'];
    let cities = ['Pune',"Mumbai","Hyderabad",'bangalore',"kolkata",'Jaipur'];

    let studentsInfo = {firstName:'',lastName:'', age:0,state:'',city:'',email:''}
    let[student, setStudent] = useState(studentsInfo)
    let[flag,setFlag] = useState(true)
    let[modalIsOpen,setModalIsOpen] = useState(false)

    let submitHandle = (e) =>{
     e.preventDefault()
     openModal()
    } 
let closeModal = () => {
  setModalIsOpen(false)
  setStudent(studentsInfo)
}
    useEffect(()=>{
 let isFormFilled = Object.values(student).every((val)=>val !== '')
 setFlag(!isFormFilled)
    },[student])
  
    let changeInput = (e) =>{
      let{name,value} = e.target;
      setStudent({...student,[name]:value})
    }
    let openModal = () =>{
      setModalIsOpen(true)
    }

    let resetValue = () =>{
      setStudent(studentsInfo)
    }
  return <>
   <div className=" d-flex align-items-center justify-content-center container-fluid m-4 overflow-x-hidden">
    <form onSubmit={submitHandle} className="border border-2 col-sm-4 p-4 border rounded rounded-3">
      {/* name & lastName */}
        <div className="d-flex text-center fw-bold">
            <div className="col me-1">
           <p> <label>FirstName:</label></p>
        <input className="form-control text-center"  value={student.firstName} name="firstName" onChange={(e)=>{changeInput(e)}}/>
            </div>
            <div className="col">
           <p> <label>lastName:</label></p>
        <input className="form-control text-center"  value={student.lastName} name='lastName' onChange={(e)=>{changeInput(e)}}/>
            </div>
        </div>
      {/* mail & age */}
      <div className="d-flex text-center fw-bold">
        <div className="col me-1">
           <p> <label>Email:</label></p>
            <input className="form-control text-center"  type="email" value={student.email} name="email" onChange={(e)=>{changeInput(e)}}/>
        </div>
        <div className="col">
            <p ><label>Age:</label></p>
            <input className="form-control text-center" type="number" value={student.age} name="age" onChange={(e)=>{changeInput(e)}}/>
        </div>
      </div>
      {/* city & state */}
      <div className="d-flex text-center fw-bold">
        <div className="col me-1">
           <p> <label>State:</label></p>
            <input list="states" name="state" className="form-control text-center" value={student.state} onChange={(e)=>{changeInput(e)}}/>
           <datalist id="states">
             {states.map((state ,id)=>{
               return <option key={id}>{state}</option>
             })}
           </datalist>
            </div>
        <div className="col">
            <p ><label>City:</label></p>
            <input list='cities' className="form-control text-center" name='city' onChange={(e)=>{changeInput(e)}}/>
            <datalist id="cities">
              {cities.map((city,ind)=>{
                return <option key={ind}>{city}</option>
              })}
            </datalist>
        </div>
      </div>
      <div className="d-flex justify-content-evenly mt-3">
        <button className="btn btn-primary" disabled={flag}>Submit</button>
        <button className="btn btn-primary" type="reset" onClick={resetValue}>reset</button>
      </div>
    </form>
    <div>
      <button style={{display:'none'}} onClick={openModal}>Open Modal</button>
      <Modal
          isOpen={modalIsOpen}
          contentLabel="Example Modal">
        <h2 className="text-center">Student Data</h2>
       <table className="table table-bordered text-center">
        <thead className="mt-1 fw-bold text-danger">
          <tr>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Age</td>
            <td>Email</td>
            <td>State</td>
            <td>City</td>
          </tr>
        </thead>
        <tbody className="text-center fw-bold">
          <tr>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.age}</td>
            <td>{student.email}</td>
            <td>{student.state}</td>
            <td>{student.city}</td>
          </tr>
        </tbody>
       </table>
      <div className="d-flex justify-content-center"  >
      <button onClick={closeModal} className="btn btn-danger">close</button>
      </div>
      </Modal>
    </div>
   </div>
  </>;
}
