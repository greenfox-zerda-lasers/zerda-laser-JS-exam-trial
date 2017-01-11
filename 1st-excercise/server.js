'use strict';

var express = require('express');
var app = express();
var submit = document.getElementById("submit");

submit.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('POST', '?????????????????')
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
  };
});
