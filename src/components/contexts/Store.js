import React, { useEffect } from 'react'
import { LoginContext } from './LoginContext'
import axios from 'axios'
import { useState} from 'react';
import jwt, { jwtDecode } from 'jwt-decode' // import dependency


function Store({children}) {
    const [currentUser,setCurrentUser]=useState([]);
    const [loginErr,setLoginErr]=useState("");
    const [loginStatus,setLoginStatus]=useState(false);

// login context 
useEffect(()=>{
    const token = localStorage.getItem('token');
    if (token){
    const decodedToken = jwtDecode(token);
    console.log(decodedToken)
    if (decodedToken && decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
        setLoginStatus(false)
        localStorage.removeItem('token')
        // You can also redirect the user to a login page or show a message
      } else {
        // Token is valid
        // getting all other user details
        let valTok=" Bearer "+token;
        fetch(`http://localhost/3500/userDetails/${decodedToken.username}`,{headers: {
          Accept: 'application/json',
          Authorization: valTok,
      }})
.then((res)=>res.json())
.then((details)=>{
  setCurrentUser({...details.UserData})
  setLoginErr("")
  setLoginStatus(true)
console.log(details.UserData)
})
.catch((err)=>{
  setLoginErr("error getting userDetails from token",err)
})
        
      
        
      }}
      else{
        setLoginStatus(false)
      }
    },[])






    const loginUser=(userCredObj)=>{
        axios.post('http://localhost:3500/users/login',userCredObj)
        .then((response)=>{
            console.log(response)
            if (response.data.message==="Successfull"){
                console.log(response)
                // save token to local storage
                localStorage.setItem("token",response.data.token);
                setCurrentUser({...response.data.user});
                setLoginErr("");
                setLoginStatus(true);
                console.log("logedin")
            }
            else{
                setLoginErr("error",response.data.message);
            }
        })
        .catch((err)=>{
            setLoginErr("error in Loging in",err)
        })
    }

const logoutUser=()=>{
    localStorage.removeItem('token')
    setLoginStatus(false)
}



// cart context apiiii
let [cartNum,setCartNum]=useState(0)
let [CartErr,setCartErr]=useState("")

// useEffect(()=>{
//   fetch(`http://localhost:3500/cart/count/${currentUser.Email}`)
//   .then((res)=>res.json()).then((data)=>{
//     setCartNum(data.count);
//     console.log(data)})
//   .catch((err)=>setCartErr(err.message))
// },[currentUser])

// Add to cart 
const addToCart=(obj)=>{
  const token = localStorage.getItem('token');
  let valTok=" Bearer "+token;
  fetch('',{headers: {
    Accept: 'application/json',
    Authorization: valTok,},
  method:'POST',
  body:JSON.stringify({Email:currentUser.Email,data:obj})
})
.then((res)=>res.json())
.then((data)=>console.log("adding to cart",data))
.catch((err)=>console.log("Error adding to cart",err))}





  return (
    <LoginContext.Provider value={[currentUser,loginErr,loginStatus,loginUser,logoutUser]}>  
        {children}
    </LoginContext.Provider>
  )
}

export default Store;