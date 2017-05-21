var request = require("request");
const rp = require('request-promise')


var oldUrl = "https://t.co/xT280k8S9l";


const expandUrl = function (shortUrl) {
    rp( { method: "HEAD", url: shortUrl, followAllRedirects: true });
    return request.href
}


var newURL = expandUrl(oldUrl)
console.log(newURL)








// var add = function(num){
//   return num + 5;
// }
//
// var newNumber = add(5);
// console.log(newNumber)
