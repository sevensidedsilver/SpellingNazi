var request = require('request');
var cheerio = require('cheerio');
var rp = require('request-promise')

var internalLinks = [];

let scrapeThis = 'http://kentcdodds.com/'

var scrapeLinks = function(scrapeThis){
  if (scrapeThis.endsWith('/')){
    scrapeThis = scrapeThis.substring(0, scrapeThis.length - 1);
  }
  rp(scrapeThis, function(err,resp,body){
     var $ = cheerio.load(body);

     $("a").each(function() {
       // Zelda, or is it Link?  :P
       let zelda = $(this).attr().href

      // cut any element IDs from the href
      if (typeof zelda == 'string' && zelda.includes("#")){
        let cut = zelda.indexOf("#")
        zelda = zelda.substring(0, cut)
      }

      //only add the link if it's not in the array (indexOf -1)
      if (internalLinks.indexOf(zelda) === -1){
        internalLinks.push(zelda);
      }

      })
      //console.log(internalLinks)
      return internalLinks

// end of request
  })
  .then(function(){
// polishing the data a bit
    for (var i = 0; i < internalLinks.length; i++){
      // add the domain name to internal links (links starting with '/')
      if (typeof internalLinks[i] == 'string' && internalLinks[i].startsWith('/')) {
        internalLinks[i] = scrapeThis + internalLinks[i]
          }
      //remove non-linking hrefs
        if (typeof internalLinks[i] === 'undefined'){
          internalLinks.splice(internalLinks.indexOf(internalLinks[i], i), 1)
          i--
        }
      // remove any links that don't start with the original scrapethis link
      if (!internalLinks[i].startsWith(scrapeThis)){
        internalLinks.splice(internalLinks.indexOf(internalLinks[i], i), 1)
        i--
      }



        }
        console.log (internalLinks)
   })

}

scrapeLinks(scrapeThis)
