const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:'./config/.env'})
const cors=require('cors')
const cookieParser = require("cookie-parser");

const connection=require('./db/database')
const userRouter=require('./routes/user.route')

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const config={
    port:process.env.PORT,
}

app.use('/', userRouter)

app.listen(config.port, async()=>{
    try {
        await connection
        console.log(`server running on http://localhost:${config.port}`)
    } catch (error) {
        console.log(error)
    }
})