var axios = require('axios');
var apiKey = require('./secrets').darkskyAPIKey;
console.log(apiKey);
var url = `https://api.darksky.net/forecast/${apiKey}1fad293f7d4a6db586679caf8ea11720/37.8267,-122.4233`;
//var cheese = require('./sampleModule');
//console.log(cheese);

//sample.b();
//sample.a();


// var promiseOfData = axios.get(url);
// promiseOfData
//     .then(function(response){
//       console.log(response.data);
//     })  //success
//     .catch(function(err){
//       console.log(err);
//     });  //failure or error


 axios.get(url)
   .then(function(response){
     return response.data;
   })
   .then(function(data){
     console.log(data);
   })
   .catch(function(err){
     console.log(err);
   });
