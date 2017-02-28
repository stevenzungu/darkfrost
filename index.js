
var express = require('express');
var server = express();
var port = process.env.PORT || 8080;
var apiKey = require('./secrets').darkskyAPIKey;
var axios = require('axios');


server.get('/weather/:lat,:lon', function(request, response){
  var lat = request.params.lat;
  var lon = request.params.lon;
  var url = `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`;
  axios.get(url)
      .then(function(results){
        response.send(results.data);
      })
      .catch(function(err){
        response.send(err);
      });
});


server.listen(port, function(){
  console.log('Now listening on port...', port);
});














var express = require('express');
var server = express();
var port = process.env.PORT || 8080;
//apiKey
//axios
//url
var apiKey = require('./secrets').darkskyAPIKey;
var axios = require('axios');

server.get('/weather/:lat,:lon', function(request, response){
var lat = request.params.lat;
var lon = request.params.lon;
  //code
  //go take a look at the bottom of sandbox.js
  var url = `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`;
  axios.get(url)
    .then(function(results){
      response.send(results.data);
    })
    .catch(function(err){
      response.send(err);
    });

});

server.listen(port, function(){
  console.log('Now listening on port ...', port);
});
