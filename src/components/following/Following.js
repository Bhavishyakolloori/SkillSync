import React,{useContext,useState,useEffect} from 'react';
import './Following.css';
import { AiFillAccountBook } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { LoginContext } from '../contexts/LoginContext';
function Following() {
  const fam={ fontFamily: 'Lexend Peta' };

  let [currentUser,loginErr,loginStatus,loginUser,logoutUser]=useContext(LoginContext)
  let [dat,setDat]=useState()
  useEffect(()=>{
    fetch(`http://localhost:3500/follow/getAll/${currentUser.username}`).then((res)=>res.json())
    .then((data)=>setDat(data.cart))
    .catch((err)=>console.log(err))
  },[])



  console.log(dat)
    return (
      <div>
    <div className="card-container "style={fam}>

      {dat ? <div> <div className=''>
              {dat?.following?.map((element, index) => (
                <div className="card-container d-flex ">
                <p className='p-1 m-1' key={index}>{element}</p>
                <div>{dat.Skills?.map((element, index) => (
                <p className='p-1 btn btn-dark m-1' key={index}>{element}</p>
      ))}</div>
                </div>
      ))}</div></div> : <p>You have no followers</p>}
      
      </div>
     
      </div>
      
    );
}

export default Following;
