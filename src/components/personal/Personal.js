import './Personal.css'
import React,{useState} from 'react';
import { IoAccessibility } from "react-icons/io5";
import {set, useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoLink } from "react-icons/io5";


function Personal(){
    //useNavigate hook
  let navigate=useNavigate()

  //useForm hook
  let {register,handleSubmit,formState:{errors}}=useForm()

  //useState hook
  let [err,setErr]=useState("")

  let addNewUser=(userLogined)=>{
    //console.log(newUser)
    {/*save newUser in json server */}
    //HTTP POST req
    axios.post("http://localhost:4000/userslogedin",userLogined)
    .then(response=>{
      if(response.status===201){
        setErr("")
      }
      //navigate to users components
      navigate("/coding-platforms")
    })
    .catch(err=>{
      //console.log("err is ",err))
      //the client was given an error response{4xx,5xx}(URL ERROR)
      if(err.response){
        setErr(err.message)
      }
      //the client received a response and the req was never left(NETWORK ERROR)
      else if(err.request){
        setErr(err.message)
      }

    })
      
  }
  //const history = useHistory();

  const handleButtonSave = () => {
    // Navigate to another page when the button is clicked
    navigate('/codingPlatforms');
  };
  
    return(
        <div className='container-fluid'>
            <div className="main4">
                <div className="i1">
                    <IoAccessibility className='personal' />
                </div>
                <div className="h1">
                    <h4>PERSONAL DETAILS</h4>
                </div>

            </div>
           
            <div className='main '>
                <div>
                <img className="profile-image"
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small/user-profile-icon-free-vector.jpg"
                    alt="Profile"
                />
                </div>
                <div className='add-user'>
      
      {/*HTTP err message*/}
      {err.length!==0 && <p className='text-danger text-center display-3'>{err}</p>}

      {/*responsive form */}
      <div className='row'>
        <div className='col-11 col-sm-8 col-md-6 mx-auto'>
          <form onSubmit={handleSubmit(addNewUser)}>
            {/*firstname*/}
            <div className='mb-3'>
              <label    htmlFor='firstname' >Firstname</label>
              <input type='text' id="firstname"  className='f1 form-control mb-3' {...register("firstname",{required:true})} />
      
            {/*validation errors for firstname */}
            {errors.firstname?.type==="required" && <p className='text-danger'>*Firstname is required</p>}
            
            </div>
            {/*lastname*/}
            <div className='l1 mb-3'>
              <label  htmlFor='lastname' >Lastname</label>
              <input type='text' id="lastname"  className='f1 form-control mb-3' {...register("lastname",{required:true})} />
      
            {/*validation errors for lastname */}
            {errors.lastname?.type==="required" && <p className='text-danger'>*Lastname is required</p>}
            
            </div>
            {/*username*/}
            <div className='l1 mb-3'>
              <label  htmlFor='username' >Username</label>
              <input type='text' id="username"  className='f1 form-control mb-3' {...register("username",{required:true})} />
      
            {/*validation errors for username */}
            {errors.username?.type==="required" && <p className='text-danger'>*username is required</p>}
            
            </div>
            <div className='col'>
                {/*date of birth*/}
                <div className='p2 mb-3'>
                    <label htmlFor='dob' >Date Of Birth</label>
                    <input type='date' id='dob' className='f2 form-control' {...register("dob",{required:true})}/>
                    {errors.dob?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>}
                </div>
                <div className='l2 mb-3'>
                    <label htmlFor='gender' >Gender</label>
                    <input type='text' id='gender' className='f2 form-control' {...register("gender",{required:true})}/>
                    {errors.dob?.type==="required" && <p className='text-danger'>*Gender is required</p>}
                </div>
            </div>
            {/*address*/}
            <div className='l1 mb-3'>
              <label  htmlFor='address' >Address</label>
              <input type='text' id="address"  className='f3 form-control mb-3' {...register("address",{required:true})} />
      
            {/*validation errors for username */}
            {errors.username?.type==="required" && <p className='text-danger'>*address is required</p>}
            
            </div>
            
            
            {/*image url*/}
            {/* <div className='mb-3'>
              <label htmlFor='image' >User Image</label>
              <input type='text' id="image" className='form-control' {...register("image",{required:true})} />
              {errors.image?.type==="required" && <p className='text-danger'>*User Image is required</p>}
            </div> */}
            

          </form>
        </div>
      </div>


                </div>
            </div>
            <div className='main2 container-fluid'>
                <h5 className='m1'>SOCIAL PROFILES</h5>
                    <div className='col'>
                {/*links*/}
                    <div className='p3 mb-3'>
                    <div>
                        <label htmlFor='fb' >Facebook</label>
                    </div>
                    <div className='x'>
                        <i className='icon'><IoLink/></i>
                        <input type='text' id='fb' className='f5 form-control' {...register("fb",{required:true})}/>
                        {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                    </div>
                    
                    </div>
                    <div className='p4 mb-3'>
                    <div>
                    <label htmlFor='twitter' >Twitter</label>
                    </div>
                    <div className='x'>
                    {/* <IoLink className='x2'/> */}
                    <i className='icon'><IoLink/></i>
                    <input type='text' id='twitter' className='f4 form-control' {...register("twitter",{required:true})}/>
                    </div>
                    
                    
                    {/* {errors.dob?.type==="required" && <p className='text-danger'>*Gender is required</p>} */}
                    </div>
                    </div>
                <h5 className='m1'>PROFESSIONAL PROFILES</h5>
                    <div className='p5 mb-3'>
                    <div className='la1'>
                        <label htmlFor='fb' >LinkedIn</label>
                    </div>
                    <div className='x2'>
                        <i className='icon'><IoLink/></i>
                        <input type='text' id='fb' className='f6 form-control' {...register("fb",{required:true})}/>
                        {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                    </div>
                    
                    </div>
                    <div className='p6 mb-3'>
                    <div className='la2'>
                        <label htmlFor='git' >Git Hub</label>
                    </div>
                    <div className='x1'>
                        <i className='icon'><IoLink/></i>
                        <input type='text' id='git' className='f7 form-control' {...register("git",{required:true})}/>
                        {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                    </div>
                    
                    </div>
                {/*submit button*/}
                {/* <button onClick={handleButtonAdd} type='submit' className='btn add-user-btn'>+Add</button> */}
                <button onClick={handleButtonSave} type='submit' className='k19 f222 btn add-user-btn'>Save</button>
            </div>
            
        </div>
        
        
        
        
    );
}
export default Personal;