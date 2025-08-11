import express from 'express';
import Student from '../models/student.js';
import { createStudents, getStudents } from '../controllers/studentControllers.js';
const studentRouter = express.Router();

studentRouter.get ("/",createStudents )

studentRouter.post ("/",getStudents)


export default studentRouter;