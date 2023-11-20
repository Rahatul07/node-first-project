// To handle routing
import express from 'express';
import { StudentControllers } from './student.controller';
// Calling express bringing router object
const router = express.Router(); //Using the router we will apply CRUD
// Creating data in database (Will call controller function to get data)
router.post('/create-student', StudentControllers.createStudent); //Client side theke jokhon e '/create-student' ei rout a hit hobe tokhon rout  StudentControllers.createStudent moddhe jei controller function ase take call dibe tokhon controller theke service function a call dibe tokhon service database a data create kore dibe. That means (Rout->Controller->service->model er upor query chaliye ekta data insert or create kore dibe)
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);
// As route itself an object, so we should not give {} (send for app.ts)
export const studentRoutes = router;
