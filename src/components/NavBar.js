import React,{useContext,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import {LoginContext} from './contexts/LoginContext';
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";



function NavBar() {
  const iconSize = { fontSize: '30px' }; // Define the size of icons
  const fam={ fontFamily: 'Lexend Peta' };

  let [currentUser,loginErr,loginStatus,loginUser,logoutUser]=useContext(LoginContext)
  let [status,setStatus]=useState(false);

  useEffect(()=>{
    
    setStatus(loginStatus)
    
  },[loginStatus])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">

      

        <Link className="navbar-brand text-white d-flex align-items-center" to="/">
          <RiTeamFill style={iconSize} className="me-2"></RiTeamFill>
          <span style={{ fontSize: '30px',...fam }}>SkillSync</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav ms-auto ">{!status &&
          <Link className='text-white nav-link  mx-3' to="/register">Register</Link>}</div>
          <div className="navbar-nav ms-auto ">
        {status ? <Link className='text-white nav-link  mx-3' onClick={logoutUser}>Logout</Link>:
          <Link  to="/Login" className='text-white nav-link  mx-3'>Login</Link>
          }</div>
          <div className="navbar-nav ms-auto ">
            <Link className="nav-link text-white mx-3" to="/followers">
              <FaHeartCirclePlus style={iconSize}></FaHeartCirclePlus>
            </Link>
            <Link className="nav-link text-white mx-3" to="/following">
              <FaHeartCircleCheck style={iconSize}></FaHeartCircleCheck>
            </Link>
            <Link className="nav-link text-white mx-3" to="/personalDetails">
              <FaUser style={iconSize}></FaUser>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
