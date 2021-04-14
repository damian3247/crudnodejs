const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const handlebars=require('express-handlebars');
const app=express();

//Template Engine
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

//Routes and Templates
app.get("/", function(req,res){
    // res.send("Essa é minha pagina inicial!");
    //res.sendFile(__dirname+"/index.html");
    res.render('index');

})

//start server
app.listen(3000, function(req, res){
    console.log('El servidor está rodando');
})


