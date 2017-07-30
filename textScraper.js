var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
module.exports = {}


let scrapeThis = 'https://stackoverflow.com/questions/10805125/how-to-remove-all-line-breaks-from-a-string'

// pull all the text from the page

var allText = [];
request(scrapeThis, function(err,resp,body){

   var $ = cheerio.load(body);

   var regexCharcodes = /(&([^>]+);)/ig




var scrapeElement = function(element, array){
  $('element').each(function(index){
    array.push($(this).html())
  })
}

// first the h1s

var h1s = [];
$('h1').each(function(index){
  h1s.push($(this).html())
  for(var i = 0; i < h1s.length; i++){
    h1s[i] = h1s[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }


})
console.log(h1s)


// now h2s
var h2s = [];
$('h2').each(function(index){
  h2s.push($(this).html())

  for(var i = 0; i < h2s.length; i++){
    h2s[i] = h2s[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }




})
 console.log(h2s)


//h3s
var h3s = [];
$('h3').each(function(index){
  h3s.push($(this).html())
  for(var i = 0; i < h3s.length; i++){
    h3s[i] = h3s[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(h3s)
//h4s
var h4s = [];
$('h4').each(function(index){
  h4s.push($(this).html())
  for(var i = 0; i < h4s.length; i++){
    h4s[i] = h4s[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(h4s)
//h5s
var h5s = [];
$('h5').each(function(index){
  h5s.push($(this).html())
  for(var i = 0; i < h5s.length; i++){
    h5s[i] = h5s[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(h5s)
//h6s
var h6s = [];
$('h6').each(function(index){
  h6s.push($(this).html())
  for(var i = 0; i < h6s.length; i++){
    h6s[i] = h6s[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(h6s)
//lis
var lis = [];
$('li').each(function(index){
  lis.push($(this).html())
  for(var i = 0; i < lis.length; i++){
    lis[i] = lis[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(lis)
//bs
var bs = [];
$('b').each(function(index){
  bs.push($(this).html())
  for(var i = 0; i < bs.length; i++){
    bs[i] = bs[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(bs)
//is
var is = [];
$('i').each(function(index){
  is.push($(this).html())
  for(var i = 0; i < is.length; i++){
    is[i] = is[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(is)
//ps
var ps = [];
$('p').each(function(index){
  ps.push($(this).html())
  for(var i = 0; i < ps.length; i++){
    ps[i] = ps[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(ps)
//centerss
var centers = [];
$('center').each(function(index){
  centers.push($(this).html())
  for(var i = 0; i < centers.length; i++){
    centers[i] = centers[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(centers)
// ems
console.log(ems)
var ems = [];
$('em').each(function(index){
  ems.push($(this).html())
  for(var i = 0; i < ems.length; i++){
    ems[i] = ems[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(ems)
// pres
var pres = [];
$('pre').each(function(index){
  pres.push($(this).html())
  for(var i = 0; i < pres.length; i++){
    pres[i] = pres[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(pres)
// strongs
var strongs = [];
$('strong').each(function(index){
  strongs.push($(this).html())
  for(var i = 0; i < strongs.length; i++){
    strongs[i] = strongs[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(strongs)
// us
var us = [];
$('u').each(function(index){
  us.push($(this).html())
  for(var i = 0; i < us.length; i++){
    us[i] = us[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(us)



// tables
var tables = [];
$('table').each(function(index){
  tables.push($(this).text())
  for(var i = 0; i < tables.length; i++){
    tables[i] = tables[i].replace((/(<([^>]+)>)/ig), " ").replace(regexCharcodes, " ").replace((/\r?\n|\r/g), " ").replace("/", " ").replace("\\", "")
  }
})
console.log(tables)

// 2end of request/cheerio
});
