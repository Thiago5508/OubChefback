import express from "express";
import cors from "cors";
import routes from "./routes.js";
import dotenv from "dotenv";
import path from 'path';
import type {Request, Response,NextFunction} from 'express'
import { connectDB } from '@/database/mongodb';

dotenv.config();

 const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(express.static(path.join(process.cwd(), "public")))

app.get('/', (_req:Request, res:Response) => {
  res.status(200).send('Welcome to ContrateMy backend!');
});

app.use((err:Error ,_req:Request, res:Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ status:'error', message: err.message || 'Erro interno do servidor' });
});

connectDB();

export default app;