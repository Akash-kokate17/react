import axios from "axios";
import React, { useEffect, useState } from "react";
import WithLogger from "../HOC/LoggerHOC";
 

 function AxiosDemo3(props) {
    let userNames = ['mojombo','defunkt','pjhyett','wycats'];
    let [githubUsers,setGitHubUsers] = useState([])

    let fetchUsers = async()=>{
        let promiseArr = [];
       for(let userName of userNames){
        let promises = await axios.get(`https://api.github.com/users/${userName}`)
        promiseArr.push(promises)
       }
       let response = await axios.all(promiseArr);
       response = response.map(res=>res.data)
       console.log(response)
       setGitHubUsers(response)
    }
useEffect(()=>{
    fetchUsers()
},[])
  return <>
   <table className="table table-bordered table-responsive table-striped">
    <tbody>
        {
            githubUsers.map((user)=>{
                return <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.company}</td>
                      <td>{user.followers}</td>
                      <td>{user.location}</td>
                      <td>{user.type}</td>    
                </tr>
            })
        }
    </tbody>
   </table>
  </>;
}
export default WithLogger(AxiosDemo3)