'use strict';

var http = require('http');
var url = require('url');

var expandUrl = function (shorturl, cb) {

  var parseUrl = url.parse(shorturl);

  return http.get({
    host: parseUrl.host,
    path: parseUrl.pathname
  }, function(response) {

    var output = response.headers;

    // explicitly treat incoming data as utf8 (avoids issues with multi-byte chars)
    response.setEncoding('utf8');

    // incrementally capture the incoming response body
    var body = '';
    response.on('data', function(d) {
        body += d;
    });

    response.on('end', function() {
      
      try {
        var outputUrl = url.parse(output.location);
      } catch (err) {
        return cb(err);
      }

      // pass the relevant data back to the callback
      cb(null, outputUrl.protocol + '//' + outputUrl.host + outputUrl.pathname);

    });

  }).on('error', function(err) {
    cb(err);
  });
}

module.exports = expandUrl;
