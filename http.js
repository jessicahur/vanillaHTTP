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

    else if (path.substring(0, 6) === '/greet'){
      if (req.method === 'GET'){
        res.write('Hi there, ' + path.substring(7, path.length));
        res.end();
      }
      else if (req.method === 'POST'){
        var name = '';
        req.on('data', function(data) {
          body = JSON.parse(data.toString()).name;
          res.write('Hello there '+body+'. How are you doing?');
          res.end();
        });
      }
    }
  });

  server.listen(9000, function(){
    console.log('Server started. Listening on port 9000...');
  });
}

var db = [];
simpleHttp(db);
// module.exports = simpleHttp;
