import React, { useState,useContext} from 'react';
import {useForm} from 'react-hook-form'
import './Login.css';
import { LoginContext } from './contexts/LoginContext';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  let {register,handleSubmit}=useForm()
  const navigate=useNavigate()
  let [currentUser,loginErr,loginStatus,loginUser,logoutUser] = useContext(LoginContext)

    function submitForm (data){
      console.log(data);
      loginUser(data)
      navigate('/')
  };
    

    // Perform login logic here
    // For now, you can just log the values
  

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="text-center mb-4 text-white">Login</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="form-group">
            <label htmlFor="username" className="form-label text-white">
              Username
            </label>
            <input
              type="text"
              className="form-control oval-input"
              id="username"
              placeholder="Enter your username"
                        {...register('username')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              className="form-control oval-input"
              id="password"
              placeholder="Enter your password"
              
              {...register('Password')}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark text-white mt-3">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  }
export default Login;
