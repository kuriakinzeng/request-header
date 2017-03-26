var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req,res){
    res.writeHead(200, { 'content-type': 'text/plain' }) // didn't do this
    fs.createReadStream(process.argv[3]).pipe(res) //pipe to destination
})
server.listen(Number(process.argv[2]))