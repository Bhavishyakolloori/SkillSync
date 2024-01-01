import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from './contexts/LoginContext';
import axios from 'axios';

function Suggessions() {
let [profiles,setProfiles]=useState({})
let [currentUser,loginErr,loginStatus,loginUser,logoutUser]=useContext(LoginContext)

useEffect(()=>{{
fetch('http://localhost:3500/users/get-all-Users').then((res)=>res.json())
.then((val)=>setProfiles(val.shot))
.catch((err)=>console.log(err))

}},[])

function follow(name){
  console.log(name,currentUser.username)
  axios.post('http://localhost:3500/follow/add',{username:currentUser.username,name:name})
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err))
  
}

  return (<div className="container-fluid bg-info row row-cols-auto gap-2 justify-content-center p-5 m-0">{Object.entries(profiles).map(([val,obj])=><div className="card col" key={val} id={val}
  >
          {/* <div className="card-header">
              <img src={obj.i} width="200px"/>
          </div> */}
          <div className="card-body text">
              <h5 className="text-center">{obj.firstName} {obj.username}</h5>
              <div className='d-flex'>
              {obj.Skills?.map((element, index) => (
                <p className='p-1 btn btn-dark m-1' key={index}>{element}</p>
      ))}</div>
      
              
          </div>
          <div className="card-footer text-end" id={val}>
          <button className='btn btn-warning float-end' onClick={()=>follow(obj.username)}>Follow</button>
          </div>
  </div>
  )}
</div>)
}

export default Suggessions