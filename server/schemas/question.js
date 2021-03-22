import { Schema, model } from 'mongoose';
import * as Yup from 'yup'

const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    resA: {
        type: String,
        required: true
    },
    resB: {
        type: String,
        required: true
    },
    resC: {
        type: String,
        required: true
    },
    resD: {
        type: String,
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