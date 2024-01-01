import React, { useEffect, useState,useContext } from 'react';
import './Followers.css';
import { AiFillAccountBook } from "react-icons/ai";
import { VscHeartFilled } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useSearchParams } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
function Followers() {

  let [currentUser,loginErr,loginStatus,loginUser,logoutUser]=useContext(LoginContext)

  const brownColor = { color: '#811f1a' };
  const fam={ fontFamily: 'Lexend Peta' };
  const redColor = { color: 'red' };
  const blueColor={color:'#023f81'};
let [dat,setDat]=useState()
  useEffect(()=>{
    fetch(`http://localhost:3500/follow/getAll/${currentUser.username}`).then((res)=>res.json())
    .then((data)=>setDat(data.cart))
    .catch((err)=>console.log(err))
  },[])

console.log(`http://localhost:3500/follow/getAll/${currentUser.username}`)

console.log(dat)





     
  return (
    <div>
    <div className="card-container "style={fam}>

      {dat ? <div> <div className=''>
              {dat?.followers?.map((element, index) => (
                <div className="card-container ">
                <p className='p-1 m-1' key={index}>{element}</p>
                
                </div>
      ))}</div></div> : <p>You have no followers</p>}
      
      </div>
     
      </div>
    
  );
}

export default Followers;
