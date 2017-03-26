var http = require('http')
var tmap = require('through2-map')

var server = http.createServer(function(req,res){
    // console.log(req.method)
    if(req.method != 'POST')
        return res.end('send me a POST\n')
    
    req.pipe(tmap(function(chunk){
        return chunk.toString().toUpperCase()
    })).pipe(res)

})
server.listen(Number(process.argv[2]))