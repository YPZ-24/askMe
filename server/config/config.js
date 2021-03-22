export default {
    PORT: 8000,
    DB:{
        URL: process.env.DB_URL || 'mongodb://localhost:27017/askme',
        USR: process.env.DB_USR || 'USR',
        PWD: process.env.DB_PWD || 'PWD'
    }
}