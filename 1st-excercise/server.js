'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var submit = document.getElementById("submit");

// submit.addEventListener("click", function(){
//   var ourRequest = new XMLHttpRequest();
//   ourRequest.open('POST', '?????????????????')
//   ourRequest.onload = function() {
//     var ourData = JSON.parse(ourRequest.responseText);
//   };
// });

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "21birds",
  database: "secretprojects"
});

con.connect(function(err){
  if(err){
    console.log("Error connecting to Db", err);
    return;
  }
  console.log("Connection established");
});

var app = express();
app.use(bodyParser.json());
app.use(express.static('client'));

app.get('/', function(req, res) {
  res.sendfile('./index.html');
});

app.post('/exam', function(req, res) {
