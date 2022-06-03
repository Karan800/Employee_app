const express = require("express")
const mongoose = require("mongoose")

const router = require("./routes/emproutes")

const app = express()

app.use('/emp',router)
app.get("/user",(req,res)=>{

    res.send("wc to den")
})

const port = 7000
app.listen(port,(req,res)=>{

    console.log(`Starting my APP on:${port}`);
})
const mongo_url = "mongodb+srv://karann:suplex8007@cluster0.teszuyb.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongo_url)
.then(()=>{

    console.log("DB conn");
})
.catch((err)=>{

    console.log(err);
})