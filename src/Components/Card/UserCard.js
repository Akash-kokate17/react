import React from "react";

export default function UserCard({user}) {
    let{name,phone,email,address:{city},company:{catchPhrase}} = user
  return <>
 <div className='col-sm-3'>
        <div className="card text-center mb-2">
            <img src="https://img.lovepik.com/element/45001/3052.png_860.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Email : {email}</p>
                <p className="card-text">Address : {city}</p>
                <p className="card-text">Phone : {phone}</p>
                <p className="card-text">catchPhrase : {catchPhrase}</p>
            <button className="btn btn-primary">Details</button>
            </div>
        </div>
    </div>
  </>;
}
