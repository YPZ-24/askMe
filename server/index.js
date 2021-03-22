import app from './app'
require('dotenv').config()
import config from './config/config'

import connect from './database/database';
connect()

app.listen(config.PORT, ()=>{
    console.log(`Server listen at port ${config.PORT}`)
})