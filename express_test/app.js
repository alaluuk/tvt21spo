const express=require('express');
const dotenv=require('dotenv');

const app=express();
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/',function(req,res){
    res.send("Terve Nodemon asennettu");
});

app.use(function(req,res,next){
    console.log("Tarkistetaan oikeudet");
    next();
});

app.get('/second',function(req,res){
    res.send("Second endpoint");
    console.log("Second endpoint");
});

app.get('/sayFname/:fname?',function(req,res){
    if(req.params.fname) {
        res.send("Terve "+req.params.fname);
    }
    else{
        res.send("Terve nimetön");
    }
});

app.post('/addName',function(req,res){
    res.send(req.body);
    console.log(req.body);
});

//const port=3000;
app.listen(process.env.PORT);