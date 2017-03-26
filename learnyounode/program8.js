var http = require('http')
// var bl = require("bl")
// var cs = require("concat-stream")
http.get(process.argv[2],function(response){
  response.setEncoding('utf8')
  response.on("data",function(data){
    dataCollected.push(data)
  })
  response.on('end', function(){
    console.log(dataCollected.join("").length)
    console.log(dataCollected.join(""))
  })
  // response.pipe(bl(function (err, data) {
  //   if (err) {
  //     return console.error(err)
  //   }
  //   data = data.toString()
  //   console.log(data.length)
  //   console.log(data)
  // }))
  response.on('error', console.error)
}).on('error',console.error)