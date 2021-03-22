import express from 'express'
import questionRouter from './routes/question';
import errorMiddleware from './util/errorMiddleware';
const app = express();

//MIDDLEWARES
app.use(express.json());

//ROUTES
app.use(questionRouter)

//ERROR MIDDLEWARE
app.use(errorMiddleware)

export default app;