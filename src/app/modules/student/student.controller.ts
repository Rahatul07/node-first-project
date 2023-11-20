import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// jehetu eta database hote asbe so etate somoy lagbe... tai async hote hobe
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body; //destructuring
    // Will call service func to send this data
    const result = await StudentServices.createStudentIntoDB(studentData);
    // send response to user
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
// Collect All student and send via response
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
// Collect Single Student and send via response
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrieve successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
// We should export it so that the rout can use it
export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
