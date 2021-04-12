var http = require('http');
var sIme = "Duro Belacic";
http.createServer(function (req, res) {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write(sIme);
res.end();
}).listen(8008);