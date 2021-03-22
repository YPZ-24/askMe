import express from 'express'
import questionRouter from './routes/question';
import errorMiddleware from './util/errorMiddleware';
import cors from 'cors';
import path from 'path'
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.use(questionRouter)

//STATIC FILES
app.use(express.static(process.env.PWD, 'public'))

//ERROR MIDDLEWARE
app.use(errorMiddleware)



export default app;