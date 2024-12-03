import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { prisma } from './config/prisma';

const port = process.env.PORT;

const app: Application = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('hello');
});

app.listen(port, () => {
  console.log('Server running at :', port);
});
