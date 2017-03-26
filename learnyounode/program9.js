var http = require('http')
var bl = require("bl")
var results = []
var count = 0

var getUrl = function(index){
  http.get(process.argv[index+2],function(response){
    response.pipe(bl(function(err,data){
      if(err)
        return console.error(err)
      results[index] = data.toString()
      count++
      
      if(count == 3){
        results.forEach(function(r){
          console.log(r)
        })
      }
        
    }))
  })
}

for (var i=0; i<3; i++){
  getUrl(i);
}