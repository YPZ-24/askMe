export default function errorMiddleware(error, req, res, next) {
    let errorObject;
    if(typeof error.toJson === 'function'){
        errorObject = error.toJson();
    }else{
        errorObject = {
            status: 500,
            name: 'UnknownError',
            message: 'Internal Error'
        }
    }

    res.status(errorObject.status).json(errorObject)

}