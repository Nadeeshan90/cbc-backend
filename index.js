import express from "express";
import mongoose from "mongoose";
import Student from "./models/student.js";
import studentRouter from "./routers/studentsRouter.js";
import userRouter from "./routers/userRouter.js";
import jwt from "jsonwebtoken";
import productRouter from "./routers/productRouter.js";

const app = express()

app.use(express.json())

app.use(
  (req,res,next)=>{
    let token = req.header ("Authorization")
    if(token !=null){
      token=token.replace("Bearer ","")
      jwt.verify(token,"jwt-secret",
        (err, decoded)=>{
          if(decoded==null){
            res.json({
              message: "Invalid token please login again"
            })
            return
          }else{
            req.user = decoded
          }
        }
      )
    }
    next ()
  }
)

const connectionString="mongodb+srv://admin:1234@cluster0.rtzm7zz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect (connectionString).then(
  ()=>{
    console.log("database connected")
  }
).catch(
  ()=>{
    console.log("database connection failed")
  }
)

app.use("/students",studentRouter)
app.use("/users",userRouter)
app.use("/products",productRouter)

//function success(){
  //  console.log("Server is started")
//}

app.listen(5000,()=>{
  console.log("Server is started")
 }
)