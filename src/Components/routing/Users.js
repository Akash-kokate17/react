import React from "react";
import userArr from './UsersData.json'
import { createSearchParams, useNavigate } from "react-router-dom";

export default function Users(props) {
    let navigate = useNavigate()

let goToUserDetails = (name, city, email,phone) =>{
let obj = {
    pathname : "/userDetail",
    search : `?${createSearchParams({name,city,email,phone})}`
}
navigate(obj)
}

  return <>
   <h2 className='text-center'>User List</h2>
        <hr />

        <div className='container'>
            <div className='row'>
                {userArr.map(user => {
                    let {name, email,address,phone} = user
                    return <div className='col-sm-3'>
                        <div className="card text-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZNQ6Pte02JNcAfeti0b-oiumHtdNOkXQrCZp7bfQYuxe44LbbaIN0MccovXN04stLDg&usqp=CAU" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">Email : {email}</p>
                                <p className="card-text">Address : {address.city}</p>
                                <p className="card-text">Phone : {phone}</p>
                                <button onClick={()=>{goToUserDetails(name,email,address.city,phone)}}>User Details</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
  </>;
}
