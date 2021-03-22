import YupValidationError from './errors/YupValidationError'
import * as Yup from 'yup'

export function validationHandler(schema, check = 'body'){
    return async (req, res, next) => {
        try{
            schema = Yup.object().shape({
                question: Yup.string().required(),
                resA: Yup.string().required(),
                resB: Yup.string().required(),
                resC: Yup.string().required(),
                resD: Yup.string().required(),
                resCorrect: Yup.string().required()
            })
            schema.validateSync(req[check]);
            next();
        }catch(e){
            console.log("ERROR DE VALIDACION")
            next( new YupValidationError(e) );
        }
    }
}


module.exports = validationHandler;
