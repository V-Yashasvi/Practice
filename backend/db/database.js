const mongoose=require('mongoose')
require('dotenv').config({path:'./config/.env'})
const config={
    url:process.env.URL
}
const connection=mongoose.connect(config.url).then(()=>{
    console.log("Database connected sucessfully")
}).catch((err)=>{
    console.log(err)
})

module.exports=connection