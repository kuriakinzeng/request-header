var http = require('http')
var url = require('url')

var server = http.createServer(function(req,res){
    var reqUrl = url.parse(req.url)
    var time = new Date(reqUrl.query.iso) // returns XXX from query in ?iso=XXX format
    if (reqUrl.pathname == '/api/parsetime'){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({"hour":time.getHours(),"minute":time.getMinutes(),"second":time.getSeconds()}))
    }
    if (reqUrl.pathname == '/api/unixtime'){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({"unixtime":time.getTime() }))
    }
    res.writeHead(404)
    res.end('Invalid API\n')
})
server.listen(Number(process.argv[2]))