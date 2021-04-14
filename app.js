const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const handlebars=require('express-handlebars');
const app=express();

//Template Engine
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');
app.use('/js',express.static('js'));
app.use('/css',express.static('css'));

//Routes and Templates
app.get("/:id?", function(req,res){
    // res.send("Essa é minha pagina inicial!");
    //res.sendFile(__dirname+"/index.html");
    res.render('index',{ho:req.params.id});
    //console.log(req.params.id);

})

//start server
app.listen(3000, function(req, res){
    console.log('El servidor está rodando');
})


