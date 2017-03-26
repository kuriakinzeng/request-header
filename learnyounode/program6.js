var printDir = require('./program5.js');
printDir(process.argv[2],process.argv[3],function(err,data){
    data.forEach(function(x){
      console.log(x); 
    });
});