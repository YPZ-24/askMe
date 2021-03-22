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
app.use('/', (req, res)=>{
    res.send("Hi")
})

//ERROR MIDDLEWARE
app.use(errorMiddleware)

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))

export default app;