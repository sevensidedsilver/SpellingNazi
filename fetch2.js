var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var Twitter = require('twitter');
var path = require('path')

var client = new Twitter({
  consumer_key: 'cM5SmKLDLPmL6nJAitVU9AF0C',
  consumer_secret: "AvblNAy8x9myK9dYQshnmYUACQRD6QkeDWrp8GT0778dCY32t5",
  access_token_key: '864965759390199808-1SSBQ13Gm0z3I7buo8DHR1SAo1gMIhX',
  access_token_secret: "mPxeRTRAr1x6bMRNWn3gj5NaFTIOwNJMJRC4k04xtlorU"
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


// this right here loops through the users from the search page
// makes an API request, and gets their
for (var i = 0; i < userArray.length; i++) {
  var params = {screen_name: userArray[i]};
  client.get('users/lookup', params, function(error, users, response) {
    if (!error) {
      console.log(users[0].url);
    } else {console.log(error)}
  });

}



 //this concludes the first request function!
 });



  app.listen('8081')



  exports = module.exports = app;


}

userScrape();
