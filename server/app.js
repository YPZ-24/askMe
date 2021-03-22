import express from 'express'
import questionRouter from './routes/question';
import errorMiddleware from './util/errorMiddleware';
import cors from 'cors';
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.use(questionRouter)

//ERROR MIDDLEWARE
app.use(errorMiddleware)

export default app;