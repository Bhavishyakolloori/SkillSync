const bcrypt= require('bcrypt')
const exp=require('express')
const usersApi=exp.Router();
const expressAsyncHandler=require('express-async-handler')
require('dotenv').config();


usersApi.use(exp.json())

usersApi.get('/get-all-Users',expressAsyncHandler(async(request,response)=>{
    const users=request.app.get('users')
    let snapShot=await users.get().docs[0].data();
    console.log(snapShot)
response.send({message:"success",shot:snapShot})
}))

// register into the data base
usersApi.post('/register',expressAsyncHandler(async(request,response)=>{
    const users=request.app.get('users');
    const userData=request.body;
    // console.log(userInfo)
    // search for email
    console.log(userData.Email)
    users.where('Email',"==",userData.Email).get()
    .then((res)=>{
        let value=res.docs[0].data();
        response.send({message:"user Arleady exists",status:'AE'})
    })
    .catch((err)=>{
        // create empty objects of cart , objects
        // hash and post the data
        bcryptjs.hash(userData.Password,5).then((res)=>{
            userData.Password=res;
            userInfo.doc().set(userData)
        .then((res)=>response.send({message:"post Successful",ack:res,status:'SU'}))
        .catch((err)=>response.send({message:"error posting data",ack:err,status:'ER'}))
        })


    })})
)

// Login
usersApi.post('/login',expressAsyncHandler(async(request,response)=>{
    const users=request.app.get('users');
    const userCred=request.body;
    //verify username
    let snapShot=await users.where('Email',"==",userCred.Email).get();

    //find email
    if (snapShot.empty){
        console.log("no email")
        response.send({message:"Cannot find Email"})
    }else{
        let snapShotOBJ=snapShot.docs[0].data()
        console.log("token verfy",snapShotOBJ)
        // verify password
        let correct=await bcryptjs.compare(userCred.Password,snapShotOBJ.Password)
        if (correct){
            // Generate token
            
            let token=jwt.sign({Email:userCred.Email,userName:snapShotOBJ.userName},'abcdef',{expiresIn:'1h'})
            console.log('token creation',token)
            delete snapShotOBJ.Password;
            response.send({message:"Successfull",token:token,user:snapShotOBJ})

        }else{
            // invalid Password
            response.send({message:"invalid Password"})
        }
    }

    
})); 

module.exports = usersApi;

