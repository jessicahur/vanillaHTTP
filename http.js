var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  if(path === '/time'){
    var timeNow = new Date(Date.now()).toISOString();
    console.log(timeNow);
    res.write(timeNow);
    res.end();
  }
  else if (path.substring(0, 7) === '/greet/' && req.method === 'GET'){
    res.write('Hi there, ' + path.substring(7, path.length));
    res.end();
  }
});

server.listen(9000);
