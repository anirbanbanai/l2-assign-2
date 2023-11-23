import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

app.use(express.json());
app.use(cors());

const getACon = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'Succcess',
    message: 'Welcome to my assign',
  });
};

app.get('/', getACon);

export default app;
