
var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, { 'Content-Type': 'text/plain' });
const read = require('fs');
read.readFile('./osobe.json', 'utf8', (err, jsonString)=>{
    if(err)
    {
        console.log("Greska: ", err)
        return
    }
    
    res.write(jsonString);
    res.end();
})

}).listen(8000);
