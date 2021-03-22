const ValidationError = require('./errors/ValidationError');

function validate(data, schema){
    const {error} = schema.validateSync(data);
    return error;
}

function validationHandler(schema, check = 'body'){
    return (req, res, next) => {
        const error = validate(req[check], schema);
        error ? next(new ValidationError(error)) : next();
    }
}

module.exports = validationHandler;
