'use strict';

var button = document.querySelector('button');
var text = document.querySelector('textarea');
var scale = document.getElementById('scale');
var email = document.getElementById('email');
var list = document.querySelector('ul');
var loading = document.querySelector('span');

button.addEventListener('click', function () {

  var httpRequest = new XMLHttpRequest();
  loading.classList.add('show');
  httpRequest.open('POST', 'http://localhost:3000/exam', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify({
  text: text.value,
  scale: scale.value,
  email: email.value
  }));

  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          console.log(httpRequest.responseText);
          var projects = JSON.parse(httpRequest.responseText).projects;
          projects.map(function(p){
            list.innerHTML += '<li>' + p + '</li>';
          });
          loading.classList.add('hide');
        } else {
          alert('There was a problem with the request.');
        }
      }
  };
});
