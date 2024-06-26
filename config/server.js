var express = require('express');
var consing = require("consign");

var app = express();

app.set('view engine','ejs'); //informa ao express que serpa usado ejs como engrenagem das views
app.set('views','./app/views'); // indica o caminho das viwes

app.use(express.static("/app/visual/"));

consing()
.include("app/routes")
.then('conf/dbConnection.js')
.into(app);

app.use(express.static("app/visual"));
app.use(function(req,res){
});

module.exports = app;