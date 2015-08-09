var http = require('http');

var server = http.createServer( function(req, res){
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end("Hello!");

}).listen(3000, '127.0.0.1');

module.exports = server;
