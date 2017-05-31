var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

let scrapeThis = 'https://devmountain.com/'

// pull all the text from the page
request(scrapeThis, function(err,resp,body){

   var $ = cheerio.load(body);

// first the h1s
var h1s = [];
$('h1').each(function(index){
  h1s.push($(this).text())

})
console.log(h1s)
// now h2s
var h2s = [];
$('h2').each(function(index){
  h2s.push($(this).text())

})
console.log(h2s)
//h3s
var h3s = [];
$('h3').each(function(index){
  h3s.push($(this).text())

})
console.log(h3s)
//h4s
var h4s = [];
$('h4').each(function(index){
  h4s.push($(this).text())

})
console.log(h4s)
//h5s
var h5s = [];
$('h5').each(function(index){
  h5s.push($(this).text())

})
console.log(h5s)
//h6s
var h6s = [];
$('h6').each(function(index){
  h6s.push($(this).text())

})
console.log(h6s)
//lis
var lis = [];
$('li').each(function(index){
  lis.push($(this).text())

})
console.log(lis)
//bs
var bs = [];
$('b').each(function(index){
  bs.push($(this).text())

})
console.log(bs)
//is
var is = [];
$('i').each(function(index){
  is.push($(this).text())

})
console.log(is)
//ps
var ps = [];
$('p').each(function(index){
  ps.push($(this).text())

})
console.log(ps)
//centerss
var centers = [];
$('center').each(function(index){
  centers.push($(this).text())

})
console.log(centers)
// ems
console.log(ems)
var ems = [];
$('em').each(function(index){
  ems.push($(this).text())

})
console.log(ems)
// pres
var pres = [];
$('pre').each(function(index){
  pres.push($(this).text())

})
console.log(pres)
// strongs
var strongs = [];
$('strong').each(function(index){
  strongs.push($(this).text())

})
console.log(strongs)
// us
var us = [];
$('u').each(function(index){
  us.push($(this).text())

})
console.log(us)

//end of request/cheerio
});







// end of cheerio / request

// });
// end of seed
