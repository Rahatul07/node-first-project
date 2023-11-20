import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
const app: Application = express();

// Parser (to pass)
app.use(express.json()); //ts to js
app.use(cors());

// Application routes
// api/v1/students/create-student
app.use('/api/v1/students', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 1;

  res.send(a);
});

export default app;
