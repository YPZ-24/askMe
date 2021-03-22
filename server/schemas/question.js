import { Schema, model } from 'mongoose';
import * as Yup from 'yup'

const QuestionSchema = new Schema({
    question: {
        type: String,
        lowercase: true,
        required: true
    },
    resA: {
        type: String,
        lowercase: true,
        required: true
    },
    resB: {
        type: String,
        lowercase: true,
        required: true
    },
    resC: {
        type: String,
        lowercase: true,
        required: true
    },
    resD: {
        type: String,
        lowercase: true,
        required: true
    },
    resCorrect: {
        type: String,
        lowercase: true,
        required: true
    }
})

export const createQuestionSchema = Yup.object().shape({
    question: Yup.string().required,
    resA: Yup.string().required,
    resB: Yup.string().required,
    resC: Yup.string().required,
    resD: Yup.string().required,
    resCorrect: Yup.string().required
})

export default model('Question', QuestionSchema);