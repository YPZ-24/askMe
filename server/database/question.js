import Question from '../schemas/question'

export const createQuestion = async (question) => {
    const newQuestion = new Question(question)
    await newQuestion.save()
}

export const getQuestion = async (_id) => {
    const questionFinded = await Question.findById(_id).exec()
    return questionFinded
}

export const getQuestions = async() => {
    const questions = await Question.find().exec()
    return questions
}

export const deleteQuestion = async(_id) => {
    await Question.findByIdAndDelete(_id).exec()
}

export const updateQuestion = async(_id, { question, resA, resB, resC, resD, resCorrect}) => {
    const questionFinded = await Question.findById(_id).exec();
    questionFinded.question = question;
    questionFinded.resA = resA
    questionFinded.resB = resB
    questionFinded.resC = resC
    questionFinded.resD = resD
    questionFinded.resCorrect = resCorrect
    await questionFinded.save()
}