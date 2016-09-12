'use strict';

// user require with a reference to bundle the file and use it in this file
// let example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

//https://developers.google.com/api-client-library/javascript/samples/samples#LoadinganAPIandMakingaRequest
// function appendResults(text) {
//         let results = document.getElementById('results');
//         results.appendChild(document.createElement('P'));
//         results.appendChild(document.createTextNode(text));
//       }
//
// function makeRequest() {
//   let request = gapi.client.urlshortener.url.get({
//     'shortUrl': 'http://goo.gl/fbsS'
//   });
//
//   request.then(function(response) {
//     appendResults(response.result.longUrl);
//   }, function(reason) {
//     console.log('Error: ' + reason.result.error.message);
//   });
// }
//
// function init() {
//   gapi.client.setApiKey('AIzaSyDWFafdDL7lofPzZPLY3RuTmacbQ3W13jk');
//   gapi.client.load('urlshortener', 'v1').then(makeRequest);
// }
//
// gapi.load('client', init);
