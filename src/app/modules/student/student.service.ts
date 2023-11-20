import { Student } from './student.interface';
import { StudentModel } from './student.model';
const createStudentIntoDB = async (student: Student) => {
  // Database er query cholbe model er upor(as we are using mongoose). Now using mongoose model name
  const result = await StudentModel.create(student); // returns new data
  return result; //return korle se controller a chole jabe r tai sekhan theke service ke call dite hobe
};
// Business Logic (Get data from DB)
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
// Get single student details by id
const getSingleStudentFromDB = async () => {
  const result = await StudentModel.findOne();
  return result;
};
// This variable must be an Object type
export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
