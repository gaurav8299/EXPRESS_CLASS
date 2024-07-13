var express = require('express');
var app = express();
var connected = require('./connect');
app.get("/",(req,res)=>{
    res.send("Connected")
})

app.get("/list",async(req,res)=>{
    res.send(await connected.find())
})


app.listen(8080)