import React,{useState} from "react";
import './Codplatforms.css';
import { MdKeyboard } from "react-icons/md";
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoLink } from "react-icons/io5";

function Codplatforms(){
      //useNavigate hook
  let navigate=useNavigate()

  //useForm hook
  let {register,handleSubmit,formState:{errors}}=useForm()

  //useState hook
  let [err,setErr]=useState("")

  const handleButtonSave = () => {
    // Navigate to another page when the button is clicked
    navigate('/professionalDetails');
  };

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
      navigate("/professionalDetails")
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
    return(
        <div className="parent container-fluid">
            <div className="parent1">
                <div className="i1">
                    <MdKeyboard className='coding' />
                </div>
                <div className="h1">
                    <h4>CODING PLATFORMS</h4>
                </div>

            </div>
            <div className='parent2 '>
                
                    <div className='b1 mb-3'>
                    <div className='c1'>
                        <label htmlFor='hack' >Hackerrank</label>
                    </div>
                    <div className='y1'>
                        <i className='icon1'><IoLink/></i>
                        <input type='text' id='hack' className='t1 form-control' {...register("hack",{required:true})}/>
                        {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                    </div>
                    
                    </div>
                    <div className='b2 mb-3'>
                    <div className='c2'>
                        <label htmlFor='codechef' >CodeChef</label>
                    </div>
                    <div className='y2'>
                        <i className='icon2'><IoLink/></i>
                        <input type='text' id='codechef' className='t2 form-control' {...register("codechef",{required:true})}/>
                        {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                    </div>
                    
                    </div>
                    <div className='b3 mb-3'>
                    <div className='c3'>
                        <label htmlFor='codeforces' >Codeforces</label>
                    </div>
                    <div className='y3'>
                        <i className='icon3'><IoLink/></i>
                        <input type='text' id='codeforces' className='t3 form-control' {...register("codeforces",{required:true})}/>
                        {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                    </div>
                    
                    </div>
                    <div className='b4 mb-3'>
                    <div className='c4'>
                        <label htmlFor='leetcode' >Leetcode</label>
                    </div>
                    <div className='y4'>
                        <i className='icon4'><IoLink/></i>
                        <input type='text' id='leetcode' className='t4 form-control' {...register("leetcode",{required:true})}/>
                        {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                    </div>
                    
                    </div>
                {/*submit button*/}
                <button onClick={handleButtonSave} type='submit' className='save1 f222 btn add-user-btn'>Save</button>
            </div>
            
        </div>
    );
}
export default Codplatforms