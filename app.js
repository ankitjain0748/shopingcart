const express = require('express')
const app = express()
app.use(express.json())

const apirouter=require('./router/api')

app.get("/",(req,res)=>{
    console.log("heelo world !!")
})
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/shopingcartproject")

app.use('/api',apirouter)
app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})