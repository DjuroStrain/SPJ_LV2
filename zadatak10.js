
function dajSlucajanBroj(nMin, nMax)
{
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
}

var aBrojevi = [];
for(var i = 0; i < 10; i++)
{
    var broj = dajSlucajanBroj(10, 100);
    aBrojevi.push(broj);
    console.log(broj);
}

var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, { 'Content-Type': 'text/html' });
for(var i = 0; i < aBrojevi.length; i++)
{
    res.write(String(aBrojevi[i]+"<br>"));
}
res.end();
}).listen(8000);


