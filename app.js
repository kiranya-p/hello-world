var express = require('express');
var app = express();

app.get('/helloWorld', (req,res) => {
    res.send("Welcome !! hello world!!");
});

app.listen(7000, () => {
    console.log("hello-world on port" + 7000);
});
