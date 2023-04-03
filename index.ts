import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import mongoose from 'mongoose';
dotenv.config();


const uri: string = process.env.MONGO_DB_URI || "";

mongoose.connect(uri)
.then(()=> console.log("Database connected successfully"))
.catch((err)=>console.log(err));

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/api', (req: Request, res: Response) => {
res.send('Express + TypeScript Server');
});
app.listen(port, () => {
console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});