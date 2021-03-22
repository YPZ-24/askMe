export default {
    PORT: process.env.PORT,
    DB:{
        //URL: process.env.DB_URL || 'mongodb://localhost:27017/askme',
        URL: 'mongodb+srv://root:toor@cluster0.xv7op.mongodb.net/askme?',
        USR: process.env.DB_USR || 'USR',
        PWD: process.env.DB_PWD || 'PWD'
    }
}