const express = require('express');
const { router } = require('./routes/user.route');
const env = require('dotenv');
const { db } = require('./database/db.js');
const cors = require('cors')
const cookieparser = require('cookie-parser')

env.config()
const app = express()


const port=  process.env.port || 8001;
app.use(express.json())
app.use(cors())
app.use(cookieparser())
app.use('/api',router)


db()
app.listen(port , (req,res)=>{
    console.log(`server started on port : ${port}`)
})