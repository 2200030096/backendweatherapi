const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const dburl = "mongodb+srv://admin:admin@cluster0.g0xbgtp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});

const app = express() 
app.use(express.json()) //to parse JSON data (to convert input data to json data)
app.use(cors())

const adminrouter = require("./routes/adminroutes")
const userrouter = require("./routes/userroutes")

app.use("",adminrouter) // it includes admin routes
app.use("",userrouter) 


const port=2032


app.listen(port,() => {
    console.log(`Server is running at port ${port}`)
    
})