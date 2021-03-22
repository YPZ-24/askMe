import YupValidationError from "./errors/YupValidationError";

export default function errorMiddleware(error, req, res, next) {
    let errorObject;
    
    if(error.name === 'YupValidationError'){
        console.log("DE VALIDACIÓN")
        errorObject = {
            name: error.name,
            status: error.status,
            path: error.path,
            message: error.message
        }
    }else{
        errorObject = {
            status: 500,
            name: 'UnknownError',
            message: 'Internal Error'
        }
    }
    console.log(error)
    res.status(errorObject.status).json(errorObject)
}