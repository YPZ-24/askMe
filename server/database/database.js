import mongoose from 'mongoose';
import config from '../config/config';

const options = {   
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}

console.log(config.DB.URL);

async function connect(){
    await mongoose.connect(config.DB.URL, options).then(()=>{
        console.log("--DB STARTED--");
    }).catch((error)=> {
        console.log("Error started db");
        console.log(error);
    })
}

export default connect;