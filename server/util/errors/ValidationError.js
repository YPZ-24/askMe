export default class ValidationError extends Error{
    constructor(error){
        super(error.message);
        this.name = 'ValidationError';
        this.status = 400;
        this.path = error.path;
    }

    toJson(){
        return{
            name: this.name,
            status: this.status,
            path: this.path,
            message: this.message
        }
    }
}