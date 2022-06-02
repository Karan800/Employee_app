const express = require("express")

const app = express()

app.get("/user",(req,res)=>{

    res.send("wc to den")
})

const port = 7000
app.listen(port,(req,res)=>{

    console.log(`Starting my APP on:${port}`);
})