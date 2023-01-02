const express=require("express");
var path=require("path");
const app=express();

app.get("/",function(req,res){
    res.send("<h1>This is hello from 1st jan 2023</h1>")
})

app.get("/home",function(req,res){
    res.sendFile(path.join(__dirname,"public/index.html"));
})

app.listen(8000);
console.log("server is listening to port number 8000");