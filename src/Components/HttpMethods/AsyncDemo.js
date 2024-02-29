import React, { useEffect, useState } from "react";
import UserCard from "../Card/UserCard";

 function AsyncDemo(props) {
    const [users, setUsers] = useState([])

    let FetchUsers = async() =>{
        let url = 'https://jsonplaceholder.typicode.com/users/'
        let userUrl = await fetch(url)
        let response = await userUrl.json()
         console.log(response)
         setUsers(response)
    }

    useEffect(()=>{
        FetchUsers()
    },[])
  return <>
  <div className="container">
    <div className="row">
     {users.map((user)=>{
        return <UserCard user={user} key={user.id}/>
     })}
    </div>
  </div>
  </>;
}
export default React.memo(AsyncDemo)