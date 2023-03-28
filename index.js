//express is a framework of node js


const express = require("express");//importing express here
const path=require("path")
const bodyParser = require("body-parser");
const app= express();
const port=4000;

app.use(bodyParser.urlencoded({extended:false}));

app.get("/",(req,res)=>{
   
    res.sendFile(path.join(__dirname+"/index.html"));
});
app.post("/api/v1/register",(req,res)=>{
    res.send(`<h1>DONE Ms. ${req.body.name}</h1><h2>Your email is ${req.body.email}</h2><h3>Your password is ${req.body.password}</h3>`);
  console.log(req.body);
});


app.listen(port,()=>{
    console.log(`Server is Working on port:${port}`);
});




//CRUD operation == create , read ,Update, delete


//RESTful API is an interface that two computer systems use to exchange information securely over the internet.