import Question from '../schemas/question'

export const createQuestion = async (question) => {
    const newQuestion = new Question(question)
    await newQuestion.save()
}

export const getQuestion = async (_id) => {
    const questionFinded = await Question.findById(_id).exec()
    return questionFinded
}

export const getQuestions = async(withResCorrect) => {
    const limit = withResCorrect ? '' : '-resCorrect'
    const questions = await Question.find({},`${limit} -__v`).exec()
    return questions
}

export const deleteQuestion = async(_id) => {
    await Question.findByIdAndDelete(_id).exec()
}

export const updateQuestion = async (_id, {question, resA, resB, resC, resD, resCorrect}) => {
    const questionFinded = await Question.findById(_id).exec()
    questionFinded.question = question
    questionFinded.resA = resA
    questionFinded.resB = resB
    questionFinded.resC = resC
    questionFinded.resD = resD
    questionFinded.resCorrect = resCorrect
    await questionFinded.save()
}

export const getQuestionAnswer = async (_id) => {
    const {resCorrect} = await Question.findById(_id, 'resCorrect -_id').exec()
    return resCorrect
}