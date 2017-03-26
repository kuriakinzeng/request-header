var express = require('express')
var app = express()

// {"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
// "accept-encoding":"gzip, deflate, sdch, br","accept-language":"en-US,en;q=0.8,es;q=0.6,ja;q=0.4,id;q=0.2,zh-TW;q=0.2,zh;q=0.2,zh-CN;q=0.2",
//"x-forwarded-proto":"https","x-forwarded-port":"443","x-region":"ae","x-forwarded-for":"121.7.102.166","connection":"keep-alive"}
// {"ipaddress":"121.7.102.166","language":"en-US","software":"Macintosh; Intel Mac OS X 10_12_3"}
app.get('/',function(req,res){
    var headers = {
        'ipaddress': null,
        'language': null,
        'software': null,
    };
    
    for (var k in req.headers){
        if(k == 'x-forwarded-for')
            headers.ipaddress = req.headers[k]
        if(k == 'user-agent')
            headers.software = req.headers[k].replace(/[()]/gi,"*").split('*')[1]
        if(k == 'accept-language')
            headers.language = req.headers[k].split(',')[0]
    }
    res.json(headers);
})

app.listen(8080);