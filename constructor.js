var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var Twitter = require('twitter');
var path = require('path')
const rp = require('request-promise')
var Twit = require('twit')

var nodeUrlExpand = require('node-url-expand');


var client = new Twitter({
  consumer_key: 'cM5SmKLDLPmL6nJAitVU9AF0C',
  consumer_secret: "AvblNAy8x9myK9dYQshnmYUACQRD6QkeDWrp8GT0778dCY32t5",
  access_token_key: '864965759390199808-1SSBQ13Gm0z3I7buo8DHR1SAo1gMIhX',
  access_token_secret: "mPxeRTRAr1x6bMRNWn3gj5NaFTIOwNJMJRC4k04xtlorU"
});

// var T = new Twit({
//   consumer_key: 'cM5SmKLDLPmL6nJAitVU9AF0C',
//   consumer_secret: "AvblNAy8x9myK9dYQshnmYUACQRD6QkeDWrp8GT0778dCY32t5",
//   access_token: '864965759390199808-1SSBQ13Gm0z3I7buo8DHR1SAo1gMIhX',
//   access_token_secret: "mPxeRTRAr1x6bMRNWn3gj5NaFTIOwNJMJRC4k04xtlorU"
// })

//this will contain our array of user objects
var userObjects = [];

//Here's our constructor function, a new object for every username we encounter :D
function newUser(userName, url, checked){
  this.userName = userName;
  this.url = url;
  this.checked = checked;
}

//this will contain our usernames
var userNames = [];

// url expander
// var expandUrl = function (shortUrl) {
//     return request ( { method: "HEAD", url: shortUrl, followAllRedirects: true },
//         (function (error, response) {
//           return (response.request.href);
//         }));
// }




//first, let's get the usernames from the search page for 'javascript'
var seed = function(){

var url = 'https://twitter.com/search?f=tweets&vertical=default&q=javascript&src=typd';
request(url, function(err,resp,body){
  var $ = cheerio.load(body);
  $( ".username b" ).each(function( index ) {
    userNames.push($(this).text())
    });
    userNames = userNames.filter(String);

// loop through those usernames, run the constructor, and push the object to our userObjects
    for (var i = 0; i < userNames.length; i++){
      let userName = userNames[i];
      let params = {screen_name: userName};
      client.get('users/lookup', params, function(error, users, response) {
        if (!error) {

            if (users[0].url === null) {
              let newObj = new newUser(users[0].screen_name, users[0].url, 0);
              userObjects.push(newObj);
              console.log(newObj)

            } else {
              let expandThis = users[0].url
              expandThis.toString();

              nodeUrlExpand(expandThis, function (err, url) {

                let expanded = (url);

                let newObj = new newUser(users[0].screen_name, expanded, 0);
                userObjects.push(newObj);
                console.log(newObj)


              });


            }







            //original working no expansion
            // let newObj = new newUser(users[0].screen_name, users[0].url, 0);
            // userObjects.push(newObj);
            // console.log(newObj)
        } else {console.log(error)}
      });
    }
// end of cheerio / request

});
// end of seed

}
seed();




//this is the schema for an API hit
// var params = {screen_name: 'shifkey'};;
// client.get('users/lookup', params, function(error, users, response) {
//   if (!error) {
//     console.log(response)
//   } else {console.log(error)}
// });
