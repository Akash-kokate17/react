import React, { useEffect, useState } from 'react';
import axios from 'axios'
import UserCard from '../Card/UserCard';
import WithLogger from '../HOC/LoggerHOC';

function AxiosDemo1(){
    const[users,setUsers] = useState([]);
    const[isLoading, setLoading] = useState(false)

    let fetchUsers = async() =>{
        let url = 'https://jsonplaceholder.typicode.com/users/';
        let response = await axios.get(url)
        console.log(response)
        setUsers(response.data)
        setLoading(false)
    }

    useEffect(()=>{
        setLoading(true)
        fetchUsers()
    },[])
    return <>   
    <div className='container'>
        <div className='row'>
           {
           isLoading?
           <h6 className='spinner-border text-danger'></h6>
           :
           users.map((user)=>{
            return <UserCard user={user} key={user.id}/>
        })
           }
        </div>
    </div>
    </>
}

export default WithLogger(AxiosDemo1)