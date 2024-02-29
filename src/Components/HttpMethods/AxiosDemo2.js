import React, { useEffect, useState } from "react";
import client from "./ClientDemo2";
import UserCard from "../Card/UserCard";

 function AxiosDemo2(props) {
    let [users, setUsers] = useState([]);

    let fetchUsers= async()=>{
        let response = await client.get('/users')
        // console.log(response.data)  
        setUsers(response.data) 
    }

    let fetchComments = async () =>{
        let response = await client.get('/comments')
           console.log(response.data)
    }

    let fetchPhotos = async ()=>{
        let response = await client.get('/photos')
        // console.log(response)
    }

    useEffect(()=>{
        fetchUsers()
        fetchComments()
        fetchPhotos()
    },[])
  return <>
  <div className="container">
 <div className="row">
   {
    users.map((user)=>{
        return <UserCard key={user.id} user={user}/>
    })
   }
 </div>
  </div>
  </>;
}
export default React.memo(AxiosDemo2)