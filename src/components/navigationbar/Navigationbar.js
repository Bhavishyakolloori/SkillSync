import './Navigationbar.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaUsers,FaUsersSlash} from 'react-icons/fa'
import Codplatforms from '../codplatforms/Codplatforms';
import { IoAccessibility } from "react-icons/io5";
import { MdKeyboard } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

function navigationbar() {

    const activeLink={
        color:"black",
        // fontSize:"1.2rem",
        fontWeight:"bold",
      };
    
      const inactiveLink={
        color:"white",
        // fontSize:"1.2rem",
      };
 
    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
  <div className="q1 container-fluid confld">
    {/* <a className="navbar-brand" href="#">
      <img src='https://upload.wikimedia.org/wikipedia/commons/1/14/WLM_logo-2.svg' width="50px" alt='' />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav navnav ms-auto mb-2 mb-lg-0">
        <li className="nav-item naxits">
          <NavLink className="nav-link" to="/profile/personalDetails"
          style={({isActive})=>{
            return isActive ? activeLink : inactiveLink;
          }}>
            <IoAccessibility className='personal'/>
            Personal details</NavLink>
        </li>
        <li className="nav-item naxits">
          <NavLink className="nav-link" to="/profile/codingPlatforms"
          style={({isActive})=>{
            return isActive ? activeLink : inactiveLink;
          }}>
            <MdKeyboard className='coding'/>
            Coding platforms</NavLink>
        </li>   
        <li className="nav-item naxits">
          <NavLink className="nav-link" to="/profile/professionalDetails"
          style={({isActive})=>{
            return isActive ? activeLink : inactiveLink;
          }}>
            <IoPerson className='proff'/>
            Professional details</NavLink>
        </li>     
        
        
      </ul>
      
    </div>
  </div>
</nav>
    );
  }
  
  export default navigationbar