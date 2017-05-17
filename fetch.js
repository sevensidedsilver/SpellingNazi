var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var Twitter = require('twitter-node-client').Twitter;
var path = require('path')

var client = new Twitter({
  consumer_key: 'HtcCOM2iRa1k7ddA6WsvxlBYF',
  consumer_secret: "JgAzu9BGZqEVsJEUWMRk17ioYRu1719vEPl4XZBEtkaRn1VeCH",
  access_token_key: '841412892612284421-nLq8JoTUSzFslnm9yb1X0LTPpmMxMjM',
  access_token_secret: "Mr7d1beViZsJZeWYaZAfSi4X8xUAIuSauWQb4E8IceQ0x"
});
// How we know our API works!
var params = {screen_name: 'shifkey'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } else {console.log(error)}
});


var userScrape = function() {
  //userURLs will be an array with the URLs to the twitter accounts we want to pull websites to spellcheck from
  var userURLs = [];
  //this array will contain all of the websites pulled from the individual twitter accounts
  var userSites = [];

  //new approach
  var userObjects = [];

  //fetches URL and loads DOM interface with cheerio
  var url = 'https://twitter.com/search?f=tweets&vertical=default&q=javascript&src=typd';
  request(url, function(err,resp,body){
    var $ = cheerio.load(body);


    var userArray = [];

    //creates an array listing usernames
    $( ".username b" ).each(function( index ) {
    userArray.push($( this ).text() );

    //this line of code removes the empty values from our userArray
    userArray = userArray.filter(String);

  });


// for (var i = 0; i < userArray.length; i++){
//   var params = {screen_name: userArray[i]};
//   client.get('users/lookup', params, function(error, users, response) {
//     if (!error) {
//       console.log(users[i].url);
//     } else {console.log(error)}
//   });
//
//
// }


  //now we add the username to the rest of the URL to get a list of twitter user URLs
  // for (i = 0; i < userArray.length; i ++) {
  // 	userURLs.push('http://twitter.com/' + userArray[i]);
  // }
  //
  //
  // console.log(userURLs)


 //this concludes the first request function!
 });



  app.listen('8081')



  exports = module.exports = app;


}

userScrape();
