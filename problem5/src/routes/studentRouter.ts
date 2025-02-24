import express, { Request, Response } from 'express';
import { createStudent, deleteStudent,  findStudent,  getAllStudent,   getDetailStudent,   getStudentById,   getStudentPage,   updateScores } from '../controllers/studentControllers';



const studentRouter = express.Router()

// create student
studentRouter.post("/create", createStudent)
// get all student
studentRouter.get("/get-all-student",getAllStudent )
// Pagination
studentRouter.get("/get-student-page/:pageStr/:pageSizeStr",getStudentPage)
// get student by id
studentRouter.get("/info-student/:id", getStudentById)
// get student by name
studentRouter.get("/find-student", findStudent)
// get details of student 
studentRouter.get("/get-detail", getDetailStudent)
// update scores of student 
studentRouter.put("/update-scores", updateScores)
// Delete student by id
studentRouter.delete("/delete-student/:id", deleteStudent)




export default studentRouter