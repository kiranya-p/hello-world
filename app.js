var express = require('express');

var app = express();
var displayNumbers = require('./src/numbers.ts');


app.get('/helloWorld', (req,res) => {
    res.send("Welcome !! hello world!!");
});

// app.get('/numbers', (req,res) => {
//     res.send(test.dummy);
// });

app.get('/displayNumbers', (req,res) => {
   res.send(displayNumbers.numbers(req,res));  
});

app.listen(7000, () => {
    console.log("hello-world on port" + 7000);
});
