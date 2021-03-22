import {Router} from 'express'
const router = Router()
import {createQuestion, deleteQuestion, getQuestion, getQuestions, updateQuestion} from '../database/question'
import routeHelper from '../util/routeHelper'
import validationHandler from '../util/validationHandler'
import {createQuestionSchema} from '../schemas/question'

//Create Question
router.post('/question', validationHandler(createQuestionSchema), routeHelper(async (req, res)=>{
    const newQuestion = req.body
    await createQuestion(newQuestion)
    res.status(200).json("Question Created")
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