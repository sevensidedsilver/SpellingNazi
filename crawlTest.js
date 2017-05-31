var request = require('request');
var cheerio = require('cheerio');
var rp = require('request-promise')

var internalLinks = [];

let scrapeThis = 'http://www.devmountain.com/'

var scrapeLinks = function(scrapeThis){
  if (scrapeThis.endsWith('/')){
    scrapeThis = scrapeThis.substring(0, scrapeThis.length - 1);
  }
  rp(scrapeThis, function(err,resp,body){
     var $ = cheerio.load(body);
     $("a").each(function() {
      internalLinks.push($(this).attr().href);
      })
      //console.log(internalLinks)
      return internalLinks

// end of request
  })
  .then(function(){

    for (var i = 0; i < internalLinks.length; i++){
      // add the domain name to internal links
      if (typeof internalLinks[i] == 'string' && internalLinks[i].startsWith('/')) {
        internalLinks[i] = scrapeThis + internalLinks[i]
          }

        if (typeof internalLinks[i] === 'undefined'){
          internalLinks.splice(internalLinks.indexOf(internalLinks[i], i), 1)
          i--
        }

      if (!internalLinks[i].startsWith(scrapeThis)){
        internalLinks.splice(internalLinks.indexOf(internalLinks[i], i), 1)
        i--
      }
        }
    console.log(internalLinks)
  })
}
scrapeLinks(scrapeThis)
