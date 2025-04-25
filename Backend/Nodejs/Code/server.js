const express = require('express');
const app = express();
const db = require('./db');


app.get('/', function (req,res){
    res.send("Welcome to my hotel")
})

app.listen(3000, () => {
    console.log("listening to port 3000");
})