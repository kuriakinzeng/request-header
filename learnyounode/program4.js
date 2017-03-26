var fs = require('fs');
fs.readFile(process.argv[2],function(err, f){
  console.log(f.toString().split('\n').length-1);  
});
