import { useEffect, useState } from "react";
import {useHistory } from 'react-router-dom';
const UserList =(()=>{
    const [userList,setUserList] =useState();
    let history = useHistory();
    useEffect(async()=>{
const res= await fetch('https://roshni.free.beeceptor.com/getList');
const list = await res.json();
setUserList(list);
    },[]);
    const users = userList&&userList.map((user)=>{
        return (
        <tr key={user.id}> 
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.dob}</td>
            <td>{user.email}</td>
            <td><button type="button" className="btn btn-info" onClick={()=>history.push('/moreDetails')}>More...</button></td>
        </tr>
        )
    })
    return(
<div>
<table className="table">
<thead>
    <tr>
      
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Birth Date</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
    {users}
</table>
</div>
    )
})
export default UserList;
