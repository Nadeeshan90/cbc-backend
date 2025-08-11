
import Student from "../models/student.js"


export function getStudents(req,res){
  Student.find ().then(
    (students)=>{
      res.json(
        students
      )
    }
  ).catch(
    ()=>{}
  )
  }

export function createStudents(req,res){

  if(req.user == null){
    res.status(401).json({
      message : "Please login and try again"
    })
    return
  }

  if (req.user.role != "admin"){
    res.status(404). json({
      message : "You must be an admin to create a student"
    })
    return
  }
 const student=new Student(
  {
    name:req.body.name,
    age:req.body.age,
    city:req.body.city
  }
 )

 student.save().then(
  ()=>{
    
      res.json(
        {
          message:"Student create done"
        }
      )
    
    }
 ).catch(
  ()=>{
    res.json (
      {
        message:"Student create failed"
      }
    )
  }
 )
 }