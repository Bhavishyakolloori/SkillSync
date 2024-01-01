import React, { useContext, useState } from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './contexts/LoginContext';
import axios from 'axios';
import './register.css'
function Register() {
let {register,handleSubmit,formState:{errors}}=useForm();
let [valotp,setotp]=useState('Get OTP');
let [otp,gototp]=useState(0);
let [status,setstatus]=useState('');
const navigate=useNavigate();
let [currentUser,loginErr,loginStatus,loginUser,logoutUser]=useContext(LoginContext);

function submit(data){
  data.Skills=data.Skills.split(',')
  console.log(data)
fetch('http://localhost:3500/users/register',{
method: "POST",
body: JSON.stringify(data),
headers: {
    "Content-type": "application/json; charset=UTF-8"
}
})
.then((res)=>res.json())
.then((dat)=>{
console.log(dat)
  loginUser({"username":data.userName,"passsword":data.passsword})
navigate('/login')
  })
.catch((err)=>console.log("error registering"))
    
  }

  return (
    <div className=''>
    <div className='container d-flex justify-content-center align-items-center'>
      
    <div className='exr'>
      <h4 className='p-3'>Register</h4>
      <form onSubmit={handleSubmit(submit)}>
          <input type='text' className='form-control m-2' placeholder='UserName'{...register("username",{required:{value:true,message:"UserName is required"},minLength:{value:6,message:"minimum length is 6 Characers"},maxLength:{value:20,message:"maximum length is 20 Characters"}})}/>
          {errors.UserName?.type && <p className='text-white m-2'>{errors.UserName.message}</p>}
          <input type="email"  className='form-control m-2' placeholder='Email'{...register("Email",{required:{value:true,message:"Email is Required"}})}/>
          {errors.Email?.type && <p className='text-white m-2'>{errors.Email.message}</p>}
          <input type="number"  className='form-control m-2' placeholder='Mobile Number'{...register("Number",{required:{value:true,message:"Mobile number is required"},minLength:{value:10,message:"Mobile number must be 10 digits"},maxLength:{value:10,message:"Mobile number must be 10 digits"}})}/>
          {errors.Number?.type && <p className='text-white m-2'>{errors.Number.message}</p>}
          <input type="password"  className='form-control m-2' placeholder='enter a password'{...register("Password",{required:{value:true,message:"Password is Required"},min:{value:9,message:"At least 9 characters "}})} />
          {errors.Password?.type && <p className='text-white m-2'>{errors.Password.message}</p>}
          <input type='text' className='form-control m-2' placeholder='Skills(ex: c,c++)'{...register("Skills",{required:{value:true,message:"Skills are Required"}})} />
          {errors.Skills?.type && <p className='text-white m-2'>{errors.Skills.message}</p>}

        <button type='submit' className='btn btn-success'>Submit</button>
      </form>
    </div>

    
    </div>
    <p className='text-center text-white'>Please Provide Correct Details as there are used to contact you!</p>
    {otp!==0 && <p className='text-center'>{status}</p>}
    </div>
  )
}

export default Register