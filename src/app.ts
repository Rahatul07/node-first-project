import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// Parser (to pass)
app.use(express.json()); //ts to js
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 1;
  res.send(a);
});

export default app;
