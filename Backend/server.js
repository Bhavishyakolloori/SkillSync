const exp=require("express")
const app=exp();
const router=exp.Router();
const cors=require("cors")
require('dotenv').config();

app.use(cors());
let envcred=process.env.FIREBASE_CRED
// console.log(JSON.parse(envcred))
const admin=require('firebase-admin')
// console.log(envcred)
const credentials=JSON.parse(envcred)
admin.initializeApp(
    {
        credential: admin.credential.cert(credentials)
    }
)

const db=admin.firestore();
console.log("connected to firestore...")
const users=db.collection('users')
app.use(exp.json())
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log("server started on ",port))



// connect react build

// const path=require('path');
// app.use(exp.static(path.join(__dirname,'')))

const usersApi=require("./Users")
app.use("/users",usersApi);
app.set('users',users)

//invalid paths
const invalidPaths=(request,response,next)=>{
    response.send({message:"invalid path"})
}
app.use("*",invalidPaths)

//error handling
const errorHandling=(error,request,response,next)=>{
    response.send({message:error.message})
}
app.use(errorHandling);

module.exports=router;