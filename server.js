var http = require('http');
var url = require('url');


var server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;


  if(path === '/time'){
    var timeNow = new Date(Date.now()).toISOString();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(timeNow);
    res.end();
  }

  else if (path.substring(0, 6) === '/greet'){
    if (req.method === 'GET'){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Hi there, ' + path.substring(7, path.length));
      res.end();
    }
    else if (req.method === 'POST'){
      var name = '';
      req.on('data', function(data) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        body = JSON.parse(data.toString()).name;
        res.write('Hello there '+body+'. How are you doing?');
        res.end();
      });
    }
  }
});

module.exports = server;
