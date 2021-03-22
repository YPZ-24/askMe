export default function routeHelper(callback){
    return async (req, res, next) => {
        try{
            await callback(req, res);
        }catch(error){
            next(error)
        }
    }
}