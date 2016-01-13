var http = require('http');
var url = require('url');

function simpleHttp (db) {
  var server = http.createServer(function(req, res) {
    var path = url.parse(req.url).pathname;


    if(path === '/time'){
      var timeNow = new Date(Date.now()).toISOString();
      res.write(timeNow);
      res.end();
    }

    else if (path.substring(0, 7) === '/greet/' && req.method === 'GET'){
      res.write('Hi there, ' + path.substring(7, path.length));
      res.end();
    }

    else if (path.substring(0, 7) === '/greet/' && req.method === 'POST'){
      var nameVal = path.substring(7, path.length);
      console.log(nameVal);
      db.push({name: nameVal});
      res.write(JSON.stringify(db));
      res.end();
    }
  });

  server.listen(9000);
}

module.exports = simpleHttp;
