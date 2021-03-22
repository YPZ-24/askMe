import {Router} from 'express'
const router = Router()
import {createQuestion, deleteQuestion, getQuestion, getQuestions, updateQuestion, getQuestionAnswer} from '../database/question'
import routeHelper from '../util/routeHelper'
import validationHandler from '../util/validationHandler'
import {createQuestionSchema} from '../schemas/question'

//Get Questions with answer
router.get('/question/correct', routeHelper(async (req, res)=>{
    const questions = await getQuestions(true)
    res.status(201).json(questions)
}))

//Create Question
router.post('/question', validationHandler(createQuestionSchema), routeHelper(async (req, res)=>{
    const newQuestion = req.body
    await createQuestion(newQuestion)
    res.status(200).json("Question Created")
}))

//Validate Answer
router.get("/question/:_id/validate/:answer", routeHelper(async (req, res)=>{
    let {answer, _id} = req.params;
    answer = answer.toLowerCase()
    const resCorrect = await getQuestionAnswer(_id)
    res.status(200).json(answer === resCorrect)
}))

//Get Question
router.get('/question/:_id', routeHelper(async (req, res)=>{
    const _id = req.params._id
    const question = await getQuestion(_id)
    const msj = question ? question : "Question doesn't exists"
    res.status(201).json(msj)
}))

//Get Questions
router.get('/question', routeHelper(async (req, res)=>{
    const questions = await getQuestions()
    res.status(201).json(questions)
}))

//Delete Question
router.delete('/question/:_id', routeHelper(async (req, res)=>{
    const _id = req.params._id
    await deleteQuestion(_id)
    res.status(201).json("Question Deleted")
}))

//Update Question
router.put('/question/:_id', validationHandler(createQuestionSchema), routeHelper(async (req, res)=>{
    const question = req.body
    const _id = req.params._id
    await updateQuestion(_id, question)
    res.status(200).json("Question Updated")
}))


export default router;