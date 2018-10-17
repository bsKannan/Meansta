var express = require('express');
var app = express();
var coinRoutes = express.Router();

var Coin = require('../models/Coin');

coinRoutes.route('/add').post((req,res)=> {
    var coin = new Coin(req.body);
    coin.save()
    .then(item =>{
        res.status(200).json({'coin':'Coin added successfully'})
    })
    .catch(err => {
        res.status(400).send("unable to save database");
    });
});

coinRoutes.route('/').get((req,res) => {
    Coin.find((err, coins)  => {
    if(err) {
        console.log(err);
    }
    else {
        res.json(coins);
    }
    });
});

coinRoutes.route('/edit/:id').get((req,res) => {
    var id = req.params.id;
    Coin.findById(id, (err, coin) =>{
        res.json(coin);
    });
});

coinRoutes.route('/update/:id').post(function (req, res) {
    Coin.findById(req.params.id, function(err, coin) {
     if (!coin)
       return next(new Error('Could not load Document'));
     else {
       coin.name = req.body.name;
       coin.price = req.body.price;
 
       coin.save().then(coin => {
           res.json('Update complete');
       })
       .catch(err => {
             res.status(400).send("unable to update the database");
       });
     }
   });
 });
 

coinRoutes.route('/delete/:id').get((req,res) => {
    Coin.findByIdAndRemove({_id: req.params.id}, (err, coin) => {
        console.log("delete")
        if(err) res.json(err);
        else res.json("Successfully removed"); 
    });
});

module.exports = coinRoutes;