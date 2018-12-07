var express = require('express');
var bodyParser = require('body-parser');
var dbConfig = require('./config/db');
var mongoose = require('mongoose');
// require('./routes/note') (app);
var cors = require('cors')
var users= require('./controllers/user');
var notes = require('./controllers/note');


mongoose.Promise = global.Promise;
// var MongoClient  =require('mongodb').MongoClient;

var app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended:true }))

app.use(bodyParser.json())

mongoose.connect(dbConfig.url).then(() => {
    console.log("DB Successfully connected!!");
    
}).catch(err => {
    console.log("could not connected db", err);
    process.exit();
})

// mongoose.connect(dbConfig.url,{useNewUrlParser:true}, function(err,data){
//     if(err)
//     console.log(err);
//     else
//     console.log("data");    
// })



// MongoClient.connect( "mongodb://localhost:27017/AngularNode", {useNewUrlParser:true });

app.get('/',(req,res)=>{
    res.json({"Hello world!":"crud api"});
});


app.post('/notes', notes.create);

// Retrieve all Notes
app.get('/notes', notes.findAll);

// Retrieve a single Note with noteId
app.get('/notes/:noteId', notes.findOne);

// Update a Note with noteId
app.put('/notes/:noteId', notes.update);

// Delete a Note with noteId
app.delete('/notes/:noteId', notes.delete);


app.post('/users', users.create);

app.get('/users', users.findAll);

app.get('/users/:userId',users.findOne);


app.listen(3000, ()=>{
    console.log("connected nodejs ");
    
})