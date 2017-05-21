var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

let scrapeThis = 'http://www.algoworks.com/'

// pull all the text from the page
request(scrapeThis, function(err,resp,body){
   var $ = cheerio.load(body);
   var h2s = [];
   $('h2').each(function(index){
     h2s.push($(this).text())

   })
   console.log(h2s)
});


// find all the links on a page
// var userNames = []
// request(scrapeThis, function(err,resp,body){
//   var $ = cheerio.load(body);
//   var links = [];
//   $('a').each(function( index ) {
//     userNames.push($(this).text())
//     });
//
//   console.log(userNames)




// end of cheerio / request

// });
// end of seed
