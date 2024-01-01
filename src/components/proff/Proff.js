import './Proff.css';
import React,{useState,useEffect} from 'react';
import { IoPerson } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoLink } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { PiNotepadBold } from "react-icons/pi";
import { Modal } from 'react-bootstrap';

function Proff(){
        //useNavigate hook
  let navigate=useNavigate()

  //useForm hook
  let {register,handleSubmit,formState:{errors}}=useForm()

  //useState hook
  let [err,setErr]=useState("")

  const handleButtonUpdate = () => {
    // Navigate to another page when the button is clicked
    navigate('/');
  };

//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     institute: 'John Doe',
//     email: 'john@example.com',
//   });

//   const handleEditClick = () => {
//     setEditMode(!editMode);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
    return(
        <div className='r1 container-fluid'>
            <div className='par1'>
                <div className='ch1'>
                    <IoPerson className='ic1'/>
                </div>
                <div className='ch2'>
                    <h4>PROFESSIONAL DETAILS</h4>
                </div>
            </div>
            <div className='r2 container-fluid'>
                <div className='bor'>
                    <div className='par2'>
                    <div className='ch3'>
                        <FaGraduationCap className='ic2'/>
                    </div>
                    <div className='ch4'>
                        <h5>EDUCATION</h5>
                    </div>
                    
                    <div className='par3 mb-3 container-fluid'>
                        <div className='child1'>
                            <div className='ch5'>
                                <label htmlFor='institute' >Institute:</label>
                            </div>
                            <div className='k1'>
                                <input type='text' id='institute' className='e1 form-control' {...register("institute",{required:true})}/>
                                {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                            </div>
                        </div>
                        <div className='child2'>
                            <div className='ch5'>
                                <label htmlFor='degree' >Degree/Grade:</label>
                            </div>
                            <div className='k1'>
                                <input type='text' id='degree' className='e2 form-control' {...register("degree",{required:true})}/>
                                {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                            </div>
                        </div>
                        <div className='child3'>
                            <div className='ch5'>
                                <label htmlFor='stream' >Stream:</label>
                            </div>
                            <div className='k1'>
                                <input type='text' id='stream' className='e3 form-control' {...register("stream",{required:true})}/>
                                {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                            </div>
                        </div>
                        <div className='child4'>
                            <div className='ch5'>
                                <label htmlFor='start' >Start year:</label>
                            </div>
                            <div className='k1'>
                                <input type='number' id='start' className='e4 form-control' {...register("start",{required:true})}/>
                                {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                            </div>
                        </div>
                        <div className='child5'>
                            <div className='ch5'>
                                <label htmlFor='end' >End year:</label>
                            </div>
                            <div className='k1'>
                                <input type='number' id='end' className='e5 form-control' {...register("end",{required:true})}/>
                                {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                            </div>
                        </div>
                        
                    </div>
                    </div>
                    <div className='par4'>
                        <div className='ch6'>
                            <SlBadge className='ic3'/>
                        </div>
                        <div className='ch7'>
                            <h5>EXPERIENCE</h5>
                        </div>
                    </div>
                    <div className='par5 container-fluid'>
                        <p className='para1'>Your experience in previously participated events will be displayed here.</p>
                        <p className='para2'>(Upload drive link)</p>
                        <div className='b11 mb-3'>
                            <div className='c44'>
                                <label htmlFor='exp' >Add experience:</label>
                            </div>
                            <div className='y44'>
                                <i className='icon44'><IoLink/></i>
                                <input type='text' id='exp' className='y111 form-control' {...register("exp",{required:true})}/>
                                {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                            </div>
                        </div>
                    </div>
                    <div className='par4'>
                        <div className='ch6'>
                            <PiNotepadBold className='ic3'/>
                        </div>
                        <div className='ch7'>
                            <h5>SKILLS</h5>
                        </div>
                    </div>
                    <div className='par5 container-fluid'>
                        <h5 className='head1'>Resume:</h5>
                        <p className='para3'>Upload your resume here.</p>
                        <p className='para4'>(Upload drive link)</p>
                        
                        <div className='b111 mb-3'>
                            <div className='c44'>
                                <label htmlFor='resume' >Upload:</label>
                            </div>
                            <div className='y44'>
                                {/* <i className='icon44'><IoLink/></i> */}
                                <input type='file' id='resume' className='y112 form-control' {...register("resume",{required:true})}/>
                                {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                            </div>
                        </div>
                    </div>
                    <div className='par6 container-fluid'>
                        <h5 className='head2'>Add Skills:</h5>                        
                        <div className='b1111 mb-3'>
                            <div className='line1'>
                                <div className='s1'>
                                    <input type='text' id='skill1' className='s11 form-control' placeholder='ex:javascript' {...register("skill1",{required:true})}/>
                                    {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                                </div>
                                <div className='s2'>
                                    <input type='text' id='skill2' className='s22 form-control' {...register("skill2",{required:true})}/>
                                    {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                                </div>
                                <div className='s3'>
                                    <input type='text' id='skill3' className='s33 form-control' {...register("skill3",{required:true})}/>
                                    {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                                </div>
                            </div>
                            <div className='line2'>
                                <div className='s4'>
                                    <input type='text' id='skill4' className='s11 form-control' {...register("skill4",{required:true})}/>
                                    {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                                </div>
                                <div className='s5'>
                                    <input type='text' id='skill5' className='s22 form-control' {...register("skill5",{required:true})}/>
                                    {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                                </div>
                                <div className='s6'>
                                    <input type='text' id='skill6' className='s33 form-control' {...register("skill6",{required:true})}/>
                                    {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className='par7 container-fluid'>
                        <h5 className='head3'>Certificates:</h5>
                        <p className='para3'>Upload Certificates / Courses here.</p>
                        <p className='para4'>(Upload drive link)</p>
                        
                        <div className='b111 k11 mb-3'>
                            <div className='c44'>
                                <label htmlFor='leetcode' >Add Certifications:</label>
                            </div>
                            <div className='y44'>
                                <i className='icon44'><IoLink/></i>
                                <input type='text' id='leetcode' className='y111 form-control' {...register("leetcode",{required:true})}/>
                                {/* {errors.fb?.type==="required" && <p className='text-danger'>*Date Of Birth is required</p>} */}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='foot'>
                    <div className='foot1'>
                        <button onClick={handleButtonUpdate} type='submit' className='f111 btn add-user-btn'>Update</button>
                    </div>
                    <div className='foot2'>
                        <button type='submit' className='f222 btn add-user-btn'>Save</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Proff