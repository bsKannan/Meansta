var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var config = require('./config/database.config')

require('./app/routes/note.routes')(app);

mongoose.Promise = global.Promise;


mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() =>{
    console.log("Successfully connected")
}).catch(err =>{
    console.log("Could not conncected")
    process.exit();
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.json({"message": "Welcome to easy application for restapi"});
});

app.listen(4000, () =>{
    console.log("Server listing on port: 4000");
});