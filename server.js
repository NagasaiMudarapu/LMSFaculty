const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const app=express();

var PORT= process.env.PORT || 3300;
//start the server
app.listen(PORT,function(){
    console.log("http://localhost:"+PORT);
});

//access files
app.use(express.static(__dirname+'/frontend'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/frontend/html/welcomePage.html');
});
app.get('/login',function(req,res){
    res.sendFile(__dirname+'/frontend/html/loginPage.html');
});