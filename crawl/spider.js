var request = require('request');
var cheerio = require('cheerio');
var rp = require('request-promise')

let masterLinkList = []
let crawlThis = "http://reacttraining.com"
var internalLinks =[]

var scrapeLinks = (scrapeMe) => {
  console.log(`our seed url is ${scrapeMe}`)

  // get the page to be scraped
  rp(scrapeMe, (err,resp,body) => {
      let $ = cheerio.load(body);


      $("a").each(function() {
        // Zelda, or is it Link?  :P
        let zelda = $(this).attr().href
        console.log(zelda)
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



  // end of request
}).then(()=> {

console.log(internalLinks)



// end of .then
})





// end of scrapeLinks definition
}
scrapeLinks(crawlThis)
