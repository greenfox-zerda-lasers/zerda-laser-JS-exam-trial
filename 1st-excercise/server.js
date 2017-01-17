'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

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
app.use(express.static('client'));  //static fájlok lekérdezéséhez!!!


app.get('/', function(req, res) {
  res.sendfile('./index.html');
});

app.post('/exam', function(req, res) {  //postba kerül a validator!!!
  console.log(req.body); // { shift: 3, text: 'oruhp lsvxp groru vlw' }   //req.body csak post esetében
  var scale = parseInt(req.body.scale);
  var text = req.body.text;
  var email = req.body.email;

  // res.send(responseO);
  con.query('SELECT * FROM projects', function (err, rows) {
    if(!err) {
      var rowsTextOnly = rows.map(function (row) {
        return row.project_name;
      }); // ['alma', 'beka']
      res.send({
        "status": "ok",
        "projects": rowsTextOnly
      });
    }
  });
});



app.listen(3000);
