import React, { useEffect, useState } from "react";
import UserCard from "../Card/UserCard";


export default function FetchDemo() {
    let[users, setUsers] = useState([]);
    let fetchUserData = () =>{
     let url = 'https://jsonplaceholder.typicode.com/users/'
     fetch(url)
     .then((response) => {
        response.json().then((users)=>{
            console.log(users)
            setUsers(users)
        })
      })
    }
    useEffect(()=>{
        fetchUserData()
    },[])
  return <>
<div className="container">
    <div className="row">
    {users.map((user)=>{
      return  <UserCard key={user.id} user={user}/>
    })}
    </div>
</div>
  </>;
}
